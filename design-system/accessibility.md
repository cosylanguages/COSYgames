# ♿ COSYlanguages Accessibility Guidelines (WCAG AA)

## 1. Contrast Ratios
- **Normal Text (under 18pt):** Minimum **4.5:1** contrast ratio.
- **Large Text (18pt+ / 14pt bold):** Minimum **3.0:1** contrast ratio.
- **UI Components & Icons:** Minimum **3.0:1** contrast against adjacent backgrounds.

## 2. Keyboard Navigation & Focus
- All interactive elements are reachable via `Tab`.
- **Focus Rings:** High-visibility outline ring (`2px solid var(--color-primary)` with `3px` offset) on `:focus-visible`.
- **Key Binds:** `Enter` / `Space` to activate, `Esc` to close modals, `Arrow Keys` for game grid navigation.

## 3. Screen Readers & ARIA
- Image elements require descriptive `alt` tags.
- Buttons without text require `aria-label`.
- Dynamic status changes (scores, streaks, timer notifications) use `aria-live="polite"`.

## 4. Reduced Motion & Preferences
- Respects `prefers-reduced-motion: reduce` by disabling non-essential transitions and keyframe animations.
- Provides built-in toggles for **High Contrast Mode** and **Large Text Mode**.
