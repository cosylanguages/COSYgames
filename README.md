# COSYgames

COSYgames is an open-source suite of 18 interactive, standalone language-learning games designed for communicative fluency, vocabulary practice, speaking drills, and classroom activities across multiple CEFR levels without requiring account registration or setup.

- **Live Site:** [https://cosylanguages.github.io/COSYgames/](https://cosylanguages.github.io/COSYgames/)
- **Main Site:** [https://cosylanguages.github.io/COSYlanguages/](https://cosylanguages.github.io/COSYlanguages/)

## How the repository is organised

COSYgames is a collection of independent games that share one shell and one
visual identity. Each game lives in its own top-level folder and can be changed,
rewritten, or deleted without affecting any other game. The shared shell owns
the design tokens, the brand layer, the nav and footer, the interface language
switcher, and small universal utilities.

The two COSYlanguages logo colours are the visual anchor:

- Primary turquoise `#0abbb5`
- Secondary teal `#0ca2b0`

They are defined once in [`shared/css/brand.css`](shared/css/brand.css), which is
loaded last on every page. Legacy components inherit the brand through the
existing `--sage` and `--teal` tokens.

See [`docs/ARCHITECTURE.md`](docs/ARCHITECTURE.md) for the isolation contract,
the brand layer, and how to add or delete a game.

## Development

```bash
node --test tests/*.js
node scripts/sync-site-chrome.js --check
node scripts/sync-hub.js --check
node scripts/sync-game-manifests.js --check
node scripts/check-brand-contrast.js
```

The hub cards and each game's `manifest.json` are generated from
`games/index.json`. After changing the registry, run `sync-hub.js` and
`sync-game-manifests.js` without `--check`.

Copyright (c) 2022-2026 COSY Languages. All rights reserved.
