/**
 * COSYgames Shared Utilities & Discovery Engine
 * Provides score tracking, timer functions, progress storage, language selection, search/filtering, teacher mode, and accessibility helpers.
 */

(function (global) {
    'use strict';

    const STORAGE_KEYS = {
        SCORES: 'cosygames_scores',
        PROGRESS: 'cosygames_progress',
        LANG: 'cosy_lang',
        TEACHER_MODE: 'cosy_teacher_mode',
        HIGH_CONTRAST: 'cosy_high_contrast',
        LARGE_TEXT: 'cosy_large_text',
        STREAK: 'cosygames_streak'
    };

    let activeTimer = null;

    const PLAYLISTS = {
        beginner: ['scenematch', 'bingo', 'emoji', 'questions', 'lastletter'],
        quickbreak: ['hotseat', 'action', 'wordlinker', 'lastletter', 'emoji'],
        speaking: ['fluency', 'battle', 'opinion', 'critic', 'questions', 'storychain', 'storytelling', 'hotseat'],
        teachers: ['battle', 'opinion', 'storytelling', 'questions', 'action', 'identity'],
        newreleases: ['gender', 'etymology', 'storytelling', 'crossword']
    };

    const COSYUtils = {
        // --- Score & Streak Tracking ---
        getScore: function (gameId) {
            try {
                const scores = JSON.parse(localStorage.getItem(STORAGE_KEYS.SCORES) || '{}');
                return scores[gameId] ? scores[gameId].current || 0 : 0;
            } catch (e) {
                return 0;
            }
        },

        getHighScore: function (gameId) {
            try {
                const scores = JSON.parse(localStorage.getItem(STORAGE_KEYS.SCORES) || '{}');
                return scores[gameId] ? scores[gameId].high || 0 : 0;
            } catch (e) {
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
                COSYUtils.updateStreak();
                COSYUtils.updateScoreDisplay('.score-value', score);
                return scores[gameId];
            } catch (e) {
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

        updateStreak: function () {
            try {
                const today = new Date().toISOString().split('T')[0];
                const streakData = JSON.parse(localStorage.getItem(STORAGE_KEYS.STREAK) || '{"count":0,"lastDate":""}');
                if (streakData.lastDate === today) return streakData.count;

                const yesterday = new Date(Date.now() - 86400000).toISOString().split('T')[0];
                if (streakData.lastDate === yesterday) {
                    streakData.count++;
                } else {
                    streakData.count = 1;
                }
                streakData.lastDate = today;
                localStorage.setItem(STORAGE_KEYS.STREAK, JSON.stringify(streakData));
                return streakData.count;
            } catch (e) {
                return 1;
            }
        },

        getStreak: function () {
            try {
                const streakData = JSON.parse(localStorage.getItem(STORAGE_KEYS.STREAK) || '{"count":0}');
                return streakData.count || 0;
            } catch (e) {
                return 0;
            }
        },

        // --- Timer Utilities ---
        startTimer: function (duration, onTick, onComplete) {
            COSYUtils.stopTimer();
            let remaining = duration;
            if (typeof onTick === 'function') onTick(remaining);

            activeTimer = setInterval(() => {
                remaining--;
                if (typeof onTick === 'function') onTick(remaining);
                if (remaining <= 0) {
                    COSYUtils.stopTimer();
                    if (typeof onComplete === 'function') onComplete();
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

        // --- Local Storage Progress Helpers ---
        getGameProgress: function (gameId) {
            try {
                const progress = JSON.parse(localStorage.getItem(STORAGE_KEYS.PROGRESS) || '{}');
                return progress[gameId] || null;
            } catch (e) {
                return null;
            }
        },

        saveGameProgress: function (gameId, data) {
            try {
                const progress = JSON.parse(localStorage.getItem(STORAGE_KEYS.PROGRESS) || '{}');
                progress[gameId] = { data: data, updatedAt: new Date().toISOString() };
                localStorage.setItem(STORAGE_KEYS.PROGRESS, JSON.stringify(progress));
                return true;
            } catch (e) {
                return false;
            }
        },

        // --- Language Selection Helper ---
        getSelectedLanguage: function () {
            const params = COSYUtils.getURLParams();
            if (params.lang) return params.lang;
            try {
                return localStorage.getItem(STORAGE_KEYS.LANG) || 'en';
            } catch (e) {
                return 'en';
            }
        },

        setSelectedLanguage: function (lang) {
            try {
                localStorage.setItem(STORAGE_KEYS.LANG, lang);
            } catch (e) {}
        },

        // --- Teacher Mode & Accessibility Toggles ---
        toggleTeacherMode: function () {
            const isTeacher = document.body.classList.toggle('teacher-mode-active');
            try {
                localStorage.setItem(STORAGE_KEYS.TEACHER_MODE, isTeacher ? 'true' : 'false');
            } catch (e) {}
            return isTeacher;
        },

        initTeacherMode: function () {
            try {
                if (localStorage.getItem(STORAGE_KEYS.TEACHER_MODE) === 'true') {
                    document.body.classList.add('teacher-mode-active');
                }
            } catch (e) {}
        },

        toggleHighContrast: function () {
            const isContrast = document.documentElement.classList.toggle('high-contrast');
            try {
                localStorage.setItem(STORAGE_KEYS.HIGH_CONTRAST, isContrast ? 'true' : 'false');
            } catch (e) {}
        },

        toggleLargeText: function () {
            const isLarge = document.documentElement.classList.toggle('large-text');
            try {
                localStorage.setItem(STORAGE_KEYS.LARGE_TEXT, isLarge ? 'true' : 'false');
            } catch (e) {}
        },

        // --- Game Discovery & Rotator ---
        getGameOfTheDay: function () {
            const gameList = ['fluency', 'battle', 'opinion', 'storytelling', 'action', 'scenematch', 'wordlinker', 'gender', 'crossword'];
            const dayOfYear = Math.floor((new Date() - new Date(new Date().getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24);
            return gameList[dayOfYear % gameList.length];
        },

        getPlaylist: function (key) {
            return PLAYLISTS[key] || [];
        },

        // --- Navigation Helpers ---
        backToHub: function () {
            const lang = COSYUtils.getSelectedLanguage();
            window.location.href = `../index.html${lang ? '?lang=' + encodeURIComponent(lang) : ''}`;
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

    document.addEventListener('DOMContentLoaded', () => {
        COSYUtils.initTeacherMode();
        try {
            if (localStorage.getItem(STORAGE_KEYS.HIGH_CONTRAST) === 'true') {
                document.documentElement.classList.add('high-contrast');
            }
            if (localStorage.getItem(STORAGE_KEYS.LARGE_TEXT) === 'true') {
                document.documentElement.classList.add('large-text');
            }
        } catch (e) {}
    });

    global.COSYUtils = COSYUtils;
})(typeof window !== 'undefined' ? window : this);
