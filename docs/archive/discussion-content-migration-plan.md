> ⚠️ **Historical document (archived 2026-10-03).** Written during the migration/audit work and not kept up to date. For current information see README.md and CONTRIBUTING.md.

# 🗺️ Audit & Migration Plan: COSYlanguages Discussion Content to COSYgames

This audit document analyzes the open-ended discussion questions, opinion prompts, speaking topics, and debate content from **COSYlanguages** (`debates.js`, `fluency.js`, `opinions.js`, `speaking.js`) and defines how this content maps into existing or new minigames within **COSYgames**.

---

## 1. Audit of Existing Minigames in `COSYgames`

`COSYgames` hosts **20 interactive standalone minigames** indexed in `games/index.json`.

### Clarification on Prompt-Referenced Minigames
The user prompt specifically inquired about `grammar-arena`, `pronunciation-hero`, `scene-match`, and `vocab-builder`:
- **`scene-match`**: Active minigame in `COSYgames` (`scene-match/`). It consumes hotspot dataset objects from `data/scenes/*.js` (`{ id, name, rect, hint }`) for visual vocabulary matching.
- **`grammar-arena`**, **`pronunciation-hero`**, **`vocab-builder`**: These minigames are **not present** as standalone directories in `COSYgames`. They represent historical prototype concepts from `COSYlanguages` or general activity names that were replaced during the standardization of COSYgames into its current 20 canonical games (e.g. `what-gender-is-it` handles grammar drills; `action-hero`, `hot-seat`, `word-linker`, `emoji-odyssey` handle vocabulary building).

---

### Full Catalog of Existing Minigames & Data Schemas

