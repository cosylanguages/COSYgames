(function() {
    'use strict';

    window.COSY_SCENE_DATA = window.COSY_SCENE_DATA || {};
    window.COSY_SCENE_DATA['airport'] = {
        id: 'airport',
        level: 'B1',
        title: {
            en: "Airport & Terminal",
            fr: "Aéroport et Terminal",
            it: "Aeroporto e Terminal",
            ru: "Аэропорт и терминал",
            el: "Αεροδρόμιο & Τερματικός",
            es: "Aeropuerto y Terminal",
            de: "Flughafen & Terminal",
            hy: "Օդանավակայան",
            ka: "აეროპორტი"
        },
        viewBox: "0 0 800 500",
        doors: [
            {
                targetSceneId: "city",
                x: 15, y: 140, width: 35, height: 230, labelX: 32, labelY: 125,
                labels: { en: "🚪 City →", fr: "🚪 Ville →", it: "🚪 Città →", ru: "🚪 Город →", el: "🚪 Πόλη →" }
            }
        ],
        svgBackground: `
            <defs>
              <linearGradient id="apSky" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stop-color="#38bdf8" />
                <stop offset="100%" stop-color="#bae6fd" />
              </linearGradient>
            </defs>

            <!-- Sky & Runway View -->
            <rect x="0" y="0" width="800" height="240" fill="url(#apSky)" />
            <rect x="0" y="240" width="800" height="260" fill="#94a3b8" />

            <!-- Large Glass Window -->
            <rect x="60" y="40" width="680" height="200" fill="#e0f2fe" opacity="0.7" stroke="#0284c7" stroke-width="4" />

            <!-- Airplane Outside Window -->
            <path d="M200 120 L350 110 L450 130 L400 150 Z" fill="#f8fafc" stroke="#334155" stroke-width="2" />
            <polygon points="320,112 360,80 380,80 350,110" fill="#0284c7" />

            <!-- Control Tower -->
            <rect x="620" y="60" width="30" height="120" fill="#475569" />
            <polygon points="600,60 670,60 650,40 620,40" fill="#38bdf8" />

            <!-- Doors -->
            <rect x="15" y="140" width="35" height="220" fill="#334155" />

            <!-- Departure Board -->
            <rect x="260" y="50" width="280" height="80" fill="#0f172a" stroke="#f59e0b" stroke-width="4" rx="4" />
            <text x="400" y="80" fill="#fef08a" font-size="14" font-family="monospace" text-anchor="middle">DEPARTURES / FLIGHTS</text>
            <text x="280" y="105" fill="#22c55e" font-size="11" font-family="monospace">LON BA123  10:30  GATE 4</text>

            <!-- Luggage Conveyor Belt -->
            <rect x="120" y="320" width="560" height="60" fill="#334155" rx="30" />
            <ellipse cx="400" cy="350" rx="260" ry="20" fill="#1e293b" />

            <!-- Suitcases -->
            <rect x="220" y="330" width="50" height="30" fill="#ef4444" rx="4" />
            <rect x="360" y="335" width="60" height="30" fill="#3b82f6" rx="4" />
            <rect x="520" y="330" width="45" height="30" fill="#10b981" rx="4" />
        `,
        hotspots: [
            {
                id: "airplane",
                x: 200, y: 70, width: 250, height: 90, labelX: 325, labelY: 60,
                words: { en: "Airplane", fr: "Avion", it: "Aereo", ru: "Самолет", el: "Αεροπλάνο" }
            },
            {
                id: "departure_board",
                x: 260, y: 50, width: 280, height: 80, labelX: 400, labelY: 40,
                words: { en: "Departure Board", fr: "Panneau d'affichage", it: "Tabellone partenze", ru: "Табло вылета", el: "Πίνακας αναχωρήσεων" }
            },
            {
                id: "suitcase",
                x: 215, y: 320, width: 60, height: 50, labelX: 245, labelY: 310,
                words: { en: "Suitcase / Luggage", fr: "Valise / Bagage", it: "Valigia / Bagaglio", ru: "Чемодан / Багаж", el: "Βαλίτσα / Αποσκευή" }
            },
            {
                id: "conveyor_belt",
                x: 120, y: 320, width: 560, height: 60, labelX: 400, labelY: 395,
                words: { en: "Conveyor Belt", fr: "Tapis roulant", it: "Nastro trasportatore", ru: "Багажная лента", el: "Ιμάντας μεταφοράς" }
            }
        ]
    };
})();
