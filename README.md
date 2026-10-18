# COSYgames

Interactive language-learning games for solo players, groups, online lessons and classrooms: speaking drills, vocabulary practice and
mystery or guessing games across CEFR levels. No account or setup is needed to play.

- **Play:** <https://cosylanguages.github.io/COSYgames/>
- **COSYlanguages (main site):** <https://cosylanguages.github.io/COSYlanguages/>

## Games

<!-- cosy:readme:games -->
| Game | What you do | Players | CEFR levels | Languages | Folder |
| :--- | :--- | :--- | :--- | :--- | :--- |
| [Fluency Flow](fluency-flow/) | Spin for a random topic and speak for 1–5 minutes without stopping. Flow, not perfection. | Solo or group | A1–C2 | EN, FR, ES, DE, IT, RU, EL, PT, BA, TT, BR | `fluency-flow/` |
| [Battle of Wits](battle-of-wits/) | Two topics, two sides. Build your arguments and debate in the language you're learning. | Group | B1–C2 | EN, FR, IT, RU, EL | `battle-of-wits/` |
| [Opinion Arena](opinion-arena/) | Agree or disagree with a statement, then defend your view. Real opinions, real language. | Solo or group | A2–C2 | EN, FR, ES, DE, IT, RU, EL, PT, BA, TT, BR | `opinion-arena/` |
| [Critic's Corner](critics-corner/) | A famous quote appears. What does it mean to you? Deep discussion for advanced levels. | Solo or group | B2–C2 | EN, FR, ES, DE, IT, RU, EL | `critics-corner/` |
| [100 Questions](100-questions/) | Pick a deck and answer deep, funny, or philosophical questions. Perfect for speaking practice. | Solo or group | A2–C2 | EN, FR, RU | `100-questions/` |
| [Story Chain](story-chain/) | Add one sentence at a time to build a collaborative story with prompts and connectors. | Solo or group | A1–C2 | EN, FR, ES, DE, IT, RU, EL | `story-chain/` |
| [Story Weaver](story-weaver/) | Weave target words into a coherent narrative. Turn vocabulary study into creative writing. | Solo or group | A1–C2 | EN | `story-weaver/` |
| [Hot Seat](hot-seat/) | One player faces away from the board while team members explain target words without saying them. | Solo or group | A1–C2 | EN, FR, ES, DE, IT, RU, EL | `hot-seat/` |
| [Action Hero](action-hero/) | Act out or explain dynamic action verbs and scenarios against the clock. | Group | A1–C2 | EN, FR, ES, DE, IT, RU, EL, PT, BR | `action-hero/` |
| [Identity Mystery](identity-mystery/) | Deduce the hidden identity through strategic 20 questions and clues. | Solo or group | A2–C2 | EN, FR, ES, DE, IT, RU, EL, PT, BR | `identity-mystery/` |
| [Object Quest](object-quest/) | Describe, locate, and guess secret objects using descriptive target vocabulary. | Solo or group | A1–C2 | EN, FR, ES, DE, IT, RU, EL | `object-quest/` |
| [Scene Match](scene-match/) | Explore interactive visual rooms and match vocabulary items to scene objects. | Solo | A1–C2 | EN, FR, IT, RU, EL | `scene-match/` |
| [Word Linker](word-linker/) | Connect related vocabulary words to build semantic chains. | Solo or group | A1–C2 | EN, FR, ES, DE, IT, RU, EL | `word-linker/` |
| [Last Letter](last-letter/) | Chain vocabulary words by matching the last letter of each word to the next. | Solo or group | A1–C2 | EN, FR, ES, DE, IT, RU, EL | `last-letter/` |
| [Emoji Odyssey](emoji-odyssey/) | Decode phrases and idioms represented purely through emoji sequences. | Solo or group | A1–C2 | EN, FR, ES, DE, IT, RU, EL | `emoji-odyssey/` |
| [Cosy Crossword](cosy-crossword/) | Solve language puzzles with tailored vocabulary clues and crosswords. | Solo | A1–C2 | EN, FR, IT, RU, EL | `cosy-crossword/` |
| [Lucky Numbers](lucky-numbers/) | Practice numbers, counting, and math expressively in your target language. | Solo or group | A0–C2 | EN, FR, ES, DE, IT, RU, EL | `lucky-numbers/` |
| [Etymology Explorer](etymology-explorer/) | Uncover word origins, roots, and language family connections. | Solo | B1–C2 | EN, FR, IT, DE, ES, RU, EL, PT, HY, KA, BA, TT, BR | `etymology-explorer/` |
| [This or That?](this-or-that/) | Choose between two intriguing options and justify your choice. | Solo or group | A0–B2 | EN, FR, IT, RU, EL | `this-or-that/` |
<!-- /cosy:readme:games -->

This table is generated from `games/index.json` and the hub's card texts (`node scripts/sync-readme.js`); do not edit it by hand.

## Languages and content

- **Practice language** is the language a game's content is in; **interface language** is the language of the buttons and menus (EN, FR, ES, DE, IT, RU, EL).
  Content is monolingual: no translations are shown next to it.
- Vocabulary comes from [COSYdata](https://cosylanguages.github.io/COSYdata/), the single source of truth (`docs/vocabulary-source-of-truth.md`).
- How much content each game has per language: `docs/CONTENT_COVERAGE.md`.

## Run locally

The site is static, but the games load JSON files, so serve it over HTTP rather than opening the files directly:

```bash
python3 -m http.server 8000   # then open http://localhost:8000/
```

## Project layout

| Path | What is in it |
| :--- | :--- |
| `index.html`, `shared/js/hub*.js` | The games hub (filters, deep links) |
| `<game>/` | One folder per game, listed in `games/index.json` |
| `data/` | Per-language game content and `game-taxonomy.json` (topics, levels, formats) |
| `_engine/`, `shared/` | Common game engine, UI code, styles and the generated nav/footer templates (`shared/chrome/`) |
| `site.config.json` | Base URLs of the COSY sites and the shared header/footer settings |
| `scripts/`, `tests/` | Maintenance scripts and the automated tests |
| `docs/` | Metadata, taxonomy, URL and content documentation |

## Quality checks

```bash
node --test tests/*.js                 # the full automated test suite
node scripts/sync-site-urls.js --check # every link to a COSY site matches site.config.json
node scripts/sync-site-chrome.js       # regenerate the shared navigation and footer
node scripts/sync-readme.js            # regenerate the games table above
node scripts/metadata-report.js        # where games/index.json, GAMES_INVENTORY.json and the taxonomy differ
```

See `docs/GAME_METADATA.md`, `docs/SITE_URLS.md` and `docs/GAME_TAXONOMY.md` for how these fit together, and `CONTRIBUTING.md` for adding or changing a game.

## License

Copyright (c) 2022-2026 COSY Languages. All rights reserved. See `LICENSE`.
