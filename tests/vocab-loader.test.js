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

test('g. Opt-in guarantee: exactly emoji-odyssey, object-quest, hot-seat, identity-mystery, last-letter and word-linker game.js reference COSYVocab', () => {
    const gamesDir = path.join(__dirname, '..');
    const files = fs.readdirSync(gamesDir, { recursive: true });
    const gameJsFiles = files.filter(f => f.endsWith('game.js'));

    const expectedGames = ['emoji-odyssey', 'hot-seat', 'identity-mystery', 'last-letter', 'object-quest', 'word-linker'];
    const foundGames = [];

    for (const relFile of gameJsFiles) {
        const fullPath = path.join(gamesDir, relFile);
        const content = fs.readFileSync(fullPath, 'utf8');
        if (content.includes('COSYVocab.')) {
            const folder = relFile.split(path.sep)[0];
            if (!foundGames.includes(folder)) {
                foundGames.push(folder);
            }
        }
    }

    foundGames.sort();
    expectedGames.sort();

    assert.deepStrictEqual(foundGames, expectedGames, `COSYVocab should only be referenced in ${expectedGames.join(', ')}, but found in: ${foundGames.join(', ')}`);
});

test('PART C(b): COSYVocab.joinArticle tests', () => {
    const sandbox = createSandbox();
    const joinArticle = sandbox.window.COSYVocab.joinArticle;

    assert.strictEqual(joinArticle('le', 'professeur'), 'le professeur');
    assert.strictEqual(joinArticle("l'", 'artiste'), "l'artiste");
    assert.strictEqual(joinArticle('l’', 'élève'), 'l’élève');
    assert.strictEqual(joinArticle('', 'x'), 'x');
    assert.strictEqual(joinArticle(undefined, 'x'), 'x');
});

test('PART C(d): hot-seat/game.js maps definition -> hs_prompt_define', () => {
    const hotSeatCode = fs.readFileSync(path.join(__dirname, '../hot-seat/game.js'), 'utf8');
    assert.ok(hotSeatCode.includes('hs_prompt_define'), 'hot-seat/game.js must contain hs_prompt_define');
    assert.strictEqual(hotSeatCode.includes('hs_prompt_${type}'), false, 'hot-seat/game.js must not contain hs_prompt_${type}');
});

test('PART C(a): ensureFull fileMatch option filters basenames while preserving level ordering and default behavior', async () => {
    const fetchedUrls = [];
    const indexMap = {
        'id1': 'a2/jobs.json',
        'id2': 'a2/food.json',
        'id3': 'a0_a1/jobs.json',
        'id4': 'a0_a1/nationalities.json'
    };

    const sandbox = createSandbox(async (url) => {
        fetchedUrls.push(url);
        if (url.endsWith('index.json')) {
            return { ok: true, json: async () => indexMap };
        }
        return {
            ok: true,
            json: async () => [
                { id: url, word: 'test', level: url.includes('a2') ? 'A2' : 'A1', form: 'noun' }
            ]
        };
    });

    const resFiltered = await sandbox.window.COSYVocab.ensureFull('fr', 'A2', { fileMatch: ['jobs'], min: 2 });
    assert.strictEqual(resFiltered.ok, true);

    const themeFetches = fetchedUrls.filter(u => !u.endsWith('index.json'));
    assert.strictEqual(themeFetches.length, 2);
    assert.ok(themeFetches[0].includes('a2/jobs.json'), 'Requested level A2 folder checked first');
    assert.ok(themeFetches[1].includes('a0_a1/jobs.json'), 'Lower level A0_A1 folder checked second');
    assert.ok(!themeFetches.some(u => u.includes('food.json') || u.includes('nationalities.json')), 'Non-matching files were not fetched');

    // Absent fileMatch scenario
    const fetchedUrls2 = [];
    const sandbox2 = createSandbox(async (url) => {
        fetchedUrls2.push(url);
        if (url.endsWith('index.json')) return { ok: true, json: async () => indexMap };
        return { ok: true, json: async () => [{ id: url, word: 'w', level: 'A1', form: 'noun' }] };
    });

    await sandbox2.window.COSYVocab.ensureFull('fr', 'A2', { min: 4 });
    const themeFetches2 = fetchedUrls2.filter(u => !u.endsWith('index.json'));
    assert.strictEqual(themeFetches2.length, 4, 'Without fileMatch, all candidate theme files are available');
});

