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

    const gameUtils = {
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
        createConfetti: function() {},
        escapeAttr: function(str) {
            if (!str) return '';
            return String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
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
