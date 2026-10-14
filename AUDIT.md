# Repository Audit: COSYgames

This document presents a comprehensive read-only audit of the `COSYgames` repository within the COSY ecosystem (**COSYlanguages**, **COSYdata**, **COSYtools**, **COSYmanuals**, **COSYplatform**, **COSYevents**, **COSYgames**).

---

## 1. Branches and Open PRs

A thorough check of all 68 remote branches (`origin/*`) was performed against `origin/main` (latest commit `19d3b2b` on 2026-10-14).

### Summary of Branches with Unmerged Commits Ahead of `main`

The following 6 branches contain unique, unmerged commits relative to `main`:

1. **`design/foundations`**
   - **Last Commit Date:** 2026-09-07 13:07:24 +0000
   - **Unmerged Commits (2):**
     - `e1b9edb`: Add shared design tokens
     - `9b74026`: Add design audit checklist and shared design tokens
   - **What it adds relative to main:** Adds foundational design tokens (`shared/css/cosy-tokens.css`), design audit checklist (`DESIGN_AUDIT.md`), and early modular game structures prior to the main hub refactoring.

2. **`feat/supabase-scores-leaderboard-656458846115341154`**
   - **Last Commit Date:** 2026-09-26 09:04:08 +0000
   - **Unmerged Commits (1):**
     - `bc3561a`: feat: add optional Supabase scores sync and community leaderboard view
   - **What it adds relative to main:** Adds optional Supabase integration for score persistence, leaderboard rendering logic in `_engine/scores.js`, and styling in `shared/css/games.css` for cross-game score submission.

3. **`jules-5010315011311501351-a5e27dbb`**
   - **Last Commit Date:** 2026-09-10 14:26:27 +0000
   - **Unmerged Commits (3):**
     - `d166921`: Build comprehensive COSYlanguages design system tokens & showcase
     - `1b3fc84`: Enhance COSYgames discovery experience, playlists, teacher mode & accessibility
     - `4aa2b0c`: Finalize COSYgames standalone hub migration and dataset structure
   - **What it adds relative to main:** Early iteration of design system token showcase (`design-system/index.html`), vocabulary audit notes (`VOCAB_ALIGNMENT_NOTES.md`), and discovery filtering logic before being refined into main.

4. **`jules-9386123944480401151-90c93e8e`**
   - **Last Commit Date:** 2026-09-07 19:43:49 +0000
   - **Unmerged Commits (1):**
     - `e72bb04`: Add image prompts to all profile cards across all language decks
   - **What it adds relative to main:** Standalone script `add_image_prompts.py` for automated prompt injection into profile card decks.

5. **`lucky-numbers-emoji-updates-1832326445964267480`**
   - **Last Commit Date:** 2026-09-14 18:46:01 +0000
   - **Unmerged Commits (1):**
     - `fd8c950`: Update Lucky Numbers, remove What Gender Is It, expand Emoji Odyssey, and fix Word Linker validation
   - **What it adds relative to main:** Contains modifications to `lucky-numbers/game.js` and `emoji-odyssey/game.js` with earlier emoji mapping logic.

6. **`migrate-greek-a2-speaking-data-10332130264054340383`**
   - **Last Commit Date:** 2026-09-20 09:33:35 +0000
   - **Unmerged Commits (1):**
     - `a188ce9`: feat: migrate A2 speaking data across languages & upgrade Battle of Wits UI
   - **What it adds relative to main:** Standalone A2 speaking prompt updates across Italian, Russian, and Greek before dataset modularization.

### Branches Identical to or Fully Merged into `main` (58 Branches)
The remaining 58 origin branches (`add-missing-games-and-data-files-*`, `audit-map-discussion-content-*`, `cleanup-docs-and-hub-tests-*`, `feature/ecosystem-sso-cms-editor-*`, `harden-sso-cms-*`, `refactor/css-and-visual-cleanup-*`, etc.) have their commit histories fully merged into `main` or contain no unique changes relative to `main`.

---

## 2. Directory Tree (Depth 3)

Below is the directory tree to depth 3 with direct file counts, total nested file counts, and a one-line purpose for each folder.

