# Architectural Specification: "Guess!" Franchise Platform

## 1. Executive Summary & Vision

The **"Guess!" Franchise** is a scalable, multi-edition language-learning game platform designed for interactive play across diverse learning environments. It unifies and expands upon the core question prompts of discovery (Who, What, Where, and When) across CEFR proficiency tiers (A0 through C2).

Crucially, "Guess!" is architected from the ground up to support **hosted multiplayer gameplay** in three distinct environments:
1. **Online (Remote):** One player acts as the host/facilitator sharing their screen or running the game room via video conferencing (Zoom, Google Meet, Microsoft Teams) with remote participants.
2. **Offline (In-Person):** The host runs the game in a physical classroom or living room, projecting the game canvas onto a large display/projector or TV screen for all players in the room.
3. **Hybrid:** A combination where the host is in-person with some learners while remote learners join simultaneously via video call or audio stream.

---

## 2. Host Ergonomics & Multi-Environment Architecture

In hosted multiplayer gameplay, the primary challenge is **information asymmetry**: the host (or active clue-giver) often needs to know secret information (the target word, taboo forbidden words, pedagogical hints), while guessers—who are watching the screen share or projector—must **not** see the answer until it is solved.

To solve this across Online, In-Person, and Hybrid play without requiring complex multi-device client-server synchronization, "Guess!" introduces four dedicated ergonomic features:

### A. The Host Privacy Curtain ("Secret Shield")
- **One-Click Privacy Toggle:** A floating privacy curtain widget (toggleable via the `👁️ Host View` button or the `H` / `Space` keyboard shortcut).
- **Projector / Screen-Share Safe Mode:** When Host Privacy is active:
  - The secret target word and taboo forbidden words are shielded with a tactile blur mask (`filter: blur(12px)`) or covered by a card flap.
  - The host can temporarily hover, hold down, or tap the card on a touchscreen to peek at the secret without revealing it to the group.
  - In hybrid/online environments, guessers looking at the host's screen share only see the active clue prompts, scoreboards, timer bar, and unmasked letters.
- **Dedicated Host Window / QR Second Screen (Dual Mode):**
  - Launching with `?role=host` provides the full controller dashboard.
  - Launching with `?role=display` or `?data-context=projector` displays the public audience board with all secret answers hidden until unmasked by the host.

### B. Environment-Specific Adaptations
- **1. Online Mode (`?mode=online` or iframe context):**
  - Compact UI optimized for split-screen layouts next to video calls or chat windows.
  - Visual response logs and sound toggle for clear audio streaming over conference mics.
  - High-contrast typography so video compression artifacts on screen shares do not impede readability.
- **2. Offline In-Person Mode (`?mode=projector` or large screen):**
  - Extra-large presentation fonts (visible from the back of a 30-person classroom).
  - High-visibility countdown timer with high-contrast color shifts (Green → Amber → Red pulsing).
  - Built-in Web Audio API chimes (tick, buzzer, success chime) audible across a room.
  - Team score tracker (Team A vs Team B or Solo vs Group).
- **3. Hybrid Mode (`?mode=hybrid`):**
  - Combines large-format audience displays with a dual-input logging area: allows the host to type in verbal guesses shouted out by in-room students while reading out typed chat messages from remote students.
  - Adjustable round timer allowing pauses when remote latency or in-person discussion requires extra discussion time.

---

## 3. The 4 Editions & Sub-Categories

"Guess!" unifies and expands gameplay into 4 distinct editions:

### Edition 1: Guess Who? (People & Roles)
- **Historical Figures:** Emperors, scientists, artists, revolutionaries, world leaders.
- **Fictional & Mythological Characters:** Superheroes, gods, fairy tale villains, literary legends.
- **Professionals & Occupations:** Everyday jobs (baker, nurse, firefighter) vs. specialized careers (cryptographer, urban planner, marine biologist).
- **Pop Culture Icons:** Musicians, actors, athletes, creators, cultural figures.

### Edition 2: Guess What? (Objects, Concepts & Actions)
- **Action Verbs & Idiomatic Gestures:** Physical actions (whispering, tripping) and abstract actions (hesitating, negotiating, procrastinating).
- **Animals & Nature:** Wildlife, marine life, geology (volcano, glacier), microscopic organisms.
- **Daily Things & Technology:** Household items, modern tech (smart devices), legacy tech (rotary phone, cassette).
- **Abstract Concepts:** Emotions, philosophies, time periods, states of mind (nostalgia, bureaucracy, irony).

### Edition 3: Guess Where? (Locations & Settings)
- **Famous Landmarks & World Wonders:** Colosseum, Mount Fuji, Machu Picchu, Taj Mahal.
- **Everyday Places:** Post office, bakery, pharmacy, subway station, laundromat.
- **Extreme & Unusual Environments:** The Mariana Trench, Sahara Desert, International Space Station.
- **Fictional Universes:** Hogwarts, Gotham City, Narnia, Tatooine.

### Edition 4: Guess When? (Time, History & Culture)
- **Historical Eras & Turning Points:** The Renaissance, Moon Landing, Stone Age, Fall of the Berlin Wall.
- **Daily Routines & Seasons:** Morning rush hour, midnight, autumn harvest, winter solstice.
- **Future & Sci-Fi Timelines:** The year 3000, Mars colonization, the age of AI.
- **Cultural Holidays & Festivals:** Carnival, Diwali, Lunar New Year, Halloween, Midsummer.

---

## 4. CEFR Level Adaptation Framework

| CEFR Tier | Linguistic Focus | Game Mechanics & Clue Style | Example (Category: Animals) |
| :--- | :--- | :--- | :--- |
| **A0 – A2 (Beginner)** | High-frequency concrete vocabulary, basic adjectives, colors, sizes, simple present/past. | **Cooperative Clues**: Structured sentence stems (*"It is small. It is green. It jumps. It says ribbit."*). Visual emoji/icons. | *Frog* |
| **B1 – B2 (Intermediate)** | Synonyms, relative clauses, conditional sentences, passive voice, habitats, functions. | **Speed Run / Taboo**: 60-second timer sprint. Clue-givers must define the target word without using 3–5 forbidden root words. Acting/charades options. | *Chameleon* (Forbidden: lizard, color, blend, reptile) |
| **C1 – C2 (Advanced)** | Idioms, nuance, academic/technical register, formal deduction. | **The Masterclass Riddle**: Formal, cryptic, or philosophical definitions requiring circumlocution and contextual deduction. | *Platypus* (*"An amphibious monotreme of Gondwanan heritage exhibiting electroreception and venomous spurs."*) |

---

## 5. Backward Compatibility & Ecosystem Integration

- **Entrypoint:** `guess/index.html` linked with `guess/game.js` and `guess/guess.css`.
- **Legacy Bridges:**
  - `identity-mystery/` links seamlessly into `guess/?edition=who`.
  - `object-quest/` links seamlessly into `guess/?edition=what`.
  - `action-hero/` links seamlessly into `guess/?edition=what&sub=actions`.
- **Ecosystem Adherence:** Uses standard COSY design tokens (`tokens.css`), responsive layouts, `_engine/scores.js` for score persistence, `shared/js/i18n.js` for UI chrome translations, and `i18n/games/guess.js` for game-specific localizations across all 7 supported languages.
