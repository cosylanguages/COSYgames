# 🧹 COSYgames Folder Deduplication & Standardization Audit

This document records the comprehensive audit and deduplication analysis performed across all game folders in the **COSYgames** repository.

---

## 🎯 Executive Summary & Standardization Target

Prior to this cleanup, the repository contained duplicate directories per game resulting from two competing naming conventions:
- **Kebab-case** (e.g. `action-hero/`, `battle-of-wits/`, `fluency-flow/`)
- **Snake_case** (e.g. `action_hero/`, `battle_of_wits/`, `hundred_questions/`)

### Standard Selected
**Kebab-case** (`kebab-case/`) is confirmed as the canonical standard across the entire ecosystem. This aligns with:
1. All game links in the root `README.md`.
2. The official migration roadmap in `MIGRATION-GAMES.md`.
3. The entrypoint navigation mapping in `index.html`.
4. Ecosystem naming conventions across `COSYlanguages`.

---

## 📊 Summary Audit Table

| Pair # | Kebab-Case Folder (Canonical) | Snake_case Folder (Stale/Duplicate) | Status / Inspection Findings | Action Taken |
| :---: | :--- | :--- | :--- | :--- |
| 1 | `action-hero/` | `action_hero/` | `action-hero/` has standardized COSYgames UI template; `action_hero/` contains legacy stub. `game.js` identical. | Keep `action-hero/`, delete `action_hero/` |
| 2 | `battle-of-wits/` | `battle_of_wits/` | `battle-of-wits/` has standardized UI shell; `battle_of_wits/` contains legacy stub. `game.js` identical. | Keep `battle-of-wits/`, delete `battle_of_wits/` |
| 3 | `cosy-crossword/` | `cosy_crossword/` | `cosy-crossword/` has standardized UI shell; `cosy_crossword/` contains legacy stub. `game.js` identical. | Keep `cosy-crossword/`, delete `cosy_crossword/` |
| 4 | `critics-corner/` | `critics_corner/` | `critics-corner/` has standardized UI shell; `critics_corner/` contains legacy stub. `game.js` identical. | Keep `critics-corner/`, delete `critics_corner/` |
| 5 | `emoji-odyssey/` | `emoji_odyssey/` | `emoji-odyssey/` has standardized UI shell; `emoji_odyssey/` contains legacy stub. `game.js` identical. | Keep `emoji-odyssey/`, delete `emoji_odyssey/` |
| 6 | `etymology-explorer/` | `etymology_explorer/` | `etymology-explorer/` contains full standalone app files (`index.html`, `game.js`, `etymology-explorer.css`, `README.md`); `etymology_explorer/` was a duplicate subset with identical `game.js` and `README.md`. | Keep `etymology-explorer/`, delete `etymology_explorer/` |
| 7 | `fluency-flow/` | `fluency_flow/` | `fluency-flow/` has standardized UI shell; `fluency_flow/` contains legacy stub. `game.js` identical. | Keep `fluency-flow/`, delete `fluency_flow/` |
| 8 | `hot-seat/` | `hot_seat/` | `hot-seat/` has standardized UI shell; `hot_seat/` contains legacy stub. `game.js` identical. | Keep `hot-seat/`, delete `hot_seat/` |
| 9 | `100-questions/` | `hundred_questions/` | `100-questions/` has standardized UI shell & card decks; `hundred_questions/` contains legacy stub. `game.js` & `decks/` identical. | Keep `100-questions/`, delete `hundred_questions/` |
| 10 | `identity-mystery/` | `identity_mystery/` | `identity-mystery/` has standardized UI shell; `identity_mystery/` contains legacy stub. `game.js` identical. | Keep `identity-mystery/`, delete `identity_mystery/` |
| 11 | `last-letter/` | `last_letter/` | `last-letter/` has standardized UI shell; `last_letter/` contains legacy stub. `game.js` identical. | Keep `last-letter/`, delete `last_letter/` |
| 12 | `lucky-numbers/` | `lucky_numbers/` | `lucky-numbers/` has standardized UI shell; `lucky_numbers/` contains legacy stub. `game.js` identical. | Keep `lucky-numbers/`, delete `lucky_numbers/` |
| 13 | `object-quest/` | `object_quest/` | `object-quest/` has standardized UI shell; `object_quest/` contains legacy stub. `game.js` identical. | Keep `object-quest/`, delete `object_quest/` |
| 14 | `opinion-arena/` | `opinion_arena/` | `opinion-arena/` has standardized UI shell; `opinion_arena/` contains legacy stub. `game.js` identical. | Keep `opinion-arena/`, delete `opinion_arena/` |
| 15 | `scene-match/` | `scene_match/` | `scene_match/` contains unique developer tools (`tools/hotspot-editor.html`) & `README.md`. `game.js` identical. | Merge `tools/` and `README.md` into `scene-match/`, delete `scene_match/` |
| 16 | `story-chain/` | `story_chain/` | `story-chain/` has standardized UI shell; `story_chain/` contains legacy stub. `game.js` identical. | Keep `story-chain/`, delete `story_chain/` |
| 17 | `this-or-that/` | `this_or_that/` | `this-or-that/` lacked `index.html`; full Tinder-style game page was located in `this_or_that/index.html`. `game.js` & `decks/` identical. | Move `this_or_that/index.html` to `this-or-that/index.html`, delete `this_or_that/` |
| 18 | `what-gender-is-it/` | `what_gender_is_it/` | `what-gender-is-it/` has standardized UI shell; `what_gender_is_it/` contains legacy layout. `game.js` identical. | Keep `what-gender-is-it/`, delete `what_gender_is_it/` |
| 19 | `word-linker/` | `word_linker/` | `word-linker/` has standardized UI shell; `word_linker/` contains legacy stub. `game.js` identical. | Keep `word-linker/`, delete `word_linker/` |

