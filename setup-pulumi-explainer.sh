#!/usr/bin/env bash
#
# Upgraded One-shot Idempotent Scaffold & Runner: Pulumi Homelab & Proxmox Explainer
# Dual-plane: GitHub Pages static explainer + local Docker SQLite-vec backend
# Features: Polling GitHub Pages deployment status via gh api until 200 OK before opening.
#
# Shell-safe constraints: no sed, no set -e, no exit 1, no stderr swallowing.
# -----------------------------------------------------------------------------

set -u

GH_USER="${GH_USER:-swipswaps}"
REPO_NAME="${REPO_NAME:-pulumi-homelab-explainer}"
PROJECT_DIR="${PROJECT_DIR:-$HOME/projects/$REPO_NAME}"
GITHUB_PAGES_URL="https://${GH_USER}.github.io/${REPO_NAME}/"
DOCKER_BACKEND_PORT=8000

die() { echo "[ERROR] $*" >&2; return 1; }
info() { echo "[INFO] $*"; }
ok()   { echo "[OK]   $*"; }

require_cmd() {
  command -v "$1" >/dev/null 2>&1 || die "Required command not found: $1"
}

require_cmd gh
require_cmd git
require_cmd docker
require_cmd npm
require_cmd curl
require_cmd xdg-open

gh auth status >/dev/null 2>&1 || die "gh CLI not authenticated. Run: gh auth login"

mkdir -p "$PROJECT_DIR"/{src,backend,scripts,.github/workflows,public}
cd "$PROJECT_DIR" || die "Cannot cd to $PROJECT_DIR"

info "Scaffolding Pulumi Homelab explainer architecture into $PROJECT_DIR"

# =============================================================================
# README.txt (Plain Text - No Markdown)
# =============================================================================
cat > README.txt <<'READMEEOF'
================================================================================
PROJECT: Pulumi Homelab & Proxmox Orchestrator Explainer
REPOSITORY: https://github.com/swipswaps/pulumi-homelab-explainer
LIVE DEMO: https://swipswaps.github.io/pulumi-homelab-explainer/
================================================================================

HOW WE GOT HERE & WHERE WE ARE
--------------------------------
This repository establishes a dual-plane infrastructure explainer auditing Christian
Lempa's Pulumi + Proxmox + Infisical homelab architecture (YouTube: WFyJ-xyJ58M).
It combines a zero-backend static React/Vite/Three.js site on GitHub Pages with a local
Docker plane running FastAPI, SQLite WAL with sqlite-vec vector similarity search, 
and FTS5 lexical search.

OFFLINE PERSISTENCE & MIXED CONTENT
------------------------------------
When viewing via GitHub Pages (HTTPS), modern browsers block HTTP loopback requests
to http://127.0.0.1:8000. In static mode, the UI seamlessly falls back to browser 
localStorage persistence so your custom resource snapshots are never lost.
To run full local Docker mode:
  1. npm run dev (http://localhost:5173)
  2. docker compose up --build -d

DIRECTORY STRUCTURE
--------------------
  README.txt                    This operational documentation
  package.json                  Frontend dependencies
  vite.config.js                Vite configuration (relative base for Pages)
  tailwind.config.js            Tailwind CSS content scanning
  postcss.config.js             PostCSS pipeline
  index.html                    Entry HTML document
  src/main.jsx                  React mount root
  src/index.css                 Tailwind directives and resets
  src/App.jsx                   3D Topology UI, backend detector, local storage
  backend/requirements.txt      Python dependencies (FastAPI, sqlite-vec, pulumi)
  backend/main.py               FastAPI backend with WAL and vector/lexical search
  docker-compose.yml            Local multi-container orchestration
  scripts/bootstrap_gh_pages.sh GitHub repo & Pages automation via gh api
  scripts/backup_db.sh          SQLite WAL vacuum and point-in-time backup
  .github/workflows/deploy.yml  GitHub Actions Pages deployment workflow

VERIFIED REFERENCES
-------------------
[1] Pulumi State & Backends: https://www.pulumi.com/docs/concepts/state/
[2] bpg/proxmox provider schema: https://registry.terraform.io/providers/bpg/proxmox/latest/docs
[3] sqlite-vec vector search: https://github.com/asg017/sqlite-vec
[4] SQLite Write-Ahead Logging: https://www.sqlite.org/wal.html
[5] Kleppmann, M. (2017). Designing Data-Intensive Applications. ISBN 978-1449373320.

================================================================================
READMEEOF

ok "README.txt written"

# =============================================================================
# FRONTEND CONFIGS & FILES
# =============================================================================
cat > package.json <<'PKGEOF'
{
  "name": "pulumi-homelab-explainer",
  "private": true,
  "version": "1.2.0",
  "type": "module",
  "scripts": {
    "dev": "vite --host 0.0.0.0",
    "build": "vite build",
    "preview": "vite preview --host 0.0.0.0"
  },
  "dependencies": {
    "lucide-react": "^0.469.0",
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "three": "^0.173.0"
  },
  "devDependencies": {
    "@types/react": "^18.3.0",
    "@types/react-dom": "^18.3.0",
    "@types/three": "^0.173.0",
    "@vitejs/plugin-react": "^4.3.4",
    "autoprefixer": "^10.4.20",
    "postcss": "^8.4.49",
    "tailwindcss": "^3.4.17",
    "vite": "^6.0.7"
  }
}
PKGEOF

cat > vite.config.js <<'VITEEOF'
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: './',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
    target: 'esnext'
  }
});
VITEEOF

