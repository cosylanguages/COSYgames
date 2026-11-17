# COSYgames

COSYgames is an open-source suite of 20 interactive, standalone language-learning games designed for communicative fluency, vocabulary practice, speaking drills, and classroom activities across multiple CEFR levels without requiring account registration or setup.

- **Live Site:** [https://cosylanguages.github.io/COSYgames/](https://cosylanguages.github.io/COSYgames/)
- **Main Site:** [https://cosylanguages.github.io/COSYlanguages/](https://cosylanguages.github.io/COSYlanguages/)

## Native Apps (Android, iOS, Windows/macOS/Linux)

The same client-side code is wrapped as native apps with no fork of the web app. A single
generated bundle, `native/www`, feeds both shells:

- **Mobile** — Capacitor (`native/capacitor`) for Android and iOS, app id
  `io.github.cosylanguages.cosygames`.
- **Desktop** — Electron + electron-builder (`native/electron`) for Windows, macOS, and
  Linux.

```bash
npm run app:build     # build native/www (git-ignored)
npm run app:sources   # regenerate icon/splash masters
```

See [`docs/NATIVE_APPS.md`](docs/NATIVE_APPS.md) for the full build, sync, and CI workflow.

Copyright (c) 2022-2026 COSY Languages. All rights reserved.
