#!/bin/zsh

set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"

cd "$SCRIPT_DIR"
mkdir -p public
cp index.html public/index.html
npx --yes wrangler@4.67.0 pages deploy public --project-name obituary-checker "$@"
