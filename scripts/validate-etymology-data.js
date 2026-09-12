#!/usr/bin/env node

/**
 * scripts/validate-etymology-data.js
 * Automated validation script for COSYgames Etymology Explorer datasets.
 * Runs with pure vanilla Node.js (zero external dependencies).
 */

const fs = require('fs');
const path = require('path');

const VALID_LEVEL_ALIASES = new Set([
    'easy', 'starter', 'a1', 'a2', 'elementary',
    'medium', 'intermediate', 'b1', 'b2',
    'hard', 'advanced', 'c1', 'c2', 'proficiency'
]);

const dataDir = path.join(__dirname, '..', 'data');
const errors = [];
const warnings = [];
let totalEntriesChecked = 0;

// Discover available language directories in data/
const languageDirs = fs.readdirSync(dataDir).filter(item => {
    const fullPath = path.join(dataDir, item);
    return fs.statSync(fullPath).isDirectory() && item !== 'shared';
});

console.log(`🔍 Validating Etymology Data across ${languageDirs.length} language datasets and shared networks...\n`);

// 1. Validate Per-Language Datasets
languageDirs.forEach(lang => {
    const gameDataPath = path.join(dataDir, lang, 'game_data.js');
    if (!fs.existsSync(gameDataPath)) return;

    const content = fs.readFileSync(gameDataPath, 'utf8');
    const window = {};
    try {
        eval(content);
    } catch (e) {
        errors.push(`[${lang}] Evaluation error in game_data.js: ${e.message}`);
        return;
    }

    const data = window.gameData ? window.gameData[lang] : null;
    if (!data || !Array.isArray(data.etymology)) {
        return;
    }

    const seenWords = new Set();

    data.etymology.forEach((entry, idx) => {
        totalEntriesChecked++;
        const prefix = `[${lang}] Entry #${idx + 1} (${entry.word || 'UNKNOWN'})`;

        // Check word
        if (typeof entry.word !== 'string' || entry.word.trim().length === 0) {
            errors.push(`${prefix}: 'word' must be a non-empty string`);
        } else {
            const wordLower = entry.word.trim().toLowerCase();
            if (seenWords.has(wordLower)) {
                errors.push(`${prefix}: Duplicate word '${entry.word}' found in ${lang}`);
            }
            seenWords.add(wordLower);
        }

        // Check level
        if (typeof entry.level !== 'string' || !VALID_LEVEL_ALIASES.has(entry.level.trim().toLowerCase())) {
            errors.push(`${prefix}: Invalid or unrecognized level '${entry.level}'`);
        }

        // Check options
        if (!Array.isArray(entry.options)) {
            errors.push(`${prefix}: 'options' must be an array`);
        } else {
            if (entry.options.length < 3 || entry.options.length > 4) {
                errors.push(`${prefix}: 'options' length must be 3 or 4 (got ${entry.options.length})`);
            }
            const uniqueOptions = new Set(entry.options);
            if (uniqueOptions.size !== entry.options.length) {
                errors.push(`${prefix}: Duplicate strings inside options array: ${JSON.stringify(entry.options)}`);
            }
        }

        // Check answer
        if (typeof entry.answer !== 'string' || entry.answer.trim().length === 0) {
            errors.push(`${prefix}: 'answer' must be a non-empty string`);
        } else if (Array.isArray(entry.options)) {
            const answerCount = entry.options.filter(opt => opt === entry.answer).length;
            if (answerCount !== 1) {
                errors.push(`${prefix}: Answer '${entry.answer}' must appear in options exactly once (found ${answerCount})`);
            }
        }

        // Check detail
        if (typeof entry.detail !== 'string' || entry.detail.trim().length === 0) {
            errors.push(`${prefix}: 'detail' must be a non-empty string`);
        }
    });
});

// 2. Validate Universal Dataset
const universalPath = path.join(dataDir, 'universal.js');
if (fs.existsSync(universalPath)) {
    const content = fs.readFileSync(universalPath, 'utf8');
    const window = {};
    eval(content);
    const data = window.gameData ? window.gameData['universal'] : null;
    if (data && Array.isArray(data.etymology)) {
        data.etymology.forEach((entry, idx) => {
            totalEntriesChecked++;
            const prefix = `[Universal] Entry #${idx + 1} (${entry.word || 'UNKNOWN'})`;

            if (typeof entry.word !== 'string' || entry.word.trim().length === 0) errors.push(`${prefix}: 'word' missing`);
            if (typeof entry.level !== 'string' || !VALID_LEVEL_ALIASES.has(entry.level.trim().toLowerCase())) errors.push(`${prefix}: Invalid level '${entry.level}'`);
            if (!Array.isArray(entry.options) || entry.options.length < 3 || entry.options.length > 4) errors.push(`${prefix}: Invalid options array`);
            if (typeof entry.answer !== 'string' || (Array.isArray(entry.options) && entry.options.filter(o => o === entry.answer).length !== 1)) {
                errors.push(`${prefix}: Answer '${entry.answer}' not matched in options`);
            }
            if (typeof entry.detail !== 'string' || entry.detail.trim().length === 0) errors.push(`${prefix}: 'detail' missing`);
        });
    }
}

