/* Shared taxonomy-driven filters for the COSYgames hub. */
(function () {
  'use strict';

  const taxonomyUrl = './data/game-taxonomy.json';
  const categorySelect = document.getElementById('filter-category');
  const subcategorySelect = document.getElementById('filter-subcategory');
  const levelSelect = document.getElementById('filter-level');
  const audienceSelect = document.getElementById('filter-audience');
  const modeSelect = document.getElementById('filter-mode');
  if (!categorySelect || !subcategorySelect || !levelSelect || !audienceSelect || !modeSelect) return;

  const labels = {
    'young-learners': 'Young learners',
    children: 'Children',
    teens: 'Teenagers',
    adults: 'Adults',
    'mixed-ages': 'Mixed ages',
    solo: 'Solo',
    pairs: 'Pairs',
    'mini-group': 'Mini group',
    'big-group': 'Big group',
    online: 'Online',
    offline: 'Offline'
  };

  function addOptions(select, items, getValue, getLabel) {
    items.forEach(function (item) {
      const option = document.createElement('option');
      option.value = getValue(item);
      option.textContent = getLabel(item);
      select.appendChild(option);
    });
  }

  function refreshExistingFilters() {
    if (typeof window.updateGameHubFilters === 'function') {
      window.updateGameHubFilters();
      return;
    }
    const active = document.querySelector('.fpill.active[data-group="players"]');
    if (active) active.click();
  }

  function populateSubcategories(taxonomy, gameById) {
    const selectedCategory = categorySelect.value;
    const previous = subcategorySelect.value;
    const values = new Set();
    taxonomy.games.forEach(function (game) {
      if (selectedCategory !== 'all' && !game.categories.includes(selectedCategory)) return;
      (game.subcategories || []).forEach(function (label) { values.add(label); });
    });
    subcategorySelect.replaceChildren(new Option('All subtopics', 'all'));
    Array.from(values).sort(function (a, b) { return a.localeCompare(b); }).forEach(function (label) {
      subcategorySelect.add(new Option(label, label));
    });
    subcategorySelect.disabled = values.size === 0;
    if (Array.from(subcategorySelect.options).some(function (option) { return option.value === previous; })) {
      subcategorySelect.value = previous;
    } else {
      subcategorySelect.value = 'all';
    }
  }

  fetch(taxonomyUrl)
    .then(function (response) {
      if (!response.ok) throw new Error('Could not load game taxonomy');
      return response.json();
    })
    .then(function (taxonomy) {
      addOptions(categorySelect, taxonomy.categories, function (item) { return item.id; }, function (item) { return item.label; });
      addOptions(levelSelect, taxonomy.cefrLevels, function (item) { return item.id; }, function (item) { return item.label; });
      addOptions(audienceSelect, taxonomy.audiences, function (item) { return item.id; }, function (item) { return item.label; });
      addOptions(modeSelect, taxonomy.playModes, function (item) { return item.id; }, function (item) { return item.label; });

      const byId = new Map(taxonomy.games.map(function (game) { return [game.id, game]; }));
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
        card.dataset.audiences = game.audiences.join(' ');
        card.dataset.modes = game.modes.join(' ');
        card.dataset.subcategories = JSON.stringify(game.subcategories || []);
      });

      populateSubcategories(taxonomy, byId);
      categorySelect.addEventListener('change', function () {
        populateSubcategories(taxonomy, byId);
        refreshExistingFilters();
      });
      [subcategorySelect, levelSelect, audienceSelect, modeSelect].forEach(function (select) {
        select.addEventListener('change', refreshExistingFilters);
      });
      refreshExistingFilters();
    })
    .catch(function (error) {
      console.error('[COSYgames] Taxonomy filters unavailable:', error);
      [categorySelect, subcategorySelect, levelSelect, audienceSelect, modeSelect].forEach(function (select) {
        select.disabled = true;
      });
    });
})();