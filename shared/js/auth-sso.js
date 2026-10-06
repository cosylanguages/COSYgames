(function() {
  'use strict';

  var SUPABASE_URL = (typeof window !== 'undefined' && window.COSY_SUPABASE_URL) || 'https://xyzcompany.supabase.co';
  var SUPABASE_ANON_KEY = (typeof window !== 'undefined' && window.COSY_SUPABASE_ANON_KEY) || 'public-anon-key';

  var supabaseClient = null;

  function initSupabase() {
    if (supabaseClient) return supabaseClient;
    if (typeof window !== 'undefined' && window.supabase && typeof window.supabase.createClient === 'function') {
      try {
        supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
      } catch (e) {
        console.warn('Failed to initialize Supabase client:', e);
      }
    }
    return supabaseClient;
  }

  function parseHashParams(hashStr) {
    if (!hashStr) return {};
    var hash = hashStr.indexOf('#') === 0 ? hashStr.substring(1) : hashStr;
    var params = {};
    var pairs = hash.split('&');
    for (var i = 0; i < pairs.length; i++) {
      var pair = pairs[i].split('=');
      if (pair.length === 2) {
        params[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1]);
      }
    }
    return params;
  }

  function handleHashAuth() {
    if (typeof window === 'undefined' || !window.location || !window.location.hash) return;
    var hashParams = parseHashParams(window.location.hash);
    if (hashParams.access_token && hashParams.refresh_token) {
      var client = initSupabase();
      if (client && client.auth) {
        client.auth.setSession({
          access_token: hashParams.access_token,
          refresh_token: hashParams.refresh_token
        }).then(function(res) {
          if (res && res.data && res.data.session) {
            window.COSY_SESSION = res.data.session;
            window.COSY_USER = res.data.session.user;
          }
        }).catch(function(err) {
          console.warn('SSO setSession error:', err);
        });
      }

      // Clean the URL hash fragment seamlessly
      if (window.history && typeof window.history.replaceState === 'function') {
        var cleanUrl = window.location.pathname + window.location.search;
        window.history.replaceState(null, document.title, cleanUrl);
      }
    }
  }

  function loadExistingSession() {
    var client = initSupabase();
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
  }

  function getCurrentSessionTokens() {
    if (typeof window !== 'undefined' && window.COSY_SESSION) {
      return {
        access_token: window.COSY_SESSION.access_token,
        refresh_token: window.COSY_SESSION.refresh_token
      };
    }
    var client = initSupabase();
    if (client && client.auth && typeof client.auth.getSession === 'function') {
      try {
        var session = client.auth.session ? client.auth.session() : null;
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
    if (typeof document === 'undefined') return;
    document.addEventListener('click', function(event) {
      var target = event.target;
      while (target && target !== document && target.nodeName !== 'A') {
        target = target.parentNode;
      }
      if (!target || !target.href) return;

      var href = target.getAttribute('href') || '';
      if (href.indexOf('COSY') !== -1 || (target.hostname && target.hostname.indexOf('cosy') !== -1)) {
        var tokens = getCurrentSessionTokens();
        if (tokens && tokens.access_token && tokens.refresh_token) {
          var hashFragment = 'access_token=' + encodeURIComponent(tokens.access_token) + '&refresh_token=' + encodeURIComponent(tokens.refresh_token);
          if (href.indexOf('#') !== -1) {
            target.href = href + '&' + hashFragment;
          } else {
            target.href = href + '#' + hashFragment;
          }
        }
      }
    }, true);
  }

  function init() {
    initSupabase();
    handleHashAuth();
    loadExistingSession();
    attachEcosystemLinkInterceptor();
  }

  if (typeof document !== 'undefined') {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', init);
    } else {
      init();
    }
  }

  var COSYAuth = {
    initSupabase: initSupabase,
    parseHashParams: parseHashParams,
    handleHashAuth: handleHashAuth,
    loadExistingSession: loadExistingSession,
    getCurrentSessionTokens: getCurrentSessionTokens,
    attachEcosystemLinkInterceptor: attachEcosystemLinkInterceptor
  };

  if (typeof window !== 'undefined') {
    window.COSYAuth = COSYAuth;
  }
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = COSYAuth;
  }
})();
