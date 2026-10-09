// Manual browser leak-check harness. Requires Playwright (npm i -D playwright). Not part of CI.
import { chromium } from 'playwright';
import path from 'path';
import fs from 'fs';
import { execSync } from 'child_process';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const repoRoot = path.resolve(__dirname, '../..');

const ALLOW_LIST = [
    'COSYgames',
    'COSYlanguages',
    'COSYtools',
    'COSYevents',
    'COSYdata',
    'Last Letter',
    'Lucky Numbers',
    'Hot Seat',
    'Object Quest',
    'Emoji Odyssey',
    'Word Linker',
    'Identity Mystery',
    'Report Issue',
    'GitHub Repository'
];

const GAMES = ['last-letter', 'lucky-numbers', 'hot-seat', 'object-quest', 'emoji-odyssey', 'word-linker', 'identity-mystery'];
const LANGUAGES = ['fr', 'es', 'de', 'it', 'ru', 'el'];

function loadEnglishSourceStrings() {
  const gamesDir = path.join(repoRoot, 'i18n', 'games');
  const files = fs.readdirSync(gamesDir).filter(f => f.endsWith('.js'));
  const enStrings = new Set();

  for (const f of files) {
    const content = fs.readFileSync(path.join(gamesDir, f), 'utf8');
    const matches = Array.from(content.matchAll(/en:\s*['"]([^'"]+)['"]/g));
    for (const m of matches) {
      const str = m[1].replace(/\{[a-zA-Z0-9_]+\}/g, '').trim();
      if (str.length >= 8 && !ALLOW_LIST.includes(str)) {
        enStrings.add(str);
      }
    }
  }

  return Array.from(enStrings);
}

function parseArgs() {
  const args = process.argv.slice(2);
  let ref = null;
  for (let i = 0; i < args.length; i++) {
    if (args[i] === '--ref' && i + 1 < args.length) {
      ref = args[++i];
    } else if (!args[i].startsWith('--')) {
      ref = args[i];
    }
  }
  return { ref };
}

async function runFlowForGame(page, gameId, lang, baseUrl) {
  const pageUrl = `${baseUrl}/${gameId}/index.html?cosydata_base=/COSYdata/vocabulary`;

  await page.addInitScript((uiLang) => {
    try {
      localStorage.setItem('cosy_ui_lang', uiLang);
    } catch(e) {}
  }, lang);

  await page.goto(pageUrl);
  await page.waitForLoadState('domcontentloaded');

  const states = {};

  await page.waitForSelector('#go-body');
  states.setup = await page.innerText('#go-body');

  try {
    const startBtn = await page.$('.btn-start-game, #btn-start-game, #hs-start');
    if (startBtn && await startBtn.isVisible()) {
      await startBtn.click();
    } else {
      await page.evaluate(() => {
        if (window.COSY_GAME && typeof window.COSY_GAME.start === 'function') {
          window.COSY_GAME.start();
        }
      });
    }
  } catch(e) {
    await page.evaluate(() => {
      if (window.COSY_GAME && typeof window.COSY_GAME.start === 'function') {
        window.COSY_GAME.start();
      }
    });
  }

  await page.waitForTimeout(300);
  states.play = await page.innerText('#go-body');

  try {
    const actionBtn = await page.$('.word-opt, .word-plank, #hs-got-it, #oq-btn-hint, #im-btn-question');
    if (actionBtn && await actionBtn.isVisible()) {
      await actionBtn.click();
    }
  } catch(e) {}

  await page.waitForTimeout(200);
  states.feedback = await page.innerText('#go-body');

  await page.evaluate(() => {
    if (window.COSY_GAME && typeof window.COSY_GAME.renderEnd === 'function') {
      window.COSY_GAME.renderEnd();
    }
  });

  await page.waitForTimeout(200);
  states.end = await page.innerText('#go-body');

  return states;
}

async function main() {
  const { ref } = parseArgs();
  const enSourceStrings = loadEnglishSourceStrings();

  const browser = await chromium.launch({ headless: true });

  console.log('=== (1) ENGLISH LEAKAGE REPORT ===');
  console.log('Target Games:', GAMES.join(', '));
  console.log('Target Languages:', LANGUAGES.join(', '));
  console.log('----------------------------------------------------');

  const leakageTable = [];

  for (const gameId of GAMES) {
    for (const lang of LANGUAGES) {
      const page = await browser.newPage({ viewport: { width: 1280, height: 800 } });
      const baseUrl = `file://${repoRoot}`;

      const states = await runFlowForGame(page, gameId, lang, baseUrl);
      await page.close();

      const combinedText = Object.values(states).join(' \n ');
      const leaked = [];

      for (const enStr of enSourceStrings) {
        if (combinedText.includes(enStr)) {
          if (!ALLOW_LIST.includes(enStr) && !ALLOW_LIST.some(a => enStr.includes(a))) {
            leaked.push(enStr);
          }
        }
      }

      leakageTable.push({
        game: gameId,
        lang: lang,
        leakageCount: leaked.length,
        leakedStrings: leaked.join(' | ')
      });
    }
  }

  console.log('Game          | Lang | Leakage | Leaked Strings');
  console.log('--------------|------|---------|------------------------------------');
  for (const row of leakageTable) {
    console.log(`${row.game.padEnd(13)}| ${row.lang.padEnd(5)}| ${String(row.leakageCount).padEnd(8)}| ${row.leakedStrings}`);
  }

  const baselineRef = ref || 'HEAD~1';
  let worktreeDir = null;

  console.log('\n=== (2) ENGLISH PARITY REPORT ===');
  console.log(`Comparing EN visible text against baseline ref: ${baselineRef}`);
  console.log('----------------------------------------------------');

  try {
    worktreeDir = path.join('/tmp', `cosygames-wt-${Date.now()}`);
    execSync(`git worktree add "${worktreeDir}" ${baselineRef}`, { cwd: repoRoot, stdio: 'ignore' });

    const parityTable = [];

    for (const gameId of GAMES) {
      const pageCurrent = await browser.newPage({ viewport: { width: 1280, height: 800 } });
      const statesCurrent = await runFlowForGame(pageCurrent, gameId, 'en', `file://${repoRoot}`);
      await pageCurrent.close();

      const pageBase = await browser.newPage({ viewport: { width: 1280, height: 800 } });
      const statesBase = await runFlowForGame(pageBase, gameId, 'en', `file://${worktreeDir}`);
      await pageBase.close();

      const norm = (str) => String(str).replace(/\d+/g, '').replace(/\s+/g, ' ').trim();

      const setupMatch = norm(statesCurrent.setup) === norm(statesBase.setup);
      const endMatch = norm(statesCurrent.end) === norm(statesBase.end);

      const isMatch = setupMatch && endMatch;

      parityTable.push({
        game: gameId,
        match: isMatch ? 'MATCH (Identical)' : 'DIFFERENCE DETECTED'
      });
    }

    console.log('Game          | English Parity Result');
    console.log('--------------|----------------------');
    for (const row of parityTable) {
      console.log(`${row.game.padEnd(13)}| ${row.match}`);
    }
  } catch(err) {
    console.log('Worktree baseline check note:', err.message);
  } finally {
    if (worktreeDir && fs.existsSync(worktreeDir)) {
      try {
        execSync(`git worktree remove --force "${worktreeDir}"`, { cwd: repoRoot, stdio: 'ignore' });
      } catch(e) {}
    }
  }

  await browser.close();
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
