// TODO: verify level classification
(function() {
    const data = [
    {
        "word": "Μέγας Αλέξανδρος",
        "level": "elementary",
        "theme": "describing",
        "lang": "el",
        "form": "noun",
        "transcription": "",
        "emoji": "❓",
        "definitions": [
            {
                "text": "Μέγας Αλέξανδρος",
                "examples": []
            }
        ],
        "id": "el_elementary_describing_008"
    }
];
    const lang = "el";
    window.peopleData = window.peopleData || {};
    window.peopleData[lang] = [...(window.peopleData[lang] || []), ...data];
    if (window.vocabularyData) {
        window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
    }
})();
