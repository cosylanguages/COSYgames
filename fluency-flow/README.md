# Fluency Flow

Spin for a random topic and speak for 1–5 minutes without stopping. Flow, not perfection.

<!-- cosy:manifest:start -->
**At a glance**

| Field | Value |
| --- | --- |
| Category | Speaking & Fluency |
| Skill focus | fluency |
| CEFR levels | A1–C2 |
| Learning languages | English 🇬🇧, Français 🇫🇷, Español 🇪🇸, Deutsch 🇩🇪, Italiano 🇮🇹, Русский 🇷🇺, Ελληνικά 🇬🇷, Português 🇵🇹, Башҡортса 🇷🇺, Татарча 🇷🇺 |
| Modes | Solo or Group |
| Duration | Varies by round settings; the setup screen shows the available modes. |
| Entry point | [`index.html`](index.html) |

**Data and dependencies**

- **Shared data:** `data/*/fluency.js`
- **External dependencies:** `shared/js/game-strings.js`, `i18n/games/fluency-flow.js`
- **Discovery topics:** everyday-life, places-travel, hobbies-entertainment, people-feelings, learning-knowledge, work-future, nature-world, society-culture, opinions-ideas, real-life-communication, stories-mystery

**Contract**

This game does not import code or assets from another game. It may use the shared shell, the COSY turquoise brand layer, and shared COSYdata loaders.
See [`docs/ARCHITECTURE.md`](../docs/ARCHITECTURE.md) for the isolation contract and the design system.

*Generated from `games/index.json`, `GAMES_INVENTORY.json`, and `data/game-taxonomy.json` by `node scripts/sync-game-manifests.js`.*
<!-- cosy:manifest:end -->

## Development

Run the game from a static server, or open `index.html` through the hub. The shared shell loads `shared/css/tokens.css` and `shared/css/brand.css`; this game owns its own CSS, JavaScript, and data.
