(function() {
    'use strict';

    window.COSY_SCENE_DATA = window.COSY_SCENE_DATA || {};
    window.COSY_SCENE_DATA['park_nature'] = {
        id: 'park_nature',
        level: 'A2',
        title: {
            en: "Park & Nature",
            fr: "Parc et Nature",
            it: "Parco e Natura",
            ru: "Парк и природа",
            el: "Πάρκο & Φύση",
            es: "Parque y Naturaleza",
            de: "Park & Natur",
            hy: "Այգի և Բնություն",
            ka: "პარკი და ბუნება"
        },
        viewBox: "0 0 800 500",
        doors: [
            {
                targetSceneId: "city",
                x: 15, y: 140, width: 35, height: 230, labelX: 32, labelY: 125,
                labels: { en: "🚪 City →", fr: "🚪 Ville →", it: "🚪 Città →", ru: "🚪 Город →", el: "🚪 Πόλη →" }
            },
            {
                targetSceneId: "animals",
                x: 750, y: 140, width: 35, height: 230, labelX: 768, labelY: 125,
                labels: { en: "🚪 Farm →", fr: "🚪 Ferme →", it: "🚪 Fattoria →", ru: "🚪 Ферма →", el: "🚪 Φάρμα →" }
            }
        ],
        svgBackground: `
            <defs>
              <linearGradient id="parkSky" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stop-color="#38bdf8" />
                <stop offset="100%" stop-color="#bae6fd" />
              </linearGradient>
            </defs>

            <!-- Sky & Grass -->
            <rect x="0" y="0" width="800" height="260" fill="url(#parkSky)" />
            <rect x="0" y="260" width="800" height="240" fill="#4ade80" />

            <!-- Doors -->
            <rect x="15" y="140" width="35" height="220" fill="#15803d" />

            <!-- Sun -->
            <circle cx="700" cy="70" r="40" fill="#facc15" />

            <!-- Trees -->
            <rect x="120" y="180" width="24" height="100" fill="#78350f" />
            <circle cx="132" cy="150" r="50" fill="#16a34a" />

            <rect x="640" y="180" width="24" height="100" fill="#78350f" />
            <circle cx="652" cy="150" r="55" fill="#15803d" />

            <!-- Bench -->
            <rect x="300" y="320" width="200" height="40" fill="#a16207" rx="4" />
            <rect x="310" y="360" width="12" height="40" fill="#451a03" />
            <rect x="478" y="360" width="12" height="40" fill="#451a03" />

            <!-- Bicycle -->
            <circle cx="200" cy="420" r="25" stroke="#334155" stroke-width="4" fill="none" />
            <circle cx="270" cy="420" r="25" stroke="#334155" stroke-width="4" fill="none" />
            <line x1="200" y1="420" x2="235" y2="390" stroke="#ef4444" stroke-width="5" />
            <line x1="270" y1="420" x2="235" y2="390" stroke="#ef4444" stroke-width="5" />
            <line x1="235" y1="390" x2="235" y2="370" stroke="#334155" stroke-width="4" />

            <!-- Football / Soccer Ball -->
            <circle cx="560" cy="430" r="18" fill="#ffffff" stroke="#000000" stroke-width="2" />
            <polygon points="560,420 568,425 565,435 555,435 552,425" fill="#000000" />
        `,
        hotspots: [
            {
                id: "tree",
                x: 80, y: 100, width: 100, height: 180, labelX: 132, labelY: 90,
                words: { en: "Tree", fr: "Arbre", it: "Albero", ru: "Дерево", el: "Δέντρο" }
            },
            {
                id: "bench",
                x: 300, y: 310, width: 200, height: 80, labelX: 400, labelY: 300,
                words: { en: "Bench", fr: "Banc", it: "Panchina", ru: "Скамейка", el: "Παγκάκι" }
            },
            {
                id: "bicycle",
                x: 170, y: 360, width: 130, height: 90, labelX: 235, labelY: 350,
                words: { en: "Bicycle", fr: "Vélo", it: "Bicicletta", ru: "Велосипед", el: "Ποδήλατο" }
            },
            {
                id: "football",
                x: 540, y: 410, width: 40, height: 40, labelX: 560, labelY: 400,
                words: { en: "Football / Ball", fr: "Ballon de football", it: "Pallone da calcio", ru: "Футбольный мяч", el: "Μπάλα ποδοσφαίρου" }
            }
        ]
    };
})();