| Minigame Directory | Display Name | Category | Primary Data Source | Input Schema & Consumed Data Format | Engine Hooks & Integration |
| :--- | :--- | :--- | :--- | :--- | :--- |
| `fluency-flow/` | **Fluency Flow** | Speaking & Fluency | `data/<lang>/game_data.js` (`.fluency`) | Array of objects: `[{ text: string, level: string }]` (e.g. `{ text: "Your morning routine ☕", level: "elementary" }`) | `COSYLoader.loadLevelData`, `TurnBanner`, `ScoreDial`, `view_context` ('phone' \| 'online' \| 'projector') |
| `opinion-arena/` | **Opinion Arena** | Speaking & Fluency | `data/<lang>/game_data.js` (`.opinions`) | Array of objects: `[{ text: string, level: string }]` (e.g. `{ text: "Public transportation should be free for all residents.", level: "upper_intermediate" }`) | `COSYLoader.loadLevelData`, `TurnBanner`, `ScoreDial`, `view_context` |
| `battle-of-wits/` | **Battle of Wits** | Speaking & Fluency | `data/<lang>/game_data.js` (`.battle`) | Array of 2-element string tuples: `[["Option A 🏔️", "Option B 🏖️"]]` OR structured debate objects: `{ topic, sideA, sideB, ideasA, ideasB, level }` | `COSYLoader.loadLevelData`, `TurnBanner`, `BuzzerButton`, `ScoreDial` |
| `critics-corner/` | **Critic's Corner** | Speaking & Fluency | `data/<lang>/game_data.js` (`.critic`) | Array of objects: `[{ title: string, type: string, review: string, question: string }]` | `COSYLoader.loadLevelData`, `TurnBanner`, `ScoreDial` |
| `100-questions/` | **100 Questions** | Speaking & Fluency | `100-questions/decks/*.js` | JS deck arrays: `[{ id: number, text: string, alt_text?: string, level: string, icon: string }]` | Custom deck selector, swipe gestures, dual-sided cards (student/family/myself) |
| `this-or-that/` | **This or That?** | Speaking & Fluency | `this-or-that/decks/*.json` | Array of profile/dilemma objects: `{ type, level, category, title, optionA: { emoji, title, desc }, optionB: { emoji, title, desc }, prompt }` | Swipe gesture engine, CEFR level filter, card UI |
| `story-chain/` | **Story Chain** | Speaking & Fluency | `data/<lang>/game_data.js` (`.storychain`, `.action`) | Array of prompt objects: `[{ prompt: string, starters: string[], words: string[], level: string }]` | `COSYLoader.loadLevelData`, turn timers, word chips |
| `story-weaver/` | **Story Weaver** | Speaking & Fluency | `data/<lang>/game_data.js` / universal | Multi-prompt narrative weaver: `{ genre, characters, setting, conflict, level }` | Card layout, prompt shuffling, timer |
| `hot-seat/` | **Hot Seat** | Speaking & Fluency / Vocab | `data/<lang>/game_data.js` (`.action`) | Level-grouped target word arrays: `{ starter: [...], elementary: [...] }` | Taboo/Hot Seat timer, buzzer, team scoring |
| `action-hero/` | **Action Hero** | Mystery & Guesses | `data/<lang>/game_data.js` (`.action`) | Array of action verb strings per level | Charades timer, turn banner, score persistence |
| `identity-mystery/` | **Identity Mystery** | Mystery & Guesses | `data/<lang>/game_data.js` (`.identity`) | Array of persona objects: `[{ person: string, clue: string, level: string }]` | Progressive clue reveal, guessing input |
| `object-quest/` | **Object Quest** | Mystery & Guesses | `data/<lang>/game_data.js` / universal | Array of object riddle cards: `{ object: string, clues: string[], level: string }` | Multi-clue reveal, team turn system |
| `scene-match/` | **Scene Match** | Vocab & Puzzles | `data/scenes/*.js` | Hotspot array objects: `{ sceneId, title, hotspots: [{ id, name, rect, hint }] }` | Interactive SVG/canvas hotspot editor & player |
| `word-linker/` | **Word Linker** | Vocab & Puzzles | `data/<lang>/game_data.js` (`.wordlinker`) | Array of puzzle objects: `[{ words: string[4], odd: string, link: string, oddReason: string, level?: string }]` | Grid selection, odd-one-out validation |
| `last-letter/` | **Last Letter** | Vocab & Puzzles | `data/<lang>/game_data.js` / universal | Dictionary list of target words per language | Word validation engine, tail-to-head matching |
| `emoji-odyssey/` | **Emoji Odyssey** | Vocab & Puzzles | `data/universal.js` / internal | Array of emoji-word pairs: `[{ emoji: string, word: string, distractor: string }]` | Constellation UI, guess mode vs story mode |
| `cosy-crossword/` | **Cosy Crossword** | Vocab & Puzzles | Preset vocab & level arrays | Array of word-clue objects: `[{ word: string, clue: string }]` | Grid generator, stamped ink reveal identity |
| `lucky-numbers/` | **Lucky Numbers** | Vocab & Puzzles | Universal number/bingo sets | Bingo board configurations (0-9, 10-19, 20-99, A-Z) | Caller vs Player roles, speech synthesis audio |
| `etymology-explorer/` | **Etymology Explorer** | Vocab & Puzzles | `data/<lang>/game_data.js` (`.etymology`) & `data/shared/` | Array of etymology objects: `[{ word, level, options, answer, detail, path }]` | Archaeological dig site UI, step-by-step path visualizer |
| `what-gender-is-it/` | **What Gender Is It?** | Vocab & Puzzles | `data/gender/*.js` | Array of noun objects: `[{ word, gender, hint, rule, translation, level }]` | Gender swipe/button cards, grammar rule explanations |

---

## 2. Plausible Content Mapping

The `COSYlanguages` discussion files (`debates.js`, `fluency.js`, `opinions.js`, `speaking.js`) contain open-ended communicative prompts across CEFR levels A2–C2. Here is how they map into existing `COSYgames` minigames with **zero to minimal schema changes**:

### A. `opinions.js` & `speaking.js` (Short Open-Ended Prompts & Statements)
- **Primary Game Match**: **`opinion-arena`**
- **Schema Compatibility**: **100% Match**
  - Current schema: `[{ text: string, level: string }]`
  - Example `opinions.js` entry: `{ text: "Public transportation should be free for all residents.", level: "upper_intermediate" }`
  - Zero schema change required.
- **Secondary Game Match**: **`100-questions`**
  - Schema Compatibility: High (can be packaged as standalone card decks in `100-questions/decks/` or loaded dynamically).

