import hashlib
import json
import math
import os
import socket
import sqlite3
import struct
from contextlib import asynccontextmanager
from datetime import datetime, timezone
from pathlib import Path
from typing import Any, Dict, List

import psutil
import sqlite_vec
from fastapi import FastAPI, HTTPException, Query
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, Field

DB_PATH = Path(os.getenv("SQLITE_DB_PATH", "/data/pulumi_state_audit.db"))
EMBEDDING_DIM = 64

def deterministic_hash_embedding(text: str, dim: int = EMBEDDING_DIM) -> List[float]:
    vec = [0.0] * dim
    tokens = text.lower().split()
    if not tokens: return vec
    for tok in tokens:
        digest = hashlib.sha256(tok.encode("utf-8")).digest()
        for i in range(dim):
            b = digest[i % len(digest)]
            sign = 1.0 if (b & 1) == 0 else -1.0
            vec[i] += sign * ((b / 255.0) + 0.1)
    norm = math.sqrt(sum(v * v for v in vec))
    return [v / norm for v in vec] if norm > 0.0 else vec

def serialize_f32(vector: List[float]) -> bytes:
    return struct.pack(f"<{len(vector)}f", *vector)

def get_db_connection() -> sqlite3.Connection:
    DB_PATH.parent.mkdir(parents=True, exist_ok=True)
    conn = sqlite3.connect(str(DB_PATH), timeout=30.0, check_same_thread=False)
    conn.row_factory = sqlite3.Row
    conn.enable_load_extension(True)
    sqlite_vec.load(conn)
    conn.enable_load_extension(False)
    conn.execute("PRAGMA journal_mode=WAL;")
    conn.execute("PRAGMA synchronous=NORMAL;")
    conn.execute("PRAGMA busy_timeout=5000;")
    conn.execute("PRAGMA foreign_keys=ON;")
    return conn

def init_database() -> None:
    conn = get_db_connection()
    try:
        conn.executescript(f"""
            CREATE TABLE IF NOT EXISTS resource_snapshots (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                stack_name TEXT NOT NULL,
                urn TEXT NOT NULL,
                resource_type TEXT NOT NULL,
                vm_id INTEGER NOT NULL,
                memory_mb INTEGER NOT NULL,
                cores INTEGER NOT NULL,
                reboot_after_update INTEGER NOT NULL DEFAULT 1,
                ignore_disk_speed INTEGER NOT NULL DEFAULT 1,
                secret_provider TEXT NOT NULL DEFAULT 'infisical-sdk',
                state_json TEXT NOT NULL,
                created_at TEXT NOT NULL
            );

            CREATE VIRTUAL TABLE IF NOT EXISTS resource_fts USING fts5(
                stack_name,
                urn,
                resource_type,
                state_json,
                content='resource_snapshots',
                content_rowid='id'
            );

            CREATE TRIGGER IF NOT EXISTS resource_snapshots_ai AFTER INSERT ON resource_snapshots BEGIN
                INSERT INTO resource_fts(rowid, stack_name, urn, resource_type, state_json)
                VALUES (new.id, new.stack_name, new.urn, new.resource_type, new.state_json);
            END;

            CREATE VIRTUAL TABLE IF NOT EXISTS resource_vec USING vec0(
                snapshot_id INTEGER PRIMARY KEY,
                embedding float[{EMBEDDING_DIM}]
            );
        """)
        cursor = conn.execute("SELECT COUNT(*) AS cnt FROM resource_snapshots;")
        if cursor.fetchone()["cnt"] == 0:
            seed_payload = {"node": "prx-1", "template": "packer-ubuntu-2404-lts", "vlan": 20, "bridge": "vmbr1", "storage": "ceph-pool", "protect": True}
            seed_text = json.dumps(seed_payload)
            now_iso = datetime.now(timezone.utc).isoformat()
            cur = conn.execute(
                """
                INSERT INTO resource_snapshots
                (stack_name, urn, resource_type, vm_id, memory_mb, cores, reboot_after_update, ignore_disk_speed, secret_provider, state_json, created_at)
                VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
                """,
                ("prod", "urn:pulumi:prod::homelab::proxmoxve:index/vmLegacy:VmLegacy::server-prod-101", "proxmoxve:index/vmLegacy:VmLegacy", 7000, 6144, 4, 1, 1, "infisical-sdk", seed_text, now_iso),
            )
            row_id = cur.lastrowid
            emb = deterministic_hash_embedding(f"prod proxmoxve VmLegacy 7000 6144MB ceph-pool vlan20 {seed_text}")
            conn.execute("INSERT INTO resource_vec(snapshot_id, embedding) VALUES (?, ?)", (row_id, serialize_f32(emb)))
        conn.commit()
    finally:
        conn.close()

@asynccontextmanager
async def lifespan(app: FastAPI):
    init_database()
    yield

