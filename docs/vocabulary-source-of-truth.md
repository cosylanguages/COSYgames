# Vocabulary Source of Truth & Local Snapshot

This document details the relationship between COSYdata, COSYgames, and the local canonical vocabulary snapshot.

## Canonical Source
- **COSYdata** declares itself the single source of truth for vocabulary used by COSYgames.

## Local Read-Only Snapshot
- COSYgames maintains a READ-ONLY snapshot at `vocabulary/_canonical/en/A0-A1_master.json` containing 1,274 unique words.
- This snapshot is used by `scripts/sync-from-cosydata.js` and the CI workflow "Validate COSYdata Sync & Datasets" (`.github/workflows/validate-cosydata-sync.yml`).

## Provenance
- As recorded in the file notice, this snapshot was copied from COSYlanguages on 2026-09-12 (commit `5c89fc9036afba450f942e4fd672ea57d42c42a6`).

## Known Gap
- Measured on 2026-10-03: COSYdata's current A0-A1 list is `a0_a1_entries.json` with 1,433 unique words.
- The local snapshot (1,274 unique words) and COSYdata's `a0_a1_entries.json` overlap on 1,201 words (73 words exist only in the snapshot, 232 words exist only in COSYdata).
- Because of this discrepancy, the offline CI check currently audits local game data against a stale snapshot list. Reconciliation is pending and must happen in COSYdata first before updating the local snapshot in COSYgames.

## Maintenance Rule
- **Never edit the local snapshot file (`vocabulary/_canonical/en/A0-A1_master.json`) by hand.**
- Any vocabulary updates or corrections must be proposed and merged in COSYdata first, after which the local snapshot in COSYgames can be refreshed.

## Runtime Vocabulary (Emoji Odyssey, Object Quest & Hot Seat)
Games can dynamically fetch vocabulary from COSYdata at runtime via `shared/js/vocab-loader.js`. This mechanism is opt-in per game so that other games relying on `window.vocabularyData` remain unaffected unless explicitly configured.

- **`COSYVocab.ensure(lang, level, opts)`**: Used by Emoji Odyssey to load search index summary entries (`search-index.json`).
- **`COSYVocab.ensureFull(lang, level, opts)`**: Used by Object Quest and Hot Seat to load full vocabulary entries file-by-file starting from the requested level folder (`index.json` -> theme files e.g. `a0_a1/jobs.json`). Full entries include definitions, examples, article, gender, plural forms, and transcriptions.

### Data Endpoint & Index Coverage
Indices are fetched on demand from `https://cosylanguages.github.io/COSYdata/vocabulary/<lang>/search-index.json` or `https://cosylanguages.github.io/COSYdata/vocabulary/<lang>/index.json`.

Measured language coverage and level distributions:
- **English (`en`)**: 13,469 entries (80% with real emoji), well filled across all levels A0–C2.
- **Italian (`it`)**: 2,279 entries (99% with real emoji).
- **French (`fr`)**: 1,881 entries (92% with real emoji) — Level distribution: A0: 17, A1: 1072, A2: 748, NO B1, B2: 9, C1: 21, C2: 14.
- **Russian (`ru`)**: 1,721 entries (89% with real emoji).
- **Greek (`el`)**: 1,067 entries (97% with real emoji).
- **German (`de`)**: 510 entries (81% with real emoji) — mostly A0/A1 (~470-480) and ~16 A2.
- **Spanish (`es`)**: 498 entries (83% with real emoji) — mostly A0/A1 (~470-480) and ~16 A2.

### Development Overrides
For local development or testing against local mirrors or alternative endpoints, the base URL can be overridden using:
- `window.COSY_DATA_BASE` string global, or
- `?cosydata_base=` query parameter (e.g., `?cosydata_base=/COSYdata/vocabulary`).