### B. `fluency.js` (Longer Personal Reflection Speaking Prompts)
- **Primary Game Match**: **`fluency-flow`**
- **Schema Compatibility**: **100% Match**
  - Current schema: `[{ text: string, level: string }]`
  - Example `fluency.js` entry: `{ text: "A childhood memory that shaped who you are 🧸", level: "intermediate" }`
  - Zero schema change required.

### C. `debates.js` (Debate Topics, Binary Dilemmas, Pro/Con Points)
- **Primary Game Match**: **`battle-of-wits`**
- **Schema Compatibility**: **100% Match**
  - `battle-of-wits` already supports two input formats:
    1. Binary pair tuples: `["Option A 🏔️", "Option B 🏖️"]`
    2. Structured debate objects: `{ topic: string, sideA: string, sideB: string, ideasA?: string[], ideasB?: string[], level?: string }`
  - Both simple A vs B debate pairs and structured argument lists fit directly into `battle-of-wits`.

---

## 3. Architecture for Potential New Minigames

If maintainers decide to create dedicated minigames for specialized discussion patterns (e.g., multi-round debate tournaments or quotes/wisdom prompts), any new minigame must follow the established architectural conventions of `COSYgames`:

### Required File Structure & Conventions
A new game (e.g. `debate-arena/` or `wisdom-wall/`) must be created as a standalone directory adhering to `_template.html`:
```
new-game/
├── index.html          # Standalone entrypoint including _engine components & tokens
├── game.js            # Standalone game logic encapsulated in IIFE attached to window.COSY_GAME
└── new-game.css       # Game-specific styles extending shared/css/tokens.css
```

### Key Architectural Patterns & Engine Hooks
1. **Core Engine Scripts**: Standardized `<head>` load order:
   ```html
   <link rel="stylesheet" href="../shared/css/tokens.css">
   <link rel="stylesheet" href="../_engine/components.css">
   <script src="../_engine/view_context.js"></script>
   <script src="../_engine/game_session.js"></script>
   <script src="../_engine/scores.js"></script>
   <script src="../_engine/loader.js"></script>
   ```
2. **Shared Components**: Utilize global engine helpers:
   - `TurnBanner`: Header turn and timer display (`window.TurnBanner`)
   - `ScoreDial`: Score visualization (`window.ScoreDial`)
   - `BuzzerButton`: Group participation triggers (`window.BuzzerButton`)
3. **Data Loading**: Call `COSYLoader.loadLevelData(lang, level)` on initialization and fetch game datasets from `window.gameData[lang]`.
4. **View Contexts**: Support responsive contexts set by `_engine/view_context.js` (`data-context="phone"`, `"online"`, `"projector"`).
5. **URL Handoff**: Honor query parameters (`?lang=`, `?level=`, `?topic=`) via `COSYLoader.applyHandoffParams()`.
6. **Design Tokens**: Standard CSS variables (`var(--game-accent)`, `var(--game-accent-dim)`, `var(--radius-lg)`).

---

## 4. Discussion Prompts Audit Breakdown Across Languages & Levels

The tables below quantify all existing discussion prompts in `COSYgames` (`data/<lang>/game_data.js`), sourced from the canonical data files corresponding to the `COSYlanguages` practice files.

### Summary Totals Across All 13 Languages

| Content Type | File Source Equivalent | Total Prompts Sourced | Primary Target Minigame |
| :--- | :--- | :---: | :--- |
| **Fluency Prompts** | `fluency.js` | **547** | `fluency-flow` |
| **Opinion Prompts** | `opinions.js` / `speaking.js` | **323** | `opinion-arena` |
| **Debate Topics** | `debates.js` | **1,237** | `battle-of-wits` |
| **TOTAL PROMPTS** | | **2,107** | |

---

### Detailed Prompt Breakdown by Language & CEFR Level

#### 1. Fluency Prompts (`fluency.js` $\rightarrow$ `fluency-flow`)

