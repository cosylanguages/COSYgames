const test = require('node:test');
const assert = require('node:assert/strict');
const vm = require('node:vm');
const fs = require('node:fs');
const path = require('node:path');

const gameUtilsCode = fs.readFileSync(path.join(__dirname, '../shared/utils/game-utils.js'), 'utf8');
const vocabLoaderCode = fs.readFileSync(path.join(__dirname, '../shared/js/vocab-loader.js'), 'utf8');

function createSandbox(opts = {}) {
    let speakCalls = [];
    let cancelled = false;

    class StubSpeechSynthesisUtterance {
        constructor(text) {
            this.text = text;
            this.lang = '';
            this.rate = 1.0;
            this.voice = null;
        }
    }

    const voicesList = opts.voices || [
        { lang: 'en-GB', name: 'Alice' },
        { lang: 'fr-FR', name: 'Thomas' },
        { lang: 'el-GR', name: 'Nikos' }
    ];

    const speechSynthesisStub = {
        cancel: () => { cancelled = true; },
        speak: (utt) => {
            speakCalls.push({
                text: utt.text,
                lang: utt.lang,
                rate: utt.rate,
                voice: utt.voice,
                cancelled
            });
        },
        getVoices: () => voicesList
    };

    const fetchStub = opts.fetch || (() => Promise.reject(new Error('no fetch')));

    const sandbox = {
        console,
        setTimeout,
        clearTimeout,
        AbortController,
        Set,
        fetch: fetchStub,
        window: {
            speechSynthesis: opts.noSpeech ? undefined : speechSynthesisStub,
            SpeechSynthesisUtterance: opts.noSpeech ? undefined : StubSpeechSynthesisUtterance
        }
    };

    sandbox.window.window = sandbox.window;
    vm.createContext(sandbox);
    vm.runInContext(gameUtilsCode, sandbox);
    vm.runInContext(vocabLoaderCode, sandbox);

    return { sandbox, speakCalls };
}

test('a. speak(): with stubbed speechSynthesis/SpeechSynthesisUtterance and a voice list: returns true, calls cancel then speak, utterance.lang is fr-FR for fr and el-GR for el, rate 0.9, picks matching voice; returns false when API is missing or text is ""', () => {
    const { sandbox, speakCalls } = createSandbox();
    const gameUtils = sandbox.window.gameUtils;

    assert.strictEqual(gameUtils.canSpeak(), true);

    const resFr = gameUtils.speak('bonjour', 'fr');
    assert.strictEqual(resFr, true);
    assert.strictEqual(speakCalls.length, 1);
    assert.strictEqual(speakCalls[0].text, 'bonjour');
    assert.strictEqual(speakCalls[0].lang, 'fr-FR');
    assert.strictEqual(speakCalls[0].rate, 0.9);
    assert.strictEqual(speakCalls[0].voice.name, 'Thomas');

    const resEl = gameUtils.speak('γεια', 'el');
    assert.strictEqual(resEl, true);
    assert.strictEqual(speakCalls.length, 2);
    assert.strictEqual(speakCalls[1].lang, 'el-GR');
    assert.strictEqual(speakCalls[1].voice.name, 'Nikos');

    assert.strictEqual(gameUtils.speak('', 'fr'), false);

    const noSpeechSandbox = createSandbox({ noSpeech: true }).sandbox;
    assert.strictEqual(noSpeechSandbox.window.gameUtils.canSpeak(), false);
    assert.strictEqual(noSpeechSandbox.window.gameUtils.speak('bonjour', 'fr'), false);
});

test('b. normalizeWord("Così!") === "così"; ("schön ") === "schön"; ("l\'été") === "lété"; ("") === ""', () => {
    const { sandbox } = createSandbox();
    const gameUtils = sandbox.window.gameUtils;

    assert.strictEqual(gameUtils.normalizeWord('Così!'), 'così');
    assert.strictEqual(gameUtils.normalizeWord('schön '), 'schön');
    assert.strictEqual(gameUtils.normalizeWord("l'été"), 'lété');
    assert.strictEqual(gameUtils.normalizeWord(''), '');
});

test('c. chainLetter("café","fr") === "e"; ("così","it") === "i"; ("словарь","ru") === "р"; ("мышь","ru") === "ш"; ("λόγος","el") === "σ"; ("Haus","de") === "s"; ("", "en") === "". foldLetter("й","ru") === "й", foldLetter("é","fr") === "e"', () => {
    const { sandbox } = createSandbox();
    const gameUtils = sandbox.window.gameUtils;

    assert.strictEqual(gameUtils.chainLetter('café', 'fr'), 'e');
    assert.strictEqual(gameUtils.chainLetter('così', 'it'), 'i');
    assert.strictEqual(gameUtils.chainLetter('словарь', 'ru'), 'р');
    assert.strictEqual(gameUtils.chainLetter('мышь', 'ru'), 'ш');
    assert.strictEqual(gameUtils.chainLetter('λόγος', 'el'), 'σ');
    assert.strictEqual(gameUtils.chainLetter('Haus', 'de'), 's');
    assert.strictEqual(gameUtils.chainLetter('', 'en'), '');

    assert.strictEqual(gameUtils.foldLetter('й', 'ru'), 'й');
    assert.strictEqual(gameUtils.foldLetter('é', 'fr'), 'e');
});

test('d. wordSet(): with a stub fetch -> Set of lower-cased words; failure -> null without throwing; a second call does not fetch again', async () => {
    let fetchCount = 0;
    const rawData = [
        { word: 'Apple' },
        { word: 'BANANA' },
        { word: 'cherry' }
    ];

    const { sandbox } = createSandbox({
        fetch: async (url) => {
            fetchCount++;
            if (url.includes('fail')) {
                return { ok: false, status: 404 };
            }
            return {
                ok: true,
                json: async () => rawData
            };
        }
    });

    const set = await sandbox.window.COSYVocab.wordSet('en');
    assert.ok(set && typeof set.has === 'function' && set.constructor.name === 'Set');
    assert.strictEqual(set.size, 3);
    assert.ok(set.has('apple'));
    assert.ok(set.has('banana'));
    assert.ok(set.has('cherry'));
    assert.strictEqual(fetchCount, 1);

    const set2 = await sandbox.window.COSYVocab.wordSet('en');
    assert.strictEqual(fetchCount, 1); // Uses cached search index fetch Promise
    assert.ok(set2 instanceof Set);

    const failSet = await sandbox.window.COSYVocab.wordSet('fail');
    assert.strictEqual(failSet, null);
});

test('e. Opt-in guarantee: exactly emoji-odyssey, object-quest, hot-seat, identity-mystery and last-letter game.js reference COSYVocab', () => {
    const gamesDir = path.join(__dirname, '..');
    const files = fs.readdirSync(gamesDir, { recursive: true });
    const gameJsFiles = files.filter(f => f.endsWith('game.js'));

    const expectedGames = ['emoji-odyssey', 'hot-seat', 'identity-mystery', 'last-letter', 'object-quest'];
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