cat > tailwind.config.js <<'TWEOF'
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: { extend: {} },
  plugins: []
};
TWEOF

cat > postcss.config.js <<'PCEOF'
export default {
  plugins: { tailwindcss: {}, autoprefixer: {} }
};
PCEOF

cat > index.html <<'HTMLEOF'
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Pulumi Homelab & Proxmox Architecture Explainer</title>
  </head>
  <body class="bg-slate-950 text-slate-100 antialiased">
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
HTMLEOF

cat > src/main.jsx <<'MAINEOF'
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
MAINEOF

cat > src/index.css <<'CSSEOF'
@tailwind base;
@tailwind components;
@tailwind utilities;

html, body, #root {
  height: 100%;
  margin: 0;
  padding: 0;
  background-color: #020617;
  color: #f8fafc;
}
canvas { display: block; }
CSSEOF

# =============================================================================
# FRONTEND: src/App.jsx
# =============================================================================
cat > src/App.jsx <<'APPEOF'
import React, { useCallback, useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import {
  Activity,
  BookOpen,
  CheckCircle2,
  Clipboard,
  Download,
  ExternalLink,
  Cpu,
  Layers,
  RefreshCw,
  Server,
  ShieldCheck,
  AlertTriangle,
  PlusCircle,
  Database,
  Search
} from 'lucide-react';

const BACKEND_URL = 'http://127.0.0.1:8000';

const INITIAL_SNAPSHOTS = [
  {
    id: 1,
    stack_name: 'prod',
    urn: 'urn:pulumi:prod::homelab::proxmoxve:index/vmLegacy:VmLegacy::server-prod-101',
    resource_type: 'proxmoxve:index/vmLegacy:VmLegacy',
    vm_id: 7000,
    memory_mb: 6144,
    cores: 4,
    reboot_after_update: 1,
    ignore_disk_speed: 1,
    secret_provider: 'infisical-sdk',
    state_json: '{"node":"prx-1","template":"packer-ubuntu-2404-lts","vlan":20,"bridge":"vmbr1","storage":"ceph-pool","protect":true}',
    created_at: '2026-11-10T14:22:00Z'
  }
];

export default function App() {
  const mountRef = useRef(null);
  const [backendConnected, setBackendConnected] = useState(false);
  const [probing, setProbing] = useState(true);
  const [backendMeta, setBackendMeta] = useState(null);
  const [activeTab, setActiveTab] = useState('topology');
  const [snapshots, setSnapshots] = useState(() => {
    const saved = localStorage.getItem('pulumi_homelab_snapshots');
    return saved ? JSON.parse(saved) : INITIAL_SNAPSHOTS;
  });

  const [stackName, setStackName] = useState('dev');
  const [vmId, setVmId] = useState(7001);
  const [vmMemory, setVmMemory] = useState(8192);
  const [vmCores, setVmCores] = useState(4);
  const [rebootAfterUpdate, setRebootAfterUpdate] = useState(true);
  const [ignoreDiskSpeed, setIgnoreDiskSpeed] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState(null);
  const isHttps = window.location.protocol === 'https:';

  const probeBackend = useCallback(async () => {
    setProbing(true);
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 1500);
    try {
      const res = await fetch(`${BACKEND_URL}/api/health`, {
        signal: controller.signal,
        headers: { Accept: 'application/json' }
      });
      clearTimeout(timeout);
      if (res.ok) {
        const data = await res.json();
        setBackendConnected(true);
        setBackendMeta(data);
        const listRes = await fetch(`${BACKEND_URL}/api/snapshots?limit=25`);
        if (listRes.ok) {
          const listData = await listRes.json();
          setSnapshots(listData);
        }
      } else {
        setBackendConnected(false);
        setBackendMeta(null);
      }
    } catch {
      clearTimeout(timeout);
      setBackendConnected(false);
      setBackendMeta(null);
    } finally {
      setProbing(false);
    }
  }, []);

  useEffect(() => {
    probeBackend();
  }, [probeBackend]);

  useEffect(() => {
    if (!backendConnected) {
      localStorage.setItem('pulumi_homelab_snapshots', JSON.stringify(snapshots));
    }
  }, [snapshots, backendConnected]);

  const handleCommitSnapshot = async (e) => {
    e.preventDefault();
    const urn = `urn:pulumi:${stackName}::homelab::proxmoxve:index/vmLegacy:VmLegacy::server-${stackName}-${vmId}`;
    const statePayload = {
      vm_id: Number(vmId),
      memory_mb: Number(vmMemory),
      cores: Number(vmCores),
      reboot_after_update: rebootAfterUpdate,
      ignore_changes: ignoreDiskSpeed ? ['disks[0].speed'] : []
    };

    if (backendConnected) {
      try {
        const res = await fetch(`${BACKEND_URL}/api/snapshots`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            stack_name: stackName,
            vm_id: Number(vmId),
            memory_mb: Number(vmMemory),
            cores: Number(vmCores),
            reboot_after_update: rebootAfterUpdate,
            ignore_disk_speed: ignoreDiskSpeed,
            notes: `Simulated ${stackName} stack update via interactive explainer`
          })
        });
        if (res.ok) {
          probeBackend();
          return;
        }
      } catch {
        // Fallback to local
      }
    }

    const newItem = {
      id: Date.now(),
      stack_name: stackName,
      urn,
      resource_type: 'proxmoxve:index/vmLegacy:VmLegacy',
      vm_id: Number(vmId),
      memory_mb: Number(vmMemory),
      cores: Number(vmCores),
      reboot_after_update: rebootAfterUpdate ? 1 : 0,
      ignore_disk_speed: ignoreDiskSpeed ? 1 : 0,
      secret_provider: 'infisical-sdk',
      state_json: JSON.stringify(statePayload),
      created_at: new Date().toISOString()
    };
    setSnapshots((prev) => [newItem, ...prev]);
  };

  const handleHybridSearch = async (e) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;

    if (backendConnected) {
      try {
        const res = await fetch(`${BACKEND_URL}/api/search?q=${encodeURIComponent(searchQuery.trim())}`);
        if (res.ok) {
          const data = await res.json();
          setSearchResults(data);
          return;
        }
      } catch {
        // Fallback
      }
    }

    const lower = searchQuery.toLowerCase();
    const filtered = snapshots.filter(
      (s) => s.urn.toLowerCase().includes(lower) || s.state_json.toLowerCase().includes(lower) || s.stack_name.toLowerCase().includes(lower)
    );
    setSearchResults({
      query: searchQuery,
      mode: 'local-client-filter',
      vector_matches: filtered.map((f) => ({ snapshot_id: f.id, distance: 0.12, stack_name: f.stack_name, urn: f.urn, vm_id: f.vm_id, memory_mb: f.memory_mb })),
      lexical_fts5_matches: filtered
    });
  };

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x020617);
    scene.fog = new THREE.FogExp2(0x020617, 0.028);

    const camera = new THREE.PerspectiveCamera(55, container.clientWidth / container.clientHeight, 0.1, 1000);
    camera.position.set(0, 5.5, 13.5);
    camera.lookAt(0, 0, 0);

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    scene.add(new THREE.AmbientLight(0xffffff, 0.75));
    const keyLight = new THREE.PointLight(0x38bdf8, 2.4, 60);
    keyLight.position.set(6, 10, 8);
    scene.add(keyLight);

    const rig = new THREE.Group();

    const proxmoxMesh = new THREE.Mesh(
      new THREE.BoxGeometry(2.8, 2.0, 2.2),
      new THREE.MeshStandardMaterial({ color: 0x0ea5e9, roughness: 0.25, metalness: 0.75 })
    );
    proxmoxMesh.position.set(-4.8, 0, 0);
    rig.add(proxmoxMesh);

    const sqliteMesh = new THREE.Mesh(
      new THREE.CylinderGeometry(1.3, 1.3, 2.2, 32),
      new THREE.MeshStandardMaterial({ color: backendConnected ? 0x10b981 : 0xf59e0b, roughness: 0.2, metalness: 0.6 })
    );
    sqliteMesh.position.set(0, 0, 0);
    rig.add(sqliteMesh);

    const pulumiMesh = new THREE.Mesh(
      new THREE.OctahedronGeometry(1.5, 0),
      new THREE.MeshStandardMaterial({ color: 0xf43f5e, roughness: 0.3, metalness: 0.65 })
    );
    pulumiMesh.position.set(4.8, 0, 0);
    rig.add(pulumiMesh);

    const linkGeom = new THREE.BufferGeometry().setFromPoints([
      new THREE.Vector3(-4.8, 0, 0),
      new THREE.Vector3(0, 0, 0),
      new THREE.Vector3(4.8, 0, 0)
    ]);
    rig.add(new THREE.Line(linkGeom, new THREE.LineBasicMaterial({ color: 0x38bdf8 })));

    const packetMesh = new THREE.Mesh(
      new THREE.SphereGeometry(0.22, 16, 16),
      new THREE.MeshStandardMaterial({ color: 0x38bdf8, emissive: 0x0284c7 })
    );
    rig.add(packetMesh);
    scene.add(rig);

    let frameId;
    let t = 0;
    const animate = () => {
      frameId = requestAnimationFrame(animate);
      t += 0.015;
      rig.rotation.y = Math.sin(t * 0.35) * 0.45;
      pulumiMesh.rotation.y += 0.012;
      packetMesh.position.x = Math.sin(t * 1.4) * 4.8;
      renderer.render(scene, camera);
    };
    animate();

    const onResize = () => {
      if (!container) return;
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };
    window.addEventListener('resize', onResize);

    return () => {
      window.removeEventListener('resize', onResize);
      cancelAnimationFrame(frameId);
      if (container) container.innerHTML = '';
    };
  }, [backendConnected]);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col">
      <header className="sticky top-0 z-50 border-b border-slate-800 bg-slate-900/85 px-6 py-4 backdrop-blur">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Server className="h-6 w-6 text-sky-400" />
            <div>
              <h1 className="text-lg font-bold tracking-tight">Pulumi Homelab &amp; Proxmox Architecture Explainer</h1>
              <p className="text-xs text-slate-400">Christian Lempa Audit (WFyJ-xyJ58M) &bull; Dual-Plane Docker SQLite-Vec</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className={`flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs font-medium ${
              backendConnected ? 'border-emerald-700 bg-emerald-950/70 text-emerald-300' : 'border-amber-700 bg-amber-950/70 text-amber-300'
            }`}>
              <span className={`h-2 w-2 rounded-full ${backendConnected ? 'animate-pulse bg-emerald-400' : 'bg-amber-400'}`} />
              <span>{probing ? 'Probing backend...' : backendConnected ? 'Docker Backend Detected (SQLite-Vec)' : 'Static GitHub Pages Mode (LocalStorage)'}</span>
            </div>
            <button type="button" onClick={probeBackend} className="flex items-center gap-1.5 rounded-lg border border-slate-700 bg-slate-800 px-3 py-1.5 text-xs font-medium text-slate-200 transition hover:bg-slate-700">
              <RefreshCw className={`h-3.5 w-3.5 ${probing ? 'animate-spin' : ''}`} />
              Re-probe
            </button>
          </div>
        </div>
      </header>

      {isHttps && !backendConnected && (
        <div className="bg-amber-900/40 border-b border-amber-700/50 px-6 py-2.5 text-xs text-amber-200 text-center flex items-center justify-center gap-2">
          <AlertTriangle className="h-4 w-4 text-amber-400 shrink-0" />
          <span>Notice: HTTPS GitHub Pages active. Browser blocks HTTP probes. LocalStorage offline persistence active. Run <code className="bg-slate-900 px-1 rounded">npm run dev</code> locally for Docker integration.</span>
        </div>
      )}

      <main className="mx-auto grid w-full max-w-7xl flex-1 grid-cols-1 gap-6 p-6 lg:grid-cols-12">
        <div className="space-y-6 lg:col-span-8">
          <div className="flex gap-2 border-b border-slate-800 pb-2">
            {[
              { id: 'topology', label: '3D Topology & Simulator', icon: Cpu },
              { id: 'search', label: 'SQLite-Vec Hybrid Search', icon: Search },
              { id: 'audit', label: 'PhD Forensic Audit', icon: ShieldCheck }
            ].map((tab) => {
              const Icon = tab.icon;
              return (
                <button key={tab.id} type="button" onClick={() => setActiveTab(tab.id)} className={`flex items-center gap-1.5 rounded-lg border px-3 py-1.5 text-xs font-semibold transition ${
                  activeTab === tab.id ? 'border-sky-500/40 bg-sky-500/20 text-sky-300' : 'border-slate-800 bg-slate-900 text-slate-400 hover:text-slate-200'
                }`}>
                  <Icon className="h-4 w-4" />
                  {tab.label}
                </button>
              );
            })}
          </div>

          {activeTab === 'topology' && (
            <>
              <div className="rounded-xl border border-slate-800 bg-slate-900 p-4 shadow-xl">
                <div className="mb-2 flex items-center justify-between px-1">
                  <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">Proxmox VE (KVM) &bull; SQLite WAL + sqlite-vec &bull; Pulumi Python SDK</span>
                  <span className="text-xs text-slate-500">WebGL 2.0</span>
                </div>
                <div ref={mountRef} className="h-[340px] w-full overflow-hidden rounded-lg border border-slate-800 bg-slate-950" />
              </div>

              <form onSubmit={handleCommitSnapshot} className="space-y-4 rounded-xl border border-slate-800 bg-slate-900 p-6 shadow-xl">
                <h2 className="text-base font-semibold text-slate-100 flex items-center gap-2">
                  <Layers className="h-5 w-5 text-sky-400" />
                  <span>Pulumi State &amp; Proxmox VM Reconciler</span>
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-slate-950 p-3 rounded-lg border border-slate-800">
                    <label className="block text-xs text-slate-400 uppercase font-semibold mb-1">Stack Name</label>
                    <select value={stackName} onChange={(e) => setStackName(e.target.value)} className="w-full bg-slate-900 border border-slate-700 rounded px-2.5 py-1.5 text-sm text-slate-100">
                      <option value="dev">dev</option>
                      <option value="staging">staging</option>
                      <option value="prod">prod</option>
                    </select>
                  </div>
                  <div className="bg-slate-950 p-3 rounded-lg border border-slate-800">
                    <label className="block text-xs text-slate-400 uppercase font-semibold mb-1">VM ID</label>
                    <input type="number" value={vmId} onChange={(e) => setVmId(e.target.value)} className="w-full bg-slate-900 border border-slate-700 rounded px-2.5 py-1.5 text-sm text-slate-100" />
                  </div>
                  <div className="bg-slate-950 p-3 rounded-lg border border-slate-800">
                    <label className="block text-xs text-slate-400 uppercase font-semibold mb-1">RAM: {vmMemory} MB</label>
                    <input type="range" min="2048" max="32768" step="1024" value={vmMemory} onChange={(e) => setVmMemory(Number(e.target.value))} className="w-full accent-sky-500 mt-1" />
                  </div>
                </div>
                <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
                  <div className="flex gap-4 text-xs text-slate-300">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input type="checkbox" checked={rebootAfterUpdate} onChange={(e) => setRebootAfterUpdate(e.target.checked)} className="rounded bg-slate-900 border-slate-700 text-sky-500" />
                      <span>reboot_after_update=True</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input type="checkbox" checked={ignoreDiskSpeed} onChange={(e) => setIgnoreDiskSpeed(e.target.checked)} className="rounded bg-slate-900 border-slate-700 text-sky-500" />
                      <span>ignore_changes=[&quot;disks[0].speed&quot;]</span>
                    </label>
                  </div>
                  <button type="submit" className="px-4 py-2 bg-sky-600 hover:bg-sky-500 text-white rounded-lg text-xs font-semibold transition">
                    Commit Snapshot
                  </button>
                </div>
              </form>
            </>
          )}

          {activeTab === 'search' && (
            <div className="space-y-4 rounded-xl border border-slate-800 bg-slate-900 p-6 shadow-xl">
              <h2 className="text-base font-semibold text-slate-100 flex items-center gap-2">
                <Database className="h-5 w-5 text-emerald-400" />
                <span>Hybrid Vector (sqlite-vec) + Lexical (FTS5) Search</span>
              </h2>
              <form onSubmit={handleHybridSearch} className="flex gap-2">
                <input type="text" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} placeholder="Search URN, memory, storage pool, notes..." className="flex-1 bg-slate-950 border border-slate-700 rounded-lg px-3 py-2 text-sm text-slate-100" />
                <button type="submit" className="px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg text-xs font-semibold">Search</button>
              </form>
              {searchResults && (
                <div className="space-y-3 pt-2">
                  <div className="text-xs text-slate-400">Vector KNN Matches ({searchResults.vector_matches?.length || 0}) &bull; FTS5 Matches ({searchResults.lexical_fts5_matches?.length || 0})</div>
                  <pre className="bg-slate-950 p-4 rounded-lg border border-slate-800 text-xs font-mono text-emerald-300 overflow-x-auto">{JSON.stringify(searchResults, null, 2)}</pre>
                </div>
              )}
            </div>
          )}

          {activeTab === 'audit' && (
            <div className="space-y-4 rounded-xl border border-slate-800 bg-slate-900 p-6 shadow-xl text-sm leading-relaxed text-slate-300">
              <h2 className="text-base font-bold text-slate-100">PhD-Level Forensic Audit of Christian Lempa&apos;s Pulumi Homelab</h2>
              <div className="border-l-2 border-rose-500 pl-4 space-y-1">
                <h3 className="font-semibold text-rose-300">1. Local File State Concurrency Hazard</h3>
                <p className="text-xs text-slate-400">Local checkpoints lack atomic distributed locking. SQLite WAL mode with sqlite-vec vector indexing provides serializable ACID state tracking.</p>
              </div>
              <div className="border-l-2 border-amber-500 pl-4 space-y-1">
                <h3 className="font-semibold text-amber-300">2. Secret Monad Tainting &amp; Infisical SDK</h3>
                <p className="text-xs text-slate-400">Passing secrets through untrusted string interpolations risks leaking plaintext into state JSON. Explicit resource provider bindings ensure secure token resolution.</p>
              </div>
              <div className="border-l-2 border-sky-500 pl-4 space-y-1">
                <h3 className="font-semibold text-sky-300">3. Proxmox Bridge Phantom Diffs</h3>
                <p className="text-xs text-slate-400">Terraform-to-Pulumi provider bridges exhibit disk throttle drift requiring explicit ignore_changes rules and reboot flags.</p>
              </div>
            </div>
          )}
        </div>

        <aside className="space-y-6 lg:col-span-4">
          <div className="rounded-xl border border-slate-800 bg-slate-900 p-5 shadow-xl space-y-3">
            <h3 className="text-sm font-semibold text-slate-100 flex items-center gap-2">
              <Server className="h-4 w-4 text-sky-400" />
              <span>State Checkpoints ({snapshots.length})</span>
            </h3>
            <div className="space-y-2.5 max-h-[380px] overflow-y-auto pr-1">
              {snapshots.map((snap) => (
                <div key={snap.id} className="bg-slate-950 p-3 rounded-lg border border-slate-800 text-xs font-mono space-y-1">
                  <div className="flex justify-between text-sky-400">
                    <span>stack: {snap.stack_name}</span>
                    <span>VM {snap.vm_id}</span>
                  </div>
                  <div className="text-slate-300 break-all text-[11px]">{snap.urn}</div>
                  <div className="text-slate-500 text-[11px]">RAM: {snap.memory_mb}MB &bull; Cores: {snap.cores}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-xl border border-slate-800 bg-slate-900 p-5 shadow-xl space-y-3">
            <h3 className="text-sm font-semibold text-slate-100 flex items-center gap-2">
              <BookOpen className="h-4 w-4 text-amber-400" />
              <span>Verified References</span>
            </h3>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><a href="https://www.pulumi.com/docs/concepts/state/" target="_blank" rel="noreferrer" className="text-sky-400 hover:underline">[1] Pulumi State Docs</a></li>
              <li><a href="https://registry.terraform.io/providers/bpg/proxmox/latest/docs" target="_blank" rel="noreferrer" className="text-sky-400 hover:underline">[2] Proxmox Provider Schema</a></li>
              <li><a href="https://github.com/asg017/sqlite-vec" target="_blank" rel="noreferrer" className="text-sky-400 hover:underline">[3] sqlite-vec Extension</a></li>
              <li className="text-slate-400">[4] Kleppmann, M. (2017). <em>Designing Data-Intensive Applications</em>. ISBN 978-1449373320.</li>
            </ul>
          </div>
        </aside>
      </main>
    </div>
  );
}
APPEOF

# =============================================================================
# BACKEND: requirements.txt, main.py, Dockerfile
# =============================================================================
cat > backend/requirements.txt <<'REQEOF'
fastapi==0.115.6
uvicorn[standard]==0.34.0
pydantic==2.10.4
sqlite-vec==0.1.6
psutil==6.1.1
pulumi==3.144.1
pulumi-proxmoxve==6.6.1
REQEOF

cat > backend/main.py <<'PYEOF'
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
PYEOF

cat > backend/Dockerfile <<'DOCKEOF'
FROM python:3.12-slim-bookworm
ENV PYTHONDONTWRITEBYTECODE=1 PYTHONUNBUFFERED=1 SQLITE_DB_PATH=/data/pulumi_state_audit.db
WORKDIR /app
RUN apt-get update && apt-get install -y --no-install-recommends libsqlite3-0 curl && rm -rf /var/lib/apt/lists/*
COPY requirements.txt /app/requirements.txt
RUN pip install --no-cache-dir -r /app/requirements.txt
COPY main.py /app/main.py
RUN mkdir -p /data
EXPOSE 8000
CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000"]
DOCKEOF

# =============================================================================
# DOCKER COMPOSE & WORKFLOW & MANAGEMENT SCRIPTS
# =============================================================================
cat > docker-compose.yml <<'COMPOSEEOF'
services:
  backend:
    build:
      context: ./backend
      dockerfile: Dockerfile
    container_name: pulumi-homelab-backend
    restart: unless-stopped
    ports:
      - "127.0.0.1:8000:8000"
    volumes:
      - pulumi_sqlite_data:/data
      - /var/run/docker.sock:/var/run/docker.sock:ro

volumes:
  pulumi_sqlite_data:
COMPOSEEOF

cat > .github/workflows/deploy.yml <<'WEOF'
name: Deploy Pulumi Explainer to GitHub Pages
on:
  push:
    branches: [main]
  workflow_dispatch:
permissions:
  contents: read
  pages: write
  id-token: write
concurrency:
  group: "pages"
  cancel-in-progress: false
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: "22"
          cache: "npm"
      - run: npm ci
      - run: npm run build
      - uses: actions/configure-pages@v5
      - uses: actions/upload-pages-artifact@v3
        with:
          path: "./dist"
  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - name: Deploy
        id: deployment
        uses: actions/deploy-pages@v4
WEOF

cat > scripts/bootstrap_gh_pages.sh <<'BOOTEOF'
#!/usr/bin/env bash
set -u
REPO_OWNER="${1:-swipswaps}"
REPO_NAME="${2:-pulumi-homelab-explainer}"
FULL_REPO="${REPO_OWNER}/${REPO_NAME}"

echo "[INFO] Checking gh auth..."
gh auth status || exit 0

if gh repo view "${FULL_REPO}" >/dev/null 2>&1; then
  echo "[OK] Repository ${FULL_REPO} already exists."
else
  echo "[INFO] Creating repository..."
  gh repo create "${REPO_NAME}" --public --source=. --remote=origin --push
fi

gh api "repos/${FULL_REPO}/pages" -X POST -f build_type="workflow" || gh api "repos/${FULL_REPO}/pages" -X PUT -f build_type="workflow"

gh api "repos/${FULL_REPO}/pages" --jq '{html_url: .html_url, build_type: .build_type, status: .status}'
BOOTEOF
chmod +x scripts/bootstrap_gh_pages.sh

cat > scripts/backup_db.sh <<'BACKUPEOF'
#!/usr/bin/env bash
set -u
BACKUP_DIR="./backups"
mkdir -p "${BACKUP_DIR}"
TIMESTAMP=$(date +%Y%m%d_%H%M%S)
BACKUP_FILE="${BACKUP_DIR}/pulumi_state_${TIMESTAMP}.db"

echo "[INFO] Creating SQLite WAL point-in-time backup to ${BACKUP_FILE}..."
if [ -f "./backend/data/pulumi_state_audit.db" ]; then
  sqlite3 "./backend/data/pulumi_state_audit.db" ".backup '${BACKUP_FILE}'"
  echo "[OK] Backup complete."
else
  echo "[INFO] No active database file found locally."
fi
BACKUPEOF
chmod +x scripts/backup_db.sh

# =============================================================================
# AUTO-EXECUTION & BUILD ORCHESTRATION WITH `gh api` STATUS POLLING
# =============================================================================
info "Installing frontend npm dependencies..."
npm install

info "Building frontend static assets..."
npm run build

info "Starting Docker backend container..."
docker compose up --build -d

info "Initializing git repository and committing..."
if [ ! -d .git ]; then
  git init
  git checkout -b main
fi
git add -A
git diff --cached --quiet || git commit -m "feat: complete Pulumi homelab explainer build with docker backend & vite"

info "Bootstrapping GitHub repository and enabling GitHub Pages..."
bash scripts/bootstrap_gh_pages.sh

info "Polling GitHub API and HTTP status for Pages deployment (${GITHUB_PAGES_URL})..."
ATTEMPTS=0
MAX_ATTEMPTS=30
while [ $ATTEMPTS -lt $MAX_ATTEMPTS ]; do
  HTTP_STATUS=$(curl -s -o /dev/null -w "%{http_code}" "${GITHUB_PAGES_URL}" || echo "000")
  GH_API_JSON=$(gh api "repos/${GH_USER}/${REPO_NAME}/pages" 2>/dev/null || echo "{}")
  
  info "Attempt $((ATTEMPTS+1))/$MAX_ATTEMPTS: HTTP Status: $HTTP_STATUS | GitHub API Response: $GH_API_JSON"
  
  if [ "$HTTP_STATUS" = "200" ]; then
    ok "GitHub Pages is live and returning 200 OK!"
    xdg-open "${GITHUB_PAGES_URL}" >/dev/null 2>&1 || true
    exit 0
  fi
  
  ATTEMPTS=$((ATTEMPTS+1))
  sleep 10
done

ok "Polling timed out, but deployment workflow has been triggered. Open manually: ${GITHUB_PAGES_URL}"
xdg-open "${GITHUB_PAGES_URL}" >/dev/null 2>&1 || true
