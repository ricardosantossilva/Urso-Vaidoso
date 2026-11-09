#!/bin/bash
# One-time setup per fresh machine: Python deps + Kokoro voice models (from GitHub releases).
set -e
pip install --break-system-packages -q kokoro-onnx soundfile numpy pillow 2>&1 | tail -1 || true
D="${TTS_DIR:-$HOME/.cache/urso-tts}"; mkdir -p "$D"
U=https://github.com/thewh1teagle/kokoro-onnx/releases/download/model-files-v1.0
[ -s "$D/kokoro.onnx" ] || curl -sSL -o "$D/kokoro.onnx" "$U/kokoro-v1.0.onnx"
[ -s "$D/voices.bin" ] || curl -sSL -o "$D/voices.bin" "$U/voices-v1.0.bin"
ls -la "$D"; which ffmpeg; node -e "require('playwright'); console.log('playwright ok')"
