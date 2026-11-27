(function() {
    window.gameData = window.gameData || {};
    window.gameData["fr"] = window.gameData["fr"] || {};
    window.gameData["fr"].wordlinker = [
  {
    "words": [
      "Pomme",
      "Orange",
      "Banane",
      "Carotte"
    ],
    "odd": "Carotte",
    "link": "Fruits",
    "oddReason": "La carotte est un légume"
  },
  {
    "words": [
      "Paris",
      "Rome",
      "Tokyo",
      "Amazone"
    ],
    "odd": "Amazone",
    "link": "Capitales",
    "oddReason": "L'Amazone est un fleuve, pas une ville"
  },
  {
    "words": [
      "Piano",
      "Guitare",
      "Violon",
      "Trompette"
    ],
    "odd": "none",
    "link": "Instruments de musique",
    "oddReason": "Tous sont des instruments"
  },
  {
    "words": [
      "Heureux",
      "Joyeux",
      "Mélancolique",
      "Chaleureux"
    ],
    "odd": "Mélancolique",
    "link": "Adjectifs positifs",
    "oddReason": "Mélancolique signifie triste"
  },
  {
    "words": [
      "Médecin",
      "Infirmier",
      "Chirurgien",
      "Pilote"
    ],
    "odd": "Pilote",
    "link": "Métiers de la santé",
    "oddReason": "Le pilote pilote des avions, pas en hôpital"
  }
];
})();
