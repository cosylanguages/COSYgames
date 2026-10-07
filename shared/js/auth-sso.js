(function() {
  'use strict';

  var CONFIG = { supabaseUrl: '', anonKey: '', ssoOrigins: [] };

  function getConfig() {
    var url = (typeof window !== 'undefined' && window.COSY_SUPABASE_URL) || CONFIG.supabaseUrl || '';
    var key = (typeof window !== 'undefined' && window.COSY_SUPABASE_ANON_KEY) || CONFIG.anonKey || '';
    var origins = (typeof window !== 'undefined' && window.COSY_SSO_ORIGINS) || CONFIG.ssoOrigins || [];
    return { supabaseUrl: url, anonKey: key, ssoOrigins: origins };
  }

  function isConfigured() {
    var cfg = getConfig();
    if (!cfg.supabaseUrl || typeof cfg.supabaseUrl !== 'string') return false;
    if (!cfg.anonKey || typeof cfg.anonKey !== 'string') return false;
    if (!/^https:\/\/[a-z0-9-]+\.supabase\.co$/i.test(cfg.supabaseUrl)) return false;
    if (cfg.anonKey.trim() === '') return false;
    if (cfg.supabaseUrl.indexOf('xyzcompany') !== -1 || cfg.anonKey.indexOf('xyzcompany') !== -1) return false;
    if (cfg.supabaseUrl === 'public-anon-key' || cfg.anonKey === 'public-anon-key') return false;
    return true;
  }

  var supabaseClient = null;
  var loadPromise = null;

  function getClient() {
    if (!isConfigured()) return Promise.resolve(null);
    if (supabaseClient) return Promise.resolve(supabaseClient);
    if (typeof window !== 'undefined' && window.supabase && typeof window.supabase.createClient === 'function') {
      try {
        var cfg = getConfig();
        supabaseClient = window.supabase.createClient(cfg.supabaseUrl, cfg.anonKey);
        return Promise.resolve(supabaseClient);
      } catch (e) {
        console.warn('Failed to initialize Supabase client:', e);
        return Promise.resolve(null);
      }
    }
    if (loadPromise) return loadPromise;

    if (typeof document === 'undefined') {
      return Promise.resolve(null);
    }

    loadPromise = new Promise(function(resolve) {
      var script = document.createElement('script');
      script.src = 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2.49.1/dist/umd/supabase.js';
      script.integrity = 'sha384-tuevtT+97g9yLeuT/m52ejUJbc0hzsN6MPLiQEccySreiGjrcgk2tMBJR7/l6HGM';
      script.crossOrigin = 'anonymous';
      script.onload = function() {
        if (typeof window !== 'undefined' && window.supabase && typeof window.supabase.createClient === 'function') {
          try {
            var cfg = getConfig();
            supabaseClient = window.supabase.createClient(cfg.supabaseUrl, cfg.anonKey);
            resolve(supabaseClient);
          } catch (e) {
            console.warn('Failed to create Supabase client on load:', e);
            resolve(null);
          }
        } else {
          resolve(null);
        }
      };
      script.onerror = function() {
        loadPromise = null;
        resolve(null);
      };
      var targetParent = document.head || document.body || document.documentElement;
      if (targetParent) {
        targetParent.appendChild(script);
      } else {
        resolve(null);
      }
    });

    return loadPromise;
  }

  function parseHashParams(hashStr) {
    if (!hashStr || typeof hashStr !== 'string') return {};
    var hash = hashStr.indexOf('#') === 0 ? hashStr.substring(1) : hashStr;
    var params = {};
    var pairs = hash.split('&');
    for (var i = 0; i < pairs.length; i++) {
      if (!pairs[i]) continue;
      var pair = pairs[i].split('=');
      if (pair.length === 2) {
        try {
          var key = decodeURIComponent(pair[0]);
          var val = decodeURIComponent(pair[1]);
          params[key] = val;
        } catch (e) {
          // Skip malformed key/value pair
        }
      }
    }
    return params;
  }

  function cleanHash() {
    if (typeof window !== 'undefined' && window.history && typeof window.history.replaceState === 'function') {
      var cleanUrl = window.location.pathname + window.location.search;
      window.history.replaceState(null, document.title, cleanUrl);
    }
  }

  function handleHashAuth() {
    if (!isConfigured()) return Promise.resolve(null);
    if (typeof window === 'undefined' || !window.location || !window.location.hash) return Promise.resolve(null);
    var hashParams = parseHashParams(window.location.hash);
    if (hashParams.access_token && hashParams.refresh_token) {
      return getClient().then(function(client) {
        if (client && client.auth) {
          return client.auth.setSession({
            access_token: hashParams.access_token,
            refresh_token: hashParams.refresh_token
          }).then(function(res) {
            if (res && res.data && res.data.session) {
              window.COSY_SESSION = res.data.session;
              window.COSY_USER = res.data.session.user;
            }
            cleanHash();
            return res;
          }).catch(function(err) {
            console.warn('SSO setSession error:', err);
            cleanHash();
            return null;
          });
        } else {
          cleanHash();
          return null;
        }
      });
    }
    return Promise.resolve(null);
  }

  function loadExistingSession() {
    if (!isConfigured()) return Promise.resolve(null);
    return getClient().then(function(client) {
      if (client && client.auth && typeof client.auth.getSession === 'function') {
        client.auth.getSession().then(function(res) {
          if (res && res.data && res.data.session) {
            window.COSY_SESSION = res.data.session;
            window.COSY_USER = res.data.session.user;
          }
        }).catch(function(err) {
          console.warn('SSO getSession error:', err);
        });

        if (typeof client.auth.onAuthStateChange === 'function') {
          client.auth.onAuthStateChange(function(event, session) {
            if (session) {
              window.COSY_SESSION = session;
              window.COSY_USER = session.user;
            } else {
              window.COSY_SESSION = null;
              window.COSY_USER = null;
            }
          });
        }
      }
      return client;
    });
  }

  function getCurrentSessionTokens() {
    if (typeof window !== 'undefined' && window.COSY_SESSION) {
      return {
        access_token: window.COSY_SESSION.access_token,
        refresh_token: window.COSY_SESSION.refresh_token
      };
    }
    if (supabaseClient && supabaseClient.auth && typeof supabaseClient.auth.getSession === 'function') {
      try {
        var session = supabaseClient.auth.session ? supabaseClient.auth.session() : null;
        if (session && session.access_token && session.refresh_token) {
          return {
            access_token: session.access_token,
            refresh_token: session.refresh_token
          };
        }
      } catch (e) {}
    }
    return null;
  }

  function attachEcosystemLinkInterceptor() {
    if (!isConfigured()) return;
    if (typeof document === 'undefined') return;
    document.addEventListener('click', function(event) {
      if (!isConfigured()) return;
      var target = event.target;
      while (target && target !== document && target.nodeName !== 'A') {
        target = target.parentNode;
      }
      if (!target) return;
      var rawHref = target.getAttribute('href');
      if (!rawHref || rawHref.indexOf('#') === 0 || rawHref.indexOf('javascript:') === 0) return;

      try {
        var base = (typeof window !== 'undefined' && window.location && window.location.href) ? window.location.href : 'https://localhost';
        var url = new URL(rawHref, base);
        if (url.protocol !== 'https:') return;
        if (typeof window !== 'undefined' && window.location && url.origin === window.location.origin) return;

        var cfg = getConfig();
        var origins = Array.isArray(cfg.ssoOrigins) ? cfg.ssoOrigins : [];
        var matched = false;
        for (var i = 0; i < origins.length; i++) {
          if (origins[i] && origins[i].toLowerCase() === url.origin.toLowerCase()) {
            matched = true;
            break;
          }
        }
        if (!matched) return;

        var tokens = getCurrentSessionTokens();
        if (tokens && tokens.access_token && tokens.refresh_token) {
          var hashFragment = 'access_token=' + encodeURIComponent(tokens.access_token) + '&refresh_token=' + encodeURIComponent(tokens.refresh_token);
          if (target.href.indexOf('#') !== -1) {
            target.href = target.href + '&' + hashFragment;
          } else {
            target.href = target.href + '#' + hashFragment;
          }
        }
      } catch (e) {
        // Ignore invalid URL
      }
    }, true);
  }

  function init() {
    if (!isConfigured()) return;
    handleHashAuth();
    loadExistingSession();
    attachEcosystemLinkInterceptor();
  }

  function _resetStateForTesting() {
    supabaseClient = null;
    loadPromise = null;
  }

  if (typeof document !== 'undefined') {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', init);
    } else {
      init();
    }
  }

  var COSYAuth = {
    CONFIG: CONFIG,
    getConfig: getConfig,
    isConfigured: isConfigured,
    getClient: getClient,
    initSupabase: getClient,
    parseHashParams: parseHashParams,
    handleHashAuth: handleHashAuth,
    loadExistingSession: loadExistingSession,
    getCurrentSessionTokens: getCurrentSessionTokens,
    attachEcosystemLinkInterceptor: attachEcosystemLinkInterceptor,
    _resetStateForTesting: _resetStateForTesting
  };

  if (typeof window !== 'undefined') {
    window.COSYAuth = COSYAuth;
  }
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = COSYAuth;
  }
})();