- `./`: (9 direct files, 370 total nested files) — COSYgames repository root containing home index, hub launcher, and config.
  - `.github/`: (0 direct files, 3 total nested files) — GitHub configuration and workflows directory.
    - `workflows/`: (3 direct files, 3 total nested files) — Automated CI workflows for testing, etymology validation, and COSYdata alignment.
  - `100-questions/`: (3 direct files, 11 total nested files) — Speaking/conversation prompt game ("100 Questions").
    - `decks/`: (8 direct files, 8 total nested files) — Localized decks and teacher question datasets for 100 Questions.
  - `_engine/`: (10 direct files, 10 total nested files) — Core game engine runtime scripts, score system, loader, and demo context.
  - `action-hero/`: (3 direct files, 3 total nested files) — Interactive action verb practice game ("Action Hero").
  - `battle-of-wits/`: (3 direct files, 3 total nested files) — Rapid-fire debate and argument practice game ("Battle of Wits").
  - `cosy-crossword/`: (3 direct files, 3 total nested files) — Dynamic crossword puzzle game engine and UI ("COSY Crossword").
  - `critics-corner/`: (3 direct files, 3 total nested files) — Media, film, and book review discussion game ("Critics' Corner").
  - `data/`: (1 direct file, 189 total nested files) — Modular per-language and per-game dataset storage.
    - `ba/`: (10 direct files, 11 total nested files) — Bashkir language game datasets.
      - `unsorted/`: (1 direct file, 1 total nested file) — Unsorted/staging Bashkir content.
    - `br/`: (10 direct files, 11 total nested files) — Breton language game datasets.
      - `unsorted/`: (1 direct file, 1 total nested file) — Unsorted/staging Breton content.
    - `cv/`: (4 direct files, 5 total nested files) — Chuvash language game datasets.
      - `unsorted/`: (1 direct file, 1 total nested file) — Unsorted/staging Chuvash content.
    - `de/`: (10 direct files, 11 total nested files) — German language game datasets.
      - `unsorted/`: (1 direct file, 1 total nested file) — Unsorted/staging German content.
    - `el/`: (10 direct files, 13 total nested files) — Greek language game datasets.
      - `unsorted/`: (3 direct files, 3 total nested files) — Unsorted/staging Greek content (people, locations, quotes).
    - `en/`: (10 direct files, 10 total nested files) — English language game datasets.
    - `es/`: (10 direct files, 11 total nested files) — Spanish language game datasets.
      - `unsorted/`: (1 direct file, 1 total nested file) — Unsorted/staging Spanish content.
    - `fr/`: (10 direct files, 13 total nested files) — French language game datasets.
      - `unsorted/`: (3 direct files, 3 total nested files) — Unsorted/staging French content.
    - `gender/`: (6 direct files, 6 total nested files) — Grammatical gender vocabulary datasets (A1 through C2).
    - `hy/`: (10 direct files, 11 total nested files) — Armenian language game datasets.
      - `unsorted/`: (1 direct file, 1 total nested file) — Unsorted/staging Armenian content.
    - `it/`: (10 direct files, 13 total nested files) — Italian language game datasets.
      - `unsorted/`: (3 direct files, 3 total nested files) — Unsorted/staging Italian content.
    - `ka/`: (10 direct files, 11 total nested files) — Georgian language game datasets.
      - `unsorted/`: (1 direct file, 1 total nested file) — Unsorted/staging Georgian content.
    - `pt/`: (10 direct files, 11 total nested files) — Portuguese language game datasets.
      - `unsorted/`: (1 direct file, 1 total nested file) — Unsorted/staging Portuguese content.
    - `ru/`: (10 direct files, 13 total nested files) — Russian language game datasets.
      - `unsorted/`: (3 direct files, 3 total nested files) — Unsorted/staging Russian content.
    - `scenes/`: (24 direct files, 24 total nested files) — Hotspot scene location metadata JSON files for Scene Match.
    - `shared/`: (3 direct files, 3 total nested files) — Shared dataset fallbacks and common prompts.
    - `tt/`: (10 direct files, 11 total nested files) — Tatar language game datasets.
      - `unsorted/`: (1 direct file, 1 total nested file) — Unsorted/staging Tatar content.
  - `docs/`: (3 direct files, 11 total nested files) — Repository documentation and migration logs.
    - `archive/`: (8 direct files, 8 total nested files) — Archived audit notes, migration reports, and historical content plans.
  - `emoji-odyssey/`: (3 direct files, 3 total nested files) — Visual emoji association and vocabulary discovery game ("Emoji Odyssey").
  - `etymology-explorer/`: (4 direct files, 4 total nested files) — Root word origins and etymology puzzle game ("Etymology Explorer").
  - `fluency-flow/`: (3 direct files, 3 total nested files) — Rapid response fluency & transition phrase practice game ("Fluency Flow").
  - `games/`: (1 direct file, 1 total nested file) — Game metadata registry (`index.json`) mapping all games and titles.
  - `hot-seat/`: (3 direct files, 3 total nested files) — Vocabulary definition and tabu word practice game ("Hot Seat").
  - `i18n/`: (0 direct files, 14 total nested files) — Internationalization translation dictionaries for UI game strings.
    - `games/`: (14 direct files, 14 total nested files) — Per-game translation JSON dictionaries.
  - `identity-mystery/`: (3 direct files, 3 total nested files) — Deductive roleplay and identity guessing game ("Identity Mystery").
  - `last-letter/`: (3 direct files, 3 total nested files) — Shiritori / word chain spelling game ("Last Letter").
  - `lucky-numbers/`: (2 direct files, 2 total nested files) — Dynamic alphabet, number, and ordinal listening game ("Lucky Numbers").
  - `object-quest/`: (3 direct files, 3 total nested files) — Concrete object identification game with fog-of-war mechanics ("Object Quest").
  - `opinion-arena/`: (3 direct files, 3 total nested files) — Structured debate and opinion sharing game ("Opinion Arena").
  - `scene-match/`: (4 direct files, 5 total nested files) — Visual vocabulary scene matching game ("Scene Match").
    - `tools/`: (1 direct file, 1 total nested file) — Visual hotspot editor utility for defining scene coordinate regions.
  - `scripts/`: (6 direct files, 6 total nested files) — Repository maintenance, validation, and COSYdata sync scripts.
  - `shared/`: (1 direct file, 19 total nested files) — Shared ecosystem UI styles, scripts, images, and utilities.
    - `css/`: (7 direct files, 7 total nested files) — Ecosystem CSS stylesheets (nav, hub, tokens, games, motion).
    - `images/`: (1 direct file, 1 total nested file) — Shared branding image assets (`cosygames-logo.png`).
    - `js/`: (7 direct files, 8 total nested files) — Ecosystem JavaScript scripts (SSO auth, CMS editor, vocab loader, i18n).
      - `core/`: (1 direct file, 1 total nested file) — Core ecosystem loading helper (`cosy-core.js`).
    - `styles/`: (1 direct file, 1 total nested file) — Standardized game canvas UI layout stylesheet (`game-styles.css`).
    - `utils/`: (1 direct file, 1 total nested file) — Core shared game utilities (`game-utils.js`).
  - `story-chain/`: (3 direct files, 3 total nested files) — Collaborative sentence-building story chain game ("Story Chain").
  - `story-weaver/`: (3 direct files, 3 total nested files) — Narrative generation and story prompt game ("Story Weaver").
  - `storytelling/`: (1 direct file, 1 total nested file) — Legacy storytelling entrypoint.
  - `templates/`: (1 direct file, 1 total nested file) — Standardized game layout template (`game-template.html`).
  - `tests/`: (16 direct files, 18 total nested files) — Automated node unit tests for game engines, datasets, and asset links.
    - `manual/`: (2 direct files, 2 total nested files) — Manual test scripts for i18n leak checking and prompt testing.
  - `this-or-that/`: (3 direct files, 20 total nested files) — Persona choice and profile card preference game ("This or That").
    - `decks/`: (5 direct files, 17 total nested files) — Localized decks and CEFR level profile card collections.
      - `en/`: (12 direct files, 12 total nested files) — English profile card deck JSON files across practice topics.
  - `translations/`: (3 direct files, 3 total nested files) — Localized translation files for 100 Questions.
  - `vocabulary/`: (0 direct files, 2 total nested files) — Read-only mirror of canonical vocabulary dataset.
    - `_canonical/`: (0 direct files, 2 total nested files) — Ecosystem canonical vocabulary folder.
      - `en/`: (2 direct files, 2 total nested files) — English A0-A1 master vocabulary JSON list and metadata mirror.
  - `what-gender-is-it/`: (2 direct files, 2 total nested files) — Grammatical gender training game ("What Gender Is It?").
  - `word-linker/`: (3 direct files, 3 total nested files) — Word grouping and semantic association game ("Word Linker").

