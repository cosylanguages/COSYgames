# Vocabulary Source of Truth & COSYdata Integration

This document details the relationship between COSYdata and COSYgames.

## Canonical Source
- **COSYdata** (`https://cosylanguages.github.io/COSYdata/vocabulary/`) is the sole canonical source of truth for all vocabulary used across COSYgames.

## Direct COSYdata Integration
- COSYgames directly connects to COSYdata. Local snapshots under `vocabulary/_canonical` have been fully retired in favor of live COSYdata endpoints and opt-in dynamic loading via `shared/js/vocab-loader.js`.
- The alignment audit script (`scripts/sync-from-cosydata.js`) and CI workflow (`.github/workflows/validate-cosydata-sync.yml`) query COSYdata's published index endpoints.

## Maintenance Rule
- Any vocabulary updates, corrections, or additions must be proposed and merged directly in the COSYdata repository.

## Runtime Vocabulary (Emoji Odyssey, Object Quest, Hot Seat, Identity Mystery & Word Linker)
Games can dynamically fetch vocabulary from COSYdata at runtime via `shared/js/vocab-loader.js`. This mechanism is opt-in per game so that other games relying on `window.vocabularyData` remain unaffected unless explicitly configured.

- **`COSYVocab.ensure(lang, level, opts)`**: Used by Emoji Odyssey to load search index summary entries (`search-index.json`).
- **`COSYVocab.wordSet(lang)`**: Used by Last Letter to fetch search index entries (`search-index.json`) and return a Set of known lower-cased words for soft validation.
- **`COSYVocab.ensureFull(lang, level, opts)`**: Used by Object Quest, Hot Seat and Identity Mystery to load full vocabulary entries file-by-file starting from the requested level folder (`index.json` -> theme files e.g. `a0_a1/jobs.json`), with optional `fileMatch` substring filtering. Full entries include definitions, examples, article, gender, plural forms, and transcriptions.
- **`COSYVocab.buildLinkPuzzles(lang, level, opts)`**: Used by Word Linker to generate dynamic link and odd-one-out puzzles from coherent theme families loaded via `ensureFull`.

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
