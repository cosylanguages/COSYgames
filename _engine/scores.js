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
  }
};