(function() {
    'use strict';

    window.COSY_SCENE_DATA = window.COSY_SCENE_DATA || {};
    window.COSY_SCENE_DATA['routine_calendar'] = {
        id: 'routine_calendar',
        type: 'hub',
        level: 'A1',
        title: {
            en: "Time, Routine & Calendar Hub ⏰",
            fr: "Horloge, Routine & Calendrier ⏰",
            it: "Orologio, Routine & Calendario ⏰",
            ru: "Время, Распорядок и Календарь ⏰",
            el: "Χρόνος, Ρουτίνα & Ημερολόγιο ⏰",
            es: "Tiempo, Rutina y Calendario ⏰",
            de: "Zeit, Routine & Kalender ⏰"
        },
        viewBox: "0 0 800 500",
        doors: [
            {
                targetSceneId: "routine",
                x: 60, y: 120, width: 200, height: 260, labelX: 160, labelY: 100,
                labels: { en: "🌅 Daily Routine →", fr: "🌅 Routine quotidienne →", it: "🌅 Routine quotidiana →", ru: "🌅 Распорядок дня →", el: "🌅 Ημερήσια ρουτίνα →" }
            },
            {
                targetSceneId: "calendar",
                x: 300, y: 120, width: 200, height: 260, labelX: 400, labelY: 100,
                labels: { en: "🗓️ Interactive Calendar →", fr: "🗓️ Calendrier interactif →", it: "🗓️ Calendario interattivo →", ru: "🗓️ Интерактивный календарь →", el: "🗓️ Διαδραστικό ημερολόγιο →" }
            },
            {
                targetSceneId: "seasons",
                x: 540, y: 120, width: 200, height: 260, labelX: 640, labelY: 100,
                labels: { en: "❄️ Four Seasons →", fr: "❄️ Quatre saisons →", it: "❄️ Quattro stagioni →", ru: "❄️ Времена года →", el: "❄️ Τέσσερις εποχές →" }
            },
            {
                targetSceneId: "apartment",
                x: 15, y: 140, width: 35, height: 220, labelX: 32, labelY: 125,
                labels: { en: "🏠 Living Room →", fr: "🏠 Salon →", it: "🏠 Soggiorno →", ru: "🏠 Гостиная →", el: "🏠 Σαλόνι →" }
            },
            {
                targetSceneId: "city",
                x: 750, y: 140, width: 35, height: 220, labelX: 768, labelY: 125,
                labels: { en: "🏙️ City →", fr: "🏙️ Ville →", it: "🏙️ Città →", ru: "🏙️ Город →", el: "🏙️ Πόλη →" }
            }
        ],
        svgBackground: `
            <defs>
              <linearGradient id="rcBg" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stop-color="#1e1b4b" />
                <stop offset="100%" stop-color="#312e81" />
              </linearGradient>
            </defs>

            <rect x="0" y="0" width="800" height="500" fill="url(#rcBg)" />

            <!-- Doors / Portals -->
            <rect x="15" y="140" width="35" height="220" fill="#4338ca" rx="4" />
            <rect x="750" y="140" width="35" height="220" fill="#4338ca" rx="4" />

            <text x="400" y="60" fill="#ffffff" font-weight="900" font-size="22" text-anchor="middle" letter-spacing="1">TIME, ROUTINE & CALENDAR HUB ⏰</text>

            <!-- Card 1: Daily Routine -->
            <rect x="60" y="120" width="200" height="260" fill="#1e293b" stroke="#38bdf8" stroke-width="4" rx="16" />
            <rect x="60" y="120" width="200" height="50" fill="#0284c7" rx="12" />
            <text x="160" y="152" fill="#ffffff" font-weight="800" font-size="14" text-anchor="middle">1. DAILY ROUTINE</text>
            <text x="160" y="210" font-size="48" text-anchor="middle">🌅</text>
            <text x="160" y="270" fill="#f8fafc" font-weight="700" font-size="14" text-anchor="middle">Morning to Night</text>
            <text x="160" y="300" fill="#94a3b8" font-size="12" text-anchor="middle">Wake up · Brush · Work</text>

            <!-- Card 2: Calendar & Clock -->
            <rect x="300" y="120" width="200" height="260" fill="#1e293b" stroke="#10b981" stroke-width="4" rx="16" />
            <rect x="300" y="120" width="200" height="50" fill="#047857" rx="12" />
            <text x="400" y="152" fill="#ffffff" font-weight="800" font-size="14" text-anchor="middle">2. CALENDAR & TIME</text>
            <text x="400" y="210" font-size="48" text-anchor="middle">🗓️</text>
            <text x="400" y="270" fill="#f8fafc" font-weight="700" font-size="14" text-anchor="middle">Days, Months, Hours</text>
            <text x="400" y="300" fill="#94a3b8" font-size="12" text-anchor="middle">Weekdays & Weekends</text>

            <!-- Card 3: Seasons -->
            <rect x="540" y="120" width="200" height="260" fill="#1e293b" stroke="#f59e0b" stroke-width="4" rx="16" />
            <rect x="540" y="120" width="200" height="50" fill="#d97706" rx="12" />
            <text x="640" y="152" fill="#ffffff" font-weight="800" font-size="14" text-anchor="middle">3. FOUR SEASONS</text>
            <text x="640" y="210" font-size="48" text-anchor="middle">🌸</text>
            <text x="640" y="270" fill="#f8fafc" font-weight="700" font-size="14" text-anchor="middle">Spring to Winter</text>
            <text x="640" y="300" fill="#94a3b8" font-size="12" text-anchor="middle">Weather & Months</text>

            <!-- Bottom Navigation Bar -->
            <rect x="200" y="420" width="400" height="40" fill="#312e81" stroke="#6366f1" stroke-width="2" rx="20" />
            <text x="400" y="445" fill="#a5f3fc" font-weight="800" font-size="13" text-anchor="middle">CLICK ANY MODULE TO PRACTICE TIME & ROUTINE ⏰</text>
        `,
        hotspots: []
    };
})();
