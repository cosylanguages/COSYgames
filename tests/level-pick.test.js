const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

function createSandbox() {
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
    return sandbox;
}

test('COSYLoader.pickByLevel - unit tests', async (t) => {
    const sandbox = createSandbox();
    const pickByLevel = sandbox.window.COSYLoader.pickByLevel.bind(sandbox.window.COSYLoader);

    await t.test('a. exact level returned when enough items; widened false', () => {
        const items = [
            { text: '1', level: 'intermediate' },
            { text: '2', level: 'intermediate' },
            { text: '3', level: 'intermediate' },
            { text: '4', level: 'intermediate' },
            { text: '5', level: 'intermediate' }
        ];
        const res = pickByLevel(items, 'Intermediate (B1)', { min: 5 });
        assert.strictEqual(res.items.length, 5);
        assert.strictEqual(res.widened, false);
        assert.strictEqual(res.exactCount, 5);
        assert.strictEqual(res.limited, false);
        assert.deepStrictEqual(Array.from(res.usedLevels), ['intermediate']);
    });

    await t.test('b. widening order for target intermediate with min 8 and few items', () => {
        const items = [
            { text: 'int1', level: 'intermediate' },
            { text: 'elem1', level: 'elementary' },
            { text: 'upper1', level: 'upper_intermediate' },
            { text: 'adv1', level: 'advanced' },
            { text: 'start1', level: 'starter' },
            { text: 'prof1', level: 'proficiency' }
        ];
        const res = pickByLevel(items, 'Intermediate (B1)', { min: 8 });
        // Target: intermediate.
        // d=1: lower (elementary), upper (upper_intermediate)
        // d=2: lower (starter), upper (advanced)
        // d=3: upper (proficiency)
        assert.deepStrictEqual(Array.from(res.usedLevels), [
            'intermediate',
            'elementary',
            'upper_intermediate',
            'starter',
            'advanced',
            'proficiency'
        ]);
        assert.strictEqual(res.widened, true);
        assert.strictEqual(res.exactCount, 1);
        assert.strictEqual(res.limited, true);
    });

    await t.test('c. target with zero items (proficiency) uses advanced first', () => {
        const items = [
            { text: 'adv1', level: 'advanced' },
            { text: 'upper1', level: 'upper_intermediate' }
        ];
        const res = pickByLevel(items, 'Proficiency (C2)', { min: 5 });
        assert.strictEqual(res.exactCount, 0);
        assert.strictEqual(res.usedLevels[0], 'proficiency');
        assert.strictEqual(res.usedLevels[1], 'advanced');
        assert.strictEqual(res.widened, true);
        assert.strictEqual(res.limited, true);
    });

    await t.test('d. items without any level field are returned unchanged, filtered false', () => {
        const items = ['topic1', 'topic2', 'topic3'];
        const res = pickByLevel(items, 'Intermediate (B1)', { min: 5 });
        assert.deepStrictEqual(Array.from(res.items), items);
        assert.strictEqual(res.filtered, false);
        assert.strictEqual(res.exactCount, 0);
        assert.strictEqual(res.widened, false);
        assert.strictEqual(res.limited, false);
        assert.deepStrictEqual(Array.from(res.usedLevels), []);
    });

    await t.test('e. mixed arrays: unleveled items are dropped when leveled ones exist', () => {
        const items = [
            'plain string',
            { text: 'leveled item', level: 'starter' },
            { text: 'no level field' }
        ];
        const res = pickByLevel(items, 'Starter (A1)', { min: 5 });
        assert.strictEqual(res.filtered, true);
        assert.strictEqual(res.items.length, 1);
        assert.strictEqual(res.items[0].text, 'leveled item');
    });

    await t.test('f. limited true when exactCount < 3, false otherwise', () => {
        const items2 = [
            { text: '1', level: 'starter' },
            { text: '2', level: 'starter' }
        ];
        const res2 = pickByLevel(items2, 'Starter (A1)', { min: 5 });
        assert.strictEqual(res2.limited, true);

        const items3 = [
            { text: '1', level: 'starter' },
            { text: '2', level: 'starter' },
            { text: '3', level: 'starter' }
        ];
        const res3 = pickByLevel(items3, 'Starter (A1)', { min: 5 });
        assert.strictEqual(res3.limited, false);
    });

    await t.test('g. input array is not mutated', () => {
        const original = [
            { text: '1', level: 'starter' },
            { text: '2', level: 'elementary' }
        ];
        const copy = JSON.parse(JSON.stringify(original));
        pickByLevel(original, 'Starter (A1)', { min: 5 });
        assert.deepStrictEqual(original, copy);
    });
});