// 3. Validate Shared Network Dataset
const networkPath = path.join(dataDir, 'shared', 'etymology_network.js');
if (fs.existsSync(networkPath)) {
    const networkData = require(networkPath);
    if (!Array.isArray(networkData)) {
        errors.push(`[etymology_network.js]: Exported data must be an array`);
    } else {
        networkData.forEach((entry, idx) => {
            totalEntriesChecked++;
            const prefix = `[etymology_network.js] Entry #${idx + 1} (${entry.root})`;
            if (!entry.root || !entry.rootLanguage || !entry.meaning || !entry.detail) {
                errors.push(`${prefix}: Missing required fields (root, rootLanguage, meaning, detail)`);
            }
            if (!Array.isArray(entry.reflexes) || entry.reflexes.length < 2) {
                errors.push(`${prefix}: 'reflexes' must be an array with at least 2 reflexes`);
            } else {
                entry.reflexes.forEach((reflex, rIdx) => {
                    if (!languageDirs.includes(reflex.lang)) {
                        errors.push(`${prefix} reflex #${rIdx + 1}: Language code '${reflex.lang}' does not exist under data/`);
                    }
                    if (!reflex.word || !reflex.note) {
                        errors.push(`${prefix} reflex #${rIdx + 1}: Missing word or note`);
                    }
                });
            }
        });
    }
}

// 4. Validate Shared False Friends Dataset
const falseFriendsPath = path.join(dataDir, 'shared', 'false_friends.js');
if (fs.existsSync(falseFriendsPath)) {
    const ffData = require(falseFriendsPath);
    if (!Array.isArray(ffData)) {
        errors.push(`[false_friends.js]: Exported data must be an array`);
    } else {
        ffData.forEach((entry, idx) => {
            totalEntriesChecked++;
            const prefix = `[false_friends.js] Entry #${idx + 1}`;
            if (!entry.wordA || !entry.wordB || !entry.relation || !entry.detail) {
                errors.push(`${prefix}: Missing required fields`);
            }
            if (entry.wordA && !languageDirs.includes(entry.wordA.lang)) {
                errors.push(`${prefix}: wordA lang '${entry.wordA.lang}' does not exist under data/`);
            }
            if (entry.wordB && !languageDirs.includes(entry.wordB.lang)) {
                errors.push(`${prefix}: wordB lang '${entry.wordB.lang}' does not exist under data/`);
            }
        });
    }
}

// 5. Validate Shared Doublets Dataset
const doubletsPath = path.join(dataDir, 'shared', 'doublets.js');
if (fs.existsSync(doubletsPath)) {
    const doubletsData = require(doubletsPath);
    if (!Array.isArray(doubletsData)) {
        errors.push(`[doublets.js]: Exported data must be an array`);
    } else {
        doubletsData.forEach((entry, idx) => {
            totalEntriesChecked++;
            const prefix = `[doublets.js] Entry #${idx + 1}`;
            if (!entry.language || !entry.wordA || !entry.wordB || !entry.commonRoot || !entry.detail) {
                errors.push(`${prefix}: Missing required fields`);
            }
            if (entry.language && !languageDirs.includes(entry.language)) {
                errors.push(`${prefix}: Language code '${entry.language}' does not exist under data/`);
            }
            if (Array.isArray(entry.options) && !entry.options.includes(entry.commonRoot)) {
                errors.push(`${prefix}: Options do not include commonRoot '${entry.commonRoot}'`);
            }
        });
    }
}

// Print Summary
console.log(` Checked ${totalEntriesChecked} total etymology & network entries.\n`);

if (warnings.length > 0) {
    console.warn('⚠️ WARNINGS:');
    warnings.forEach(w => console.warn(` - ${w}`));
    console.log('');
}

if (errors.length > 0) {
    console.error('❌ VALIDATION FAILED!');
    errors.forEach(e => console.error(` - ${e}`));
    process.exit(1);
} else {
    console.log('✅ ALL ETYMOLOGY DATA VALIDATION CHECKS PASSED!');
    process.exit(0);
}
