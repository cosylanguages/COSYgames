(function() {
  'use strict';

  function getSupabase() {
    if (typeof window !== 'undefined' && window.COSYAuth && typeof window.COSYAuth.getClient === 'function') {
      return window.COSYAuth.getClient();
    }
    return Promise.resolve(null);
  }

  function getUserRole() {
    if (typeof window === 'undefined') return null;
    if (window.COSY_USER && window.COSY_USER.app_metadata && window.COSY_USER.app_metadata.role) {
      return String(window.COSY_USER.app_metadata.role).toLowerCase();
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

  function decodeEntities(str) {
    if (!str) return '';
    return str
      .replace(/&quot;/g, '"')
      .replace(/&#39;/g, "'")
      .replace(/&#x27;/g, "'")
      .replace(/&lt;/g, '<')
      .replace(/&gt;/g, '>')
      .replace(/&amp;/g, '&');
  }

  function escapeText(str) {
    if (!str) return '';
    return str
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  var ALLOWED_TAGS = {
    b: 1, strong: 1, i: 1, em: 1, u: 1, br: 1,
    span: 1, a: 1, ul: 1, ol: 1, li: 1, p: 1
  };

  function findTagEnd(str, start) {
    var pos = start;
    var len = str.length;
    var inQuote = null;
    while (pos < len) {
      var c = str.charAt(pos);
      if (inQuote) {
        if (c === inQuote) inQuote = null;
      } else {
        if (c === '"' || c === "'") {
          inQuote = c;
        } else if (c === '>') {
          return pos;
        }
      }
      pos++;
    }
    return len;
  }

  function parseHrefAttribute(tagContent) {
    var hrefMatch = tagContent.match(/\bhref\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s>]+))/i);
    if (!hrefMatch) return null;
    return hrefMatch[1] !== undefined ? hrefMatch[1] : (hrefMatch[2] !== undefined ? hrefMatch[2] : hrefMatch[3]);
  }

  function sanitizeHtml(html) {
    if (!html || typeof html !== 'string') return '';

    var i = 0;
    var len = html.length;
    var output = '';
    var openStack = [];

    while (i < len) {
      // 1. HTML Comment <!--
      if (html.substring(i, i + 4) === '<!--') {
        var endComment = html.indexOf('-->', i + 4);
        if (endComment !== -1) {
          i = endComment + 3;
        } else {
          i = len;
        }
        continue;
      }

      // 2. CDATA <![CDATA[
      if (html.substring(i, i + 9).toUpperCase() === '<![CDATA[') {
        var endCdata = html.indexOf(']]>', i + 9);
        if (endCdata !== -1) {
          i = endCdata + 3;
        } else {
          i = len;
        }
        continue;
      }

      // 3. Doctype or processing instruction <! or <?
      if (html.substring(i, i + 2) === '<!' || html.substring(i, i + 2) === '<?') {
        var endDoc = html.indexOf('>', i + 2);
        if (endDoc !== -1) {
          i = endDoc + 1;
        } else {
          i = len;
        }
        continue;
      }

      // 4. Tag check <
      if (html.charAt(i) === '<') {
        // Try to match tag name
        var rest = html.substring(i + 1);
        var tagMatch = rest.match(/^\s*(\/?)\s*([a-zA-Z0-9]+)/);
        if (!tagMatch) {
          // Not a valid tag start, treat '<' as plain text
          output += escapeText(decodeEntities('<'));
          i++;
          continue;
        }

        var isClose = tagMatch[1] === '/';
        var tagName = tagMatch[2].toLowerCase();
        var tagEndPos = findTagEnd(html, i + 1);
        var tagContent = html.substring(i + 1, tagEndPos);
        i = tagEndPos < len ? tagEndPos + 1 : len;

        if (ALLOWED_TAGS[tagName]) {
          if (isClose) {
            if (tagName !== 'br') {
              var matchIdx = -1;
              for (var s = openStack.length - 1; s >= 0; s--) {
                if (openStack[s] === tagName) {
                  matchIdx = s;
                  break;
                }
              }
              if (matchIdx !== -1) {
                while (openStack.length > matchIdx) {
                  var popped = openStack.pop();
                  output += '</' + popped + '>';
                }
              }
            }
          } else {
            if (tagName === 'br') {
              output += '<br>';
            } else if (tagName === 'a') {
              var hrefVal = parseHrefAttribute(tagContent);
              if (hrefVal) {
                var cleanedHref = hrefVal.trim().replace(/[\x00-\x1F\x7F]/g, '');
                var lowerHref = cleanedHref.toLowerCase();
                if (lowerHref.indexOf('https://') === 0 || lowerHref.indexOf('http://') === 0 || lowerHref.indexOf('mailto:') === 0) {
                  output += '<a href="' + escapeText(decodeEntities(cleanedHref)) + '" rel="noopener noreferrer" target="_blank">';
                } else {
                  output += '<a>';
                }
              } else {
                output += '<a>';
              }
              openStack.push('a');
            } else {
              output += '<' + tagName + '>';
              openStack.push(tagName);
            }
          }
        }
        continue;
      }

      // 5. Plain text segment up to next '<'
      var nextTag = html.indexOf('<', i);
      var textSegment = nextTag !== -1 ? html.substring(i, nextTag) : html.substring(i);
      output += escapeText(decodeEntities(textSegment));
      i = nextTag !== -1 ? nextTag : len;
    }

    while (openStack.length > 0) {
      output += '</' + openStack.pop() + '>';
    }

    return output;
  }

  function applyOverrides(overrides) {
    if (!overrides || typeof overrides !== 'object' || typeof document === 'undefined') return;
    var KEY_REGEX = /^[A-Za-z0-9_.-]{1,64}$/;
    var elements = document.querySelectorAll('[data-cms-key]');
    if (!elements || !elements.length) return;

    Object.keys(overrides).forEach(function(key) {
      if (!KEY_REGEX.test(key)) return;
      var rawVal = overrides[key];
      if (typeof rawVal !== 'string') return;

      var sanitized = sanitizeHtml(rawVal.substring(0, 5000));
      if (sanitized.length > 5000) {
        sanitized = sanitizeHtml(sanitized.substring(0, 5000));
      }

      for (var i = 0; i < elements.length; i++) {
        var el = elements[i];
        if (el.getAttribute('data-cms-key') === key) {
          if (el.hasAttribute('data-i18n')) {
            continue;
          }
          el.innerHTML = sanitized;
        }
      }
    });
  }

  function fetchAndApplyOverrides() {
    if (typeof window !== 'undefined' && window.COSYAuth && typeof window.COSYAuth.isConfigured === 'function') {
      if (!window.COSYAuth.isConfigured()) {
        return Promise.resolve(null);
      }
    }
    return getSupabase().then(function(client) {
      if (!client || typeof client.from !== 'function') return null;
      var pathname = getPathname();
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
    });
  }

  var isEditing = false;

  function toggleEditMode(enable) {
    isEditing = typeof enable === 'boolean' ? enable : !isEditing;
    if (typeof document === 'undefined') return;

    var editableElements = document.querySelectorAll('[data-cms-key]:not([data-i18n])');
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
    if (typeof document === 'undefined') return Promise.resolve(null);
    var KEY_REGEX = /^[A-Za-z0-9_.-]{1,64}$/;

    var overrides = {};
    var editableElements = document.querySelectorAll('[data-cms-key]:not([data-i18n])');
    editableElements.forEach(function(el) {
      var key = el.getAttribute('data-cms-key');
      if (key && KEY_REGEX.test(key)) {
        overrides[key] = sanitizeHtml(el.innerHTML);
      }
    });

    if (isEditing) {
      toggleEditMode(false);
    }

    return getSupabase().then(function(client) {
      if (!client || typeof client.from !== 'function') {
        console.warn('CMS Editor: Supabase client unavailable for save.');
        return Promise.resolve(overrides);
      }

      var pathname = getPathname();
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
    });
  }

  function renderToolbar() {
    if (typeof document === 'undefined') return;
    if (typeof window !== 'undefined' && window.COSYAuth && typeof window.COSYAuth.isConfigured === 'function') {
      if (!window.COSYAuth.isConfigured()) return;
    }
    if (!isAuthorized()) return;
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
    if (typeof window !== 'undefined' && window.COSYAuth && typeof window.COSYAuth.isConfigured === 'function') {
      if (!window.COSYAuth.isConfigured()) return;
    }
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
    sanitizeHtml: sanitizeHtml,
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
