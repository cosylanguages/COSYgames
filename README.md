# 🎮 COSYgames: 19 Language Games That Actually Teach

Standalone interactive language games repository for the **COSYlanguages** ecosystem.

[![COSYlanguages](https://img.shields.sh/badge/COSYlanguages-Ecosystem-0D9488)](https://cosylanguages.github.io/COSYlanguages/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

---

## 🌟 Overview

`COSYgames` is the official central hub hosting **19 interactive language learning minigames** designed for immersive self-study and active classroom practice. All games operate standalone without external dependencies, require no account, and support solo play as well as partner and group activities across multiple CEFR levels (A0–C2).

Whether you are a student building oral fluency or a teacher facilitating communicative drills, COSYgames offers engaging, pedagogical tools to make language acquisition natural and fun.

---

## 🎲 All 19 Language Games

### 🗣️ Speaking & Fluency
1. **Fluency Flow** (`/fluency-flow/`)
   - *Description:* Spin for a random topic and speak continuously for 1–5 minutes without stopping. Emphasizes flow and confidence over perfection.
   - *CEFR Levels:* A1–C2 | *Mode:* Solo or Group

2. **Battle of Wits** (`/battle-of-wits/`)
   - *Description:* Two opposing topics or views. Build arguments and debate in your target language.
   - *CEFR Levels:* B1–C2 | *Mode:* Group

3. **Opinion Arena** (`/opinion-arena/`)
   - *Description:* Express agreement or disagreement with controversial or everyday statements and defend your reasoning.
   - *CEFR Levels:* A2–C2 | *Mode:* Solo or Group

4. **Critic's Corner** (`/critics-corner/`)
   - *Description:* Discuss famous quotes, idioms, and philosophical statements for advanced level conversation.
   - *CEFR Levels:* B2–C2 | *Mode:* Solo or Group

5. **100 Questions** (`/100-questions/`)
   - *Description:* Conversation cards designed to foster deep, authentic dialogues between partners, students, or family members.
   - *CEFR Levels:* A2–C2 | *Mode:* Solo or Group

6. **Story Chain** (`/story-chain/`)
   - *Description:* Build a collaborative narrative one sentence at a time, incorporating assigned secret target words.
   - *CEFR Levels:* A1–C2 | *Mode:* Solo or Group

7. **Story Weaver** (`/story-weaver/`)
   - *Description:* Combine dynamic CEFR grammar rules and thematic vocabulary targets to compose creative stories.
   - *CEFR Levels:* A1–C2 | *Mode:* Solo or Group

8. **Hot Seat** (`/hot-seat/`)
   - *Description:* High-pressure, quick-fire vocabulary explanation game against the clock.
   - *CEFR Levels:* A1–C2 | *Mode:* Solo or Group

### 🕵️ Mystery & Guesses
9. **Action Hero** (`/action-hero/`)
   - *Description:* Hold your device to your forehead while teammates describe verbs and actions for you to guess.
   - *CEFR Levels:* A1–C2 | *Mode:* Group

10. **Identity Mystery** (`/identity-mystery/`)
    - *Description:* Uncover hidden famous characters or professions through strategic yes/no questions.
    - *CEFR Levels:* A2–C2 | *Mode:* Solo or Group

11. **Object Quest** (`/object-quest/`)
    - *Description:* Deduce mystery objects from contextual clues and descriptive hints.
    - *CEFR Levels:* A1–C2 | *Mode:* Solo or Group

### 🧩 Vocab & Puzzles
12. **Scene Match** (`/scene-match/`)
    - *Description:* Interactive 2D visual rooms where learners match target vocabulary to labeled hotspots.
    - *CEFR Levels:* A1–C2 | *Mode:* Solo

13. **Word Linker** (`/word-linker/`)
    - *Description:* Identify collocations, word associations, or spot the odd word out in a set.
    - *CEFR Levels:* A1–C2 | *Mode:* Solo or Group

14. **Last Letter** (`/last-letter/`)
    - *Description:* Classic word chain game where each new word must begin with the final letter of the previous word.
    - *CEFR Levels:* A1–C2 | *Mode:* Solo or Group

15. **Emoji Odyssey** (`/emoji-odyssey/`)
    - *Description:* Decipher visual emoji sequences representing common phrases, idioms, and vocabulary.
    - *CEFR Levels:* A1–C2 | *Mode:* Solo or Group

16. **Cosy Crossword** (`/cosy-crossword/`)
    - *Description:* Dynamically generated crossword puzzles tailored to specific CEFR vocabulary themes.
    - *CEFR Levels:* A1–C2 | *Mode:* Solo

17. **Lucky Numbers** (`/lucky-numbers/`)
    - *Description:* Interactive language Bingo for numbers and listening comprehension practice.
    - *CEFR Levels:* A0–C2 | *Mode:* Solo or Group

18. **Etymology Explorer** (`/etymology-explorer/`)
    - *Description:* Discover the historical origins, Latin/Greek roots, and cognates of everyday vocabulary.
    - *CEFR Levels:* B1–C2 | *Mode:* Solo

19. **What Gender Is It?** (`/what-gender-is-it/`)
    - *Description:* Master grammatical genders across gendered languages with historical memory rules.
    - *CEFR Levels:* A1–C2 | *Mode:* Solo

---

## 👩‍🏫 Classroom Instructions for Teachers

COSYgames are designed with flexibility for language educators:

1. **Warm-ups & Icebreakers (5–10 mins):**
   - Use **Fluency Flow** or **Hot Seat** as an energetic lesson opener.
   - Use **100 Questions** for pair-work warm-ups.

2. **Grammar & Vocab Drill Activities:**
   - Integrate **Story Weaver** to practice target tenses (e.g., past simple vs. present perfect).
   - Use **Scene Match** or **Word Linker** for vocabulary consolidation after introductory readings.

3. **Communicative Group Games:**
   - Divide students into teams for **Action Hero** or **Battle of Wits**.
   - Use **Identity Mystery** to practice question formation (e.g., "Is this person...?", "Does she work in...?").

4. **Structured Lesson Plans & Curriculum Integration:**
   - For complete, step-by-step teacher guides, lesson plans, and classroom worksheets matching these games, visit [**COSYmanuals**](https://cosylanguages.github.io/COSYmanuals/).

---

## 📁 Repository Directory Structure

```
COSYgames/
├── index.html                   # Main Games Hub Entrypoint
├── templates/
│   └── game-template.html       # Standardized Game Page Template
├── shared/
│   ├── utils/
│   │   └── game-utils.js        # Score tracking, timers, progress storage & nav helpers
│   ├── styles/
│   │   └── game-styles.css       # Unified design tokens, grids, cards & responsiveness
│   ├── css/                     # Shared theme CSS files
│   └── js/                      # Shared navigation logic
├── assets/                      # Shared media assets & icons
├── speaking/                    # Category directory
├── mystery/                     # Category directory
├── vocab-puzzles/              # Category directory
├── fluency-flow/                # Game directory
├── battle-of-wits/              # Game directory
├── opinion-arena/               # Game directory
├── critics-corner/              # Game directory
├── 100-questions/               # Game directory
├── story-chain/                 # Game directory
├── story-weaver/                # Game directory
├── hot-seat/                    # Game directory
├── action-hero/                 # Game directory
├── identity-mystery/            # Game directory
├── object-quest/                # Game directory
├── scene-match/                 # Game directory
├── word-linker/                 # Game directory
├── last-letter/                 # Game directory
├── emoji-odyssey/               # Game directory
├── cosy-crossword/              # Game directory
├── lucky-numbers/               # Game directory
├── etymology-explorer/          # Game directory
└── what-gender-is-it/           # Game directory
```

---

## 🤝 Contribution Guidelines

We welcome contributions from educators, developers, and language enthusiasts!

1. **Bug Reports & Feature Requests:**
   - Please open an issue on our [GitHub Issues Page](https://github.com/cosylanguages/COSYgames/issues).

2. **Adding New Vocabulary Decks or Content:**
   - Game card decks and dataset manifests are stored in `data/`. Submit a PR with validated JSON structures.

3. **Code Style & Verification:**
   - Use standard HTML5, CSS3, and modern ES6 JavaScript.
   - Ensure all pages include "Back to Games Hub" navigation and function responsively on mobile devices.

---

© 2026 COSYlanguages: All rights reserved.
