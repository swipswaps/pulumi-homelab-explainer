================================================================================
PROJECT: Pulumi Homelab & Proxmox Orchestrator Explainer
REPOSITORY: https://github.com/swipswaps/pulumi-homelab-explainer
LIVE DEMO: https://swipswaps.github.io/pulumi-homelab-explainer/
================================================================================

HOW WE GOT HERE & WHERE WE ARE
--------------------------------
Dual-plane explainer auditing Christian Lempa's Pulumi + Proxmox + Infisical
homelab architecture (YouTube: WFyJ-xyJ58M). Static React/Vite/Three.js site on
GitHub Pages + local Docker FastAPI backend with SQLite WAL + sqlite-vec + FTS5.

STATIC MODE (GitHub Pages):
  Works immediately at the live demo URL. Falls back to localStorage persistence
  when no local backend is reachable.

LOCAL DOCKER MODE (full vector search):
  1. docker compose up --build -d
  2. curl http://127.0.0.1:8000/api/health   # should return {"status":"ok",...}
  3. npm run dev                              # http://localhost:5173
  4. The UI status badge will show "Docker Backend Detected".

GITHUB PAGES DEPLOYMENT:
  The workflow (.github/workflows/deploy.yml) uses actions/configure-pages,
  actions/upload-pages-artifact, and actions/deploy-pages. It requires the
  repository's Pages source to be set to "GitHub Actions" (one-time manual step
  in Settings → Pages). The bootstrap script detects a 403 from gh api and prints
  the correct instruction.

DIRECTORY STRUCTURE:
  package.json, vite.config.js, tailwind.config.js, postcss.config.js
  index.html, src/main.jsx, src/index.css, src/App.jsx
  backend/requirements.txt, backend/main.py, backend/Dockerfile
  docker-compose.yml, .github/workflows/deploy.yml
  scripts/bootstrap_gh_pages.sh, scripts/backup_db.sh

VERIFIED REFERENCES:
  [1] Pulumi State: https://www.pulumi.com/docs/concepts/state/
  [2] bpg/proxmox provider: https://registry.terraform.io/providers/bpg/proxmox/latest/docs
  [3] sqlite-vec: https://github.com/asg017/sqlite-vec
  [4] SQLite WAL: https://www.sqlite.org/wal.html
  [5] Kleppmann (2017) DDIA, ISBN 978-1449373320.

================================================================================
