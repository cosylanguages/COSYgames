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

  document.addEventListener('DOMContentLoaded', function() {
    initTheme();
    initNavContextSwitcher();
  });
})();
