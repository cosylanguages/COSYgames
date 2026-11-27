# This or That?

Choose between two intriguing options and justify your choice.

<!-- cosy:manifest:start -->
**At a glance**

| Field | Value |
| --- | --- |
| Category | Speaking & Fluency |
| Skill focus | speaking |
| CEFR levels | A0–B2 |
| Learning languages | English 🇬🇧, Français 🇫🇷, Italiano 🇮🇹, Русский 🇷🇺, Ελληνικά 🇬🇷 |
| Modes | Solo or Group |
| Duration | Varies by round settings; the setup screen shows the available modes. |
| Entry point | [`index.html`](index.html) |

**Data and dependencies**

- **Game data:** `decks/cefr_all_decks.json`, `decks/french.json`, `decks/greek.json`, `decks/italian.json`, `decks/russian.json`, `decks/en/*.json`
- **External dependencies:** None listed
- **Discovery topics:** everyday-life, hobbies-entertainment, places-travel, people-feelings, opinions-ideas, society-culture, words-grammar, work-future

**Contract**

This game does not import code or assets from another game. It may use the shared shell, the COSY turquoise brand layer, and shared COSYdata loaders.
See [`docs/ARCHITECTURE.md`](../docs/ARCHITECTURE.md) for the isolation contract and the design system.

*Generated from `games/index.json`, `GAMES_INVENTORY.json`, and `data/game-taxonomy.json` by `node scripts/sync-game-manifests.js`.*
<!-- cosy:manifest:end -->

## Development

Run the game from a static server, or open `index.html` through the hub. The shared shell loads `shared/css/tokens.css` and `shared/css/brand.css`; this game owns its own CSS, JavaScript, and data.
