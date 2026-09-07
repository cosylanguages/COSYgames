/**
 * games/this_or_that/game.js
 * Game logic for "This or That? (Tinder for Things & Concepts)"
 * Supports CEFR Levels (A0-A1, A2, B1, B2) & Rich Tinder Decks:
 * - Physical Appearance
 * - Professions
 * - Properties (Homes, Flats, Lofts, Chalets)
 * - Character Traits & Personality
 * - Hobbies & Passions
 */
(function() {
    const GAME_ID = 'thisorthat';
    const GAME_TITLE = 'This or That? 🔥';
    const GAME_META = 'Tinder Profiles & Speaking Drills (A0–B2 CEFR)';

    // CEFR Level Organized Decks
    const CEFR_DECKS = {
  "A0_A1": {
    "appearance": [
      {
        "type": "profile",
        "level": "A0-A1",
        "category": "Physical Appearance 👁️",
        "title": "Anna",
        "age": "22",
        "location": "📍 1 mile away • City Center",
        "verified": true,
        "avatar": "👩",
        "gradient": "linear-gradient(135deg, #f43f5e 0%, #fb7185 100%)",
        "visualDescription": "Young woman with short straight black hair, big brown eyes, wearing a bright red sweater and white sneakers. Friendly, warm smile.",
        "interests": [
          "#Tall",
          "#ShortBlackHair",
          "#RedSweater"
        ],
        "anthem": "🎵 'Simple Song' - Basic Pop",
        "pages": [
          {
            "tag": "🖼️ Basic Look",
            "bio": "Hi! I am Anna. I am 22 years old. I am tall with short black hair and brown eyes. I like bright clothes!"
          },
          {
            "tag": "✨ Daily Clothes",
            "bio": "I usually wear a comfortable red sweater, blue jeans, and clean white sneakers. I always wear a happy smile!"
          },
          {
            "tag": "🚩 Quick Details",
            "greenFlags": [
              "✓ Friendly big smile",
              "✓ Easy to recognize in a crowd",
              "✓ Tall and slim"
            ],
            "redFlags": [
              "✗ Always late because of picking shoes",
              "✗ Only wears red sweaters",
              "✗ Speaks very fast"
            ]
          }
        ],
        "opener": "Hello! I am Anna. Do you like red or blue sweaters?",
        "icebreakers": [
          "I like red sweaters!",
          "I prefer blue jeans!",
          "You have a nice smile!"
        ],
        "prompt": "Describe Anna using 3 simple words (hair, clothes, height)."
      },
      {
        "type": "profile",
        "level": "A0-A1",
        "category": "Physical Appearance 👁️",
        "title": "Marco",
        "age": "25",
        "location": "📍 3 miles away • Near Park",
        "verified": true,
        "avatar": "🧔",
        "gradient": "linear-gradient(135deg, #0284c7 0%, #38bdf8 100%)",
        "visualDescription": "Tall young man with curly brown hair, dark beard, green eyes, wearing a green t-shirt, denim jacket, and black glasses.",
        "interests": [
          "#CurlyHair",
          "#Beard",
          "#Glasses"
        ],
        "anthem": "🎵 'Happy Days' - Upbeat Acoustic",
        "pages": [
          {
            "tag": "🖼️ Basic Look",
            "bio": "Hello! My name is Marco. I am 25. I have curly brown hair, green eyes, and a short beard. I wear black glasses."
          },
          {
            "tag": "✨ Fashion Style",
            "bio": "My style is simple: a dark green t-shirt, blue denim jacket, and black glasses. Very casual and clean."
          },
          {
            "tag": "🚩 Quick Details",
            "greenFlags": [
              "✓ Cute curly hair",
              "✓ Nice green eyes",
              "✓ Cool black glasses"
            ],
            "redFlags": [
              "✗ Loses glasses every morning",
              "✗ Takes 30 minutes to brush beard",
              "✗ Always wears denim"
            ]
          }
        ],
        "opener": "Hi there! Do you wear glasses or have curly hair?",
        "icebreakers": [
          "I wear glasses too!",
          "I love green eyes!",
          "Cool denim jacket!"
        ],
        "prompt": "What color are Marco's eyes and hair?"
      }
    ],
    "professions": [
      {
        "type": "profile",
        "level": "A0-A1",
        "category": "Professions 💼",
        "title": "Baker (Chef John)",
        "age": "30 yrs exp",
        "location": "📍 0.5 miles away • Sunrise Bakery",
        "verified": true,
        "avatar": "👨‍🍳",
        "gradient": "linear-gradient(135deg, #d97706 0%, #f59e0b 100%)",
        "visualDescription": "Middle-aged man in a chef hat and white baker uniform dusting flour on fresh bread loaves in a warm bakery.",
        "interests": [
          "#FreshBread",
          "#EarlyMorning",
          "#DeliciousCakes"
        ],
        "anthem": "🎵 'Sweet Caroline' - Classic Oldie",
        "pages": [
          {
            "tag": "💼 Job Overview",
            "bio": "I am a baker! I wake up at 4:00 AM every morning. I bake fresh bread, croissants, and delicious chocolate cakes."
          },
          {
            "tag": "✨ Daily Work",
            "bio": "Work is fun! My kitchen smells like warm sugar and fresh flour. I sell delicious breakfast to happy people."
          },
          {
            "tag": "🚩 Job Pros & Cons",
            "greenFlags": [
              "✓ Free fresh bread every day",
              "✓ Smells like warm cinnamon",
              "✓ Smiles from customers"
            ],
            "redFlags": [
              "✗ Waking up at 4:00 AM",
              "✗ Flour on all clothes",
              "✗ Hot ovens all day"
            ]
          }
        ],
        "opener": "Good morning! Do you want fresh bread or chocolate cake today?",
        "icebreakers": [
          "Fresh bread please!",
          "Chocolate cake for me!",
          "I love croissants!"
        ],
        "prompt": "What does a baker do every morning? Would you like this job?"
      },
      {
        "type": "profile",
        "level": "A0-A1",
        "category": "Professions 💼",
        "title": "Doctor (Dr. Sarah)",
        "age": "8 yrs exp",
        "location": "📍 2 miles away • City Hospital",
        "verified": true,
        "avatar": "👩‍⚕️",
        "gradient": "linear-gradient(135deg, #059669 0%, #34d399 100%)",
        "visualDescription": "Female doctor with blonde ponytail, wearing a white coat and blue stethoscope around her neck, standing in a bright clinic.",
        "interests": [
          "#HelpPeople",
          "#WhiteCoat",
          "#HealthyLife"
        ],
        "anthem": "🎵 'Healing Hands' - Calm Melodic",
        "pages": [
          {
            "tag": "💼 Job Overview",
            "bio": "I am a doctor in a hospital. I help sick people feel better. I listen to their hearts and give good medicine."
          },
          {
            "tag": "✨ Daily Work",
            "bio": "I wear a white coat and a blue stethoscope. I talk to children and adults to keep everybody healthy and happy."
          },
          {
            "tag": "🚩 Job Pros & Cons",
            "greenFlags": [
              "✓ Helps save lives",
              "✓ Very respected job",
              "✓ Makes people healthy"
            ],
            "redFlags": [
              "✗ Long night shifts",
              "✗ Very busy schedule",
              "✗ Hard examinations"
            ]
          }
        ],
        "opener": "Hello! How are you feeling today? Are you healthy?",
        "icebreakers": [
          "I feel great!",
          "I have a headache",
          "Thank you for helping people!"
        ],
        "prompt": "Why is a doctor's job important? Describe Dr. Sarah's uniform."
      }
    ],
    "properties": [
      {
        "type": "profile",
        "level": "A0-A1",
        "category": "Properties 🏠",
        "title": "Cozy Studio Flat",
        "age": "Built 2020",
        "location": "📍 0.8 miles away • Sunny Avenue",
        "verified": true,
        "avatar": "🏙️",
        "gradient": "linear-gradient(135deg, #8b5cf6 0%, #c084fc 100%)",
        "visualDescription": "Modern bright studio apartment with large window, wooden floor, yellow small sofa, kitchen counter, and indoor green plant.",
        "interests": [
          "#StudioFlat",
          "#BrightWindow",
          "#WoodenFloor"
        ],
        "anthem": "🎵 'Home Sweet Home' - Cozy Acoustic",
        "pages": [
          {
            "tag": "🏡 Home Details",
            "bio": "I am a small, cozy studio flat! 1 big room with a yellow sofa, modern kitchen, clean bathroom, and sunny window."
          },
          {
            "tag": "✨ Location & Vibe",
            "bio": "Located near the bus stop and market. Perfect for 1 person or a student. Rent is $500/month."
          },
          {
            "tag": "🚩 Home Pros & Cons",
            "greenFlags": [
              "✓ Very easy to clean",
              "✓ Warm sunlight all day",
              "✓ Low monthly cost"
            ],
            "redFlags": [
              "✗ No space for big parties",
              "✗ Small kitchen table",
              "✗ No balcony"
            ]
          }
        ],
        "opener": "Welcome inside! Do you like small cozy flats or big houses?",
        "icebreakers": [
          "I love cozy studio flats!",
          "I need a big garden!",
          "Great price!"
        ],
        "prompt": "Name 3 things inside this studio flat."
      },
      {
        "type": "profile",
        "level": "A0-A1",
        "category": "Properties 🏠",
        "title": "Red Brick House",
        "age": "Built 2015",
        "location": "📍 4 miles away • Green Village",
        "verified": true,
        "avatar": "🏡",
        "gradient": "linear-gradient(135deg, #15803d 0%, #4ade80 100%)",
        "visualDescription": "Two-story red brick house with white fence, green grass front lawn, red roof, and garage.",
        "interests": [
          "#Garden",
          "#2Bedrooms",
          "#QuietStreet"
        ],
        "anthem": "🎵 'Our House' - Happy Classic",
        "pages": [
          {
            "tag": "🏡 Home Details",
            "bio": "I am a lovely red brick house! 2 bedrooms, 1 big living room, garage for 1 car, and a green garden."
          },
          {
            "tag": "✨ Location & Vibe",
            "bio": "Quiet green street with friendly neighbors. Safe garden for pets and kids to play fetch!"
          },
          {
            "tag": "🚩 Home Pros & Cons",
            "greenFlags": [
              "✓ Beautiful green garden",
              "✓ Private garage for car",
              "✓ Quiet peaceful area"
            ],
            "redFlags": [
              "✗ 25 minutes to downtown",
              "✗ Cutting lawn every week",
              "✗ Higher heating cost"
            ]
          }
        ],
        "opener": "Hi! Would you like to sit in my green garden with tea?",
        "icebreakers": [
          "Yes, tea in the garden!",
          "I prefer living downtown",
          "Beautiful red bricks!"
        ],
        "prompt": "Is this house in the city or in a quiet village? What do you like about it?"
      }
    ],
    "character": [
      {
        "type": "profile",
        "level": "A0-A1",
        "category": "Character Traits 🧠",
        "title": "Kind & Friendly Friend",
        "age": "20",
        "location": "📍 1 mile away • Neighborhood",
        "verified": true,
        "avatar": "😊",
        "gradient": "linear-gradient(135deg, #f59e0b 0%, #fcd34d 100%)",
        "visualDescription": "Smiling young person holding a warm cup of cocoa, wearing a yellow beanie and soft scarf, exuding friendliness.",
        "interests": [
          "#Friendly",
          "#KindHeart",
          "#GoodListener"
        ],
        "anthem": "🎵 'Count on Me' - Warm Pop",
        "pages": [
          {
            "tag": "🧠 Personality Traits",
            "bio": "I am kind, polite, and friendly! I say 'please' and 'thank you' and I love helping my neighbors."
          },
          {
            "tag": "✨ Daily Attitude",
            "bio": "I smile at everyone I see on the street. I remember birthdays and bring cookies to my friends!"
          },
          {
            "tag": "🚩 Pros & Cons",
            "greenFlags": [
              "✓ Always polite & patient",
              "✓ Helps with heavy bags",
              "✓ Great listener"
            ],
            "redFlags": [
              "✗ Says 'yes' to everything",
              "✗ Gets sad if people argue",
              "✗ Too generous"
            ]
          }
        ],
        "opener": "Hello my friend! How can I make your day happier today?",
        "icebreakers": [
          "You are so nice!",
          "Let us drink coffee together",
          "Have a great day too!"
        ],
        "prompt": "What does a kind person do? Name 2 kind actions."
      }
    ],
    "hobbies": [
      {
        "type": "profile",
        "level": "A0-A1",
        "category": "Hobbies 🎨",
        "title": "Cycling in the Park",
        "age": "All Ages",
        "location": "📍 0.3 miles away • River Park",
        "verified": true,
        "avatar": "🚴",
        "gradient": "linear-gradient(135deg, #0ea5e9 0%, #38bdf8 100%)",
        "visualDescription": "Bright red bicycle parked under a sunny tree next to a paved park pathway.",
        "interests": [
          "#Bicycle",
          "#FreshAir",
          "#ParkRide"
        ],
        "anthem": "🎵 'Bicycle Race' - Classic Rock",
        "pages": [
          {
            "tag": "🎨 Hobby Overview",
            "bio": "Riding a red bicycle in the green park every weekend! Easy, healthy, and fun."
          },
          {
            "tag": "✨ Vibe & Fun",
            "bio": "Feeling the cool wind in my hair while listening to music. Stopping for ice cream at the park cafe!"
          },
          {
            "tag": "🚩 Hobby Pros & Cons",
            "greenFlags": [
              "✓ Fresh air & exercise",
              "✓ Free transport",
              "✓ Fun with friends"
            ],
            "redFlags": [
              "✗ Rainy day difficulty",
              "✗ Flat tire trouble",
              "✗ Helmet hair"
            ]
          }
        ],
        "opener": "Hey! Do you know how to ride a bicycle?",
        "icebreakers": [
          "Yes, I ride every week!",
          "No, but I want to learn!",
          "I prefer walking!"
        ],
        "prompt": "Where do you like to ride a bicycle or walk?"
      }
    ]
  },
  "A2": {
    "appearance": [
      {
        "type": "profile",
        "level": "A2",
        "category": "Physical Appearance 👁️",
        "title": "Elena (Athletic & Wavy Auburn Hair)",
        "age": "24",
        "location": "📍 2 miles away • Marina Bay",
        "verified": true,
        "avatar": "👩‍🦰",
        "gradient": "linear-gradient(135deg, #ea580c 0%, #fb923c 100%)",
        "visualDescription": "Athletic woman with medium shoulder-length wavy auburn hair, hazel eyes, light freckles on her nose, wearing a navy blue striped nautical shirt.",
        "interests": [
          "#WavyAuburnHair",
          "#HazelEyes",
          "#AthleticBuild"
        ],
        "anthem": "🎵 'Ocean Waves' - Summer Vibe",
        "pages": [
          {
            "tag": "🖼️ Physical Look",
            "bio": "I am Elena, 24. I am medium height with an athletic build. I have wavy auburn hair, hazel eyes, and cute freckles."
          },
          {
            "tag": "✨ Fashion Style",
            "bio": "I love casual nautical style—navy striped tops, beige shorts, and leather sandals. Ready for beach walks!"
          },
          {
            "tag": "🚩 Appearance Detail",
            "greenFlags": [
              "✓ Warm hazel eyes that shine in the sun",
              "✓ Natural freckles",
              "✓ Active athletic posture"
            ],
            "redFlags": [
              "✗ Sunburns very easily",
              "✗ Hair gets messy in wind",
              "✗ Wears sandals even in winter"
            ]
          }
        ],
        "opener": "Hi! What is your favorite season for outdoor fashion?",
        "icebreakers": [
          "Summer fashion!",
          "Autumn coats and boots!",
          "Love the nautical style!"
        ],
        "prompt": "Describe Elena's build, hair color, and clothing style."
      },
      {
        "type": "profile",
        "level": "A2",
        "category": "Physical Appearance 👁️",
        "title": "Liam (Tall & Tailored Suit Style)",
        "age": "27",
        "location": "📍 1.5 miles away • Financial District",
        "verified": true,
        "avatar": "👨‍💼",
        "gradient": "linear-gradient(135deg, #1e293b 0%, #475569 100%)",
        "visualDescription": "Tall 6'2\" man with neat dark blonde side-part hair, sharp jawline, wearing a tailored navy blazer and crisp white collar shirt.",
        "interests": [
          "#Tall6ft2",
          "#SmartBlazer",
          "#SharpLook"
        ],
        "anthem": "🎵 'Smooth Operator' - Jazzy Pop",
        "pages": [
          {
            "tag": "🖼️ Physical Look",
            "bio": "I am Liam! 27 years old, tall (6'2\"), slim frame with broad shoulders. Short dark blonde hair and a clean-shaven face."
          },
          {
            "tag": "✨ Fashion Vibe",
            "bio": "Smart-casual elegance: tailored navy blazers, white oxford shirts, leather watch, and polished brown shoes."
          },
          {
            "tag": "🚩 Appearance Detail",
            "greenFlags": [
              "✓ Sharp polished appearance",
              "✓ Great posture & height",
              "✓ Neat tidy hairstyle"
            ],
            "redFlags": [
              "✗ Overly picky about shirt creases",
              "✗ Spends too much on dry cleaning",
              "✗ Refuses to wear hoodies"
            ]
          }
        ],
        "opener": "Hello! Do you prefer dressing up formally or wearing cozy hoodies?",
        "icebreakers": [
          "Cozy hoodies all day!",
          "I love smart suits!",
          "Mix of both!"
        ],
        "prompt": "How tall is Liam and what clothing does he wear?"
      }
    ],
    "professions": [
      {
        "type": "profile",
        "level": "A2",
        "category": "Professions 💼",
        "title": "Graphic Designer (Nina)",
        "age": "4 yrs exp",
        "location": "📍 1 mile away • Creative Loft",
        "verified": true,
        "avatar": "👩‍🎨",
        "gradient": "linear-gradient(135deg, #ec4899 0%, #f472b6 100%)",
        "visualDescription": "Creative woman sitting with a digital drawing tablet, stylus pen, colorful posters on wall, wearing round glasses and stylish sweater.",
        "interests": [
          "#DigitalArt",
          "#ColorPalette",
          "#LogosAndPosters"
        ],
        "anthem": "🎵 'Colors of the Wind' - Pop Cover",
        "pages": [
          {
            "tag": "💼 Job Overview",
            "bio": "I am Nina, a graphic designer! I create beautiful logos, website banners, and colorful posters for local businesses."
          },
          {
            "tag": "✨ Daily Tasks",
            "bio": "I work on my laptop and drawing tablet. I choose nice fonts, harmonize color palettes, and draw digital art."
          },
          {
            "tag": "🚩 Job Pros & Cons",
            "greenFlags": [
              "✓ Highly creative & fun job",
              "✓ Work from cafes or home",
              "✓ Seeing your art on billboards"
            ],
            "redFlags": [
              "✗ Staring at screens for 8 hours",
              "✗ Clients changing their minds",
              "✗ Eye fatigue"
            ]
          }
        ],
        "opener": "Hey! What is your absolute favorite color combination?",
        "icebreakers": [
          "Black & Gold!",
          "Blue & Pastel Pink!",
          "Green & Earthy Brown!"
        ],
        "prompt": "What tools does a graphic designer use? Would you enjoy this job?"
      },
      {
        "type": "profile",
        "level": "A2",
        "category": "Professions 💼",
        "title": "Fitness Trainer (Alex)",
        "age": "6 yrs exp",
        "location": "📍 0.5 miles away • Metro Gym",
        "verified": true,
        "avatar": "🏋️‍♂️",
        "gradient": "linear-gradient(135deg, #16a34a 0%, #22c55e 100%)",
        "visualDescription": "Muscular trainer in black gym tank top, stopwatch around neck, pointing encouragingly at gym equipment.",
        "interests": [
          "#PersonalTrainer",
          "#WorkoutRoutine",
          "#HealthyNutrition"
        ],
        "anthem": "🎵 'Eye of the Tiger' - Gym Anthem",
        "pages": [
          {
            "tag": "💼 Job Overview",
            "bio": "I am Alex, a certified personal fitness trainer! I design exercise routines and teach people how to stay fit and strong."
          },
          {
            "tag": "✨ Daily Tasks",
            "bio": "I guide gym members with weights, cardio workouts, and healthy eating plans. High motivation every day!"
          },
          {
            "tag": "🚩 Job Pros & Cons",
            "greenFlags": [
              "✓ Active healthy lifestyle",
              "✓ Inspiring people to reach goals",
              "✓ Great energy"
            ],
            "redFlags": [
              "✗ Waking up at 5:30 AM for clients",
              "✗ Sore muscles constantly",
              "✗ Loud gym music all day"
            ]
          }
        ],
        "opener": "Hey! Do you prefer morning workouts or evening relaxation?",
        "icebreakers": [
          "Morning workouts!",
          "Evening relaxation on couch!",
          "Weekend sports!"
        ],
        "prompt": "What are the benefits and challenges of being a personal trainer?"
      }
    ],
    "properties": [
      {
        "type": "profile",
        "level": "A2",
        "category": "Properties 🏠",
        "title": "Modern Loft Apartment",
        "age": "Built 2021",
        "location": "📍 1.2 miles away • Arts District",
        "verified": true,
        "avatar": "🏢",
        "gradient": "linear-gradient(135deg, #4f46e5 0%, #6366f1 100%)",
        "visualDescription": "Industrial loft with high exposed concrete ceiling, big floor-to-ceiling glass windows, leather couch, and open kitchen island.",
        "interests": [
          "#HighCeilings",
          "#IndustrialLoft",
          "#CityView"
        ],
        "anthem": "🎵 'City Lights' - Chill Beats",
        "pages": [
          {
            "tag": "🏡 Home Details",
            "bio": "Spacious 1-bedroom industrial loft apartment! Features high exposed ceilings, big glass windows, and open kitchen island."
          },
          {
            "tag": "✨ Location & Vibe",
            "bio": "Located in the trendy Arts District with art galleries, coffee shops, and rooftop bars right downstairs. $1,200/month."
          },
          {
            "tag": "🚩 Home Pros & Cons",
            "greenFlags": [
              "✓ Stunning skyline city views",
              "✓ Abundant natural sunlight",
              "✓ Modern kitchen island"
            ],
            "redFlags": [
              "✗ Higher utility heating bills",
              "✗ Street noise at night",
              "✗ No underground parking"
            ]
          }
        ],
        "opener": "Hi! Do you like big open industrial lofts with city views?",
        "icebreakers": [
          "I love industrial loft design!",
          "Too noisy for me!",
          "Awesome big windows!"
        ],
        "prompt": "Describe the main features of this loft apartment."
      },
      {
        "type": "profile",
        "level": "A2",
        "category": "Properties 🏠",
        "title": "Suburban Cottage with Garden",
        "age": "Built 2018",
        "location": "📍 5 miles away • Oak Hill",
        "verified": true,
        "avatar": "🏡",
        "gradient": "linear-gradient(135deg, #059669 0%, #10b981 100%)",
        "visualDescription": "Cozy stone cottage with flower boxes under windows, wooden porch swing, green lawn, and stone chimney.",
        "interests": [
          "#FlowerGarden",
          "#PorchSwing",
          "#QuietSuburbs"
        ],
        "anthem": "🎵 'Country Roads' - Acoustic Cover",
        "pages": [
          {
            "tag": "🏡 Home Details",
            "bio": "Charming 3-bedroom suburban cottage! Features a stone fireplace, sunny kitchen porch, and colorful flower garden."
          },
          {
            "tag": "✨ Location & Vibe",
            "bio": "Peaceful family neighborhood near top elementary schools and bike trails. Perfect for relaxing weekend BBQs!"
          },
          {
            "tag": "🚩 Home Pros & Cons",
            "greenFlags": [
              "✓ Spacious private backyard",
              "✓ Cozy stone fireplace",
              "✓ Safe quiet neighborhood"
            ],
            "redFlags": [
              "✗ Requires lawn mowing and garden care",
              "✗ Commute into city takes 35 mins",
              "✗ Needs roof maintenance"
            ]
          }
        ],
        "opener": "Hello! Would you like to sit on the porch swing and read a book?",
        "icebreakers": [
          "Sounds peaceful!",
          "I prefer apartment living",
          "I love stone fireplaces!"
        ],
        "prompt": "Compare this suburban cottage with the city loft apartment."
      }
    ],
    "character": [
      {
        "type": "profile",
        "level": "A2",
        "category": "Character Traits 🧠",
        "title": "Organized & Reliable (Sophia)",
        "age": "26",
        "location": "📍 2 miles away • West End",
        "verified": true,
        "avatar": "📅",
        "gradient": "linear-gradient(135deg, #2563eb 0%, #60a5fa 100%)",
        "visualDescription": "Focused young woman checking off tasks on a colorful paper planner, smiling calmly in a neat organized desk setup.",
        "interests": [
          "#Punctual",
          "#PlannerGeek",
          "#ReliableFriend"
        ],
        "anthem": "🎵 'Clockwork' - Smooth Rhythms",
        "pages": [
          {
            "tag": "🧠 Personality Traits",
            "bio": "I am Sophia! Very organized, punctual, and reliable. I never arrive late and I always keep my promises."
          },
          {
            "tag": "✨ Daily Routine",
            "bio": "I keep a daily color-coded planner, prepare my outfits the night before, and keep my living space spotless."
          },
          {
            "tag": "🚩 Pros & Cons",
            "greenFlags": [
              "✓ Never cancels plans last minute",
              "✓ Super dependable in emergencies",
              "✓ Always punctual"
            ],
            "redFlags": [
              "✗ Stressed when plans change unexpectedly",
              "✗ Too strict with schedules",
              "✗ Dislikes messy places"
            ]
          }
        ],
        "opener": "Hi! Are you someone who plans ahead or makes last-minute spontaneous decisions?",
        "icebreakers": [
          "I plan everything ahead!",
          "I am spontaneous!",
          "A bit of both!"
        ],
        "prompt": "Why is reliability an important trait in friendship?"
      }
    ],
    "hobbies": [
      {
        "type": "profile",
        "level": "A2",
        "category": "Hobbies 🎨",
        "title": "Sourdough Bread Baking",
        "age": "Popular Craft",
        "location": "📍 Kitchen Bench",
        "verified": true,
        "avatar": "🍞",
        "gradient": "linear-gradient(135deg, #b45309 0%, #f59e0b 100%)",
        "visualDescription": "Crispy golden crusty loaf of sourdough bread dusted with flour sitting on a wooden cutting board with butter knife.",
        "interests": [
          "#BakingBread",
          "#CrispyCrust",
          "#Homemade"
        ],
        "anthem": "🎵 'Bread and Butter' - Upbeat Oldie",
        "pages": [
          {
            "tag": "🎨 Hobby Overview",
            "bio": "Baking artisanal sourdough bread from scratch! Mixing flour, water, and wild starter, then baking in a Dutch oven."
          },
          {
            "tag": "✨ Vibe & Joy",
            "bio": "The amazing smell filling the apartment and hearing the crust crackle as it cools. Tastes incredible with salted butter!"
          },
          {
            "tag": "🚩 Hobby Pros & Cons",
            "greenFlags": [
              "✓ Delicious fresh warm bread",
              "✓ Therapeutic slow process",
              "✓ No artificial ingredients"
            ],
            "redFlags": [
              "✗ Takes 24 hours of patience",
              "✗ Flour dusting everywhere",
              "✗ Starter needs daily feeding"
            ]
          }
        ],
        "opener": "Fresh sourdough right out of the oven! Butter or olive oil with balsamic vinegar?",
        "icebreakers": [
          "Salted butter please!",
          "Olive oil and balsamic!",
          "Garlic butter!"
        ],
        "prompt": "Explain the step-by-step process of sourdough baking in simple sentences."
      }
    ]
  },
  "B1": {
    "appearance": [
      {
        "type": "profile",
        "level": "B1",
        "category": "Physical Appearance 👁️",
        "title": "Maya (Boho-Chic & Shoulder-Length Curls)",
        "age": "26",
        "location": "📍 3 miles away • Cultural District",
        "verified": true,
        "avatar": "👩‍🦱",
        "gradient": "linear-gradient(135deg, #7c2d12 0%, #d97706 100%)",
        "visualDescription": "Artistic woman with voluminous dark brown curly hair, expressive dark eyes, wearing an embroidered bohemian kimono, layered silver rings, and turquoise earrings.",
        "interests": [
          "#BohoStyle",
          "#VoluminousCurls",
          "#LayeredAccessories"
        ],
        "anthem": "🎵 'Gypsy Heart' - Indie Folk",
        "pages": [
          {
            "tag": "🖼️ Physical Appearance",
            "bio": "I'm Maya, 26. Distinctive for my expressive dark eyes, sun-kissed tan complexion, and shoulder-length dark brown curly hair."
          },
          {
            "tag": "✨ Fashion Aesthetic",
            "bio": "Bohemian aesthetic: flowing embroidered cardigans, vintage silver jewelry, suede ankle boots, and artistic earthy tones."
          },
          {
            "tag": "🚩 Appearance Detail",
            "greenFlags": [
              "✓ Striking expressive facial features",
              "✓ Unique artistic personal style",
              "✓ Warm inviting smile"
            ],
            "redFlags": [
              "✗ Takes 45 minutes to define curls",
              "✗ Overloaded with handmade bracelets",
              "✗ Thrifting addiction"
            ]
          }
        ],
        "opener": "Hey! How would you describe your personal aesthetic and fashion philosophy?",
        "icebreakers": [
          "Minimalist modern!",
          "Boho vintage artistic!",
          "Streetwear sneakers!"
        ],
        "prompt": "Describe Maya's hairstyle, accessories, and overall aesthetic using descriptive adjectives."
      },
      {
        "type": "profile",
        "level": "B1",
        "category": "Physical Appearance 👁️",
        "title": "Julian (Broad-Shouldered & Rugged Style)",
        "age": "29",
        "location": "📍 2.5 miles away • Timber Ridge",
        "verified": true,
        "avatar": "🧔",
        "gradient": "linear-gradient(135deg, #15803d 0%, #166534 100%)",
        "visualDescription": "Broad-shouldered man with a trimmed dark beard, sharp jawline, short undercut brown hair, wearing a flannel plaid shirt and leather boots.",
        "interests": [
          "#BroadShouldered",
          "#TrimmedBeard",
          "#FlannelShirt"
        ],
        "anthem": "🎵 'Wilderness' - Folk Rock",
        "pages": [
          {
            "tag": "🖼️ Physical Appearance",
            "bio": "I'm Julian, 29. Tall (6'1\") with a rugged broad-shouldered frame, well-groomed beard, sharp jawline, and warm brown hazel eyes."
          },
          {
            "tag": "✨ Outdoor Outfit Vibe",
            "bio": "Outdoor lumberjack aesthetic: heavy-duty flannel plaid shirts, dark selvedge denim jeans, and durable leather hiking boots."
          },
          {
            "tag": "🚩 Appearance Detail",
            "greenFlags": [
              "✓ Athletic broad-shouldered posture",
              "✓ Neatly trimmed beard",
              "✓ Durable outdoor wardrobe"
            ],
            "redFlags": [
              "✗ Beard oil everywhere",
              "✗ Refuses to wear formal ties",
              "✗ Flannel shirt in every color"
            ]
          }
        ],
        "opener": "Greetings! Do you favor a clean-cut corporate look or an outdoor rugged style?",
        "icebreakers": [
          "Outdoor rugged style!",
          "Clean-cut corporate!",
          "Casual streetwear!"
        ],
        "prompt": "Analyze Julian's physical frame, grooming habits, and clothing choices."
      }
    ],
    "professions": [
      {
        "type": "profile",
        "level": "B1",
        "category": "Professions 💼",
        "title": "Software Engineer (Marcus)",
        "age": "5 yrs exp",
        "location": "📍 1.5 miles away • Tech Hub",
        "verified": true,
        "avatar": "👨‍💻",
        "gradient": "linear-gradient(135deg, #0284c7 0%, #0369a1 100%)",
        "visualDescription": "Software engineer working at a dual-monitor standing desk, wearing headphones, coding on IDE software with dark theme.",
        "interests": [
          "#FullStackCode",
          "#DualMonitors",
          "#ProblemSolving"
        ],
        "anthem": "🎵 'Digital Love' - Electronic Synth",
        "pages": [
          {
            "tag": "💼 Profession Overview",
            "bio": "I'm Marcus, a Full-Stack Software Engineer building web apps and cloud algorithms. I turn complex logic into smooth user experiences."
          },
          {
            "tag": "✨ Daily Responsibilities",
            "bio": "Writing scalable code, reviewing pull requests, solving algorithmic puzzles, and collaborating with UI designers remotely."
          },
          {
            "tag": "🚩 Career Pros & Cons",
            "greenFlags": [
              "✓ High remote work flexibility",
              "✓ Strong analytical problem solving",
              "✓ Excellent compensation"
            ],
            "redFlags": [
              "✗ Prolonged sitting & screen glare",
              "✗ Sudden server bug emergencies",
              "✗ Jargon heavy language"
            ]
          }
        ],
        "opener": "Hello world! Are you fascinated or intimidated by coding and technology?",
        "icebreakers": [
          "Fascinated by tech!",
          "Intimidated by code!",
          "I write code too!"
        ],
        "prompt": "Discuss the advantages and drawbacks of a career in software engineering."
      },
      {
        "type": "profile",
        "level": "B1",
        "category": "Professions 💼",
        "title": "Environmental Journalist (Clara)",
        "age": "6 yrs exp",
        "location": "📍 2 miles away • Press Building",
        "verified": true,
        "avatar": "👩‍💻",
        "gradient": "linear-gradient(135deg, #047857 0%, #10b981 100%)",
        "visualDescription": "Journalist holding a recording microphone and notebook, conducting an interview outdoors with wind turbines in background.",
        "interests": [
          "#ClimateAction",
          "#Investigative",
          "#Storytelling"
        ],
        "anthem": "🎵 'Blowin' in the Wind' - Folk",
        "pages": [
          {
            "tag": "💼 Profession Overview",
            "bio": "I'm Clara, an investigative environmental journalist. I research renewable energy trends and write articles on climate conservation."
          },
          {
            "tag": "✨ Daily Responsibilities",
            "bio": "Interviewing scientists, traveling to nature reserves, verifying data sources, and editing impactful news features."
          },
          {
            "tag": "🚩 Career Pros & Cons",
            "greenFlags": [
              "✓ Meaningful societal impact",
              "✓ Travel & fieldwork opportunities",
              "✓ Continuous learning"
            ],
            "redFlags": [
              "✗ Strict publication deadlines",
              "✗ Dealing with misinformation",
              "✗ Irregular work hours"
            ]
          }
        ],
        "opener": "Hi! What environmental or social issue do you feel most passionate about?",
        "icebreakers": [
          "Renewable energy!",
          "Wildlife conservation!",
          "Reducing plastic waste!"
        ],
        "prompt": "What skills are required to be an effective investigative journalist?"
      }
    ],
    "properties": [
      {
        "type": "profile",
        "level": "B1",
        "category": "Properties 🏠",
        "title": "Converted Paper Mill Loft",
        "age": "Renovated 2022",
        "location": "📍 1 mile away • Riverfront District",
        "verified": true,
        "avatar": "🏭",
        "gradient": "linear-gradient(135deg, #475569 0%, #334155 100%)",
        "visualDescription": "Historic brick mill converted into luxury loft with red exposed brick walls, timber beams, polished concrete floor, and river view.",
        "interests": [
          "#HistoricBrick",
          "#RiverfrontView",
          "#TimberBeams"
        ],
        "anthem": "🎵 'Riverside' - Ambient Indie",
        "pages": [
          {
            "tag": "🏡 Property Architectural Details",
            "bio": "A stunning 2-bedroom loft inside a converted 19th-century paper mill. Merges original exposed brickwork and heavy timber beams with ultra-modern fixtures."
          },
          {
            "tag": "✨ Amenities & Surroundings",
            "bio": "Private balcony overlooking the riverfront promenade, smart home lighting, underground garage, and private gym access. $1,850/month."
          },
          {
            "tag": "🚩 Property Evaluation",
            "greenFlags": [
              "✓ Architectural character & heritage",
              "✓ Breathtaking river views",
              "✓ Soundproof double glazing"
            ],
            "redFlags": [
              "✗ Higher monthly HOA fees",
              "✗ High ceiling acoustic echoes",
              "✗ Strict historic building rules"
            ]
          }
        ],
        "opener": "Welcome! Do you prefer historic renovated properties or brand-new modern architecture?",
        "icebreakers": [
          "Historic renovated character!",
          "Brand-new sleek modern!",
          "A cozy country home!"
        ],
        "prompt": "Evaluate the architectural contrast between historic industrial brickwork and modern amenities."
      },
      {
        "type": "profile",
        "level": "B1",
        "category": "Properties 🏠",
        "title": "Eco-Friendly Solar Villa",
        "age": "Built 2023",
        "location": "📍 6 miles away • Sun Valley",
        "verified": true,
        "avatar": "☀️",
        "gradient": "linear-gradient(135deg, #65a30d 0%, #84cc16 100%)",
        "visualDescription": "Sustainable two-story villa with rooftop solar panels, rainwater collection barrel, vertical plant wall, and large timber deck.",
        "interests": [
          "#ZeroEmission",
          "#SolarPower",
          "#RainwaterHarvest"
        ],
        "anthem": "🎵 'Here Comes the Sun' - Acoustic",
        "pages": [
          {
            "tag": "🏡 Eco Property Details",
            "bio": "A state-of-the-art 3-bedroom zero-emission villa powered by rooftop solar panels, triple-pane insulation, and rainwater harvesting systems."
          },
          {
            "tag": "✨ Sustainable Living Vibe",
            "bio": "Organic garden patch, electric vehicle charging dock, vertical indoor plant wall, and minimal monthly electricity bills."
          },
          {
            "tag": "🚩 Property Evaluation",
            "greenFlags": [
              "✓ Near zero energy bills",
              "✓ Sustainable carbon footprint",
              "✓ EV charging station included"
            ],
            "redFlags": [
              "✗ High initial purchase investment",
              "✗ Solar battery maintenance",
              "✗ Distance from city center"
            ]
          }
        ],
        "opener": "Greetings! How important is sustainable eco-friendly design when choosing a place to live?",
        "icebreakers": [
          "Crucial priority for me!",
          "Nice bonus but location first!",
          "Interested in solar tech!"
        ],
        "prompt": "Describe the sustainable technologies integrated into this eco-friendly villa."
      }
    ],
    "character": [
      {
        "type": "profile",
        "level": "B1",
        "category": "Character Traits 🧠",
        "title": "Empathetic & Intuitive (Daniel)",
        "age": "28",
        "location": "📍 1.8 miles away • Maple Heights",
        "verified": true,
        "avatar": "🤝",
        "gradient": "linear-gradient(135deg, #0d9488 0%, #14b8a6 100%)",
        "visualDescription": "Warm-hearted man listening intently during coffee conversation, leaning forward with genuine care and active body language.",
        "interests": [
          "#EmotionalIntelligence",
          "#ActiveListener",
          "#Empathetic"
        ],
        "anthem": "🎵 'Lean on Me' - Soul Classic",
        "pages": [
          {
            "tag": "🧠 Personality Character",
            "bio": "I'm Daniel. I pride myself on high emotional intelligence, deep empathy, and the ability to truly listen without judging."
          },
          {
            "tag": "✨ Interpersonal Style",
            "bio": "Friends come to me when they need thoughtful advice or a safe space to vent. I value authentic connections over small talk."
          },
          {
            "tag": "🚩 Pros & Cons",
            "greenFlags": [
              "✓ Deeply supportive & trustworthy",
              "✓ Highly perceptive of feelings",
              "✓ Outstanding conflict resolver"
            ],
            "redFlags": [
              "✗ Absorbs other people's stress easily",
              "✗ Avoids aggressive confrontation",
              "✗ Emotionally drained at times"
            ]
          }
        ],
        "opener": "Hello! Do you consider yourself more guided by rational logic or emotional intuition?",
        "icebreakers": [
          "Rational logic!",
          "Emotional intuition!",
          "Equal balance of both!"
        ],
        "prompt": "How does high emotional intelligence improve interpersonal relationships?"
      }
    ],
    "hobbies": [
      {
        "type": "profile",
        "level": "B1",
        "category": "Hobbies 🎨",
        "title": "Bouldering & Rock Climbing",
        "age": "Active Pursuit",
        "location": "📍 Peak Climbing Gym",
        "verified": true,
        "avatar": "🧗‍♂️",
        "gradient": "linear-gradient(135deg, #15803d 0%, #22c55e 100%)",
        "visualDescription": "Climber wearing chalk bag, gripping brightly colored indoor bouldering holds on an angled overhang wall.",
        "interests": [
          "#Bouldering",
          "#ProblemSolving",
          "#FitnessAndFocus"
        ],
        "anthem": "🎵 'Climb Every Mountain' - Rock Vibe",
        "pages": [
          {
            "tag": "🎨 Hobby Overview",
            "bio": "Solving vertical body puzzles on indoor climbing walls and outdoor crags using chalked hands, core power, and mental focus."
          },
          {
            "tag": "✨ Physical & Mental Vibe",
            "bio": "Bouldering requires strategy like chess, combined with full-body functional strength. The feeling when completing a tough V5 route is unbeatable!"
          },
          {
            "tag": "🚩 Hobby Evaluation",
            "greenFlags": [
              "✓ Exceptional core and upper body strength",
              "✓ Highly social community",
              "✓ Mindful focus on the present"
            ],
            "redFlags": [
              "✗ Chalk dust covering all gear",
              "✗ Calloused worn fingers",
              "✗ Obsessively analyzing climbing routes"
            ]
          }
        ],
        "opener": "Hey! Have you ever attempted indoor bouldering or rock climbing?",
        "icebreakers": [
          "I love bouldering gyms!",
          "Terrified of heights! 😅",
          "Eager to try it out!"
        ],
        "prompt": "In what ways does bouldering combine physical endurance with mental problem solving?"
      }
    ]
  },
  "B2": {
    "appearance": [
      {
        "type": "profile",
        "level": "B2",
        "category": "Physical Appearance 👁️",
        "title": "Victoria (Statuesque Elegance & Platinum Bob)",
        "age": "29",
        "location": "📍 1 mile away • Metropolitan Plaza",
        "verified": true,
        "avatar": "👩‍🦳",
        "gradient": "linear-gradient(135deg, #0284c7 0%, #475569 100%)",
        "visualDescription": "Statuesque 5'10\" woman with a razor-sharp platinum blonde bob, piercing ice-blue eyes, high cheekbones, wearing an asymmetrical black blazer and understated gold hoop earrings.",
        "interests": [
          "#StatuesqueElegance",
          "#PlatinumBlondeBob",
          "#HighCheekbones"
        ],
        "anthem": "🎵 'Vogue' - Chic Fashion",
        "pages": [
          {
            "tag": "🖼️ Physical Appearance",
            "bio": "I'm Victoria, 29. Statuesque frame (5'10\") featuring prominent high cheekbones, striking ice-blue eyes, and a precision-cut platinum blonde bob."
          },
          {
            "tag": "✨ Fashion Aesthetics",
            "bio": "High-fashion minimalist tailoring: monochromatic suits, structured blazers, sleek leather boots, and subtle designer accents."
          },
          {
            "tag": "🚩 Appearance Detail",
            "greenFlags": [
              "✓ Uncompromising sartorial poise",
              "✓ Commanding presence & posture",
              "✓ Impeccable grooming standard"
            ],
            "redFlags": [
              "✗ Intimidating initial impression",
              "✗ High maintenance hair bleaching routine",
              "✗ Strict dress code standards"
            ]
          }
        ],
        "opener": "Welcome! How significantly does first impression and sartorial elegance influence your personal perception?",
        "icebreakers": [
          "First impressions are crucial!",
          "Authenticity matters more than clothes!",
          "Appreciate refined tailoring!"
        ],
        "prompt": "Examine the stylistic impact of Victoria's minimalist wardrobe, hair structure, and demeanor."
      },
      {
        "type": "profile",
        "level": "B2",
        "category": "Physical Appearance 👁️",
        "title": "Gabriel (Charismatic & Silver-Templed Style)",
        "age": "34",
        "location": "📍 2 miles away • Old Town District",
        "verified": true,
        "avatar": "👨‍🦱",
        "gradient": "linear-gradient(135deg, #334155 0%, #64748b 100%)",
        "visualDescription": "Charismatic 34-year-old man with distinguished silver-templed dark hair, captivating dimples, wearing a tailored charcoal wool coat and silk scarf.",
        "interests": [
          "#SilverTemples",
          "#DistinguishedLook",
          "#TailoredWoolCoat"
        ],
        "anthem": "🎵 'Feeling Good' - Orchestral Jazz",
        "pages": [
          {
            "tag": "🖼️ Physical Appearance",
            "bio": "I'm Gabriel, 34. Athletic height (6'0\"), distinguished silver-templed wavy dark hair, warm hazel eyes, and expressive dimples when laughing."
          },
          {
            "tag": "✨ Fashion Aesthetics",
            "bio": "Classic European sophistication: charcoal wool overcoats, tailored cashmere turtlenecks, antique leather loafers, and vintage timepiece."
          },
          {
            "tag": "🚩 Appearance Detail",
            "greenFlags": [
              "✓ Distinguished, mature aesthetic",
              "✓ Warm disarming smile with dimples",
              "✓ Timeless fashion choices"
            ],
            "redFlags": [
              "✗ Takes vintage timepiece care too seriously",
              "✗ Refuses casual sportswear",
              "✗ Meticulous hair silvering care"
            ]
          }
        ],
        "opener": "Greetings! Do you believe personal style should evolve continuously or anchor to timeless classicism?",
        "icebreakers": [
          "Evolve with current trends!",
          "Anchor to timeless classicism!",
          "Blend modern & vintage!"
        ],
        "prompt": "Analyze how Gabriel's physical attributes convey maturity, charisma, and sophistication."
      }
    ],
    "professions": [
      {
        "type": "profile",
        "level": "B2",
        "category": "Professions 💼",
        "title": "AI Ethics Researcher (Dr. Aris)",
        "age": "7 yrs exp",
        "location": "📍 1.2 miles away • Innovation Campus",
        "verified": true,
        "avatar": "🧠",
        "gradient": "linear-gradient(135deg, #4338ca 0%, #6366f1 100%)",
        "visualDescription": "Researcher reviewing algorithmic bias data on transparent holographic displays in a high-tech university research lab.",
        "interests": [
          "#AIEthics",
          "#AlgorithmicJustice",
          "#TechPolicy"
        ],
        "anthem": "🎵 'Computer World' - Electro Synth",
        "pages": [
          {
            "tag": "💼 Profession Overview",
            "bio": "I'm Dr. Aris, an Artificial Intelligence Ethics Researcher. I evaluate machine learning models for algorithmic bias, data privacy compliance, and societal safety."
          },
          {
            "tag": "✨ Responsibilities & Expertise",
            "bio": "Publishing peer-reviewed policy frameworks, advising tech executives, and auditing large language models to prevent discrimination in automated decisions."
          },
          {
            "tag": "🚩 Career Pros & Cons",
            "greenFlags": [
              "✓ Pioneering the frontier of tech safety",
              "✓ High intellectual stimulation",
              "✓ Shaping global policy guidelines"
            ],
            "redFlags": [
              "✗ Complex ethical dilemmas without clear answers",
              "✗ Corporate resistance to regulation",
              "✗ Constant rapid tech shifts"
            ]
          }
        ],
        "opener": "Greetings! In your opinion, should artificial intelligence development be strictly regulated by international law?",
        "icebreakers": [
          "Strict international regulation essential!",
          "Innovation needs freedom first!",
          "Balanced adaptive oversight!"
        ],
        "prompt": "Evaluate the ethical implications and societal responsibilities of AI ethics researchers."
      },
      {
        "type": "profile",
        "level": "B2",
        "category": "Professions 💼",
        "title": "Architectural Conservationist (Soren)",
        "age": "8 yrs exp",
        "location": "📍 0.9 miles away • Heritage Bureau",
        "verified": true,
        "avatar": "🏛️",
        "gradient": "linear-gradient(135deg, #854d0e 0%, #a16207 100%)",
        "visualDescription": "Architect in hardhat examining intricate stonework details of a historic cathedral restoration project using laser scanning tools.",
        "interests": [
          "#HeritageRestoration",
          "#SustainableUrbanism",
          "#AdaptiveReuse"
        ],
        "anthem": "🎵 'Symphony No. 5' - Orchestral",
        "pages": [
          {
            "tag": "💼 Profession Overview",
            "bio": "I'm Soren, an Architectural Conservationist. I specialize in adaptive reuse—restoring landmark historic structures while adapting them for sustainable modern utility."
          },
          {
            "tag": "✨ Responsibilities & Expertise",
            "bio": "3D laser scanning ancient masonry, sourcing period-accurate ecological materials, and preventing historical landmarks from demolition."
          },
          {
            "tag": "🚩 Career Pros & Cons",
            "greenFlags": [
              "✓ Preserving cultural heritage for future generations",
              "✓ Tangible lasting artistic legacy",
              "✓ Blending history with sustainability"
            ],
            "redFlags": [
              "✗ Lengthy bureaucratic approval permits",
              "✗ Unforeseen structural decay costs",
              "✗ Budget constraints"
            ]
          }
        ],
        "opener": "Hello! How can cities balance preserving historical architecture with building modern housing infrastructure?",
        "icebreakers": [
          "Prioritize historic preservation!",
          "Prioritize modern housing needs!",
          "Adaptive reuse is the solution!"
        ],
        "prompt": "Debate the balance between historical architectural preservation and urban modernization."
      }
    ],
    "properties": [
      {
        "type": "profile",
        "level": "B2",
        "category": "Properties 🏠",
        "title": "Penthouse Sky Villa",
        "age": "Built 2024",
        "location": "📍 0.5 miles away • Pinnacle Tower",
        "verified": true,
        "avatar": "🏙️",
        "gradient": "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)",
        "visualDescription": "Luxury penthouse terrace with private infinity glass pool, panoramic 360-degree skyline views, fire pit, and floor-to-ceiling glass walls.",
        "interests": [
          "#360SkylineView",
          "#InfinityPool",
          "#SmartAutomation"
        ],
        "anthem": "🎵 'Skyfall' - Cinematic Elegance",
        "pages": [
          {
            "tag": "🏡 Property Architecture & Luxury",
            "bio": "Exquisite 4,500 sq ft top-floor Sky Villa featuring a private glass-edge infinity pool, 360-degree city skyline panoramas, and full biometric smart automation."
          },
          {
            "tag": "✨ Premium Amenities",
            "bio": "Private elevator entry, climate-controlled wine cellar, motorized glass curtain walls, and rooftop helipad access. $6,500/month."
          },
          {
            "tag": "🚩 Property Evaluation",
            "greenFlags": [
              "✓ Peerless panoramic city vistas",
              "✓ Maximum security & privacy",
              "✓ State-of-the-art smart home integration"
            ],
            "redFlags": [
              "✗ Exorbitant maintenance expenditure",
              "✗ High altitude sway during strong storms",
              "✗ Detached from ground neighborhood feel"
            ]
          }
        ],
        "opener": "Welcome to the sky! Does extreme luxury housing justify its social and environmental footprint?",
        "icebreakers": [
          "Breathtaking pinnacle living!",
          "Excessive luxury is problematic!",
          "Impressive engineering achievement!"
        ],
        "prompt": "Analyze the architectural engineering and lifestyle dynamics of luxury high-rise penthouse living."
      },
      {
        "type": "profile",
        "level": "B2",
        "category": "Properties 🏠",
        "title": "Alpine Timber Chalet",
        "age": "Built 2021",
        "location": "📍 12 miles away • Summit Crest",
        "verified": true,
        "avatar": "🏔️",
        "gradient": "linear-gradient(135deg, #78350f 0%, #92400e 100%)",
        "visualDescription": "Rustic luxurious timber chalet nestled in snow-covered pine mountains, featuring cathedral glass facade, outdoor cedar sauna, and roaring stone hearth.",
        "interests": [
          "#AlpineChalet",
          "#CathedralWindows",
          "#CedarSauna"
        ],
        "anthem": "🎵 'Winter Song' - Atmospheric Folk",
        "pages": [
          {
            "tag": "🏡 Property Architecture & Ambience",
            "bio": "A magnificent 4-bedroom timber chalet carved into alpine peaks. Showcases floor-to-ceiling cathedral windows framing snowy mountain vistas and a massive stone hearth."
          },
          {
            "tag": "✨ Alpine Lifestyle Amenities",
            "bio": "Ski-in ski-out access, outdoor cedar wood sauna, geothermal floor heating, and custom oak furniture crafted by local artisans."
          },
          {
            "tag": "🚩 Property Evaluation",
            "greenFlags": [
              "✓ Unrivaled mountain tranquility",
              "✓ Eco geothermal heating system",
              "✓ Ski resort proximity"
            ],
            "redFlags": [
              "✗ Snowplowing road access in heavy blizzards",
              "✗ Seasonal isolation",
              "✗ High timber maintenance requirement"
            ]
          }
        ],
        "opener": "Greetings! Would you thrive living surrounded by alpine wilderness, or do you require urban velocity?",
        "icebreakers": [
          "Alpine wilderness sanctuary!",
          "Urban velocity always!",
          "Seasonal balance between both!"
        ],
        "prompt": "Evaluate how living in isolated natural terrain affects psychological well-being and daily routine."
      }
    ],
    "character": [
      {
        "type": "profile",
        "level": "B2",
        "category": "Character Traits 🧠",
        "title": "Visionary & Resilient (Helena)",
        "age": "32",
        "location": "📍 1.5 miles away • Enterprise Square",
        "verified": true,
        "avatar": "🦁",
        "gradient": "linear-gradient(135deg, #b91c1c 0%, #dc2626 100%)",
        "visualDescription": "Determined female leader standing atop a conference hall terrace, looking strategically toward the city skyline with confidence and poise.",
        "interests": [
          "#StrategicVision",
          "#Resilience",
          "#EmpoweringLeader"
        ],
        "anthem": "🎵 'Unstoppable' - Anthem",
        "pages": [
          {
            "tag": "🧠 Personality Character",
            "bio": "I'm Helena, 32. Characterized by strategic foresight, formidable resilience under pressure, and an unwavering commitment to empowering those around me."
          },
          {
            "tag": "✨ Leadership Philosophy",
            "bio": "I view setbacks as crucial data points for growth. I lead with transparency, encourage bold calculated risk-taking, and foster accountability."
          },
          {
            "tag": "🚩 Pros & Cons",
            "greenFlags": [
              "✓ Inspires high performance in others",
              "✓ Unshakable under severe crisis",
              "✓ Decisive and visionary"
            ],
            "redFlags": [
              "✗ High expectations can intimidate",
              "✗ Workaholic tendencies",
              "✗ Impatient with slowness"
            ]
          }
        ],
        "opener": "Greetings! What key quality distinguishes a true leader from a boss?",
        "icebreakers": [
          "Empathy & vision!",
          "Resilience under crisis!",
          "Lead by example!"
        ],
        "prompt": "Differentiate between transactional management and transformative resilient leadership."
      }
    ],
    "hobbies": [
      {
        "type": "profile",
        "level": "B2",
        "category": "Hobbies 🎨",
        "title": "35mm Analog Film Photography",
        "age": "Analog Craft",
        "location": "📍 Darkroom & City Streets",
        "verified": true,
        "avatar": "📷",
        "gradient": "linear-gradient(135deg, #1f2937 0%, #374151 100%)",
        "visualDescription": "Vintage Leica film camera resting on a darkroom wooden bench next to developed negatives, amber safelight glowing in background.",
        "interests": [
          "#FilmIsNotDead",
          "#35mmAnalog",
          "#DarkroomProcess"
        ],
        "anthem": "🎵 'Kodachrome' - Nostalgic Classic",
        "pages": [
          {
            "tag": "🎨 Hobby Overview & Craft",
            "bio": "Capturing urban moments on 35mm silver halide film with deliberate composition—limiting oneself to 36 exposures per roll without instant digital previews."
          },
          {
            "tag": "✨ Artistic Philosophy",
            "bio": "Developing negatives manually in chemical darkrooms, embracing grain textures, subtle light leaks, and authentic unedited candid humanity."
          },
          {
            "tag": "🚩 Hobby Evaluation",
            "greenFlags": [
              "✓ Teaches mindfulness and patience",
              "✓ Tangible physical prints and negatives",
              "✓ Unrivaled aesthetic depth"
            ],
            "redFlags": [
              "✗ Escalating chemical & film roll costs",
              "✗ Accidental light leaks ruining shots",
              "✗ No instant gratification"
            ]
          }
        ],
        "opener": "Greetings! How does the deliberate constraint of analog media alter human creative expression compared to digital abundance?",
        "icebreakers": [
          "Constraints force deeper focus!",
          "Digital abundance enables speed!",
          "Analog preserves authentic soul!"
        ],
        "prompt": "Critique the psychological and artistic differences between digital smartphone photography and 35mm film photography."
      }
    ]
  }
};

    // Legacy dilemmas deck for quick general rounds
    const GENERAL_DILEMMAS = [
        {
            type: 'dilemma',
            level: 'A0-A1',
            category: 'Daily Routine 🌅',
            title: 'Morning Person vs Night Owl',
            age: 'Forever',
            location: '📍 Worldwide',
            verified: true,
            optionA: { emoji: '🌅', title: 'Early Bird', desc: 'Up at 6 AM, watching sunrise with green tea and high productivity.' },
            optionB: { emoji: '🌃', title: 'Night Owl', desc: 'Creative energy peaks between 11 PM and 3 AM when the world is quiet.' },
            prompt: 'Which routine fits your true self? Describe your ideal daily schedule.'
        },
        {
            type: 'dilemma',
            level: 'A2',
            category: 'Vacations 🏖️',
            title: 'Beach Resort vs Mountain Hike',
            age: 'All Seasons',
            location: '📍 Ocean or Peaks',
            verified: true,
            optionA: { emoji: '🏖️', title: 'Sunny Beach', desc: 'Warm sand, ocean waves, coconut smoothies, and complete relaxation.' },
            optionB: { emoji: '⛰️', title: 'Mountain Hike', desc: 'Fresh alpine air, steep trails, breathtaking views, and campfire nights.' },
            prompt: 'Where would you rather go on a 2-week holiday? Describe your travel style.'
        },
        {
            type: 'dilemma',
            level: 'B1',
            category: 'Superpowers 🦸‍♂️',
            title: 'Invisibility vs Time Travel',
            age: 'Hypothetical',
            location: '📍 Sci-Fi Universe',
            verified: true,
            optionA: { emoji: '🫥', title: 'Invisibility', desc: 'Sneak anywhere unseen, listen in on secret chats, escape awkward moments.' },
            optionB: { emoji: '⏳', title: 'Time Travel', desc: 'Visit ancient civilizations or leap 100 years into the future.' },
            prompt: 'Which power would you choose and why? How would you use it?'
        },
        {
            type: 'dilemma',
            level: 'B2',
            category: 'Life Values ⚖️',
            title: 'Corporate Career vs Creative Passion',
            age: 'Forever Relevant',
            location: '📍 Career Crossroads',
            verified: true,
            optionA: { emoji: '💼', title: 'Corporate Career', desc: 'Financial security, executive prestige, long hours, corporate structure.' },
            optionB: { emoji: '🎨', title: 'Creative Passion', desc: 'Total artistic freedom, personal purpose, variable and uncertain income.' },
            prompt: 'How do you strike a balance between financial security and personal fulfillment?'
        }
    ];

    function renderSetup() {
        document.getElementById('go-title').textContent = GAME_TITLE;
        document.getElementById('go-meta').textContent = GAME_META;
        const body = document.getElementById('go-body');
        if (!body) return;

        body.innerHTML = `
            <div class="setup-screen" style="text-align: center; max-width: 440px; margin: 0 auto; padding: 1.5rem 1rem;">
              <div style="font-size: 3.2rem; margin-bottom: 0.2rem;">🔥 Tinder Swipe</div>
              <h1 style="font-family:'DM Sans', sans-serif; font-weight: 800; margin-bottom: 0.5rem; background: var(--tinder-gradient); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">This or That?</h1>
              <p style="color:var(--ink-muted); margin-bottom: 1.25rem; line-height: 1.45; font-size:0.95rem;">
                Swipe left or right on Tinder profiles of people, professions, properties, and dilemmas. Practice speaking with level-tailored prompts!
              </p>

              <div class="setup-field" style="margin-bottom: 1rem; text-align: left;">
                <label style="font-weight:700; display:block; margin-bottom:0.4rem; font-size:0.9rem;">🎯 Target CEFR Level</label>
                <select class="styled-sel" id="tot-level-sel" style="width: 100%; padding: 0.75rem; border-radius: 12px; border: 1px solid #e5e7eb; font-weight:600;">
                  <option value="A0_A1">A0–A1: Starter & Basic Words</option>
                  <option value="A2" selected>A2: Elementary & Daily Life</option>
                  <option value="B1">B1: Intermediate & Work/Travel</option>
                  <option value="B2">B2: Upper-Inter & Abstract Concepts</option>
                  <option value="ALL">All Levels Combined (A0–B2)</option>
                </select>
              </div>

              <div class="setup-field" style="margin-bottom: 1.75rem; text-align: left;">
                <label style="font-weight:700; display:block; margin-bottom:0.4rem; font-size:0.9rem;">🎴 Vocabulary Deck & Topic</label>
                <select class="styled-sel" id="tot-deck-sel" style="width: 100%; padding: 0.75rem; border-radius: 12px; border: 1px solid #e5e7eb; font-weight:600;">
                  <option value="appearance" selected>👁️ Physical Appearance (People)</option>
                  <option value="professions">💼 Professions & Careers</option>
                  <option value="properties">🏠 Properties & Real Estate (Flats/Houses)</option>
                  <option value="character">🧠 Character Traits & Personality</option>
                  <option value="hobbies">🎨 Hobbies, Passions & Lifestyle</option>
                  <option value="mixed">🔥 Mixed Full Deck (All Categories)</option>
                  <option value="dilemmas">⚖️ "This or That" Dilemmas</option>
                </select>
              </div>

              <button class="btn-start-game" onclick="COSY_GAME.start()" style="width: 100%; padding: 0.95rem; font-size: 1.1rem; border-radius: 30px; background: var(--tinder-gradient); color: #fff; border: none; font-weight: 800; cursor: pointer; box-shadow: 0 6px 18px rgba(253,38,125,0.35);">▶ Start Swiping 🔥</button>
            </div>`;
    }

    window.COSY_GAME = {
        deck: [],
        currentIndex: 0,
        swipedChoices: [],
        activeStoryIndex: 0,

        async start() {
            const levelSel = document.getElementById('tot-level-sel')?.value || 'A2';
            const deckSel = document.getElementById('tot-deck-sel')?.value || 'appearance';
            const body = document.getElementById('go-body');

            if (body) body.innerHTML = '<div style="text-align:center;padding:4rem;font-weight:700;color:var(--tinder-pink);">Shuffling Tinder deck... 🔥</div>';
            await new Promise(res => setTimeout(res, 200));

            let rawCards = [];

            if (deckSel === 'dilemmas') {
                rawCards = [...GENERAL_DILEMMAS];
                if (levelSel !== 'ALL') {
                    const targetLevelTag = levelSel.replace('_', '-');
                    rawCards = rawCards.filter(c => c.level === targetLevelTag || c.level.includes(targetLevelTag));
                }
            } else {
                const levelsToSearch = levelSel === 'ALL' ? ['A0_A1', 'A2', 'B1', 'B2'] : [levelSel];

                levelsToSearch.forEach(lvl => {
                    const levelData = CEFR_DECKS[lvl] || {};
                    if (deckSel === 'mixed') {
                        Object.keys(levelData).forEach(cat => {
                            rawCards.push(...levelData[cat]);
                        });
                    } else if (levelData[deckSel]) {
                        rawCards.push(...levelData[deckSel]);
                    }
                });
            }

            if (rawCards.length === 0) {
                const levelData = CEFR_DECKS['A2'] || {};
                Object.keys(levelData).forEach(cat => rawCards.push(...levelData[cat]));
            }

            this.deck = [...rawCards].sort(() => Math.random() - 0.5);
            this.currentIndex = 0;
            this.swipedChoices = [];
            this.activeStoryIndex = 0;

            if (window.COSYGame) {
                COSYGame.init(GAME_ID, 'en', levelSel);
                COSYGame.maxRounds = this.deck.length;
                COSYGame.score = 0;
            }

            this.renderCard();
        },

        renderCard() {
            const body = document.getElementById('go-body');
            if (!body) return;

            if (this.currentIndex >= this.deck.length) {
                this.renderEnd();
                return;
            }

            const item = this.deck[this.currentIndex];
            const isProfile = item.type === 'profile';
            const pages = isProfile && item.pages ? item.pages : [];
            const currentPage = pages[this.activeStoryIndex] || {};

            body.innerHTML = `
              <div class="tinder-app">
                <div class="tinder-top-bar">
                  <div class="tinder-brand">🔥 Tinder Words</div>
                  <div style="font-weight:800; font-size:0.85rem; color:#6b7280;">Card ${this.currentIndex + 1} / ${this.deck.length}</div>
                </div>

                <div class="card-stack">
                  <div class="tinder-card" id="active-card">
                    <!-- Dynamic Stamp Overlays -->
                    <div class="badge-indicator badge-like" id="badge-right">${isProfile ? '❤️ LIKE' : '👉 THAT'}</div>
                    <div class="badge-indicator badge-pass" id="badge-left">${isProfile ? '❌ NOPE' : '👈 THIS'}</div>
                    <div class="badge-indicator badge-super" id="badge-super">⭐ SUPER LIKE</div>

                    <!-- Hero Avatar Box with Story Bars & Tap Navigation -->
                    <div class="card-hero-box" style="background: ${item.gradient || 'var(--tinder-gradient)'};">
                      ${isProfile && pages.length > 1 ? `
                        <div class="story-bar-container">
                          ${pages.map((_, idx) => `<div class="story-segment ${idx === this.activeStoryIndex ? 'active' : ''}"></div>`).join('')}
                        </div>
                        <div class="tap-zone left" onclick="COSY_GAME.prevStory(event)"></div>
                        <div class="tap-zone right" onclick="COSY_GAME.nextStory(event)"></div>
                      ` : ''}

                      <!-- CEFR Level Badge Overlay -->
                      <div style="position:absolute; top:12px; right:12px; background:rgba(0,0,0,0.6); color:#fff; font-weight:800; font-size:0.75rem; padding:3px 9px; border-radius:12px; backdrop-filter:blur(6px); border:1px solid rgba(255,255,255,0.3); z-index:26;">
                        ${item.level || 'CEFR'}
                      </div>

                      <div class="card-avatar-emoji">${isProfile ? item.avatar : '⚖️'}</div>

                      ${isProfile ? `
                        <div class="card-sub-badge">
                          <span>${currentPage.tag || '🖼️ Profile'}</span>
                          ${pages.length > 1 ? `<span style="opacity:0.75;">(${this.activeStoryIndex + 1}/${pages.length})</span>` : ''}
                        </div>
                      ` : ''}
                    </div>

                    <!-- Card Body Content -->
                    <div class="card-body">
                      <div>
                        <div class="profile-title-row">
                          <span class="profile-name">${item.title}</span>
                          <span class="profile-age">${item.age ? ', ' + item.age : ''}</span>
                          ${item.verified ? '<span class="verified-icon" title="Verified Tinder Profile">☑️</span>' : ''}
                        </div>
                        <div class="profile-meta-row">
                          <span>${item.location || '📍 Nearby'}</span>
                          <span>• ${item.category}</span>
                        </div>

                        ${item.visualDescription ? `
                          <div style="font-size:0.78rem; font-style:italic; color:#4b5563; background:#f0f9ff; padding:6px 10px; border-radius:8px; margin-bottom:0.6rem; border-left:3px solid #0284c7;">
                            🎨 <strong>Visual Details:</strong> ${item.visualDescription}
                          </div>
                        ` : ''}

                        ${isProfile ? `
                          <div class="interest-tags">
                            ${(item.interests || []).map(tag => `<span class="tag-pill">${tag}</span>`).join('')}
                          </div>

                          ${currentPage.bio ? `
                            <div class="profile-bio-box">
                              "${currentPage.bio}"
                            </div>
                          ` : ''}

                          ${currentPage.greenFlags || currentPage.redFlags ? `
                            <div class="flag-grid">
                              ${(currentPage.greenFlags || []).map(g => `<div class="flag-card green">${g}</div>`).join('')}
                              ${(currentPage.redFlags || []).map(r => `<div class="flag-card red">${r}</div>`).join('')}
                            </div>
                          ` : ''}

                          ${item.anthem ? `
                            <div style="font-size:0.78rem; font-weight:700; color:#4b5563; margin-bottom:0.65rem; background:#f3f4f6; padding:5px 10px; border-radius:10px; display:inline-block;">
                              ${item.anthem}
                            </div>
                          ` : ''}
                        ` : `
                          <div class="dilemma-grid" style="display:grid; grid-template-columns:1fr 1fr; gap:10px; margin-bottom:0.8rem;">
                            <div class="dilemma-opt" style="background:#f9fafb; padding:10px; border-radius:12px; border:1px solid #e5e7eb; text-align:center;">
                              <div style="font-size:2.2rem; margin-bottom:4px;">${item.optionA.emoji}</div>
                              <div style="font-weight:800; font-size:0.95rem; color:#111827;">${item.optionA.title}</div>
                              <div style="font-size:0.78rem; color:#6b7280; margin-top:4px; line-height:1.3;">${item.optionA.desc}</div>
                            </div>
                            <div class="dilemma-opt" style="background:#f9fafb; padding:10px; border-radius:12px; border:1px solid #e5e7eb; text-align:center;">
                              <div style="font-size:2.2rem; margin-bottom:4px;">${item.optionB.emoji}</div>
                              <div style="font-weight:800; font-size:0.95rem; color:#111827;">${item.optionB.title}</div>
                              <div style="font-size:0.78rem; color:#6b7280; margin-top:4px; line-height:1.3;">${item.optionB.desc}</div>
                            </div>
                          </div>
                        `}

                        <div class="prompt-box">
                          💬 <strong>Discussion Prompt (${item.level || 'CEFR'}):</strong> ${item.prompt}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- Tinder Action Control Bar -->
                <div class="tinder-actions">
                  <button class="t-btn btn-rewind" id="btn-rewind" title="Rewind / Undo Last Swipe" ${this.swipedChoices.length === 0 ? 'disabled style="opacity:0.4;cursor:default;"' : ''}>🔄</button>
                  <button class="t-btn btn-pass" id="btn-swipe-left" title="Pass / Swipe Left">❌</button>
                  <button class="t-btn btn-super" id="btn-super-like" title="Super Like!">⭐</button>
                  <button class="t-btn btn-like" id="btn-swipe-right" title="Like / Swipe Right">❤️</button>
                </div>
                <div style="font-size:0.78rem; color:#9ca3af; margin-top:0.5rem;">
                  Tap photo sides to flip details • Keyboard Arrow Keys supported!
                </div>
              </div>
            `;

            this.attachDragEvents();
        },

        nextStory(e) {
            if (e) e.stopPropagation();
            const item = this.deck[this.currentIndex];
            if (item && item.pages && this.activeStoryIndex < item.pages.length - 1) {
                this.activeStoryIndex++;
                this.renderCard();
            }
        },

        prevStory(e) {
            if (e) e.stopPropagation();
            if (this.activeStoryIndex > 0) {
                this.activeStoryIndex--;
                this.renderCard();
            }
        },

        attachDragEvents() {
            const card = document.getElementById('active-card');
            const btnLeft = document.getElementById('btn-swipe-left');
            const btnRight = document.getElementById('btn-swipe-right');
            const btnSuper = document.getElementById('btn-super-like');
            const btnRewind = document.getElementById('btn-rewind');

            const badgeLeft = document.getElementById('badge-left');
            const badgeRight = document.getElementById('badge-right');

            if (!card) return;

            let startX = 0, currentX = 0, isDragging = false;

            const removeKeyHandler = () => {
                if (this._onKeyDown) {
                    window.removeEventListener('keydown', this._onKeyDown);
                    this._onKeyDown = null;
                }
            };

            removeKeyHandler();

            const onStart = (e) => {
                isDragging = true;
                startX = e.type.includes('touch') ? e.touches[0].clientX : e.clientX;
                card.classList.add('dragging');
            };

            const onMove = (e) => {
                if (!isDragging) return;
                currentX = (e.type.includes('touch') ? e.touches[0].clientX : e.clientX) - startX;
                const rotate = currentX * 0.08;
                card.style.transform = `translate3d(${currentX}px, 0, 0) rotate(${rotate}deg)`;

                if (currentX > 30) {
                    if (badgeRight) badgeRight.style.opacity = Math.min(1, (currentX - 30) / 70);
                    if (badgeLeft) badgeLeft.style.opacity = '0';
                } else if (currentX < -30) {
                    if (badgeLeft) badgeLeft.style.opacity = Math.min(1, (-currentX - 30) / 70);
                    if (badgeRight) badgeRight.style.opacity = '0';
                } else {
                    if (badgeRight) badgeRight.style.opacity = '0';
                    if (badgeLeft) badgeLeft.style.opacity = '0';
                }
            };

            const onEnd = () => {
                if (!isDragging) return;
                isDragging = false;
                card.classList.remove('dragging');

                window.removeEventListener('mousemove', onMove);
                window.removeEventListener('mouseup', onEnd);
                window.removeEventListener('touchmove', onMove);
                window.removeEventListener('touchend', onEnd);

                if (currentX > 100) {
                    removeKeyHandler();
                    this.executeSwipe('right');
                } else if (currentX < -100) {
                    removeKeyHandler();
                    this.executeSwipe('left');
                } else {
                    card.style.transform = 'translate3d(0,0,0) rotate(0deg)';
                    if (badgeLeft) badgeLeft.style.opacity = '0';
                    if (badgeRight) badgeRight.style.opacity = '0';
                }
            };

            card.addEventListener('mousedown', (e) => {
                onStart(e);
                window.addEventListener('mousemove', onMove);
                window.addEventListener('mouseup', onEnd);
            });

            card.addEventListener('touchstart', (e) => {
                onStart(e);
                window.addEventListener('touchmove', onMove, { passive: true });
                window.addEventListener('touchend', onEnd);
            }, { passive: true });

            btnLeft?.addEventListener('click', () => {
                removeKeyHandler();
                this.executeSwipe('left');
            });

            btnRight?.addEventListener('click', () => {
                removeKeyHandler();
                this.executeSwipe('right');
            });

            btnSuper?.addEventListener('click', () => {
                removeKeyHandler();
                this.executeSwipe('super');
            });

            btnRewind?.addEventListener('click', () => {
                removeKeyHandler();
                this.rewind();
            });

            this._onKeyDown = (e) => {
                if (e.key === 'ArrowLeft') {
                    removeKeyHandler();
                    this.executeSwipe('left');
                } else if (e.key === 'ArrowRight') {
                    removeKeyHandler();
                    this.executeSwipe('right');
                }
            };
            window.addEventListener('keydown', this._onKeyDown);
        },

        executeSwipe(direction) {
            const card = document.getElementById('active-card');
            const item = this.deck[this.currentIndex];
            if (!card || !item) return;

            const isLike = direction === 'right' || direction === 'super';
            const flyX = isLike ? 500 : -500;
            const flyRotate = isLike ? 25 : -25;

            card.style.transition = 'transform 0.3s ease, opacity 0.3s ease';
            card.style.transform = `translate3d(${flyX}px, 0, 0) rotate(${flyRotate}deg)`;
            card.style.opacity = '0';

            if (window.gameUtils && window.gameUtils.playGameSound) {
                window.gameUtils.playGameSound('click');
            }

            const choiceObj = {
                item,
                type: direction,
                choice: isLike ? (item.type === 'profile' ? 'Matched ❤️' : 'Option B 👉') : (item.type === 'profile' ? 'Passed ❌' : 'Option A 👈')
            };

            this.swipedChoices.push(choiceObj);
            if (window.COSYGame) COSYGame.score += (direction === 'super' ? 20 : 10);

            setTimeout(() => {
                if (isLike && item.type === 'profile') {
                    this.openMatchModal(item);
                } else {
                    this.activeStoryIndex = 0;
                    this.currentIndex++;
                    this.renderCard();
                }
            }, 260);
        },

        rewind() {
            if (this.swipedChoices.length === 0 || this.currentIndex === 0) return;
            this.swipedChoices.pop();
            this.currentIndex--;
            this.activeStoryIndex = 0;
            if (window.COSYGame) COSYGame.score = Math.max(0, COSYGame.score - 10);
            this.renderCard();
        },

        openMatchModal(item) {
            const modal = document.getElementById('match-modal');
            const nameEl = document.getElementById('match-item-name');
            const emojiEl = document.getElementById('match-item-emoji');
            const openerEl = document.getElementById('match-opener-text');
            const icebreakersEl = document.getElementById('chat-icebreakers');
            const messagesContainer = document.getElementById('chat-messages-container');
            const inputEl = document.getElementById('chat-input');

            if (nameEl) nameEl.textContent = item.title;
            if (emojiEl) emojiEl.textContent = item.avatar || '🔥';
            if (openerEl) openerEl.textContent = item.opener || `Hey! What made you swipe right on ${item.title} today? 🔥`;
            if (inputEl) inputEl.value = '';

            if (messagesContainer) {
                messagesContainer.innerHTML = `
                    <div style="background: rgba(255,255,255,0.95); color: #1f2937; padding: 8px 12px; border-radius: 12px 12px 12px 2px; font-size: 0.85rem; max-width: 85%; align-self: flex-start; box-shadow: 0 2px 6px rgba(0,0,0,0.15);">
                      <span>${item.opener || `Hey! What made you swipe right on ${item.title} today? 🔥`}</span>
                    </div>
                `;
            }

            if (icebreakersEl) {
                const pills = item.icebreakers || ['I love this profile!', 'Defend your choice 💬', 'Tell me more!'];
                icebreakersEl.innerHTML = pills.map(p => `
                    <button onclick="COSY_GAME.quickChat('${p.replace(/'/g, "\'")}')" style="background: rgba(255,255,255,0.25); border: 1px solid rgba(255,255,255,0.4); color: #fff; padding: 4px 10px; border-radius: 16px; font-size: 0.75rem; font-weight: 600; cursor: pointer; transition: background 0.15s;">${p}</button>
                `).join('');
            }

            if (modal) modal.classList.add('open');

            if (window.gameUtils && window.gameUtils.createConfetti) {
                window.gameUtils.createConfetti();
            }
        },

        quickChat(text) {
            const inputEl = document.getElementById('chat-input');
            if (inputEl) {
                inputEl.value = text;
                this.sendChatMessage();
            }
        },

        sendChatMessage() {
            const inputEl = document.getElementById('chat-input');
            const messagesContainer = document.getElementById('chat-messages-container');
            if (!inputEl || !inputEl.value.trim() || !messagesContainer) return;

            const userText = inputEl.value.trim();
            inputEl.value = '';

            // Render User Bubble
            const userMsg = document.createElement('div');
            userMsg.style.cssText = 'background: #fd267d; color: #ffffff; padding: 8px 12px; border-radius: 12px 12px 2px 12px; font-size: 0.85rem; max-width: 85%; align-self: flex-end; box-shadow: 0 2px 6px rgba(0,0,0,0.15); margin-top: 4px;';
            userMsg.textContent = userText;
            messagesContainer.appendChild(userMsg);
            messagesContainer.scrollTop = messagesContainer.scrollHeight;

            if (window.COSYGame) COSYGame.score += 5;

            // Delayed Level-Tailored Reply
            setTimeout(() => {
                const replies = [
                    "Haha I love that answer! Perfect match energy 🔥",
                    "Great point! I knew we would hit it off! 🚀",
                    "Spot on! Definitely agree with you there ☕",
                    "Fascinating perspective! You really know your stuff 🎉"
                ];
                const replyText = replies[Math.floor(Math.random() * replies.length)];
                const replyMsg = document.createElement('div');
                replyMsg.style.cssText = 'background: rgba(255,255,255,0.95); color: #1f2937; padding: 8px 12px; border-radius: 12px 12px 12px 2px; font-size: 0.85rem; max-width: 85%; align-self: flex-start; box-shadow: 0 2px 6px rgba(0,0,0,0.15); margin-top: 4px;';
                replyMsg.textContent = replyText;
                messagesContainer.appendChild(replyMsg);
                messagesContainer.scrollTop = messagesContainer.scrollHeight;
            }, 600);
        },

        closeMatchModal() {
            const modal = document.getElementById('match-modal');
            if (modal) modal.classList.remove('open');
            this.activeStoryIndex = 0;
            this.currentIndex++;
            this.renderCard();
        },

        renderEnd() {
            if (window.COSYScores && window.COSYGame) {
                COSYScores.save(GAME_ID, COSYGame.language || 'en', COSYGame.level || 'intermediate', COSYGame.score || 0);
            }

            if (window.gameUtils) {
                if (window.gameUtils.playGameSound) window.gameUtils.playGameSound('success');
                if (window.gameUtils.createConfetti) window.gameUtils.createConfetti();
            }

            const body = document.getElementById('go-body');
            if (!body) return;

            const scoreVal = window.COSYGame ? COSYGame.score : this.swipedChoices.length * 10;

            body.innerHTML = `
                <div class="setup-screen" style="max-width: 440px; margin: 0 auto; text-align: center; padding: 1.5rem 1rem;">
                  <h2>Swipe Deck Complete! 🎉</h2>
                  <div style="font-size: 2.5rem; font-weight: 800; color: var(--tinder-pink); margin: 0.5rem 0;">${scoreVal} Points</div>
                  <p style="color:var(--ink-muted);">Here are your Tinder matches & passed items. Discuss your reasons with your learning partner!</p>

                  <div style="text-align: left; background: #ffffff; border: 1px solid #e5e7eb; border-radius: 16px; padding: 1rem; margin: 1.25rem 0; max-height: 280px; overflow-y: auto;">
                    <h4 style="margin-top: 0; font-family:'DM Sans', sans-serif; font-weight:800;">Your Match History:</h4>
                    ${this.swipedChoices.map(c => `
                      <div style="padding: 8px 0; border-bottom: 1px dashed rgba(0,0,0,0.1); display: flex; justify-content: space-between; align-items: center; font-size: 0.88rem;">
                        <div>
                          <strong>${c.item.title}</strong> <span style="font-size:0.75rem; background:#f3f4f6; padding:2px 6px; border-radius:8px; margin-left:4px;">${c.item.level || ''}</span>
                          <div style="font-size: 0.78rem; color: #6b7280;">${c.item.category}</div>
                        </div>
                        <span style="font-weight: 700; padding: 4px 10px; border-radius: 20px; font-size: 0.78rem; background: ${c.choice.includes('Matched') || c.choice.includes('Option B') ? '#d1fae5' : '#fee2e2'}; color: ${c.choice.includes('Matched') || c.choice.includes('Option B') ? '#047857' : '#b91c1c'};">
                          ${c.choice}
                        </span>
                      </div>
                    `).join('')}
                  </div>

                  <div style="display:flex; gap:1rem; justify-content:center;">
                    <button class="btn-start-game" onclick="COSY_GAME.start()" style="padding:0.85rem 1.2rem; border-radius:30px; background:var(--tinder-gradient); color:#fff; font-weight:800; border:none; cursor:pointer;">Swipe Again 🔄</button>
                    <button class="btn-g-danger" onclick="COSY_GAME.reset()">Deck Settings ⚙️</button>
                  </div>
                </div>`;
        },

        reset: renderSetup
    };

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', renderSetup);
    } else {
        renderSetup();
    }
})();
