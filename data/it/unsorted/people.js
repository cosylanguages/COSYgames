// TODO: verify level classification
(function() {
    const data = [
    {
        "word": "Dante Alighieri",
        "level": "elementary",
        "theme": "describing",
        "lang": "it",
        "form": "noun",
        "transcription": "",
        "emoji": "❓",
        "definitions": [
            {
                "text": "Dante Alighieri",
                "examples": []
            }
        ],
        "id": "it_elementary_describing_008"
    }
];
    const lang = "it";
    window.peopleData = window.peopleData || {};
    window.peopleData[lang] = [...(window.peopleData[lang] || []), ...data];
    if (window.vocabularyData) {
        window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
    }
})();
