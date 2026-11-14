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

TWO WAYS TO USE IT
------------------
1. GitHub Pages (static mode, no install)
   Visit https://swipswaps.github.io/pulumi-homelab-explainer/
   Browsers block HTTP loopback probes from HTTPS pages (mixed content).
   You will see a banner with an "Open Local Instance ->" button.

2. Local Instance (full Docker vector search)
   a. docker compose up --build -d
   b. npm run dev   # serves at http://localhost:5173
   c. Open http://localhost:5173 - probe succeeds natively, no banner,
      status badge shows "Docker Backend Detected (SQLite-Vec)".

If you must connect GitHub Pages to a remote backend, use an HTTPS tunnel
(cloudflared tunnel --url http://localhost:8000) and paste the tunnel URL
into the input field in the banner. But the "Open Local Instance ->" button
is the intended path.

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
