# 🎮 COSYgames & Ecosystem Design System

Standalone interactive language games repository and design system hub for the **COSYlanguages** ecosystem.

[![COSYlanguages](https://img.shields.sh/badge/COSYlanguages-Ecosystem-0D9488)](https://cosylanguages.github.io/COSYlanguages/)
[![Design System](https://img.shields.sh/badge/Design--System-WCAG--AA-blue)](design-system/index.html)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

---

## 🎨 Ecosystem Design System

COSYgames provides a unified, cross-repository design system for all 6 COSY repositories (`COSYlanguages`, `COSYgames`, `COSYworld`, `COSYtools`, `COSYmanuals`, `COSYevents`).

Live Design System Showcase: [**`/design-system/index.html`**](design-system/index.html)

### Design Tokens & Architecture
- 🎨 **Color Palette (`/design-system/colors.css`):**
  - **Primary Teal:** `#0D9488` (Main brand), `#0F766E` (Dark), `#CCFBF1` (Light)
  - **Secondary Coral:** `#F43F5E` (Accent)
  - **Functional States:** Success (`#10B981`), Warning (`#F59E0B`), Error (`#EF4444`), Info (`#3B82F6`)
  - **Language Coding:** English (Blue), French (Purple), Italian (Orange), Russian (Red), Greek (Teal)
- 🔤 **Typography (`/design-system/typography.css`):**
  - **Primary:** `DM Sans` / `Nunito`
  - **Heading:** `Fraunces` (Serif display)
  - **Scale (rem):** `xs` (0.75rem), `sm` (0.875rem), `base` (1rem), `lg` (1.125rem), `xl` (1.25rem), `2xl` (1.5rem), `3xl` (1.875rem), `4xl` (2.25rem), `5xl` (3rem)
- 📐 **Spacing & Layout (`/design-system/spacing.css`):**
  - **Scale (4px base):** 1 (4px), 2 (8px), 3 (12px), 4 (16px), 6 (24px), 8 (32px), 12 (48px), 16 (64px)
  - **Max Content Width:** `1200px`
- 📱 **Breakpoints (`/design-system/breakpoints.css`):**
  - **Mobile:** 0–639px
  - **Tablet:** 640–1023px
  - **Desktop:** 1024–1439px
  - **Large Desktop:** 1440px+
- ⚡ **Animations & Transitions (`/design-system/animations.css`):**
  - Fast (150ms), Normal (300ms), Slow (500ms) with `cubic-bezier(0.4, 0, 0.2, 1)`
- 🧩 **Component Library (`/design-system/components.css`):**
  - Buttons (Primary, Secondary, Outline, Danger), Form Inputs, Cards, Badges, Alert Banners, Modals, Skeleton Loaders
- ♿ **Accessibility Guidelines (`/design-system/accessibility.md`):**
  - WCAG AA contrast (4.5:1 text), focus ring indicators, ARIA live region updates, High Contrast Mode, Large Text Mode, and `prefers-reduced-motion` support.

---

## 🎲 All 19 Language Games

### 🗣️ Speaking & Fluency
1. **Fluency Flow** (`/fluency-flow/` & `/speaking/fluency-flow/`) — Continuous oral speech against the clock.
2. **Battle of Wits** (`/battle-of-wits/` & `/speaking/battle-of-wits/`) — Opposing sides debate game.
3. **Opinion Arena** (`/opinion-arena/` & `/speaking/opinion-arena/`) — Agree/disagree argumentation drills.
4. **Critic's Corner** (`/critics-corner/` & `/speaking/critics-corner/`) — Advanced quote and idiom discussions.
5. **100 Questions** (`/100-questions/` & `/speaking/100-questions/`) — Deep dialogue card decks.
6. **Story Chain** (`/story-chain/` & `/speaking/story-chain/`) — Sentence-by-sentence storytelling with secret words.
7. **Story Weaver** (`/story-weaver/` & `/speaking/story-weaver/`) — Grammar rule and target vocabulary storytelling.
8. **Hot Seat** (`/hot-seat/` & `/speaking/hot-seat/`) — Rapid-fire clue explanations.

### 🕵️ Mystery & Guesses
9. **Action Hero** (`/action-hero/` & `/mystery/action-hero/`) — Forehead charades verb guessing.
10. **Identity Mystery** (`/identity-mystery/` & `/mystery/identity-mystery/`) — 20 questions character deduction.
11. **Object Quest** (`/object-quest/` & `/mystery/object-quest/`) — Noun clue guessing.

### 🧩 Vocab & Puzzles
12. **Scene Match** (`/scene-match/` & `/vocab-puzzles/scene-match/`) — Interactive illustrated hotspot room matching.
13. **Word Linker** (`/word-linker/` & `/vocab-puzzles/word-linker/`) — Collocations and odd-one-out puzzles.
14. **Last Letter** (`/last-letter/` & `/vocab-puzzles/last-letter/`) — Classic word chain game.
15. **Emoji Odyssey** (`/emoji-odyssey/` & `/vocab-puzzles/emoji-odyssey/`) — Deciphering emoji visual phrases.
16. **Cosy Crossword** (`/cosy-crossword/` & `/vocab-puzzles/cosy-crossword/`) — Dynamic vocabulary crosswords.
17. **Lucky Numbers** (`/lucky-numbers/` & `/vocab-puzzles/lucky-numbers/`) — Language bingo listening practice.
18. **Etymology Explorer** (`/etymology-explorer/` & `/vocab-puzzles/etymology-explorer/`) — Historical word root origins.
19. **What Gender Is It?** (`/what-gender-is-it/` & `/vocab-puzzles/what-gender-is-it/`) — Noun grammatical gender drills.

---

## 👩‍🏫 Teacher Mode & Classroom Integration

Toggle **Teacher Mode** using the button in the top navigation bar to unlock:
- Projection-optimized interface.
- Multi-student group scoring.
- Direct links to lesson plans and worksheets on [**COSYmanuals**](https://cosylanguages.github.io/COSYmanuals/).
- Group size recommendations and CEFR target objectives.

---

## 🤝 Contribution Guidelines

1. All code and styles must follow the semantic tokens defined in `/design-system/`.
2. Ensure full keyboard accessibility, high contrast compatibility, and mobile responsiveness.
3. Verify changes on the design system showcase site (`/design-system/index.html`).

© 2026 COSYlanguages: All rights reserved.
