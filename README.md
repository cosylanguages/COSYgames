# COSYgames

Standalone interactive language games repository for the **COSYlanguages** ecosystem.

## Overview
`COSYgames` is a self-contained web application hosting 22+ interactive vocabulary, grammar, and communicative minigames designed for immersive self-study and classroom practice without translation fallbacks.

---

## Included Games & Engines

### Interactive Word & Grammar Games
- 🖼️ **Scene Match** (`scene_match/`): Spatial 2D/3D vocabulary scene matching engine across 16 environments.
- 🔤 **COSY Crossword** (`cosy_crossword/`): Interactive vocabulary crosswords across CEFR levels.
- 🦸 **Action Hero** (`action_hero/`): Verb action and conjugation challenge game.
- 🧠 **Battle of Wits** (`battle_of_wits/`): Fast-paced vocabulary trivia & category drill.
- 🧐 **Critics Corner** (`critics_corner/`): Spot-the-mistake and grammar review game.
- 😃 **Emoji Odyssey** (`emoji_odyssey/`): Visual emoji-to-phrase association drills.
- 📜 **Etymology Explorer** (`etymology_explorer/`): Word origins and root-finding puzzle.
- 🌊 **Fluency Flow** (`fluency_flow/`): Sentence building and word order flow game.
- 🔥 **Hot Seat** (`hot_seat/`): Rapid-fire vocabulary clue game.
- ❓ **100 Questions** (`hundred_questions/`): Conversation card decks and topic prompts.
- 🕵️ **Identity Mystery** (`identity_mystery/`): Character deduction and descriptive vocabulary game.
- 🔠 **Last Letter** (`last_letter/`): Word chain game.
- 🎰 **Lucky Numbers** (`lucky_numbers/`): Number and counting practice drills.
- 🔍 **Object Quest** (`object_quest/`): Object searching and spatial vocabulary game.
- ⚖️ **Opinion Arena** (`opinion_arena/`): Expressing opinions and debate phrase games.
- 👈👉 **This or That** (`this_or_that/`): Tinder-style profile swiping & preference dilemma debate game.
- 🔗 **Story Chain** (`story_chain/`): Sequential storytelling card game.
- 📚 **Storytelling** (`storytelling/`): Narrative building and creative writing prompt engine.
- ♀️♂️ **What Gender Is It?** (`what_gender_is_it/`): Noun gender identification game for gendered languages.
- 🧩 **Word Linker** (`word_linker/`): Collocation and word pairing puzzle.

---

## Repository Structure

```
COSYgames/
├── index.html                  # Games Hub Entrance & Directory
├── _engine/                    # Shared game engine JS scripts & utilities
├── data/                       # Scene data, game card decks & vocabulary manifests
├── shared/                     # Standalone shared tokens, styles, and core engines
│   ├── css/                    # Platform CSS tokens & component design rules
│   └── js/                     # Engine injectors, UI handlers, daily dose loaders
├── action_hero/                # Action Hero game module
├── cosy_crossword/             # Crossword game module
├── scene_match/                # Scene Match game module
└── ...                         # All 22 game directories
```

---

## Deployment & Hosting Instructions

To push this folder to your standalone `https://github.com/cosylanguages/COSYgames` GitHub repository:

1. **Copy folder contents:** Copy all files and subdirectories inside `COSYgames/` into the root of your target `COSYgames` repository.
2. **Enable GitHub Pages:** Go to `Repository Settings -> Pages`, select the `main` branch root (`/`), and save.
3. **Access Live Site:** Your standalone games web app will be live at:
   `https://cosylanguages.github.io/COSYgames/`