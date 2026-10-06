# 🎮 COSYgames: Interactive Language Games That Actually Teach

Standalone interactive language games repository for the **COSYlanguages** ecosystem.

[![COSYlanguages](https://img.shields.io/badge/COSYlanguages-Ecosystem-0D9488)](https://cosylanguages.github.io/COSYlanguages/)

---

## 🌟 Overview

`COSYgames` is the official central hub hosting **interactive language learning minigames** designed for immersive self-study and active classroom practice. COSYgames is open to everyone—students, free users, and teachers alike. Access is completely free, with no account registration or login required.

All games operate standalone without external dependencies or build steps, supporting solo play as well as partner and group activities across multiple CEFR levels (A0–C2).

Whether you are a student building oral fluency or a teacher facilitating communicative drills, COSYgames offers engaging, pedagogical tools to make language acquisition natural and fun.

---

## 🎲 Language Games Directory

### Speaking & Fluency

| Game | What you do | Players | CEFR levels | Languages | Folder |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Fluency Flow** | Spin for a random topic and speak for 1–5 minutes without stopping. Flow, not perfection. | Solo / Group | A1, A2, B1, B2, C1, C2 | EN, FR, ES, DE, IT, RU, EL | `fluency-flow/` |
| **Battle of Wits** | Two topics, two sides. Build your arguments and debate in the language you're learning. | Group | B1, B2, C1, C2 | EN, FR, IT, RU, EL | `battle-of-wits/` |
| **Opinion Arena** | Agree or disagree with a statement, then defend your view. Real opinions, real language. | Solo / Group | A2, B1, B2, C1, C2 | EN, FR, ES, DE, IT, RU, EL | `opinion-arena/` |
| **Critic's Corner** | A famous quote appears. What does it mean to you? Deep discussion for advanced levels. | Solo / Group | B2, C1, C2 | EN, FR, ES, DE, IT, RU, EL | `critics-corner/` |
| **100 Questions** | Pick a deck and answer deep, funny, or philosophical questions. Perfect for speaking practice. | Solo / Group | A2, B1, B2, C1, C2 | EN, FR, RU | `100-questions/` |
| **Story Chain** | Add one sentence at a time to build a collaborative story with prompts and connectors. | Solo / Group | A1, A2, B1, B2, C1, C2 | EN, FR, ES, DE, IT, RU, EL | `story-chain/` |
| **Story Weaver** | Weave target words into a coherent narrative. Turn vocabulary study into creative writing. | Solo / Group | A1, A2, B1, B2, C1, C2 | EN, FR, IT, RU, EL | `story-weaver/` |
| **Hot Seat** | One player faces away from the board while team members explain target words without saying them. | Solo / Group | A1, A2, B1, B2, C1, C2 | EN, FR, ES, DE, IT, RU, EL | `hot-seat/` |
| **This or That?** | Choose between two intriguing options and justify your choice. | Solo / Group | A0, A1, A2, B1, B2 | EN, FR, IT, RU, EL | `this-or-that/` |

### Mystery & Guesses

| Game | What you do | Players | CEFR levels | Languages | Folder |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Action Hero** | Act out or explain dynamic action verbs and scenarios against the clock. | Group | A1, A2, B1, B2, C1, C2 | EN, FR, ES, DE, IT, RU, EL | `action-hero/` |
| **Identity Mystery** | Deduce the hidden identity through strategic 20 questions and clues. | Solo / Group | A2, B1, B2, C1, C2 | EN, FR, ES, DE, IT, RU, EL | `identity-mystery/` |
| **Object Quest** | Describe, locate, and guess secret objects using descriptive target vocabulary. | Solo / Group | A1, A2, B1, B2, C1, C2 | EN, FR, ES, DE, IT, RU, EL | `object-quest/` |

### Vocab & Puzzles

| Game | What you do | Players | CEFR levels | Languages | Folder |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Scene Match** | Explore interactive visual rooms and match vocabulary items to scene objects. | Solo | A1, A2, B1, B2, C1, C2 | EN, FR, IT, RU, EL | `scene-match/` |
| **Word Linker** | Connect related vocabulary words to build semantic chains. | Solo / Group | A1, A2, B1, B2, C1, C2 | EN, FR, ES, DE, IT, RU, EL | `word-linker/` |
| **Last Letter** | Chain vocabulary words by matching the last letter of each word to the next. | Solo / Group | A1, A2, B1, B2, C1, C2 | EN, FR, ES, DE, IT, RU, EL | `last-letter/` |
| **Emoji Odyssey** | Decode phrases and idioms represented purely through emoji sequences. | Solo / Group | A1, A2, B1, B2, C1, C2 | EN, FR, ES, DE, IT, RU, EL | `emoji-odyssey/` |
| **Cosy Crossword** | Solve language puzzles with tailored vocabulary clues and crosswords. | Solo | A1, A2, B1, B2, C1, C2 | EN, FR, IT, RU, EL | `cosy-crossword/` |
| **Lucky Numbers** | Practice numbers, counting, and math expressively in your target language. | Solo / Group | A0, A1, A2, B1, B2, C1, C2 | EN, FR, ES, DE, IT, RU, EL | `lucky-numbers/` |
| **Etymology Explorer** | Uncover word origins, roots, and language family connections. | Solo | B1, B2, C1, C2 | EN, FR, IT, DE, ES, RU, EL, PT, HY, KA, BA, TT, BR | `etymology-explorer/` |
| **What Gender Is It?** | Master noun genders with speed rounds and grammar memory triggers. | Solo | A1, A2, B1, B2, C1, C2 | FR, ES, IT, DE, RU, EL, BR | `what-gender-is-it/` |

---

## 🔗 Ecosystem Integration & Deep-Linking ("Where this fits")

`COSYgames` is fully integrated into the broader **COSYlanguages** ecosystem. It is designed to be cross-linked directly from:
- **COSYlanguages' Practice Page** (`/practice/`): Allowing self-study learners to jump into games matching their target language, level, and current study topic.
- **COSYplatform's Lesson Views**: Enabling teachers during live online or classroom lessons to launch directly into specific minigames pre-configured for a lesson unit.

### 🌐 Deep-Link URL Scheme & Query Parameters

Both the central **Games Hub (`index.html`)** and all **individual games** support URL query parameters for seamless deep linking and state handoff:

| Query Parameter | Description | Supported Values / Format | Example Usage |
| :--- | :--- | :--- | :--- |
| `game` | Launch directly into a specific minigame (Hub auto-redirects) | Canonical ID or kebab-case string (e.g. `cosy-crossword`, `fluency-flow`, `action-hero`, `100-questions`) | `?game=cosy-crossword` |
| `theme` / `topic` / `deck` | Pre-select the vocabulary topic, deck, or category | Topic identifier (e.g. `animals`, `food`, `travel`, `daily_routine`, `jobs`) | `?theme=animals` or `?topic=food` |
| `level` | Pre-select the CEFR target level | `A0`, `A1`, `A2`, `B1`, `B2`, `C1`, `C2` (or aliases like `starter`, `elementary`, `intermediate`, `advanced`) | `?level=A2` |
| `lang` | Pre-select the learning language | ISO 2-letter code (e.g. `en`, `es`, `fr`, `de`, `ru`, `it`, `pt`, `el`) | `?lang=es` |
| `teacher` | Controls visibility of the context selector | `1` shows the display-mode selector (Projector/Online/Phone) for teachers and the founder; `0` turns it off. Remembered in the browser. A UI convenience, not a security feature. | `?teacher=1` |

#### Examples

1. **Direct link via Games Hub:**
   ```
   https://cosylanguages.github.io/COSYgames/?game=cosy-crossword&theme=animals&level=A2&lang=en
   ```
   *The Games Hub parses the parameters and redirects directly into Cosy Crossword with the Animals theme, A2 level, and English language pre-selected.*

2. **Direct link into an individual game:**
   ```
   https://cosylanguages.github.io/COSYgames/action-hero/?level=A1&theme=verbs&lang=fr
   ```
   *Action Hero opens directly with French A1 action verbs pre-selected for classroom play.*

---

## 📁 Repository Directory Structure

```
COSYgames/
├── index.html                   # Central Games Hub entrypoint
├── templates/
│   └── game-template.html       # Standardized Game Page Template
├── _engine/                     # Core runtime engine (session, scores, view context)
├── shared/
│   ├── css/                     # Shared CSS tokens, motion & hub styles
│   ├── js/                      # Shared navigation and i18n logic
│   ├── styles/                  # Shared game stylesheet (game-styles.css)
│   └── utils/                   # Shared game utility scripts (game-utils.js)
├── data/                        # Multilingual game datasets & shared etymology network (for runtime vocabulary details, see docs/vocabulary-source-of-truth.md)
├── vocabulary/
│   └── _canonical/
│       └── en/                  # Read-only vocabulary snapshot (see docs/vocabulary-source-of-truth.md)
├── games/
│   └── index.json               # Game metadata manifest (checked by automated tests)
├── scripts/                     # Sync and data validation scripts
├── tests/                       # Automated test suite
│   └── manual/                  # Manual Playwright browser test scripts
├── docs/                        # Architecture guidelines & current documentation
│   └── archive/                 # Historical audit/migration documents
├── .github/
│   └── workflows/               # CI GitHub Actions workflows
├── 100-questions/               # Game folder
├── action-hero/                 # Game folder
├── battle-of-wits/              # Game folder
├── cosy-crossword/              # Game folder
├── critics-corner/              # Game folder
├── emoji-odyssey/               # Game folder
├── etymology-explorer/          # Game folder
├── fluency-flow/                # Game folder
├── hot-seat/                    # Game folder
├── identity-mystery/            # Game folder
├── last-letter/                 # Game folder
├── lucky-numbers/               # Game folder
├── object-quest/                # Game folder
├── opinion-arena/               # Game folder
├── scene-match/                 # Game folder
├── story-chain/                 # Game folder
├── story-weaver/                # Game folder
├── story-telling/               # Client-side redirect folder
├── this-or-that/                # Game folder
├── what-gender-is-it/           # Game folder
└── word-linker/                 # Game folder
```

---

## 🤝 Contribution Guidelines

See [CONTRIBUTING.md](CONTRIBUTING.md) for contribution guidelines, testing instructions, and PR requirements.