| Lang Code | Language Name | Starter (A1) | Elementary (A2) | Intermediate (B1) | Upper-Inter. (B2) | Advanced (C1-C2) | Total Fluency |
| :---: | :--- | :---: | :---: | :---: | :---: | :---: | :---: |
| `en` | English | 5 | 6 | 8 | 5 | 3 | **27** |
| `fr` | French | 5 | 24 | 6 | 5 | 3 | **43** |
| `it` | Italian | 5 | 24 | 6 | 5 | 3 | **43** |
| `ru` | Russian | 5 | 24 | 6 | 5 | 3 | **43** |
| `el` | Greek | 5 | 24 | 6 | 5 | 3 | **43** |
| `es` | Spanish | 5 | 24 | 6 | 5 | 3 | **43** |
| `de` | German | 5 | 24 | 6 | 5 | 3 | **43** |
| `pt` | Portuguese | 5 | 25 | 6 | 5 | 3 | **44** |
| `br` | Breton | 5 | 25 | 6 | 5 | 3 | **44** |
| `ba` | Bashkir | 5 | 25 | 6 | 5 | 3 | **44** |
| `ka` | Georgian | 5 | 24 | 6 | 5 | 3 | **43** |
| `hy` | Armenian | 5 | 25 | 6 | 5 | 3 | **44** |
| `tt` | Tatar | 5 | 24 | 6 | 5 | 3 | **43** |
| **TOTAL** | | **65** | **318** | **78** | **65** | **39** | **547** |

---

#### 2. Opinion Prompts (`opinions.js` / `speaking.js` $\rightarrow$ `opinion-arena`)

| Lang Code | Language Name | Elementary (A2) | Intermediate (B1) | Upper-Inter. (B2) | Advanced (C1-C2) | Total Opinions |
| :---: | :--- | :---: | :---: | :---: | :---: | :---: |
| `en` | English | 0 | 15 | 3 | 2 | **20** |
| `fr` | French | 15 | 10 | 3 | 2 | **30** |
| `it` | Italian | 15 | 5 | 3 | 2 | **25** |
| `ru` | Russian | 15 | 7 | 3 | 2 | **27** |
| `el` | Greek | 15 | 4 | 3 | 2 | **24** |
| `es` | Spanish | 15 | 8 | 3 | 2 | **28** |
| `de` | German | 15 | 5 | 3 | 2 | **25** |
| `pt` | Portuguese | 15 | 4 | 3 | 2 | **24** |
| `br` | Breton | 15 | 4 | 3 | 2 | **24** |
| `ba` | Bashkir | 15 | 4 | 3 | 2 | **24** |
| `ka` | Georgian | 15 | 4 | 3 | 2 | **24** |
| `hy` | Armenian | 15 | 4 | 3 | 2 | **24** |
| `tt` | Tatar | 15 | 4 | 3 | 2 | **24** |
| **TOTAL** | | **180** | **78** | **39** | **26** | **323** |

---

#### 3. Debate Prompts (`debates.js` $\rightarrow$ `battle-of-wits`)

| Lang Code | Language Name | Total Debate Topics / Pairs | Primary Level Distribution |
| :---: | :--- | :---: | :--- |
| `en` | English | **14** | General / A2–B2 |
| `fr` | French | **166** | Elementary (A2) |
| `it` | Italian | **166** | Elementary (A2) |
| `ru` | Russian | **166** | Elementary (A2) |
| `el` | Greek | **166** | Elementary (A2) |
| `es` | Spanish | **13** | General / A2–B2 |
| `de` | German | **12** | General / A2–B2 |
| `pt` | Portuguese | **10** | General / A2–B2 |
| `br` | Breton | **10** | General / A2–B2 |
| `ba` | Bashkir | **8** | General / A2–B2 |
| `ka` | Georgian | **8** | General / A2–B2 |
| `hy` | Armenian | **8** | General / A2–B2 |
| `tt` | Tatar | **8** | General / A2–B2 |
| **TOTAL** | | **1,237** | |

---

## 5. Conclusion & Next Steps

1. **Schema Alignment**: All open-ended discussion content in `debates.js`, `fluency.js`, `opinions.js`, and `speaking.js` maps cleanly onto existing `COSYgames` engines (`fluency-flow`, `opinion-arena`, `battle-of-wits`) with **zero schema changes**.
2. **Dataset Synchronization**: Migration from `COSYlanguages` to `COSYgames` can be performed seamlessly by extending `scripts/sync-from-cosydata.js` or executing automated dataset sync commands.
3. **Future Expansions**: If quotes or structured multi-speaker debate tournaments are introduced in the future, standalone minigame templates (`quote-weaver` / `debate-arena`) can be implemented following the architectural guidelines in Section 3.
