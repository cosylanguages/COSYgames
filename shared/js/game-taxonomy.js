/* Shared taxonomy-driven filters for the COSYgames hub. */
(function () {
  'use strict';

  const taxonomyUrl = './data/game-taxonomy.json';
  const categorySelect = document.getElementById('filter-category');
  const levelSelect = document.getElementById('filter-level');
  if (!categorySelect || !levelSelect) return;

  function refreshExistingFilters() {
    const active = document.querySelector('.fpill.active[data-group="players"]');
    if (active) active.click();
  }

  fetch(taxonomyUrl)
    .then(function (response) {
      if (!response.ok) throw new Error('Could not load game taxonomy');
      return response.json();
    })
    .then(function (taxonomy) {
      taxonomy.categories.forEach(function (category) {
        const option = document.createElement('option');
        option.value = category.id;
        option.textContent = category.label;
        categorySelect.appendChild(option);
      });

      taxonomy.cefrLevels.forEach(function (level) {
        const option = document.createElement('option');
        option.value = level.id;
        option.textContent = level.label;
        levelSelect.appendChild(option);
      });

      const byId = new Map(taxonomy.games.map(function (game) {
        return [game.id, game];
      }));

      document.querySelectorAll('.gc').forEach(function (card) {
        const link = card.querySelector('.gc-link');
        if (!link) return;
        const match = link.getAttribute('href').match(/^([^/]+)\/index\.html/);
        if (!match) return;
        const game = byId.get(match[1]);
        if (!game) return;
        card.dataset.gameId = game.id;
        card.dataset.categories = game.categories.join(' ');
        card.dataset.levels = game.levels.join(' ');
      });

      categorySelect.addEventListener('change', refreshExistingFilters);
      levelSelect.addEventListener('change', refreshExistingFilters);
      refreshExistingFilters();
    })
    .catch(function (error) {
      console.error('[COSYgames] Taxonomy filters unavailable:', error);
      categorySelect.disabled = true;
      levelSelect.disabled = true;
    });
})();
