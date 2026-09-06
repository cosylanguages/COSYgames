# Scene Match Game Engine & Scene Creator Tools 🖼️

Scene Match is a visual vocabulary learning game engine that renders interactive 2D spatial environments, market stalls, and navigation map hubs across CEFR levels A1–C2.

---

## 🛠️ Internal Developer Tools

### Hotspot Editor Tool (`tools/hotspot-editor.html`)

An internal build-time web tool for content creators and developers to visually create or edit Scene Match dataset files (`games/data/scenes/*.js`).

#### Accessing the Editor:
- **Location**: [`tools/hotspot-editor.html`](tools/hotspot-editor.html)
- **Usage**: Open `games/scene_match/tools/hotspot-editor.html` directly in a browser (or via local web server at `http://localhost:8080/games/scene_match/tools/hotspot-editor.html`).

#### Features:
1. **Image Loading**: Upload a local background image (`.png`, `.jpg`, `.webp`) or supply a path/URL to an image artifact.
2. **Interactive Bounding Box Drawing**: Click and drag on the image canvas to draw rectangular hotspot bounds.
3. **Hotspot Inspector**: Assign `id`, coordinates (`x`, `y`, `width`, `height`, `labelX`, `labelY`), and multilingual translations (`en`, `fr`, `it`, `ru`, `el`, `es`, `de`).
4. **Live Code Generator**: Generates formatted JavaScript conforming to `window.COSY_SCENE_DATA['scene_id']` schema. Copy code directly with the "📋 Copy JS" button and save into `games/data/scenes/<scene_id>.js`.

*Note: This editor is an internal developer tool and is not linked from player-facing navigation.*

---

## 📐 Scene Data Schema (`games/data/scenes/`)

Scenes are IIFE JavaScript files attached to `window.COSY_SCENE_DATA`:

```javascript
(function() {
    'use strict';

    window.COSY_SCENE_DATA = window.COSY_SCENE_DATA || {};
    window.COSY_SCENE_DATA['example_scene'] = {
        id: 'example_scene',
        type: 'room', // or 'hub'
        level: 'A1',
        imageUrl: 'images/scenes/example_scene.png',
        title: {
            en: "Example Scene Title",
            fr: "Titre d'exemple"
        },
        viewBox: "0 0 800 500",
        doors: [
            {
                targetSceneId: "target_scene",
                x: 15, y: 140, width: 35, height: 230, labelX: 32, labelY: 125,
                labels: { en: "🚪 Target Scene →" }
            }
        ],
        svgBackground: `<!-- Vector SVG artwork / fallback elements -->`,
        hotspots: [
            {
                id: "object_id",
                x: 100, y: 150, width: 120, height: 80, labelX: 160, labelY: 140,
                words: { en: "English Word", fr: "Mot en français" }
            }
        ]
    };
})();
```