---

## 3. Languages and CEFR Levels Covered

### Summary Table by Content Type

| Content Type | Languages Covered (ISO 639-1) | CEFR Levels Covered | Exact Locations / Files |
| :--- | :--- | :--- | :--- |
| **Core Game Datasets** (`data/<lang>/*.js`) | `en`, `es`, `de`, `fr`, `it`, `ru`, `el`, `hy`, `ka`, `ba`, `br`, `pt`, `tt` | A0, A1, A2, B1, B2, C1, C2 | `data/<lang>/` (`action.js`, `battle.js`, `critic.js`, `etymology.js`, `fluency.js`, `identity.js`, `opinions.js`, `storychain.js`, `wordlinker.js`) |
| **Grammatical Gender Datasets** | `fr`, `de`, `es`, `it`, `ru` | A1, A2, B1, B2, C1, C2 | `data/gender/a1.js` through `c2.js`, `what-gender-is-it/` |
| **This or That Decks** | `en`, `fr`, `it`, `ru`, `el` | A0_A1, A2, B1, B2 | `this-or-that/decks/cefr_all_decks.json`, `french.json`, `italian.json`, `russian.json`, `greek.json`, `this-or-that/decks/en/*.json` |
| **100 Questions Decks** | `en`, `es`, `de`, `fr`, `it`, `ru` | A1, A2, B1, B2 | `100-questions/decks/` (`general.js`, `casual.js`, `deep.js`, `would_you_rather.js`, `teacher.js`) |
| **Canonical Vocabulary Mirror** | `en` | A0, A1 | `vocabulary/_canonical/en/A0-A1_master.json` |
| **Unsorted Staging Data** | `fr`, `it`, `ru`, `el`, `es`, `de`, `hy`, `ka`, `ba`, `br`, `cv`, `pt`, `tt` | A2 | `data/<lang>/unsorted/` |
| **UI Translations (i18n)** | `en`, `es`, `de`, `fr`, `it`, `ru`, `el`, `hy`, `ka`, `ba`, `br`, `cv`, `pt`, `tt` | N/A (UI text) | `shared/js/i18n.js`, `i18n/games/*.json` |

