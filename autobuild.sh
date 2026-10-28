#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")"
./autorun.sh --build --force-eval
