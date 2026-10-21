/**
 * COSYgames Shared Utilities
 * Provides score tracking, timer functions, progress storage, language selection, and navigation helpers.
 */

(function (global) {
    'use strict';

    const STORAGE_KEYS = {
        SCORES: 'cosygames_scores',
        PROGRESS: 'cosygames_progress',
        LANG: 'cosy_lang'
    };

    let activeTimer = null;

    const COSYUtils = {
        // --- Score Tracking ---
        getScore: function (gameId) {
            try {
                const scores = JSON.parse(localStorage.getItem(STORAGE_KEYS.SCORES) || '{}');
                return scores[gameId] ? scores[gameId].current || 0 : 0;
            } catch (e) {
                console.error('Error reading score from localStorage:', e);
                return 0;
            }
        },

        getHighScore: function (gameId) {
            try {
                const scores = JSON.parse(localStorage.getItem(STORAGE_KEYS.SCORES) || '{}');
                return scores[gameId] ? scores[gameId].high || 0 : 0;
            } catch (e) {
                console.error('Error reading high score from localStorage:', e);
                return 0;
            }
        },

        saveScore: function (gameId, score) {
            try {
                const scores = JSON.parse(localStorage.getItem(STORAGE_KEYS.SCORES) || '{}');
                const currentHigh = scores[gameId] ? scores[gameId].high || 0 : 0;
                scores[gameId] = {
                    current: score,
                    high: Math.max(currentHigh, score),
                    updatedAt: new Date().toISOString()
                };
                localStorage.setItem(STORAGE_KEYS.SCORES, JSON.stringify(scores));
                COSYUtils.updateScoreDisplay('.score-value', score);
                return scores[gameId];
            } catch (e) {
                console.error('Error saving score to localStorage:', e);
                return null;
            }
        },

        addScore: function (gameId, points) {
            const current = COSYUtils.getScore(gameId);
            return COSYUtils.saveScore(gameId, current + points);
        },

        resetScore: function (gameId) {
            return COSYUtils.saveScore(gameId, 0);
        },

        updateScoreDisplay: function (selector = '.score-value', score = 0) {
            const elements = document.querySelectorAll(selector);
            elements.forEach(el => {
                el.textContent = score;
            });
        },

        // --- Timer Utilities ---
        startTimer: function (duration, onTick, onComplete) {
            COSYUtils.stopTimer();
            let remaining = duration;

            if (typeof onTick === 'function') {
                onTick(remaining);
            }

            activeTimer = setInterval(() => {
                remaining--;
                if (typeof onTick === 'function') {
                    onTick(remaining);
                }

                if (remaining <= 0) {
                    COSYUtils.stopTimer();
                    if (typeof onComplete === 'function') {
                        onComplete();
                    }
                }
            }, 1000);

            return activeTimer;
        },

        stopTimer: function () {
            if (activeTimer) {
                clearInterval(activeTimer);
                activeTimer = null;
            }
        },

        formatTime: function (seconds) {
            const mins = Math.floor(seconds / 60);
            const secs = seconds % 60;
            return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
        },

        // --- Local Storage Helpers for Progress ---
        getGameProgress: function (gameId) {
            try {
                const progress = JSON.parse(localStorage.getItem(STORAGE_KEYS.PROGRESS) || '{}');
                return progress[gameId] || null;
            } catch (e) {
                console.error('Error reading game progress:', e);
                return null;
            }
        },

        saveGameProgress: function (gameId, data) {
            try {
                const progress = JSON.parse(localStorage.getItem(STORAGE_KEYS.PROGRESS) || '{}');
                progress[gameId] = {
                    data: data,
                    updatedAt: new Date().toISOString()
                };
                localStorage.setItem(STORAGE_KEYS.PROGRESS, JSON.stringify(progress));
                return true;
            } catch (e) {
                console.error('Error saving game progress:', e);
                return false;
            }
        },

        clearProgress: function (gameId) {
            try {
                const progress = JSON.parse(localStorage.getItem(STORAGE_KEYS.PROGRESS) || '{}');
                delete progress[gameId];
                localStorage.setItem(STORAGE_KEYS.PROGRESS, JSON.stringify(progress));
                return true;
            } catch (e) {
                console.error('Error clearing progress:', e);
                return false;
            }
        },

        // --- Language Selection Helper ---
        getSelectedLanguage: function () {
            const params = COSYUtils.getURLParams();
            if (params.lang) {
                return params.lang;
            }
            try {
                return localStorage.getItem(STORAGE_KEYS.LANG) || 'en';
            } catch (e) {
                return 'en';
            }
        },

        setSelectedLanguage: function (lang) {
            try {
                localStorage.setItem(STORAGE_KEYS.LANG, lang);
            } catch (e) {
                console.error('Error saving selected language:', e);
            }
        },

        getAvailableLanguages: function () {
            return [
                { code: 'en', name: 'English', flag: '🇬🇧' },
                { code: 'fr', name: 'Français', flag: '🇫🇷' },
                { code: 'it', name: 'Italiano', flag: '🇮🇹' },
                { code: 'ru', name: 'Русский', flag: '🇷🇺' },
                { code: 'el', name: 'Ελληνικά', flag: '🇬🇷' }
            ];
        },

        // --- Navigation Helpers ---
        backToHub: function () {
            const params = COSYUtils.getURLParams();
            const lang = params.lang || COSYUtils.getSelectedLanguage();
            let target = '../index.html';
            if (lang) {
                target += `?lang=${encodeURIComponent(lang)}`;
            }
            window.location.href = target;
        },

        navigateToGame: function (gameId) {
            const lang = COSYUtils.getSelectedLanguage();
            let target = `../${gameId}/index.html`;
            if (lang) {
                target += `?lang=${encodeURIComponent(lang)}`;
            }
            window.location.href = target;
        },

        getURLParams: function () {
            const params = {};
            const searchParams = new URLSearchParams(window.location.search);
            for (const [key, value] of searchParams.entries()) {
                params[key] = value;
            }
            return params;
        }
    };

    const TTS_LANG_MAP = {
        en: 'en-GB',
        fr: 'fr-FR',
        es: 'es-ES',
        de: 'de-DE',
        it: 'it-IT',
        ru: 'ru-RU',
        el: 'el-GR',
        pt: 'pt-PT'
    };

    const gameUtils = {
        canSpeak: function () {
            return typeof window !== 'undefined' &&
                Boolean(window.speechSynthesis) &&
                Boolean(window.SpeechSynthesisUtterance);
        },

        speak: function (text, langCode) {
            if (!gameUtils.canSpeak()) return false;
            if (text === null || text === undefined) return false;
            const strText = String(text);
            if (!strText) return false;

            try {
                window.speechSynthesis.cancel();
                const utterance = new window.SpeechSynthesisUtterance(strText);
                const mappedLang = TTS_LANG_MAP[langCode] || langCode;
                utterance.lang = mappedLang;
                utterance.rate = 0.9;

                const voices = typeof window.speechSynthesis.getVoices === 'function' ? window.speechSynthesis.getVoices() : [];
                if (Array.isArray(voices) && voices.length > 0) {
                    const targetLangLower = mappedLang.toLowerCase().replace('_', '-');
                    const targetPrimary = targetLangLower.split('-')[0];

                    let selectedVoice = voices.find(v => v && v.lang && v.lang.toLowerCase().replace('_', '-') === targetLangLower);
                    if (!selectedVoice) {
                        selectedVoice = voices.find(v => v && v.lang && v.lang.toLowerCase().replace('_', '-').split('-')[0] === targetPrimary);
                    }

                    if (selectedVoice) {
                        utterance.voice = selectedVoice;
                    }
                }

                window.speechSynthesis.speak(utterance);
                return true;
            } catch (e) {
                return false;
            }
        },

        normalizeWord: function (raw) {
            if (raw === null || raw === undefined) return '';
            return String(raw).toLowerCase().trim().replace(/[^\p{L}]/gu, '');
        },

        foldLetter: function (ch, lang) {
            if (!ch) return '';
            let letter = String(ch).toLowerCase();
            if (letter === 'ς') return 'σ';
            if (lang === 'ru') return letter;
            return letter.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
        },

        chainLetter: function (word, lang) {
            const norm = gameUtils.normalizeWord(word);
            if (!norm) return '';
            let chars = norm.split('');
            if (lang === 'ru') {
                while (chars.length > 0 && ['ь', 'ъ', 'ы'].includes(chars[chars.length - 1])) {
                    chars.pop();
                }
            }
            if (chars.length === 0) return '';
            return gameUtils.foldLetter(chars[chars.length - 1], lang);
        },

        createDrawBag: function(arr) {
            let bag = [...(arr || [])];
            return {
                next: function() {
                    if (bag.length === 0) bag = [...(arr || [])];
                    if (bag.length === 0) return null;
                    const idx = Math.floor(Math.random() * bag.length);
                    return bag.splice(idx, 1)[0];
                }
            };
        },
        playGameSound: function(type) {
            try {
                const ctx = new (window.AudioContext || window.webkitAudioContext)();
                const osc = ctx.createOscillator();
                const gain = ctx.createGain();
                osc.connect(gain);
                gain.connect(ctx.destination);
                osc.type = type === 'success' ? 'sine' : 'sawtooth';
                osc.frequency.value = type === 'success' ? 587.33 : 220;
                gain.gain.setValueAtTime(0.1, ctx.currentTime);
                gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.3);
                osc.start();
                osc.stop(ctx.currentTime + 0.3);
            } catch(e) {}
        },
        renderTTSSpeakerHtml: function(text, langCode) {
            if (!text) return '';
            const safeText = String(text).replace(/\\/g, '\\\\').replace(/'/g, "\\'").replace(/"/g, '&quot;');
            const safeLang = String(langCode || 'en').replace(/\\/g, '\\\\').replace(/'/g, "\\'").replace(/"/g, '&quot;');
            return `<button class="cg-tts-btn" type="button" aria-label="Listen to pronunciation" title="Listen to pronunciation" onclick="if(window.gameUtils&&window.gameUtils.speak){window.gameUtils.speak('${safeText}', '${safeLang}');} event.stopPropagation();">🔊</button>`;
        },
        createConfetti: function() {
            if (typeof document === 'undefined') return;
            try {
                let canvas = document.getElementById('cg-confetti-canvas');
                if (!canvas) {
                    canvas = document.createElement('canvas');
                    canvas.id = 'cg-confetti-canvas';
                    canvas.style.cssText = 'position:fixed;top:0;left:0;width:100vw;height:100vh;pointer-events:none;z-index:9999;';
                    document.body.appendChild(canvas);
                }
                const ctx = canvas.getContext('2d');
                if (!ctx) return;
                const width = canvas.width = window.innerWidth;
                const height = canvas.height = window.innerHeight;
                const particles = [];
                const colors = ['#416b49', '#B84318', '#945e05', '#1e2f6b', '#d66161', '#4a6b50'];
                for (let i = 0; i < 60; i++) {
                    particles.push({
                        x: width / 2,
                        y: height / 2,
                        vx: (Math.random() - 0.5) * 12,
                        vy: (Math.random() - 0.7) * 14,
                        size: Math.random() * 8 + 4,
                        color: colors[Math.floor(Math.random() * colors.length)],
                        alpha: 1,
                        decay: Math.random() * 0.02 + 0.01
                    });
                }
                let animId;
                function render() {
                    ctx.clearRect(0, 0, width, height);
                    let alive = false;
                    for (const p of particles) {
                        if (p.alpha <= 0) continue;
                        alive = true;
                        p.x += p.vx;
                        p.y += p.vy;
                        p.vy += 0.3; // gravity
                        p.alpha -= p.decay;
                        ctx.save();
                        ctx.globalAlpha = Math.max(0, p.alpha);
                        ctx.fillStyle = p.color;
                        ctx.beginPath();
                        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
                        ctx.fill();
                        ctx.restore();
                    }
                    if (alive) {
                        animId = requestAnimationFrame(render);
                    } else {
                        cancelAnimationFrame(animId);
                        ctx.clearRect(0, 0, width, height);
                    }
                }
                render();
            } catch(e) {}
        },
        showSessionScorecard: function(options) {
            if (typeof document === 'undefined') return;
            const opts = options || {};
            const title = gameUtils.escapeHtml(opts.title || 'Session Summary');
            const score = opts.score || 0;
            const maxScore = opts.maxScore || 100;
            const gameTitle = gameUtils.escapeHtml(opts.gameTitle || 'COSYgames');
            const lang = gameUtils.escapeHtml(opts.lang || 'en');
            const items = opts.items || [];

            let overlay = document.getElementById('cg-scorecard-modal');
            if (overlay) overlay.remove();

            overlay = document.createElement('div');
            overlay.id = 'cg-scorecard-modal';
            overlay.className = 'cg-scorecard-modal';

            let itemsHtml = '';
            if (items.length > 0) {
                itemsHtml = `
                    <div class="cg-scorecard-items">
                        ${items.map(it => `
                            <div class="cg-scorecard-item">
                                <span class="cg-scorecard-item-label">${gameUtils.escapeHtml(it.label)}</span>
                                <span class="cg-scorecard-item-val">${gameUtils.escapeHtml(it.value)}</span>
                            </div>
                        `).join('')}
                    </div>
                `;
            }

            overlay.innerHTML = `
                <div class="cg-scorecard-content">
                    <button class="cg-scorecard-close" onclick="document.getElementById('cg-scorecard-modal').remove()" aria-label="Close scorecard">&times;</button>
                    <div class="cg-scorecard-header">
                        <div class="cg-scorecard-badge">🏆 Scorecard</div>
                        <h3>${gameTitle}</h3>
                    </div>
                    <div class="cg-scorecard-main-score">
                        <span class="cg-scorecard-num">${score}</span>
                        <span class="cg-scorecard-denom">/ ${maxScore} pts</span>
                    </div>
                    ${itemsHtml}
                    <div class="cg-scorecard-actions">
                        <button class="btn-g-primary" id="cg-scorecard-copy-btn">📋 Copy Scorecard</button>
                        <button class="btn-g-secondary" onclick="document.getElementById('cg-scorecard-modal').remove()">Done</button>
                    </div>
                </div>
            `;

            document.body.appendChild(overlay);

            const copyBtn = document.getElementById('cg-scorecard-copy-btn');
            if (copyBtn) {
                copyBtn.addEventListener('click', () => {
                    const text = `${opts.gameTitle || 'COSYgames'} Session Score: ${score}/${maxScore} pts! Practiced with COSYgames.`;
                    if (navigator.clipboard && navigator.clipboard.writeText) {
                        navigator.clipboard.writeText(text);
                        alert('Scorecard summary copied to clipboard!');
                    } else {
                        alert(text);
                    }
                });
            }
        },
        escapeAttr: function(str) {
            if (!str) return '';
            return String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
        },
        escapeHtml: function(str) {
            if (str === null || str === undefined) return '';
            return String(str)
                .replace(/&/g, '&amp;')
                .replace(/</g, '&lt;')
                .replace(/>/g, '&gt;')
                .replace(/"/g, '&quot;')
                .replace(/'/g, '&#39;');
        },
        renderTimerRing: function(dur, maxDur) {
            return `<div class="timer-ring-display"><span id="timer-val">${dur}</span>s</div>`;
        },
        startTimer: function(elementId, duration, onComplete) {
            let remaining = duration;
            const el = document.getElementById(elementId);
            if (el) el.textContent = remaining;
            const timer = setInterval(() => {
                remaining--;
                if (el) el.textContent = remaining;
                if (remaining <= 0) {
                    clearInterval(timer);
                    if (typeof onComplete === 'function') onComplete();
                }
            }, 1000);
            return timer;
        },
        stopTimer: function() {
            COSYUtils.stopTimer();
        },
        showGameMessage: function(target, msg, type = 'info') {
            const container = typeof target === 'string' ? document.getElementById(target) : target;
            if (!container) return;
            const msgEl = document.createElement('div');
            msgEl.className = `cg-toast-msg ${type}`;
            msgEl.style.cssText = 'padding: 10px 16px; margin: 10px 0; background: #e0f2fe; color: #0369a1; border-radius: 8px; font-weight: 600; text-align: center;';
            msgEl.textContent = msg;
            container.appendChild(msgEl);
            setTimeout(() => msgEl.remove(), 3000);
        },
        showGameConfirm: function(msg, onConfirm) {
            if (window.confirm(msg)) {
                if (typeof onConfirm === 'function') onConfirm();
            }
        }
    };

    global.COSYUtils = COSYUtils;
    global.gameUtils = global.gameUtils || gameUtils;
})(typeof window !== 'undefined' ? window : this);
