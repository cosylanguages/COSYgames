# What Gender Is It?

Master noun genders with speed rounds and grammar memory triggers.

<!-- cosy:manifest:start -->
**At a glance**

| Field | Value |
| --- | --- |
| Category | Vocab & Puzzles |
| Skill focus | grammar |
| CEFR levels | A1–C2 |
| Learning languages | Français 🇫🇷, Español 🇪🇸, Italiano 🇮🇹, Deutsch 🇩🇪, Русский 🇷🇺, Ελληνικά 🇬🇷, Brezhoneg 🏴 |
| Modes | Solo |
| Duration | Varies by round settings; the setup screen shows the available modes. |
| Entry point | [`index.html`](index.html) |

**Data and dependencies**

- **Shared data:** `data/gender/a1.js`, `data/gender/a2.js`, `data/gender/b1.js`, `data/gender/b2.js`, `data/gender/c1.js`, `data/gender/c2.js`
- **External dependencies:** None listed
- **Discovery topics:** words-grammar, everyday-life

**Contract**

This game does not import code or assets from another game. It may use the shared shell, the COSY turquoise brand layer, and shared COSYdata loaders.
See [`docs/ARCHITECTURE.md`](../docs/ARCHITECTURE.md) for the isolation contract and the design system.

*Generated from `games/index.json`, `GAMES_INVENTORY.json`, and `data/game-taxonomy.json` by `node scripts/sync-game-manifests.js`.*
<!-- cosy:manifest:end -->

## Development

Run the game from a static server, or open `index.html` through the hub. The shared shell loads `shared/css/tokens.css` and `shared/css/brand.css`; this game owns its own CSS, JavaScript, and data.
