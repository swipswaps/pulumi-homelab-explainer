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