---

## 🔍 Detailed Per-Pair Audit Notes

### 1. Action Hero (`action-hero/` vs `action_hero/`)
- **`action-hero/`**: Contains modern standalone COSYgames layout (`index.html`, 123 lines) and `game.js`.
- **`action_hero/`**: Contains legacy COSYlanguages shell stub (`index.html`, 50 lines) and identical `game.js`.
- **Canonical Folder**: `action-hero/`.

### 2. Battle of Wits (`battle-of-wits/` vs `battle_of_wits/`)
- **`battle-of-wits/`**: Contains modern standalone COSYgames layout (`index.html`, 123 lines) and `game.js`.
- **`battle_of_wits/`**: Contains legacy stub (`index.html`, 50 lines) and identical `game.js`.
- **Canonical Folder**: `battle-of-wits/`.

### 3. Cosy Crossword (`cosy-crossword/` vs `cosy_crossword/`)
- **`cosy-crossword/`**: Contains modern standalone COSYgames layout (`index.html`, 123 lines) and `game.js`.
- **`cosy_crossword/`**: Contains legacy stub (`index.html`, 50 lines) and identical `game.js`.
- **Canonical Folder**: `cosy-crossword/`.

### 4. Critic's Corner (`critics-corner/` vs `critics_corner/`)
- **`critics-corner/`**: Contains modern standalone COSYgames layout (`index.html`, 123 lines) and `game.js`.
- **`critics_corner/`**: Contains legacy stub (`index.html`, 50 lines) and identical `game.js`.
- **Canonical Folder**: `critics-corner/`.

### 5. Emoji Odyssey (`emoji-odyssey/` vs `emoji_odyssey/`)
- **`emoji-odyssey/`**: Contains modern standalone COSYgames layout (`index.html`, 123 lines) and `game.js`.
- **`emoji_odyssey/`**: Contains legacy stub (`index.html`, 50 lines) and identical `game.js`.
- **Canonical Folder**: `emoji-odyssey/`.

### 6. Etymology Explorer (`etymology-explorer/` vs `etymology_explorer/`)
- **`etymology-explorer/`**: Contains complete standalone game files (`index.html`, `game.js`, `etymology-explorer.css`, `README.md`).
- **`etymology_explorer/`**: Contained a duplicate subset (`game.js` and `README.md`, identical line-for-line to the kebab-case version).
- **Resolution**: Verified file-by-file diff was identical; deleted `etymology_explorer/` entirely.
- **Canonical Folder**: `etymology-explorer/`.

### 7. Fluency Flow (`fluency-flow/` vs `fluency_flow/`)
- **`fluency-flow/`**: Contains modern standalone COSYgames layout (`index.html`, 123 lines) and `game.js`.
- **`fluency_flow/`**: Contains legacy stub (`index.html`, 50 lines) and identical `game.js`.
- **Canonical Folder**: `fluency-flow/`.

### 8. Hot Seat (`hot-seat/` vs `hot_seat/`)
- **`hot-seat/`**: Contains modern standalone COSYgames layout (`index.html`, 123 lines) and `game.js`.
- **`hot_seat/`**: Contains legacy stub (`index.html`, 50 lines) and identical `game.js`.
- **Canonical Folder**: `hot-seat/`.

