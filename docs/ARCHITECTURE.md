# COSYgames Architecture

COSYgames is a collection of independent language games that share one visual
identity. It is not one application. Every game can be changed, rewritten, or
deleted without touching another game.

This repository is part of the wider COSYlanguages ecosystem, but it is also a
separate repository with its own release cycle. The only thing it shares with
its siblings is the brand and the design language.

## The shape of the repository

```
COSYgames
├── shared/                  the shell: design tokens, brand, chrome, i18n, utilities
├── _engine/                 optional shared game primitives (sessions, scores, dials)
├── data/                    shared learning data owned by COSYdata
├── i18n/                    shared game-string tables
├── games/index.json         the game registry (ids, aliases, CEFR, skills, modes)
├── scene-match/             one self-contained game
├── word-linker/             one self-contained game
├── ...
└── docs/                    contributor documentation
```

Each game is a top-level folder. The folder name is the public URL, so
`scene-match/index.html` is served at `/COSYgames/scene-match/`. Keeping the
folders at the top level preserves every existing URL, bookmark, and search
result. `games/index.json` is the registry, not a relocation of the games.

## What the shared shell owns

Only universal things belong in the shell:

- `shared/css/tokens.css` — the ecosystem design tokens (colour, type, spacing).
- `shared/css/brand.css` — the COSYgames turquoise identity layer.
- `shared/chrome/*.tpl` — the single source for the nav and footer.
- `shared/js/nav.js`, `i18n.js`, `game-strings.js` — theme, language, shared UI strings.
- `shared/utils/game-utils.js` — small stateless helpers.
- `shared/images/` — logos and ecosystem-level images.
- `_engine/` — optional primitives a game may opt into. A game that does not
  use the engine still works.

Nothing game-specific belongs in the shell.

## What a game owns

A game owns its entry page, styles, script, data, images, audio, and README:

```
scene-match/
├── index.html
├── scene-match.css
├── game.js
├── README.md
├── tools/
└── ...
```

Games must not import another game's JavaScript, CSS, data, or assets. The test
suite enforces this with `tests/game-isolation.test.js`. The only pages allowed
to point at another game are the legacy redirect stubs (`action-hero`,
`identity-mystery`, `object-quest`, `storytelling`), which exist to preserve old
links.

## The brand layer

`shared/css/brand.css` is loaded last on every page, after the component
stylesheets. It does two jobs:

1. It re-points the legacy `--sage` and `--teal` tokens to the COSY turquoise
   family, so every existing component inherits the new identity.
2. It adds brand details on top: the navigation bar, hero underline, section
   rules, card accents, filter pills, buttons, focus rings, progress bars, and
   footer.

The two anchor colours come from the COSYlanguages logo:

| Token | Value | Use |
| --- | --- | --- |
| `--cosy-brand-primary` | `#0abbb5` | logo, active pills, play badges, decorative gradients |
| `--cosy-brand-secondary` | `#0ca2b0` | supporting accents, hover states, gradient end |
| `--cosy-brand-deep` | `#067a77` | links, icons, readable text on light surfaces |
| `--cosy-brand-ink` | `#033b39` | text placed on a turquoise surface |
| `--cosy-brand-tint` | `#e7fbf9` | icon tiles, tags, soft backgrounds |

Dark mode redefines the same tokens, so a game does not need its own dark
palette. Games that define their own colours should prefer the tokens over
hardcoded hex values.

## Generated artifacts

Three scripts keep the repository in sync with the registry. They all support
`--check`, so CI fails if a generated file drifts.

| Command | What it writes |
| --- | --- |
| `node scripts/sync-hub.js` | the game sections inside `index.html` |
| `node scripts/sync-game-manifests.js` | each game's `manifest.json` and the generated “At a glance” block in its `README.md` |
| `node scripts/sync-site-chrome.js` | the shared nav and footer inside every page |
| `node scripts/check-brand-contrast.js` | nothing; it exits 1 if a brand text/background pair drops below WCAG AA |

The hub cards stay static HTML for SEO and no-JS users. The sync script
regenerates them from `games/index.json`, so the registry is the source of
truth. The `cosy:hub:start` and `/cosy:hub:end` comments mark the generated
region; do not edit the cards by hand.

Each game's `README.md` keeps its hand-written prose. The generator only
replaces the block between `<!-- cosy:manifest:start -->` and
`<!-- cosy:manifest:end -->`.

## Adding a game

1. Create a new top-level folder with an `index.html`, its own CSS, its own
   JavaScript, and a `README.md`.
2. Load `shared/css/tokens.css`, the component stylesheets, and
   `shared/css/brand.css` last.
3. Use the shared nav and footer templates (`nav-game`, `footer-game`) via
   `node scripts/sync-site-chrome.js`.
4. Add the game to `games/index.json` with its `icon`, `description_key`,
   `category`, `cefr_levels`, `learning_languages`, and `mode`.
5. Add the `description_key` text to `shared/js/i18n.js` in every supported
   language.
6. Add the game to `GAMES_INVENTORY.json` and `data/game-taxonomy.json`.
7. Run `node scripts/sync-hub.js` and
   `node scripts/sync-game-manifests.js`.
8. Run `node --test tests/*.js`.

No other game changes.

## Deleting a game

1. Delete the game folder.
2. Delete its entry from `games/index.json`, `GAMES_INVENTORY.json`, and
   `data/game-taxonomy.json`.
3. Run `node scripts/sync-hub.js` and
   `node scripts/sync-game-manifests.js`.
4. Run the test suite.

Nothing else changes.

## Why not move every game into a `games/` folder?

Moving live games would break their public URLs and every link from COSYlanguages
and search results. The isolation goal is achieved by the folder contract and
the isolation test, not by nesting. The `games/` folder already exists as the
registry (`games/index.json`), which is what tooling and deep links read.

## Related documents

- `docs/ui_ux_blueprint.md` — layout, typography, motion, and accessibility.
- `docs/GAME_TAXONOMY.md` — filters, categories, and CEFR mapping.
- `docs/GAME_METADATA.md` — the current machine-checked metadata view.
- `docs/SITE_URLS.md` — the single source of truth for ecosystem URLs.
