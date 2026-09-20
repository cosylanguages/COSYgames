// TODO: verify level classification
(function() {
    const data = [
    {
        "word": "Германия",
        "level": "elementary",
        "theme": "places",
        "lang": "ba",
        "form": "noun",
        "transcription": "",
        "emoji": "❓",
        "definitions": [
            {
                "text": "Германия",
                "examples": []
            }
        ],
        "id": "ba_elementary_places_002"
    },
    {
        "word": "Канада",
        "level": "elementary",
        "theme": "places",
        "lang": "ba",
        "form": "noun",
        "transcription": "",
        "emoji": "❓",
        "definitions": [
            {
                "text": "Канада",
                "examples": []
            }
        ],
        "id": "ba_elementary_places_003"
    },
    {
        "word": "Мексика",
        "level": "elementary",
        "theme": "places",
        "lang": "ba",
        "form": "noun",
        "transcription": "",
        "emoji": "❓",
        "definitions": [
            {
                "text": "Мексика",
                "examples": []
            }
        ],
        "id": "ba_elementary_places_004"
    },
    {
        "word": "Египет",
        "level": "elementary",
        "theme": "places",
        "lang": "ba",
        "form": "noun",
        "transcription": "",
        "emoji": "❓",
        "definitions": [
            {
                "text": "Египет",
                "examples": []
            }
        ],
        "id": "ba_elementary_places_005"
    },
    {
        "word": "Төркиә",
        "level": "elementary",
        "theme": "places",
        "lang": "ba",
        "form": "noun",
        "transcription": "",
        "emoji": "❓",
        "definitions": [
            {
                "text": "Төркиә",
                "examples": []
            }
        ],
        "id": "ba_elementary_places_006"
    },
    {
        "word": "Португалия",
        "level": "elementary",
        "theme": "places",
        "lang": "ba",
        "form": "noun",
        "transcription": "",
        "emoji": "❓",
        "definitions": [
            {
                "text": "Португалия",
                "examples": []
            }
        ],
        "id": "ba_elementary_places_007"
    },
    {
        "word": "Армения",
        "level": "elementary",
        "theme": "places",
        "lang": "ba",
        "form": "noun",
        "transcription": "",
        "emoji": "❓",
        "definitions": [
            {
                "text": "Армения",
                "examples": []
            }
        ],
        "id": "ba_elementary_places_008"
    },
    {
        "word": "Грузия",
        "level": "elementary",
        "theme": "places",
        "lang": "ba",
        "form": "noun",
        "transcription": "",
        "emoji": "❓",
        "definitions": [
            {
                "text": "Грузия",
                "examples": []
            }
        ],
        "id": "ba_elementary_places_009"
    },
    {
        "word": "Берлин",
        "level": "elementary",
        "theme": "places",
        "lang": "ba",
        "form": "noun",
        "transcription": "",
        "emoji": "❓",
        "definitions": [
            {
                "text": "Берлин",
                "examples": []
            }
        ],
        "id": "ba_elementary_places_010"
    },
    {
        "word": "Мадрид",
        "level": "elementary",
        "theme": "places",
        "lang": "ba",
        "form": "noun",
        "transcription": "",
        "emoji": "❓",
        "definitions": [
            {
                "text": "Мадрид",
                "examples": []
            }
        ],
        "id": "ba_elementary_places_011"
    },
    {
        "word": "Торонто",
        "level": "elementary",
        "theme": "places",
        "lang": "ba",
        "form": "noun",
        "transcription": "",
        "emoji": "❓",
        "definitions": [
            {
                "text": "Торонто",
                "examples": []
            }
        ],
        "id": "ba_elementary_places_012"
    },
    {
        "word": "Стамбул",
        "level": "elementary",
        "theme": "places",
        "lang": "ba",
        "form": "noun",
        "transcription": "",
        "emoji": "❓",
        "definitions": [
            {
                "text": "Стамбул",
                "examples": []
            }
        ],
        "id": "ba_elementary_places_013"
    },
    {
        "word": "Лиссабон",
        "level": "elementary",
        "theme": "places",
        "lang": "ba",
        "form": "noun",
        "transcription": "",
        "emoji": "❓",
        "definitions": [
            {
                "text": "Лиссабон",
                "examples": []
            }
        ],
        "id": "ba_elementary_places_014"
    },
    {
        "word": "Ереван",
        "level": "elementary",
        "theme": "places",
        "lang": "ba",
        "form": "noun",
        "transcription": "",
        "emoji": "❓",
        "definitions": [
            {
                "text": "Ереван",
                "examples": []
            }
        ],
        "id": "ba_elementary_places_015"
    },
    {
        "word": "Тбилиси",
        "level": "elementary",
        "theme": "places",
        "lang": "ba",
        "form": "noun",
        "transcription": "",
        "emoji": "❓",
        "definitions": [
            {
                "text": "Тбилиси",
                "examples": []
            }
        ],
        "id": "ba_elementary_places_016"
    },
    {
        "word": "Казан",
        "level": "elementary",
        "theme": "places",
        "lang": "ba",
        "form": "noun",
        "transcription": "",
        "emoji": "❓",
        "definitions": [
            {
                "text": "Казан",
                "examples": []
            }
        ],
        "id": "ba_elementary_places_017"
    }
];
    const lang = "ba";
    window.locationsData = window.locationsData || {};
    window.locationsData[lang] = [...(window.locationsData[lang] || []), ...data];
    if (window.vocabularyData) {
        window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
    }
})();
