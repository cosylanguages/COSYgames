# Contributing to COSYgames

Thank you for your interest in contributing to **COSYgames**! `COSYgames` is a self-contained web application hosting interactive vocabulary, grammar, and communicative minigames for the **COSYlanguages** ecosystem.

---

## 🏗️ Repository Architecture

Before contributing, please familiarize yourself with the structure of the repository:

```
COSYgames/
├── index.html                   # Central Games Hub entrypoint
├── templates/
│   └── game-template.html       # Standardized Game Page Template
├── _engine/                     # Core runtime engine (session, scores, view context)
├── shared/                      # Standalone shared CSS tokens, styles, navigation, and i18n scripts
├── data/                        # Multilingual game datasets & shared etymology network
├── vocabulary/
│   └── _canonical/
│       └── en/                  # Read-only vocabulary snapshot (see docs/vocabulary-source-of-truth.md)
├── games/
│   └── index.json               # Game metadata manifest (checked by automated tests)
├── scripts/                     # Sync and data validation scripts
├── tests/                       # Automated test suite
│   └── manual/                  # Manual Playwright browser test scripts
├── docs/                        # Architecture guidelines & current documentation
│   └── archive/                 # Historical audit/migration documents
└── <game_folder>/               # Per-game directories (e.g., scene-match/, battle-of-wits/)
    ├── index.html               # Standalone game page (derived from templates/game-template.html)
    └── game.js                  # Specific game logic and event handlers
```

---

## 🛠️ Contribution Guidelines

### 1. Allowed & Welcomed Contributions
You are welcome to submit Pull Requests for:
- **Game Enhancements & Bug Fixes**: Improving gameplay logic, UI, or fixing bugs in existing per-game folders (e.g., `scene-match/`, `fluency-flow/`, `cosy-crossword/`).
- **Data & Decks**: Expanding or refining vocabulary manifests, scene definitions, and card decks in `data/`.
- **Shared Styles & Utilities**: Enhancing responsive CSS, accessibility, or shared components in `shared/`.
- **Engine Improvements**: Non-breaking optimizations or bug fixes in `_engine/`.

### 2. Levels
When reading level options in game setup screens, the select value is a label (such as 'Upper (B2)').
Use `COSYLoader.getLevelKey(label)` to convert labels, CEFR codes, or legacy keys to standardized level keys.
Use `COSYLoader.pickByLevel(items, level, {min})` to select level-appropriate content with automatic widening when exact content is thin.
Datasets or items without a `level` field are left untouched, ensuring backwards compatibility for unleveled content.

### 3. Requiring Review & Maintainer Approval
Please open an issue or discussion before submitting PRs for:
- **New Games**: Proposing or adding a **new game** directory requires prior maintainer approval.
  - All approved new games **MUST** follow the canonical layout and dependency loading order defined in `templates/game-template.html`.
- **Core Engine Breaking Changes**: Modifying session management (`_engine/game_session.js`), scoring models (`_engine/scores.js`), or engine asset loaders (`_engine/loader.js`).
- **Hub Architecture Changes**: Major changes to the Games Hub layout or filter logic in `index.html`.

---

## 📋 Before You Open a PR

Before submitting a Pull Request, please ensure the following:

1. **Run Automated Tests**:
   - Run `node --test tests/*.js` and verify that all unit and drift tests pass.
   - Run `node scripts/sync-from-cosydata.js --check` to verify local dataset alignment.

2. **Requirements when Adding a Game**:
   - Copy the HTML page structure from `templates/game-template.html`.
   - Add a game card to `index.html` with appropriate `data-players` and `data-skill` attributes.
   - Add a matching game metadata entry to `games/index.json`.
   - Update the total game count in the hub title, hero headline, and meta tags (validated by `tests/hub.test.js`).

3. **Verify Relative Links & Media**:
   - Ensure all relative CSS, JS, and image references point to valid paths.
   - Validate responsive layout on both desktop and mobile screens.