### 9. 100 Questions (`100-questions/` vs `hundred_questions/`)
- **`100-questions/`**: Contains modern standalone COSYgames layout (`index.html`, 123 lines), `game.js`, and `decks/`.
- **`hundred_questions/`**: Contains legacy stub (`index.html`, 60 lines), identical `game.js`, and identical `decks/`.
- **Canonical Folder**: `100-questions/`.

### 10. Identity Mystery (`identity-mystery/` vs `identity_mystery/`)
- **`identity-mystery/`**: Contains modern standalone COSYgames layout (`index.html`, 123 lines) and `game.js`.
- **`identity_mystery/`**: Contains legacy stub (`index.html`, 50 lines) and identical `game.js`.
- **Canonical Folder**: `identity-mystery/`.

### 11. Last Letter (`last-letter/` vs `last_letter/`)
- **`last-letter/`**: Contains modern standalone COSYgames layout (`index.html`, 123 lines) and `game.js`.
- **`last_letter/`**: Contains legacy stub (`index.html`, 50 lines) and identical `game.js`.
- **Canonical Folder**: `last-letter/`.

### 12. Lucky Numbers (`lucky-numbers/` vs `lucky_numbers/`)
- **`lucky-numbers/`**: Contains modern standalone COSYgames layout (`index.html`, 123 lines) and `game.js`.
- **`lucky_numbers/`**: Contains legacy stub (`index.html`, 50 lines) and identical `game.js`.
- **Canonical Folder**: `lucky-numbers/`.

### 13. Object Quest (`object-quest/` vs `object_quest/`)
- **`object-quest/`**: Contains modern standalone COSYgames layout (`index.html`, 123 lines) and `game.js`.
- **`object_quest/`**: Contains legacy stub (`index.html`, 50 lines) and identical `game.js`.
- **Canonical Folder**: `object-quest/`.

### 14. Opinion Arena (`opinion-arena/` vs `opinion_arena/`)
- **`opinion-arena/`**: Contains modern standalone COSYgames layout (`index.html`, 123 lines) and `game.js`.
- **`opinion_arena/`**: Contains legacy stub (`index.html`, 50 lines) and identical `game.js`.
- **Canonical Folder**: `opinion-arena/`.

### 15. Scene Match (`scene-match/` vs `scene_match/`)
- **`scene-match/`**: Contains modern standalone COSYgames layout shell (`index.html`, 123 lines) and `game.js`.
- **`scene_match/`**: Contained `README.md` and developer tools (`tools/hotspot-editor.html`).
- **Merging Action**: Copied `README.md` and `tools/` into `scene-match/`. Deleted `scene_match/`.
- **Canonical Folder**: `scene-match/`.

### 16. Story Chain (`story-chain/` vs `story_chain/`)
- **`story-chain/`**: Contains modern standalone COSYgames layout (`index.html`, 123 lines) and `game.js`.
- **`story_chain/`**: Contains legacy stub (`index.html`, 50 lines) and identical `game.js`.
- **Canonical Folder**: `story-chain/`.

### 17. This or That (`this-or-that/` vs `this_or_that/`)
- **`this-or-that/`**: Contained `decks/` and `game.js`, but was missing `index.html`.
- **`this_or_that/`**: Contained full Tinder-style game page UI (`index.html`, 521 lines), `game.js`, and `decks/`.
- **Merging Action**: Moved `this_or_that/index.html` into `this-or-that/index.html`. Deleted `this_or_that/`.
- **Canonical Folder**: `this-or-that/`.

### 18. What Gender Is It? (`what-gender-is-it/` vs `what_gender_is_it/`)
- **`what-gender-is-it/`**: Contains modern standalone COSYgames layout (`index.html`, 123 lines) and `game.js`.
- **`what_gender_is_it/`**: Contains legacy layout (`index.html`, 185 lines) and identical `game.js`.
- **Canonical Folder**: `what-gender-is-it/`.

### 19. Word Linker (`word-linker/` vs `word_linker/`)
- **`word-linker/`**: Contains modern standalone COSYgames layout (`index.html`, 123 lines) and `game.js`.
- **`word_linker/`**: Contains legacy stub (`index.html`, 50 lines) and identical `game.js`.
- **Canonical Folder**: `word-linker/`.

---

## 🌐 Redirect Policy & External Link Audit

Grep audits across this repository, `MIGRATION-GAMES.md`, and documentation confirmed that no external applications link to the legacy snake_case paths. All active entrypoints in `index.html` and `README.md` link exclusively to the canonical kebab-case paths.

Therefore, stub redirect files are not required, and all snake_case folders have been safely removed to prevent directory clutter.
