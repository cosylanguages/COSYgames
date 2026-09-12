/**
 * games/100-questions/game.js
 * Standalone logic for 100 Questions game.
 * Acts solely as the UI and Game Controller.
 */
(function() {
    const GAME_ID = 'hundred_questions';
    const GAME_TITLE = '100 Questions 💬';
    const GAME_META = 'Speaking · Group & Friends · CEFR A2–C2';

    // Core UI and State Controller Logic
    let state = {
        deckKey: 'friends', // 'friends', 'teacher', 'interview', 'student', 'family', 'civic'
        subgroup: 'mother', // 'mother', 'father', 'grandparents', 'sibling' (for family) or 'us'/'uk'/'canada'/'france'/'russia' (for civic)
        familyTarget: 'grandma', // 'grandma'/'grandpa' or 'brother'/'sister'
        lessonType: 'individual', // 'individual' / 'group'
        lang: 'en',        // 'en', 'ru', 'fr'
        currentLevelIdx: 0,
        currentQuestionIdx: 0,
        passUsed: false,
        cardFlipped: false, // true if Adult-friendly back is revealed
        selectedAnswerIdx: null // Tracks selected multiple-choice answer
    };

    const UI_TEXTS = {
        en: {
            setup_title: "100 Questions 💬",
            setup_desc: "A game of deep conversations, genuine interest, and absolute honesty. Play with friends, partners, students, or family. (CEFR A2–C2)",
            deck_lbl: "Select Deck",
            lang_lbl: "Select Language",
            subgroup_lbl: "Select Subgroup",
            lesson_type_lbl: "Lesson Type",
            target_role_lbl: "Target Relation",
            region_lbl: "Select Country / Region",
            btn_continue: "Continue →",
            btn_back: "← Back",
            btn_start: "▶ Start Game",
            btn_prev: "⬅ Previous",
            btn_next: "Next ➡",
            btn_pass: "🤫 Pass Used",
            btn_pass_avail: "🤫 Use Pass",
            btn_levels: "🎓 Levels",
            rules_title: "Game Rules 📜",
            rules_intro: "Before you start, please read and agree to the rules:",
            rules_footer: "And finally... Friendship and family bonds are not killed by time. But by \"we already know everything\".",
            rules_bullets: [
                "One question per meeting: or in chat, wherever it leads.",
                "Both players answer. Or the whole group in a circle.",
                "Honesty must not offend. An answer is a gift, not evidence.",
                "Once per evening you can say \"pass\". Without explanation.",
                "Levels go from easy to difficult. Do not skip them.",
                "And most importantly: this is a way to get to know a person whom you \"already know\".",
                "Two-sided cards: Student, Family, and Myself decks have a children-friendly side. Click/Tap the card to reveal the Adult-friendly side!"
            ],
            level_select_title: "Select Level 🗺️",
            level_select_desc: "Levels are carefully structured from safe and easy to deep and daring. Do not skip levels!",
            completion_title: "Level Complete! 🎉",
            completion_desc: "You have answered all questions in this level. You can select another level or deck.",
            completion_footer: "\"Friendship is not killed by time. But by 'we already know everything'.\"",
            q_of: "of",
            q_lbl: "Question",
            click_to_flip: "Click card to flip 🔄",
            front_badge: "Children-Friendly 👶",
            back_badge: "Adult-Friendly 🔥"
        },
        ru: {
            setup_title: "100 Вопросов 💬",
            setup_desc: "Игра для глубоких разговоров, искреннего интереса и абсолютной честности. Играйте с друзьями, близкими, учениками или семьей. (CEFR A2–C2)",
            deck_lbl: "Выберите колоду",
            lang_lbl: "Язык вопросов",
            subgroup_lbl: "Выберите подгруппу",
            lesson_type_lbl: "Тип урока",
            target_role_lbl: "Цель беседы",
            region_lbl: "Выберите страну / регион",
            btn_continue: "Продолжить →",
            btn_back: "← Назад",
            btn_start: "▶ Начать игру",
            btn_prev: "⬅ Предыдущий",
            btn_next: "Следующий ➡",
            btn_pass: "🤫 Пропуск использован",
            btn_pass_avail: "🤫 Сказать «пропускаю»",
            btn_levels: "🎓 Уровни",
            rules_title: "Правила игры 📜",
            rules_intro: "Перед началом игры, пожалуйста, ознакомьтесь с правилами:",
            rules_footer: "И последнее... Отношения убивает не время. А «мы и так всё знаем».",
            rules_bullets: [
                "Один вопрос за встречу: или в переписке, куда занесёт.",
                "Отвечают оба. Или вся компания по кругу.",
                "На честность нельзя обижаться. Ответ: подарок, а не улика.",
                "Раз за вечер можно сказать «пропускаю». Без объяснений.",
                "Уровни идут от лёгких к трудным. Не перескакивайте.",
                "И главное: это способ узнать человека, которого вы «и так знаете».",
                "Двусторонние карты: в колодах студента, семьи и себя есть детская сторона. Кликните на карту, чтобы открыть взрослую!"
            ],
            level_select_title: "Выберите уровень 🗺️",
            level_select_desc: "Уровни идут от легких к трудным. Рекомендуется проходить их последовательно!",
            completion_title: "Уровень пройден! 🎉",
            completion_desc: "Вы ответили на все вопросы этого уровня. Вы можете выбрать другой уровень или колоду.",
            completion_footer: "«Дружбу убивает не время. А 'мы и так всё знаем'.»",
            q_of: "из",
            q_lbl: "Вопрос",
            click_to_flip: "Нажмите для переворота 🔄",
            front_badge: "Детская сторона 👶",
            back_badge: "Взрослая сторона 🔥"
        },
        fr: {
            setup_title: "100 Questions 💬",
            setup_desc: "Un jeu de conversations profondes, d'intérêt sincère et d'honnêteté absolue. Jouez avec des amis, des partenaires, des élèves ou la famille. (CEFR A2–C2)",
            deck_lbl: "Sélectionner le jeu",
            lang_lbl: "Sélectionner la langue",
            subgroup_lbl: "Sélectionner le sous-groupe",
            lesson_type_lbl: "Type de cours",
            target_role_lbl: "Relation cible",
            region_lbl: "Sélectionner le pays / région",
            btn_continue: "Continuer →",
            btn_back: "← Retour",
            btn_start: "▶ Commencer",
            btn_prev: "⬅ Précédent",
            btn_next: "Suivant ➡",
            btn_pass: "🤫 Passe utilisé",
            btn_pass_avail: "🤫 Passer",
            btn_levels: "🎓 Niveaux",
            rules_title: "Règles du jeu 📜",
            rules_intro: "Avant de commencer, veuillez lire et accepter les règles :",
            rules_footer: "Et enfin... L'amour et l'amitié ne sont pas tués par le temps. Mais par \"on sait déjà tout\".",
            rules_bullets: [
                "Une question par rencontre: ou par message, là où le vent vous mène.",
                "Les deux répondent. Ou tout le groupe à tour de rôle.",
                "L'honnêteté ne doit pas blesser. Une réponse est un cadeau, pas une preuve.",
                "Une fois par soirée, vous pouvez dire « je passe ». Sans explication.",
                "Les niveaux vont du plus facile au plus difficile. Ne sautez pas les étapes.",
                "C'est une façon de découvrir une personne que vous « connaissez déjà ».",
                "Cartes double-face: les paquets Élève, Famille et Moi-même ont une face enfant. Cliquez sur la carte pour révéler la face Adulte !"
            ],
            level_select_title: "Sélectionner le niveau 🗺️",
            level_select_desc: "Les niveaux sont structurés du plus simple au plus profond. Ne sautez pas les étapes !",
            completion_title: "Niveau terminé ! 🎉",
            completion_desc: "Vous avez répondu à toutes les questions de ce niveau. Vous pouvez choisir un autre niveau ou un autre jeu.",
            completion_footer: "\"L'amitié n'est pas tuée par le temps. Mais par 'on sait déjà tout'.\"",
            q_of: "sur",
            q_lbl: "Question",
            click_to_flip: "Cliquez pour retourner 🔄",
            front_badge: "Version Enfant 👶",
            back_badge: "Version Adulte 🔥"
        }
    };

    function esc(str) {
        if (!str) return '';
        const div = document.createElement('div');
        div.textContent = str;
        return div.innerHTML;
    }

    // Helper to dynamically adapt the question text based on active state parameters
    function adaptText(rawText, lang) {
        if (!rawText) return '';
        let t = rawText;

        // 1. Teacher & Student: Lesson Type replacements
        if (state.deckKey === 'teacher' || state.deckKey === 'student') {
            if (state.lessonType === 'individual') {
                if (lang === 'en') {
                    t = t.replace(/{class_term}/g, 'our lessons together')
                         .replace(/{classroom}/g, 'our lessons')
                         .replace(/{companion}/g, 'me')
                         .replace(/{classmates}/g, 'me');
                } else if (lang === 'ru') {
                    t = t.replace(/{class_term}/g, 'наших занятий')
                         .replace(/{classroom}/g, 'нашем уроке')
                         .replace(/{companion}/g, 'меня')
                         .replace(/{classmates}/g, 'меня');
                } else if (lang === 'fr') {
                    t = t.replace(/{class_term}/g, 'nos cours particuliers')
                         .replace(/{classroom}/g, 'nos cours')
                         .replace(/{companion}/g, 'moi')
                         .replace(/{classmates}/g, 'moi');
                }
            } else { // group
                if (lang === 'en') {
                    t = t.replace(/{class_term}/g, 'our class')
                         .replace(/{classroom}/g, 'the classroom')
                         .replace(/{companion}/g, 'your classmates')
                         .replace(/{classmates}/g, 'classmates');
                } else if (lang === 'ru') {
                    t = t.replace(/{class_term}/g, 'нашего класса')
                         .replace(/{classroom}/g, 'классе')
                         .replace(/{companion}/g, 'твоих одноклассников')
                         .replace(/{classmates}/g, 'одноклассниками');
                } else if (lang === 'fr') {
                    t = t.replace(/{class_term}/g, 'notre classe')
                         .replace(/{classroom}/g, 'la classe')
                         .replace(/{companion}/g, 'tes camarades')
                         .replace(/{classmates}/g, 'camarades');
                }
            }
        }

        // 2. Family: Subgroups & Target adaptations
        if (state.deckKey === 'family') {
            let r_en = 'mother', r_ru = 'мама', r_fr = 'mère';
            let rp_en = "mother's", rp_ru = 'мамин', rp_fr = 'de maman';
            let comp_en = 'your sibling', comp_ru = 'сиблинга', comp_fr = 'ton frère ou sœur';

            if (state.subgroup === 'mother') {
                r_en = 'mother'; r_ru = 'мама'; r_fr = 'maman';
                rp_en = "mother's"; rp_ru = 'мамы'; rp_fr = 'de maman';
            } else if (state.subgroup === 'father') {
                r_en = 'father'; r_ru = 'папа'; r_fr = 'papa';
                rp_en = "father's"; rp_ru = 'папы'; rp_fr = 'de papa';
            } else if (state.subgroup === 'grandparents') {
                if (state.familyTarget === 'grandpa') {
                    r_en = 'grandfather'; r_ru = 'дедушка'; r_fr = 'grand-père';
                    rp_en = "grandfather's"; rp_ru = 'дедушки'; rp_fr = 'de grand-père';
                } else {
                    r_en = 'grandmother'; r_ru = 'бабушка'; r_fr = 'grand-mère';
                    rp_en = "grandmother's"; rp_ru = 'бабушки'; rp_fr = 'de grand-mère';
                }
            } else if (state.subgroup === 'sibling') {
                if (state.familyTarget === 'brother') {
                    r_en = 'brother'; r_ru = 'брат'; r_fr = 'frère';
                    rp_en = "brother's"; rp_ru = 'брата'; rp_fr = 'de ton frère';
                } else {
                    r_en = 'sister'; r_ru = 'сестра'; r_fr = 'сестра';
                    rp_en = "sister's"; rp_ru = 'сестры'; rp_fr = 'de ta sœur';
                }
            }

            if (lang === 'en') {
                t = t.replace(/{role}/g, r_en)
                     .replace(/{role_possessive}/g, rp_en)
                     .replace(/{companion}/g, comp_en);
            } else if (lang === 'ru') {
                t = t.replace(/{role}/g, r_ru)
                     .replace(/{role_possessive}/g, rp_ru)
                     .replace(/{companion}/g, comp_ru);
            } else if (lang === 'fr') {
                t = t.replace(/{role}/g, r_fr)
                     .replace(/{role_possessive}/g, rp_fr)
                     .replace(/{companion}/g, comp_fr);
            }
        }

        // 3. Civic Deck Replacements
        if (state.deckKey === 'civic') {
            let c_name = 'the United States', l_title = 'President', motto_val = 'In God We Trust';
            if (state.subgroup === 'us') {
                c_name = lang === 'ru' ? 'США' : (lang === 'fr' ? 'les États-Unis' : 'the United States');
                l_title = lang === 'ru' ? 'президент' : (lang === 'fr' ? 'président' : 'President');
                motto_val = 'In God We Trust';
            } else if (state.subgroup === 'uk') {
                c_name = lang === 'ru' ? 'Великобритания' : (lang === 'fr' ? 'le Royaume-Uni' : 'the United Kingdom');
                l_title = lang === 'ru' ? 'премьер-министр' : (lang === 'fr' ? 'premier ministre' : 'Prime Minister');
                motto_val = 'Dieu et mon droit';
            } else if (state.subgroup === 'canada') {
                c_name = lang === 'ru' ? 'Канада' : (lang === 'fr' ? 'le Canada' : 'Canada');
                l_title = lang === 'ru' ? 'премьер-министр' : (lang === 'fr' ? 'premier ministre' : 'Prime Minister');
                motto_val = 'A Mari Usque Ad Mare';
            } else if (state.subgroup === 'france') {
                c_name = lang === 'ru' ? 'Франция' : (lang === 'fr' ? 'la France' : 'France');
                l_title = lang === 'ru' ? 'президент' : (lang === 'fr' ? 'président' : 'Président');
                motto_val = 'Liberté, Égalité, Fraternité';
            } else if (state.subgroup === 'russia') {
                c_name = lang === 'ru' ? 'Россия' : (lang === 'fr' ? 'la Russie' : 'Russia');
                l_title = lang === 'ru' ? 'президент' : (lang === 'fr' ? 'président' : 'President');
                motto_val = lang === 'ru' ? 'С нами Бог' : 'God with us';
            }

            t = t.replace(/{country_name}/g, c_name)
                 .replace(/{leader_title}/g, l_title)
                 .replace(/{motto_val}/g, motto_val);
        }

        return t;
    }

    function applyHandoffState() {
        if (window.COSYLoader && window.COSYLoader.getHandoffParams) {
            const { lang, level, topic } = window.COSYLoader.getHandoffParams();
            if (lang && ['en', 'fr', 'ru'].includes(lang)) {
                state.lang = lang;
            }
            if (topic && window.HUNDRED_QUESTIONS_DECKS && window.HUNDRED_QUESTIONS_DECKS[topic]) {
                state.deckKey = topic;
            }
            if (level) {
                const levelIdxMap = { 'A2': 0, 'B1': 1, 'B2': 2, 'C1': 3, 'C2': 4 };
                if (levelIdxMap[level] !== undefined) {
                    state.currentLevelIdx = levelIdxMap[level];
                }
            }
        }
    }

    function renderSetup() {
        applyHandoffState();
        document.getElementById('go-title').textContent = GAME_TITLE;
        document.getElementById('go-meta').textContent = GAME_META;
        const body = document.getElementById('go-body');

        const label_deck = UI_TEXTS[state.lang].deck_lbl;
        const label_lang = UI_TEXTS[state.lang].lang_lbl;

        // Render setup screen
        body.innerHTML = `
            <div class="setup-screen" style="max-width: 600px; margin: 0 auto; padding: 2rem 1rem;">
                <div style="font-size: 3rem; margin-bottom: 1rem; text-align: center;">💬</div>
                <h2 style="text-align: center; font-family: Fraunces, serif; font-size: 2rem; margin-bottom: 0.5rem; color: var(--ink);">100 Questions</h2>
                <p style="text-align: center; color: var(--ink-muted); margin-bottom: 2rem; font-size: 1rem; line-height: 1.5;">
                    ${UI_TEXTS[state.lang].setup_desc}
                </p>

                <div class="setup-field" style="margin-bottom: 1.5rem;">
                    <label style="font-weight: 700; margin-bottom: 0.5rem; display: block; font-size: 0.9rem; color: var(--ink-muted); text-transform: uppercase;">
                        ${label_deck}
                    </label>
                    <select class="styled-sel" id="s-deck" style="width: 100%; padding: 12px; border-radius: 12px; border: 1px solid var(--border); background: var(--card-bg); color: var(--ink); font-size: 1rem; cursor: pointer;">
                        <option value="friends" ${state.deckKey === 'friends' ? 'selected' : ''}>👥 ${esc(window.HUNDRED_QUESTIONS_DECKS.friends.title[state.lang])}</option>
                        <option value="teacher" ${state.deckKey === 'teacher' ? 'selected' : ''}>🎓 ${esc(window.HUNDRED_QUESTIONS_DECKS.teacher.title[state.lang])}</option>
                        <option value="student" ${state.deckKey === 'student' ? 'selected' : ''}>🧑‍🎓 ${esc(window.HUNDRED_QUESTIONS_DECKS.student.title[state.lang])}</option>
                        <option value="family" ${state.deckKey === 'family' ? 'selected' : ''}>🏠 ${esc(window.HUNDRED_QUESTIONS_DECKS.family.title[state.lang])}</option>
                        <option value="myself" ${state.deckKey === 'myself' ? 'selected' : ''}>🪞 ${esc(window.HUNDRED_QUESTIONS_DECKS.myself.title[state.lang])}</option>
                        <option value="civic" ${state.deckKey === 'civic' ? 'selected' : ''}>🧭 ${esc(window.HUNDRED_QUESTIONS_DECKS.civic.title[state.lang])}</option>
                        <option value="netflix" ${state.deckKey === 'netflix' ? 'selected' : ''}>🎬 ${esc(window.HUNDRED_QUESTIONS_DECKS.netflix.title[state.lang])}</option>
                        <option value="interview" ${state.deckKey === 'interview' ? 'selected' : ''}>💼 ${esc(window.HUNDRED_QUESTIONS_DECKS.interview.title[state.lang])}</option>
                    </select>
                </div>

                <!-- Dynamic Subgroup and Option Toggles -->
                <div id="dynamic-fields-container"></div>

                <div class="setup-field" style="margin-bottom: 2rem;">
                    <label style="font-weight: 700; margin-bottom: 0.5rem; display: block; font-size: 0.9rem; color: var(--ink-muted); text-transform: uppercase;">
                        ${label_lang}
                    </label>
                    <select class="styled-sel" id="s-lang" style="width: 100%; padding: 12px; border-radius: 12px; border: 1px solid var(--border); background: var(--card-bg); color: var(--ink); font-size: 1rem; cursor: pointer;">
                        <option value="en" ${state.lang === 'en' ? 'selected' : ''}>English 🇬🇧</option>
                        <option value="fr" ${state.lang === 'fr' ? 'selected' : ''}>Français 🇫🇷</option>
                        <option value="ru" ${state.lang === 'ru' ? 'selected' : ''}>Русский 🇷🇺</option>
                    </select>
                </div>

                <button class="btn-start-game" onclick="COSY_GAME.goToRules()" style="width: 100%; padding: 14px; border-radius: 12px; font-weight: 700; font-size: 1.1rem; background: var(--teal); color: #fff; border: none; cursor: pointer; transition: transform 0.2s;">
                    ${UI_TEXTS[state.lang].btn_continue}
                </button>
            </div>
        `;

        // Render dynamic options
        updateDynamicFields();

        // Register event listeners
        const selectLang = document.getElementById('s-lang');
        const selectDeck = document.getElementById('s-deck');
        if (selectLang) {
            selectLang.addEventListener('change', () => {
                state.lang = selectLang.value;
                renderSetup();
            });
        }
        if (selectDeck) {
            selectDeck.addEventListener('change', () => {
                state.deckKey = selectDeck.value;
                updateDynamicFields();
            });
        }
    }

    function updateDynamicFields() {
        const selectDeck = document.getElementById('s-deck');
        if (selectDeck) state.deckKey = selectDeck.value;

        // Reset default subgroups when shifting decks
        if (state.deckKey === 'myself') {
            if (state.subgroup !== 'current' && state.subgroup !== 'past' && state.subgroup !== 'future') {
                state.subgroup = 'current';
            }
        } else if (state.deckKey === 'family') {
            if (state.subgroup !== 'mother' && state.subgroup !== 'father' && state.subgroup !== 'grandparents' && state.subgroup !== 'sibling') {
                state.subgroup = 'mother';
            }
        }

        const container = document.getElementById('dynamic-fields-container');
        if (!container) return;

        let fieldsHTML = '';

        if (state.deckKey === 'teacher' || state.deckKey === 'student') {
            fieldsHTML = `
                <div class="setup-field" style="margin-bottom: 1.5rem;">
                    <label style="font-weight: 700; margin-bottom: 0.5rem; display: block; font-size: 0.9rem; color: var(--ink-muted); text-transform: uppercase;">
                        ${UI_TEXTS[state.lang].lesson_type_lbl}
                    </label>
                    <select class="styled-sel" id="s-lesson-type" style="width: 100%; padding: 12px; border-radius: 12px; border: 1px solid var(--border); background: var(--card-bg); color: var(--ink); font-size: 1rem; cursor: pointer;">
                        <option value="individual" ${state.lessonType === 'individual' ? 'selected' : ''}>🧑‍🎓 Individual Lesson</option>
                        <option value="group" ${state.lessonType === 'group' ? 'selected' : ''}>👥 Group Lesson</option>
                    </select>
                </div>
            `;
        } else if (state.deckKey === 'family') {
            fieldsHTML = `
                <div class="setup-field" style="margin-bottom: 1.5rem;">
                    <label style="font-weight: 700; margin-bottom: 0.5rem; display: block; font-size: 0.9rem; color: var(--ink-muted); text-transform: uppercase;">
                        ${UI_TEXTS[state.lang].subgroup_lbl}
                    </label>
                    <select class="styled-sel" id="s-subgroup" style="width: 100%; padding: 12px; border-radius: 12px; border: 1px solid var(--border); background: var(--card-bg); color: var(--ink); font-size: 1rem; cursor: pointer;">
                        <option value="mother" ${state.subgroup === 'mother' ? 'selected' : ''}>👩 Mother</option>
                        <option value="father" ${state.subgroup === 'father' ? 'selected' : ''}>👨 Father</option>
                        <option value="grandparents" ${state.subgroup === 'grandparents' ? 'selected' : ''}>👵👴 Grandparents</option>
                        <option value="sibling" ${state.subgroup === 'sibling' ? 'selected' : ''}>👧👦 Sibling</option>
                    </select>
                </div>
                <div id="family-target-container"></div>
            `;
        } else if (state.deckKey === 'myself') {
            let currentLbl = 'Current Self', pastLbl = 'Past Self', futureLbl = 'Future Self';
            if (state.lang === 'ru') {
                currentLbl = 'Настоящее я';
                pastLbl = 'Прошлое я';
                futureLbl = 'Будущее я';
            } else if (state.lang === 'fr') {
                currentLbl = 'Moi actuel';
                pastLbl = 'Moi passé';
                futureLbl = 'Moi futur';
            }
            fieldsHTML = `
                <div class="setup-field" style="margin-bottom: 1.5rem;">
                    <label style="font-weight: 700; margin-bottom: 0.5rem; display: block; font-size: 0.9rem; color: var(--ink-muted); text-transform: uppercase;">
                        ${UI_TEXTS[state.lang].subgroup_lbl}
                    </label>
                    <select class="styled-sel" id="s-subgroup" style="width: 100%; padding: 12px; border-radius: 12px; border: 1px solid var(--border); background: var(--card-bg); color: var(--ink); font-size: 1rem; cursor: pointer;">
                        <option value="current" ${state.subgroup === 'current' ? 'selected' : ''}>⏳ ${currentLbl}</option>
                        <option value="past" ${state.subgroup === 'past' ? 'selected' : ''}>🕰️ ${pastLbl}</option>
                        <option value="future" ${state.subgroup === 'future' ? 'selected' : ''}>🚀 ${futureLbl}</option>
                    </select>
                </div>
            `;
        } else if (state.deckKey === 'civic') {
            // Filter regions depending on selected language
            let regionOptions = '';
            if (state.lang === 'en') {
                regionOptions = `
                    <option value="us" ${state.subgroup === 'us' ? 'selected' : ''}>United States 🇺🇸</option>
                    <option value="uk" ${state.subgroup === 'uk' ? 'selected' : ''}>United Kingdom 🇬🇧</option>
                    <option value="canada" ${state.subgroup === 'canada' ? 'selected' : ''}>Canada 🇨🇦</option>
                `;
            } else if (state.lang === 'fr') {
                regionOptions = `
                    <option value="france" ${state.subgroup === 'france' ? 'selected' : ''}>France 🇫🇷</option>
                    <option value="canada" ${state.subgroup === 'canada' ? 'selected' : ''}>Canada 🇨🇦</option>
                `;
            } else { // Russian/others
                regionOptions = `
                    <option value="russia" ${state.subgroup === 'russia' ? 'selected' : ''}>Russia 🇷🇺</option>
                `;
            }

            fieldsHTML = `
                <div class="setup-field" style="margin-bottom: 1.5rem;">
                    <label style="font-weight: 700; margin-bottom: 0.5rem; display: block; font-size: 0.9rem; color: var(--ink-muted); text-transform: uppercase;">
                        ${UI_TEXTS[state.lang].region_lbl}
                    </label>
                    <select class="styled-sel" id="s-subgroup" style="width: 100%; padding: 12px; border-radius: 12px; border: 1px solid var(--border); background: var(--card-bg); color: var(--ink); font-size: 1rem; cursor: pointer;">
                        ${regionOptions}
                    </select>
                </div>
            `;
        }

        container.innerHTML = fieldsHTML;

        // Bind events
        if (state.deckKey === 'teacher' || state.deckKey === 'student') {
            const selectLesson = document.getElementById('s-lesson-type');
            if (selectLesson) {
                selectLesson.addEventListener('change', () => {
                    state.lessonType = selectLesson.value;
                });
            }
        } else if (state.deckKey === 'family') {
            const selectSubgroup = document.getElementById('s-subgroup');
            if (selectSubgroup) {
                selectSubgroup.addEventListener('change', () => {
                    state.subgroup = selectSubgroup.value;
                    updateFamilyTargetFields();
                });
            }
            updateFamilyTargetFields();
        } else if (state.deckKey === 'civic') {
            const selectSubgroup = document.getElementById('s-subgroup');
            if (selectSubgroup) {
                // Initialize default subgroup
                state.subgroup = selectSubgroup.value;
                selectSubgroup.addEventListener('change', () => {
                    state.subgroup = selectSubgroup.value;
                });
            }
        } else if (state.deckKey === 'myself') {
            const selectSubgroup = document.getElementById('s-subgroup');
            if (selectSubgroup) {
                selectSubgroup.addEventListener('change', () => {
                    state.subgroup = selectSubgroup.value;
                });
            }
        }
    }

    function updateFamilyTargetFields() {
        const targetContainer = document.getElementById('family-target-container');
        if (!targetContainer) return;

        if (state.subgroup === 'grandparents') {
            targetContainer.innerHTML = `
                <div class="setup-field" style="margin-bottom: 1.5rem;">
                    <label style="font-weight: 700; margin-bottom: 0.5rem; display: block; font-size: 0.9rem; color: var(--ink-muted); text-transform: uppercase;">
                        ${UI_TEXTS[state.lang].target_role_lbl}
                    </label>
                    <select class="styled-sel" id="s-family-target" style="width: 100%; padding: 12px; border-radius: 12px; border: 1px solid var(--border); background: var(--card-bg); color: var(--ink); font-size: 1rem; cursor: pointer;">
                        <option value="grandma" ${state.familyTarget === 'grandma' ? 'selected' : ''}>👵 Ask Grandma</option>
                        <option value="grandpa" ${state.familyTarget === 'grandpa' ? 'selected' : ''}>👴 Ask Grandpa</option>
                    </select>
                </div>
            `;
        } else if (state.subgroup === 'sibling') {
            targetContainer.innerHTML = `
                <div class="setup-field" style="margin-bottom: 1.5rem;">
                    <label style="font-weight: 700; margin-bottom: 0.5rem; display: block; font-size: 0.9rem; color: var(--ink-muted); text-transform: uppercase;">
                        ${UI_TEXTS[state.lang].target_role_lbl}
                    </label>
                    <select class="styled-sel" id="s-family-target" style="width: 100%; padding: 12px; border-radius: 12px; border: 1px solid var(--border); background: var(--card-bg); color: var(--ink); font-size: 1rem; cursor: pointer;">
                        <option value="sister" ${state.familyTarget === 'sister' ? 'selected' : ''}>👧 Ask Sister</option>
                        <option value="brother" ${state.familyTarget === 'brother' ? 'selected' : ''}>👦 Ask Brother</option>
                    </select>
                </div>
            `;
        } else {
            targetContainer.innerHTML = '';
        }

        const selectTarget = document.getElementById('s-family-target');
        if (selectTarget) {
            selectTarget.addEventListener('change', () => {
                state.familyTarget = selectTarget.value;
            });
        }
    }

    window.COSY_GAME = {
        reset() {
            renderSetup();
        },

        goToRules() {
            const selectLang = document.getElementById('s-lang');
            const selectDeck = document.getElementById('s-deck');
            const selectLesson = document.getElementById('s-lesson-type');
            const selectSubgroup = document.getElementById('s-subgroup');
            const selectTarget = document.getElementById('s-family-target');

            if (selectLang) state.lang = selectLang.value;
            if (selectDeck) state.deckKey = selectDeck.value;
            if (selectLesson) state.lessonType = selectLesson.value;
            if (selectSubgroup) state.subgroup = selectSubgroup.value;
            if (selectTarget) state.familyTarget = selectTarget.value;

            const t = UI_TEXTS[state.lang];
            const body = document.getElementById('go-body');

            body.innerHTML = `
                <div class="rules-screen" style="max-width: 600px; margin: 0 auto; padding: 2rem 1rem;">
                    <h2 style="font-family: Fraunces, serif; font-size: 2rem; margin-bottom: 0.5rem; text-align: center; color: var(--ink);">${t.rules_title}</h2>
                    <p style="color: var(--ink-muted); margin-bottom: 1.5rem; text-align: center; font-size: 1rem;">${t.rules_intro}</p>

                    <div style="background: var(--card-bg, rgba(255,255,255,0.7)); backdrop-filter: blur(12px); border: 1px solid var(--border); border-radius: 16px; padding: 20px; margin-bottom: 1.5rem;">
                        <ul style="list-style-type: none; padding: 0; margin: 0;">
                            ${t.rules_bullets.map(b => `
                                <li style="margin-bottom: 12px; padding-left: 28px; position: relative; line-height: 1.4; font-size: 0.95rem; color: var(--ink);">
                                    <span style="position: absolute; left: 0; top: 0; color: var(--teal); font-weight: bold;">✔</span>
                                    ${esc(b)}
                                </li>
                            `).join('')}
                        </ul>
                    </div>

                    <p style="text-align: center; font-style: italic; color: var(--ink-faint); margin-bottom: 2rem; font-size: 0.9rem; line-height: 1.4;">
                        ${esc(t.rules_footer)}
                    </p>

                    <div class="game-controls" style="display: flex; gap: 1rem;">
                        <button class="btn-g-secondary" onclick="COSY_GAME.reset()" style="flex: 1; padding: 12px; border-radius: 12px; border: 1px solid var(--border); background: transparent; cursor: pointer; font-weight: 700;">
                            ${t.btn_back}
                        </button>
                        <button class="btn-g-primary" onclick="COSY_GAME.goToLevels()" style="flex: 2; padding: 12px; border-radius: 12px; background: var(--teal); color: #fff; border: none; cursor: pointer; font-weight: 700;">
                            ${t.btn_start}
                        </button>
                    </div>
                </div>
            `;
        },

        goToLevels() {
            const t = UI_TEXTS[state.lang];
            const body = document.getElementById('go-body');
            const deck = window.HUNDRED_QUESTIONS_DECKS[state.deckKey];
            const levels = state.deckKey === 'myself' ? deck[state.subgroup].levels : deck.levels;

            body.innerHTML = `
                <div class="levels-screen" style="max-width: 600px; margin: 0 auto; padding: 2rem 1rem;">
                    <h2 style="font-family: Fraunces, serif; font-size: 2rem; margin-bottom: 0.5rem; text-align: center; color: var(--ink);">${t.level_select_title}</h2>
                    <p style="color: var(--ink-muted); margin-bottom: 2rem; text-align: center; font-size: 0.95rem; line-height: 1.4;">${t.level_select_desc}</p>

                    <div style="display: grid; grid-template-columns: 1fr; gap: 12px; margin-bottom: 2rem;">
                        ${levels.map((lvl, idx) => {
                            const name = lvl.name[state.lang] || lvl.name['en'] || 'Level';
                            const lvlLevelBadge = state.deckKey === 'civic' ? ' · CEFR B1+' : '';
                            return `
                                <div class="lvl-card" onclick="COSY_GAME.startLevel(${idx})" style="background: var(--card-bg, rgba(255,255,255,0.7)); backdrop-filter: blur(12px); border: 1px solid var(--border); border-radius: 16px; padding: 16px; display: flex; justify-content: space-between; align-items: center; cursor: pointer; transition: transform 0.2s, border-color 0.2s;">
                                    <div>
                                        <div style="font-weight: 700; color: var(--ink); font-size: 1.05rem;">${esc(name)}</div>
                                        <div style="font-size: 0.8rem; color: var(--ink-muted); margin-top: 4px;">${t.q_lbl}s ${lvl.range}${lvlLevelBadge}</div>
                                    </div>
                                    <div style="font-size: 1.2rem; color: var(--teal);">▶</div>
                                </div>
                            `;
                        }).join('')}
                    </div>

                    <button class="btn-g-secondary" onclick="COSY_GAME.reset()" style="width: 100%; padding: 12px; border-radius: 12px; border: 1px solid var(--border); background: transparent; cursor: pointer; font-weight: 700;">
                        ${t.btn_back}
                    </button>
                </div>
            `;
        },

        startLevel(lvlIdx) {
            state.currentLevelIdx = lvlIdx;
            state.currentQuestionIdx = 0;
            state.passUsed = false;
            state.cardFlipped = false;
            state.selectedAnswerIdx = null;
            COSY_GAME.renderQuestion();
        },

        toggleCardFlip() {
            if (state.deckKey === 'student' || state.deckKey === 'family' || state.deckKey === 'myself') {
                state.cardFlipped = !state.cardFlipped;
                COSY_GAME.renderQuestion();
            }
        },

        selectAnswer(idx, correctIdx) {
            if (state.selectedAnswerIdx !== null) return; // Answer already selected
            state.selectedAnswerIdx = idx;

            if (window.gameUtils && gameUtils.playGameSound) {
                if (idx === correctIdx) {
                    gameUtils.playGameSound('success');
                } else {
                    gameUtils.playGameSound('error');
                }
            }
            COSY_GAME.renderQuestion();
        },

        renderQuestion() {
            const t = UI_TEXTS[state.lang];
            const body = document.getElementById('go-body');
            const deck = window.HUNDRED_QUESTIONS_DECKS[state.deckKey];
            const level = (state.deckKey === 'myself' ? deck[state.subgroup].levels : deck.levels)[state.currentLevelIdx];
            const q = level.questions[state.currentQuestionIdx];

            const lvlName = level.name[state.lang] || level.name['en'] || 'Level';
            const progressNum = state.currentQuestionIdx + 1;
            const progressMax = level.questions.length;
            const globalNum = parseInt(level.range.split(/[–-]/)[0]) + state.currentQuestionIdx;

            // Determine if card is two-sided and active side text
            const hasTwoSides = (state.deckKey === 'student' || state.deckKey === 'family' || state.deckKey === 'myself');
            let qText = '';

            if (hasTwoSides) {
                const sideData = state.cardFlipped ? q.a : q.c;
                qText = sideData[state.lang] || sideData['en'] || '...';
            } else {
                qText = q[state.lang] || q['en'] || '...';
            }

            // Apply dynamic vocabulary/grammar adaptations
            qText = adaptText(qText, state.lang);

            const cardBorderColor = state.cardFlipped ? 'var(--coral, #f07167)' : 'var(--teal)';
            const cardBgColor = state.cardFlipped ? 'var(--coral-light, #fdf0ed)' : 'var(--card-bg, rgba(255,255,255,0.7))';
            const sideBadge = hasTwoSides
                ? `<span style="background: ${state.cardFlipped ? 'var(--coral, #f07167)' : 'var(--teal)'}; color: white; padding: 4px 10px; border-radius: 50px; font-size: 0.75rem; font-weight: bold;">
                    ${state.cardFlipped ? t.back_badge : t.front_badge}
                   </span>`
                : '';

            // Handle multiple-choice options (e.g. for Civic deck)
            let optionsHTML = '';
            let qOptionsObj = q.options;
            // If subgroup exists in options, load that subgroup's options
            if (qOptionsObj && qOptionsObj[state.subgroup]) {
                const subObj = qOptionsObj[state.subgroup];
                const optList = subObj[state.lang] || subObj['en'] || [];
                const correctIdx = subObj.correct;

                optionsHTML = `
                    <div class="word-options" style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin-top: 2rem;" onclick="event.stopPropagation()">
                        ${optList.map((opt, oIdx) => {
                            let statusClass = '';
                            let statusStyle = '';
                            if (state.selectedAnswerIdx !== null) {
                                if (oIdx === correctIdx) {
                                    statusClass = 'correct';
                                    statusStyle = 'border-color: var(--green); background: var(--green-light); color: var(--green); font-weight: bold;';
                                } else if (oIdx === state.selectedAnswerIdx) {
                                    statusClass = 'wrong';
                                    statusStyle = 'border-color: var(--coral); background: var(--coral-light); color: var(--coral); text-decoration: line-through;';
                                } else {
                                    statusStyle = 'opacity: 0.6; pointer-events: none;';
                                }
                            }
                            return `
                                <button class="word-opt ${statusClass}" onclick="COSY_GAME.selectAnswer(${oIdx}, ${correctIdx})" style="padding: 12px; border-radius: 12px; border: 1px solid var(--border); font-size: 0.95rem; cursor: pointer; text-align: left; transition: all 0.2s; ${statusStyle}">
                                    ${esc(opt)}
                                </button>
                            `;
                        }).join('')}
                    </div>
                `;
            }

            body.innerHTML = `
                <div class="gameplay-screen" style="max-width: 600px; margin: 0 auto; padding: 1.5rem 1rem;">
                    <div class="score-bar" style="display: flex; justify-content: space-between; margin-bottom: 1.5rem; background: var(--card-bg, rgba(255,255,255,0.7)); backdrop-filter: blur(12px); border: 1px solid var(--border); border-radius: 12px; padding: 10px 16px;">
                        <div style="text-align: left;">
                            <div style="font-size: 0.8rem; font-weight: 700; color: var(--teal); text-transform: uppercase;">${esc(lvlName)}</div>
                            <div style="font-size: 0.9rem; font-weight: 600; color: var(--ink-muted); margin-top: 2px;">
                                ${t.q_lbl} ${progressNum} ${t.q_of} ${progressMax}
                            </div>
                        </div>
                        <div style="text-align: right;">
                            <div style="font-size: 0.8rem; font-weight: 700; color: var(--ink-faint); text-transform: uppercase;">Global #</div>
                            <div style="font-size: 1.1rem; font-weight: 800; color: var(--ink); margin-top: 2px;">${globalNum}</div>
                        </div>
                    </div>

                    <!-- Interactive Gameplay Card -->
                    <div class="game-card" onclick="COSY_GAME.toggleCardFlip()" style="position: relative; background: ${cardBgColor}; backdrop-filter: blur(12px); border: 3px solid ${cardBorderColor}; border-radius: 24px; padding: 2.5rem 1.5rem; margin-bottom: 1.5rem; text-align: center; box-shadow: 0 10px 30px rgba(0,0,0,0.05); cursor: ${hasTwoSides ? 'pointer' : 'default'}; transition: transform 0.3s, background-color 0.3s, border-color 0.3s;">

                        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.5rem;">
                            <div style="font-size: 0.8rem; font-weight: 800; text-transform: uppercase; color: var(--ink-faint); letter-spacing: 0.05em;">
                                ${esc(deck.title[state.lang])}
                            </div>
                            ${sideBadge}
                        </div>

                        <div style="font-size: 1.5rem; font-weight: 700; line-height: 1.5; color: var(--ink); margin: 1.5rem 0 2rem;">
                            "${esc(qText)}"
                        </div>

                        ${hasTwoSides ? `<div style="font-size: 0.8rem; color: var(--ink-muted); font-weight: 600; letter-spacing: 0.05em;">${t.click_to_flip}</div>` : ''}

                        <!-- Multiple Choice Options -->
                        ${optionsHTML}

                        <div style="display: flex; justify-content: center; gap: 10px; margin-top: 1rem;" onclick="event.stopPropagation()">
                            <button onclick="COSY_GAME.speakQuestion()" style="background: rgba(107, 143, 113, 0.1); border: none; border-radius: 50px; width: 44px; height: 44px; display: flex; align-items: center; justify-content: center; cursor: pointer; font-size: 1.2rem;" title="Listen">
                                🔊
                            </button>
                        </div>
                    </div>

                    <div style="margin-bottom: 2rem; display: flex; justify-content: center;">
                        <button id="pass-btn" class="${state.passUsed ? 'btn-g-secondary' : 'btn-g-danger'}" onclick="COSY_GAME.usePass()" ${state.passUsed ? 'disabled' : ''} style="padding: 8px 16px; border-radius: 50px; font-size: 0.85rem; font-weight: 700; cursor: pointer; transition: background 0.2s;">
                            ${state.passUsed ? t.btn_pass : t.btn_pass_avail}
                        </button>
                    </div>

                    <div class="game-controls" style="display: flex; gap: 1rem; justify-content: space-between;">
                        <button class="btn-g-secondary" onclick="COSY_GAME.prevQuestion()" ${state.currentQuestionIdx === 0 ? 'disabled' : ''} style="flex: 1; padding: 12px; border-radius: 12px; font-weight: 700; cursor: pointer;">
                            ${t.btn_prev}
                        </button>
                        <button class="btn-g-secondary" onclick="COSY_GAME.goToLevels()" style="padding: 12px 18px; border-radius: 12px; font-weight: 700; cursor: pointer;">
                            ${t.btn_levels}
                        </button>
                        <button class="btn-g-primary" onclick="COSY_GAME.nextQuestion()" style="flex: 1; padding: 12px; border-radius: 12px; background: var(--teal); color: #fff; border: none; cursor: pointer; font-weight: 700;">
                            ${t.btn_next}
                        </button>
                    </div>
                </div>
            `;
        },

        speakQuestion() {
            const deck = window.HUNDRED_QUESTIONS_DECKS[state.deckKey];
            const level = (state.deckKey === 'myself' ? deck[state.subgroup].levels : deck.levels)[state.currentLevelIdx];
            const q = level.questions[state.currentQuestionIdx];
            const hasTwoSides = (state.deckKey === 'student' || state.deckKey === 'family' || state.deckKey === 'myself');

            let qText = '';
            if (hasTwoSides) {
                const sideData = state.cardFlipped ? q.a : q.c;
                qText = sideData[state.lang] || sideData['en'] || '';
            } else {
                qText = q[state.lang] || q['en'] || '';
            }

            qText = adaptText(qText, state.lang);

            if (window.gameUtils && gameUtils.speak) {
                gameUtils.speak(qText, state.lang);
            }
        },

        usePass() {
            if (state.passUsed) return;
            state.passUsed = true;
            if (window.COSY && COSY.showToast) {
                COSY.showToast("Pass used for this evening 🤫");
            } else {
                alert("Pass used for this evening 🤫");
            }
            COSY_GAME.renderQuestion();
        },

        prevQuestion() {
            if (state.currentQuestionIdx > 0) {
                state.currentQuestionIdx--;
                state.cardFlipped = false; // Reset flip state
                state.selectedAnswerIdx = null; // Reset selection state
                COSY_GAME.renderQuestion();
            }
        },

        nextQuestion() {
            const deck = window.HUNDRED_QUESTIONS_DECKS[state.deckKey];
            const level = (state.deckKey === 'myself' ? deck[state.subgroup].levels : deck.levels)[state.currentLevelIdx];
            if (state.currentQuestionIdx < level.questions.length - 1) {
                state.currentQuestionIdx++;
                state.cardFlipped = false; // Reset flip state
                state.selectedAnswerIdx = null; // Reset selection state
                COSY_GAME.renderQuestion();
            } else {
                COSY_GAME.renderCompletion();
            }
        },

        renderCompletion() {
            const t = UI_TEXTS[state.lang];
            const body = document.getElementById('go-body');

            body.innerHTML = `
                <div class="completion-screen" style="max-width: 600px; margin: 0 auto; padding: 3rem 1rem; text-align: center;">
                    <div style="font-size: 4rem; margin-bottom: 1.5rem;">🎉</div>
                    <h2 style="font-family: Fraunces, serif; font-size: 2.2rem; margin-bottom: 1rem; color: var(--ink);">${t.completion_title}</h2>
                    <p style="color: var(--ink-muted); margin-bottom: 2rem; font-size: 1.1rem; line-height: 1.5;">${t.completion_desc}</p>

                    <p style="font-style: italic; color: var(--ink-faint); margin-bottom: 3rem; font-size: 0.95rem; line-height: 1.4;">
                        ${t.completion_footer}
                    </p>

                    <div style="display: flex; gap: 1rem; justify-content: center; max-width: 400px; margin: 0 auto;">
                        <button class="btn-g-secondary" onclick="COSY_GAME.goToLevels()" style="flex: 1; padding: 12px; border-radius: 12px; border: 1px solid var(--border); background: transparent; cursor: pointer; font-weight: 700;">
                            ${t.btn_levels}
                        </button>
                        <button class="btn-g-primary" onclick="COSY_GAME.reset()" style="flex: 1; padding: 12px; border-radius: 12px; background: var(--teal); color: #fff; border: none; cursor: pointer; font-weight: 700;">
                            Decks ↺
                        </button>
                    </div>
                </div>
            `;
        }
    };

    document.addEventListener('DOMContentLoaded', renderSetup);
})();