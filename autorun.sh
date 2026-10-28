#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")"

echo "============================================================================"
echo "  Intellte — CRD Working Papers Static Site Generation Pipeline"
echo "============================================================================"

if [ ! -f "node_modules/vitepress/bin/vitepress.js" ]; then
  echo "[Intellte] Installing VitePress and static site dependencies..."
  npm install --no-audit --no-fund
fi

echo "[Intellte] Running A-D RMarkdown WYSIWYG DOM & Artefact Staging Pipeline..."
node "core/framework/node/run_pipeline.js" "$@"

if [ "${1:-}" = "--build" ]; then
  echo "[Intellte] Building static VitePress site into docs/.vitepress/dist ..."
  node "node_modules/vitepress/bin/vitepress.js" build docs
  echo ""
  echo "[OK] Static site docs generated in docs/ and built to docs/.vitepress/dist."
elif [ "${1:-}" = "--preview" ] || [ "${1:-}" = "--serve" ]; then
  echo "[Intellte] Starting local static preview server on port 16000..."
  node "node_modules/vitepress/bin/vitepress.js" preview docs --port 16000
else
  echo "[Intellte] Starting VitePress development server on port 16000..."
  node "node_modules/vitepress/bin/vitepress.js" dev docs --port 16000
fi
