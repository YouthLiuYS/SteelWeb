#!/usr/bin/env bash
set -euo pipefail

REMOTE_URL="${GITEE_REMOTE_URL:-}"
DEPLOY_BRANCH="${GITEE_BRANCH:-gitee-pages}"
BASE_PATH="${SITE_BASE_PATH:-/SteelWeb}"
DEPLOY_DIR=".deploy-gitee"

if [[ -z "$REMOTE_URL" ]]; then
  echo "ERROR: missing GITEE_REMOTE_URL"
  echo "Example: GITEE_REMOTE_URL=https://gitee.com/<user>/<repo>.git npm run deploy:gitee"
  exit 1
fi

echo "==> Applying content"
npm run content:apply

echo "==> Building static site (SITE_BASE_PATH=$BASE_PATH)"
SITE_BASE_PATH="$BASE_PATH" npm run build

echo "==> Preparing deploy workspace"
rm -rf "$DEPLOY_DIR"
mkdir -p "$DEPLOY_DIR"
cp -R out/. "$DEPLOY_DIR/"

pushd "$DEPLOY_DIR" >/dev/null

git init >/dev/null
git checkout -b "$DEPLOY_BRANCH" >/dev/null
if ! git config user.name >/dev/null; then
  git config user.name "codex-deploy"
fi
if ! git config user.email >/dev/null; then
  git config user.email "codex-deploy@example.com"
fi
git add -A
git commit -m "deploy: $(date '+%Y-%m-%d %H:%M:%S')" >/dev/null

git remote add origin "$REMOTE_URL"
git push -f origin "$DEPLOY_BRANCH"

popd >/dev/null

echo "==> Deploy done"
echo "Branch: $DEPLOY_BRANCH"
echo "Next: open Gitee Pages and select branch '$DEPLOY_BRANCH' as source."
