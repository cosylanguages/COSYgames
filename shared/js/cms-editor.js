(function() {
  'use strict';

  var SUPABASE_URL = (typeof window !== 'undefined' && window.COSY_SUPABASE_URL) || 'https://xyzcompany.supabase.co';
  var SUPABASE_ANON_KEY = (typeof window !== 'undefined' && window.COSY_SUPABASE_ANON_KEY) || 'public-anon-key';

  var supabaseClient = null;

  function getSupabase() {
    if (supabaseClient) return supabaseClient;
    if (typeof window !== 'undefined' && window.supabase && typeof window.supabase.createClient === 'function') {
      try {
        supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
      } catch (e) {
        console.warn('CMS Editor: Failed to init Supabase client:', e);
      }
    }
    return supabaseClient;
  }

  function getUserRole() {
    if (typeof window === 'undefined') return null;
    if (window.COSY_USER && window.COSY_USER.role) {
      return window.COSY_USER.role.toLowerCase();
    }
    if (window.COSY_USER && window.COSY_USER.app_metadata && window.COSY_USER.app_metadata.role) {
      return window.COSY_USER.app_metadata.role.toLowerCase();
    }
    if (window.COSY_USER && window.COSY_USER.user_metadata && window.COSY_USER.user_metadata.role) {
      return window.COSY_USER.user_metadata.role.toLowerCase();
    }
    return null;
  }

  function isAuthorized() {
    var role = getUserRole();
    return role === 'admin' || role === 'founder' || role === 'owner';
  }

  function getPathname() {
    if (typeof window === 'undefined' || !window.location) return '/';
    return window.location.pathname || '/';
  }

  function applyOverrides(overrides) {
    if (!overrides || typeof overrides !== 'object' || typeof document === 'undefined') return;
    Object.keys(overrides).forEach(function(key) {
      var element = document.querySelector('[data-cms-key="' + key + '"]');
      if (!element && key.indexOf('#') === 0) {
        element = document.querySelector(key);
      }
      if (!element && key.indexOf('.') === 0) {
        element = document.querySelector(key);
      }
      if (element) {
        element.innerHTML = overrides[key];
      }
    });
  }

  function fetchAndApplyOverrides() {
    var client = getSupabase();
    var pathname = getPathname();
    if (!client || typeof client.from !== 'function') return Promise.resolve(null);

    return client
      .from('cms_page_overrides')
      .select('content_overrides')
      .eq('pathname', pathname)
      .maybeSingle()
      .then(function(response) {
        if (response && response.data && response.data.content_overrides) {
          applyOverrides(response.data.content_overrides);
          return response.data.content_overrides;
        }
        return null;
      })
      .catch(function(err) {
        console.warn('CMS Editor: Error fetching page overrides:', err);
        return null;
      });
  }

  var isEditing = false;

  function toggleEditMode(enable) {
    isEditing = typeof enable === 'boolean' ? enable : !isEditing;
    if (typeof document === 'undefined') return;

    var editableElements = document.querySelectorAll('[data-cms-key], h1, h2, h3, p, .hero-tag, [data-i18n]');
    editableElements.forEach(function(el) {
      if (isEditing) {
        el.setAttribute('contenteditable', 'true');
        el.style.outline = '2px dashed #3b82f6';
        el.style.outlineOffset = '2px';
      } else {
        el.removeAttribute('contenteditable');
        el.style.outline = '';
        el.style.outlineOffset = '';
      }
    });

    var editBtn = document.getElementById('cosy-cms-edit-btn');
    if (editBtn) {
      editBtn.textContent = isEditing ? '🛑 Stop Editing' : '✏️ Edit Page Content';
      editBtn.style.background = isEditing ? '#ef4444' : '#2563eb';
    }
  }

  function saveAndPublish() {
    var client = getSupabase();
    var pathname = getPathname();
    if (typeof document === 'undefined') return Promise.resolve(null);

    var overrides = {};
    var editableElements = document.querySelectorAll('[data-cms-key], h1, h2, h3, p, .hero-tag, [data-i18n]');
    editableElements.forEach(function(el, index) {
      var key = el.getAttribute('data-cms-key');
      if (!key) {
        if (el.id) {
          key = '#' + el.id;
        } else {
          key = (el.tagName ? el.tagName.toLowerCase() : 'el') + '_' + index;
          el.setAttribute('data-cms-key', key);
        }
      }
      overrides[key] = el.innerHTML;
    });

    if (isEditing) {
      toggleEditMode(false);
    }

    if (!client || typeof client.from !== 'function') {
      console.warn('CMS Editor: Supabase client unavailable for save.');
      return Promise.resolve(overrides);
    }

    return client
      .from('cms_page_overrides')
      .upsert({
        pathname: pathname,
        content_overrides: overrides,
        updated_at: new Date().toISOString()
      }, { onConflict: 'pathname' })
      .then(function(res) {
        var statusEl = document.getElementById('cosy-cms-status');
        if (statusEl) {
          statusEl.textContent = '✅ Saved & Published Live!';
          setTimeout(function() { statusEl.textContent = ''; }, 3000);
        }
        return res;
      })
      .catch(function(err) {
        console.error('CMS Editor: Failed to save overrides:', err);
        var statusEl = document.getElementById('cosy-cms-status');
        if (statusEl) {
          statusEl.textContent = '❌ Error saving changes';
        }
        return null;
      });
  }

  function renderToolbar() {
    if (typeof document === 'undefined') return;
    if (document.getElementById('cosy-cms-toolbar')) return;

    var toolbar = document.createElement('div');
    toolbar.id = 'cosy-cms-toolbar';
    toolbar.style.cssText = 'position: fixed; bottom: 20px; right: 20px; z-index: 999999; background: #1e293b; color: #fff; padding: 12px 16px; border-radius: 8px; box-shadow: 0 4px 12px rgba(0,0,0,0.3); font-family: system-ui, -apple-system, sans-serif; display: flex; align-items: center; gap: 10px; font-size: 14px;';

    toolbar.innerHTML = [
      '<span style="font-weight:600;">👑 Founder CMS:</span>',
      '<button id="cosy-cms-edit-btn" style="background:#2563eb; color:#fff; border:none; padding:6px 12px; border-radius:4px; cursor:pointer; font-weight:500;">✏️ Edit Page Content</button>',
      '<button id="cosy-cms-save-btn" style="background:#16a34a; color:#fff; border:none; padding:6px 12px; border-radius:4px; cursor:pointer; font-weight:500;">💾 Save & Publish Live</button>',
      '<span id="cosy-cms-status" style="font-size:12px; color:#a7f3d0; margin-left:4px;"></span>'
    ].join('');

    document.body.appendChild(toolbar);

    document.getElementById('cosy-cms-edit-btn').addEventListener('click', function() {
      toggleEditMode();
    });

    document.getElementById('cosy-cms-save-btn').addEventListener('click', function() {
      saveAndPublish();
    });
  }

  function init() {
    fetchAndApplyOverrides().then(function() {
      if (isAuthorized()) {
        renderToolbar();
      }
    });
  }

  if (typeof document !== 'undefined') {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', init);
    } else {
      init();
    }
  }

  var CMSEditor = {
    getSupabase: getSupabase,
    getUserRole: getUserRole,
    isAuthorized: isAuthorized,
    fetchAndApplyOverrides: fetchAndApplyOverrides,
    applyOverrides: applyOverrides,
    toggleEditMode: toggleEditMode,
    saveAndPublish: saveAndPublish,
    renderToolbar: renderToolbar,
    init: init
  };

  if (typeof window !== 'undefined') {
    window.CMSEditor = CMSEditor;
  }
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = CMSEditor;
  }
})();
