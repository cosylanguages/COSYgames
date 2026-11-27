(function() {
    const data = {
      fluency: [],
      opinions: [],
      battle: [],
      critic: [
        '"The only way to do great work is to love what you do.": Steve Jobs',
        '"In the middle of every difficulty lies opportunity.": Albert Einstein',
        '"The journey of a thousand miles begins with one step.": Lao Tzu',
        '"Be the change you wish to see in the world.": Gandhi',
        '"It does not matter how slowly you go as long as you do not stop.": Confucius',
        '"The best time to plant a tree was 20 years ago. The second best time is now.": Proverb',
        '"You miss 100% of the shots you don\'t take.": Wayne Gretzky',
        '"Imagination is more important than knowledge.": Einstein',
        '"Life is what happens when you\'re busy making other plans.": John Lennon',
        '"The unexamined life is not worth living.": Socrates',
        '"You will face many defeats in life, but never let yourself be defeated.": Maya Angelou',
        '"To live is the rarest thing in the world. Most people exist, that is all.": Oscar Wilde',
        '"Nothing in life is to be feared, it is only to be understood.": Marie Curie',
        '"It is not because things are difficult that we do not dare; it is because we do not dare that they are difficult.": Seneca',
        '"Perfection is achieved not when there is nothing more to add, but when there is nothing left to take away.": Antoine de Saint-Exupéry'
      ],
      action: {
        starter: [],
        elementary: [],
        intermediate: [],
        upper_intermediate: [],
        advanced: [],
        proficiency: []
      },
      identity: [],
      wordlinker: [],
      etymology: [
        { word: 'Astronomy', options: ['Greek', 'Latin', 'Arabic', 'Sanskrit'], answer: 'Greek', level: 'easy', path: 'Astronomy → Astronomia (Latin) → Astronomia (Greek)', detail: 'From "astron" (star) + "nomos" (law).' },
        { word: 'Library', options: ['Latin', 'French', 'Greek', 'Germanic'], answer: 'Latin', level: 'easy', path: 'Library → Librairie (French) → Librarium (Latin)', detail: 'From "liber" (book).' },
        { word: 'Ballet', options: ['French', 'Italian', 'Russian', 'Spanish'], answer: 'French', level: 'easy', path: 'Ballet → Balletto (Italian) → Ballo (dance)', detail: 'Diminutive of "ballo".' },
        { word: 'Pizza', options: ['Italian', 'Greek', 'Latin', 'Arabic'], answer: 'Greek', level: 'easy', path: 'Pizza → Pitta (Greek?)', detail: 'Ancient roots traceable to Greek "pitta".' },
        { word: 'Biology', options: ['Greek', 'Latin', 'French', 'Dutch'], answer: 'Greek', level: 'easy', path: 'Biology → Biologie (German/French) → Bios + Logia (Greek)', detail: 'From "bios" (life) + "logia" (study).' },
        { word: 'Hotel', options: ['French', 'Latin', 'Spanish', 'German'], answer: 'French', level: 'easy', path: 'Hotel → Hôtel (French) → Hostel (Old French) → Hospitale (Latin)', detail: 'Related to "hospitality".' },
        { word: 'Window', options: ['Old Norse', 'Old English', 'Latin', 'Dutch'], answer: 'Old Norse', level: 'easy', path: 'Window → Vindauga (Old Norse)', detail: 'Literally means "wind eye" (vindr + auga).' },

        { word: 'Salary', options: ['Latin', 'Greek', 'Arabic', 'French'], answer: 'Latin', level: 'easy', path: 'Salary → Salaire (French) → Salarium (Latin)', detail: 'From "sal" (salt), originally salt money paid to Roman soldiers.' },
        { word: 'Zero', options: ['Arabic', 'Sanskrit', 'Greek', 'Latin'], answer: 'Arabic', level: 'medium', path: 'Zero → Zero (French/Italian) → Sifr (Arabic)', detail: 'From "sifr" (empty, cipher).' },
        { word: 'Candidate', options: ['Latin', 'Greek', 'French', 'German'], answer: 'Latin', level: 'medium', path: 'Candidate → Candidatus (Latin) → Candidus (shining white)', detail: 'Roman political office-seekers wore bright white togas.' },
        { word: 'Paper', options: ['Greek', 'Latin', 'Egyptian', 'Chinese'], answer: 'Greek', level: 'medium', path: 'Paper → Papier (Old French) → Papyrus (Latin) → Papyros (Greek)', detail: 'Named after the Cyperus papyrus plant used to make writing material.' },
        { word: 'Avocado', options: ['Nahuatl', 'Spanish', 'Maya', 'Quechua'], answer: 'Nahuatl', level: 'medium', path: 'Avocado → Aguacate (Spanish) → Āhuacatl (Nahuatl)', detail: 'From the Aztec word meaning "testicle" (due to its shape).' },
        { word: 'Gym', options: ['Greek', 'Latin', 'German', 'French'], answer: 'Greek', level: 'medium', path: 'Gym → Gymnasium (Latin) → Gymnasion (Greek)', detail: 'From "gymnos" (naked), as athletes in ancient Greece trained without clothes.' },
        { word: 'Cliché', options: ['French', 'German', 'Italian', 'Spanish'], answer: 'French', level: 'medium', path: 'Cliché → Cliche (French onomatopoeia)', detail: 'Mimics the clicking sound of a printing plate casting type.' },

        { word: 'Algebra', options: ['Arabic', 'Greek', 'Latin', 'Persian'], answer: 'Arabic', level: 'medium', path: 'Algebra → Al-jabr (Arabic)', detail: 'Meaning "reunion of broken parts".' },
        { word: 'Safari', options: ['Arabic', 'Swahili', 'Hindi', 'Zulu'], answer: 'Arabic', level: 'medium', path: 'Safari → Safari (Swahili) → Safar (Arabic)', detail: 'From "safara" (to travel).' },
        { word: 'Robot', options: ['Czech', 'Russian', 'German', 'Polish'], answer: 'Czech', level: 'medium', path: 'Robot → Robota (Czech)', detail: 'Coined by Josef Čapek from "robota" (forced labour).' },
        { word: 'Ketchup', options: ['Chinese', 'Malay', 'English', 'French'], answer: 'Chinese', level: 'medium', path: 'Ketchup → Kôe-chiap (Hokkien Chinese)', detail: 'Originally a fermented fish sauce.' },
        { word: 'Chocolate', options: ['Nahuatl', 'Spanish', 'Maya', 'French'], answer: 'Nahuatl', level: 'medium', path: 'Chocolate → Chocolate (Spanish) → Xocolātl (Nahuatl)', detail: 'Meaning "bitter water".' },
        { word: 'Lemon', options: ['Arabic', 'Old French', 'Persian', 'Hindi'], answer: 'Arabic', level: 'medium', path: 'Lemon → Limon (Old French) → Laymun (Arabic) → Limun (Persian)', detail: 'Ancient roots in Asia.' },
        { word: 'Silhouette', options: ['French', 'Italian', 'German', 'Spanish'], answer: 'French', level: 'medium', path: 'Silhouette → Étienne de Silhouette', detail: 'Named after an 18th-century French finance minister known for harsh thrift.' },

        { word: 'Nostalgia', options: ['Greek', 'Latin', 'German', 'French'], answer: 'Greek', level: 'hard', path: 'Nostalgia → Nostos + Algos (Greek)', detail: 'From "nostos" (return home) + "algos" (pain/longing).' },
        { word: 'Tsunami', options: ['Japanese', 'Chinese', 'Polynesian', 'Korean'], answer: 'Japanese', level: 'hard', path: 'Tsunami → Tsu + Nami (Japanese)', detail: 'From "tsu" (harbour) + "nami" (wave).' },
        { word: 'Sarcasm', options: ['Greek', 'Latin', 'French', 'Italian'], answer: 'Greek', level: 'hard', path: 'Sarcasm → Sarkasmos (Greek)', detail: 'From "sarkazein" (to tear flesh like a dog, or bite the lips in rage).' },

        { word: 'Juggernaut', options: ['Sanskrit', 'Hindi', 'Tamil', 'Persian'], answer: 'Sanskrit', level: 'hard', path: 'Juggernaut → Jagannatha (Sanskrit)', detail: 'Lord of the World, a title for Krishna.' },
        { word: 'Quarantine', options: ['Italian', 'French', 'Latin', 'Spanish'], answer: 'Italian', level: 'hard', path: 'Quarantine → Quarantina (Italian) → Quaranta (forty)', detail: 'Forty days of isolation for ships.' },
        { word: 'Assassin', options: ['Arabic', 'Persian', 'Turkish', 'French'], answer: 'Arabic', level: 'hard', path: 'Assassin → Assassins (French) → Hashshashin (Arabic)', detail: 'Refers to a specific sect.' },
        { word: 'Clue', options: ['Greek', 'Latin', 'Old English', 'French'], answer: 'Greek', level: 'hard', path: 'Clue → Clew (Old English) → Ariadne\'s Thread (Greek Myth)', detail: 'Originally meant a ball of thread.' },
        { word: 'Buck', options: ['American English', 'Old English', 'Germanic', 'Dutch'], answer: 'American English', level: 'hard', path: 'Buck → Buckskin (unit of trade)', detail: 'Units of trade on the American frontier.' },
        { word: 'Pajamas', options: ['Hindi/Urdu', 'Persian', 'Arabic', 'Turkish'], answer: 'Hindi/Urdu', level: 'hard', path: 'Pajamas → Pay-jama (Hindi/Urdu) → Pa-jameh (Persian)', detail: 'Pā (leg) + jāmeh (garment).' },
        { word: 'Serendipity', options: ['Persian', 'Arabic', 'Sanskrit', 'Greek'], answer: 'Persian', level: 'hard', path: 'Serendipity → Serendip (Persian name for Sri Lanka)', detail: 'Coined by Horace Walpole from the fairy tale "The Three Princes of Serendip".' },

        { word: 'Synergism', options: ['Greek', 'Latin', 'French', 'German'], answer: 'Greek', level: 'hard', path: 'Synergism → Synergos (Greek)', detail: 'From "syn" (together) + "ergon" (work).' },
        { word: 'Iconoclast', options: ['Greek', 'Latin', 'Byzantine', 'French'], answer: 'Greek', level: 'hard', path: 'Iconoclast → Eikonoklastes (Greek)', detail: 'From "eikon" (image) + "klastes" (breaker).' },
        { word: 'Pandemonium', options: ['Greek/Latin', 'French', 'Italian', 'German'], answer: 'Greek/Latin', level: 'hard', path: 'Pandemonium → Pan + Daimon (John Milton\'s Paradise Lost)', detail: 'Coined by John Milton meaning "place of all demons".' }
      ],
      storychain: [
        'Secret', 'Map', 'Key', 'Storm', 'Stranger', 'Bridge', 'Letter', 'Ring', 'Mirror', 'Shadow',
        'Clock', 'Compass', 'Gift', 'Tunnel', 'Stairs', 'Window', 'Garden', 'Forest', 'Ocean', 'Mountain',
        'Labyrinth', 'Whisper', 'Eclipse', 'Sanctuary', 'Enigma', 'Tapestry', 'Horizon', 'Alchemist',
        'Lighthouse', 'Chronicle', 'Constellation', 'Acropolis', 'Symphony', 'Mirage', 'Footprint'
      ]
    };

    window.gameData = window.gameData || {};
    window.gameData['universal'] = data;
})();