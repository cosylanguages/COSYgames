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
  document.addEventListener('DOMContentLoaded', initTheme);
})();