test('PART A: isConcreteObjectTheme - unit tests', () => {
    const sandbox = createSandbox();
    const fn = sandbox.window.COSYVocab.isConcreteObjectTheme;

    // True cases
    const trueThemes = ['food_drink', 'house_furniture', 'clothes', 'clothing', 'animals', 'body_health', 'objects', 'technology', 'nature', 'school'];
    for (const t of trueThemes) {
        assert.strictEqual(fn(t), true, `Expected theme "${t}" to be concrete`);
    }

    // False cases
    const falseThemes = ['nationalities', 'family', 'time', 'communication', 'jobs', 'emotions', 'politics', 'general', 'society', '', undefined, null];
    for (const t of falseThemes) {
        assert.strictEqual(fn(t), false, `Expected theme "${t}" to be non-concrete`);
    }

    // Blocklist wins over allowlist
    assert.strictEqual(fn('family_food'), false, 'Expected blocklist to win for family_food');
    assert.strictEqual(fn('food_jobs'), false, 'Expected blocklist to win for food_jobs');
});

test('PART B: i18n keys hs_prompt_plural/define/sentence exist across all 7 languages and contain {word}', () => {
    const i18nCode = fs.readFileSync(path.join(__dirname, '../shared/js/i18n.js'), 'utf8');
    const sandbox = createSandbox();
    vm.runInContext(i18nCode, sandbox);

    const languages = ['en', 'fr', 'es', 'de', 'it', 'ru', 'el'];
    const promptKeys = ['hs_prompt_plural', 'hs_prompt_define', 'hs_prompt_sentence'];

    for (const lang of languages) {
        for (const key of promptKeys) {
            const text = sandbox.window.tOr(key, '', lang);
            assert.notStrictEqual(text, '', `Expected i18n key ${key} to exist in lang ${lang}`);
            assert.ok(text.includes('{word}'), `Expected translation for ${key} in ${lang} to contain {word}`);
        }
    }
});

test('PART B: hot-seat/game.js does not synthesize word + "s" for non-fallback entries', () => {
    const hotSeatCode = fs.readFileSync(path.join(__dirname, '../hot-seat/game.js'), 'utf8');
    // We check that the code string `+ 's'` or `+ "s"` or `+ 'S'` does not appear in plural generation logic
    // The test decides by inspecting the source code of hot-seat/game.js and verifying that item.plural is used directly without fallback string concatenation.
    assert.strictEqual(hotSeatCode.includes("item.word + 's'"), false, "hot-seat/game.js should not synthesize item.word + 's'");
    assert.strictEqual(hotSeatCode.includes('item.word + "s"'), false, 'hot-seat/game.js should not synthesize item.word + "s"');
});

test('ensureFull - a. fetches index.json once and no more than maxFiles theme files; a second call re-uses cache', async () => {
    const fetchedUrls = [];
    const indexMap = {
        'id1': 'a0_a1/f1.json',
        'id2': 'a0_a1/f2.json'
    };

    const sandbox = createSandbox(async (url) => {
        fetchedUrls.push(url);
        if (url.endsWith('index.json')) {
            return { ok: true, json: async () => indexMap };
        }
        return {
            ok: true,
            json: async () => [
                { id: url.split('/').pop(), word: 'w1', level: 'A1', form: 'noun', emoji: '🍎' }
            ]
        };
    });

    const res1 = await sandbox.window.COSYVocab.ensureFull('en', 'A1', { maxFiles: 2, min: 10 });
    assert.strictEqual(res1.ok, true);
    assert.strictEqual(res1.files, 2);

    const initialFetchCount = fetchedUrls.length;
    assert.strictEqual(initialFetchCount, 3); // 1 index.json + 2 theme files

    // Second call for same language re-uses cached index and file promises
    await sandbox.window.COSYVocab.ensureFull('en', 'A1', { maxFiles: 2, min: 10 });
    assert.strictEqual(fetchedUrls.length, initialFetchCount, 'No new fetches should occur for already cached URLs');
});

