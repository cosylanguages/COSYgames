# Battle of Wits

Two topics, two sides. Build your arguments and debate in the language you're learning.

<!-- cosy:manifest:start -->
**At a glance**

| Field | Value |
| --- | --- |
| Category | Speaking & Fluency |
| Skill focus | speaking |
| CEFR levels | B1–C2 |
| Learning languages | English 🇬🇧, Français 🇫🇷, Italiano 🇮🇹, Русский 🇷🇺, Ελληνικά 🇬🇷 |
| Modes | Group |
| Duration | Varies by round settings; the setup screen shows the available modes. |
| Entry point | [`index.html`](index.html) |

**Data and dependencies**

- **Shared data:** `data/*/battle.js`
- **External dependencies:** `shared/js/game-strings.js`, `i18n/games/battle-of-wits.js`
- **Discovery topics:** opinions-ideas, society-culture, learning-knowledge, work-future, nature-world, hobbies-entertainment

**Contract**

This game does not import code or assets from another game. It may use the shared shell, the COSY turquoise brand layer, and shared COSYdata loaders.
See [`docs/ARCHITECTURE.md`](../docs/ARCHITECTURE.md) for the isolation contract and the design system.

*Generated from `games/index.json`, `GAMES_INVENTORY.json`, and `data/game-taxonomy.json` by `node scripts/sync-game-manifests.js`.*
<!-- cosy:manifest:end -->

## Development

Run the game from a static server, or open `index.html` through the hub. The shared shell loads `shared/css/tokens.css` and `shared/css/brand.css`; this game owns its own CSS, JavaScript, and data.
