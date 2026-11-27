# Etymology Explorer 📜

Trace the fascinating origins and historical journeys of everyday vocabulary!

Etymology Explorer is an interactive vocabulary game in the COSYgames suite that lets players excavate the linguistic roots of words.

<!-- cosy:manifest:start -->
**At a glance**

| Field | Value |
| --- | --- |
| Category | Vocab & Puzzles |
| Skill focus | vocabulary |
| CEFR levels | B1–C2 |
| Learning languages | English 🇬🇧, Français 🇫🇷, Italiano 🇮🇹, Deutsch 🇩🇪, Español 🇪🇸, Русский 🇷🇺, Ελληνικά 🇬🇷, Português 🇵🇹, Հայերեն 🇦🇲, ქართული 🇬🇪, Башҡортса 🇷🇺, Татарча 🇷🇺, Brezhoneg 🏴 |
| Modes | Solo |
| Duration | Varies by round settings; the setup screen shows the available modes. |
| Entry point | [`index.html`](index.html) |

**Data and dependencies**

- **Shared data:** `data/*/etymology.js`, `data/shared/etymology_network.js`, `data/shared/doublets.js`, `data/shared/false_friends.js`
- **External dependencies:** None listed
- **Discovery topics:** words-grammar, learning-knowledge, society-culture

**Contract**

This game does not import code or assets from another game. It may use the shared shell, the COSY turquoise brand layer, and shared COSYdata loaders.
See [`docs/ARCHITECTURE.md`](../docs/ARCHITECTURE.md) for the isolation contract and the design system.

*Generated from `games/index.json`, `GAMES_INVENTORY.json`, and `data/game-taxonomy.json` by `node scripts/sync-game-manifests.js`.*
<!-- cosy:manifest:end -->

---

## 🎮 Game Modes

### 1. Single-Donor Origin Quiz (`Easy`, `Medium`, `Hard`)
- **Objective:** Guess the primary origin language/family for a given target word in your selected language.
- **Dig Site Feature:** Interactive archaeological strata layers unfurl as you progress, revealing the modern form, intermediate root, and ancient origin.
- **Multi-hop Paths:** Rich 3+ step derivation paths (e.g. *Sanskrit nāraṅga → Persian → Arabic → Old French → English Orange*) are rendered as horizontal step-by-step visual chips.
- **Languages Supported:** English, Français, Italiano, Deutsch, Español, Русский, Ελληνικά, Português, Հայերեն, ქართული, Башҡортса, Татарча, Brezhoneg.

### 2. Language Network Mode 🌐 (`Cross-Language Cognates`)
- **Objective:** Identify which COSY language adopted a specific cognate reflex derived from an ancient root (e.g. Sinitic `*chá` → Russian `Чай`, Turkic `Сәй`, Portuguese `Chá`).
- **Network Feature:** Explore international word families across 25 curated etymological networks spanning Classical Greek, Latin, Persian, Arabic, Sanskrit, Turkic, Germanic, and French roots.

### 3. Word Pairs Mode 👯 (`False Friends & Doublets`)
- **Objective:** Test your linguistic intuition on word pair relationships across languages.
- **False Friends Challenge:** Decide whether similar-looking words across languages are true etymological cognates or misleading false friends (e.g., German *Handy* vs. English *handy*, Portuguese *pretender* vs. English *pretend*).
- **Etymological Doublets Challenge:** Identify the shared ancient root of twin words within a language that split from the same origin (e.g. English *hospital* & *hotel* ← Latin *hospes*; French *chaire* & *chaise* ← Greek *kathedra*).

---

## 🛠️ Data & Architecture

- **Per-Language Datasets:** Located in `data/{lang}/game_data.js` under the `etymology` key. Follows schema:
  `{ word, level, options, answer, detail, path?, donorLanguage?, tags? }`
- **Network Dataset:** Located in `data/shared/etymology_network.js`. Follows schema:
  `{ root, rootLanguage, meaning, reflexes: [{ lang, word, note }], detail }`
- **False Friends Dataset:** Located in `data/shared/false_friends.js`. Follows schema:
  `{ wordA: { lang, word, meaning }, wordB: { lang, word, meaning }, relation, detail }`
- **Doublets Dataset:** Located in `data/shared/doublets.js`. Follows schema:
  `{ language, wordA, wordB, commonRoot, options, detail }`
- **Standalone Compatibility:** Contains a self-contained local `gameUtils` helper (`createDrawBag`, `escapeAttr`) for standalone embedding without external dependencies.
