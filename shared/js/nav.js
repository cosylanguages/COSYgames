(function() {
  'use strict';
  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    document.body.classList.toggle('theme-dark', theme === 'dark');
  }
  function initTheme() {
    applyTheme(localStorage.getItem('cosy_theme') || 'light');
  }
  window.toggleCosyGamesTheme = function() {
    const current = localStorage.getItem('cosy_theme') || 'light';
    const next = current === 'dark' ? 'light' : 'dark';
    localStorage.setItem('cosy_theme', next);
    applyTheme(next);
  };

  function initNavContextSwitcher() {
    if (typeof window !== 'undefined' && window.ViewContext && typeof window.ViewContext.renderSwitcher === 'function') {
      const target = document.querySelector('.cg-nav-right') || document.querySelector('.cg-header-nav') || document.querySelector('.cg-nav');
      if (target && !target.querySelector('.cosy-context-switcher-wrapper')) {
        window.ViewContext.renderSwitcher(target);
      }
    }
  }

  window.setLanguage = function(lang) {
    if (!lang) return;
    localStorage.setItem('cosy_ui_lang', lang);
    const selects = document.querySelectorAll('.cosy-lang-select, #cosy-ui-lang-switcher');
    selects.forEach(select => { select.value = lang; });
    document.documentElement.setAttribute('lang', lang);
  };

  function initUiLanguage() {
    const savedLang = localStorage.getItem('cosy_ui_lang') || 'en';
    window.setLanguage(savedLang);
  }

  document.addEventListener('DOMContentLoaded', function() {
    initTheme();
    initUiLanguage();
    initNavContextSwitcher();
  });
})();