---

## 4. Paid or Restricted Content Served Publicly

A complete audit of all files was conducted to detect any restricted course material, teacher guide keys, answer keys, workbooks, or paid lesson assets.

### Findings

- **`100-questions/decks/teacher.js`**
  - **Type:** Teacher conversation deck / prompt guide.
  - **Status:** Publicly readable and served over GitHub Pages (`https://cosylanguages.github.io/COSYgames/100-questions/`).
  - **Description:** Contains 50 targeted conversation prompts specifically structured for language teachers conducting 1-on-1 or group lessons.
  - **Risk Assessment:** While not containing confidential keys or paid billing data, it exposes specialized teacher lesson prompts publicly without requiring teacher authentication (`?teacher=1`).

- **No Other Paid/Restricted Assets Found:**
  - No PDF workbooks, paid course video/audio streams, student grading sheets, or paid lesson manuals exist in `COSYgames`.

---

## 5. Duplicate or Overlapping Content Across COSY Ecosystem

The following datasets in `COSYgames` overlap with or mirror canonical content held in **COSYdata**, **COSYtools**, or **COSYlanguages**:

### Exact Overlaps and Fingerprints

1. **Canonical A0-A1 English Master Vocabulary List**
   - **Path in COSYgames:** `vocabulary/_canonical/en/A0-A1_master.json`
   - **Source Repo:** `COSYlanguages` / `COSYdata` (`COSYlanguages/vocabulary/_canonical/en/A0-A1_master.json`)
   - **Fingerprint:**
     - File Count: 2 files (`A0-A1_master.json`, `README.md`)
     - File Size: ~118 KB
     - Newest Commit Date on Main: 2026-09-12
     - Role: Read-only mirror marked with explicit header notice pointing to COSYlanguages as the single writable source of truth.

2. **Grammatical Gender Vocabularies (A1–C2)**
   - **Path in COSYgames:** `data/gender/a1.js`, `a2.js`, `b1.js`, `b2.js`, `c1.js`, `c2.js`
   - **Source Repo:** `COSYdata` (`data/gender/`)
   - **Fingerprint:**
     - File Count: 6 files
     - Newest Commit Date on Main: 2026-09-09
     - Role: Local runtime datasets formatted as IIFEs for offline/static loading in `what-gender-is-it`.

