/**
 * games/data/scenes/routine.js
 * Unit 9 — Daily Routine 3-panel scene dataset for Scene Match activity.
 */
(function() {
    'use strict';

    if (!window.COSY_SCENE_DATA) {
        window.COSY_SCENE_DATA = {};
    }

    window.COSY_SCENE_DATA.routine = {
        id: 'routine',
        level: 'A1',
        title: {
            en: 'Daily Routine',
            fr: 'Routine quotidienne',
            it: 'Routine quotidiana',
            ru: 'Распорядок дня',
            el: 'Καθημερινή ρουτίνα'
        },
        viewBox: '0 0 800 500',
        doors: [
            {
                targetSceneId: "city",
                x: 15, y: 140, width: 35, height: 230, labelX: 32, labelY: 125,
                labels: { en: "🚪 City →", fr: "🚪 Ville →", it: "🚪 Città →", ru: "🚪 Город →", el: "🚪 Πόλη →" }
            },
            {
                targetSceneId: "calendar",
                x: 745, y: 140, width: 35, height: 230, labelX: 762, labelY: 125,
                labels: { en: "📅 Calendar →", fr: "📅 Calendrier →", it: "📅 Calendario →", ru: "📅 Календарь →", el: "📅 Ημερολόγιο →" }
            }
        ],
        hotspots: [
            {
                id: 'alarm_clock',
                x: 40,
                y: 220,
                width: 60,
                height: 60,
                labelX: 70,
                labelY: 200,
                words: {
                    en: 'Alarm clock',
                    fr: 'Réveil',
                    it: 'Sveglia',
                    ru: 'Будильник',
                    el: 'Ξυπνητήρι'
                }
            },
            {
                id: 'wake_up',
                x: 110,
                y: 180,
                width: 120,
                height: 120,
                labelX: 170,
                labelY: 160,
                words: {
                    en: 'Wake up',
                    fr: 'Se réveiller',
                    it: 'Svegliarsi',
                    ru: 'Просыпаться',
                    el: 'Ξυπνάω'
                }
            },
            {
                id: 'breakfast',
                x: 60,
                y: 350,
                width: 140,
                height: 90,
                labelX: 130,
                labelY: 330,
                words: {
                    en: 'Breakfast',
                    fr: 'Petit-déjeuner',
                    it: 'Colazione',
                    ru: 'Завтрак',
                    el: 'Πρωινό'
                }
            },
            {
                id: 'bus_stop',
                x: 300,
                y: 180,
                width: 90,
                height: 180,
                labelX: 345,
                labelY: 160,
                words: {
                    en: 'Bus stop',
                    fr: 'Arrêt de bus',
                    it: 'Fermata dell\'autobus',
                    ru: 'Автобусная остановка',
                    el: 'Stasi leoforeiou'
                }
            },
            {
                id: 'office',
                x: 410,
                y: 200,
                width: 110,
                height: 160,
                labelX: 465,
                labelY: 180,
                words: {
                    en: 'Office',
                    fr: 'Bureau',
                    it: 'Ufficio',
                    ru: 'Офис',
                    el: 'Γραφείο'
                }
            },
            {
                id: 'dinner',
                x: 560,
                y: 350,
                width: 110,
                height: 90,
                labelX: 615,
                labelY: 330,
                words: {
                    en: 'Dinner',
                    fr: 'Dîner',
                    it: 'Cena',
                    ru: 'Ужин',
                    el: 'Δείπνο'
                }
            },
            {
                id: 'relax',
                x: 680,
                y: 280,
                width: 90,
                height: 100,
                labelX: 725,
                labelY: 260,
                words: {
                    en: 'Relaxing',
                    fr: 'Relaxation',
                    it: 'Relax',
                    ru: 'Отдых',
                    el: 'Χαλάρωση'
                }
            },
            {
                id: 'sleep',
                x: 580,
                y: 180,
                width: 160,
                height: 90,
                labelX: 660,
                labelY: 160,
                words: {
                    en: 'Sleep',
                    fr: 'Dormir',
                    it: 'Dormire',
                    ru: 'Спать',
                    el: 'Κοιμάμαι'
                }
            }
        ],
        svgBackground: `
            <defs>
                <linearGradient id="rt-morning" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stop-color="#fef3c7"/>
                    <stop offset="100%" stop-color="#fde68a"/>
                </linearGradient>
                <linearGradient id="rt-day" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stop-color="#e0f2fe"/>
                    <stop offset="100%" stop-color="#bae6fd"/>
                </linearGradient>
                <linearGradient id="rt-night" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stop-color="#1e1b4b"/>
                    <stop offset="100%" stop-color="#312e81"/>
                </linearGradient>
            </defs>

            <!-- Panel 1: Morning (Left) -->
            <rect x="10" y="20" width="250" height="460" fill="url(#rt-morning)" rx="12" stroke="#f59e0b" stroke-width="3"/>
            <text x="135" y="50" font-weight="700" font-size="16" fill="#78350f" text-anchor="middle">1. Morning 🌅</text>

            <!-- Bed & Waking figure -->
            <rect x="110" y="220" width="120" height="80" fill="#ec4899" rx="8"/>
            <circle cx="150" cy="210" r="18" fill="#fde047"/>
            <!-- Alarm Clock -->
            <circle cx="70" cy="250" r="22" fill="#ef4444" stroke="#991b1b" stroke-width="2"/>
            <circle cx="70" cy="250" r="17" fill="#ffffff"/>
            <line x1="70" y1="250" x2="70" y2="238" stroke="#000" stroke-width="2"/>
            <line x1="70" y1="250" x2="80" y2="250" stroke="#000" stroke-width="2"/>
            <!-- Breakfast table -->
            <rect x="60" y="380" width="140" height="60" fill="#b45309" rx="4"/>
            <circle cx="100" cy="375" r="16" fill="#ffffff" stroke="#cbd5e1"/>
            <ellipse cx="100" cy="375" rx="10" ry="10" fill="#f97316"/>
            <rect x="140" y="360" width="20" height="25" fill="#f8fafc" stroke="#cbd5e1" rx="2"/>

            <!-- Panel 2: Commute & Work (Center) -->
            <rect x="275" y="20" width="250" height="460" fill="url(#rt-day)" rx="12" stroke="#0284c7" stroke-width="3"/>
            <text x="400" y="50" font-weight="700" font-size="16" fill="#0369a1" text-anchor="middle">2. Work & Commute 🚌</text>

            <!-- Bus Stop -->
            <rect x="305" y="190" width="80" height="170" fill="#e2e8f0" rx="4"/>
            <rect x="315" y="200" width="60" height="40" fill="#38bdf8" rx="2"/>
            <text x="345" y="225" font-weight="700" font-size="12" fill="#ffffff" text-anchor="middle">BUS</text>
            <!-- Office Building -->
            <rect x="410" y="160" width="110" height="200" fill="#475569" rx="4"/>
            <rect x="425" y="180" width="20" height="25" fill="#fef08a"/>
            <rect x="455" y="180" width="20" height="25" fill="#fef08a"/>
            <rect x="485" y="180" width="20" height="25" fill="#38bdf8"/>
            <rect x="425" y="220" width="20" height="25" fill="#38bdf8"/>
            <rect x="455" y="220" width="20" height="25" fill="#fef08a"/>
            <rect x="485" y="220" width="20" height="25" fill="#fef08a"/>

            <!-- Panel 3: Evening & Night (Right) -->
            <rect x="540" y="20" width="250" height="460" fill="url(#rt-night)" rx="12" stroke="#4338ca" stroke-width="3"/>
            <text x="665" y="50" font-weight="700" font-size="16" fill="#c7d2fe" text-anchor="middle">3. Evening 🌙</text>

            <!-- Sleep Bed -->
            <rect x="580" y="200" width="160" height="70" fill="#6366f1" rx="8"/>
            <rect x="580" y="185" width="45" height="30" fill="#ffffff" rx="4"/>
            <!-- Dinner Table -->
            <rect x="560" y="380" width="110" height="60" fill="#78350f" rx="4"/>
            <circle cx="615" cy="375" r="18" fill="#ffffff"/>
            <!-- TV / Relaxing -->
            <rect x="690" y="300" width="70" height="60" fill="#1e293b" rx="4"/>
            <rect x="695" y="305" width="60" height="45" fill="#38bdf8" opacity="0.8" rx="2"/>
        `
    };
})();
