# MIDI Visualizer

A desktop application for turning per-track MP3s and optional MIDI files into a
stylized, scrolling music visualization and exporting it as an MP4.

## Status

The project is at milestone **M0: scaffold and guardrails**. The current build is
a secure Electron + React shell; project editing, visualization, and export are
planned for later milestones.

## Development

Requirements: Node.js 22+ and pnpm.

```sh
pnpm install
pnpm dev
```

Quality checks:

```sh
pnpm typecheck
pnpm lint
pnpm test
```

See [docs/SPEC.md](docs/SPEC.md) for the product specification and milestones,
and [docs/ARCHITECTURE.md](docs/ARCHITECTURE.md) for the architectural
invariants.
