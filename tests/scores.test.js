const test = require('node:test');
const assert = require('node:assert');

class MemoryStorage {
  constructor() {
    this.store = {};
  }
  getItem(key) {
    return this.store[key] || null;
  }
  setItem(key, value) {
    this.store[key] = String(value);
  }
  removeItem(key) {
    delete this.store[key];
  }
  clear() {
    this.store = {};
  }
  get length() {
    return Object.keys(this.store).length;
  }
  key(index) {
    return Object.keys(this.store)[index] || null;
  }
}

global.localStorage = new MemoryStorage();

const COSYScores = require('../_engine/scores.js');

test('COSYScores opt-in getter and setter', () => {
  localStorage.clear();
  assert.strictEqual(COSYScores.getOptIn(), false, 'Default opt-in should be false');

  COSYScores.setOptIn(true);
  assert.strictEqual(COSYScores.getOptIn(), true, 'Opt-in should be true after setting');

  COSYScores.setOptIn(false);
  assert.strictEqual(COSYScores.getOptIn(), false, 'Opt-in should be false after unsetting');
});

test('COSYScores save and load locally', async () => {
  localStorage.clear();

  await COSYScores.save('fluency', 'en', 'A1', 100);
  await COSYScores.save('fluency', 'en', 'A2', 250);
  await COSYScores.save('wordlinker', 'fr', 'B1', 150);

  const loaded = COSYScores.load();
  assert.strictEqual(loaded.length, 3, 'Should have loaded 3 score entries');

  const bestFluency = COSYScores.best('fluency', 'en');
  assert.ok(bestFluency, 'Best score should exist');
  assert.strictEqual(bestFluency.score, 250, 'Best score should be highest score (250)');
});

test('COSYScores fetchLeaderboard falls back to local scores', async () => {
  localStorage.clear();

  await COSYScores.save('hotseat', 'es', 'B2', 300);
  await COSYScores.save('hotseat', 'es', 'B2', 500);

  const leaderboard = await COSYScores.fetchLeaderboard('hotseat', 10);
  assert.strictEqual(leaderboard.length, 2, 'Leaderboard should return 2 entries');
  assert.strictEqual(leaderboard[0].score, 500, 'Top entry score should be 500');
  assert.strictEqual(leaderboard[0].username, 'Local Player', 'Default username for fallback should be Local Player');
});

test('COSYScores detects Supabase session in localStorage', () => {
  localStorage.clear();

  const mockSession = {
    user: { id: 'usr_123', email: 'learner@example.com' },
    access_token: 'fake_jwt_token'
  };

  localStorage.setItem('sb-abcdefgh-auth-token', JSON.stringify(mockSession));

  const origWindow = global.window;
  global.window = {
    COSY_SUPABASE_URL: 'https://fake.supabase.co',
    COSY_SUPABASE_ANON_KEY: 'fake_key'
  };

  const detected = COSYScores.getSupabaseSession();
  assert.ok(detected, 'Should detect Supabase session from localStorage key');
  assert.strictEqual(detected.user.id, 'usr_123', 'Detected user ID should match');

  global.window = origWindow;
});

test('COSYUtils.saveScore invokes COSYScores.save without error', () => {
  localStorage.clear();
  global.COSYScores = COSYScores;
  delete require.cache[require.resolve('../shared/utils/game-utils.js')];
  require('../shared/utils/game-utils.js');

  const utils = global.COSYUtils || (global.window && global.window.COSYUtils);
  assert.ok(utils, 'COSYUtils should be exported');

  const res = utils.saveScore('scenematch', 420);
  assert.ok(res, 'saveScore should return score object');
  assert.strictEqual(res.current, 420, 'Current score should be 420');

  const localScores = COSYScores.load();
  assert.strictEqual(localScores.length, 1, 'COSYScores should have received 1 score entry');
  assert.strictEqual(localScores[0].game, 'scenematch', 'Game ID should be scenematch');
});
