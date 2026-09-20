// TODO: verify level classification
(function() {
    const data = [
    {
        "word": "Deutschland",
        "level": "elementary",
        "theme": "places",
        "lang": "de",
        "form": "noun",
        "transcription": "",
        "emoji": "❓",
        "definitions": [
            {
                "text": "Deutschland",
                "examples": []
            }
        ],
        "id": "de_elementary_places_002"
    },
    {
        "word": "Kanada",
        "level": "elementary",
        "theme": "places",
        "lang": "de",
        "form": "noun",
        "transcription": "",
        "emoji": "❓",
        "definitions": [
            {
                "text": "Kanada",
                "examples": []
            }
        ],
        "id": "de_elementary_places_003"
    },
    {
        "word": "Mexiko",
        "level": "elementary",
        "theme": "places",
        "lang": "de",
        "form": "noun",
        "transcription": "",
        "emoji": "❓",
        "definitions": [
            {
                "text": "Mexiko",
                "examples": []
            }
        ],
        "id": "de_elementary_places_004"
    },
    {
        "word": "Ägypten",
        "level": "elementary",
        "theme": "places",
        "lang": "de",
        "form": "noun",
        "transcription": "",
        "emoji": "❓",
        "definitions": [
            {
                "text": "Ägypten",
                "examples": []
            }
        ],
        "id": "de_elementary_places_005"
    },
    {
        "word": "Türkei",
        "level": "elementary",
        "theme": "places",
        "lang": "de",
        "form": "noun",
        "transcription": "",
        "emoji": "❓",
        "definitions": [
            {
                "text": "Türkei",
                "examples": []
            }
        ],
        "id": "de_elementary_places_006"
    },
    {
        "word": "Portugal",
        "level": "elementary",
        "theme": "places",
        "lang": "de",
        "form": "noun",
        "transcription": "",
        "emoji": "❓",
        "definitions": [
            {
                "text": "Portugal",
                "examples": []
            }
        ],
        "id": "de_elementary_places_007"
    },
    {
        "word": "Armenien",
        "level": "elementary",
        "theme": "places",
        "lang": "de",
        "form": "noun",
        "transcription": "",
        "emoji": "❓",
        "definitions": [
            {
                "text": "Armenien",
                "examples": []
            }
        ],
        "id": "de_elementary_places_008"
    },
    {
        "word": "Georgien",
        "level": "elementary",
        "theme": "places",
        "lang": "de",
        "form": "noun",
        "transcription": "",
        "emoji": "❓",
        "definitions": [
            {
                "text": "Georgien",
                "examples": []
            }
        ],
        "id": "de_elementary_places_009"
    },
    {
        "word": "Berlin",
        "level": "elementary",
        "theme": "places",
        "lang": "de",
        "form": "noun",
        "transcription": "",
        "emoji": "❓",
        "definitions": [
            {
                "text": "Berlin",
                "examples": []
            }
        ],
        "id": "de_elementary_places_010"
    },
    {
        "word": "Madrid",
        "level": "elementary",
        "theme": "places",
        "lang": "de",
        "form": "noun",
        "transcription": "",
        "emoji": "❓",
        "definitions": [
            {
                "text": "Madrid",
                "examples": []
            }
        ],
        "id": "de_elementary_places_011"
    },
    {
        "word": "Toronto",
        "level": "elementary",
        "theme": "places",
        "lang": "de",
        "form": "noun",
        "transcription": "",
        "emoji": "❓",
        "definitions": [
            {
                "text": "Toronto",
                "examples": []
            }
        ],
        "id": "de_elementary_places_012"
    },
    {
        "word": "Istanbul",
        "level": "elementary",
        "theme": "places",
        "lang": "de",
        "form": "noun",
        "transcription": "",
        "emoji": "❓",
        "definitions": [
            {
                "text": "Istanbul",
                "examples": []
            }
        ],
        "id": "de_elementary_places_013"
    },
    {
        "word": "Lissabon",
        "level": "elementary",
        "theme": "places",
        "lang": "de",
        "form": "noun",
        "transcription": "",
        "emoji": "❓",
        "definitions": [
            {
                "text": "Lissabon",
                "examples": []
            }
        ],
        "id": "de_elementary_places_014"
    },
    {
        "word": "Eriwan",
        "level": "elementary",
        "theme": "places",
        "lang": "de",
        "form": "noun",
        "transcription": "",
        "emoji": "❓",
        "definitions": [
            {
                "text": "Eriwan",
                "examples": []
            }
        ],
        "id": "de_elementary_places_015"
    },
    {
        "word": "Tiflis",
        "level": "elementary",
        "theme": "places",
        "lang": "de",
        "form": "noun",
        "transcription": "",
        "emoji": "❓",
        "definitions": [
            {
                "text": "Tiflis",
                "examples": []
            }
        ],
        "id": "de_elementary_places_016"
    },
    {
        "word": "Kasan",
        "level": "elementary",
        "theme": "places",
        "lang": "de",
        "form": "noun",
        "transcription": "",
        "emoji": "❓",
        "definitions": [
            {
                "text": "Kasan",
                "examples": []
            }
        ],
        "id": "de_elementary_places_017"
    }
];
    const lang = "de";
    window.locationsData = window.locationsData || {};
    window.locationsData[lang] = [...(window.locationsData[lang] || []), ...data];
    if (window.vocabularyData) {
        window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
    }
})();
