// COSY game scores and leaderboard (localStorage-based + optional Supabase user_scores sync)

const COSYScores = {
  key: 'cosy_game_scores',
  optInKey: 'cosy_leaderboard_opt_in',

  supabaseUrl: (typeof window !== 'undefined' && window.COSY_SUPABASE_URL) || '',
  supabaseAnonKey: (typeof window !== 'undefined' && window.COSY_SUPABASE_ANON_KEY) || '',

  getOptIn() {
    try {
      return localStorage.getItem(this.optInKey) === 'true';
    } catch(e) {
      return false;
    }
  },

  setOptIn(enabled) {
    try {
      localStorage.setItem(this.optInKey, enabled ? 'true' : 'false');
    } catch(e) {}
  },

  getSupabaseSession() {
    if (typeof window === 'undefined') return null;

    if (window.supabaseClient && window.supabaseClient.auth) {
      const session = typeof window.supabaseClient.auth.session === 'function' ? window.supabaseClient.auth.session() : null;
      if (session && (session.user || session.access_token)) return session;
    }

    try {
      for (let i = 0; i < localStorage.length; i++) {
        const k = localStorage.key(i);
        if (k && ((k.startsWith('sb-') && k.endsWith('-auth-token')) || k === 'cosy_supabase_session' || k === 'supabase.auth.token')) {
          const raw = localStorage.getItem(k);
          if (raw) {
            const parsed = JSON.parse(raw);
            const session = parsed.currentSession || parsed.session || parsed;
            if (session && (session.user || session.access_token)) {
              return session;
            }
          }
        }
      }
    } catch(e) {}

    return null;
  },

  async save(game, language, level, score) {
    const all = this.load();
    const entry = { game, language, level, score, date: new Date().toISOString() };
    all.push(entry);
    try { localStorage.setItem(this.key, JSON.stringify(all)); } catch(e) {}

    const session = this.getSupabaseSession();
    const isOptedIn = this.getOptIn();

    if (session && isOptedIn) {
      try {
        await this.syncToSupabase(session, game, language, level, score);
      } catch(err) {
        console.warn('[COSYScores] Supabase sync skipped or failed:', err);
      }
    }

    return entry;
  },

  async syncToSupabase(session, game, language, level, score) {
    const user = session.user || {};
    const userId = user.id || session.user_id;
    if (!userId) return;

    const username = (user.user_metadata && (user.user_metadata.username || user.user_metadata.full_name || user.user_metadata.name)) ||
                     user.email || 'Anonymous Player';

    const payload = {
      user_id: userId,
      username: username,
      game_id: game,
      language: language,
      level: level,
      score: score,
      updated_at: new Date().toISOString(),
      opt_in_leaderboard: true
    };

    if (window.supabaseClient && typeof window.supabaseClient.from === 'function') {
      await window.supabaseClient.from('user_scores').upsert(payload, { onConflict: 'user_id,game_id,language' });
      return;
    }

    const supabaseUrl = window.COSY_SUPABASE_URL || this.supabaseUrl;
    const anonKey = window.COSY_SUPABASE_ANON_KEY || this.supabaseAnonKey;
    const token = session.access_token;

    if (supabaseUrl && token && anonKey) {
      await fetch(`${supabaseUrl}/rest/v1/user_scores`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'apikey': anonKey,
          'Authorization': `Bearer ${token}`,
          'Prefer': 'resolution=merge-duplicates'
        },
        body: JSON.stringify(payload)
      });
    }
  },

  async fetchLeaderboard(game, limit = 10) {
    if (typeof window !== 'undefined') {
      const supabaseUrl = window.COSY_SUPABASE_URL || this.supabaseUrl;
      const anonKey = window.COSY_SUPABASE_ANON_KEY || this.supabaseAnonKey;

      if (window.supabaseClient && typeof window.supabaseClient.from === 'function') {
        try {
          let query = window.supabaseClient
            .from('user_scores')
            .select('username, score, language, level, updated_at')
            .eq('opt_in_leaderboard', true);

          if (game && game !== 'all') {
            query = query.eq('game_id', game);
          }

          const { data, error } = await query
            .order('score', { ascending: false })
            .limit(limit);

          if (!error && Array.isArray(data) && data.length > 0) {
            return data;
          }
        } catch(e) {}
      } else if (supabaseUrl && anonKey) {
        try {
          let url = `${supabaseUrl}/rest/v1/user_scores?opt_in_leaderboard=eq.true&select=username,score,language,level,updated_at&order=score.desc&limit=${limit}`;
          if (game && game !== 'all') {
            url += `&game_id=eq.${encodeURIComponent(game)}`;
          }
          const res = await fetch(url, {
            headers: {
              'apikey': anonKey,
              'Authorization': `Bearer ${anonKey}`
            }
          });
          if (res.ok) {
            const data = await res.json();
            if (Array.isArray(data) && data.length > 0) {
              return data;
            }
          }
        } catch(e) {}
      }
    }

    const localEntries = this.load()
      .filter(e => !game || game === 'all' || e.game === game)
      .sort((a, b) => b.score - a.score);

    return localEntries.slice(0, limit).map(e => ({
      username: 'Local Player',
      score: e.score,
      language: e.language,
      level: e.level,
      updated_at: e.date
    }));
  },

  load() {
    try { return JSON.parse(localStorage.getItem(this.key) || '[]'); } catch(e) { return []; }
  },

  best(game, language) {
    return this.load()
      .filter(e => e.game === game && (!language || e.language === language))
      .sort((a, b) => b.score - a.score)[0] || null;
  }
};

if (typeof window !== 'undefined') {
  window.COSYScores = COSYScores;
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = COSYScores;
}