test('ensureFull - b. adapted entry shape with definitions, examples, article, gender, plural, transcription and emoji filtering', async () => {
    const indexMap = {
        'id1': 'a0_a1/f1.json'
    };

    const rawFile = [
        {
            id: 'fr:pomme:noun',
            word: 'pomme',
            level: 'A1',
            form: 'noun',
            theme: 'food',
            emoji: '🍎',
            article: 'la',
            gender: 'f',
            plural_form: 'pommes',
            transcription: 'pɔm',
            definitions: ['une pomme est un fruit'],
            examples: ['J\'aime les pommes.']
        },
        {
            id: 'fr:question:noun',
            word: 'question',
            level: 'A1',
            form: 'noun',
            theme: 'general',
            emoji: '❓',
            definitions: []
        }
    ];

    const sandbox = createSandbox(async (url) => {
        if (url.endsWith('index.json')) {
            return { ok: true, json: async () => indexMap };
        }
        return { ok: true, json: async () => rawFile };
    });

    const res = await sandbox.window.COSYVocab.ensureFull('fr', 'A1', { needEmoji: true, min: 1 });
    assert.strictEqual(res.ok, true);
    assert.strictEqual(res.count, 1);

    const pool = sandbox.window.vocabularyData.fr;
    assert.strictEqual(pool.length, 1);
    assert.deepStrictEqual(JSON.parse(JSON.stringify(pool[0])), {
        id: 'fr:pomme:noun',
        word: 'pomme',
        level: 'A1',
        form: 'noun',
        theme: 'food',
        emoji: '🍎',
        article: 'la',
        gender: 'f',
        plural: 'pommes',
        transcription: 'pɔm',
        definitions: [
            {
                text: 'une pomme est un fruit',
                examples: [{ text: 'J\'aime les pommes.' }]
            }
        ]
    });
});

test('ensureFull - c. level folder ordering: requested B1 with only a0_a1/a2 folders -> usedLevels [A2, A1], widened true; requested A1 -> widened false; A0 behaves like A1', async () => {
    const indexMap = {
        'id1': 'a0_a1/f1.json',
        'id2': 'a2/f2.json'
    };

    const sandbox = createSandbox(async (url) => {
        if (url.endsWith('index.json')) {
            return { ok: true, json: async () => indexMap };
        }
        if (url.includes('a2/f2.json')) {
            return {
                ok: true,
                json: async () => [{ id: '1', word: 'w1', level: 'A2', form: 'noun', emoji: '⭐' }]
            };
        }
        if (url.includes('a0_a1/f1.json')) {
            return {
                ok: true,
                json: async () => [{ id: '2', word: 'w2', level: 'A1', form: 'noun', emoji: '🌟' }]
            };
        }
        return { ok: false };
    });

    // Requested B1: tries b1 (absent), then a2, then a0_a1
    const resB1 = await sandbox.window.COSYVocab.ensureFull('de', 'B1', { needEmoji: true, min: 2 });
    assert.strictEqual(resB1.ok, true);
    assert.strictEqual(resB1.widened, true);
    assert.deepStrictEqual(Array.from(resB1.usedLevels), ['A2', 'A1']);

    // Requested A0: behaves like A1
    const resA0 = await sandbox.window.COSYVocab.ensureFull('de', 'A0', { needEmoji: true, min: 1 });
    assert.strictEqual(resA0.ok, true);
    assert.strictEqual(resA0.widened, false);
    assert.deepStrictEqual(Array.from(resA0.usedLevels), ['A1']);
});

