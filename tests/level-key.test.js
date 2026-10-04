const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

test('PART C a: COSYLoader.getLevelKey vm sandbox unit test', (t) => {
    const sandbox = {
        window: {
            location: { search: '' }
        },
        document: {
            addEventListener: () => {},
            readyState: 'complete'
        },
        console: console,
        setTimeout: setTimeout,
        clearTimeout: clearTimeout,
        URLSearchParams: URLSearchParams
    };
    sandbox.window.document = sandbox.document;
    sandbox.window.location = sandbox.window.location;
    vm.createContext(sandbox);

    const loaderCode = fs.readFileSync(path.join(__dirname, '../_engine/loader.js'), 'utf8');
    vm.runInContext(loaderCode, sandbox);

    const getLevelKey = sandbox.window.COSYLoader.getLevelKey;
    assert.strictEqual(typeof getLevelKey, 'function', 'getLevelKey should be exported on window.COSYLoader');

    // 1. Six select labels
    assert.strictEqual(getLevelKey('Starter (A1)'), 'starter');
    assert.strictEqual(getLevelKey('Primary (A2)'), 'elementary');
    assert.strictEqual(getLevelKey('Intermediate (B1)'), 'intermediate');
    assert.strictEqual(getLevelKey('Upper (B2)'), 'upper_intermediate');
    assert.strictEqual(getLevelKey('Advanced (C1)'), 'advanced');
    assert.strictEqual(getLevelKey('Proficiency (C2)'), 'proficiency');

    // 2. CEFR codes A0..C2 (lower and upper case)
    const cefrExpected = {
        'a0': 'starter', 'A0': 'starter',
        'a1': 'starter', 'A1': 'starter',
        'a2': 'elementary', 'A2': 'elementary',
        'b1': 'intermediate', 'B1': 'intermediate',
        'b2': 'upper_intermediate', 'B2': 'upper_intermediate',
        'c1': 'advanced', 'C1': 'advanced',
        'c2': 'proficiency', 'C2': 'proficiency'
    };
    for (const [code, expected] of Object.entries(cefrExpected)) {
        assert.strictEqual(getLevelKey(code), expected, `getLevelKey('${code}') should return '${expected}'`);
    }

    // 3. Legacy keys
    const legacyKeys = ['starter', 'elementary', 'intermediate', 'upper_intermediate', 'advanced', 'proficiency'];
    for (const key of legacyKeys) {
        assert.strictEqual(getLevelKey(key), key, `getLevelKey('${key}') should return '${key}'`);
    }

    // 4. Empty string and unknown string -> 'starter'
    assert.strictEqual(getLevelKey(''), 'starter');
    assert.strictEqual(getLevelKey('nonsense'), 'starter');
    assert.strictEqual(getLevelKey(null), 'starter');
    assert.strictEqual(getLevelKey(undefined), 'starter');
});

test('PART C b: Data check for action-hero learning_languages and legacy keys', (t) => {
    const gamesIndex = JSON.parse(fs.readFileSync(path.join(__dirname, '../games/index.json'), 'utf8'));
    const actionHeroEntry = gamesIndex.find(g => g.id === 'action-hero');
    assert.ok(actionHeroEntry, 'action-hero entry found in games/index.json');
    const languages = actionHeroEntry.learning_languages;
    const legacyKeys = ['starter', 'elementary', 'intermediate', 'upper_intermediate', 'advanced', 'proficiency'];

    for (const code of languages) {
        const sandbox = { window: {} };
        vm.createContext(sandbox);

        // Load data/<code>/action.js if exists, else fallback to game_data.js
        const actionFilePath = path.join(__dirname, `../data/${code}/action.js`);
        const gameDataFilePath = path.join(__dirname, `../data/${code}/game_data.js`);

        if (fs.existsSync(actionFilePath)) {
            vm.runInContext(fs.readFileSync(actionFilePath, 'utf8'), sandbox);
        }
        if (fs.existsSync(gameDataFilePath)) {
            vm.runInContext(fs.readFileSync(gameDataFilePath, 'utf8'), sandbox);
        }

        assert.ok(sandbox.window.gameData && sandbox.window.gameData[code], `gameData[${code}] loaded`);
        const actionData = sandbox.window.gameData[code].action;
        assert.ok(actionData, `actionData for ${code} exists`);

        for (const key of legacyKeys) {
            const list = actionData[key];
            assert.ok(Array.isArray(list), `window.gameData[${code}].action[${key}] should be an array`);
            assert.ok(list.length >= 5, `window.gameData[${code}].action[${key}] should have at least 5 items, found ${list.length}`);
        }
    }
});

test('PART C c: Code structure check for action-hero/game.js', (t) => {
    const gameJsPath = path.join(__dirname, '../action-hero/game.js');
    const content = fs.readFileSync(gameJsPath, 'utf8');

    assert.strictEqual(content.includes("level === 'starter'"), false, "action-hero/game.js must no longer contain \"level === 'starter'\"");
    assert.ok(content.includes('getLevelKey'), "action-hero/game.js must contain 'getLevelKey'");
});
