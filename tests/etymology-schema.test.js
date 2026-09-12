const fs = require('fs');
const path = require('path');
const assert = require('assert');

const langs = ['ba', 'br', 'de', 'el', 'en', 'es', 'fr', 'hy', 'it', 'ka', 'pt', 'ru', 'tt'];

let totalTested = 0;
let multiHopCount = 0;

console.log('Running etymology schema, multi-hop path, false-friends, and doublets tests...\n');

langs.forEach(lang => {
    const filePath = path.join(__dirname, '..', 'data', lang, 'game_data.js');
    assert.strictEqual(fs.existsSync(filePath), true, `File missing for language: ${lang}`);

    const content = fs.readFileSync(filePath, 'utf8');
    const window = {};
    eval(content);

    const data = window.gameData ? window.gameData[lang] : null;
    assert.ok(data, `gameData['${lang}'] should exist`);

    const etymology = data.etymology;
    assert.ok(Array.isArray(etymology), `data.etymology should be an array for ${lang}`);
    assert.ok(etymology.length > 0, `data.etymology should not be empty for ${lang}`);

    etymology.forEach((entry, idx) => {
        totalTested++;
        const prefix = `Lang '${lang}' entry #${idx + 1} (${entry.word})`;

        assert.ok(typeof entry.word === 'string' && entry.word.trim().length > 0, `${prefix}: missing 'word'`);
        assert.ok(typeof entry.level === 'string' && entry.level.trim().length > 0, `${prefix}: missing 'level'`);
        assert.ok(typeof entry.answer === 'string' && entry.answer.trim().length > 0, `${prefix}: missing 'answer'`);
        assert.ok(typeof entry.detail === 'string' && entry.detail.trim().length > 0, `${prefix}: missing 'detail'`);

        assert.ok(Array.isArray(entry.options), `${prefix}: 'options' must be an array`);
        assert.ok(entry.options.length >= 3 && entry.options.length <= 4, `${prefix}: 'options' length must be 3 or 4, got ${entry.options.length}`);

        const uniqueOptions = new Set(entry.options);
        assert.strictEqual(uniqueOptions.size, entry.options.length, `${prefix}: 'options' contains duplicates: ${JSON.stringify(entry.options)}`);

        const answerMatches = entry.options.filter(opt => opt === entry.answer);
        assert.strictEqual(answerMatches.length, 1, `${prefix}: answer '${entry.answer}' must be present in options exactly once, found in: ${JSON.stringify(entry.options)}`);

        if (entry.path && (entry.path.match(/→/g) || []).length >= 2) {
            multiHopCount++;
        }
    });

    console.log(`✓ Lang '${lang}': ${etymology.length} etymology entries verified`);
});

// Also test data/universal.js
const universalPath = path.join(__dirname, '..', 'data', 'universal.js');
if (fs.existsSync(universalPath)) {
    const content = fs.readFileSync(universalPath, 'utf8');
    const window = {};
    eval(content);
    const data = window.gameData ? window.gameData['universal'] : null;
    if (data && data.etymology) {
        data.etymology.forEach((entry, idx) => {
            totalTested++;
            const prefix = `Universal entry #${idx + 1} (${entry.word})`;
            assert.ok(typeof entry.word === 'string' && entry.word.trim().length > 0, `${prefix}: missing 'word'`);
            assert.ok(typeof entry.level === 'string' && entry.level.trim().length > 0, `${prefix}: missing 'level'`);
            assert.ok(typeof entry.answer === 'string' && entry.answer.trim().length > 0, `${prefix}: missing 'answer'`);
            assert.ok(typeof entry.detail === 'string' && entry.detail.trim().length > 0, `${prefix}: missing 'detail'`);
            assert.ok(Array.isArray(entry.options), `${prefix}: 'options' must be an array`);
            assert.ok(entry.options.length >= 3 && entry.options.length <= 4, `${prefix}: 'options' length must be 3 or 4`);
            assert.strictEqual(new Set(entry.options).size, entry.options.length, `${prefix}: options duplicates`);
            assert.strictEqual(entry.options.filter(o => o === entry.answer).length, 1, `${prefix}: answer match count`);

            if (entry.path && (entry.path.match(/→/g) || []).length >= 2) {
                multiHopCount++;
            }
        });
        console.log(`✓ Universal: ${data.etymology.length} etymology entries verified`);
    }
}

// Test data/shared/etymology_network.js
const networkPath = path.join(__dirname, '..', 'data', 'shared', 'etymology_network.js');
assert.strictEqual(fs.existsSync(networkPath), true, 'data/shared/etymology_network.js missing');
const networkData = require(networkPath);
assert.strictEqual(Array.isArray(networkData), true, 'Network data should be an array');
assert.strictEqual(networkData.length, 25, 'Network data should have exactly 25 entries');

