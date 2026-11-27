# 🎨 COSYgames UI/UX Design & Motion Architecture Specification

This specification outlines the central visual genome, ergonomic standards, design token architecture, interactive component rules, motion design guidelines, and context adaptations for **COSYgames**.

---

## 1. 📐 Design Philosophy & Context Ergonomics

COSYgames supports three distinct learning environments:

### 📽️ 1. Projector & Classroom Mode (`[data-context="projector"]`)
* **Target Environment:** In-person classroom screens, interactive whiteboards, overhead projectors viewed from 3–10 meters.
* **Key Ergonomic Rules:**
  * **Typography Scale:** Scaled up by +25–40% (`h1`: 2.5–4rem, `body`: 1.15–1.25rem).
  * **High Contrast:** High contrast borders (3–4px solid), crisp shadows, and bold weight hierarchy.
  * **Controls:** Prominent score dials, large turn banners, and extra-large touch/buzzer targets (minimum 220px diameter).
  * **Pacing:** Clear step-by-step state changes visible across the room.

### 💻 2. Online & Screen-Share Mode (`[data-context="online"]`)
* **Target Environment:** Online virtual classes (Zoom, Google Meet, Teams, Skype), desktop/laptop screen sharing.
* **Key Ergonomic Rules:**
  * **Aspect Ratio & Layout:** Balanced container width (max-width 1100px), centered layout optimized for standard 16:9 screen shares.
  * **Webcam Clearance:** Header and control bar margins prevent overlap with video conferencing overlays.
  * **Component Sizing:** Medium component scale (`score-dial` 130px min-width, `turn-banner` 2.2rem active text).
  * **Interactive Clarity:** Clear hover states, tooltips, and keyboard focus rings (`:focus-visible` 2px solid teal).

### 📱 3. Mobile & Phone Mode (`[data-context="phone"]`)
* **Target Environment:** Student smartphones (iOS / Android), portrait mode, single-user or pass-the-phone group play.
* **Key Ergonomic Rules:**
  * **Touch Targets:** Minimum 44×44px interactive tap area on all buttons, tags, chips, and cards.
  * **Single Column Reflow:** 1-column stack layout for game grids, control zones, and option cards.
  * **Thumb Zone Ergonomics:** Primary actions (Next, Submit, Pass, Buzz) placed in the lower 40% of the screen.
  * **Safe Area Compliance:** Bottom padding incorporates `env(safe-area-inset-bottom, 16px)`.

---

## 2. 🎨 Color Palette & Theme Logic

### Core Tokens (`shared/css/tokens.css`)
* **Ecosystem Base:** neutrals, typography, spacing, radii, shadows, and semantic
  feedback colours. This file is shared across the COSY ecosystem.
* **Background & Surfaces:**
  * Light Mode: Background `--cream` (`#fdfcf8`), Surface `#FFFFFF`, Text `--ink` (`#2a2a2a`).
  * Dark Mode: Background `--cream` (`#1a1f1a`), Surface `#222b22`, Text `--ink` (`#e8f0e9`).

### Brand Layer (`shared/css/brand.css`)
Loaded last on every page. It re-points the legacy `--sage` / `--teal` aliases
to the COSY turquoise family and adds the game-specific identity details.

* **Primary:** `--cosy-brand-primary` (`#0abbb5`) — the COSYlanguages logo colour.
  Used on the logo, active filters, play badges, and decorative gradients.
* **Secondary:** `--cosy-brand-secondary` (`#0ca2b0`) — supporting accents,
  hover states, and the second stop of brand gradients.
* **Readable text:** `--cosy-brand-deep` (`#067a77`) on light surfaces and
  `--cosy-brand-ink` (`#033b39`) on turquoise surfaces. This keeps contrast
  accessible without dulling the identity.
* **Tints:** `--cosy-brand-tint` (`#e7fbf9`), `--cosy-brand-tint-strong`
  (`#c9f5f1`), `--cosy-brand-mist` (`#f2fdfc`) for icon tiles, tags, and soft
  backgrounds.
* **Game categories:** all categories stay inside the turquoise family.
  Differentiation comes from the icon, label, and badge shape rather than a
  competing hue. This keeps COSYgames recognisable at a glance.

---

## 3. ✍️ Typography Scale & Hierarchy

| Hierarchy Level | Font Family | Desktop / Online | Projector | Mobile Phone |
| :--- | :--- | :--- | :--- | :--- |
| **Page / Hero Title** | `Fraunces`, serif | 2.5rem / bold | 3.5–4.0rem / bold | 1.8–2.0rem / bold |
| **Section Heading** | `Fraunces`, serif | 1.5–1.75rem | 2.25rem | 1.25–1.4rem |
| **Game Prompt / Target** | `Nunito`, sans-serif | 1.5–2.0rem / 800 | 2.5–3.2rem / 800 | 1.25–1.5rem / 800 |
| **Body / Description** | `Nunito`, sans-serif | 1.0rem | 1.15–1.25rem | 0.95rem |
| **Label / Meta Tag** | `Nunito` / `DM Sans` | 0.85rem / 700 / UPPER | 1.1rem / UPPER | 0.75rem / UPPER |

---

## 4. 🧩 Shared UI Component Architecture (`_engine/`)

### 🚩 1. TurnBanner (`.turn-banner`)
* **Role:** Indicates current active turn, player name, and upcoming player.
* **States:** Standard, Projector (expanded font & border), Phone (compact single line).
* **Transitions:** Smooth background accent transition (`transition: all 300ms ease`).

### ⏱️ 2. ScoreDial (`.score-dial`)
* **Role:** Displays live points, streaks, or countdown timer.
* **Styling:** Elevated white surface card with large numeric counter (`--game-accent`).
* **Responsiveness:** Auto-scales from 90px (Phone) to 130px (Online) to 180px+ (Projector).

### 🔔 3. BuzzerButton (`.buzzer-button`)
* **Role:** High-energy quick-fire trigger for group activities (e.g., Hot Seat).
* **Affordance:** 3D circular radial gradient, inset lighting highlight, tactile press effect.
* **Animation:** Haptic bounce (`buzzerHapticBounce` keyframe) on press.

### 🌐 4. Context Switcher (`.cosy-context-select`)
* **Role:** Allows teachers and students to explicitly switch between Projector (📽️), Online (💻), and Phone (📱) modes.
* **Placement:** Header navigation bar (`.cg-nav-right`), persisting choice in `localStorage`.

---

## 5. 🎬 Motion Design & Micro-Interactions (`shared/css/motion.css`)

1. **Card Flip (`.motion-flip`):** `300ms cubic-bezier(0.4, 0, 0.2, 1)` for mystery cards and flashcard reveals.
2. **Chain Slide (`.motion-slide-chain`):** `300ms cubic-bezier(0.16, 1, 0.3, 1)` for word chain links and step pills.
3. **Burst (`.motion-burst`):** `150ms spring bounce` for score increases and correct answers.
4. **Pin Drop (`.motion-pin-drop`):** `300ms drop animation` for Scene Match hotspots and pinned targets.
5. **Accessibility Rule:** All animations automatically fallback to simple fade (`motionSimpleFade`) under `@media (prefers-reduced-motion: reduce)`.

---

© 2022-2026 COSY Languages Architecture Blueprint