test('ensureFull - d. needEmoji and forms filters drop non-qualifying entries', async () => {
    const indexMap = { 'id1': 'a0_a1/f1.json' };
    const rawFile = [
        { id: '1', word: 'run', level: 'A1', form: 'verb', emoji: '🏃' },
        { id: '2', word: 'cat', level: 'A1', form: 'noun', emoji: '🐱' },
        { id: '3', word: 'dog', level: 'A1', form: 'noun', emoji: '❓' }
    ];

    const sandbox = createSandbox(async (url) => {
        if (url.endsWith('index.json')) return { ok: true, json: async () => indexMap };
        return { ok: true, json: async () => rawFile };
    });

    const res = await sandbox.window.COSYVocab.ensureFull('en', 'A1', { needEmoji: true, forms: ['noun'], min: 1 });
    assert.strictEqual(res.ok, true);
    assert.strictEqual(res.count, 1);
    assert.strictEqual(sandbox.window.vocabularyData.en[0].word, 'cat');
});

test('ensureFull - e. index.json failure -> {ok:false, source:"unavailable"} without throwing and window.vocabularyData untouched; one failing theme file does not fail call', async () => {
    const sandboxFail = createSandbox(async () => ({ ok: false }));
    const resFail = await sandboxFail.window.COSYVocab.ensureFull('es', 'A1');
    assert.strictEqual(resFail.ok, false);
    assert.strictEqual(resFail.source, 'unavailable');
    assert.strictEqual(sandboxFail.window.vocabularyData, undefined);

    const indexMap = {
        'id1': 'a0_a1/good.json',
        'id2': 'a0_a1/bad.json'
    };

    const sandboxPartial = createSandbox(async (url) => {
        if (url.endsWith('index.json')) return { ok: true, json: async () => indexMap };
        if (url.includes('good.json')) return { ok: true, json: async () => [{ id: '1', word: 'sun', level: 'A1', form: 'noun' }] };
        return { ok: false, status: 404 };
    });

    const resPartial = await sandboxPartial.window.COSYVocab.ensureFull('es', 'A1', { min: 1 });
    assert.strictEqual(resPartial.ok, true);
    assert.strictEqual(resPartial.count, 1);
    assert.strictEqual(sandboxPartial.window.vocabularyData.es[0].word, 'sun');
});

