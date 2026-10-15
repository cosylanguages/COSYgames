/* Shared taxonomy-driven filters for the COSYgames hub. */
(function () {
  'use strict';

  const taxonomyUrl = './data/game-taxonomy.json';
  const categorySelect = document.getElementById('filter-category');
  const subcategorySelect = document.getElementById('filter-subcategory');
  const levelSelect = document.getElementById('filter-level');
  const audienceSelect = document.getElementById('filter-audience');
  const modeSelect = document.getElementById('filter-mode');
  const formatSelect = document.getElementById('filter-format');
  if (!categorySelect || !subcategorySelect || !levelSelect || !audienceSelect || !modeSelect || !formatSelect) return;

  function addOptions(select, items, getValue, getLabel) {
    items.forEach(function (item) {
      select.add(new Option(getLabel(item), getValue(item)));
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

  function populateSubcategories(taxonomy) {
    const selectedCategory = categorySelect.value;
    const previous = subcategorySelect.value;
    const values = new Set();
    const allowedSubtopics = new Set();
    taxonomy.categories.forEach(function (category) {
      if (selectedCategory === 'all' || category.id === selectedCategory) {
        (category.subcategories || []).forEach(function (label) { allowedSubtopics.add(label); });
      }
    });
    taxonomy.games.forEach(function (game) {
      Object.values(game.subcategoryMappings || {}).flat().forEach(function (label) {
        if (allowedSubtopics.has(label)) values.add(label);
      });
    });
    subcategorySelect.replaceChildren(new Option('All subtopics', 'all'));
    Array.from(values).sort(function (a, b) { return a.localeCompare(b); }).forEach(function (label) {
      subcategorySelect.add(new Option(label, label));
    });
    subcategorySelect.disabled = values.size === 0;
    subcategorySelect.value = Array.from(subcategorySelect.options).some(function (option) {
      return option.value === previous;
    }) ? previous : 'all';
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
      addOptions(formatSelect, taxonomy.playFormats, function (item) { return item.id; }, function (item) { return item.label; });

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
        card.dataset.formats = game.formats.join(' ');
        card.dataset.subcategories = JSON.stringify(Array.from(new Set(Object.values(game.subcategoryMappings || {}).flat())));
      });

      populateSubcategories(taxonomy);
      categorySelect.addEventListener('change', function () {
        populateSubcategories(taxonomy);
        refreshExistingFilters();
      });
      [subcategorySelect, levelSelect, audienceSelect, modeSelect, formatSelect].forEach(function (select) {
        select.addEventListener('change', refreshExistingFilters);
      });
      refreshExistingFilters();
    })
    .catch(function (error) {
      console.error('[COSYgames] Taxonomy filters unavailable:', error);
      [categorySelect, subcategorySelect, levelSelect, audienceSelect, modeSelect, formatSelect].forEach(function (select) {
        select.disabled = true;
      });
      const loadError = document.getElementById('taxonomy-load-error');
      if (loadError) loadError.hidden = false;
    });
})();