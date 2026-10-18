/* Wiring of the COSYgames hub page: filter pills, section counts, deep links and link parameters.
 * The logic itself lives in hub-core.js. */
(function () {
  'use strict';
  var core = window.COSYHubCore;
  if (!core) return;

  var rememberedLang = new URLSearchParams(window.location.search).get('lang');
  var gamesPromise = null;
  function loadGames() {
    if (!gamesPromise) {
      gamesPromise = fetch('./games/index.json').then(function (r) {
        if (!r.ok) throw new Error('Could not load games/index.json');
        return r.json();
      });
    }
    return gamesPromise;
  }

  // Opens a game by id or alias, keeping lang/level/topic/teacher. Resolves true if a game was opened.
  window.openGame = function (id) {
    return loadGames().then(function (games) {
      var path = core.resolveGamePath(games, id);
      if (!path) return false;
      location.href = core.appendQuery(path, core.buildGameQuery(window.location.search, rememberedLang));
      return true;
    }).catch(function () { return false; });
  };

  document.addEventListener('DOMContentLoaded', function () {
    var query = core.buildGameQuery(window.location.search, rememberedLang);
    if (query) {
      document.querySelectorAll('a.gc-link').forEach(function (a) {
        a.setAttribute('href', core.appendQuery(a.getAttribute('href'), query));
      });
    }

    var state = { players: 'all', skill: 'all' };
    var selectValue = function (id) { var el = document.getElementById(id); return el ? el.value : 'all'; };

    function updateFilters() {
      var totalVisible = 0;
      var selection = {
        players: state.players, skill: state.skill,
        category: selectValue('filter-category'), subcategory: selectValue('filter-subcategory'),
        level: selectValue('filter-level'), audience: selectValue('filter-audience'),
        mode: selectValue('filter-mode'), format: selectValue('filter-format'),
      };
      ['grid-speaking', 'grid-mystery', 'grid-vocab'].forEach(function (gridId) {
        var grid = document.getElementById(gridId);
        if (!grid) return;
        var title = grid.previousElementSibling;
        var visibleCount = 0;
        grid.querySelectorAll('.gc').forEach(function (card) {
          var data = core.cardFromAttributes({
            players: card.getAttribute('data-players'), skill: card.getAttribute('data-skill'),
            categories: card.dataset.categories, subcategories: card.dataset.subcategories, modes: card.dataset.modes,
            formats: card.dataset.formats, levels: card.dataset.levels, audiences: card.dataset.audiences,
          });
          if (core.cardMatches(data, selection)) {
            card.removeAttribute('hidden');
            visibleCount++;
            totalVisible++;
          } else {
            card.setAttribute('hidden', '');
          }
        });
        if (title) {
          var countSpan = title.querySelector('.sec-count');
          if (countSpan) countSpan.textContent = visibleCount + ' game' + (visibleCount === 1 ? '' : 's');
          if (visibleCount === 0) { title.setAttribute('hidden', ''); grid.setAttribute('hidden', ''); }
          else { title.removeAttribute('hidden'); grid.removeAttribute('hidden'); }
        }
      });
      var emptyState = document.getElementById('taxonomy-empty-state');
      if (emptyState) emptyState.hidden = totalVisible > 0;
    }
    window.updateGameHubFilters = updateFilters;

    document.querySelectorAll('.fpill').forEach(function (pill) {
      pill.addEventListener('click', function () {
        var group = pill.getAttribute('data-group');
        var filter = pill.getAttribute('data-f');
        if (!group || !filter) return;
        state[group] = filter;
        document.querySelectorAll('.fpill[data-group="' + group + '"]').forEach(function (p) {
          var isActive = p === pill;
          p.classList.toggle('active', isActive);
          p.setAttribute('aria-pressed', isActive ? 'true' : 'false');
        });
        updateFilters();
      });
    });

    var gameParam = new URLSearchParams(window.location.search).get('game');
    if (gameParam) window.openGame(gameParam);
  });
})();
