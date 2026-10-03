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

  const STORAGE_KEY = 'cosy_view_context';

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

  function isTeacherMode() {
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
      try {
        if (typeof window !== 'undefined' && window.location && window.location.search) {
          return new URLSearchParams(window.location.search).get('teacher') === '1';
        }
      } catch (err) {}
    }
    return false;
  }

  function getSavedContext() {
    try {
      if (!isTeacherMode()) {
        if (typeof localStorage !== 'undefined') {
          localStorage.removeItem(STORAGE_KEY);
        }
        return null;
      }
      if (typeof localStorage !== 'undefined') {
        const saved = localStorage.getItem(STORAGE_KEY);
        if (saved && ['projector', 'phone', 'online'].includes(saved.trim().toLowerCase())) {
          return saved.trim().toLowerCase();
        }
      }
    } catch (e) {
      // localStorage may be restricted in sandboxed iframe
    }
    return null;
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

    // 2. Saved preference in localStorage
    const saved = getSavedContext();
    if (saved) {
      return saved;
    }

    // 3. Viewport width < 480px -> phone
    if (typeof window !== 'undefined' && window.innerWidth < 480) {
      return 'phone';
    }

    // 4. URL param ?mode=online or iframe embed -> online
    const mode = getQueryParam('mode');
    if ((mode && mode.trim().toLowerCase() === 'online') || isIframe()) {
      return 'online';
    }

    // 5. Fallback -> projector
    return 'projector';
  }

  function applyContext(context, savePreference) {
    const targetContext = context || determineContext();

    if (savePreference && typeof localStorage !== 'undefined') {
      try {
        localStorage.setItem(STORAGE_KEY, targetContext);
      } catch (e) {}
    }

    if (typeof document !== 'undefined' && document.documentElement) {
      const currentContext = document.documentElement.dataset.context;
      document.documentElement.dataset.context = targetContext;

      if (currentContext !== targetContext && typeof window !== 'undefined') {
        try {
          window.dispatchEvent(new CustomEvent('viewcontextchanged', {
            detail: { context: targetContext, previousContext: currentContext }
          }));
        } catch (e) {}
      }

      updateSwitcherSelects(targetContext);
    }
    return targetContext;
  }

  function updateSwitcherSelects(context) {
    if (typeof document === 'undefined') return;
    const selects = document.querySelectorAll('.cosy-context-select');
    selects.forEach(function (select) {
      if (select.value !== context) {
        select.value = context;
      }
    });
  }

  function renderSwitcher(container) {
    if (typeof document === 'undefined') return null;
    let parent = null;
    if (typeof container === 'string') {
      parent = document.querySelector(container);
    } else if (container && container.nodeType === 1) {
      parent = container;
    }

    if (!parent) return null;

    const currentContext = ViewContext.getContext();

    const wrapper = document.createElement('div');
    wrapper.className = 'cosy-context-switcher-wrapper';
    wrapper.title = 'Display mode: adjusts sizes for projector, online lessons or phones';

    const teacherBtn = document.createElement('button');
    teacherBtn.className = 'cosy-teacher-badge';
    teacherBtn.type = 'button';
    teacherBtn.setAttribute('aria-label', 'Teacher mode is on. Click to turn it off');
    teacherBtn.textContent = '🎓';
    teacherBtn.addEventListener('click', function () {
      try {
        if (typeof window !== 'undefined' && window.COSYTeacherMode && typeof window.COSYTeacherMode.set === 'function') {
          window.COSYTeacherMode.set(false);
        } else if (typeof localStorage !== 'undefined') {
          localStorage.removeItem('cosy_teacher_mode');
        }
      } catch (e) {}
      try {
        if (typeof localStorage !== 'undefined') {
          localStorage.removeItem(STORAGE_KEY);
        }
      } catch (e) {}
      if (typeof window !== 'undefined' && window.location) {
        window.location.reload();
      }
    });

    const select = document.createElement('select');
    select.className = 'cosy-context-select';
    select.setAttribute('aria-label', 'Display mode');

    const options = [
      { value: 'projector', label: '📽️ Projector' },
      { value: 'online', label: '💻 Online' },
      { value: 'phone', label: '📱 Phone' }
    ];

    options.forEach(function (opt) {
      const option = document.createElement('option');
      option.value = opt.value;
      option.textContent = opt.label;
      if (opt.value === currentContext) {
        option.selected = true;
      }
      select.appendChild(option);
    });

    select.addEventListener('change', function (e) {
      ViewContext.setContext(e.target.value, true);
    });

    wrapper.appendChild(teacherBtn);
    wrapper.appendChild(select);
    parent.appendChild(wrapper);
    return wrapper;
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
    getMode: function () {
      return this.getContext();
    },
    setContext: function (context, savePreference) {
      return applyContext(context, savePreference !== false);
    },
    renderSwitcher: renderSwitcher,
    init: function () {
      const current = applyContext(null, false);
      if (typeof window !== 'undefined') {
        window.addEventListener('resize', function () {
          // Do not override if manual query param data-context or saved context is present
          if (!getQueryParam('data-context') && !getSavedContext()) {
            applyContext(null, false);
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
