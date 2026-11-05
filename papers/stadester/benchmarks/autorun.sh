#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")"

echo "[1/3] Compiling Stadestér benchmark inputs..."
node --max-old-space-size=8192 "1.compiler/compile_all.js" "$@"

echo "[2/3] Evaluating Macro, Meso, and Micro benchmark results..."
node "2.results/run_all_results.js" "$@"

echo "[3/3] Generating benchmark visualisations and tables..."
node "3.visualisations/run_all_visualisations.js" "$@"

echo "All Stadestér benchmarks completed successfully."
