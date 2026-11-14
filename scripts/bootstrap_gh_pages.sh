#!/usr/bin/env bash
set -u

REPO_OWNER="${1:-swipswaps}"
REPO_NAME="${2:-pulumi-homelab-explainer}"
FULL_REPO="${REPO_OWNER}/${REPO_NAME}"
PAGES_URL="https://${REPO_OWNER}.github.io/${REPO_NAME}/"

echo "[INFO] Checking gh auth..."
gh auth status || { echo "[ERROR] gh not authenticated. Run: gh auth login"; exit 1; }

# --- Ensure repository exists ---
if gh repo view "${FULL_REPO}" >/dev/null 2>&1; then
  echo "[OK] Repository ${FULL_REPO} exists."
else
  echo "[INFO] Creating repository..."
  gh repo create "${REPO_NAME}" --public --source=. --remote=origin --push
fi

# --- Attempt to enable Pages via API (may 403 if token lacks admin) ---
echo "[INFO] Attempting to enable GitHub Pages (build_type=workflow)..."
PAGES_RESPONSE=$(gh api "repos/${FULL_REPO}/pages" -X POST -f build_type="workflow" 2>&1)
PAGES_RC=$?

if [ $PAGES_RC -eq 0 ]; then
  echo "[OK] Pages enabled via API."
else
  echo "[WARN] gh api returned exit code $PAGES_RC."
  echo "[WARN] Response: $PAGES_RESPONSE"

  if echo "$PAGES_RESPONSE" | grep -qi "403\|Must have admin"; then
    echo ""
    echo "======================================================================"
    echo "MANUAL STEP REQUIRED: Your token does not have admin rights to"
    echo "enable Pages via API. Please do this once in the browser:"
    echo ""
    echo "  1. Go to https://github.com/${FULL_REPO}/settings/pages"
    echo "  2. Under 'Build and deployment' → 'Source', select 'GitHub Actions'"
    echo "  3. Click Save"
    echo ""
    echo "After that, push a commit to main and the workflow will deploy."
    echo "======================================================================"
    echo ""
  fi
fi

# --- Push latest commit to trigger workflow ---
echo "[INFO] Pushing to origin/main to trigger workflow..."
git push origin main 2>/dev/null || git push -u origin main

# --- Wait for workflow run and poll status ---
echo "[INFO] Waiting for deploy workflow run to appear..."
sleep 5

RUN_ID=$(gh run list --workflow=deploy.yml --limit=1 --json databaseId --jq '.[0].databaseId' 2>/dev/null)

if [ -z "$RUN_ID" ] || [ "$RUN_ID" = "null" ]; then
  echo "[WARN] Could not find workflow run. It may still be queued."
  echo "       Check: https://github.com/${FULL_REPO}/actions"
else
  echo "[INFO] Watching run $RUN_ID (this will take 30-60 seconds)..."
  gh run watch "$RUN_ID" --exit-status --interval 10
  WATCH_RC=$?
  if [ $WATCH_RC -ne 0 ]; then
    echo "[WARN] Workflow did not complete successfully. Check the Actions tab."
    echo "       https://github.com/${FULL_REPO}/actions"
  else
    echo "[OK] Workflow completed successfully."
  fi
fi

# --- Poll the live URL until 200 ---
echo "[INFO] Polling ${PAGES_URL} for HTTP 200..."
ATTEMPTS=0
MAX_ATTEMPTS=12
while [ $ATTEMPTS -lt $MAX_ATTEMPTS ]; do
  HTTP_STATUS=$(curl -s -o /dev/null -w "%{http_code}" "$PAGES_URL" || echo "000")
  echo "  Attempt $((ATTEMPTS+1))/$MAX_ATTEMPTS: HTTP $HTTP_STATUS"
  if [ "$HTTP_STATUS" = "200" ]; then
    echo "[OK] GitHub Pages is live!"
    xdg-open "$PAGES_URL" >/dev/null 2>&1 || true
    exit 0
  fi
  ATTEMPTS=$((ATTEMPTS+1))
  sleep 10
done

echo "[INFO] Timed out waiting for 200. The site may still be propagating."
echo "       Check: $PAGES_URL"
echo "       Check workflow: https://github.com/${FULL_REPO}/actions"
