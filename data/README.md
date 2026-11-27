# Shared learning data

This folder is the COSYgames mirror of learning data owned by
[COSYdata](https://cosylanguages.github.io/COSYdata/). It is not game code.

- Games load these files at runtime.
- The per-game `manifest.json` marks these files with `"scope": "shared"`.
- Do not add a new game-specific data file here without a COSYdata decision. If
  the data belongs to one game and is not part of the COSYdata vocabulary, put
  it inside that game's folder instead.
- `node scripts/sync-from-cosydata.js` refreshes the mirror. Do not edit the
  mirrored files by hand.

See [`docs/ARCHITECTURE.md`](../docs/ARCHITECTURE.md) for the game isolation
contract.
