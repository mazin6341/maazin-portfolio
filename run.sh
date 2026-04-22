#!/usr/bin/env bash
set -euo pipefail

source .env

if [ "$APP_ENV" = "production" ]; then
  echo "Starting in production mode..."
  docker-compose up --build -d
else
  echo "Starting in development mode (live reload on :5173)..."
  docker-compose -f docker-compose.dev.yml up --build -d
fi
