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
        "visualDescription": "Young woman with short black hair and brown eyes. She wears a bright red sweater and white sneakers.",
        "interests": [
          "#Tall",
          "#BlackHair",
          "#RedSweater"
        ],
        "anthem": "🎵 'Simple Song' - Basic Pop",
        "pages": [
          {
            "tag": "🖼️ Profile",
            "bio": "Hi! I am Anna. I am 22 years old. I am tall. I have short black hair and brown eyes. I like bright red clothes! I wear a red sweater, blue jeans, and white shoes. I have a big happy smile every day!",
            "greenFlags": [
              "✓ Big friendly smile",
              "✓ Tall and slim",
              "✓ Easy to see"
            ],
            "redFlags": [
              "✗ Always late for shoes",
              "✗ Wears only red",
              "✗ Speaks very fast"
            ]
          }
        ],
        "opener": "Hello! I am Anna. Do you like red sweaters or blue jeans?",
        "icebreakers": [
          "I like red sweaters!",
          "I prefer blue jeans!",
          "You have a nice smile!"
        ],
        "prompt": "Describe Anna. What color is her hair? What clothes does she wear?"
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
        "visualDescription": "Tall young man with curly brown hair, green eyes, and black glasses. He wears a green t-shirt and blue denim jacket.",
        "interests": [
          "#CurlyHair",
          "#Beard",
          "#Glasses"
        ],
        "anthem": "🎵 'Happy Days' - Upbeat Acoustic",
        "pages": [
          {
            "tag": "🖼️ Profile",
            "bio": "Hello! My name is Marco. I am 25 years old. I am tall. I have curly brown hair and green eyes. I wear black glasses and a short beard. My clothes are simple: a green t-shirt and a blue jacket.",
            "greenFlags": [
              "✓ Cute curly hair",
              "✓ Nice green eyes",
              "✓ Cool black glasses"
            ],
            "redFlags": [
              "✗ Loses glasses daily",
              "✗ Long beard cleaning",
              "✗ Always wears denim"
            ]
          }
        ],
        "opener": "Hi! Do you wear glasses or have curly hair?",
        "icebreakers": [
          "I wear glasses too!",
          "I love green eyes!",
          "Cool denim jacket!"
        ],
        "prompt": "What color are Marco's eyes and hair? Does he wear glasses?"
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
        "visualDescription": "Man in a white hat and apron. He makes fresh bread and cakes in a bakery.",
        "interests": [
          "#FreshBread",
          "#Bakery",
          "#Cakes"
        ],
        "anthem": "🎵 'Sweet Caroline' - Classic Oldie",
        "pages": [
          {
            "tag": "🖼️ Profile",
            "bio": "I am a baker. I wake up at 4:00 AM every morning. I make fresh bread, warm croissants, and cakes. I work in a big kitchen. It smells like warm bread and sugar. I sell food to happy customers.",
            "greenFlags": [
              "✓ Fresh bread every day",
              "✓ Warm sweet smell",
              "✓ Happy customers"
            ],
            "redFlags": [
              "✗ Wake up at 4:00 AM",
              "✗ White flour everywhere",
              "✗ Very hot oven"
            ]
          }
        ],
        "opener": "Good morning! Do you like fresh bread or sweet cake?",
        "icebreakers": [
          "Fresh bread please!",
          "Chocolate cake for me!",
          "I love croissants!"
        ],
        "prompt": "What does Chef John make every morning? Is his job early or late?"
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
        "visualDescription": "Doctor wearing a white coat and blue stethoscope in a bright clinic.",
        "interests": [
          "#Doctor",
          "#WhiteCoat",
          "#Health"
        ],
        "anthem": "🎵 'Healing Hands' - Calm Melodic",
        "pages": [
          {
            "tag": "🖼️ Profile",
            "bio": "I am a doctor. I work in a hospital. I help sick people feel better and stay healthy. I wear a white coat. I talk to children and adults every day. I give good medicine.",
            "greenFlags": [
              "✓ Helps sick people",
              "✓ Important job",
              "✓ Makes people happy"
            ],
            "redFlags": [
              "✗ Long night hours",
              "✗ Very busy day",
              "✗ Hard work"
            ]
          }
        ],
        "opener": "Hello! How are you today? Do you feel good?",
        "icebreakers": [
          "I feel great!",
          "I have a headache",
          "Thank you doctor!"
        ],
        "prompt": "Where does Dr. Sarah work? What clothes does she wear?"
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
        "visualDescription": "Small studio flat with a big sunny window, yellow sofa, and small kitchen.",
        "interests": [
          "#StudioFlat",
          "#SunnyWindow",
          "#YellowSofa"
        ],
        "anthem": "🎵 'Home Sweet Home' - Cozy Acoustic",
        "pages": [
          {
            "tag": "🖼️ Profile",
            "bio": "I am a small studio flat. I have one room, a yellow sofa, a small kitchen, and a clean bathroom. I am near the bus stop and the supermarket. I am cheap and cozy for one student.",
            "greenFlags": [
              "✓ Easy to clean",
              "✓ Sunny big window",
              "✓ Low price"
            ],
            "redFlags": [
              "✗ No big table",
              "✗ Small room",
              "✗ No balcony"
            ]
          }
        ],
        "opener": "Welcome! Do you like small cozy flats or big houses?",
        "icebreakers": [
          "I love cozy studio flats!",
          "I need a big garden!",
          "Great price!"
        ],
        "prompt": "Name 3 things inside this studio flat using simple words."
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
        "visualDescription": "Two-story red brick house with a green lawn and white fence.",
        "interests": [
          "#RedBrick",
          "#GreenGarden",
          "#QuietStreet"
        ],
        "anthem": "🎵 'Our House' - Happy Classic",
        "pages": [
          {
            "tag": "🖼️ Profile",
            "bio": "I am a red brick house. I have two bedrooms, one living room, a garage, and a green garden. I am on a quiet green street. My garden is good for dogs and children.",
            "greenFlags": [
              "✓ Nice green garden",
              "✓ Garage for car",
              "✓ Quiet place"
            ],
            "redFlags": [
              "✗ Far from city center",
              "✗ Cutting green grass",
              "✗ Big heating bill"
            ]
          }
        ],
        "opener": "Hello! Do you like a green garden or a city flat?",
        "icebreakers": [
          "I love green gardens!",
          "I prefer living in the city!",
          "Nice red bricks!"
        ],
        "prompt": "Is this house in a city or a quiet village? How many bedrooms does it have?"
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
        "visualDescription": "Smiling young person holding a warm cup of cocoa.",
        "interests": [
          "#Friendly",
          "#KindHeart",
          "#GoodFriend"
        ],
        "anthem": "🎵 'Count on Me' - Warm Pop",
        "pages": [
          {
            "tag": "🖼️ Profile",
            "bio": "I am kind and polite. I say 'please' and 'thank you'. I like helping my friends and neighbors. I smile at people on the street. I remember birthdays and bring sweet cookies to my friends.",
            "greenFlags": [
              "✓ Always polite",
              "✓ Helps carry bags",
              "✓ Good listener"
            ],
            "redFlags": [
              "✗ Says 'yes' to all",
              "✗ Sad when people fight",
              "✗ Too generous"
            ]
          }
        ],
        "opener": "Hello my friend! How are you today?",
        "icebreakers": [
          "You are so nice!",
          "Let us drink tea together!",
          "Have a great day!"
        ],
        "prompt": "What does a kind person do? Describe 2 simple actions."
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
        "visualDescription": "Red bicycle parked near a green tree in a park.",
        "interests": [
          "#Bicycle",
          "#Park",
          "#Exercise"
        ],
        "anthem": "🎵 'Bicycle Race' - Classic Rock",
        "pages": [
          {
            "tag": "🖼️ Profile",
            "bio": "I ride a red bicycle in the park every weekend. It is easy, cheap, and fun! I feel the cool wind. I listen to music and eat delicious ice cream at the park cafe.",
            "greenFlags": [
              "✓ Good exercise for legs",
              "✓ Fresh air outside",
              "✓ Fun with friends"
            ],
            "redFlags": [
              "✗ Rain on clothes",
              "✗ Flat bike tire",
              "✗ Messy hair"
            ]
          }
        ],
        "opener": "Hello! Can you ride a bicycle? Do you ride in the park?",
        "icebreakers": [
          "Yes, I ride every week!",
          "No, but I want to learn!",
          "I prefer walking!"
        ],
        "prompt": "Where do you like to ride a bicycle or walk? What do you see in the park?"
      }
    ],
    "nationalities": [
      {
        "type": "profile",
        "level": "A0-A1",
        "category": "Nationalities & Cultures 🌍",
        "title": "Kenji (Japanese 🇯🇵)",
        "age": "24",
        "location": "📍 Tokyo, Japan • 🇯🇵 Japanese",
        "verified": true,
        "avatar": "🇯🇵",
        "gradient": "linear-gradient(135deg, #dc2626 0%, #f87171 100%)",
        "visualDescription": "Young Japanese man with neat short dark hair, wearing a traditional summer yukata robe.",
        "interests": [
          "#Japanese",
          "#Tokyo",
          "#Ramen"
        ],
        "anthem": "🎵 'Sakura Dreams' - J-Pop Acoustic",
        "pages": [
          {
            "tag": "🖼️ Profile",
            "bio": "Konnichiwa! I am Kenji. I am Japanese. I live in Tokyo, Japan. My language is Japanese. In Japan, we eat fresh sushi and hot ramen. I drink green tea every day!",
            "greenFlags": [
              "✓ Polite and friendly",
              "✓ Makes hot miso soup",
              "✓ Shares Japanese culture"
            ],
            "redFlags": [
              "✗ Bows many times",
              "✗ Slurps noodles loudly",
              "✗ Talks about train times"
            ]
          }
        ],
        "opener": "Konnichiwa! What is your nationality? Where are you from?",
        "icebreakers": [
          "I am from Spain!",
          "I love Japanese food!",
          "Tokyo is a big city!"
        ],
        "prompt": "What is Kenji's nationality and home country? What food does he eat?"
      },
      {
        "type": "profile",
        "level": "A0-A1",
        "category": "Nationalities & Cultures 🌍",
        "title": "Sofia (Italian 🇮🇹)",
        "age": "23",
        "location": "📍 Rome, Italy • 🇮🇹 Italian",
        "verified": true,
        "avatar": "🇮🇹",
        "gradient": "linear-gradient(135deg, #16a34a 0%, #facc15 100%)",
        "visualDescription": "Italian woman with brown wavy hair in Rome.",
        "interests": [
          "#Italian",
          "#Rome",
          "#Pasta"
        ],
        "anthem": "🎵 'O Sole Mio' - Classic Italian",
        "pages": [
          {
            "tag": "🖼️ Profile",
            "bio": "Ciao! I am Sofia. I am Italian. I come from Rome in Italy. I speak Italian. Italy is famous for pizza, pasta, and sweet gelato. I cook fresh pasta at home!",
            "greenFlags": [
              "✓ Cooks fresh pasta",
              "✓ Warm friendly smile",
              "✓ Loves coffee"
            ],
            "redFlags": [
              "✗ Angry if pasta breaks",
              "✗ Talks with hands constantly",
              "✗ Drinks 5 espressos"
            ]
          }
        ],
        "opener": "Ciao! Do you like Italian pizza or sweet gelato?",
        "icebreakers": [
          "I love pizza and gelato!",
          "I want to visit Rome!",
          "Ciao Sofia!"
        ],
        "prompt": "Where is Sofia from? What is her nationality and native food?"
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
        "visualDescription": "Athletic woman with medium shoulder-length wavy auburn hair, hazel eyes, light freckles, wearing a navy blue striped shirt.",
        "interests": [
          "#WavyAuburnHair",
          "#HazelEyes",
          "#AthleticBuild"
        ],
        "anthem": "🎵 'Ocean Waves' - Summer Vibe",
        "pages": [
          {
            "tag": "🖼️ Profile",
            "bio": "I am Elena, 24 years old. I am medium height and athletic because I exercise every day. I have wavy auburn hair and hazel eyes with cute freckles. I love casual nautical clothes like navy striped shirts and leather sandals because they are comfortable for beach walks in summer.",
            "greenFlags": [
              "✓ Warm hazel eyes in sunlight",
              "✓ Cute natural freckles",
              "✓ Active athletic posture"
            ],
            "redFlags": [
              "✗ Sunburns very easily",
              "✗ Hair gets messy in wind",
              "✗ Wears sandals in winter"
            ]
          }
        ],
        "opener": "Hi! What is your favorite season for casual fashion?",
        "icebreakers": [
          "Summer fashion!",
          "Autumn coats and boots!",
          "Love nautical style!"
        ],
        "prompt": "Describe Elena's build, hair color, and clothing style using A2 connector words."
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
        "visualDescription": "Tall 6'2\" man with neat dark blonde side-part hair and sharp jawline, wearing a tailored navy blazer and clean white shirt.",
        "interests": [
          "#Tall6ft2",
          "#SmartBlazer",
          "#SharpLook"
        ],
        "anthem": "🎵 'Smooth Operator' - Jazzy Pop",
        "pages": [
          {
            "tag": "🖼️ Profile",
            "bio": "I am Liam, 27 years old. I am tall (6'2\") with a slim frame and broad shoulders. I have short dark blonde hair and a clean-shaven face. I prefer smart-casual elegance because I work in an office. I usually wear navy blazers, white shirts, a leather watch, and brown shoes.",
            "greenFlags": [
              "✓ Polished smart look",
              "✓ Great posture and height",
              "✓ Tidy short hairstyle"
            ],
            "redFlags": [
              "✗ Too picky about shirt creases",
              "✗ Expensive dry cleaning",
              "✗ Refuses cozy hoodies"
            ]
          }
        ],
        "opener": "Hello! Do you prefer dressing up formally or wearing cozy casual hoodies?",
        "icebreakers": [
          "Cozy hoodies all day!",
          "I love smart suits!",
          "A mix of both!"
        ],
        "prompt": "How tall is Liam? What does he wear for work and why?"
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
        "visualDescription": "Creative designer sitting with a drawing tablet, stylus pen, and colorful art posters.",
        "interests": [
          "#DigitalArt",
          "#ColorPalette",
          "#LogosAndPosters"
        ],
        "anthem": "🎵 'Colors of the Wind' - Pop Cover",
        "pages": [
          {
            "tag": "🖼️ Profile",
            "bio": "I am Nina, a graphic designer! I create colorful logos, website banners, and advertisements for local companies because I love art. I work on my laptop and drawing tablet. I choose beautiful fonts, combine matching colors, and draw digital illustrations.",
            "greenFlags": [
              "✓ Highly creative and fun work",
              "✓ Flexible work from home or cafes",
              "✓ See your posters in city streets"
            ],
            "redFlags": [
              "✗ Staring at screens for 8 hours",
              "✗ Clients changing their minds",
              "✗ Tired eyes after work"
            ]
          }
        ],
        "opener": "Hey! What color combination do you like for a website?",
        "icebreakers": [
          "Black and gold!",
          "Blue and pastel pink!",
          "Green and earthy brown!"
        ],
        "prompt": "What tools does Nina use for her work? Why does she enjoy her job?"
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
        "visualDescription": "Fit trainer wearing a black gym shirt and stopwatch, guiding a client in the gym.",
        "interests": [
          "#PersonalTrainer",
          "#WorkoutRoutine",
          "#HealthyNutrition"
        ],
        "anthem": "🎵 'Eye of the Tiger' - Gym Anthem",
        "pages": [
          {
            "tag": "🖼️ Profile",
            "bio": "I am Alex, a fitness trainer. I design exercise programs and teach people how to stay strong and healthy every day. I help clients with gym weights, running workouts, and meal plans so they can achieve their physical goals.",
            "greenFlags": [
              "✓ Active and energetic lifestyle",
              "✓ Helping people achieve health goals",
              "✓ Fun supportive gym environment"
            ],
            "redFlags": [
              "✗ Early 5:30 AM starts",
              "✗ Sore muscles after training",
              "✗ Loud music in gym"
            ]
          }
        ],
        "opener": "Hey! Do you prefer morning gym sessions or evening relaxing walks?",
        "icebreakers": [
          "Morning gym sessions!",
          "Evening relaxing walks!",
          "Weekend sports!"
        ],
        "prompt": "What does Alex do to help his clients? Would you like a personal trainer?"
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
        "visualDescription": "Industrial loft with high concrete ceilings, large glass windows, leather couch, and kitchen island.",
        "interests": [
          "#HighCeilings",
          "#IndustrialLoft",
          "#CityView"
        ],
        "anthem": "🎵 'City Lights' - Chill Beats",
        "pages": [
          {
            "tag": "🖼️ Profile",
            "bio": "This is a spacious one-bedroom industrial loft. It has high ceilings, large glass windows, and a modern open kitchen island. It is located in the Arts District near art galleries and coffee shops, so you can walk everywhere easily.",
            "greenFlags": [
              "✓ Great city skyline views",
              "✓ Lots of natural sunlight",
              "✓ Modern open kitchen"
            ],
            "redFlags": [
              "✗ Higher heating bills in winter",
              "✗ Street noise at night",
              "✗ No private garage"
            ]
          }
        ],
        "opener": "Hi! Do you like big industrial lofts with city views?",
        "icebreakers": [
          "I love industrial loft design!",
          "Too noisy for me!",
          "Awesome big windows!"
        ],
        "prompt": "Describe the main features of this loft apartment and its location."
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
        "visualDescription": "Cozy stone cottage with flower boxes, wooden porch swing, lawn, and chimney.",
        "interests": [
          "#FlowerGarden",
          "#PorchSwing",
          "#QuietSuburbs"
        ],
        "anthem": "🎵 'Country Roads' - Acoustic Cover",
        "pages": [
          {
            "tag": "🖼️ Profile",
            "bio": "This is a charming three-bedroom suburban cottage. It features a cozy stone fireplace, a sunny porch, and a flower garden. It is in a peaceful neighborhood near primary schools and bicycle paths, which makes it perfect for families.",
            "greenFlags": [
              "✓ Spacious private backyard",
              "✓ Cozy stone fireplace",
              "✓ Safe quiet neighborhood"
            ],
            "redFlags": [
              "✗ Requires regular garden care",
              "✗ Commute to city takes 35 minutes",
              "✗ Roof maintenance needed"
            ]
          }
        ],
        "opener": "Hello! Would you like to sit on the porch swing and enjoy the garden?",
        "icebreakers": [
          "Sounds peaceful!",
          "I prefer apartment living",
          "I love stone fireplaces!"
        ],
        "prompt": "Compare this suburban cottage with the city loft apartment using A2 vocabulary."
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
        "visualDescription": "Focused young woman checking off tasks in a paper planner at her clean desk.",
        "interests": [
          "#Punctual",
          "#Planner",
          "#ReliableFriend"
        ],
        "anthem": "🎵 'Clockwork' - Smooth Rhythms",
        "pages": [
          {
            "tag": "🖼️ Profile",
            "bio": "I am Sophia. I am very organized, punctual, and reliable. I never arrive late because I respect time. I use a daily planner to write my tasks, prepare my clothes the night before, and keep my desk clean.",
            "greenFlags": [
              "✓ Never cancels plans last minute",
              "✓ Dependable when friends need help",
              "✓ Always punctual"
            ],
            "redFlags": [
              "✗ Stressed when plans change",
              "✗ Strict about schedules",
              "✗ Dislikes messy rooms"
            ]
          }
        ],
        "opener": "Hi! Do you like to plan your week ahead or do you make spontaneous decisions?",
        "icebreakers": [
          "I plan everything ahead!",
          "I am spontaneous!",
          "A bit of both!"
        ],
        "prompt": "Why is reliability an important trait in friendship? Give an example."
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
        "visualDescription": "Golden loaf of sourdough bread on a wooden cutting board with a knife.",
        "interests": [
          "#BakingBread",
          "#CrispyCrust",
          "#Homemade"
        ],
        "anthem": "🎵 'Bread and Butter' - Upbeat Oldie",
        "pages": [
          {
            "tag": "🖼️ Profile",
            "bio": "I love baking artisanal sourdough bread at home. I mix simple flour, water, and starter, then bake it in a hot oven. My kitchen smells wonderful when the bread bakes. The warm crust crackles when it cools down, and it tastes delicious with butter!",
            "greenFlags": [
              "✓ Fresh warm delicious bread",
              "✓ Relaxing cooking hobby",
              "✓ Healthy natural ingredients"
            ],
            "redFlags": [
              "✗ Takes 24 hours of waiting",
              "✗ White flour everywhere",
              "✗ Feeding sourdough starter daily"
            ]
          }
        ],
        "opener": "Fresh sourdough bread from the oven! Do you prefer butter or olive oil?",
        "icebreakers": [
          "Salted butter please!",
          "Olive oil and balsamic!",
          "Garlic butter!"
        ],
        "prompt": "Explain the basic steps of sourdough baking using simple present tenses."
      }
    ],
    "nationalities": [
      {
        "type": "profile",
        "level": "A2",
        "category": "Nationalities & Cultures 🌍",
        "title": "Mateo (Mexican 🇲🇽)",
        "age": "26",
        "location": "📍 Oaxaca, Mexico • 🇲🇽 Spanish",
        "verified": true,
        "avatar": "🇲🇽",
        "gradient": "linear-gradient(135deg, #059669 0%, #dc2626 100%)",
        "visualDescription": "Mexican man in an embroidered shirt holding corn tacos in a town square.",
        "interests": [
          "#Mexican",
          "#Oaxaca",
          "#Tacos"
        ],
        "anthem": "🎵 'Cielito Lindo' - Mariachi Vibe",
        "pages": [
          {
            "tag": "🖼️ Profile",
            "bio": "Hola! I am Mateo from Oaxaca, Mexico. I am proud of my Mexican nationality and rich cultural heritage. We celebrate Day of the Dead with yellow marigold flowers, and we eat spicy mole sauce with fresh corn tacos.",
            "greenFlags": [
              "✓ Teaches salsa dancing on weekends",
              "✓ Prepares homemade guacamole",
              "✓ Welcoming and hospitable"
            ],
            "redFlags": [
              "✗ Says salsa is not spicy when it burns",
              "✗ Arrives 30 minutes late to events",
              "✗ Plays loud mariachi music"
            ]
          }
        ],
        "opener": "Hola! Do you like spicy Mexican food or traditional cultural festivals?",
        "icebreakers": [
          "I love spicy food!",
          "Day of the Dead looks beautiful!",
          "Teach me salsa dancing!"
        ],
        "prompt": "Describe Mateo's nationality, traditions, and traditional dishes using A2 connectors."
      },
      {
        "type": "profile",
        "level": "A2",
        "category": "Nationalities & Cultures 🌍",
        "title": "Freja (Danish 🇩🇰)",
        "age": "25",
        "location": "📍 Copenhagen, Denmark • 🇩🇰 Danish",
        "verified": true,
        "avatar": "🇩🇰",
        "gradient": "linear-gradient(135deg, #2563eb 0%, #38bdf8 100%)",
        "visualDescription": "Danish woman riding a bicycle along Copenhagen harbor in a sweater.",
        "interests": [
          "#Danish",
          "#Copenhagen",
          "#Hygge"
        ],
        "anthem": "🎵 'Nordic Lights' - Cozy Acoustic",
        "pages": [
          {
            "tag": "🖼️ Profile",
            "bio": "Hej! My name is Freja. I am Danish and I live in Copenhagen, Denmark. Danish culture values comfort and 'hygge'. We ride bicycles everywhere in rain or sunny weather. We enjoy open rye bread sandwiches and candlelit evenings.",
            "greenFlags": [
              "✓ Creates cozy candlelit dinners",
              "✓ Eco-friendly bike commuter",
              "✓ Honest direct speaker"
            ],
            "redFlags": [
              "✗ Refuses short car rides",
              "✗ Lights 20 candles in small room",
              "✗ Strict rye bread preferences"
            ]
          }
        ],
        "opener": "Hej! Do you prefer cycling around city streets or taking café breaks?",
        "icebreakers": [
          "I love riding bicycles!",
          "Tell me more about hygge!",
          "Copenhagen is beautiful!"
        ],
        "prompt": "What country is Freja from? Describe two aspects of Danish lifestyle."
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
        "visualDescription": "Artistic woman with voluminous dark brown curly hair and expressive dark eyes, wearing an embroidered bohemian kimono and silver rings.",
        "interests": [
          "#BohoStyle",
          "#VoluminousCurls",
          "#LayeredAccessories"
        ],
        "anthem": "🎵 'Gypsy Heart' - Indie Folk",
        "pages": [
          {
            "tag": "🖼️ Profile",
            "bio": "I'm Maya, a 26-year-old artist who is recognized by her expressive dark eyes, sun-kissed complexion, and voluminous shoulder-length dark brown curls. I express my artistic identity through bohemian fashion, which includes flowing embroidered cardigans, vintage silver jewelry, and suede boots.",
            "greenFlags": [
              "✓ Expressive facial features that reflect emotion",
              "✓ Unique personal style that stands out",
              "✓ Warm and inviting smile"
            ],
            "redFlags": [
              "✗ Takes 45 minutes to define curls",
              "✗ Overloaded with handmade bracelets",
              "✗ Obsessive thrift shopping"
            ]
          }
        ],
        "opener": "Hey! How would you describe the relationship between your fashion choices and your personal identity?",
        "icebreakers": [
          "Minimalist modern!",
          "Boho vintage artistic!",
          "Streetwear sneakers!"
        ],
        "prompt": "Describe Maya's appearance using relative clauses (who, which) and descriptive vocabulary."
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
        "visualDescription": "Broad-shouldered man with a trimmed dark beard and short undercut hair, wearing a heavy flannel plaid shirt and durable leather boots.",
        "interests": [
          "#BroadShouldered",
          "#TrimmedBeard",
          "#FlannelShirt"
        ],
        "anthem": "🎵 'Wilderness' - Folk Rock",
        "pages": [
          {
            "tag": "🖼️ Profile",
            "bio": "I'm Julian, a 29-year-old outdoor enthusiast who stands 6'1\" tall with a broad-shouldered frame, a neatly trimmed beard, and hazel eyes. My wardrobe centers around functional outdoor aesthetic, featuring heavy flannel plaid shirts, dark selvedge denim, and sturdy leather hiking boots.",
            "greenFlags": [
              "✓ Strong broad-shouldered posture",
              "✓ Meticulously groomed beard",
              "✓ Durable outdoor-ready wardrobe"
            ],
            "redFlags": [
              "✗ Beard oil residue on collar",
              "✗ Refuses formal ties",
              "✗ Owns flannel in every shade"
            ]
          }
        ],
        "opener": "Greetings! Do you favor a clean-cut corporate style or an outdoor rugged aesthetic?",
        "icebreakers": [
          "Outdoor rugged style!",
          "Clean-cut corporate!",
          "Casual streetwear!"
        ],
        "prompt": "Analyze Julian's physical appearance and explain how his wardrobe reflects his lifestyle."
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
        "visualDescription": "Software engineer working at a dual-monitor standing desk, wearing noise-canceling headphones.",
        "interests": [
          "#FullStackCode",
          "#DualMonitors",
          "#ProblemSolving"
        ],
        "anthem": "🎵 'Digital Love' - Electronic Synth",
        "pages": [
          {
            "tag": "🖼️ Profile",
            "bio": "I'm Marcus, a Full-Stack Software Engineer who develops web applications and cloud algorithms that transform complex data into user-friendly software. My main responsibilities include writing clean code, reviewing pull requests, solving logical bugs, and collaborating with designers remotely.",
            "greenFlags": [
              "✓ High remote work flexibility",
              "✓ Strong analytical problem solving",
              "✓ Excellent salary and growth"
            ],
            "redFlags": [
              "✗ Prolonged sitting and screen strain",
              "✗ Unexpected server emergencies",
              "✗ Jargon-heavy technical language"
            ]
          }
        ],
        "opener": "Hello world! Are you fascinated or intimidated by software development and modern technology?",
        "icebreakers": [
          "Fascinated by tech!",
          "Intimidated by code!",
          "I write code too!"
        ],
        "prompt": "Explain the responsibilities of a software engineer using intermediate career vocabulary."
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
        "visualDescription": "Journalist holding a recording microphone, interviewing an engineer near wind turbines.",
        "interests": [
          "#ClimateAction",
          "#Investigative",
          "#Storytelling"
        ],
        "anthem": "🎵 'Blowin' in the Wind' - Folk",
        "pages": [
          {
            "tag": "🖼️ Profile",
            "bio": "I'm Clara, an investigative environmental journalist who investigates climate change solutions and reports on clean energy initiatives across the globe. My work involves interviewing climate scientists, conducting field research, verifying facts, and publishing news features that inform the public.",
            "greenFlags": [
              "✓ Meaningful contribution to environmental awareness",
              "✓ Opportunities for fieldwork travel",
              "✓ Continuous intellectual learning"
            ],
            "redFlags": [
              "✗ High pressure from publication deadlines",
              "✗ Combating misleading information",
              "✗ Irregular working hours"
            ]
          }
        ],
        "opener": "Hi! What environmental topic or social cause do you feel most passionate about discussing?",
        "icebreakers": [
          "Renewable energy!",
          "Wildlife conservation!",
          "Reducing plastic waste!"
        ],
        "prompt": "What key skills and ethical duties are necessary for an environmental journalist?"
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
        "visualDescription": "Historic paper mill converted into a luxury loft with exposed red brick, heavy timber beams, and river views.",
        "interests": [
          "#HistoricBrick",
          "#RiverfrontView",
          "#TimberBeams"
        ],
        "anthem": "🎵 'Riverside' - Ambient Indie",
        "pages": [
          {
            "tag": "🖼️ Profile",
            "bio": "This 2-bedroom loft is located inside a converted 19th-century paper mill that successfully combines original exposed brickwork and timber beams with contemporary interior design. Residents enjoy a private balcony overlooking the riverfront promenade, integrated smart lighting, an underground garage, and exclusive fitness center access.",
            "greenFlags": [
              "✓ Authentic architectural character and heritage",
              "✓ Breathtaking riverfront views",
              "✓ Soundproof double-glazed windows"
            ],
            "redFlags": [
              "✗ Higher monthly HOA maintenance fees",
              "✗ High ceiling acoustic reverberation",
              "✗ Strict historical preservation regulations"
            ]
          }
        ],
        "opener": "Welcome! Do you prefer historic renovated properties or brand-new minimalist architecture?",
        "icebreakers": [
          "Historic renovated character!",
          "Brand-new sleek modern!",
          "A cozy country home!"
        ],
        "prompt": "Evaluate the architectural contrast between historic industrial brickwork and modern fixtures."
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
        "visualDescription": "Sustainable two-story villa with rooftop solar panels, rainwater harvesting, vertical plant wall, and timber deck.",
        "interests": [
          "#ZeroEmission",
          "#SolarPower",
          "#RainwaterHarvest"
        ],
        "anthem": "🎵 'Here Comes the Sun' - Acoustic",
        "pages": [
          {
            "tag": "🖼️ Profile",
            "bio": "This innovative 3-bedroom zero-emission villa is powered by rooftop solar panels and relies on triple-pane insulation and rainwater collection to minimize environmental impact. Key features include an organic vegetable garden patch, an electric vehicle charging dock, an indoor vertical plant wall, and negligible energy bills.",
            "greenFlags": [
              "✓ Exceptionally low monthly utility costs",
              "✓ Sustainable ecological carbon footprint",
              "✓ EV charging infrastructure included"
            ],
            "redFlags": [
              "✗ Significant initial capital investment",
              "✗ Solar battery system maintenance",
              "✗ Moderate distance from downtown"
            ]
          }
        ],
        "opener": "Greetings! How important is sustainable eco-friendly engineering when selecting a residence?",
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
        "visualDescription": "Warm-hearted man listening intently during a conversation at a quiet coffee shop.",
        "interests": [
          "#EmotionalIntelligence",
          "#ActiveListener",
          "#Empathetic"
        ],
        "anthem": "🎵 'Lean on Me' - Soul Classic",
        "pages": [
          {
            "tag": "🖼️ Profile",
            "bio": "I'm Daniel, a 28-year-old counselor who values high emotional intelligence, active listening, and sincere empathy in personal relationships. Friends frequently seek my advice when they encounter difficult challenges because I offer non-judgmental support and honest feedback.",
            "greenFlags": [
              "✓ Deeply supportive and trustworthy companion",
              "✓ Perceptive of unspoken emotions",
              "✓ Skilled conflict mediator"
            ],
            "redFlags": [
              "✗ Absorbs emotional stress easily",
              "✗ Avoids direct personal confrontation",
              "✗ Needs quiet recovery time"
            ]
          }
        ],
        "opener": "Hello! Do you consider yourself more guided by logical analysis or emotional intuition when making choices?",
        "icebreakers": [
          "Logical analysis!",
          "Emotional intuition!",
          "An equal balance of both!"
        ],
        "prompt": "Explain how emotional intelligence helps resolve interpersonal conflicts between friends."
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
        "visualDescription": "Climber wearing chalk bag, gripping indoor bouldering holds on an overhang wall.",
        "interests": [
          "#Bouldering",
          "#ProblemSolving",
          "#FitnessAndFocus"
        ],
        "anthem": "🎵 'Climb Every Mountain' - Rock Vibe",
        "pages": [
          {
            "tag": "🖼️ Profile",
            "bio": "Bouldering is an engaging physical hobby where climbers solve vertical routes on climbing walls using chalked hands and core strength. This sport combines tactical problem solving similar to chess with full-body functional endurance, offering a rewarding sense of achievement.",
            "greenFlags": [
              "✓ Develops core physical strength",
              "✓ Supportive social climbing community",
              "✓ Encourages intense mental concentration"
            ],
            "redFlags": [
              "✗ Chalk dust on clothes and gear",
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
        "prompt": "Describe how rock climbing combines physical conditioning with mental focus."
      }
    ],
    "nationalities": [
      {
        "type": "profile",
        "level": "B1",
        "category": "Nationalities & Cultures 🌍",
        "title": "Amara (Nigerian 🇳🇬)",
        "age": "28",
        "location": "📍 Lagos, Nigeria • 🇳🇬 Igbo & English",
        "verified": true,
        "avatar": "🇳🇬",
        "gradient": "linear-gradient(135deg, #15803d 0%, #22c55e 100%)",
        "visualDescription": "Nigerian woman wearing a patterned Ankara headwrap and traditional attire in Lagos.",
        "interests": [
          "#Nigerian",
          "#Afrobeats",
          "#JollofRice"
        ],
        "anthem": "🎵 'Lagos Heat' - Afrobeats Anthem",
        "pages": [
          {
            "tag": "🖼️ Profile",
            "bio": "Kedu! I'm Amara, a proud Nigerian from Lagos. Nigeria is a multicultural nation with over 250 distinct ethnic groups, rich oral traditions, and energetic Afrobeats music. Our celebratory gatherings feature spicy smoky Jollof rice, fried plantains, and vibrant traditional clothing with elaborate Gele headwraps.",
            "greenFlags": [
              "✓ Hosts festive dinner parties with Afrobeats playlists",
              "✓ Prepares authentic spicy Jollof rice",
              "✓ Warm, resilient, and charismatic personality"
            ],
            "redFlags": [
              "✗ Debates Jollof rice culinary origins for hours",
              "✗ Speakerphone calls in public spaces",
              "✗ Expects strict formal deference to elders"
            ]
          }
        ],
        "opener": "Kedu! How familiar are you with West African culinary traditions and global Afrobeats music?",
        "icebreakers": [
          "Afrobeats is my favorite genre!",
          "I've heard about the Jollof debate!",
          "Love the colorful attire!"
        ],
        "prompt": "Discuss Amara's Nigerian cultural identity, gastronomy, and musical heritage using intermediate language."
      },
      {
        "type": "profile",
        "level": "B1",
        "category": "Nationalities & Cultures 🌍",
        "title": "Aarav (Indian 🇮🇳)",
        "age": "27",
        "location": "📍 Jaipur, India • 🇮🇳 Hindi & English",
        "verified": true,
        "avatar": "🇮🇳",
        "gradient": "linear-gradient(135deg, #d97706 0%, #f59e0b 100%)",
        "visualDescription": "Indian man in a blue kurta near Jaipur monuments holding cardamom chai.",
        "interests": [
          "#Indian",
          "#Jaipur",
          "#MasalaChai"
        ],
        "anthem": "🎵 'Raga Beats' - Fusion Sitar",
        "pages": [
          {
            "tag": "🖼️ Profile",
            "bio": "Namaste! I'm Aarav from Jaipur, India. Indian nationality encompasses a pluralistic heritage, architectural wonders, and centuries of diverse regional customs. Our cultural ethos prioritizes 'Atithi Devo Bhava' (The Guest is God). I enjoy brewing authentic cardamom masala chai and preparing fragrant spiced biryani.",
            "greenFlags": [
              "✓ Generous hospitality for all guests",
              "✓ Expert knowledge of spice combinations",
              "✓ Passionate about historic architecture"
            ],
            "redFlags": [
              "✗ Insists tea bag chai is unacceptable",
              "✗ Non-verbal head-wobbles confuse visitors",
              "✗ Spontaneous cricket match debates"
            ]
          }
        ],
        "opener": "Namaste! Have you experienced Indian spice gastronomy or historical architectural monuments?",
        "icebreakers": [
          "I drink masala chai every day!",
          "Jaipur looks breathtaking!",
          "Tell me about Indian architecture!"
        ],
        "prompt": "Examine Aarav's Indian nationality, cultural ethos of hospitality, and gastronomy."
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
        "visualDescription": "Statuesque 5'10\" woman with a razor-sharp platinum blonde bob, piercing ice-blue eyes, high cheekbones, wearing an asymmetrical black blazer.",
        "interests": [
          "#StatuesqueElegance",
          "#PlatinumBlondeBob",
          "#HighCheekbones"
        ],
        "anthem": "🎵 'Vogue' - Chic Fashion",
        "pages": [
          {
            "tag": "🖼️ Profile",
            "bio": "I'm Victoria, 29. My statuesque 5'10\" silhouette is defined by prominent high cheekbones, piercing ice-blue eyes, and a precision-cut platinum blonde bob. My sartorial philosophy embodies high-fashion minimalist tailoring, incorporating structured monochromatic blazers, sleek leather boots, and subtle gold accents.",
            "greenFlags": [
              "✓ Uncompromising sartorial poise and confidence",
              "✓ Commanding physical posture and presence",
              "✓ Impeccable grooming and aesthetic standards"
            ],
            "redFlags": [
              "✗ Intimidating initial impression",
              "✗ High-maintenance platinum bleach regimen",
              "✗ Rigid dress code expectations"
            ]
          }
        ],
        "opener": "Welcome! How significantly does sartorial elegance and visual poise influence your interpersonal perception?",
        "icebreakers": [
          "First impressions are crucial!",
          "Authenticity surpasses attire!",
          "Appreciate refined tailoring!"
        ],
        "prompt": "Examine the stylistic impact of Victoria's minimalist wardrobe, hair structure, and commanding demeanor."
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
        "visualDescription": "Charismatic 34-year-old man with distinguished silver-templed dark hair and captivating dimples, wearing a tailored charcoal wool coat and silk scarf.",
        "interests": [
          "#SilverTemples",
          "#DistinguishedLook",
          "#TailoredWoolCoat"
        ],
        "anthem": "🎵 'Feeling Good' - Orchestral Jazz",
        "pages": [
          {
            "tag": "🖼️ Profile",
            "bio": "I'm Gabriel, 34. Standing at an athletic 6'0\", my appearance balances distinguished silver-templed dark hair, warm hazel eyes, and expressive dimples when laughing. I favor classic European sophistication: tailored charcoal wool overcoats, cashmere turtlenecks, antique leather loafers, and a vintage timepiece.",
            "greenFlags": [
              "✓ Distinguished and mature aesthetic poise",
              "✓ Warm disarming smile with natural dimples",
              "✓ Timeless classic fashion choices"
            ],
            "redFlags": [
              "✗ Overly fastidious about vintage timepieces",
              "✗ Total aversion to sportswear",
              "✗ Meticulous silvering hair care"
            ]
          }
        ],
        "opener": "Greetings! Do you believe personal style should evolve dynamically or anchor to timeless classicism?",
        "icebreakers": [
          "Evolve with current trends!",
          "Anchor to timeless classicism!",
          "Blend modern & vintage!"
        ],
        "prompt": "Analyze how Gabriel's physical attributes convey maturity, charisma, and European sophistication."
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
        "visualDescription": "Researcher auditing algorithmic bias charts on transparent displays in a university research laboratory.",
        "interests": [
          "#AIEthics",
          "#AlgorithmicJustice",
          "#TechPolicy"
        ],
        "anthem": "🎵 'Computer World' - Electro Synth",
        "pages": [
          {
            "tag": "🖼️ Profile",
            "bio": "I'm Dr. Aris, an Artificial Intelligence Ethics Researcher evaluating autonomous algorithms to mitigate systemic bias, ensure data privacy, and enforce accountability. My duties encompass drafting policy governance frameworks, advising corporate executives, and auditing machine learning models to prevent discriminatory automated decisions.",
            "greenFlags": [
              "✓ Pioneering crucial safeguards at the frontier of technology",
              "✓ Intellectual rigor and high-level policy advocacy",
              "✓ Shaping global regulatory standards"
            ],
            "redFlags": [
              "✗ Complex moral ambiguities lacking consensus",
              "✗ Corporate pushback against compliance",
              "✗ Rapidly evolving technological paradigms"
            ]
          }
        ],
        "opener": "Greetings! In your assessment, should artificial intelligence development be governed by binding international regulatory frameworks?",
        "icebreakers": [
          "Binding regulation is imperative!",
          "Innovation requires market autonomy!",
          "Adaptive risk-proportionate oversight!"
        ],
        "prompt": "Evaluate the moral dilemmas, policy challenges, and societal impact of AI ethics research."
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
        "visualDescription": "Architect examining intricate stonework details of a historic cathedral during a restoration project.",
        "interests": [
          "#HeritageRestoration",
          "#SustainableUrbanism",
          "#AdaptiveReuse"
        ],
        "anthem": "🎵 'Symphony No. 5' - Orchestral",
        "pages": [
          {
            "tag": "🖼️ Profile",
            "bio": "I'm Soren, an Architectural Conservationist specializing in adaptive reuse—restoring landmark heritage edifices while modernizing their structural utility sustainably. My work entails conducting 3D laser diagnostics on masonry, procuring period-accurate sustainable materials, and preventing historical landmarks from urban demolition.",
            "greenFlags": [
              "✓ Safeguarding architectural heritage for posterity",
              "✓ Tangible cultural legacy and artistic preservation",
              "✓ Harmonizing historical aesthetic with eco-sustainability"
            ],
            "redFlags": [
              "✗ Protracted municipal approval bureaucracy",
              "✗ Unforeseen structural deterioration costs",
              "✗ Persistent budgetary constraints"
            ]
          }
        ],
        "opener": "Hello! How can municipal planners effectively balance historic preservation with expanding urban infrastructure demands?",
        "icebreakers": [
          "Prioritize heritage preservation!",
          "Prioritize modern infrastructure!",
          "Adaptive reuse is the bridge!"
        ],
        "prompt": "Analyze the ideological debate between historical architectural conservation and contemporary urban development."
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
        "visualDescription": "Luxury penthouse terrace featuring a private glass-edge infinity pool, 360-degree skyline panoramas, and smart automation.",
        "interests": [
          "#360SkylineView",
          "#InfinityPool",
          "#SmartAutomation"
        ],
        "anthem": "🎵 'Skyfall' - Cinematic Elegance",
        "pages": [
          {
            "tag": "🖼️ Profile",
            "bio": "This exquisite 4,500 sq ft top-floor Sky Villa features a private cantilevered glass-edge infinity pool, 360-degree panoramic skyline vistas, and biometric smart automation. The residence offers keyless direct elevator access, a climate-controlled sommelier wine cellar, motorized curtain glass facades, and rooftop helipad privileges.",
            "greenFlags": [
              "✓ Unrivaled panoramic cityscape vistas",
              "✓ Uncompromised security and seclusion",
              "✓ Cutting-edge domotic automation"
            ],
            "redFlags": [
              "✗ Substantial ongoing maintenance overhead",
              "✗ Slight high-altitude structural sway in severe storms",
              "✗ Detached from street-level community vibe"
            ]
          }
        ],
        "opener": "Welcome to the sky! To what degree does high-end architectural luxury justify its ecological and socio-urban footprint?",
        "icebreakers": [
          "Breathtaking pinnacle living!",
          "Excessive luxury is problematic!",
          "Impressive engineering achievement!"
        ],
        "prompt": "Analyze the architectural engineering, structural dynamics, and urban exclusivity of high-rise penthouse living."
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
        "visualDescription": "Rustic timber chalet set in alpine pine forests, featuring cathedral glass windows, cedar sauna, and stone hearth.",
        "interests": [
          "#AlpineChalet",
          "#CathedralWindows",
          "#CedarSauna"
        ],
        "anthem": "🎵 'Winter Song' - Atmospheric Folk",
        "pages": [
          {
            "tag": "🖼️ Profile",
            "bio": "Nestled into alpine slopes, this magnificent 4-bedroom timber chalet showcases double-height cathedral windows framing snow-draped pine valleys and a massive granite fireplace. The estate provides ski-in/ski-out convenience, an outdoor cedar wood sauna, geothermal radiant floor heating, and handcrafted oak joinery by local artisans.",
            "greenFlags": [
              "✓ Unsurpassed mountain tranquility and seclusion",
              "✓ Sustainable geothermal heating infrastructure",
              "✓ Immediate proximity to alpine ski resorts"
            ],
            "redFlags": [
              "✗ Intermittent road blockages during severe blizzards",
              "✗ Seasonal isolation during off-peak months",
              "✗ Rigorous timber sealant upkeep"
            ]
          }
        ],
        "opener": "Greetings! Would you thrive immersed in mountain isolation, or do you require urban velocity to stay stimulated?",
        "icebreakers": [
          "Alpine wilderness sanctuary!",
          "Urban velocity always!",
          "Seasonal balance between both!"
        ],
        "prompt": "Evaluate how residing in isolated natural topography influences psychological well-being and daily routine."
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
        "visualDescription": "Determined female executive standing on a terrace overlooking the city skyline.",
        "interests": [
          "#StrategicVision",
          "#Resilience",
          "#EmpoweringLeader"
        ],
        "anthem": "🎵 'Unstoppable' - Anthem",
        "pages": [
          {
            "tag": "🖼️ Profile",
            "bio": "I'm Helena, 32. My character is anchored by strategic foresight, unflinching resilience during crises, and an unwavering commitment to empowering my team. I view setbacks not as failures, but as invaluable empirical data for growth, driving innovation through calculated risk-taking and radical transparency.",
            "greenFlags": [
              "✓ Inspires high performance and ambition",
              "✓ Unshakable poise during corporate turbulence",
              "✓ Decisive and forward-thinking vision"
            ],
            "redFlags": [
              "✗ Uncompromising standards can intimidate",
              "✗ Pronounced workaholic tendencies",
              "✗ Low tolerance for operational inertia"
            ]
          }
        ],
        "opener": "Greetings! What fundamental leadership qualities distinguish transformational visionaries from conventional managers?",
        "icebreakers": [
          "Empathy and strategic vision!",
          "Resilience under severe crisis!",
          "Leading by moral example!"
        ],
        "prompt": "Differentiate between transactional management and transformative resilient leadership in modern organizations."
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
        "visualDescription": "Vintage 35mm film camera resting on a darkroom wooden bench next to developed negatives.",
        "interests": [
          "#FilmIsNotDead",
          "#35mmAnalog",
          "#DarkroomProcess"
        ],
        "anthem": "🎵 'Kodachrome' - Nostalgic Classic",
        "pages": [
          {
            "tag": "🖼️ Profile",
            "bio": "35mm film photography requires deliberate artistic composition and patience, restricting the photographer to 36 exposures per roll without instantaneous digital previews. Developing chemical negatives in darkrooms allows photographers to embrace grain textures, light leaks, and unedited candid human authenticity.",
            "greenFlags": [
              "✓ Cultivates artistic mindfulness and patience",
              "✓ Tangible physical medium and archival prints",
              "✓ Unrivaled aesthetic organic depth"
            ],
            "redFlags": [
              "✗ Escalating chemical and film canister expenses",
              "✗ Accidental light leaks ruining exposures",
              "✗ Complete absence of instant gratification"
            ]
          }
        ],
        "opener": "Greetings! How does the deliberate artistic constraint of analog film alter creative expression compared to digital photographic abundance?",
        "icebreakers": [
          "Constraints force deeper artistic focus!",
          "Digital abundance enables speed!",
          "Analog preserves authentic soul!"
        ],
        "prompt": "Critique the psychological and aesthetic divergences between digital smartphone photography and traditional 35mm analog film."
      }
    ],
    "nationalities": [
      {
        "type": "profile",
        "level": "B2",
        "category": "Nationalities & Cultures 🌍",
        "title": "Camille (French 🇫🇷)",
        "age": "29",
        "location": "📍 Paris, France • 🇫🇷 French",
        "verified": true,
        "avatar": "🇫🇷",
        "gradient": "linear-gradient(135deg, #1d4ed8 0%, #ef4444 100%)",
        "visualDescription": "French woman in a trench coat seated at a Parisian pavement café with wine.",
        "interests": [
          "#French",
          "#Parisian",
          "#Gastronomy"
        ],
        "anthem": "🎵 'La Vie En Rose' - Chanson Moderne",
        "pages": [
          {
            "tag": "🖼️ Profile",
            "bio": "Bonjour. I am Camille from Paris. French identity is fundamentally defined by 'art de vivre'—the intellectual art of living refinedly through literature, philosophy, and culinary mastery. Our gastronomic meal is UNESCO-recognized intangible cultural heritage, celebrating wine terroir pairings, artisanal raw milk cheeses, and animated philosophical debate.",
            "greenFlags": [
              "✓ Refined palate for wine and artisanal cheese terroir",
              "✓ Engaging, intellectually rigorous conversationalist",
              "✓ Effortless sartorial chic aesthetic"
            ],
            "redFlags": [
              "✗ Uncompromising stance on baguette crust density",
              "✗ Dramatic sighs when served tap water",
              "✗ Scurrilous critique of non-French viniculture"
            ]
          }
        ],
        "opener": "Bonjour! To what extent does national heritage shape your daily philosophical outlook and culinary discernment?",
        "icebreakers": [
          "French gastronomy is world-class!",
          "I admire the Parisian art de vivre!",
          "Debating philosophy sounds great!"
        ],
        "prompt": "Analyze Camille's expression of French cultural heritage, 'art de vivre', and gastronomic philosophy."
      },
      {
        "type": "profile",
        "level": "B2",
        "category": "Nationalities & Cultures 🌍",
        "title": "Leandro (Brazilian 🇧🇷)",
        "age": "30",
        "location": "📍 Rio de Janeiro, Brazil • 🇧🇷 Portuguese",
        "verified": true,
        "avatar": "🇧🇷",
        "gradient": "linear-gradient(135deg, #16a34a 0%, #eab308 100%)",
        "visualDescription": "Brazilian man playing beach volleyball on Ipanema Beach in Rio de Janeiro.",
        "interests": [
          "#Brazilian",
          "#RioDeJaneiro",
          "#BossaNova"
        ],
        "anthem": "🎵 'Girl From Ipanema' - Bossa Nova Classic",
        "pages": [
          {
            "tag": "🖼️ Profile",
            "bio": "Olá! I'm Leandro from Rio de Janeiro. Brazilian nationality represents a vibrant demographic melting pot harmonizing Indigenous, African, and European cultural lineage. From syncopated Carnival rhythms to Bossa Nova nostalgia and communal feijoada banquets, our culture thrives on uninhibited warmth, optimism, and social cohesion.",
            "greenFlags": [
              "✓ Infectious warmth and disarming social energy",
              "✓ Acoustic guitar proficiency playing bossa nova",
              "✓ Master of slow-simmered traditional feijoada"
            ],
            "redFlags": [
              "✗ Punctuality viewed as a flexible social suggestion",
              "✗ Effusive physical cheek-kisses for new acquaintances",
              "✗ Nocturnal samba percussion practice"
            ]
          }
        ],
        "opener": "Olá! How do you conceptualize the interplay between cultural syncretism, musical heritage, and national identity?",
        "icebreakers": [
          "Brazilian music is so soul-stirring!",
          "Rio de Janeiro looks paradise-like!",
          "Tell me about Carnival traditions!"
        ],
        "prompt": "Evaluate Leandro's articulation of Brazilian multicultural syncretism, musical heritage, and communal social ethos."
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
                <label style="font-weight:700; display:block; margin-bottom:0.4rem; font-size:0.9rem;">🌐 Target Language</label>
                <select class="styled-sel" id="tot-lang-sel" style="width: 100%; padding: 0.75rem; border-radius: 12px; border: 1px solid #e5e7eb; font-weight:600;">
                  <option value="en" selected>🇬🇧 English</option>
                  <option value="french">🇫🇷 Français (French)</option>
                  <option value="italian">🇮🇹 Italiano (Italian)</option>
                  <option value="russian">🇷🇺 Русский (Russian)</option>
                  <option value="greek">🇬🇷 Ελληνικά (Greek)</option>
                </select>
              </div>

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
                  <option value="nationalities">🌍 Nationalities & Cultural Heritage</option>
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
            const langSel = document.getElementById('tot-lang-sel')?.value || 'en';
            const levelSel = document.getElementById('tot-level-sel')?.value || 'A2';
            const deckSel = document.getElementById('tot-deck-sel')?.value || 'appearance';
            const body = document.getElementById('go-body');

            if (body) body.innerHTML = '<div style="text-align:center;padding:4rem;font-weight:700;color:var(--tinder-pink);">Shuffling Tinder deck... 🔥</div>';
            await new Promise(res => setTimeout(res, 200));

            let activeDecksSource = CEFR_DECKS;

            if (langSel !== 'en') {
                try {
                    const res = await fetch(`decks/${langSel}.json`);
                    if (res.ok) {
                        activeDecksSource = await res.json();
                    }
                } catch (e) {
                    console.warn(`Failed to fetch deck for language ${langSel}, falling back to English.`, e);
                }
            }

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
                    const levelData = activeDecksSource[lvl] || {};
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
                // If specific category is empty for this language/level, fall back to any available category in activeDecksSource
                ['A0_A1', 'A2', 'B1', 'B2'].forEach(lvl => {
                    const levelData = activeDecksSource[lvl] || {};
                    Object.keys(levelData).forEach(cat => rawCards.push(...levelData[cat]));
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
                COSYGame.init(GAME_ID, langSel, levelSel);
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
