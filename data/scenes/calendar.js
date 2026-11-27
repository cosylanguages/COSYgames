(function() {
    'use strict';

    window.COSY_SCENE_DATA = window.COSY_SCENE_DATA || {};
    window.COSY_SCENE_DATA['calendar'] = {
        id: 'calendar',
        level: 'A1',
        title: {
            en: "Interactive Calendar 📅",
            fr: "Calendrier interactif 📅",
            it: "Calendario interattivo 📅",
            ru: "Интерактивный календарь 📅",
            el: "Διαδραστικό ημερολόγιο 📅",
            es: "Calendario interactivo 📅",
            de: "Interaktiver Kalender 📅"
        },
        viewBox: "0 0 800 500",
        doors: [
            {
                targetSceneId: "routine",
                x: 60, y: 60, width: 330, height: 180, labelX: 225, labelY: 50,
                labels: { en: "🌅 Routine Walkthrough →", fr: "🌅 Voir la routine →", it: "🌅 Guarda la routine →", ru: "🌅 Перейти к распорядку →", el: "🌅 Δείτε τη ρουτίνα →" }
            },
            {
                targetSceneId: "seasons",
                x: 410, y: 260, width: 330, height: 180, labelX: 575, labelY: 250,
                labels: { en: "❄️ Four Seasons →", fr: "❄️ Voir les quatre saisons →", it: "❄️ Quattro stagioni →", ru: "❄️ Времена года →", el: "❄️ Τέσσερις εποχές →" }
            },
            {
                targetSceneId: "city",
                x: 15, y: 140, width: 35, height: 220, labelX: 32, labelY: 125,
                labels: { en: "🚪 City →", fr: "🚪 Ville →", it: "🚪 Città →", ru: "🚪 Город →", el: "🚪 Πόλη →" }
            }
        ],
        svgBackground: `
            <defs>
              <linearGradient id="calBg" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stop-color="#312e81" />
                <stop offset="100%" stop-color="#1e1b4b" />
              </linearGradient>
            </defs>

            <rect x="0" y="0" width="800" height="500" fill="url(#calBg)" />

            <!-- Doors -->
            <rect x="15" y="140" width="35" height="220" fill="#4338ca" rx="4" />

            <!-- Left Panel: Times of Day & Week -->
            <rect x="60" y="60" width="330" height="380" fill="#1e293b" stroke="#6366f1" stroke-width="4" rx="12" />
            <rect x="60" y="60" width="330" height="40" fill="#4338ca" rx="8" />
            <text x="225" y="86" fill="#ffffff" font-weight="700" font-size="16" text-anchor="middle">TIME OF DAY & WEEK ⏰</text>

            <rect x="80" y="120" width="90" height="80" fill="#fef3c7" stroke="#f59e0b" stroke-width="3" rx="8" />
            <text x="125" y="150" font-size="24" text-anchor="middle">🌅</text>
            <text x="125" y="180" fill="#78350f" font-weight="700" font-size="12" text-anchor="middle">Morning</text>

            <rect x="180" y="120" width="90" height="80" fill="#e0f2fe" stroke="#0284c7" stroke-width="3" rx="8" />
            <text x="225" y="150" font-size="24" text-anchor="middle">☀️</text>
            <text x="225" y="180" fill="#0369a1" font-weight="700" font-size="12" text-anchor="middle">Afternoon</text>

            <rect x="280" y="120" width="90" height="80" fill="#c7d2fe" stroke="#4338ca" stroke-width="3" rx="8" />
            <text x="325" y="150" font-size="24" text-anchor="middle">🌙</text>
            <text x="325" y="180" fill="#312e81" font-weight="700" font-size="12" text-anchor="middle">Evening</text>

            <rect x="80" y="240" width="135" height="170" fill="#334155" stroke="#94a3b8" stroke-width="3" rx="8" />
            <text x="147" y="270" font-size="22" text-anchor="middle">💼</text>
            <text x="147" y="300" fill="#f8fafc" font-weight="700" font-size="14" text-anchor="middle">Weekday</text>
            <text x="147" y="330" fill="#cbd5e1" font-size="10" text-anchor="middle">Mon - Fri</text>

            <rect x="235" y="240" width="135" height="170" fill="#10b981" stroke="#047857" stroke-width="3" rx="8" />
            <text x="302" y="270" font-size="22" text-anchor="middle">🎉</text>
            <text x="302" y="300" fill="#ffffff" font-weight="700" font-size="14" text-anchor="middle">Weekend</text>
            <text x="302" y="330" fill="#ecfdf5" font-size="10" text-anchor="middle">Sat - Sun</text>

            <!-- Right Panel: Calendar & Seasons -->
            <rect x="410" y="60" width="330" height="380" fill="#1e293b" stroke="#10b981" stroke-width="4" rx="12" />
            <rect x="410" y="60" width="330" height="40" fill="#047857" rx="8" />
            <text x="575" y="86" fill="#ffffff" font-weight="700" font-size="16" text-anchor="middle">MONTHS & SEASONS 🌸</text>

            <rect x="430" y="120" width="290" height="120" fill="#0f172a" stroke="#059669" stroke-width="2" rx="6" />
            <text x="575" y="150" fill="#a7f3d0" font-size="18" font-weight="700" font-anchor="middle" text-anchor="middle">CALENDAR YEAR 🗓️</text>
            <text x="575" y="180" fill="#cbd5e1" font-size="11" text-anchor="middle">Jan · Feb · Mar · Apr · May · Jun</text>
            <text x="575" y="210" fill="#cbd5e1" font-size="11" text-anchor="middle">Jul · Aug · Sep · Oct · Nov · Dec</text>

            <!-- Seasons 4 Grids -->
            <rect x="430" y="260" width="135" height="75" fill="#dcfce7" stroke="#16a34a" stroke-width="2" rx="6" />
            <text x="497" y="295" font-weight="700" font-size="13" fill="#15803d" text-anchor="middle">🌸 Spring</text>

            <rect x="585" y="260" width="135" height="75" fill="#fef08a" stroke="#ca8a04" stroke-width="2" rx="6" />
            <text x="652" y="295" font-weight="700" font-size="13" fill="#854d0e" text-anchor="middle">☀️ Summer</text>

            <rect x="430" y="345" width="135" height="75" fill="#ffedd5" stroke="#ea580c" stroke-width="2" rx="6" />
            <text x="497" y="380" font-weight="700" font-size="13" fill="#9a3412" text-anchor="middle">🍂 Autumn</text>

            <rect x="585" y="345" width="135" height="75" fill="#bae6fd" stroke="#0284c7" stroke-width="2" rx="6" />
            <text x="652" y="380" font-weight="700" font-size="13" fill="#0369a1" text-anchor="middle">❄️ Winter</text>
        `,
        hotspots: [
            {
                id: "morning",
                x: 80, y: 120, width: 90, height: 80, labelX: 125, labelY: 110,
                words: { en: "Morning", fr: "Matin", it: "Mattina", ru: "Утро", el: "Πρωί" }
            },
            {
                id: "afternoon",
                x: 180, y: 120, width: 90, height: 80, labelX: 225, labelY: 110,
                words: { en: "Afternoon", fr: "Après-midi", it: "Pomeriggio", ru: "День", el: "Απόγευμα" }
            },
            {
                id: "evening",
                x: 280, y: 120, width: 90, height: 80, labelX: 325, labelY: 110,
                words: { en: "Evening / Night", fr: "Soir / Nuit", it: "Sera / Notte", ru: "Вечер / Ночь", el: "Βράδυ / Νύχτα" }
            },
            {
                id: "weekday",
                x: 80, y: 240, width: 135, height: 170, labelX: 147, labelY: 230,
                words: { en: "Weekday", fr: "Jour de semaine", it: "Giorno feriale", ru: "Будний день", el: "Καθημερινή" }
            },
            {
                id: "weekend",
                x: 235, y: 240, width: 135, height: 170, labelX: 302, labelY: 230,
                words: { en: "Weekend", fr: "Week-end", it: "Fine settimana", ru: "Выходные", el: "Σαββατοκύριακο" }
            },
            {
                id: "spring",
                x: 430, y: 260, width: 135, height: 75, labelX: 497, labelY: 250,
                words: { en: "Spring", fr: "Printemps", it: "Primavera", ru: "Весна", el: "Άνοιξη" }
            },
            {
                id: "summer",
                x: 585, y: 260, width: 135, height: 75, labelX: 652, labelY: 250,
                words: { en: "Summer", fr: "Été", it: "Estate", ru: "Лето", el: "Καλοκαίρι" }
            },
            {
                id: "autumn",
                x: 430, y: 345, width: 135, height: 75, labelX: 497, labelY: 335,
                words: { en: "Autumn", fr: "Automne", it: "Autunno", ru: "Осень", el: "Φθινόπωρο" }
            },
            {
                id: "winter",
                x: 585, y: 345, width: 135, height: 75, labelX: 652, labelY: 335,
                words: { en: "Winter", fr: "Hiver", it: "Inverno", ru: "Зима", el: "Χειμώνας" }
            }
        ]
    };
})();