3. **Shared Visual Design Tokens**
   - **Path in COSYgames:** `shared/css/tokens.css`
   - **Source Repo:** `COSYlanguages` (`design-system/colors.css`, `tokens.css`)
   - **Fingerprint:**
     - File Count: 1 file
     - Newest Commit Date on Main: 2026-09-25
     - Role: Local CSS custom properties token file defining ecosystem visual theme.

---

## 6. References to COSYworld

`COSYworld` is being explicitly discontinued across the ecosystem.

### Findings on `main` Branch
- **Total References on `main`:** **0**
- All legacy links and references to `COSYworld` have been fully purged from the active `main` codebase.

### Historical Matches in Unmerged Remote Branches
For full transparency, legacy references to `COSYworld` exist strictly on historical/unmerged branches (such as `sync-canonical-vocab-mirror-*` or `jules-vendor-design-tokens-*` in older `index.html` navigation headers and `CANON_SOURCE_OF_TRUTH.md` notes).

---

## 7. Ecosystem Dependencies

`COSYgames` connects to other COSY ecosystem repositories through asset URLs, dynamic vocabulary fetching, SSO authentication, and navigation links.

### Line-by-Line Dependency References

#### 1. Live SSO Auth & Visual CMS SDK (`COSYAuth` & `COSYCMS`)
- **`shared/js/auth-sso.js`**: Lines 33–36
  - Dynamically loads Supabase JS SDK v2.49.1 from CDN with Subresource Integrity (SRI) to perform cross-domain SSO token exchange across `.cosylanguages.com` / `cosylanguages.github.io`.
- **`shared/js/cms-editor.js`**: Lines 1–40
  - Connects to Supabase backend via `COSYAuth.getClient()` to allow founder/admin CMS overrides.

#### 2. Runtime Vocabulary Loading from `COSYdata` (`COSYVocab`)
- **`shared/js/vocab-loader.js`**: Lines 14–28
  - Runtime fetcher that dynamically retrieves JSON vocabulary dictionaries from `COSYdata` via GitHub Pages URL (`https://cosylanguages.github.io/COSYdata/vocabulary/`) or local relative paths.
- **`lucky-numbers/game.js`**: Lines 12–15
  - Fetches ordinal & cardinal number sequences from `https://cosylanguages.github.io/COSYdata/vocabulary/a0_a1/numbers.json`.
- **`object-quest/game.js`**: Line 24
  - Uses `window.COSYVocab.ensureFull(...)` to load concrete noun datasets from `COSYdata`.
- **`hot-seat/game.js`**: Line 18
  - Uses `window.COSYVocab.ensure(...)` to load definition prompts from `COSYdata`.
- **`word-linker/game.js`**: Line 32
  - Uses `window.COSYVocab.buildLinkPuzzles(...)` to generate semantic puzzles from `COSYdata`.

#### 3. Cross-Domain Ecosystem Navigation Header & Footer Links
All game entrypoint HTML files (`100-questions/index.html`, `action-hero/index.html`, `battle-of-wits/index.html`, `cosy-crossword/index.html`, `critics-corner/index.html`, `emoji-odyssey/index.html`, `etymology-explorer/index.html`, `fluency-flow/index.html`, `hot-seat/index.html`, `identity-mystery/index.html`, `index.html`, `last-letter/index.html`, `lucky-numbers/index.html`, `object-quest/index.html`, `opinion-arena/index.html`, `scene-match/index.html`, `story-chain/index.html`, `story-weaver/index.html`, `this-or-that/index.html`, `word-linker/index.html`) contain standard ecosystem links:
- **Navigation Bar:**
  - `Home 🏠`: `https://cosylanguages.github.io/COSYlanguages/`
  - `Tools 🔎`: `https://cosylanguages.github.io/COSYtools/`
  - `Events 🎉`: `https://cosylanguages.github.io/COSYevents/`
- **Footer Section:**
  - `Grammar & verb reference`: `https://cosylanguages.github.io/COSYtools/`
  - `Quick practice drills`: `https://cosylanguages.github.io/COSYtools/practice/`
  - `Vocabulary dictionary`: `https://cosylanguages.github.io/COSYdata/`
  - `COSYlanguages Home`: `https://cosylanguages.github.io/COSYlanguages/`
  - `COSYlanguages Logo Asset`: `https://cosylanguages.github.io/COSYlanguages/images/logos/cosylanguages.png`