app = FastAPI(title="Pulumi Homelab SQLite-Vec Backend", version="1.2.0", lifespan=lifespan)
app.add_middleware(CORSMiddleware, allow_origins=["*"], allow_credentials=False, allow_methods=["*"], allow_headers=["*"])

class SnapshotCreateRequest(BaseModel):
    stack_name: str = Field(default="dev", min_length=1, max_length=64)
    vm_id: int = Field(default=7001, ge=100, le=999999)
    memory_mb: int = Field(default=8192, ge=512, le=262144)
    cores: int = Field(default=4, ge=1, le=128)
    reboot_after_update: bool = True
    ignore_disk_speed: bool = True
    notes: str = Field(default="Provisioned via Pulumi Python SDK with Infisical secrets")

@app.get("/api/health")
def health_check() -> Dict[str, Any]:
    conn = get_db_connection()
    try:
        count = conn.execute("SELECT COUNT(*) AS cnt FROM resource_snapshots;").fetchone()["cnt"]
    finally:
        conn.close()
    return {"status": "ok", "backend_mode": "docker-sqlite-vec", "snapshot_count": count, "sqlite_version": sqlite3.sqlite_version}

@app.get("/api/snapshots")
def list_snapshots(limit: int = Query(default=25, ge=1, le=100)) -> List[Dict[str, Any]]:
    conn = get_db_connection()
    try:
        rows = conn.execute("SELECT id, stack_name, urn, resource_type, vm_id, memory_mb, cores, reboot_after_update, ignore_disk_speed, secret_provider, state_json, created_at FROM resource_snapshots ORDER BY id DESC LIMIT ?;", (limit,)).fetchall()
        return [dict(r) for r in rows]
    finally:
        conn.close()

@app.post("/api/snapshots")
def create_snapshot(req: SnapshotCreateRequest) -> Dict[str, Any]:
    urn = f"urn:pulumi:{req.stack_name}::homelab::proxmoxve:index/vmLegacy:VmLegacy::server-{req.stack_name}-{req.vm_id}"
    state_payload = {"vm_id": req.vm_id, "memory_mb": req.memory_mb, "cores": req.cores, "reboot_after_update": req.reboot_after_update, "ignore_changes": ["disks[0].speed"] if req.ignore_disk_speed else [], "notes": req.notes}
    state_str = json.dumps(state_payload)
    now_iso = datetime.now(timezone.utc).isoformat()

    conn = get_db_connection()
    try:
        cur = conn.execute(
            """
            INSERT INTO resource_snapshots
            (stack_name, urn, resource_type, vm_id, memory_mb, cores, reboot_after_update, ignore_disk_speed, secret_provider, state_json, created_at)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
            """,
            (req.stack_name, urn, "proxmoxve:index/vmLegacy:VmLegacy", req.vm_id, req.memory_mb, req.cores, 1 if req.reboot_after_update else 0, 1 if req.ignore_disk_speed else 0, "infisical-sdk", state_str, now_iso),
        )
        row_id = cur.lastrowid
        emb = deterministic_hash_embedding(f"{req.stack_name} {urn} {req.memory_mb}MB {req.cores}cores {req.notes}")
        conn.execute("INSERT INTO resource_vec(snapshot_id, embedding) VALUES (?, ?)", (row_id, serialize_f32(emb)))
        conn.commit()
        return {"id": row_id, "urn": urn, "created_at": now_iso}
    finally:
        conn.close()

@app.get("/api/search")
def hybrid_search(q: str = Query(..., min_length=1, max_length=256)) -> Dict[str, Any]:
    query_vec = deterministic_hash_embedding(q)
    conn = get_db_connection()
    try:
        vec_rows = conn.execute(
            """
            SELECT v.snapshot_id, v.distance, s.stack_name, s.urn, s.vm_id, s.memory_mb, s.cores, s.state_json, s.created_at
            FROM resource_vec v JOIN resource_snapshots s ON s.id = v.snapshot_id
            WHERE v.embedding MATCH ? AND k = 5
            ORDER BY v.distance ASC
            """,
            (serialize_f32(query_vec),),
        ).fetchall()

        safe_fts = "".join(ch if ch.isalnum() or ch.isspace() else " " for ch in q).strip()
        fts_rows = []
        if safe_fts:
            fts_rows = conn.execute(
                """
                SELECT s.id, s.stack_name, s.urn, s.vm_id, s.memory_mb, s.cores, s.state_json, bm25(resource_fts) AS rank
                FROM resource_fts JOIN resource_snapshots s ON s.id = resource_fts.rowid
                WHERE resource_fts MATCH ?
                ORDER BY rank ASC
                LIMIT 5
                """,
                (safe_fts,),
            ).fetchall()

        return {"query": q, "vector_matches": [dict(r) for r in vec_rows], "lexical_fts5_matches": [dict(r) for r in fts_rows]}
    finally:
        conn.close()
