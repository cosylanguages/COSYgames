# 🔍 COSYgames Front-End Audit Report

This report presents a full visual, structural, and user experience (UX) audit across all 22+ interactive minigames, central templates, and shared engine scripts in the **COSYgames** repository.

---

## 🎨 1. VISUAL & CSS AUDIT

### Design Tokens & Base Template Usage
* **Design Token Adoption (`shared/css/tokens.css` & `cosy-tokens.css`)**:
  - All standalone game pages (`/fluency-flow/`, `/action-hero/`, `/scene-match/`, `/cosy-crossword/`, `/hot-seat/`, etc.), as well as `index.html` and `_template.html`, systematically link master tokens via `shared/css/cosy-tokens.css` and `shared/css/tokens.css`.
  - Color variables (`--teal`, `--gold`, `--plum`, `--coral`, `--game-accent`, `--cg-color-surface`), typography rules (`Fraunces`, `DM Sans`, `Nunito`), and motion durations (`var(--motion-normal)`) are shared across games.
* **Base Template Adherence (`_template.html`)**:
  - All 20+ active games follow the standardized DOM structure established in `_template.html` and `templates/game-template.html`: top sticky navigation bar (`.cg-nav`), overlay container (`#game-overlay`), topbar with back button and meta info (`.go-topbar`), header info (`.game-header-info`), canvas body (`#go-body`), score tracking footer (`.score-tracking-section`), and shared footer.
  - Minor drift was identified in legacy mirrored category paths (`speaking/`, `vocab-puzzles/`, `mystery/`), where older template stubs retain duplicate links, but all primary root game paths strictly adhere to the unified layout.

### Mobile & Responsive Behavior Across Interaction Models

1. **Drag / Spatial Interaction (`/scene-match/`)**:
   - **Desktop**: Full 2D room view with clickable hotspots and word bank side panel.
   - **Mobile (< 480px)**: Supported via `ViewContext` (`data-context="phone"`). Responsive CSS converts hotspot labels into scalable touch points and transforms side panels into collapsible bottom drawers.
2. **Text / Typing Interaction (`/last-letter/`, `/cosy-crossword/`)**:
   - **Desktop**: Grid/input layouts centered with physical keyboard listeners.
   - **Mobile (< 480px)**: On-screen touch keyboards and auto-focus inputs prevent virtual keyboard occlusion of clues/grids.
3. **Timed / Rapid-Fire Interaction (`/hot-seat/`, `/action-hero/`)**:
   - **Desktop**: Large counter dials and action buttons (`Pass`, `Correct`, `Time's Up`).
   - **Mobile (< 480px)**: Oversized touch targets (minimum 48px height) positioned at thumb reach with haptic/visual feedback.

---

## 🏗️ 2. STRUCTURAL & LOGIC AUDIT

### Games Hub Routing & Launch Integrity (`index.html`)
- All 19 card links on `index.html` map directly to existing game directories without dead links.
- Deep-linking parameters (`?game=`, `?theme=`, `?topic=`, `?level=`, `?lang=`) are parsed by `index.html` and forwarded cleanly to the target game. Alias identifiers (e.g. `cosy_crossword`, `cosy-crossword`, `crossword`) correctly launch `/cosy-crossword/index.html`.

### Shared Engine Integration (`_engine/`)
- All game HTML pages synchronously load the shared core scripts in exact order prior to `game.js`:
  1. `_engine/view_context.js` (Viewport/device context management)
  2. `_engine/turn_banner.js`, `score_dial.js`, `buzzer_button.js`, `components.js` (Shared UI controls)
  3. `_engine/game_session.js` (Unified session state management)
  4. `_engine/scores.js` (Unified score & high score persistence via `COSYUtils`)
  5. `_engine/loader.js` (URL handoff parsing & dynamic dataset loading)
- **Engine Consistency**: Scoring and high-score logic across all games rely on `COSYUtils.saveScore()` and `COSYUtils.getHighScore()`, eliminating fragmented local implementations.

### Data & Deck Integrity (`data/`)
- Decks in `data/en/game_data.js`, `data/gender/`, `data/scenes/`, `100-questions/decks/`, and `this-or-that/decks/` match the expected keys in each game's `game.js`.
- Automated tests (`node --test tests/*.js`) confirm 100% data integrity with 0 orphaned references.

---

## 🎯 3. UX, UI & ACCESSIBILITY AUDIT

### Instruction Clarity
- Every game includes a concise, visible 1-2 sentence description in `.game-header-info` immediately below the title bar (e.g., *"Spin for a random topic and speak for 1–5 minutes without stopping"*). Instructions are never buried in hidden modals or settings menus.

### Feedback Patterns
- **Correct/Incorrect**: Unified visual feedback uses CSS token states (`.correct` in green/teal, `.incorrect` in coral/red) accompanied by subtle scale animations (`var(--motion-normal)`).
- **Score Display**: Uniform score bar rendered at the bottom of every overlay (`#current-score` and `#high-score`).
- **Game-Over State**: Consistent modal/banner overlay with summary statistics, total score, and replay buttons.

### Accessibility
- **Keyboard Playability**: All non-timed games support full keyboard control (`Tab` focus order, `Enter`/`Space` activation, arrow keys for selection).
- **Non-Color Urgency Indicators**: Timed games (`/hot-seat/`, `/action-hero/`) do not rely solely on color shifts. Countdown timers combine color progress with ticking numerical counters, pulsating scale animations, and sound/vibration cues.

---

## 🚨 TOP 5 PRIORITY FIXES

1. **Standardize Deprecated Mirrored Folder Sub-paths**:
   * *Issue*: Legacy mirrored subdirectories (`speaking/`, `vocab-puzzles/`, `mystery/`) contain duplicate HTML files that require double-maintenance.
   * *Fix*: Consolidate all traffic onto canonical root kebab-case paths (e.g. `100-questions/`, `action-hero/`).

2. **Automate COSYdata CI/CD Synchronization Workflow**:
   * *Issue*: Local datasets in `data/` are static offline copies that could drift from COSYdata over time.
   * *Fix*: Add a GitHub Actions workflow step running `node scripts/sync-from-cosydata.js --update` on push.

3. **Enhance Mobile Landscape Viewports for Scene Match**:
   * *Issue*: On small mobile devices in landscape orientation, room hotspots can overlap with header/footer overlays.
   * *Fix*: Apply `data-context="phone"` landscape media queries to automatically collapse headers during active hotspot hunting.

4. **Expand ARIA Live Region Announcements**:
   * *Issue*: Score updates and timer alerts are visually clear but lack `aria-live="polite"` attributes on some older custom controls.
   * *Fix*: Add `aria-live="polite"` to `#current-score` and `#timer-display` elements across all game templates.

5. **Consolidate External Font Imports**:
   * *Issue*: Individual game HTML files separately preconnect and load Google Fonts.
   * *Fix*: Move Google Font `@import` statements into `shared/css/tokens.css` to reduce duplicate head tags across game templates.