networkData.forEach((entry, idx) => {
    totalTested++;
    const prefix = `Network entry #${idx + 1} (${entry.root})`;
    assert.ok(typeof entry.root === 'string' && entry.root.trim().length > 0, `${prefix}: missing 'root'`);
    assert.ok(typeof entry.rootLanguage === 'string' && entry.rootLanguage.trim().length > 0, `${prefix}: missing 'rootLanguage'`);
    assert.ok(typeof entry.meaning === 'string' && entry.meaning.trim().length > 0, `${prefix}: missing 'meaning'`);
    assert.ok(typeof entry.detail === 'string' && entry.detail.trim().length > 0, `${prefix}: missing 'detail'`);
    assert.ok(Array.isArray(entry.reflexes) && entry.reflexes.length >= 2, `${prefix}: 'reflexes' must have at least 2 reflexes`);

    entry.reflexes.forEach((r, rIdx) => {
        assert.ok(langs.includes(r.lang), `${prefix} reflex #${rIdx + 1}: invalid lang '${r.lang}'`);
        assert.ok(typeof r.word === 'string' && r.word.trim().length > 0, `${prefix} reflex #${rIdx + 1}: missing 'word'`);
        assert.ok(typeof r.note === 'string' && r.note.trim().length > 0, `${prefix} reflex #${rIdx + 1}: missing 'note'`);
    });
});
console.log(`✓ Network: ${networkData.length} cross-language family entries verified`);

// Test data/shared/false_friends.js
const falseFriendsPath = path.join(__dirname, '..', 'data', 'shared', 'false_friends.js');
assert.strictEqual(fs.existsSync(falseFriendsPath), true, 'data/shared/false_friends.js missing');
const falseFriendsData = require(falseFriendsPath);
assert.strictEqual(Array.isArray(falseFriendsData), true, 'False friends data should be an array');
assert.strictEqual(falseFriendsData.length, 20, 'False friends data should have exactly 20 entries');

falseFriendsData.forEach((entry, idx) => {
    totalTested++;
    const prefix = `False Friends entry #${idx + 1} (${entry.wordA?.word} / ${entry.wordB?.word})`;
    assert.ok(entry.wordA && entry.wordA.lang && entry.wordA.word && entry.wordA.meaning, `${prefix}: missing 'wordA' fields`);
    assert.ok(entry.wordB && entry.wordB.lang && entry.wordB.word && entry.wordB.meaning, `${prefix}: missing 'wordB' fields`);
    assert.ok(['cognate-but-diverged', 'coincidental-look-alike'].includes(entry.relation), `${prefix}: invalid relation '${entry.relation}'`);
    assert.ok(typeof entry.detail === 'string' && entry.detail.trim().length > 0, `${prefix}: missing 'detail'`);
});
console.log(`✓ False Friends: ${falseFriendsData.length} verified entries`);

// Test data/shared/doublets.js
const doubletsPath = path.join(__dirname, '..', 'data', 'shared', 'doublets.js');
assert.strictEqual(fs.existsSync(doubletsPath), true, 'data/shared/doublets.js missing');
const doubletsData = require(doubletsPath);
assert.strictEqual(Array.isArray(doubletsData), true, 'Doublets data should be an array');
assert.strictEqual(doubletsData.length, 15, 'Doublets data should have 15 entries');

doubletsData.forEach((entry, idx) => {
    totalTested++;
    const prefix = `Doublet entry #${idx + 1} (${entry.wordA} / ${entry.wordB})`;
    assert.ok(langs.includes(entry.language), `${prefix}: invalid language '${entry.language}'`);
    assert.ok(typeof entry.wordA === 'string' && entry.wordA.trim().length > 0, `${prefix}: missing 'wordA'`);
    assert.ok(typeof entry.wordB === 'string' && entry.wordB.trim().length > 0, `${prefix}: missing 'wordB'`);
    assert.ok(typeof entry.commonRoot === 'string' && entry.commonRoot.trim().length > 0, `${prefix}: missing 'commonRoot'`);
    assert.ok(Array.isArray(entry.options) && entry.options.includes(entry.commonRoot), `${prefix}: options must contain commonRoot`);
    assert.ok(typeof entry.detail === 'string' && entry.detail.trim().length > 0, `${prefix}: missing 'detail'`);
});
console.log(`✓ Doublets: ${doubletsData.length} verified entries`);

assert.ok(multiHopCount >= 15, `Expected at least 15 multi-hop 3+ step paths, found ${multiHopCount}`);
console.log(`✓ Multi-hop Paths: ${multiHopCount} multi-hop 3+ step paths verified across decks.`);

console.log(`\nALL TESTS PASSED! Successfully verified ${totalTested} etymology, network, false friends & doublet entries.`);
