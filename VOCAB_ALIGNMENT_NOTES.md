# Vocabulary Alignment Notes: A1-Tier Games & Gender Concepts

This document summarizes the vocabulary alignment cross-check performed between **COSYgames A1-tier content** and the canonical English master list (`vocabulary/_canonical/en/A0-A1_master.json`).

- **Canonical A0-A1 Source**: `vocabulary/_canonical/en/A0-A1_master.json` (1,262 canonical words)
- **Files Audited**:
  1. `data/gender/a1.js` (119 starter/A1 concepts)
  2. `data/en/game_data.js` (Action Hero, Fluency Flow, Identity Mystery, Word Linker)

---

## 📊 Summary of Alignment Findings

| Dataset / Module | Level | Items Checked | Mismatches / Non-Canonical Prompts |
| :--- | :--- | :--- | :--- |
| **What Gender Is It?** (`data/gender/a1.js`) | Starter (A1) | 119 concepts | **14 concepts** |
| **Action Hero** (`data/en/game_data.js`) | Starter & Elementary | 32 target words | **0 words** |
| **Fluency Flow** (`data/en/game_data.js`) | Starter & Elementary | 10 prompts | **7 prompts** |
| **Identity Mystery** (`data/en/game_data.js`) | Elementary | 5 personas | **4 personas** |
| **Word Linker** (`data/en/game_data.js`) | Unclassified / Starter | 9 puzzles | **8 puzzles** |

---

## 1. What Gender Is It? (`data/gender/a1.js`)

14 of the 119 concepts in `a1.js` feature target English words that do not appear in the canonical A0-A1 master list.

| Index | Concept | Missing / Non-Canonical A1 English Word(s) | Recommendation |
| :---: | :--- | :--- | :--- |
| 27 | **Story** | `story` | Flagged for human review (relevel to A2 or add to A1 canon) |
| 39 | **Way** | `way` | Flagged for human review (relevel to A2 or add to A1 canon) |
| 53 | **Pocket** | `pocket` | Flagged for human review (relevel to A2 or add to A1 canon) |
| 62 | **Toaster** | `toaster` | Flagged for human review (relevel to A2 or add to A1 canon) |
| 68 | **Sink** | `sink` | Flagged for human review (relevel to A2 or add to A1 canon) |
| 74 | **Tray** | `tray` | Flagged for human review (relevel to A2 or add to A1 canon) |
| 75 | **Broccoli** | `broccoli` | Flagged for human review (relevel to A2 or add to A1 canon) |
| 83 | **Occupation** | `occupation` | Flagged for human review (relevel to A2 or add to A1 canon) |
| 87 | **Traffic** | `traffic` | Flagged for human review (relevel to A2 or add to A1 canon) |
| 90 | **Furniture** | `furniture` | Flagged for human review (relevel to A2 or add to A1 canon) |
| 95 | **Gate** | `gate` | Flagged for human review (relevel to A2 or add to A1 canon) |
| 108 | **Gym** | `gym` | Flagged for human review (relevel to A2 or add to A1 canon) |
| 112 | **Calendar** | `calendar` | Flagged for human review (relevel to A2 or add to A1 canon) |
| 114 | **Commute** | `commute` | Flagged for human review (relevel to A2 or add to A1 canon) |

---

## 2. Fluency Flow (`data/en/game_data.js`)

7 of 10 Starter/Elementary prompts contain vocabulary words not found in the A0-A1 canonical list.

| Level | Prompt Text | Non-Canonical Words |
| :--- | :--- | :--- |
| `starter` | Your morning routine ☕ | `routine` |
| `starter` | A childhood memory 🧸 | `childhood`, `memory` |
| `starter` | Your pet or favourite animal 🐶 | `pet` |
| `elementary` | A skill you wish you had 🎸 | `skill` |
| `elementary` | The best meal you ever ate 🍜 | `best`, `ever`, `ate` |
| `elementary` | A place you want to visit 🗺️ | `place` |
| `elementary` | A funny story that happened to you 🚴 | `story`, `happened` |

---

## 3. Action Hero (`data/en/game_data.js`)

- **Starter Words** (18 words): Cat, Dog, House, Car, Book, Water, Sun, Moon, Tree, Phone, Door, Chair, Bed, Food, Fish, Apple, Pen, Bag.
- **Elementary Words** (14 words): Kitchen, Garden, Train, Doctor, Teacher, Music, Birthday, Swimming, Holiday, Shopping, Airport, Hospital, Library, Market.
- **Result**: All 32 words **100% align** with the canonical A0-A1 master list.

---

## 4. Identity Mystery (`data/en/game_data.js`)

4 of 5 Elementary personas contain clue words that exceed the strict A0-A1 canonical vocabulary list.

| Level | Person | Clue | Non-Canonical Words |
| :--- | :--- | :--- | :--- |
| `elementary` | **A firefighter** | *"They wear a helmet and extinguish fires with water."* | `helmet`, `extinguish`, `fires` |
| `elementary` | **A librarian** | *"They manage a library and help people find books."* | `librarian`, `manage` |
| `elementary` | **A musician** | *"They play instruments or sing to create music."* | `musician`, `instruments`, `create` |
| `elementary` | **A veterinarian** | *"They take care of sick and injured animals."* | `veterinarian`, `injured` |

---

## 5. Word Linker (`data/en/game_data.js`)

Puzzles containing non-canonical words in options, link categories, or explanations:

| Puzzle # | Puzzle Words | Link Category | Non-Canonical Words |
| :---: | :--- | :--- | :--- |
| 2 | Paris, Rome, Tokyo, Amazon | Capital cities | `paris`, `rome`, `tokyo`, `amazon`, `not` |
| 3 | Piano, Guitar, Violin, Trumpet | Musical instruments | `piano`, `guitar`, `violin`, `trumpet`, `musical`, `instruments` |
| 4 | Happy, Joyful, Melancholy, Cheerful | Happy synonyms | `joyful`, `melancholy`, `cheerful`, `synonyms` |
| 5 | Run, Jump, Sleep, Swim | Active physical verbs | `active`, `physical`, `verbs`, `passive` |
| 6 | Red, Blue, Heavy, Green | Colours | `not` |
| 7 | Shakespeare, Dickens, Picasso, Austen | English authors | `shakespeare`, `dickens`, `picasso`, `austen`, `authors`, `painter` |
| 8 | Sunrise, Dawn, Dusk, Twilight | Times of day near sunrise/sunset | `sunrise`, `dawn`, `dusk`, `twilight`, `sunrisesunset`, `describe`, `transitional` |
| 9 | Doctor, Nurse, Surgeon, Pilot | Healthcare professions | `surgeon`, `healthcare`, `professions`, `operates`, `aircraft`, `not` |

---

## 📝 Notes & Recommendations for Curriculum Editors
1. **Do Not Delete Game Content**: All existing game content remains active and playable.
2. **Review Options**:
   - **Releveling**: Shift affected concepts or prompts to A2/B1 tier if the non-canonical words are deemed higher-level.
   - **Canon Expansion**: Add essential everyday words (e.g. *story*, *way*, *pocket*, *toaster*, *sink*, *gym*, *calendar*, *routine*, *pet*, *skill*) to the canonical A0-A1 master vocabulary list.
