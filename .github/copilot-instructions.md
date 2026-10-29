# Copilot instructions

Read [docs/SPEC.md](../docs/SPEC.md) before any work. Build one milestone at a
time; do not start the next until acceptance criteria pass.

Rules:

- Stack: Electron (electron-vite), React + TypeScript (strict), Three.js, zod,
  Zustand, Vitest, FFmpeg via ffmpeg-static. pnpm.
- Frame purity: renderAt(t) is a pure function of (time t, scene data, style,
  resolution). No Math.random/Date.now/rAF deltas in src/core or src/engine.
  Motion is analytic and computed in shaders.
- Layering: shared <- core <- engine <- renderer; main depends only on shared.
  core has no DOM/three/electron. engine has no React/electron.
- Export is offline: render frame N at t = start + N/fps, readPixels, send over
  IPC to FFmpeg stdin with backpressure. Never use MediaRecorder/captureStream.
- Audio in exported video = mix of per-track MP3s (volume per track) made by
  FFmpeg. MIDI is visual data only, never sound.
- Text is rendered with Canvas2D textures; fonts must be loaded before the first
  frame.
- Validate all boundaries with zod. Renderer is sandboxed; use the typed preload
  API.
- No AI features, no network calls, no circular layout in v1, no extra features
  beyond the spec.
- Prefer pure functions + unit tests. Record non-obvious decisions as ADRs in
  docs/adr.
- Do not pin library versions from memory; install latest stable and check
  peer-dependency compatibility.
