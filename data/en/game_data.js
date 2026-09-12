(function() {
    const data = {
      "fluency": [
            {
                  "text": "What you do in the morning ☕",
                  "level": "starter"
            },
            {
                  "text": "Your family and friends 👨‍👩‍👧‍👦",
                  "level": "starter"
            },
            {
                  "text": "Your favourite season and why 🍂",
                  "level": "starter"
            },
            {
                  "text": "Your pet or favourite animal 🐶",
                  "level": "starter"
            },
            {
                  "text": "What you like to do on rainy days 🌧️",
                  "level": "starter"
            },
            {
                  "text": "Your morning routine ☕",
                  "level": "elementary"
            },
            {
                  "text": "Your favourite game or sport ⚽",
                  "level": "elementary"
            },
            {
                  "text": "The best meal you ever ate 🍜",
                  "level": "elementary"
            },
            {
                  "text": "A place you want to visit 🗺️",
                  "level": "elementary"
            },
            {
                  "text": "A funny day at school or work 🚴",
                  "level": "elementary"
            },
            {
                  "text": "Your favourite holiday tradition 🎄",
                  "level": "elementary"
            },
            {
                  "text": "A childhood memory 🧸",
                  "level": "intermediate"
            },
            {
                  "text": "A skill you wish you had 🎸",
                  "level": "intermediate"
            },
            {
                  "text": "Your perfect holiday destination 🌴",
                  "level": "intermediate"
            },
            {
                  "text": "The most interesting person you know 🙋",
                  "level": "intermediate"
            },
            {
                  "text": "Describe your perfect weekend ☀️",
                  "level": "intermediate"
            },
            {
                  "text": "The last time you tried something new 🎯",
                  "level": "intermediate"
            },
            {
                  "text": "A hobby you would love to start 🎨",
                  "level": "intermediate"
            },
            {
                  "text": "How technology has changed your daily life 📱",
                  "level": "intermediate"
            },
            {
                  "text": "What would you do with 1 million euros? 💰",
                  "level": "upper_intermediate"
            },
            {
                  "text": "A book or film that changed your view 📚",
                  "level": "upper_intermediate"
            },
            {
                  "text": "If you could live anywhere in the world… 🌍",
                  "level": "upper_intermediate"
            },
            {
                  "text": "Something you're proud of 🏆",
                  "level": "upper_intermediate"
            },
            {
                  "text": "An unexpected lesson life taught you 💡",
                  "level": "upper_intermediate"
            },
            {
                  "text": "What does happiness mean to you? 😊",
                  "level": "advanced"
            },
            {
                  "text": "How cultural values shape our personality 🏛️",
                  "level": "advanced"
            },
            {
                  "text": "The balance between ambition and contentment ⚖️",
                  "level": "advanced"
            }
      ],
      "opinions": [
            {
                  "text": "Social media does more harm than good.",
                  "level": "intermediate"
            },
            {
                  "text": "Everyone should learn at least two languages.",
                  "level": "intermediate"
            },
            {
                  "text": "Working from home is better than office work.",
                  "level": "intermediate"
            },
            {
                  "text": "Money can't buy happiness.",
                  "level": "intermediate"
            },
            {
                  "text": "Technology makes us less sociable.",
                  "level": "intermediate"
            },
            {
                  "text": "It's never too late to learn something new.",
                  "level": "intermediate"
            },
            {
                  "text": "Travel is the best form of education.",
                  "level": "intermediate"
            },
            {
                  "text": "Animals should not be kept in zoos.",
                  "level": "intermediate"
            },
            {
                  "text": "Fast food is one of the worst inventions.",
                  "level": "intermediate"
            },
            {
                  "text": "Reading books is more valuable than watching films.",
                  "level": "intermediate"
            },
            {
                  "text": "Cities are better places to live than the countryside.",
                  "level": "intermediate"
            },
            {
                  "text": "Artificial intelligence will change everything.",
                  "level": "intermediate"
            },
            {
                  "text": "Cooking at home is always better than eating out.",
                  "level": "intermediate"
            },
            {
                  "text": "Children should learn a musical instrument.",
                  "level": "intermediate"
            },
            {
                  "text": "The world would be better with one universal language.",
                  "level": "intermediate"
            },
            {
                  "text": "A four-day work week increases overall productivity and happiness.",
                  "level": "upper_intermediate"
            },
            {
                  "text": "Public transportation should be free for all residents.",
                  "level": "upper_intermediate"
            },
            {
                  "text": "Universal basic income is necessary for future economies.",
                  "level": "upper_intermediate"
            },
            {
                  "text": "Generative AI can never truly replace human artistic creativity.",
                  "level": "advanced"
            },
            {
                  "text": "True privacy is impossible in the modern digital age.",
                  "level": "advanced"
            }
      ],
      "battle": [
            [
                  "Mountains 🏔️",
                  "Beach 🏖️"
            ],
            [
                  "Coffee ☕",
                  "Tea 🍵"
            ],
            [
                  "Morning person 🌅",
                  "Night owl 🦉"
            ],
            [
                  "City life 🏙️",
                  "Country life 🌾"
            ],
            [
                  "Reading 📚",
                  "Watching films 🎬"
            ],
            [
                  "Summer ☀️",
                  "Winter ❄️"
            ],
            [
                  "Cats 🐱",
                  "Dogs 🐶"
            ],
            [
                  "Working from home 🏠",
                  "Office work 🏢"
            ],
            [
                  "Sweet 🍰",
                  "Savoury 🧀"
            ],
            [
                  "Travelling alone ✈️",
                  "Travelling with friends 👥"
            ],
            [
                  "Paper books 📖",
                  "E-readers 📱"
            ],
            [
                  "Cook at home 🍳",
                  "Order delivery 🍕"
            ],
            [
                  "Public transport 🚌",
                  "Private car 🚗"
            ],
            [
                  "Early morning workout 🏃",
                  "Evening gym 🏋️"
            ]
      ],
      "critic": [
            {
                  "title": "Delicious, but overpriced 🍝",
                  "type": "Restaurant",
                  "review": "The food was fantastic and the ingredients fresh, but the portions were small and the bill was a surprise.",
                  "question": "Would you return despite the high price?"
            },
            {
                  "title": "Gripping plot, weak ending 🎬",
                  "type": "Film",
                  "review": "The first two thirds of the film were captivating, but the resolution felt rushed and illogical.",
                  "question": "How important is a film's ending to your overall rating?"
            },
            {
                  "title": "Great graphics, but too many bugs 🎮",
                  "type": "Video Game",
                  "review": "The game looks beautiful, but it crashes frequently and suffers from many technical glitches.",
                  "question": "Can visuals and atmosphere compensate for technical flaws?"
            }
      ],
      "action": {
            "starter": [
                  "Cat",
                  "Dog",
                  "House",
                  "Car",
                  "Book",
                  "Water",
                  "Sun",
                  "Moon",
                  "Tree",
                  "Phone",
                  "Door",
                  "Chair",
                  "Bed",
                  "Food",
                  "Fish",
                  "Apple",
                  "Pen",
                  "Bag"
            ],
            "elementary": [
                  "Kitchen",
                  "Garden",
                  "Train",
                  "Doctor",
                  "Teacher",
                  "Music",
                  "Birthday",
                  "Swimming",
                  "Holiday",
                  "Shopping",
                  "Airport",
                  "Hospital",
                  "Library",
                  "Market"
            ],
            "intermediate": [
                  "Museum",
                  "Interview",
                  "Architect",
                  "Journalist",
                  "Parliament",
                  "Orchestra",
                  "Marathon",
                  "Exhibition",
                  "Submarine",
                  "Telescope",
                  "Laboratory"
            ],
            "upper_intermediate": [
                  "Philanthropy",
                  "Ambassador",
                  "Hypothesis",
                  "Entrepreneur",
                  "Archaeology",
                  "Symposium",
                  "Biodiversity",
                  "Infrastructure"
            ],
            "advanced": [
                  "Paradigm",
                  "Juxtaposition",
                  "Anachronism",
                  "Resilience",
                  "Nuance",
                  "Verisimilitude",
                  "Magnanimous",
                  "Vicissitude",
                  "Ubiquity"
            ],
            "proficiency": [
                  "Ephemeral",
                  "Pugnacious",
                  "Perspicacious",
                  "Sycophant",
                  "Surreptitious",
                  "Equanimity",
                  "Ineffable",
                  "Magniloquent",
                  "Sesquipedalian"
            ]
      },
      "identity": [
            {
                  "person": "A firefighter",
                  "clue": "They wear a red hat and stop fires with water.",
                  "level": "elementary"
            },
            {
                  "person": "A chef",
                  "clue": "They work in a kitchen and cook delicious meals.",
                  "level": "elementary"
            },
            {
                  "person": "A librarian",
                  "clue": "They work in a library and help people find books.",
                  "level": "elementary"
            },
            {
                  "person": "A musician",
                  "clue": "They play music or sing songs.",
                  "level": "elementary"
            },
            {
                  "person": "A veterinarian",
                  "clue": "They help sick animals like dogs and cats.",
                  "level": "elementary"
            },
            {
                  "person": "An astronaut",
                  "clue": "They travel into space beyond Earth.",
                  "level": "intermediate"
            },
            {
                  "person": "A detective",
                  "clue": "They investigate mysteries and look for clues.",
                  "level": "intermediate"
            },
            {
                  "person": "A journalist",
                  "clue": "They report news and interview people for articles.",
                  "level": "intermediate"
            },
            {
                  "person": "A photographer",
                  "clue": "They capture memories and images with a camera.",
                  "level": "intermediate"
            },
            {
                  "person": "An architect",
                  "clue": "They design houses and buildings before construction begins.",
                  "level": "upper_intermediate"
            },
            {
                  "person": "A surgeon",
                  "clue": "They perform medical operations in a hospital.",
                  "level": "upper_intermediate"
            },
            {
                  "person": "A data scientist",
                  "clue": "They analyze complex datasets to uncover trends and patterns.",
                  "level": "upper_intermediate"
            },
            {
                  "person": "A software engineer",
                  "clue": "They write code to build applications and programs.",
                  "level": "upper_intermediate"
            },
            {
                  "person": "A diplomat",
                  "clue": "They represent their country in official international relations.",
                  "level": "advanced"
            },
            {
                  "person": "A marine biologist",
                  "clue": "They study ocean plants and marine animals.",
                  "level": "advanced"
            },
            {
                  "person": "An acoustic engineer",
                  "clue": "They design rooms and buildings to control sound quality and reduce unwanted noise.",
                  "level": "advanced"
            },
            {
                  "person": "An astrophysicist",
                  "clue": "They study the physical properties of stars and galaxies.",
                  "level": "advanced"
            }
      ],
      "wordlinker": [
            {
                  "words": [
                        "Apple",
                        "Orange",
                        "Banana",
                        "Carrot"
                  ],
                  "odd": "Carrot",
                  "link": "Fruits",
                  "oddReason": "Carrot is a vegetable"
            },
            {
                  "words": [
                        "Paris",
                        "Rome",
                        "Tokyo",
                        "Amazon"
                  ],
                  "odd": "Amazon",
                  "link": "Capital cities",
                  "oddReason": "Amazon is a river, not a city"
            },
            {
                  "words": [
                        "Table",
                        "Chair",
                        "Bed",
                        "Car"
                  ],
                  "odd": "Car",
                  "link": "House furniture",
                  "oddReason": "Car is transport, not house furniture"
            },
            {
                  "words": [
                        "Milk",
                        "Water",
                        "Tea",
                        "Bread"
                  ],
                  "odd": "Bread",
                  "link": "Drinks",
                  "oddReason": "Bread is food, not a drink"
            },
            {
                  "words": [
                        "Monday",
                        "Tuesday",
                        "Friday",
                        "Summer"
                  ],
                  "odd": "Summer",
                  "link": "Days of the week",
                  "oddReason": "Summer is a season, not a day"
            },
            {
                  "words": [
                        "Dog",
                        "Cat",
                        "Fish",
                        "Phone"
                  ],
                  "odd": "Phone",
                  "link": "Animals",
                  "oddReason": "Phone is technology, not an animal"
            },
            {
                  "words": [
                        "Run",
                        "Jump",
                        "Sleep",
                        "Swim"
                  ],
                  "odd": "Sleep",
                  "link": "Actions",
                  "oddReason": "Sleep is not moving"
            },
            {
                  "words": [
                        "Red",
                        "Blue",
                        "Heavy",
                        "Green"
                  ],
                  "odd": "Heavy",
                  "link": "Colours",
                  "oddReason": "Heavy is not a colour"
            },
            {
                  "words": [
                        "Doctor",
                        "Nurse",
                        "Teacher",
                        "Pilot"
                  ],
                  "odd": "Pilot",
                  "link": "Hospital jobs",
                  "oddReason": "Pilot works on planes, not in hospitals"
            },
            {
                  "words": [
                        "Piano",
                        "Guitar",
                        "Violin",
                        "Trumpet"
                  ],
                  "odd": "none",
                  "link": "Musical instruments",
                  "oddReason": "All are instruments",
                  "level": "intermediate"
            },
            {
                  "words": [
                        "Shakespeare",
                        "Dickens",
                        "Picasso",
                        "Austen"
                  ],
                  "odd": "Picasso",
                  "link": "English authors",
                  "oddReason": "Picasso was a Spanish painter",
                  "level": "intermediate"
            },
            {
                  "words": [
                        "Sunrise",
                        "Dawn",
                        "Dusk",
                        "Twilight"
                  ],
                  "odd": "none",
                  "link": "Times of day near sunrise/sunset",
                  "oddReason": "All describe transitional light",
                  "level": "intermediate"
            },
            {
                  "words": [
                        "Happy",
                        "Joyful",
                        "Melancholy",
                        "Cheerful"
                  ],
                  "odd": "Melancholy",
                  "link": "Happy synonyms",
                  "oddReason": "Melancholy means sad",
                  "level": "upper_intermediate"
            }
      ],
      "etymology": [
            {
                  "word": "Pizza",
                  "level": "easy",
                  "options": [
                        "Italian",
                        "Greek",
                        "Latin",
                        "Arabic"
                  ],
                  "answer": "Italian",
                  "detail": "Derived from Italian pizza, which may trace back to Byzantine Greek pitta or Vulgar Latin pitch for bread dough.",
                  "path": "Greek pitta (?) → Italian pizza → English Pizza"
            },
            {
                  "word": "Kindergarten",
                  "level": "easy",
                  "options": [
                        "German",
                        "Dutch",
                        "Danish",
                        "French"
                  ],
                  "answer": "German",
                  "detail": "Coined in 1837 by German educator Friedrich Fröbel, literally translating to children's garden.",
                  "path": "German (Kinder + Garten) → English Kindergarten"
            },
            {
                  "word": "Safari",
                  "level": "easy",
                  "options": [
                        "Arabic",
                        "Swahili",
                        "Hindi",
                        "Persian"
                  ],
                  "answer": "Arabic",
                  "detail": "Entered Swahili from the Arabic word safar meaning journey or travel before reaching English.",
                  "path": "Arabic (safar) → Swahili (safari) → English Safari"
            },
            {
                  "word": "Ballet",
                  "level": "easy",
                  "options": [
                        "French",
                        "Italian",
                        "Russian",
                        "Spanish"
                  ],
                  "answer": "French",
                  "detail": "Borrowed from French ballet, which inherited it from Italian balletto, a diminutive of ballo meaning dance.",
                  "path": "Italian (ballare) → French (ballet) → English Ballet"
            },
            {
                  "word": "Gymnasium",
                  "level": "easy",
                  "options": [
                        "Greek",
                        "Latin",
                        "German",
                        "French"
                  ],
                  "answer": "Greek",
                  "detail": "From ancient Greek gymnos meaning naked, because athletes in classical Greece trained without clothes.",
                  "path": "Greek (gymnos) → Latin (gymnasium) → English Gymnasium"
            },
            {
                  "word": "Library",
                  "level": "easy",
                  "options": [
                        "Latin",
                        "French",
                        "Greek",
                        "Germanic"
                  ],
                  "answer": "Latin",
                  "detail": "Traces back to Latin liber, meaning book or inner bark of a tree used for writing.",
                  "path": "Latin (liber) → Old French (librarie) → English Library"
            },
            {
                  "word": "Window",
                  "level": "easy",
                  "options": [
                        "Old Norse",
                        "Old English",
                        "Dutch",
                        "German"
                  ],
                  "answer": "Old Norse",
                  "detail": "Combines the Old Norse words vindr (wind) and auga (eye), poetically describing an eye for the wind.",
                  "path": "Old Norse (vindauga) → Middle English (windowe) → English Window"
            },
            {
                  "word": "Dollar",
                  "level": "easy",
                  "options": [
                        "Dutch",
                        "German",
                        "Spanish",
                        "French"
                  ],
                  "answer": "Dutch",
                  "detail": "Evolved from the Dutch daler and German Thaler, named after the Joachimsthal silver mine in Bohemia.",
                  "path": "German (Thaler) → Dutch (daler) → English Dollar"
            },
            {
                  "word": "Avocado",
                  "level": "easy",
                  "options": [
                        "Nahuatl",
                        "Spanish",
                        "Maya",
                        "Quechua"
                  ],
                  "answer": "Nahuatl",
                  "detail": "Derived from the Aztec language Nahuatl word āhuacatl, adapted by Spanish explorers into aguacate.",
                  "path": "Nahuatl (āhuacatl) → Spanish (aguacate) → English Avocado"
            },
            {
                  "word": "Chocolate",
                  "level": "easy",
                  "options": [
                        "Nahuatl",
                        "Spanish",
                        "Maya",
                        "French"
                  ],
                  "answer": "Nahuatl",
                  "detail": "Borrowed from Nahuatl xocolātl, combining terms for bitter water used for ceremonial cacao drinks.",
                  "path": "Nahuatl (xocolātl) → Spanish (chocolate) → English Chocolate"
            },
            {
                  "word": "Piano",
                  "level": "easy",
                  "options": [
                        "Italian",
                        "French",
                        "German",
                        "Latin"
                  ],
                  "answer": "Italian",
                  "detail": "Short for pianoforte, from Italian piano (soft) and forte (loud), describing its dynamic range.",
                  "path": "Italian (pianoforte) → English Piano"
            },
            {
                  "word": "Mammoth",
                  "level": "easy",
                  "options": [
                        "Russian",
                        "German",
                        "Polish",
                        "Sami"
                  ],
                  "answer": "Russian",
                  "detail": "Adopted from Russian mamont, originating from Siberian indigenous languages referring to earth-burrowing giants.",
                  "path": "Siberian/Mansi → Russian (mamont) → English Mammoth"
            },
            {
                  "word": "Astronomy",
                  "level": "easy",
                  "options": [
                        "Greek",
                        "Latin",
                        "Arabic",
                        "Sanskrit"
                  ],
                  "answer": "Greek",
                  "detail": "Combines Greek astron (star) and nomos (law or arrangement) into the law of the stars.",
                  "path": "Greek (astron + nomos) → Latin (astronomia) → English Astronomy"
            },
            {
                  "word": "Alcohol",
                  "level": "medium",
                  "options": [
                        "Arabic",
                        "Latin",
                        "Persian",
                        "Greek"
                  ],
                  "answer": "Arabic",
                  "detail": "Originally described fine kohl powder produced by sublimation before shifting to distilled chemical essences.",
                  "path": "Arabic (al-kuḥl) → Medieval Latin → English Alcohol"
            },
            {
                  "word": "Tycoon",
                  "level": "medium",
                  "options": [
                        "Japanese",
                        "Chinese",
                        "Korean",
                        "Hindi"
                  ],
                  "answer": "Japanese",
                  "detail": "Adopted from Japanese taikun (great prince), used by Western diplomats to address Tokugawa shoguns.",
                  "path": "Chinese (dàjūn) → Japanese (taikun) → English Tycoon"
            },
            {
                  "word": "Robot",
                  "level": "medium",
                  "options": [
                        "Czech",
                        "Russian",
                        "German",
                        "Polish"
                  ],
                  "answer": "Czech",
                  "detail": "Introduced by Czech playwright Karel Čapek in 1920, based on robota meaning forced labour or servitude.",
                  "path": "Czech (robota) → English Robot"
            },
            {
                  "word": "Lemon",
                  "level": "medium",
                  "options": [
                        "Persian",
                        "Arabic",
                        "Old French",
                        "Hindi"
                  ],
                  "answer": "Persian",
                  "detail": "Traveled from Persian līmūn into Arabic laymūn before spreading across medieval Mediterranean trade routes.",
                  "path": "Persian (līmūn) → Arabic (laymūn) → Old French → English Lemon"
            },
            {
                  "word": "Tea",
                  "level": "medium",
                  "options": [
                        "Chinese",
                        "Dutch",
                        "Hindi",
                        "Japanese"
                  ],
                  "answer": "Chinese",
                  "detail": "Entered English via the Hokkien Chinese pronunciation tê from Amoy port traders, contrasting with Cantonese chá.",
                  "path": "Hokkien Chinese (tê) → Dutch (thee) → English Tea"
            },
            {
                  "word": "Zombie",
                  "level": "medium",
                  "options": [
                        "West African languages",
                        "Haitian Creole",
                        "Spanish",
                        "Taino"
                  ],
                  "answer": "West African languages",
                  "detail": "Origins trace to Central West African languages such as Kikongo nzambi (deity/spirit) carried through Caribbean folklore.",
                  "path": "Kikongo (nzambi) → Haitian Creole → English Zombie"
            },
            {
                  "word": "Bamboo",
                  "level": "medium",
                  "options": [
                        "Malay/Indonesian",
                        "Dutch",
                        "Hindi",
                        "Portuguese"
                  ],
                  "answer": "Malay/Indonesian",
                  "detail": "Borrowed from Malay bambu through 16th-century Dutch and Portuguese spice trade reports.",
                  "path": "Malay (bambu) → Dutch (bamboes) → English Bamboo"
            },
            {
                  "word": "Saree",
                  "level": "medium",
                  "options": [
                        "Hindi/Sanskrit",
                        "Persian",
                        "Tamil",
                        "Arabic"
                  ],
                  "answer": "Hindi/Sanskrit",
                  "detail": "Rooted in Sanskrit śāṭikā meaning strip of cloth, evolving through Prakrit into modern South Asian attire.",
                  "path": "Sanskrit (śāṭikā) → Prakrit (sāḍī) → Hindi (sāṛī) → English Saree"
            },
            {
                  "word": "Coffee",
                  "level": "medium",
                  "options": [
                        "Turkish",
                        "Arabic",
                        "Dutch",
                        "Italian"
                  ],
                  "answer": "Turkish",
                  "detail": "Passed from Arabic qahwah into Ottoman Turkish kahve and Dutch traders before reaching English coffeehouses.",
                  "path": "Arabic (qahwah) → Ottoman Turkish (kahve) → Dutch (koffie) → English Coffee"
            },
            {
                  "word": "Bagel",
                  "level": "medium",
                  "options": [
                        "Yiddish",
                        "German",
                        "Polish",
                        "Russian"
                  ],
                  "answer": "Yiddish",
                  "detail": "Brought by Eastern European Jewish immigrants from Yiddish beygl, related to German word boug for ring or bracelet.",
                  "path": "Yiddish (beygl) → Middle High German (boug) → English Bagel"
            },
            {
                  "word": "Orange",
                  "level": "medium",
                  "options": [
                        "Sanskrit",
                        "Persian",
                        "Arabic",
                        "Spanish"
                  ],
                  "answer": "Sanskrit",
                  "detail": "Traveled from Sanskrit nāraṅga through Persian and Arabic, losing its initial 'n' sound in Old French.",
                  "path": "Sanskrit (nāraṅga) → Persian → Arabic → Old French → English Orange"
            },
            {
                  "word": "Yacht",
                  "level": "medium",
                  "options": [
                        "Dutch",
                        "German",
                        "Old Norse",
                        "English"
                  ],
                  "answer": "Dutch",
                  "detail": "Shortened from Dutch jachtschip (chase ship), originally fast light vessels used by the Dutch navy to pursue pirates.",
                  "path": "Dutch (jachtschip) → English Yacht"
            },
            {
                  "word": "Hurricane",
                  "level": "medium",
                  "options": [
                        "Native American languages",
                        "Spanish",
                        "Carib",
                        "Maya"
                  ],
                  "answer": "Native American languages",
                  "detail": "Absorbed from the Indigenous Taíno and Carib name for the storm deity of the West Indies.",
                  "path": "Taino/Carib (furacán) → Spanish (huracán) → English Hurricane"
            },
            {
                  "word": "Ketchup",
                  "level": "medium",
                  "options": [
                        "Chinese",
                        "Malay",
                        "English",
                        "Dutch"
                  ],
                  "answer": "Chinese",
                  "detail": "Derived from Hokkien Chinese kôe-chiap for fermented fish brine, adapted by British sailors with tomatoes.",
                  "path": "Hokkien Chinese (kôe-chiap) → English Ketchup"
            },
            {
                  "word": "Candy",
                  "level": "hard",
                  "options": [
                        "Sanskrit",
                        "Arabic",
                        "French",
                        "Persian"
                  ],
                  "answer": "Sanskrit",
                  "detail": "Traced back to Sanskrit khaṇḍa for piece of sugar, which journeyed through Arabic qand and French sugar production.",
                  "path": "Sanskrit (khaṇḍa) → Arabic (qand) → Old French (candi) → English Candy"
            },
            {
                  "word": "Admiral",
                  "level": "hard",
                  "options": [
                        "Arabic",
                        "Latin",
                        "French",
                        "Greek"
                  ],
                  "answer": "Arabic",
                  "detail": "Evolved from Arabic amīr al-bahr (commander of the sea), truncated in European translations.",
                  "path": "Arabic (amīr al-bahr) → Medieval Latin → Anglo-Norman → English Admiral"
            },
            {
                  "word": "Checkmate",
                  "level": "hard",
                  "options": [
                        "Persian",
                        "Arabic",
                        "Turkish",
                        "French"
                  ],
                  "answer": "Persian",
                  "detail": "Directly inherited from Persian shāh māt, literally meaning the king is helpless or dead.",
                  "path": "Persian (shāh māt) → Old French (eschec mat) → English Checkmate"
            },
            {
                  "word": "Clue",
                  "level": "hard",
                  "options": [
                        "Greek",
                        "Old English",
                        "Latin",
                        "French"
                  ],
                  "answer": "Greek",
                  "detail": "Originally spelled clew meaning ball of thread, inspired by Ariadne giving Theseus thread to navigate the Labyrinth.",
                  "path": "Greek myth → Old English (cleowen) → Middle English → English Clue"
            },
            {
                  "word": "Serendipity",
                  "level": "hard",
                  "options": [
                        "Persian",
                        "Arabic",
                        "Sanskrit",
                        "Greek"
                  ],
                  "answer": "Persian",
                  "detail": "Coined in 1754 by Horace Walpole from the Persian fairy tale The Three Princes of Serendip (Sri Lanka).",
                  "path": "Persian (Sarandīb) → English Serendipity"
            },
            {
                  "word": "Juggernaut",
                  "level": "hard",
                  "options": [
                        "Sanskrit",
                        "Hindi",
                        "Tamil",
                        "Persian"
                  ],
                  "answer": "Sanskrit",
                  "detail": "Named after Jagannātha (Lord of the World), referring to massive temple chariots in Puri, India.",
                  "path": "Sanskrit (Jagannātha) → English Juggernaut"
            },
            {
                  "word": "Assassin",
                  "level": "hard",
                  "options": [
                        "Arabic",
                        "Persian",
                        "Turkish",
                        "French"
                  ],
                  "answer": "Arabic",
                  "detail": "Derived from the Arabic title for the Nizari Ismaili order of the Crusades era.",
                  "path": "Arabic (ḥashshāshīn) → Crusader French → English Assassin"
            },
            {
                  "word": "Silhouette",
                  "level": "hard",
                  "options": [
                        "French",
                        "Italian",
                        "German",
                        "Spanish"
                  ],
                  "answer": "French",
                  "detail": "Named mockingly after 18th-century French finance minister Étienne de Silhouette known for cheap cut-out portraits.",
                  "path": "French (Étienne de Silhouette) → English Silhouette"
            },
            {
                  "word": "Quarantine",
                  "level": "hard",
                  "options": [
                        "Italian",
                        "French",
                        "Latin",
                        "Spanish"
                  ],
                  "answer": "Italian",
                  "detail": "From Venetian Italian quarentena (forty days), the isolation period imposed on ships during the Black Death.",
                  "path": "Italian (quarentena / quaranta) → English Quarantine"
            },
            {
                  "word": "Sarcasm",
                  "level": "hard",
                  "options": [
                        "Greek",
                        "Latin",
                        "French",
                        "Italian"
                  ],
                  "answer": "Greek",
                  "detail": "From Greek sarkazein, literally meaning to tear flesh or bite the lips in rage.",
                  "path": "Greek (sarkazein) → Late Latin → French → English Sarcasm"
            },
            {
                  "word": "Hazard",
                  "level": "hard",
                  "options": [
                        "Arabic",
                        "Old French",
                        "Spanish",
                        "Persian"
                  ],
                  "answer": "Arabic",
                  "detail": "Derived from Arabic az-zahr (the die), referring to a medieval dice game played in Palestine.",
                  "path": "Arabic (az-zahr) → Old French (hasard) → English Hazard"
            },
            {
                  "word": "Tulip",
                  "level": "hard",
                  "options": [
                        "Turkish",
                        "Persian",
                        "Dutch",
                        "Arabic"
                  ],
                  "answer": "Turkish",
                  "detail": "Named because the flower shape resembles a Turkish turban (tülbent), entering Europe during Ottoman diplomacy.",
                  "path": "Persian (tulipan) → Turkish (tülbent) → French → English Tulip"
            },
            {
                  "word": "Nostalgia",
                  "level": "hard",
                  "options": [
                        "Greek",
                        "Latin",
                        "German",
                        "French"
                  ],
                  "answer": "Greek",
                  "detail": "Coined in the 17th century by a Swiss physician combining Greek nostos (return home) and algos (pain).",
                  "path": "Greek (nostos + algos) → Modern Latin → English Nostalgia"
            }
      ],
      "storychain": []
};

    window.gameData = window.gameData || {};
    window.gameData['en'] = data;
})();