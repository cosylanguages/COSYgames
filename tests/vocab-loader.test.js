const test = require('node:test');
const assert = require('node:assert/strict');
const vm = require('node:vm');
const fs = require('node:fs');
const path = require('node:path');

const vocabLoaderCode = fs.readFileSync(path.join(__dirname, '../shared/js/vocab-loader.js'), 'utf8');

function createSandbox(fetchStub) {
    const sandbox = {
        console,
        setTimeout,
        clearTimeout,
        AbortController,
        fetch: fetchStub || (() => Promise.reject(new Error('no fetch'))),
        window: {}
    };
    sandbox.window.window = sandbox.window;
    vm.createContext(sandbox);
    vm.runInContext(vocabLoaderCode, sandbox);
    return sandbox;
}

test('a. ❓ and missing emoji are dropped when needEmoji is true; adapted entries have exact shape', async () => {
    const rawData = [
        { id: '1', word: 'apple', emoji: '🍎', level: 'A1', form: 'noun', theme: 'food', domain: 'gen', tags: ['a'] },
        { id: '2', word: 'banana', emoji: '🍌', level: 'A1', form: 'noun', theme: 'food' },
        { id: '3', word: 'cherry', emoji: '🍒', level: 'A1', form: 'noun', theme: 'food' },
        { id: '4', word: 'date', emoji: '🌴', level: 'A1', form: 'noun', theme: 'food' },
        { id: '5', word: 'question', emoji: '❓', level: 'A1', form: 'noun', theme: 'gen' },
        { id: '6', word: 'book', level: 'A1', form: 'noun', theme: 'gen' }
    ];

    const sandbox = createSandbox(async (url) => ({
        ok: true,
        json: async () => rawData
    }));

    const res = await sandbox.window.COSYVocab.ensure('en', 'A1', { needEmoji: true, min: 1 });
    assert.strictEqual(res.ok, true);
    assert.strictEqual(res.count, 4);
    const pool = sandbox.window.vocabularyData.en;
    assert.strictEqual(pool.length, 4);
    assert.deepStrictEqual(JSON.parse(JSON.stringify(pool[0])), {
        id: '1',
        word: 'apple',
        emoji: '🍎',
        level: 'A1',
        form: 'noun',
        theme: 'food',
        definitions: []
    });
});

test('b. Requested B1 with data only at A1/A2 -> usedLevels includes A2/A1, widened === true; requested A1 with enough A1 entries -> widened === false', async () => {
    const rawData = [
        { id: '1', word: 'dog', emoji: '🐶', level: 'A2', form: 'noun' },
        { id: '2', word: 'cat', emoji: '🐱', level: 'A2', form: 'noun' },
        { id: '3', word: 'bird', emoji: '🐦', level: 'A2', form: 'noun' },
        { id: '4', word: 'fish', emoji: '🐟', level: 'A1', form: 'noun' }
    ];

    const sandbox = createSandbox(async () => ({
        ok: true,
        json: async () => rawData
    }));

    const resWidened = await sandbox.window.COSYVocab.ensure('fr', 'B1', { needEmoji: true, min: 4 });
    assert.strictEqual(resWidened.ok, true);
    assert.strictEqual(resWidened.widened, true);
    assert.deepStrictEqual(Array.from(resWidened.usedLevels), ['A2', 'A1']);

    const sandbox2 = createSandbox(async () => ({
        ok: true,
        json: async () => Array(25).fill(null).map((_, i) => ({ id: `${i}`, word: `w${i}`, emoji: '⭐', level: 'A1', form: 'noun' }))
    }));

    const resNotWidened = await sandbox2.window.COSYVocab.ensure('fr', 'A1', { needEmoji: true, min: 24 });
    assert.strictEqual(resNotWidened.ok, true);
    assert.strictEqual(resNotWidened.widened, false);
    assert.deepStrictEqual(Array.from(resNotWidened.usedLevels), ['A1']);
});

test('c. Fewer than 4 qualifying entries overall -> ok:true, count < 4 and empty pool', async () => {
    const rawData = [
        { id: '1', word: 'dog', emoji: '🐶', level: 'A1', form: 'noun' },
        { id: '2', word: 'cat', emoji: '🐱', level: 'A1', form: 'noun' }
    ];

    const sandbox = createSandbox(async () => ({
        ok: true,
        json: async () => rawData
    }));

    const res = await sandbox.window.COSYVocab.ensure('de', 'A1', { needEmoji: true, min: 24 });
    assert.strictEqual(res.ok, true);
    assert.strictEqual(res.count, 2);
    assert.strictEqual(sandbox.window.vocabularyData, undefined);
});

test('d. A failing fetch -> resolves { ok:false, source:"unavailable" } without throwing, and window.vocabularyData is not created/changed', async () => {
    const sandbox = createSandbox(async () => ({
        ok: false,
        status: 404
    }));

    const res = await sandbox.window.COSYVocab.ensure('es', 'A1', { needEmoji: true });
    assert.strictEqual(res.ok, false);
    assert.strictEqual(res.source, 'unavailable');
    assert.strictEqual(sandbox.window.vocabularyData, undefined);
});

test('e. A second ensure() for the same language does not call fetch again', async () => {
    let fetchCount = 0;
    const rawData = Array(30).fill(null).map((_, i) => ({ id: `${i}`, word: `w${i}`, emoji: '⭐', level: 'A1', form: 'noun' }));

    const sandbox = createSandbox(async () => {
        fetchCount++;
        return {
            ok: true,
            json: async () => rawData
        };
    });

    await sandbox.window.COSYVocab.ensure('it', 'A1', { needEmoji: true });
    assert.strictEqual(fetchCount, 1);

    await sandbox.window.COSYVocab.ensure('it', 'A2', { needEmoji: true });
    assert.strictEqual(fetchCount, 1);
});

test('f. levelCode("Starter (A1)") === "A1", levelCode("A2") === "A2"', () => {
    const sandbox = createSandbox();
    assert.strictEqual(sandbox.window.COSYVocab.levelCode('Starter (A1)'), 'A1');
    assert.strictEqual(sandbox.window.COSYVocab.levelCode('A2'), 'A2');
    assert.strictEqual(sandbox.window.COSYVocab.levelCode('Proficiency (C2)'), 'C2');
});

test('g. emoji-odyssey/game.js references COSYVocab.ensure and no other game.js does (opt-in guarantee)', () => {
    const gamesDir = path.join(__dirname, '..');
    const files = fs.readdirSync(gamesDir, { recursive: true });
    const gameJsFiles = files.filter(f => f.endsWith('game.js'));

    let emojiOdysseyFound = false;
    const otherGamesFound = [];

    for (const relFile of gameJsFiles) {
        const fullPath = path.join(gamesDir, relFile);
        const content = fs.readFileSync(fullPath, 'utf8');
        if (content.includes('COSYVocab.ensure')) {
            if (relFile.includes('emoji-odyssey')) {
                emojiOdysseyFound = true;
            } else {
                otherGamesFound.push(relFile);
            }
        }
    }

    assert.strictEqual(emojiOdysseyFound, true, 'emoji-odyssey/game.js should reference COSYVocab.ensure');
    assert.deepStrictEqual(otherGamesFound, [], `Other games should NOT reference COSYVocab.ensure: ${otherGamesFound.join(', ')}`);
});
