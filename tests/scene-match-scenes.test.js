const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

const ROOT = path.join(__dirname, '..');
const SCENES_DIR = path.join(ROOT, 'data', 'scenes');
const INDEX_HTML = fs.readFileSync(path.join(ROOT, 'scene-match', 'index.html'), 'utf8');
const GAME_JS = fs.readFileSync(path.join(ROOT, 'scene-match', 'game.js'), 'utf8');

const sceneFiles = fs.readdirSync(SCENES_DIR).filter(f => f.endsWith('.js')).sort();

function loadScenes() {
  const sandbox = { window: {} };
  sandbox.window = sandbox;
  vm.createContext(sandbox);
  for (const file of sceneFiles) {
    vm.runInContext(fs.readFileSync(path.join(SCENES_DIR, file), 'utf8'), sandbox);
  }
  return sandbox.COSY_SCENE_DATA;
}

test('scene-match loads every scene file', () => {
  const loaded = [...INDEX_HTML.matchAll(/\.\.\/data\/scenes\/([A-Za-z0-9_]+)\.js/g)].map(m => m[1] + '.js');
  assert.deepEqual(
    [...new Set(loaded)].sort(),
    sceneFiles,
    'scene-match/index.html must load every file in data/scenes/'
  );
});

test('every scene door points at a scene that is actually loaded', () => {
  const scenes = loadScenes();
  const ids = new Set(Object.keys(scenes));
  const missing = [];
  for (const [id, scene] of Object.entries(scenes)) {
    for (const door of scene.doors || []) {
      if (door.targetSceneId && !ids.has(door.targetSceneId)) {
        missing.push(`${id} -> ${door.targetSceneId}`);
      }
    }
  }
  assert.deepEqual(missing, [], 'doors must not target unloaded scenes');
});

test('every loaded scene is playable and has an English title', () => {
  const scenes = loadScenes();
  for (const [id, scene] of Object.entries(scenes)) {
    assert.ok(scene.title && scene.title.en, `${id} is missing an English title`);
    if (!scene.type) {
      assert.ok(
        Array.isArray(scene.hotspots) && scene.hotspots.length > 0,
        `${id} is a playable scene but has no hotspots`
      );
    }
  }
});

test('every scene has a title, door label and hotspot word for every menu language', () => {
  const menuLanguages = [...GAME_JS.matchAll(/code: '([a-z]{2})'/g)].map(m => m[1]);
  assert.ok(menuLanguages.length > 0, 'scene-match should declare its menu languages');

  const scenes = loadScenes();
  for (const [id, scene] of Object.entries(scenes)) {
    for (const lang of menuLanguages) {
      assert.ok(scene.title && scene.title[lang], `${id} title missing '${lang}'`);
      for (const door of scene.doors || []) {
        assert.ok(door.labels && door.labels[lang], `${id} door -> ${door.targetSceneId} label missing '${lang}'`);
      }
      for (const hotspot of scene.hotspots || []) {
        assert.ok(hotspot.words && hotspot.words[lang], `${id} hotspot '${hotspot.id}' word missing '${lang}'`);
      }
    }
  }
});
