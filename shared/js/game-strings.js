(function(root) {
  'use strict';

  var COSYGameStrings = root.COSYGameStrings || {};
  root.COSYGameStrings = COSYGameStrings;

  function getUiLang(overrideLang) {
    if (overrideLang && typeof overrideLang === 'string') {
      return overrideLang.toLowerCase().slice(0, 2);
    }
    var lang = 'en';
    try {
      if (typeof localStorage !== 'undefined' && localStorage.getItem) {
        lang = localStorage.getItem('cosy_ui_lang') || 'en';
      }
    } catch(e) {}
    return (lang || 'en').toLowerCase().slice(0, 2);
  }

  COSYGameStrings.forGame = function(gameId) {
    return function T(key, params, fallbackEnglish) {
      var uiLang = getUiLang();
      var entry;

      if (key && typeof key === 'string' && key.indexOf('common.') === 0) {
        var commonObj = COSYGameStrings['_common'] || {};
        var commonStrings = commonObj.strings || {};
        entry = commonStrings[key];
      } else {
        var gameObj = COSYGameStrings[gameId] || {};
        var strings = gameObj.strings || {};
        entry = strings[key];
      }

      var val;
      if (entry && typeof entry === 'object') {
        if (typeof entry[uiLang] === 'string' && entry[uiLang] !== '') {
          val = entry[uiLang];
        } else if (typeof entry.en === 'string' && entry.en !== '') {
          val = entry.en;
        }
      }

      if (val === undefined || val === null) {
        val = (fallbackEnglish !== undefined && fallbackEnglish !== null) ? fallbackEnglish : key;
      }

      if (params && typeof params === 'object') {
        val = String(val).replace(/\{([a-zA-Z0-9_]+)\}/g, function(match, name) {
          return Object.prototype.hasOwnProperty.call(params, name) && params[name] !== undefined
            ? String(params[name])
            : match;
        });
      }

      return String(val);
    };
  };

  root.applyGameStrings = function(lang) {
    if (typeof document === 'undefined') return;
    var path = '';
    try {
      path = (root.location && root.location.pathname) ? root.location.pathname : '';
    } catch(e) {}

    var segments = path.split('/').filter(Boolean);
    var gameId = null;
    for (var i = 0; i < segments.length; i++) {
      var seg = segments[i];
      if (Object.prototype.hasOwnProperty.call(COSYGameStrings, seg)) {
        gameId = seg;
        break;
      }
    }

    if (!gameId) return;

    var uiLang = getUiLang(lang);
    var gameObj = COSYGameStrings[gameId] || {};
    var strings = gameObj.strings || {};

    var elements = document.querySelectorAll('[data-gs]');
    elements.forEach(function(el) {
      var key = el.getAttribute('data-gs');
      if (!key) return;
      var entry;
      if (key.indexOf('common.') === 0) {
        var commonObj = COSYGameStrings['_common'] || {};
        var commonStrings = commonObj.strings || {};
        entry = commonStrings[key];
      } else {
        entry = strings[key];
      }
      var val;
      if (entry && typeof entry === 'object') {
        if (typeof entry[uiLang] === 'string' && entry[uiLang] !== '') {
          val = entry[uiLang];
        } else if (typeof entry.en === 'string' && entry.en !== '') {
          val = entry.en;
        }
      }
      if (val !== undefined && val !== null) {
        el.textContent = val;
      }
    });
  };
})(typeof window !== 'undefined' ? window : this);
