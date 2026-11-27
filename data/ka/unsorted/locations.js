// TODO: verify level classification
(function() {
    const data = [
    {
        "word": "გერმანია",
        "level": "elementary",
        "theme": "places",
        "lang": "ka",
        "form": "noun",
        "transcription": "",
        "emoji": "❓",
        "definitions": [
            {
                "text": "გერმანია",
                "examples": []
            }
        ],
        "id": "ka_elementary_places_002"
    },
    {
        "word": "კანადა",
        "level": "elementary",
        "theme": "places",
        "lang": "ka",
        "form": "noun",
        "transcription": "",
        "emoji": "❓",
        "definitions": [
            {
                "text": "კანადა",
                "examples": []
            }
        ],
        "id": "ka_elementary_places_003"
    },
    {
        "word": "მექსიკა",
        "level": "elementary",
        "theme": "places",
        "lang": "ka",
        "form": "noun",
        "transcription": "",
        "emoji": "❓",
        "definitions": [
            {
                "text": "მექსიკა",
                "examples": []
            }
        ],
        "id": "ka_elementary_places_004"
    },
    {
        "word": "ეგვიპტე",
        "level": "elementary",
        "theme": "places",
        "lang": "ka",
        "form": "noun",
        "transcription": "",
        "emoji": "❓",
        "definitions": [
            {
                "text": "ეგვიპტე",
                "examples": []
            }
        ],
        "id": "ka_elementary_places_005"
    },
    {
        "word": "თურქეთი",
        "level": "elementary",
        "theme": "places",
        "lang": "ka",
        "form": "noun",
        "transcription": "",
        "emoji": "❓",
        "definitions": [
            {
                "text": "თურქეთი",
                "examples": []
            }
        ],
        "id": "ka_elementary_places_006"
    },
    {
        "word": "პორტუგალია",
        "level": "elementary",
        "theme": "places",
        "lang": "ka",
        "form": "noun",
        "transcription": "",
        "emoji": "❓",
        "definitions": [
            {
                "text": "პორტუგალია",
                "examples": []
            }
        ],
        "id": "ka_elementary_places_007"
    },
    {
        "word": "სომხეთი",
        "level": "elementary",
        "theme": "places",
        "lang": "ka",
        "form": "noun",
        "transcription": "",
        "emoji": "❓",
        "definitions": [
            {
                "text": "სომხეთი",
                "examples": []
            }
        ],
        "id": "ka_elementary_places_008"
    },
    {
        "word": "საქართველო",
        "level": "elementary",
        "theme": "places",
        "lang": "ka",
        "form": "noun",
        "transcription": "",
        "emoji": "❓",
        "definitions": [
            {
                "text": "საქართველო",
                "examples": []
            }
        ],
        "id": "ka_elementary_places_009"
    },
    {
        "word": "ბერლინი",
        "level": "elementary",
        "theme": "places",
        "lang": "ka",
        "form": "noun",
        "transcription": "",
        "emoji": "❓",
        "definitions": [
            {
                "text": "ბერლინი",
                "examples": []
            }
        ],
        "id": "ka_elementary_places_010"
    },
    {
        "word": "მადრიდი",
        "level": "elementary",
        "theme": "places",
        "lang": "ka",
        "form": "noun",
        "transcription": "",
        "emoji": "❓",
        "definitions": [
            {
                "text": "მადრიდი",
                "examples": []
            }
        ],
        "id": "ka_elementary_places_011"
    },
    {
        "word": "ტორონტო",
        "level": "elementary",
        "theme": "places",
        "lang": "ka",
        "form": "noun",
        "transcription": "",
        "emoji": "❓",
        "definitions": [
            {
                "text": "ტორონტო",
                "examples": []
            }
        ],
        "id": "ka_elementary_places_012"
    },
    {
        "word": "სტამბოლი",
        "level": "elementary",
        "theme": "places",
        "lang": "ka",
        "form": "noun",
        "transcription": "",
        "emoji": "❓",
        "definitions": [
            {
                "text": "სტამბოლი",
                "examples": []
            }
        ],
        "id": "ka_elementary_places_013"
    },
    {
        "word": "ლისაბონი",
        "level": "elementary",
        "theme": "places",
        "lang": "ka",
        "form": "noun",
        "transcription": "",
        "emoji": "❓",
        "definitions": [
            {
                "text": "ლისაბონი",
                "examples": []
            }
        ],
        "id": "ka_elementary_places_014"
    },
    {
        "word": "ერევანი",
        "level": "elementary",
        "theme": "places",
        "lang": "ka",
        "form": "noun",
        "transcription": "",
        "emoji": "❓",
        "definitions": [
            {
                "text": "ერევანი",
                "examples": []
            }
        ],
        "id": "ka_elementary_places_015"
    },
    {
        "word": "თბილისი",
        "level": "elementary",
        "theme": "places",
        "lang": "ka",
        "form": "noun",
        "transcription": "",
        "emoji": "❓",
        "definitions": [
            {
                "text": "თბილისი",
                "examples": []
            }
        ],
        "id": "ka_elementary_places_016"
    },
    {
        "word": "ყაზანი",
        "level": "elementary",
        "theme": "places",
        "lang": "ka",
        "form": "noun",
        "transcription": "",
        "emoji": "❓",
        "definitions": [
            {
                "text": "ყაზანი",
                "examples": []
            }
        ],
        "id": "ka_elementary_places_017"
    }
];
    const lang = "ka";
    window.locationsData = window.locationsData || {};
    window.locationsData[lang] = [...(window.locationsData[lang] || []), ...data];
    if (window.vocabularyData) {
        window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
    }
})();
