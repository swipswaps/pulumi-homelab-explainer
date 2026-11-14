#!/usr/bin/env bash
set -u
BACKUP_DIR="./backups"
mkdir -p "$BACKUP_DIR"
TIMESTAMP=$(date +%Y%m%d_%H%M%S)
BACKUP_FILE="${BACKUP_DIR}/pulumi_state_${TIMESTAMP}.db"

echo "[INFO] Creating SQLite WAL backup to ${BACKUP_FILE}..."
if [ -f "./backend/data/pulumi_state_audit.db" ]; then
  sqlite3 "./backend/data/pulumi_state_audit.db" ".backup '${BACKUP_FILE}'"
  echo "[OK] Backup complete."
else
  echo "[INFO] No active database file found locally."
fi