test('COSYLoader.pickByLevel - data-driven tests for four games across all learning languages', (t) => {
    const sandbox = createSandbox();
    const pickByLevel = sandbox.window.COSYLoader.pickByLevel.bind(sandbox.window.COSYLoader);

    const gamesIndex = JSON.parse(fs.readFileSync(path.join(__dirname, '../games/index.json'), 'utf8'));
    const gamesConfig = [
        { id: 'fluency-flow', key: 'fluency', dataFile: 'fluency.js', rounds: 10 },
        { id: 'opinion-arena', key: 'opinions', dataFile: 'opinions.js', rounds: 5 },
        { id: 'identity-mystery', key: 'identity', dataFile: 'identity.js', rounds: 5 },
        { id: 'battle-of-wits', key: 'battle', dataFile: 'battle.js', rounds: 3 }
    ];

    const levelKeys = ['starter', 'elementary', 'intermediate', 'upper_intermediate', 'advanced', 'proficiency'];

    for (const cfg of gamesConfig) {
        const entry = gamesIndex.find(g => g.id === cfg.id);
        assert.ok(entry, `Game ${cfg.id} found in games/index.json`);

        for (const lang of entry.learning_languages) {
            const dataSandbox = { window: {} };
            vm.createContext(dataSandbox);

            const specificPath = path.join(__dirname, `../data/${lang}/${cfg.dataFile}`);
            const monolithicPath = path.join(__dirname, `../data/${lang}/game_data.js`);

            if (fs.existsSync(specificPath)) {
                vm.runInContext(fs.readFileSync(specificPath, 'utf8'), dataSandbox);
            }
            if (fs.existsSync(monolithicPath)) {
                vm.runInContext(fs.readFileSync(monolithicPath, 'utf8'), dataSandbox);
            }

            assert.ok(dataSandbox.window.gameData && dataSandbox.window.gameData[lang], `gameData[${lang}] loaded`);
            const rawData = dataSandbox.window.gameData[lang][cfg.key] || [];

            for (const lKey of levelKeys) {
                const res = pickByLevel(rawData, lKey, { min: cfg.rounds });
                const expectedMin = Math.min(cfg.rounds, rawData.length);
                assert.ok(
                    res.items.length >= expectedMin,
                    `Game ${cfg.id} [${lang}] level ${lKey}: picked ${res.items.length} items, expected >= ${expectedMin} (total available: ${rawData.length})`
                );
            }
        }
    }
});

test('Check pickByLevel reference isolated to the four target games', (t) => {
    const gamesDir = path.join(__dirname, '..');
    const allowedFiles = [
        path.normalize('fluency-flow/game.js'),
        path.normalize('opinion-arena/game.js'),
        path.normalize('identity-mystery/game.js'),
        path.normalize('battle-of-wits/game.js')
    ];

    function scanDir(dir) {
        const entries = fs.readdirSync(dir, { withFileTypes: true });
        for (const entry of entries) {
            const fullPath = path.join(dir, entry.name);
            if (entry.isDirectory()) {
                if (entry.name !== 'node_modules' && entry.name !== '.git') {
                    scanDir(fullPath);
                }
            } else if (entry.isFile() && entry.name === 'game.js') {
                const relPath = path.relative(gamesDir, fullPath);
                const content = fs.readFileSync(fullPath, 'utf8');
                if (content.includes('pickByLevel')) {
                    const isAllowed = allowedFiles.some(af => relPath.endsWith(af));
                    assert.ok(isAllowed, `Unexpected pickByLevel usage in file: ${relPath}`);
                }
            }
        }
    }

    scanDir(gamesDir);
});
