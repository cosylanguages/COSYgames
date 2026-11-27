# Emoji Odyssey

Decode phrases and idioms represented purely through emoji sequences.

<!-- cosy:manifest:start -->
**At a glance**

| Field | Value |
| --- | --- |
| Category | Vocab & Puzzles |
| Skill focus | vocabulary |
| CEFR levels | A1–C2 |
| Learning languages | English 🇬🇧, Français 🇫🇷, Español 🇪🇸, Deutsch 🇩🇪, Italiano 🇮🇹, Русский 🇷🇺, Ελληνικά 🇬🇷 |
| Modes | Solo or Group |
| Duration | Varies by round settings; the setup screen shows the available modes. |
| Entry point | [`index.html`](index.html) |

**Data and dependencies**

- None listed in `GAMES_INVENTORY.json`.
- **External dependencies:** `COSYdata / shared/js/vocab-loader.js`, `i18n/games/emoji-odyssey.js`
- **Discovery topics:** everyday-life, hobbies-entertainment, people-feelings, stories-mystery, society-culture, words-grammar

**Contract**

This game does not import code or assets from another game. It may use the shared shell, the COSY turquoise brand layer, and shared COSYdata loaders.
See [`docs/ARCHITECTURE.md`](../docs/ARCHITECTURE.md) for the isolation contract and the design system.

*Generated from `games/index.json`, `GAMES_INVENTORY.json`, and `data/game-taxonomy.json` by `node scripts/sync-game-manifests.js`.*
<!-- cosy:manifest:end -->

## Development

Run the game from a static server, or open `index.html` through the hub. The shared shell loads `shared/css/tokens.css` and `shared/css/brand.css`; this game owns its own CSS, JavaScript, and data.
