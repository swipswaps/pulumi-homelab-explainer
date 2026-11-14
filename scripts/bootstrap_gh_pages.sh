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
