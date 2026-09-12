# Etymology Explorer 📜

Trace the fascinating origins and historical journeys of everyday vocabulary!

Etymology Explorer is an interactive vocabulary game in the COSYgames suite that lets players excavate the linguistic roots of words.

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
