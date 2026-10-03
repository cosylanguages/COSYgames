(function() {
  'use strict';

  // Synchronously at script load, process ?teacher=1 or ?teacher=0
  try {
    if (typeof window !== 'undefined' && window.location && window.location.search) {
      const urlParams = new URLSearchParams(window.location.search);
      const teacherParam = urlParams.get('teacher');
      if (teacherParam === '1') {
        localStorage.setItem('cosy_teacher_mode', '1');
      } else if (teacherParam === '0') {
        localStorage.removeItem('cosy_teacher_mode');
      }
    }
  } catch (e) {
    // Catch restricted localStorage errors
  }

  window.COSYTeacherMode = {
    isOn: function() {
      try {
        if (typeof window !== 'undefined' && window.location && window.location.search) {
          const urlParams = new URLSearchParams(window.location.search);
          if (urlParams.get('teacher') === '1') {
            return true;
          }
        }
        if (typeof localStorage !== 'undefined') {
          return localStorage.getItem('cosy_teacher_mode') === '1';
        }
      } catch (e) {
        // Fallback check on URL parameter
        try {
          if (typeof window !== 'undefined' && window.location && window.location.search) {
            return new URLSearchParams(window.location.search).get('teacher') === '1';
          }
        } catch (err) {}
      }
      return false;
    },
    set: function(enabled) {
      try {
        if (typeof localStorage !== 'undefined') {
          if (enabled) {
            localStorage.setItem('cosy_teacher_mode', '1');
          } else {
            localStorage.removeItem('cosy_teacher_mode');
          }
        }
      } catch (e) {}
    }
  };

  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    document.body.classList.toggle('theme-dark', theme === 'dark');
  }
  function initTheme() {
    let savedTheme = 'light';
    try {
      savedTheme = localStorage.getItem('cosy_theme') || 'light';
    } catch (e) {}
    applyTheme(savedTheme);
  }
  window.toggleCosyGamesTheme = function() {
    let current = 'light';
    try {
      current = localStorage.getItem('cosy_theme') || 'light';
    } catch (e) {}
    const next = current === 'dark' ? 'light' : 'dark';
    try {
      localStorage.setItem('cosy_theme', next);
    } catch (e) {}
    applyTheme(next);
  };

  function initNavContextSwitcher() {
    if (!window.COSYTeacherMode || !window.COSYTeacherMode.isOn()) {
      return;
    }
    if (typeof window !== 'undefined' && window.ViewContext && typeof window.ViewContext.renderSwitcher === 'function') {
      const target = document.querySelector('.cg-nav-right') || document.querySelector('.cg-header-nav') || document.querySelector('.cg-nav');
      if (target && !target.querySelector('.cosy-context-switcher-wrapper')) {
        window.ViewContext.renderSwitcher(target);
      }
    }
  }

  window.setLanguage = function(lang) {
    if (!lang) return;
    try {
      localStorage.setItem('cosy_ui_lang', lang);
    } catch (e) {}
    const selects = document.querySelectorAll('.cosy-lang-select, #cosy-ui-lang-switcher');
    selects.forEach(select => { select.value = lang; });
    document.documentElement.setAttribute('lang', lang);
    if (typeof window.applyI18n === 'function') {
      window.applyI18n(lang);
    }
  };

  function initUiLanguage() {
    let savedLang = 'en';
    try {
      savedLang = localStorage.getItem('cosy_ui_lang') || 'en';
    } catch (e) {}
    window.setLanguage(savedLang);
  }

  document.addEventListener('DOMContentLoaded', function() {
    initTheme();
    initUiLanguage();
    initNavContextSwitcher();
  });
})();
