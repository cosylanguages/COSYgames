/**
 * ViewContext helper for COSYgames Visual Genome
 * Sets document.documentElement.dataset.context to "projector", "phone", or "online".
 */
(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    define([], factory);
  } else if (typeof module === 'object' && module.exports) {
    module.exports = factory();
  } else {
    root.ViewContext = factory();
  }
}(typeof self !== 'undefined' ? self : this, function () {
  'use strict';

  function isIframe() {
    try {
      return window.self !== window.top;
    } catch (e) {
      return true;
    }
  }

  function getQueryParam(param) {
    try {
      if (typeof window === 'undefined' || !window.location) return null;
      const urlParams = new URLSearchParams(window.location.search);
      return urlParams.get(param);
    } catch (e) {
      return null;
    }
  }

  function determineContext() {
    // 1. Manual override via data-context query param
    const override = getQueryParam('data-context');
    if (override) {
      const normalized = override.trim().toLowerCase();
      if (['projector', 'phone', 'online'].includes(normalized)) {
        return normalized;
      }
    }

    // 2. Viewport width < 480px -> phone
    if (typeof window !== 'undefined' && window.innerWidth < 480) {
      return 'phone';
    }

    // 3. URL param ?mode=online or iframe embed -> online
    const mode = getQueryParam('mode');
    if ((mode && mode.trim().toLowerCase() === 'online') || isIframe()) {
      return 'online';
    }

    // 4. Fallback -> projector
    return 'projector';
  }

  function applyContext(context) {
    const targetContext = context || determineContext();
    if (typeof document !== 'undefined' && document.documentElement) {
      document.documentElement.dataset.context = targetContext;
    }
    return targetContext;
  }

  const ViewContext = {
    determineContext: determineContext,
    applyContext: applyContext,
    getContext: function () {
      if (typeof document !== 'undefined' && document.documentElement && document.documentElement.dataset.context) {
        return document.documentElement.dataset.context;
      }
      return determineContext();
    },
    setContext: function (context) {
      return applyContext(context);
    },
    init: function () {
      const current = applyContext();
      if (typeof window !== 'undefined') {
        window.addEventListener('resize', function () {
          // Do not override if manual query param data-context is present
          if (!getQueryParam('data-context')) {
            applyContext();
          }
        });
      }
      return current;
    }
  };

  // Auto-initialize when loaded in browser
  if (typeof document !== 'undefined') {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', function () {
        ViewContext.init();
      });
    } else {
      ViewContext.init();
    }
  }

  return ViewContext;
}));
