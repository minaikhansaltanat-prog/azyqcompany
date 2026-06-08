#!/bin/bash
# Serveo tunnel — автоматты қайта қосылу
echo "=== Kasipker tunnel started: $(date) ==="
while true; do
  echo "[$(date '+%H:%M:%S')] Connecting to serveo.net..."
  ssh -o StrictHostKeyChecking=no \
      -o ServerAliveInterval=30 \
      -o ServerAliveCountMax=3 \
      -o ExitOnForwardFailure=yes \
      -R 80:localhost:3000 serveo.net
  echo "[$(date '+%H:%M:%S')] Disconnected. Reconnecting in 5s..."
  sleep 5
done