test('PART D a: buildLinkPuzzles returns valid puzzles with distinct words, correct themes, no markup/vague themes, deterministic with seeded rng', async () => {
    const indexMap = {
        'id1': 'a0_a1/animals.json',
        'id2': 'a0_a1/food.json',
        'id3': 'a0_a1/vague.json'
    };

    const animalsFile = [
        { id: '1', word: 'dog', level: 'A1', form: 'noun', theme: 'animals' },
        { id: '2', word: 'cat', level: 'A1', form: 'noun', theme: 'animals' },
        { id: '3', word: 'bird', level: 'A1', form: 'noun', theme: 'animals' },
        { id: '4', word: 'fish', level: 'A1', form: 'noun', theme: 'animals' },
        { id: '5', word: 'lion', level: 'A1', form: 'noun', theme: 'animals' }
    ];

    const foodFile = [
        { id: '6', word: 'bread', level: 'A1', form: 'noun', theme: 'food_drink' },
        { id: '7', word: 'apple', level: 'A1', form: 'noun', theme: 'food_drink' },
        { id: '8', word: 'cheese', level: 'A1', form: 'noun', theme: 'food_drink' },
        { id: '9', word: 'milk', level: 'A1', form: 'noun', theme: 'food_drink' },
        { id: '10', word: 'bad<word>', level: 'A1', form: 'noun', theme: 'food_drink' },
        { id: '11', word: 'a sentence with spaces', level: 'A1', form: 'noun', theme: 'food_drink' }
    ];

    const vagueFile = [
        { id: '12', word: 'thing', level: 'A1', form: 'noun', theme: 'general' },
        { id: '13', word: 'stuff', level: 'A1', form: 'noun', theme: 'common_nouns' },
        { id: '14', word: 'word', level: 'A1', form: 'noun', theme: 'expressions' }
    ];

    function createSeededRng(seed) {
        return function() {
            seed = (seed * 9301 + 49297) % 233280;
            return seed / 233280;
        };
    }

    function makeSandbox() {
        return createSandbox(async (url) => {
            if (url.endsWith('index.json')) return { ok: true, json: async () => indexMap };
            if (url.includes('animals.json')) return { ok: true, json: async () => animalsFile };
            if (url.includes('food.json')) return { ok: true, json: async () => foodFile };
            if (url.includes('vague.json')) return { ok: true, json: async () => vagueFile };
            return { ok: false };
        });
    }

    const sb1 = makeSandbox();
    const rng1 = createSeededRng(42);
    const res1 = await sb1.window.COSYVocab.buildLinkPuzzles('en', 'A1', { count: 10, rng: rng1 });

    assert.strictEqual(res1.ok, true);
    assert.ok(res1.puzzles.length > 0);

    const seen4WordSets = new Set();
    for (const p of res1.puzzles) {
        assert.strictEqual(p.words.length, 4, 'Puzzle must have exactly 4 words');
        const set4 = new Set(p.words.map(w => w.toLowerCase()));
        assert.strictEqual(set4.size, 4, 'All 4 words in a puzzle must be distinct');

        for (const w of p.words) {
            assert.ok(!w.includes('<'), 'Forbidden markup characters excluded');
            assert.ok(!w.includes(' '), 'Multi-token words excluded');
            assert.notStrictEqual(w, 'thing');
            assert.notStrictEqual(w, 'stuff');
        }

        assert.notStrictEqual(p.theme, 'general');
        assert.notStrictEqual(p.theme, 'common_nouns');
        assert.notStrictEqual(p.theme, 'expressions');

        if (p.odd !== 'none') {
            assert.ok(p.words.includes(p.odd), 'Odd word must be one of the 4 words');
            assert.ok(p.oddTheme, 'Odd puzzle must specify oddTheme');
            assert.notStrictEqual(p.theme, p.oddTheme, 'Odd word theme must be different from puzzle theme');

            const animalsWords = animalsFile.map(x => x.word.toLowerCase());
            const foodWords = foodFile.map(x => x.word.toLowerCase());
            if (p.theme === 'animals') {
                assert.ok(!animalsWords.includes(p.odd.toLowerCase()), 'Odd word cannot belong to main theme animals');
            } else if (p.theme === 'food_drink') {
                assert.ok(!foodWords.includes(p.odd.toLowerCase()), 'Odd word cannot belong to main theme food_drink');
            }
        }

        const key = Array.from(set4).sort().join('|');
        assert.ok(!seen4WordSets.has(key), 'No duplicate 4-word sets');
        seen4WordSets.add(key);
    }

    const sb2 = makeSandbox();
    const rng2 = createSeededRng(42);
    const res2 = await sb2.window.COSYVocab.buildLinkPuzzles('en', 'A1', { count: 10, rng: rng2 });
    assert.deepStrictEqual(JSON.parse(JSON.stringify(res1.puzzles)), JSON.parse(JSON.stringify(res2.puzzles)), 'Same seed produces identical puzzles');
});

test('PART D b: Failure of ensureFull -> resolves { ok: false, puzzles: [] } without throwing', async () => {
    const sandbox = createSandbox(async () => ({ ok: false, status: 500 }));
    const res = await sandbox.window.COSYVocab.buildLinkPuzzles('es', 'A1');
    assert.strictEqual(res.ok, false);
    assert.strictEqual(res.puzzles.length, 0);
    assert.strictEqual(res.widened, false);
});

