/**
 * fluency-flow/game.js
 * Standalone logic for Fluency Flow with "River Current / Flow Rail" identity.
 */
(function() {
    const GAME_ID = 'fluency';
    const GAME_TITLE = 'Fluency Flow 🗣️';
    const DUR_OPTS = [
        { key: 'setup.dur_1', val: '1 minute', fallback: '1 minute' },
        { key: 'setup.dur_2', val: '2 minutes', fallback: '2 minutes' },
        { key: 'setup.dur_3', val: '3 minutes', fallback: '3 minutes' },
        { key: 'setup.dur_5', val: '5 minutes', fallback: '5 minutes' }
    ];
    const LEVEL_OPTS = ['Starter (A1)', 'Primary (A2)', 'Intermediate (B1)', 'Upper (B2)', 'Advanced (C1)', 'Proficiency (C2)'];
    const LANG_OPTS = window.cosyLanguageLabels(["en","fr","es","de","it","ru","el"]);

    function getT() {
        return (window.COSYGameStrings && typeof window.COSYGameStrings.forGame === 'function')
            ? window.COSYGameStrings.forGame('fluency-flow')
            : function(key, params, fallback) { return fallback || key; };
    }

    let currentWords = [];
    let targetWords = [];
    let originalTopic = '';
    let selectedChipIndex = null;
    let isFlowCorrect = false;

    function getUtils() {
        return window.COSYUtils || window.gameUtils || {};
    }

    function esc(str) {
        const div = document.createElement('div');
        div.textContent = str || '';
        return div.innerHTML;
    }

    function parseLangCode(val) {
        return (typeof COSYLoader !== 'undefined' && COSYLoader.getLangCode)
            ? COSYLoader.getLangCode(val)
            : 'en';
    }

    function parseLevelCode(val) {
        if (!val) return 'starter';
        const clean = val.toLowerCase();
        if (clean.includes('primary') || clean.includes('a2')) return 'elementary';
        if (clean.includes('intermediate') && !clean.includes('upper')) return 'intermediate';
        if (clean.includes('upper') || clean.includes('b2')) return 'upper_intermediate';
        if (clean.includes('advanced') || clean.includes('c1')) return 'advanced';
        if (clean.includes('proficiency') || clean.includes('c2')) return 'advanced';
        return 'starter';
    }

    function cleanWords(str) {
        if (!str) return ['Fluency', 'Flow'];
        // Remove trailing emojis or special symbols from raw string, then split words
        const textOnly = str.replace(/[\u{1F300}-\u{1F9FF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}]/gu, '').trim();
        const words = textOnly.split(/\s+/).filter(Boolean);
        return words.length > 0 ? words : [str.trim()];
    }

    function shuffleArray(arr) {
        const copy = [...arr];
        if (copy.length <= 1) return copy;
        let shuffled = [...copy];
        let attempts = 0;
        while (attempts < 10) {
            for (let i = shuffled.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
            }
            if (shuffled.join(' ') !== copy.join(' ')) break;
            attempts++;
        }
        return shuffled;
    }

    function isPhoneContext() {
        if (typeof ViewContext !== 'undefined' && ViewContext.getContext) {
            return ViewContext.getContext() === 'phone';
        }
        return document.documentElement.dataset.context === 'phone' || window.innerWidth < 480;
    }

    function renderSetup() {
        if (typeof COSYLoader !== 'undefined' && COSYLoader.clearLevelNote) {
            COSYLoader.clearLevelNote();
        }
        document.getElementById('go-title').textContent = GAME_TITLE;
        const T = getT();
        const body = document.getElementById('go-body');
        body.innerHTML = `
            <div class="setup-screen">
              <h2>Fluency Flow 🗣️</h2>
              <p data-gs="setup.description">${T('setup.description', null, 'Keep the conversation flowing smoothly without long hesitations or sudden pauses! Practice connecting ideas seamlessly with dynamic time limits and transition words.')}</p>
              <div class="setup-field"><label data-i18n="ui_level">Level</label>
                <select class="styled-sel" id="s-level">${window.cosyLevelOptions(LEVEL_OPTS)}</select>
              </div>
              <div class="setup-field"><label data-gs="setup.duration">${T('setup.duration', null, 'Duration')}</label>
                <div class="setup-options">
                  <div class="setup-opt" data-val="1 minute"><span class="setup-opt-icon">⏱</span><span data-gs="setup.dur_1">${T('setup.dur_1', null, '1 minute')}</span></div>
                  <div class="setup-opt sel" data-val="2 minutes"><span class="setup-opt-icon">⏱</span><span data-gs="setup.dur_2">${T('setup.dur_2', null, '2 minutes')}</span></div>
                  <div class="setup-opt" data-val="3 minutes"><span class="setup-opt-icon">⏱</span><span data-gs="setup.dur_3">${T('setup.dur_3', null, '3 minutes')}</span></div>
                  <div class="setup-opt" data-val="5 minutes"><span class="setup-opt-icon">⏱</span><span data-gs="setup.dur_5">${T('setup.dur_5', null, '5 minutes')}</span></div>
                </div>
              </div>
              <div class="setup-field"><label data-i18n="ui_practice_language">Practice language</label>
                <select class="styled-sel" id="s-lang">${LANG_OPTS.map(l => `<option>${l}</option>`).join('')}</select>
              </div>
              <button class="btn-start-game" id="ff-start">▶ <span data-i18n="ui_start_game">Start game</span></button>
            </div>`;

        body.querySelectorAll('.setup-opt').forEach(opt => {
            opt.addEventListener('click', () => COSY_GAME.selectOpt(opt));
        });
        document.getElementById('ff-start').addEventListener('click', () => COSY_GAME.start());
    }

    window.COSY_GAME = {
        selectOpt(el) {
            el.closest('.setup-options').querySelectorAll('.setup-opt').forEach(o => o.classList.remove('sel'));
            el.classList.add('sel');
        },

        async start() {
            const rawLang = document.getElementById('s-lang')?.value;
            const rawLevel = document.getElementById('s-level')?.value;
            const lang = parseLangCode(rawLang);
            const level = parseLevelCode(rawLevel);
            const utils = getUtils();

            const T = getT();
            document.getElementById('go-body').innerHTML = `<div class="game-loader-centered" data-gs="common.loading">${T('common.loading', null, 'Loading...')}</div>`;

            if (typeof COSYLoader !== 'undefined' && COSYLoader.loadLevelData) {
                try {
                    await COSYLoader.loadLevelData(lang, level, 'fluency');
                } catch (e) {
                    console.log('Level data load fallback', e);
                }
            }

            COSYGame.init(GAME_ID, lang, level);
            COSYGame.maxRounds = 10;

            const data = (typeof COSYLoader !== 'undefined' ? COSYLoader.getGameData(lang) : null) || {};
            const rawFluency = data.fluency;
            const lv = COSYLoader.pickByLevel(rawFluency, rawLevel || document.getElementById('s-level')?.value || level, {min: COSYGame.maxRounds});
            const fallbackFluency = [
                { text: 'Your morning routine ☕' },
                { text: 'A childhood memory 🧸' },
                { text: 'Your favourite season and why 🍂' },
                { text: 'What you like to do on rainy days 🌧️' }
            ];
            const topicList = (lv.items && lv.items.length > 0) ? lv.items : (rawFluency || fallbackFluency);

            COSYLoader.clearLevelNote();
            if (lv.limited) {
                COSYLoader.showLevelNote(COSYLoader.levelNoteText());
            }

            const topicBag = utils.createDrawBag ? utils.createDrawBag(topicList) : { next: () => topicList[Math.floor(Math.random() * topicList.length)] };

            const durStr = document.querySelector('.setup-opt.sel[data-val]')?.dataset.val || '2 minutes';
            const dur = parseInt(durStr) * 60;
            let running = false;

            const showTopic = () => {
                if (!COSYGame.nextRound()) {
                    COSY_GAME.renderEnd();
                    return;
                }
                selectedChipIndex = null;
                isFlowCorrect = false;

                const rawItem = topicBag.next();
                originalTopic = typeof rawItem === 'string' ? rawItem : (rawItem.topic || rawItem.text || rawItem.t || 'Fluency Flow');
                const hints = (rawItem.hints || rawItem.h || []);

                targetWords = cleanWords(originalTopic);
                currentWords = shuffleArray(targetWords);

                const timerHtml = utils.renderTimerRing ? utils.renderTimerRing(dur, dur) : `<div id="timer-val">${dur}</div>`;

                const body = document.getElementById('go-body');
                body.innerHTML = `
                    <div class="score-bar">
                      <div class="sb-item"><div class="sb-val" id="ff-score">${COSYGame.score}</div><div class="sb-lbl" data-gs="common.score">${T('common.score', null, 'Score')}</div></div>
                      <div class="sb-item"><div class="sb-val">${COSYGame.round}/${COSYGame.maxRounds}</div><div class="sb-lbl" data-gs="common.round">${T('common.round', null, 'Round')}</div></div>
                    </div>
                    <div class="game-card">
                      <div class="game-label">🌊 <span data-gs="play.flow_mastery">${T('play.flow_mastery', null, 'Fluency Flow')}</span></div>
                      <div class="flow-instructions-badge" id="ff-instructions">
                        ${isPhoneContext() ? 'Tap a chip, then tap a gap indicator to insert it.' : 'Drag and drop chips along the flow rail to order them.'}
                      </div>

                      <div class="flow-rail-container">
                        <div class="flow-rail-title"><span>🌊</span> <span data-gs="play.topic_label">${T('play.topic_label', null, 'Topic:')}</span></div>
                        <div class="flow-rail-track" id="ff-rail-track"></div>
                      </div>

                      ${hints.length > 0 ? `
                        <div class="ideas-title-sage">💡 <span data-gs="play.target_connectors">${T('play.target_connectors', null, 'Target Connectors')}</span></div>
                        <ul class="ideas-list-styled">
                            ${hints.map(h => `<li>${esc(h)}</li>`).join('')}
                        </ul>` : ''}

                      <div class="game-sub" id="ff-sub-msg" data-gs="play.tap_hint">${T('play.tap_hint', null, 'Tap a connector as you speak it aloud!')}</div>

                      <div id="timer-container">${timerHtml}</div>

                      <div class="game-controls">
                        <button class="btn-g-primary" id="ff-check-flow">✓ Check Flow</button>
                        <button class="btn-g-primary" id="ff-btn" style="display:none;">▶ Start speaking</button>
                        <button class="btn-g-secondary" id="ff-reset-rail">↺ Reset Rail</button>
                        <button class="btn-g-secondary" id="ff-new"><span data-gs="btn.next_topic">${T('btn.next_topic', null, 'Next Topic')}</span> ➔</button>
                        <button class="btn-g-danger" id="ff-setup">⬅ <span data-gs="common.btn_setup">${T('common.btn_setup', null, 'Setup')}</span></button>
                      </div>
                    </div>`;

                renderRailTrack();

                document.getElementById('ff-check-flow').addEventListener('click', checkOrder);
                document.getElementById('ff-reset-rail').addEventListener('click', resetRail);
                document.getElementById('ff-btn').addEventListener('click', () => COSY_GAME.toggleTimer(dur));
                document.getElementById('ff-new').addEventListener('click', showTopic);
                document.getElementById('ff-setup').addEventListener('click', () => COSY_GAME.reset());
            };

            window.COSY_GAME.toggleTimer = (total) => {
                const btn = document.getElementById('ff-btn');
                if (!running) {
                    running = true;
                    if (btn) btn.textContent = '⏸ Pause';
                    if (utils.startTimer) {
                        utils.startTimer('timer-val', total, () => {
                            running = false;
                            COSYGame.addScore(1);
                            COSYScores.save(GAME_ID, lang, level, COSYGame.score);
                            const best = COSYScores.best(GAME_ID, lang);

                            const scoreEl = document.getElementById('ff-score');
                            if (scoreEl) scoreEl.textContent = COSYGame.score;
                            if (btn) {
                                btn.textContent = '✓ Speak Completed! Next topic →';
                                btn.onclick = () => { showTopic(); };
                                if (best && utils.showGameMessage) {
                                    utils.showGameMessage(body, `Topics: ${COSYGame.score} (Best: ${best.score})`);
                                }
                            }
                        });
                    }
                } else {
                    if (utils.stopTimer) utils.stopTimer();
                    running = false;
                    if (btn) btn.textContent = '▶ Resume speaking';
                }
            };

            showTopic();
        },

        reset: renderSetup,

        renderEnd() {
            const T = getT();
            const lang = COSYGame.language;
            const level = COSYGame.level;
            COSYScores.save(GAME_ID, lang, level, COSYGame.score);
            const best = COSYScores.best(GAME_ID, lang);
            document.getElementById('go-body').innerHTML = `
                <div class="round-end">
                    <div class="re-icon">🏆</div>
                    <div class="re-title" data-gs="common.game_over">${T('common.game_over', null, 'Game Over!')}</div>
                    <div class="re-sub">${T('common.final_score', { score: `<strong>${COSYGame.score}</strong>` }, `Your final score: <strong>${COSYGame.score}</strong>`)}</div>
                    ${best ? `<div class="game-sub personal-best-sub">${T('common.personal_best', { score: best.score }, `Personal best: ${best.score} pts`)}</div>` : ''}
                    <div class="re-actions">
                        <button class="btn-g-primary" onclick="COSY_GAME.start()"><span data-i18n="ui_play_again">Play again</span> ↺</button>
                        <button class="btn-g-secondary" onclick="COSY_GAME.reset()"><span data-gs="common.btn_setup">${T('common.btn_setup', null, 'Setup')}</span></button>
                    </div>
                </div>`;
        }
    };

    function resetRail() {
        const track = document.getElementById('ff-rail-track');
        if (track) {
            track.classList.remove('settling', 'eddy-active');
        }
        selectedChipIndex = null;
        isFlowCorrect = false;
        currentWords = shuffleArray(targetWords);
        renderRailTrackWithFLIP();
    }

    function checkOrder() {
        const track = document.getElementById('ff-rail-track');
        if (!track) return;

        const userSequence = currentWords.join(' ');
        const targetSequence = targetWords.join(' ');

        if (userSequence.toLowerCase() === targetSequence.toLowerCase()) {
            // CORRECT ORDER SUBMISSION
            isFlowCorrect = true;
            track.classList.remove('eddy-active');
            track.classList.add('settling');

            // Apply staggered delays for .motion-slide-chain rail settling animation
            const chips = track.querySelectorAll('.current-chip');
            chips.forEach((chip, idx) => {
                chip.style.setProperty('--tile-index', idx);
                chip.classList.add('motion-slide-chain');
            });

            COSYGame.addScore(1);
            const scoreEl = document.getElementById('ff-score');
            if (scoreEl) scoreEl.textContent = COSYGame.score;

            const checkBtn = document.getElementById('ff-check-flow');
            const speakBtn = document.getElementById('ff-btn');
            const subMsg = document.getElementById('ff-sub-msg');

            if (checkBtn) checkBtn.style.display = 'none';
            if (speakBtn) speakBtn.style.display = 'inline-block';
            if (subMsg) subMsg.innerHTML = `<span style="color:#0284c7;font-weight:700;">🌊 Excellent Flow!</span> The words are in fluent order. Now hit <strong>Start speaking</strong> to begin talking!`;

        } else {
            // INCORRECT ORDER SUBMISSION: Eddy Swirl jitter in place (no flat red state)
            track.classList.remove('settling');
            track.classList.add('eddy-active');

            const chips = track.querySelectorAll('.current-chip');
            chips.forEach((chip, idx) => {
                chip.style.setProperty('--tile-index', idx);
            });

            setTimeout(() => {
                track.classList.remove('eddy-active');
            }, 520);
        }
    }

    function renderRailTrack() {
        const track = document.getElementById('ff-rail-track');
        if (!track) return;

        const phone = isPhoneContext();
        track.innerHTML = '';

        currentWords.forEach((word, idx) => {
            // On phone, add gap target before each chip
            if (phone) {
                const gapBefore = document.createElement('div');
                gapBefore.className = `gap-target ${selectedChipIndex !== null ? 'active-gap' : ''}`;
                gapBefore.setAttribute('data-gap-idx', idx);
                gapBefore.innerHTML = `<span class="gap-target-icon">↳</span>`;
                gapBefore.title = `Insert chip here`;
                gapBefore.addEventListener('click', () => handleGapClick(idx));
                track.appendChild(gapBefore);
            }

            const chip = document.createElement('div');
            chip.className = `current-chip ${selectedChipIndex === idx ? 'selected-chip' : ''}`;
            chip.setAttribute('data-chip-idx', idx);
            chip.textContent = word;
            chip.style.setProperty('--tile-index', idx);

            if (phone) {
                chip.draggable = false;
                chip.addEventListener('click', () => handleChipPhoneClick(idx));
            } else {
                chip.draggable = true;
                chip.addEventListener('dragstart', (e) => handleDragStart(e, idx));
                chip.addEventListener('dragover', (e) => e.preventDefault());
                chip.addEventListener('drop', (e) => handleDrop(e, idx));
                chip.addEventListener('dragend', handleDragEnd);
            }

            track.appendChild(chip);
        });

        // Add final trailing gap target on phone
        if (phone) {
            const gapEnd = document.createElement('div');
            gapEnd.className = `gap-target ${selectedChipIndex !== null ? 'active-gap' : ''}`;
            gapEnd.setAttribute('data-gap-idx', currentWords.length);
            gapEnd.innerHTML = `<span class="gap-target-icon">↵</span>`;
            gapEnd.title = `Insert chip at end`;
            gapEnd.addEventListener('click', () => handleGapClick(currentWords.length));
            track.appendChild(gapEnd);
        }
    }

    // FLIP Animation helper ensuring ~300-500ms smooth reorder transitions for screen-shares & online viewers
    function renderRailTrackWithFLIP() {
        const track = document.getElementById('ff-rail-track');
        if (!track) {
            renderRailTrack();
            return;
        }

        // 1. Record old positions
        const oldPositions = new Map();
        track.querySelectorAll('.current-chip').forEach(chip => {
            const word = chip.textContent;
            const rect = chip.getBoundingClientRect();
            oldPositions.set(chip, rect);
        });

        // 2. Render new DOM state
        renderRailTrack();

        // 3. FLIP animate new elements
        const newChips = track.querySelectorAll('.current-chip');
        newChips.forEach(newChip => {
            // Find matching old chip by text or index
            let oldRect = null;
            oldPositions.forEach((rect, oldChip) => {
                if (oldChip.textContent === newChip.textContent && !oldRect) {
                    oldRect = rect;
                }
            });

            if (oldRect) {
                const newRect = newChip.getBoundingClientRect();
                const deltaX = oldRect.left - newRect.left;
                const deltaY = oldRect.top - newRect.top;

                if (deltaX !== 0 || deltaY !== 0) {
                    newChip.style.transition = 'none';
                    newChip.style.transform = `translate(${deltaX}px, ${deltaY}px)`;

                    requestAnimationFrame(() => {
                        newChip.offsetHeight; // Force reflow
                        newChip.style.transition = 'transform 400ms cubic-bezier(0.16, 1, 0.3, 1)';
                        newChip.style.transform = 'translate(0, 0)';
                    });
                }
            }
        });
    }

    // PHONE CONTEXT: Tap-to-select + Tap-target-gap-to-insert
    function handleChipPhoneClick(idx) {
        if (selectedChipIndex === idx) {
            selectedChipIndex = null; // Deselect if tapped again
        } else {
            selectedChipIndex = idx;
        }
        renderRailTrack();
    }

    function handleGapClick(gapIdx) {
        if (selectedChipIndex === null) return;

        const fromIdx = selectedChipIndex;
        let toIdx = gapIdx;

        if (fromIdx === toIdx || fromIdx === toIdx - 1) {
            selectedChipIndex = null;
            renderRailTrack();
            return;
        }

        const [movedWord] = currentWords.splice(fromIdx, 1);
        if (toIdx > fromIdx) {
            toIdx--;
        }
        currentWords.splice(toIdx, 0, movedWord);
        selectedChipIndex = null;

        renderRailTrackWithFLIP();
    }

    // NON-PHONE CONTEXT: Drag and Drop
    let draggedIdx = null;

    function handleDragStart(e, idx) {
        draggedIdx = idx;
        e.target.classList.add('dragging');
        if (e.dataTransfer) {
            e.dataTransfer.effectAllowed = 'move';
            e.dataTransfer.setData('text/plain', idx);
        }
    }

    function handleDrop(e, targetIdx) {
        e.preventDefault();
        if (draggedIdx === null || draggedIdx === targetIdx) return;

        const [movedWord] = currentWords.splice(draggedIdx, 1);
        currentWords.splice(targetIdx, 0, movedWord);
        draggedIdx = null;

        renderRailTrackWithFLIP();
    }

    function handleDragEnd(e) {
        e.target.classList.remove('dragging');
        draggedIdx = null;
    }

    document.addEventListener('DOMContentLoaded', renderSetup);
})();
