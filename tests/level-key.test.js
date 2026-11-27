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