test('PART D c: Defensive filter drops entries containing <script> or markup characters in ensure, ensureFull and wordSet', async () => {
    const rawData = [
        { id: '1', word: 'apple', level: 'A1', form: 'noun', theme: 'food', definitions: ['<script>alert(1)</script>'] },
        { id: '2', word: 'banana', level: 'A1', form: 'noun', theme: 'food', definitions: ['a yellow fruit'] },
        { id: '3', word: 'cherry', level: 'A1', form: 'noun', theme: 'food', definitions: ['a red fruit'] },
        { id: '4', word: 'date', level: 'A1', form: 'noun', theme: 'food', definitions: ['a sweet fruit'] },
        { id: '5', word: 'elderberry', level: 'A1', form: 'noun', theme: 'food', definitions: ['a dark berry'] }
    ];

    const indexMap = { 'id1': 'a0_a1/food.json' };

    const sandbox = createSandbox(async (url) => {
        if (url.endsWith('search-index.json')) return { ok: true, json: async () => rawData };
        if (url.endsWith('index.json')) return { ok: true, json: async () => indexMap };
        if (url.endsWith('food.json')) return { ok: true, json: async () => rawData };
        return { ok: false };
    });

    const resEnsure = await sandbox.window.COSYVocab.ensure('en', 'A1', { min: 4 });
    assert.strictEqual(resEnsure.ok, true);
    assert.strictEqual(sandbox.window.vocabularyData.en.length, 4);
    assert.strictEqual(sandbox.window.vocabularyData.en.some(e => e.word === 'apple'), false);
    assert.strictEqual(sandbox.window.vocabularyData.en[0].word, 'banana');

    const sandbox2 = createSandbox(async (url) => {
        if (url.endsWith('index.json')) return { ok: true, json: async () => indexMap };
        if (url.endsWith('food.json')) return { ok: true, json: async () => rawData };
        return { ok: false };
    });
    const resEnsureFull = await sandbox2.window.COSYVocab.ensureFull('en', 'A1', { min: 4 });
    assert.strictEqual(resEnsureFull.ok, true);
    assert.strictEqual(sandbox2.window.vocabularyData.en.length, 4);
    assert.strictEqual(sandbox2.window.vocabularyData.en.some(e => e.word === 'apple'), false);
    assert.strictEqual(sandbox2.window.vocabularyData.en[0].word, 'banana');

    const sandbox3 = createSandbox(async (url) => {
        if (url.endsWith('search-index.json')) return { ok: true, json: async () => rawData };
        return { ok: false };
    });
    const set = await sandbox3.window.COSYVocab.wordSet('en');
    assert.ok(set.has('banana'));
    assert.ok(!set.has('apple'));
});

test('PART D e: hl_reason_belongs exists across all 7 languages and contains {theme}', () => {
    const i18nCode = fs.readFileSync(path.join(__dirname, '../shared/js/i18n.js'), 'utf8');
    const sandbox = createSandbox();
    vm.runInContext(i18nCode, sandbox);

    const languages = ['en', 'fr', 'es', 'de', 'it', 'ru', 'el'];
    for (const lang of languages) {
        const text = sandbox.window.tOr('hl_reason_belongs', '', lang);
        assert.notStrictEqual(text, '', `Key hl_reason_belongs missing in ${lang}`);
        assert.ok(text.includes('{theme}'), `Translation for hl_reason_belongs in ${lang} must contain {theme}`);
    }
});