#### 4. Alignment Test & Sync Scripts
- **`scripts/sync-from-cosydata.js`**: Line 12
  - Reads/verifies alignment against `COSYdata` repository structure.
- **`.github/workflows/validate-cosydata-sync.yml`**: Lines 22–23
  - Executes `node scripts/sync-from-cosydata.js --check` on pull requests.

---

## 8. Dead Weight and Stale Artifacts

The `main` branch is remarkably clean; however, archived documents and manual test scripts remain in the tree.

### Dead Weight List

1. **Archived Audit Docs & Migration Reports (`docs/archive/`)**
   - `docs/archive/MIGRATION-GAMES.md`: Historical game migration notes.
   - `docs/archive/VOCAB_ALIGNMENT_NOTES.md`: Historical vocabulary audit notes.
   - `docs/archive/discussion-content-diff-audit.md`: Stale discussion diff report.
   - `docs/archive/quotes_content_needs_home.md`: Stale staging note.
   - `docs/archive/DATA_AUDIT.md`: Stale data audit document.
   - `docs/archive/A2_unsorted_migration_report.md`: Stale A2 migration report.
   - `docs/archive/DEDUP_AUDIT.md`: Stale duplication report.
   - `docs/archive/discussion-content-migration-plan.md`: Stale migration plan.

2. **Manual Test Harness Scripts (`tests/manual/`)**
   - `tests/manual/test_100_questions.mjs`: One-off manual test runner for 100 Questions deck loading.
   - `tests/manual/i18n-leak-check.mjs`: Manual Playwright i18n string leak verification script.

3. **Historical Build Artifacts on Remote Unmerged Branches**
   - `Mia.21.jpg`: Stale photo asset present on unmerged feature branches (`audit-map-discussion-content-*`, `jules-5010315011311501351-*`).
   - `action_hero_screenshot.png`: Test screenshot artifact present on unmerged feature branches (`feat/level-selector-*`, `feat/seo-sitemap-*`).
   - `server.log`: Local server run log committed on unmerged branches (`feature/i18n-5-games-*`).
   - `add_image_prompts.py`: One-off Python script on branch `jules-9386123944480401151-90c93e8e`.

---

## 9. Deployment and Access Control

### Deployment Mechanism
- **Hosting Platform:** GitHub Pages (Static Web Site).
- **Entrypoint URL:** `https://cosylanguages.github.io/COSYgames/`
- **Build System:** Pure static HTML5, CSS3, and ES6 Client-Side JavaScript. No server-side compilation, Node runtime, or build step required for deployment.
- **GitHub Pages Configuration:** Served directly from the `main` branch root folder. Disables Jekyll processing via root `.nojekyll` file.
- **Sitemap & SEO:** Indexed via `sitemap.xml` (21 live game page URLs) and `robots.txt`. Non-game utility pages (`templates/game-template.html`, `_engine/demo.html`, `scene-match/tools/hotspot-editor.html`) are excluded from sitemap and tagged with `<meta name="robots" content="noindex, follow">`.

### Access Control Architecture
- **Public Surface:** 100% of the repository's files on the `main` branch are publicly accessible over HTTPS on GitHub Pages and publicly readable via Git.
- **Teacher Mode Control:**
  - Standard user view vs. Teacher view is managed client-side via `window.COSYTeacherMode`.
  - Toggled via `localStorage.setItem('cosy_teacher_mode', '1')` or URL parameters `?teacher=1` / `?teacher=0`.
  - Does not restrict network access to files; merely toggles UI display elements (e.g. showing lesson answer hints or teacher prompt controls).
- **Single Sign-On (SSO) & CMS Access:**
  - Integrated via `shared/js/auth-sso.js` (`COSYAuth`) and `shared/js/cms-editor.js` (`COSYCMS`).
  - Remains completely inert unless valid Supabase credentials (`COSY_SUPABASE_URL` and `COSY_SUPABASE_ANON_KEY`) are configured.
  - Restricted operations (Visual CMS editing) require an authenticated user with `app_metadata.role` set to `admin`, `founder`, or `owner`.
