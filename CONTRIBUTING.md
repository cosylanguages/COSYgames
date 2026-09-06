# Contributing to COSYgames

Thank you for your interest in contributing to **COSYgames**! `COSYgames` is a self-contained web application hosting interactive vocabulary, grammar, and communicative minigames for the **COSYlanguages** ecosystem.

---

## 🏗️ Repository Architecture

Before contributing, please familiarize yourself with the structure of the repository:

```
COSYgames/
├── index.html                  # Games Hub Entrance & Directory
├── _template.html              # Standard HTML template for standalone game pages
├── _engine/                    # Shared game engine scripts & utilities (session, scores, loader)
├── shared/                     # Standalone shared CSS tokens, styles, and core UI scripts
├── data/                       # Scene data, game card decks & vocabulary manifests
└── <game_folder>/              # Per-game directories (e.g., scene_match/, battle_of_wits/)
    ├── index.html              # Standalone game page (derived from _template.html)
    └── game.js                 # Specific game logic and event handlers
```

---

## 🛠️ Contribution Guidelines

### 1. Allowed & Welcomed Contributions
You are welcome to submit Pull Requests for:
- **Game Enhancements & Bug Fixes**: Improving gameplay logic, UI, or fixing bugs in existing per-game folders (e.g., `scene_match/`, `fluency_flow/`, `cosy_crossword/`).
- **Data & Decks**: Expanding or refining vocabulary manifests, scene definitions, and card decks in `data/`.
- **Shared Styles & Utilities**: Enhancing responsive CSS, accessibility, or shared components in `shared/`.
- **Engine Improvements**: Non-breaking optimizations or bug fixes in `_engine/`.

### 2. Requiring Review & Maintainer Approval
Please open an issue or discussion before submitting PRs for:
- **New Games**: Proposing or adding a **new game** directory requires prior maintainer approval.
  - All approved new games **MUST** follow the canonical layout and dependency loading order defined in `_template.html`.
- **Core Engine Breaking Changes**: Modifying session management (`_engine/game_session.js`), scoring models (`_engine/scores.js`), or engine asset loaders (`_engine/loader.js`).
- **Hub Architecture Changes**: Major changes to the Games Hub layout or filter logic in `index.html`.

---

## 📋 How to Submit a Pull Request

1. Fork the `COSYgames` repository.
2. Create a feature branch (`git checkout -b feature/improve-scene-match`).
3. Validate your changes locally in a browser across supported screen sizes.
4. Ensure all JavaScript and JSON files conform to clean formatting and pass basic linting.
5. Commit your changes with clear, descriptive commit messages.
6. Push to your fork and submit a Pull Request.
