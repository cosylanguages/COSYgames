/* Shared taxonomy-driven filters for the COSYgames hub. */
(function () {
  'use strict';

  const taxonomyUrl = './data/game-taxonomy.json';
  const labelsUrl = './data/game-taxonomy-labels.json'; // interface-language labels; English comes from the taxonomy itself
  const categorySelect = document.getElementById('filter-category');
  const subcategorySelect = document.getElementById('filter-subcategory');
  const levelSelect = document.getElementById('filter-level');
  const audienceSelect = document.getElementById('filter-audience');
  const modeSelect = document.getElementById('filter-mode');
  const formatSelect = document.getElementById('filter-format');
  if (!categorySelect || !subcategorySelect || !levelSelect || !audienceSelect || !modeSelect || !formatSelect) return;

  let labels = null;
  let loadedTaxonomy = null;
  const currentLang = function () { return (document.documentElement.lang || 'en').toLowerCase().slice(0, 2); };

  // Displayed text follows the interface language; option values stay the English ids, so filtering is unaffected.
  function labelFor(kind, key, english) {
    return window.COSYHubCore.taxonomyLabel(labels, kind, key, currentLang(), english);
  }

  function addOptions(select, kind, items) {
    items.forEach(function (item) {
      const option = new Option(labelFor(kind, item.id, item.label), item.id);
      option.dataset.labelKind = kind;
      option.dataset.labelKey = item.id;
      option.dataset.labelEn = item.label;
      select.add(option);
    });
  }

  // Called when the interface language changes
  let lastLang = currentLang();
  function relabel() {
    if (currentLang() === lastLang) return; // nothing changed: never re-render on repeated or self-triggered events
    lastLang = currentLang();
    [categorySelect, levelSelect, audienceSelect, modeSelect, formatSelect].forEach(function (select) {
      Array.from(select.options).forEach(function (option) {
        if (option.dataset.labelKind) option.text = labelFor(option.dataset.labelKind, option.dataset.labelKey, option.dataset.labelEn);
      });
    });
    if (loadedTaxonomy) populateSubcategories(loadedTaxonomy);
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
    // Keep the page's own "All subtopics" option (it carries data-i18n and is translated by i18n.js). Re-creating it would add a
    // node with data-i18n, which makes i18n.js's observer re-apply translations and fire a language event again, in a loop.
    while (subcategorySelect.options.length > 1) subcategorySelect.remove(1);
    const shown = function (label) { return labelFor('subcategories', label, label); };
    Array.from(values).sort(function (a, b) { return shown(a).localeCompare(shown(b), currentLang()); }).forEach(function (label) {
      const option = new Option(shown(label), label);
      subcategorySelect.add(option);
    });
    subcategorySelect.disabled = values.size === 0;
    subcategorySelect.value = Array.from(subcategorySelect.options).some(function (option) {
      return option.value === previous;
    }) ? previous : 'all';
  }

  const loadJson = function (url) {
    return fetch(url).then(function (response) {
      if (!response.ok) throw new Error('Could not load ' + url);
      return response.json();
    });
  };

  // The labels file is optional: without it the filters simply stay in English.
  Promise.all([loadJson(taxonomyUrl), loadJson(labelsUrl).catch(function () { return null; })])
    .then(function (loaded) {
      const taxonomy = loaded[0];
      labels = loaded[1];
      loadedTaxonomy = taxonomy;
      addOptions(categorySelect, 'categories', taxonomy.categories);
      addOptions(levelSelect, 'cefrLevels', taxonomy.cefrLevels);
      addOptions(audienceSelect, 'audiences', taxonomy.audiences);
      addOptions(modeSelect, 'playModes', taxonomy.playModes);
      addOptions(formatSelect, 'playFormats', taxonomy.playFormats);

      const byId = new Map(taxonomy.games.map(function (game) { return [game.id, game]; }));
      document.querySelectorAll('.gc').forEach(function (card) {
        const link = card.querySelector('.gc-link');
        if (!link) return;
        const match = link.getAttribute('href').match(/^([^/]+)\/index\.html/);
        if (!match) return;
        const game = byId.get(match[1]);
        if (!game) return;
        Object.assign(card.dataset, window.COSYHubCore.taxonomyCardAttributes(game));
      });

      populateSubcategories(taxonomy);
      categorySelect.addEventListener('change', function () {
        populateSubcategories(taxonomy);
        refreshExistingFilters();
      });
      [subcategorySelect, levelSelect, audienceSelect, modeSelect, formatSelect].forEach(function (select) {
        select.addEventListener('change', refreshExistingFilters);
      });
      document.addEventListener('cosy:languagechange', relabel);
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