test('Word Linker PART C a: COSYVocab.themeFamily maps correctly to coherent families and unchanged non-coherent themes', () => {
    const sandbox = createSandbox();
    const tf = sandbox.window.COSYVocab.themeFamily;

    assert.strictEqual(tf('food_drink'), 'food');
    assert.strictEqual(tf('food'), 'food');
    assert.strictEqual(tf('drink'), 'food');
    assert.strictEqual(tf('meal'), 'food');
    assert.strictEqual(tf('cooking'), 'food');

    assert.strictEqual(tf('body_health'), 'body');
    assert.strictEqual(tf('health'), 'body');
    assert.strictEqual(tf('medical'), 'body');

    assert.strictEqual(tf('house_furniture'), 'house');
    assert.strictEqual(tf('housing'), 'house');
    assert.strictEqual(tf('kitchen'), 'house');

    assert.strictEqual(tf('clothes'), 'clothes');
    assert.strictEqual(tf('clothing'), 'clothes');
    assert.strictEqual(tf('fashion'), 'clothes');

    assert.strictEqual(tf('animals'), 'animals');
    assert.strictEqual(tf('pets'), 'animals');

    assert.strictEqual(tf('nature'), 'nature');
    assert.strictEqual(tf('weather'), 'nature');

    assert.strictEqual(tf('transport'), 'transport');
    assert.strictEqual(tf('vehicle'), 'transport');

    assert.strictEqual(tf('technology'), 'tech');

    // Non-coherent themes returned unchanged
    assert.strictEqual(tf('school'), 'school');
    assert.strictEqual(tf('work'), 'work');
    assert.strictEqual(tf('jobs'), 'jobs');
    assert.strictEqual(tf('general'), 'general');
    assert.strictEqual(tf('common_nouns'), 'common_nouns');
});

test('Word Linker PART C b: No generated puzzle ever contains a word from a school/work/jobs/general/common_nouns theme', async () => {
    const indexMap = {
        'id1': 'a0_a1/school.json',
        'id2': 'a0_a1/food.json',
        'id3': 'a0_a1/body.json'
    };

    const schoolFile = [
        { id: '1', word: 'bureau', level: 'A1', form: 'noun', theme: 'school' },
        { id: '2', word: 'argent', level: 'A1', form: 'noun', theme: 'school' },
        { id: '3', word: 'sac', level: 'A1', form: 'noun', theme: 'school' },
        { id: '4', word: 'science', level: 'A1', form: 'noun', theme: 'school' }
    ];

    const foodFile = [
        { id: '5', word: 'apple', level: 'A1', form: 'noun', theme: 'food' },
        { id: '6', word: 'banana', level: 'A1', form: 'noun', theme: 'food' },
        { id: '7', word: 'cherry', level: 'A1', form: 'noun', theme: 'food' },
        { id: '8', word: 'bread', level: 'A1', form: 'noun', theme: 'food' }
    ];

    const bodyFile = [
        { id: '9', word: 'head', level: 'A1', form: 'noun', theme: 'body' },
        { id: '10', word: 'arm', level: 'A1', form: 'noun', theme: 'body' },
        { id: '11', word: 'leg', level: 'A1', form: 'noun', theme: 'body' },
        { id: '12', word: 'foot', level: 'A1', form: 'noun', theme: 'body' }
    ];

    const sandbox = createSandbox(async (url) => {
        if (url.endsWith('index.json')) return { ok: true, json: async () => indexMap };
        if (url.includes('school.json')) return { ok: true, json: async () => schoolFile };
        if (url.includes('food.json')) return { ok: true, json: async () => foodFile };
        if (url.includes('body.json')) return { ok: true, json: async () => bodyFile };
        return { ok: false };
    });

    const res = await sandbox.window.COSYVocab.buildLinkPuzzles('fr', 'A1', { count: 10 });
    assert.strictEqual(res.ok, true);
    for (const p of res.puzzles) {
        assert.ok(!p.words.includes('bureau'));
        assert.ok(!p.words.includes('argent'));
        assert.ok(!p.words.includes('sac'));
        assert.ok(!p.words.includes('science'));
    }
});

