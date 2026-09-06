// Shared game session engine for all COSY games.
// Individual games import this and extend it with their own logic.

const COSYGame = {
  name: null,
  language: null,
  level: null,
  players: 1,
  score: 0,
  round: 0,
  maxRounds: 10,

  init(name, language, level) {
    this.name = name;
    this.language = language;
    this.level = level;
    this.score = 0;
    this.round = 0;
  },

  nextRound() {
    this.round++;
    return this.round <= this.maxRounds;
  },

  addScore(points) {
    this.score += points;
  },

  isOver() {
    return this.round >= this.maxRounds;
  }
};