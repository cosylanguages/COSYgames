# Game metadata: which file is for what

COSYgames describes each game in three files. They overlap on purpose, but each answers a different question.
When you add, rename or remove a game, update all three; `tests/metadata-consistency.test.js` checks the games list.

| File | Answers | Used by |
|---|---|---|
| `games/index.json` | What does the game's own setup screen offer? (menu languages, selectable levels, solo/group) | hub cards, `shared/js/*`, level/language tests |
| `GAMES_INVENTORY.json` | Which language data files and external dependencies does the game load? | data audits, migration |
| `data/game-taxonomy.json` | How should the game be discovered? (topics, subtopics, content-tagged levels, formats, audiences) | hub filters (`shared/js/game-taxonomy.js`) |

## Fields that look alike but mean different things

- **Levels.** `index.json → cefr_levels` is what a player can *select* in the setup screen. `game-taxonomy.json → levels` is where content is *tagged*
  (see `levelAvailability`). Word Linker lets players choose A1–C2 but its puzzles are tagged B1–B2, so the two lists legitimately differ.
- **Languages.** `index.json → learning_languages` are the languages in the game's menu (enforced by `tests/languages.test.js`).
  `GAMES_INVENTORY.json → languages` are the languages that have data files. A menu language with no data file (for example 100 Questions: `fr`, `ru`)
  or data with no menu entry (for example `pt`, `tt`, `hy`, `ka`) is worth a human decision.
- **Category.** `index.json → category` is the hub's *game family* (Speaking & Fluency, Mystery & Guesses, Vocab & Puzzles).
  `game-taxonomy.json → categories` are *topic* categories (Everyday life, Society & culture, ...). They are unrelated despite the shared name.
- **Modes.** `index.json → mode` is `solo` / `group`. The taxonomy uses finer `solo`, `pairs`, `mini-group`, `big-group`; `group` means "any of the last three".

## Deep links and aliases

The hub opens a game for `?game=<id>`. `shared/js/hub-core.js` resolves the id against `games/index.json`: the kebab-case `id`, its `snake_case` form
(`fluency_flow`), or one of the game's `aliases` (legacy short names such as `fluency`, `bingo`, `storytelling`). Only ids from the file can be
opened. To keep an old link alive after renaming a game, add the old name to that game's `aliases`; `tests/hub-core.test.js` checks that aliases are
unique and never shadow an id, and that every key the hub accepted before the refactor still works.

The hub's filtering and link-building logic is pure code in `shared/js/hub-core.js` (unit-tested in Node); `shared/js/hub.js` only wires it to the page.

## The drift guard

`node scripts/metadata-report.js` prints every place the three files currently differ.
`tests/fixtures/metadata-known-differences.json` is the reviewed baseline of those differences.

- A structural problem (a game missing from one file, a folder not listed, a broken redirect stub) always fails the test.
- A *new* difference, or a baselined one that gets fixed, also fails, so the baseline never goes stale.
  After reviewing the change, accept it with `node scripts/metadata-report.js --update` and commit the updated baseline.
- Redirect-only folders (currently `storytelling/` → `story-weaver/`) are listed in `scripts/lib/metadata-diff.js`.

## Differences waiting for a decision (see the baseline)

- **Modes:** Etymology Explorer and What Gender Is It? are solo in `index.json`, but the taxonomy lists pairs and groups as facilitation options.
- **Languages:** 12 games differ; the largest groups are data for `ba`, `br`, `hy`, `ka`, `pt`, `tt` with no menu entry, and 100 Questions / Lucky Numbers
  offering menu languages with no data file.
- **Levels:** 9 games differ; most are the selectable-vs-tagged distinction above, but Fluency Flow (taxonomy lists A0 and omits C2) and
  Opinion Arena (setup A2–C2, tagged B1–C1) deserve a check against the game's setup screen.
