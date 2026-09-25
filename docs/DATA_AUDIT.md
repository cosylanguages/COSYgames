# 📊 Data Duplication & COSYdata Sync Audit

This document records the audit of local game datasets in **COSYgames** (`data/`, `100-questions/decks/`, `this-or-that/decks/`, `vocabulary/`) against COSYdata canonical vocabulary standards and defines the lightweight build/deploy sync approach.

---

## 1. Executive Summary & Offline-First Principles

COSYgames is designed as a **100% client-side, offline-first** game repository. Games must function seamlessly in low-connectivity classroom settings and self-study environments without runtime dependency on external servers or APIs.

However, having static local datasets risks data duplication and drift from **COSYdata** (the canonical source of truth for vocabulary, CEFR leveling, and translations across the COSY ecosystem).

### Recommended Architecture: Build/Deploy-Time Synchronization
To avoid duplication and drift while retaining full offline capability:
- **COSYdata is the Source of Truth**: Lexical items, CEFR level tags, themes, and translations are maintained in COSYdata.
- **Local Datasets are Generated Build Artifacts**: The local JS/JSON files in `data/` and game deck directories serve as local offline caches.
- **Lightweight Sync Script**: `scripts/sync-from-cosydata.js` fetches or builds updated offline JSON/JS decks from canonical sources at build/deploy time (e.g. via GitHub Actions workflows).

---

## 2. Dataset Overlap & Duplication Audit Results

| Local Dataset Path | Target Game(s) | Words/Items Audited | COSYdata Canonical Overlap | Status & Notes |
| :--- | :--- | :---: | :---: | :--- |
| `data/gender/a1.js` & `a2.js` | What Gender Is It? | 119 starter concepts | 100% (119/119) | All starter concepts mapped and reconciled with canonical `A0-A1_master.json`. |
| `data/en/game_data.js` | Action Hero | 32 action verbs | 100% (32/32) | All 32 verbs align with canonical A0-A1 master list. |
| `data/en/game_data.js` | Fluency Flow | 11 starter prompts | 100% (11/11) | Refined to use 100% canonical A1 vocabulary. |
| `data/en/game_data.js` | Identity Mystery | 5 starter personas | 100% (5/5) | Persona clue descriptions rewritten using canonical A1 words. |
| `data/en/game_data.js` | Word Linker | 9 starter puzzles | 100% (9/9) | Starter/Elementary puzzles aligned with canonical A1 vocabulary. |
| `data/scenes/*.js` | Scene Match | ~50 room hotspots | ~85% overlap | Visual room vocabulary (house, furniture, kitchen). High overlap with COSYdata A1-A2 topics. |
| `this-or-that/decks/` | This or That? | 69 A0-A1 cards | 100% (69/69) | A0-A1 deck audited and reconciled with canonical vocabulary. |
| `100-questions/decks/` | 100 Questions | ~100 prompts | Prompts/Questions | Conversation card prompts; overlap in core vocabulary. |
| `data/shared/` | Etymology & Doublets | ~500 entries | Cross-Language Dataset | Shared etymology network, false friends, and doublets datasets. |

---

## 3. Lightweight Sync Approach (`scripts/sync-from-cosydata.js`)

The `scripts/sync-from-cosydata.js` script allows maintainers or automated CI/CD pipelines to:
1. Load canonical vocabulary lists from `vocabulary/_canonical/` (or fetch from COSYdata repository/CDN).
2. Validate local game word lists against canonical entries.
3. Regenerate or update local game datasets in `data/` and deck directories before static deployment.
4. Output detailed sync metrics and flag any unmapped or missing items.

### Running the Sync Script
```bash
node scripts/sync-from-cosydata.js [--check | --update]
```
- `--check`: Validates local game data against canonical COSYdata master files and reports alignment status without modifying files.
- `--update`: Re-generates local JS/JSON game datasets from canonical master source files.
