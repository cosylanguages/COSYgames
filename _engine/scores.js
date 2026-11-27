// COSY game scores and leaderboard (localStorage-based, no server required)

const COSYScores = {
  key: 'cosy_game_scores',

  save(game, language, level, score) {
    const all = this.load();
    const entry = { game, language, level, score, date: new Date().toISOString() };
    all.push(entry);
    try { localStorage.setItem(this.key, JSON.stringify(all)); } catch(e) {}
  },

  load() {
    try { return JSON.parse(localStorage.getItem(this.key) || '[]'); } catch(e) { return []; }
  },

  best(game, language) {
    return this.load()
      .filter(e => e.game === game && e.language === language)
      .sort((a, b) => b.score - a.score)[0] || null;
  },

  latest(game) {
    const entries = this.load().filter(e => e.game === game);
    return entries.length ? entries[entries.length - 1] : null;
  },

  bestAny(game) {
    return this.load()
      .filter(e => e.game === game)
      .sort((a, b) => b.score - a.score)[0] || null;
  },

  renderSetupScores(game) {
    if (typeof document === 'undefined') return;
    const latest = this.latest(game);
    const best = this.bestAny(game);
    const scoreEl = document.getElementById('current-score');
    const highEl = document.getElementById('high-score');
    if (scoreEl) scoreEl.textContent = latest ? latest.score : 0;
    if (highEl) highEl.textContent = best ? best.score : 0;
  }
};

if (typeof window !== 'undefined') {
  window.COSYScores = COSYScores;
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = COSYScores;
}