/* Pure logic of the COSYgames hub: filtering, deep-link resolution and link parameters.
 * No DOM access, so it runs in the browser (window.COSYHubCore) and in Node (require) and can be unit-tested. */
(function (root, factory) {
  if (typeof module === 'object' && module.exports) module.exports = factory();
  else root.COSYHubCore = factory();
})(typeof self !== 'undefined' ? self : this, function () {
  'use strict';

  var tokens = function (value) { return String(value || '').split(/\s+/).filter(Boolean); };

  // Card filter data, read from a card's attributes (strings, exactly as stored in the HTML).
  function cardFromAttributes(attrs) {
    var subcategories = [];
    try { subcategories = JSON.parse(attrs.subcategories || '[]'); } catch (e) { subcategories = []; }
    return {
      players: tokens(attrs.players),
      skill: attrs.skill || '',
      categories: tokens(attrs.categories),
      subcategories: subcategories,
      modes: tokens(attrs.modes),
      formats: tokens(attrs.formats),
      levels: tokens(attrs.levels),
      audiences: tokens(attrs.audiences),
    };
  }

  // Attribute strings the hub stores on a card for a game from data/game-taxonomy.json.
  function taxonomyCardAttributes(game) {
    var subcategories = {};
    Object.keys(game.subcategoryMappings || {}).forEach(function (key) {
      game.subcategoryMappings[key].forEach(function (label) { subcategories[label] = true; });
    });
    return {
      gameId: game.id,
      categories: game.categories.join(' '),
      levels: game.levels.join(' '),
      audiences: game.audiences.join(' '),
      modes: game.modes.join(' '),
      formats: game.formats.join(' '),
      subcategories: JSON.stringify(Object.keys(subcategories)),
    };
  }

  var ALL = 'all';
  var pick = function (value) { return value === undefined || value === null || value === '' ? ALL : value; };

  // selection: { players, skill, category, subcategory, level, audience, mode, format }; missing means "all".
  function cardMatches(card, selection) {
    var s = selection || {};
    var is = function (value, list) { return pick(value) === ALL || list.indexOf(value) !== -1; };
    return is(s.players, card.players) &&
      (pick(s.skill) === ALL || card.skill === s.skill) &&
      is(s.category, card.categories) &&
      is(s.subcategory, card.subcategories) &&
      is(s.level, card.levels) &&
      is(s.audience, card.audiences) &&
      is(s.mode, card.modes) &&
      is(s.format, card.formats);
  }

  // Deep links accept a game id in kebab-case, snake_case, or one of the game's legacy short aliases
  // (games/index.json -> aliases). Returns "<id>/index.html" or null. Only known ids can be returned.
  function resolveGamePath(games, rawId) {
    var key = String(rawId || '').toLowerCase().trim().replace(/_/g, '-');
    if (!key) return null;
    for (var i = 0; i < games.length; i++) {
      var g = games[i];
      if (g.id === key || (g.aliases || []).indexOf(key) !== -1) return g.id + '/index.html';
    }
    return null;
  }

  // Query string passed from the hub to a game: topic (also accepts theme/deck), lang, level, teacher.
  function buildGameQuery(search, rememberedLang) {
    var params = new URLSearchParams(search || '');
    var out = new URLSearchParams();
    var topic = params.get('topic') || params.get('theme') || params.get('deck');
    if (topic) out.set('topic', topic);
    ['lang', 'level', 'teacher'].forEach(function (key) {
      if (params.has(key)) out.set(key, params.get(key));
      else if (key === 'lang' && rememberedLang) out.set('lang', rememberedLang);
    });
    return out.toString();
  }

  function appendQuery(href, query) {
    return query ? href + (href.indexOf('?') !== -1 ? '&' : '?') + query : href;
  }

  return { cardFromAttributes: cardFromAttributes, taxonomyCardAttributes: taxonomyCardAttributes, cardMatches: cardMatches,
           resolveGamePath: resolveGamePath, buildGameQuery: buildGameQuery, appendQuery: appendQuery };
});
