# Opinion Arena

Agree or disagree with a statement, then defend your view. Real opinions, real language.

<!-- cosy:manifest:start -->
**At a glance**

| Field | Value |
| --- | --- |
| Category | Speaking & Fluency |
| Skill focus | speaking |
| CEFR levels | A2–C2 |
| Learning languages | English 🇬🇧, Français 🇫🇷, Español 🇪🇸, Deutsch 🇩🇪, Italiano 🇮🇹, Русский 🇷🇺, Ελληνικά 🇬🇷, Português 🇵🇹, Башҡортса 🇷🇺, Татарча 🇷🇺 |
| Modes | Solo or Group |
| Duration | Varies by round settings; the setup screen shows the available modes. |
| Entry point | [`index.html`](index.html) |

**Data and dependencies**

- **Shared data:** `data/*/opinions.js`
- **External dependencies:** `shared/js/game-strings.js`, `i18n/games/opinion-arena.js`
- **Discovery topics:** opinions-ideas, everyday-life, hobbies-entertainment, people-feelings, society-culture, learning-knowledge, nature-world, work-future

**Contract**

This game does not import code or assets from another game. It may use the shared shell, the COSY turquoise brand layer, and shared COSYdata loaders.
See [`docs/ARCHITECTURE.md`](../docs/ARCHITECTURE.md) for the isolation contract and the design system.

*Generated from `games/index.json`, `GAMES_INVENTORY.json`, and `data/game-taxonomy.json` by `node scripts/sync-game-manifests.js`.*
<!-- cosy:manifest:end -->

## Development

Run the game from a static server, or open `index.html` through the hub. The shared shell loads `shared/css/tokens.css` and `shared/css/brand.css`; this game owns its own CSS, JavaScript, and data.