test('Word Linker PART C c: Odd puzzle family(odd theme) !== family(main theme); body_health vs health entries never paired', async () => {
    const indexMap = {
        'id1': 'a0_a1/body_health.json',
        'id2': 'a0_a1/health.json',
        'id3': 'a0_a1/food.json'
    };

    const bodyHealthFile = [
        { id: '1', word: 'toothpaste', level: 'A1', form: 'noun', theme: 'body_health' },
        { id: '2', word: 'shampoo', level: 'A1', form: 'noun', theme: 'body_health' },
        { id: '3', word: 'sunscreen', level: 'A1', form: 'noun', theme: 'body_health' }
    ];

    const healthFile = [
        { id: '4', word: 'stomach', level: 'A1', form: 'noun', theme: 'health' }
    ];

    const foodFile = [
        { id: '5', word: 'bread', level: 'A1', form: 'noun', theme: 'food' },
        { id: '6', word: 'milk', level: 'A1', form: 'noun', theme: 'food' },
        { id: '7', word: 'apple', level: 'A1', form: 'noun', theme: 'food' },
        { id: '8', word: 'cheese', level: 'A1', form: 'noun', theme: 'food' }
    ];

    const sandbox = createSandbox(async (url) => {
        if (url.endsWith('index.json')) return { ok: true, json: async () => indexMap };
        if (url.includes('body_health.json')) return { ok: true, json: async () => bodyHealthFile };
        if (url.includes('health.json')) return { ok: true, json: async () => healthFile };
        if (url.includes('food.json')) return { ok: true, json: async () => foodFile };
        return { ok: false };
    });

    const res = await sandbox.window.COSYVocab.buildLinkPuzzles('en', 'A1', { count: 10 });
    assert.strictEqual(res.ok, true);
    for (const p of res.puzzles) {
        if (p.odd !== 'none') {
            const tf = sandbox.window.COSYVocab.themeFamily;
            assert.notStrictEqual(tf(p.theme), tf(p.oddTheme));
            if (p.theme.includes('health') || p.theme.includes('body')) {
                assert.notStrictEqual(p.odd, 'stomach');
            }
        }
    }
});

test('Word Linker PART C d: A word present in two coherent families is never used (polysemy guard)', async () => {
    const indexMap = {
        'id1': 'a0_a1/food.json',
        'id2': 'a0_a1/nature.json',
        'id3': 'a0_a1/animals.json'
    };

    const foodFile = [
        { id: '1', word: 'apple', level: 'A1', form: 'noun', theme: 'food' },
        { id: '2', word: 'banana', level: 'A1', form: 'noun', theme: 'food' },
        { id: '3', word: 'orange', level: 'A1', form: 'noun', theme: 'food' },
        { id: '4', word: 'duck', level: 'A1', form: 'noun', theme: 'food' }, // Polysemous: food + animal
        { id: '5', word: 'bread', level: 'A1', form: 'noun', theme: 'food' }
    ];

    const animalsFile = [
        { id: '6', word: 'dog', level: 'A1', form: 'noun', theme: 'animals' },
        { id: '7', word: 'cat', level: 'A1', form: 'noun', theme: 'animals' },
        { id: '8', word: 'bird', level: 'A1', form: 'noun', theme: 'animals' },
        { id: '9', word: 'duck', level: 'A1', form: 'noun', theme: 'animals' }, // Polysemous: food + animal
        { id: '10', word: 'lion', level: 'A1', form: 'noun', theme: 'animals' }
    ];

    const sandbox = createSandbox(async (url) => {
        if (url.endsWith('index.json')) return { ok: true, json: async () => indexMap };
        if (url.includes('food.json')) return { ok: true, json: async () => foodFile };
        if (url.includes('animals.json')) return { ok: true, json: async () => animalsFile };
        return { ok: false };
    });

    const res = await sandbox.window.COSYVocab.buildLinkPuzzles('en', 'A1', { count: 10 });
    assert.strictEqual(res.ok, true);
    for (const p of res.puzzles) {
        assert.ok(!p.words.includes('duck'), 'Polysemous word "duck" must be dropped from all puzzles');
    }
});
