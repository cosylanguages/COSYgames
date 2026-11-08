/**
 * games/guess/game.js
 * Unified "Guess!" Mega-Game Engine
 * Supports 4 editions, expanded sub-categories (weather, food with fruit/veg filters, Christmas,
 * hobbies, emotions, countries/cities, nationalities, 9 CEFR-graded verb decks),
 * and 8 gameplay modes including Charades, 1-word description, random letter constraints, and synonyms.
 */
(function() {
    'use strict';

    const GAME_ID = 'guess';
    const GAME_TITLE = 'Guess! 🔮';
    const LEVEL_OPTS = ['Starter (A1)', 'Primary (A2)', 'Intermediate (B1)', 'Upper (B2)', 'Advanced (C1)', 'Proficiency (C2)'];
    const LANG_OPTS = (window.cosyLanguageLabels && typeof window.cosyLanguageLabels === 'function')
        ? window.cosyLanguageLabels(['en', 'fr', 'es', 'de', 'it', 'ru', 'el'])
        : ['🇬🇧 English', '🇫🇷 Français', '🇪🇸 Español', '🇩🇪 Deutsch', '🇮🇹 Italiano', '🇷🇺 Русский', '🇬🇷 Ελληνικά'];

    function getT() {
        return (window.COSYGameStrings && typeof window.COSYGameStrings.forGame === 'function')
            ? window.COSYGameStrings.forGame('guess')
            : function(key, params, fallback) { return fallback || key; };
    }

    // Audio Chimes with Web Audio API
    let audioCtx = null;
    function playChime(type) {
        try {
            if (!audioCtx) {
                audioCtx = new (window.AudioContext || window.webkitAudioContext)();
            }
            if (audioCtx.state === 'suspended') {
                audioCtx.resume();
            }
            const osc = audioCtx.createOscillator();
            const gain = audioCtx.createGain();
            osc.connect(gain);
            gain.connect(audioCtx.destination);

            const now = audioCtx.currentTime;
            if (type === 'tick') {
                osc.type = 'sine';
                osc.frequency.setValueAtTime(800, now);
                gain.gain.setValueAtTime(0.05, now);
                gain.gain.exponentialRampToValueAtTime(0.001, now + 0.05);
                osc.start(now);
                osc.stop(now + 0.05);
            } else if (type === 'success') {
                osc.type = 'triangle';
                osc.frequency.setValueAtTime(523.25, now); // C5
                osc.frequency.setValueAtTime(659.25, now + 0.08); // E5
                osc.frequency.setValueAtTime(783.99, now + 0.16); // G5
                gain.gain.setValueAtTime(0.15, now);
                gain.gain.exponentialRampToValueAtTime(0.001, now + 0.35);
                osc.start(now);
                osc.stop(now + 0.35);
            } else if (type === 'buzzer') {
                osc.type = 'sawtooth';
                osc.frequency.setValueAtTime(150, now);
                gain.gain.setValueAtTime(0.15, now);
                gain.gain.exponentialRampToValueAtTime(0.001, now + 0.3);
                osc.start(now);
                osc.stop(now + 0.3);
            }
        } catch (e) {
            // Audio not allowed or unavailable
        }
    }

    // Comprehensive Datasets across all Editions, Sub-Categories & CEFR Verb Groups
    const DECKS = {
        who: [
            // Historical Figures
            { word: 'Julius Caesar', level: 'a2', cat: 'historical', clues: ['Ancient Roman statesman and military general.', 'Famously associated with the Ides of March.'], taboo: ['emperor', 'rome', 'brutus', 'senate'], riddle: 'A conqueror crowned by victory yet undone by knives within the marble hall of senators.' },
            { word: 'Marie Curie', level: 'b1', cat: 'historical', clues: ['Pioneering physicist and chemist.', 'First person to win two Nobel Prizes in distinct sciences.'], taboo: ['radiation', 'science', 'nobel', 'radium'], riddle: 'A luminous intellect whose notebooks still pulse with the invisible glow of the elements she named.' },
            { word: 'Alexander the Great', level: 'b2', cat: 'historical', clues: ['Ancient Macedonian king who created one of history’s vastest empires.', 'Undefeated in battle from Greece to northwest India.'], taboo: ['macedon', 'empire', 'king', 'conquer'], riddle: 'Wept upon the shores of the known earth when told there were no further worlds to tame.' },
            // Fictional & Mythological Characters
            { word: 'Sherlock Holmes', level: 'a2', cat: 'fictional', clues: ['Legendary consulting detective residing at 221B Baker Street.', 'Possesses unmatched powers of deductive reasoning.'], taboo: ['watson', 'pipe', 'detective', 'london'], riddle: 'From tobacco ash and scuffed boot leather, the world’s lone consulting intellect reconstructs the crime.' },
            { word: 'Zeus', level: 'a1', cat: 'fictional', clues: ['Supreme ruler of Mount Olympus and king of the Greek gods.', 'Wields the thunderbolt as his weapon.'], taboo: ['god', 'olympus', 'lightning', 'greece'], riddle: 'Sovereign of cloud and lightning perched above the Aegean peaks.' },
            // Professionals & Occupations
            { word: 'Baker', level: 'a1', cat: 'occupations', clues: ['Wakes before dawn to mix dough and bake fresh bread.', 'Works beside hot ovens with flour and yeast.'], taboo: ['bread', 'flour', 'oven', 'pastry'], riddle: 'Transforms powdery harvest into golden crusts before the morning bells chime.' },
            { word: 'Nurse', level: 'a2', cat: 'occupations', clues: ['Healthcare professional caring for injured and sick patients.', 'Monitors vitals and administers medicine in hospitals.'], taboo: ['hospital', 'doctor', 'patient', 'medicine'], riddle: 'A sentinel in scrubs administering care in corridors where breath is measured.' },
            { word: 'Cryptographer', level: 'c1', cat: 'occupations', clues: ['Specialist who crafts and analyzes ciphers and encryption systems.', 'Operates at the intersection of discrete mathematics and information security.'], taboo: ['code', 'cipher', 'secret', 'security'], riddle: 'Architect of mathematical mazes that veil secrets behind irreversible prime numbers.' },
            { word: 'Urban Planner', level: 'c2', cat: 'occupations', clues: ['Professional designing land use, transit networks, and zoning for sustainable cities.', 'Balances municipal architecture with population growth.'], taboo: ['city', 'transit', 'buildings', 'zoning'], riddle: 'Orchestrator of civic arteries and concrete commons balancing urban growth against entropy.' },
            // Pop Culture Icons
            { word: 'Ludwig van Beethoven', level: 'b1', cat: 'pop', clues: ['Influential classical and romantic German composer.', 'Created monumental symphonies even after losing his hearing.'], taboo: ['music', 'piano', 'symphony', 'deaf'], riddle: 'Channeled silent thunder into harmonic movements that deafened grief itself.' },
            // Nationalities
            { word: 'Japanese', level: 'a1', cat: 'nationalities', clues: ['Relating to the island nation of Japan in East Asia.', 'Known for tea ceremonies, manga, and cherry blossoms.'], taboo: ['tokyo', 'asia', 'sushi', 'japan'], riddle: 'Born of the rising sun archipelago where tradition meets neon horizon.' },
            { word: 'Brazilian', level: 'a2', cat: 'nationalities', clues: ['Native or inhabitant of the largest South American country.', 'Celebrates Carnival and shares borders with nearly all neighboring nations.'], taboo: ['samba', 'rio', 'amazon', 'brazil'], riddle: 'Dwellers of the emerald rainforest and sun-drenched Atlantic sands dancing to bossa nova.' },
            { word: 'Spanish', level: 'a1', cat: 'nationalities', clues: ['From the Iberian peninsula in southwestern Europe.', 'Famous for tapas, flamenco, and sunny plazas.'], taboo: ['madrid', 'spain', 'europe', 'tapas'], riddle: 'People of the Iberian sun where afternoon siestas give way to vibrant nocturnal guitars.' },
            { word: 'Egyptian', level: 'b1', cat: 'nationalities', clues: ['Native to the northeastern corner of Africa along the fertile Nile River.', 'Heirs to thousands of years of pharaonic monuments.'], taboo: ['cairo', 'nile', 'pyramid', 'pharaoh'], riddle: 'Guardians of the cradle carved by the ancient silt of the great northward-flowing river.' }
        ],
        what: [
            // Action Verbs & Idiomatic Gestures
            { word: 'Whisper', level: 'a2', cat: 'actions', clues: ['To speak very softly using breath rather than vocal cords.', 'Often used when sharing secrets in quiet libraries.'], taboo: ['quiet', 'speak', 'talk', 'voice'], riddle: 'A breath that carries words without a voice, slipping past eavesdroppers like velvet.' },
            { word: 'Tripping', level: 'a1', cat: 'actions', clues: ['Catching your foot unexpectedly on an obstacle and stumbling.', 'Can happen on uneven sidewalks or carpet edges.'], taboo: ['fall', 'foot', 'stumble', 'walk'], riddle: 'A sudden misstep where an unseen edge sends balance tumbling to the floor.' },
            { word: 'Hesitating', level: 'b1', cat: 'actions', clues: ['Pausing before saying or doing something due to uncertainty or doubt.', 'A moment of reluctance or second thought.'], taboo: ['pause', 'wait', 'doubt', 'unsure'], riddle: 'A quiet suspension of will poised on the brink of choice.' },
            { word: 'Procrastinate', level: 'b2', cat: 'actions', clues: ['To unnecessarily postpone decisions or actions until the eleventh hour.', 'Often fueled by perfectionism or executive fatigue.'], taboo: ['delay', 'later', 'lazy', 'wait'], riddle: 'The subtle art of surrendering tomorrow to the comfort of doing nothing today.' },
            { word: 'Negotiate', level: 'c1', cat: 'actions', clues: ['To confer with another so as to arrive at the settlement of some matter.', 'Involves concessions, compromise, and mutual diplomacy.'], taboo: ['deal', 'compromise', 'agreement', 'talk'], riddle: 'A verbal duel of give and take where both parties trade concessions to claim peace.' },
            // Animals & Nature
            { word: 'Frog', level: 'a1', cat: 'nature', clues: ['It is small and green.', 'It jumps and lives near ponds.', 'It says ribbit.'], taboo: ['green', 'jump', 'pond', 'amphibian'], riddle: 'A throat that swells like a jewel by the pond, singing into damp summer nights.' },
            { word: 'Chameleon', level: 'b1', cat: 'nature', clues: ['An amphibian or reptile found in warm habitats.', 'Undergoes physiological color changes to camouflage and signal mood.'], taboo: ['lizard', 'color', 'camouflage', 'reptile'], riddle: 'Master of chromatic deceit whose skin mirrors whatever branch it claims.' },
            { word: 'Amoeba', level: 'b2', cat: 'nature', clues: ['Microscopic single-celled organism that moves by extending pseudopodia.', 'Found in freshwater ponds and moist soils.'], taboo: ['cell', 'microscope', 'single', 'tiny'], riddle: 'A shapeless droplet of microscopic life gliding through water by reaching out phantom feet.' },
            { word: 'Platypus', level: 'c1', cat: 'nature', clues: ['Semi-aquatic egg-laying mammal endemic to eastern Australia.', 'Has a duck bill, beaver tail, otter feet, and venomous ankle spurs.'], taboo: ['bill', 'duck', 'australia', 'mammal'], riddle: 'Though slow to wrath, this Gondwanan oddity unites mammalian fur with an avian bill and venomous spurs.' },
            { word: 'Volcano', level: 'a2', cat: 'nature', clues: ['Geological rupture through which molten lava, tephra, and steam erupt.', 'Forms towering mountains along tectonic plate boundaries.'], taboo: ['lava', 'eruption', 'mountain', 'magma'], riddle: 'A mountain with fire in its throat sleeping until tectonic fury shakes the earth.' },
            { word: 'Glacier', level: 'b1', cat: 'nature', clues: ['Massive persistent body of dense ice constantly moving under its own weight.', 'Carves deep U-shaped valleys across mountain landscapes.'], taboo: ['ice', 'cold', 'snow', 'melt'], riddle: 'A river of frozen crystal creeping across bedrock over centuries, carving valleys in silent weight.' },
            // Daily Things & Technology
            { word: 'Rotary Phone', level: 'b1', cat: 'tech', clues: ['Vintage communication hardware with a circular finger dial.', 'Predecessor to touch-tone keypads and cellular smartphones.'], taboo: ['call', 'dial', 'telephone', 'wire'], riddle: 'A heavy receiver coiled to a mechanical wheel where numbers were wound by finger.' },
            { word: 'Smart Speaker', level: 'a2', cat: 'tech', clues: ['Voice-activated home audio assistant playing music and controlling smart devices.', 'Responds when called by its wake name.'], taboo: ['voice', 'alexa', 'assistant', 'music'], riddle: 'An ambient ear on the shelf answering queries spoken to the empty air.' },
            // Abstract Concepts
            { word: 'Nostalgia', level: 'b2', cat: 'abstract', clues: ['A bittersweet emotional longing for a bygone era or familiar past memories.', 'Triggered by retro aesthetics, songs, or scent.'], taboo: ['past', 'memories', 'yearning', 'homesick'], riddle: 'A bittersweet ache that paints the rearview mirror in warmer golden tones than today.' },
            { word: 'Bureaucracy', level: 'c1', cat: 'abstract', clues: ['An administrative system governed by official routine, hierarchies, and rigid red tape.', 'Often critiqued for institutional inertia.'], taboo: ['paperwork', 'rules', 'government', 'office'], riddle: 'An endless labyrinth of rubber stamps, triplicate forms, and departmental deferral.' },
            { word: 'Irony', level: 'c2', cat: 'abstract', clues: ['A state of affairs or an expression that deliberately contraries what is expected.', 'The tension between appearance and reality.'], taboo: ['opposite', 'expected', 'funny', 'sarcasm'], riddle: 'When the fire station burns to ashes while the crew inspects hydrants across town.' },
            // Weather Words
            { word: 'Blizzard', level: 'a2', cat: 'weather', clues: ['Severe snowstorm characterized by sustained high winds and low temperatures.', 'Causes whiteout conditions where visibility approaches zero.'], taboo: ['snow', 'storm', 'cold', 'wind'], riddle: 'A furious white gale that erases every landmark beneath howling drifts.' },
            { word: 'Drizzle', level: 'a1', cat: 'weather', clues: ['Light, steady liquid precipitation with very fine water droplets.', 'Gentler and lighter than a pouring rain shower.'], taboo: ['rain', 'wet', 'water', 'umbrella'], riddle: 'A whisper of sky-water floating in mist rather than striking the earth in drops.' },
            { word: 'Monsoon', level: 'b1', cat: 'weather', clues: ['Seasonal reversing wind accompanied by dramatic changes in precipitation.', 'Brings months of torrential tropical rains to South Asia.'], taboo: ['rain', 'season', 'flood', 'tropical'], riddle: 'A tempestuous season riding oceanic winds to drench parched plains in unending water.' },
            { word: 'Humidity', level: 'b2', cat: 'weather', clues: ['Concentration of water vapor present in the ambient atmosphere.', 'Makes hot summer afternoons feel muggy, heavy, and sticky.'], taboo: ['air', 'wet', 'moisture', 'sticky'], riddle: 'The unseen weight in the summer air that clings like a warm damp sponge.' },
            // Food: Fruits & Vegetables
            { word: 'Strawberry', level: 'a1', cat: 'food', foodType: 'fruit', clues: ['Bright red sweet fruit with exterior seeds and a green leafy cap.', 'Popular in shortcakes, ice creams, and jams.'], taboo: ['red', 'berry', 'sweet', 'fruit'], riddle: 'A ruby heart wearing its seeds on its sleeve and crowned in emerald leaves.' },
            { word: 'Apple', level: 'a1', cat: 'food', foodType: 'fruit', clues: ['Round edible fruit with red, green, or yellow skin and a crisp core.', 'Grows in orchards and keeps the doctor away in the proverb.'], taboo: ['tree', 'red', 'fruit', 'pie'], riddle: 'The orchard orb that tempts in legends and crunches sweetly under teeth.' },
            { word: 'Pomegranate', level: 'b1', cat: 'food', foodType: 'fruit', clues: ['Thick-skinned crimson fruit filled with glistening tart juicy arils.', 'Symbol of fertility and Persephone in Greek mythology.'], taboo: ['seeds', 'red', 'fruit', 'juice'], riddle: 'A leathery crimson vault hiding hundreds of glistening jewel-seeds in honeycombed chambers.' },
            { word: 'Carrot', level: 'a1', cat: 'food', foodType: 'veg', clues: ['Orange root vegetable cultivated beneath the soil.', 'Favored food of rabbits, eaten raw or in stews.'], taboo: ['orange', 'rabbit', 'vegetable', 'root'], riddle: 'An orange spear sleeping underground with feathery green plumage above.' },
            { word: 'Broccoli', level: 'a1', cat: 'food', foodType: 'veg', clues: ['Edible green plant with large flowering heads resembling tiny trees.', 'Eaten steamed, roasted, or raw in salads.'], taboo: ['green', 'tree', 'vegetable', 'healthy'], riddle: 'A miniature edible forest of green florets served upon a porcelain plate.' },
            { word: 'Eggplant', level: 'a2', cat: 'food', foodType: 'veg', clues: ['Glossy deep purple nightshade vegetable with spongy white flesh.', 'Central to dishes like ratatouille, moussaka, and baba ghanoush.'], taboo: ['purple', 'vegetable', 'cooking', 'ratatouille'], riddle: 'A polished teardrop of royal purple guarding spongy savory flesh within.' },
            // Hobbies & Pastimes
            { word: 'Gardening', level: 'a1', cat: 'hobbies', clues: ['Practice of growing, cultivating, and tending flowers, vegetables, and plants.', 'Involves watering, pruning, and working with rich soil.'], taboo: ['plants', 'flowers', 'soil', 'grow'], riddle: 'A quiet communion of muddy hands, seeds, and patience waiting upon the rain.' },
            { word: 'Photography', level: 'a2', cat: 'hobbies', clues: ['Art and technique of capturing images through light on digital sensors or film.', 'Involves framing, lenses, shutters, and lighting.'], taboo: ['camera', 'picture', 'photo', 'lens'], riddle: 'Freezing fleeting seconds of light into flat rectangular memories.' },
            { word: 'Chess', level: 'a2', cat: 'hobbies', clues: ['Two-player strategy board game played on a 64-square checkered grid.', 'The objective is to achieve checkmate against the opposing king.'], taboo: ['board', 'king', 'queen', 'checkmate'], riddle: 'A bloodless war of thirty-two wooden soldiers fought across sixty-four checkered fields.' },
            // "How I Feel" / Emotions & Moods
            { word: 'Anxious', level: 'a2', cat: 'emotions', clues: ['Experiencing worry, nervousness, or unease about an upcoming event.', 'Accompanied by a fluttering stomach or racing thoughts.'], taboo: ['nervous', 'scared', 'worry', 'fear'], riddle: 'Butterflies turning to turbulent crows inside the ribcage before the curtain rises.' },
            { word: 'Ecstatic', level: 'b1', cat: 'emotions', clues: ['Overwhelmed by intense feelings of happiness, joy, and euphoria.', 'Walking on sunshine or jumping for joy.'], taboo: ['happy', 'excited', 'joy', 'smile'], riddle: 'A sudden rush of incandescent sunlight lifting spirits so high the ground is forgotten.' },
            { word: 'Melancholic', level: 'b2', cat: 'emotions', clues: ['A thoughtful, gentle sadness often without an immediate cause.', 'Accompanied by introspection and appreciation of poignant beauty.'], taboo: ['sad', 'depressed', 'gloom', 'crying'], riddle: 'A quiet rain falling on empty pavements, holding sorrow and beauty in equal measure.' },
            { word: 'Serene', level: 'b2', cat: 'emotions', clues: ['Calm, peaceful, and unruffled by exterior chaos.', 'Like a mirror-still mountain lake at dawn.'], taboo: ['calm', 'peace', 'quiet', 'relax'], riddle: 'A stillness so deep that not even ripples disturb the reflective lake of consciousness.' },
            // Christmas & Winter Holidays
            { word: 'Christmas Tree', level: 'a1', cat: 'festivals', clues: ['Evergreen conifer decorated with twinkling fairy lights, tinsel, and ornaments.', 'Presents are placed beneath its branches in December.'], taboo: ['pine', 'decorations', 'green', 'presents'], riddle: 'A forest evergreen crowned with a star, draped in glass orbs and warm electric fire.' },
            { word: 'Gingerbread Man', level: 'a1', cat: 'festivals', clues: ['Baked cookie flavored with ginger, cinnamon, and molasses shaped like a person.', 'Decorated with colorful icing buttons and smiles.'], taboo: ['cookie', 'bake', 'ginger', 'icing'], riddle: 'Spiced dough baked into a running figurine with sweet confection buttons.' },
            { word: 'Mistletoe', level: 'b1', cat: 'festivals', clues: ['Parasitic plant with white berries traditionally hung above doorways during Christmas.', 'Custom dictates that two people standing beneath it must share a kiss.'], taboo: ['kiss', 'plant', 'door', 'berry'], riddle: 'Hanging bough with pale pearls demanding a stolen kiss from travelers paused in doorways.' },
            // 9 Specific Verb Decks Graded by CEFR Level
            // 1. Cooking Verbs
            { word: 'Boil', level: 'a1', cat: 'verbs_cooking', clues: ['To heat liquid until bubbles form and steam rises.', 'Common way to cook pasta, potatoes, or eggs.'], taboo: ['water', 'hot', 'heat', 'bubble'], riddle: 'Subjecting liquid to furious thermal agitation until vapour escapes into air.' },
            { word: 'Chop', level: 'a2', cat: 'verbs_cooking', clues: ['To cut food into pieces using repeated blows with a sharp knife.', 'Done on a cutting board with onions and vegetables.'], taboo: ['cut', 'knife', 'pieces', 'food'], riddle: 'Bringing down the sharpened blade in rhythmic percussion against wooden boards.' },
            { word: 'Simmer', level: 'b1', cat: 'verbs_cooking', clues: ['To cook food gently in liquid just below boiling temperature.', 'Small, lazy bubbles rise occasionally to the surface.'], taboo: ['boil', 'cook', 'gentle', 'heat'], riddle: 'Holding liquid at the quiet threshold of bubbling without letting fury erupt.' },
            { word: 'Sauté', level: 'b2', cat: 'verbs_cooking', clues: ['To fry ingredients quickly in a small amount of hot oil or butter.', 'Tossing food around in a shallow pan.'], taboo: ['fry', 'pan', 'oil', 'cook'], riddle: 'Dancing sliced morsels across a shimmering sheen of fat over high flames.' },
            { word: 'Julienne', level: 'c1', cat: 'verbs_cooking', clues: ['To cut vegetables into long, thin matchstick strips.', 'Classic French culinary knife technique for carrots and peppers.'], taboo: ['cut', 'knife', 'thin', 'strips'], riddle: 'Disciplining unruly roots into uniform matchsticks of geometric precision.' },
            { word: 'Caramelize', level: 'c2', cat: 'verbs_cooking', clues: ['Slowly heating carbohydrates and sugars until they oxidize and turn golden-brown.', 'Imparts complex nutty, sweet, and savory depth.'], taboo: ['sugar', 'brown', 'cook', 'sweet'], riddle: 'Subduing natural sucrose over gentle embers until darkness yields deep nutty sweetness.' },
            // 2. Daily Routines Verbs
            { word: 'Wake up', level: 'a1', cat: 'verbs_routines', clues: ['To emerge from sleep in the morning when the alarm sounds.', 'Opening your eyes to greet a new day.'], taboo: ['sleep', 'morning', 'alarm', 'bed'], riddle: 'Parting eyelids as consciousness returns from the realm of night.' },
            { word: 'Brush', level: 'a1', cat: 'verbs_routines', clues: ['To clean teeth with paste or smooth hair with bristles.', 'Standard hygiene activity completed twice daily.'], taboo: ['teeth', 'hair', 'clean', 'paste'], riddle: 'Sweeping bristles across enamel to banish morning shadows.' },
            { word: 'Commute', level: 'b1', cat: 'verbs_routines', clues: ['To travel regularly between home and a workplace or school.', 'Involves subways, buses, bicycles, or cars.'], taboo: ['travel', 'work', 'train', 'drive'], riddle: 'The daily migration between hearth and workstation along crowded arteries.' },
            { word: 'Prioritize', level: 'b2', cat: 'verbs_routines', clues: ['To determine the order for dealing with tasks according to their importance.', 'Crucial skill for effective time management.'], taboo: ['important', 'first', 'tasks', 'order'], riddle: 'Elevating the indispensable above the clamor of the trivial.' },
            { word: 'Unwind', level: 'c1', cat: 'verbs_routines', clues: ['To relax and release tension after rigorous labor or stress.', 'Sitting with a book, herbal tea, or listening to ambient music.'], taboo: ['relax', 'rest', 'stress', 'chill'], riddle: 'Loosening the taut spring of daily duties as evening softly descends.' },
            // 3. Physical Movement Verbs
            { word: 'Jump', level: 'a1', cat: 'verbs_movement', clues: ['To push yourself off the ground into the air using your leg muscles.', 'What frogs, kangaroos, and athletes do.'], taboo: ['air', 'feet', 'hop', 'legs'], riddle: 'Defying gravity for a brief suspended heartbeat with coiled thighs.' },
            { word: 'Crawl', level: 'a2', cat: 'verbs_movement', clues: ['To move forward on hands and knees close to the floor.', 'How infants move before learning to walk.'], taboo: ['walk', 'baby', 'knees', 'hands'], riddle: 'Creeping belly-close to the floorboards before upright balance is won.' },
            { word: 'Stumble', level: 'b1', cat: 'verbs_movement', clues: ['To trip or momentarily lose your footing while walking.', 'Recovering balance just before hitting the ground.'], taboo: ['fall', 'trip', 'foot', 'walk'], riddle: 'A momentary lapse where feet betray poise and stagger in the dirt.' },
            { word: 'Leap', level: 'b2', cat: 'verbs_movement', clues: ['To spring through the air over a large gap or obstacle.', 'A dramatic, sweeping jump requiring momentum.'], taboo: ['jump', 'bound', 'gap', 'air'], riddle: 'Launching the full frame across an expanse of uncertainty.' },
            { word: 'Traverse', level: 'c1', cat: 'verbs_movement', clues: ['To travel or extend across or through a rugged terrain.', 'Crossing glaciers, deserts, or mountain ranges.'], taboo: ['cross', 'walk', 'travel', 'across'], riddle: 'Bridging vast hostile geographies step by measured step.' },
            // 4. Communication Verbs
            { word: 'Speak', level: 'a1', cat: 'verbs_communication', clues: ['To utter words and talk to someone using vocal sounds.', 'How we express ideas aloud in conversation.'], taboo: ['talk', 'voice', 'words', 'mouth'], riddle: 'Shaping exhaled breath into intelligible symbols of mind.' },
            { word: 'Debate', level: 'b1', cat: 'verbs_communication', clues: ['A formal discussion where opposing arguments are put forward.', 'Conducted between politicians or student teams.'], taboo: ['argue', 'talk', 'arguments', 'discuss'], riddle: 'Clashing intellects fencing with propositions across a lectern.' },
            { word: 'Articulate', level: 'b2', cat: 'verbs_communication', clues: ['To express an idea fluently and coherently in clear speech.', 'Connecting words with precision.'], taboo: ['clear', 'express', 'speak', 'explain'], riddle: 'Molding nebulous thought into crisp crystalline rhetoric.' },
            { word: 'Equivocate', level: 'c1', cat: 'verbs_communication', clues: ['To use ambiguous language intentionally to conceal the truth or avoid committing.', 'Speaking with a double tongue.'], taboo: ['ambiguous', 'lie', 'deceive', 'unclear'], riddle: 'Navigating between truth and deceit on the tightrope of slippery syntax.' },
            // 5. Mental Actions Verbs
            { word: 'Think', level: 'a1', cat: 'verbs_mental', clues: ['To have a conscious opinion or process thoughts in your brain.', 'Using mental faculty to consider something.'], taboo: ['mind', 'brain', 'ponder', 'idea'], riddle: 'The silent loom of the mind weaving impressions into concepts.' },
            { word: 'Remember', level: 'a2', cat: 'verbs_mental', clues: ['To bring back into conscious thought an impression or event from the past.', 'The opposite of forgetting.'], taboo: ['forget', 'memory', 'past', 'mind'], riddle: 'Reclaiming lost shadows from the dusty corridors of yesterday.' },
            { word: 'Contemplate', level: 'b2', cat: 'verbs_mental', clues: ['To gaze thoughtfully at something or reflect deeply for a long time.', 'Meditating on profound questions.'], taboo: ['think', 'meditate', 'reflect', 'deep'], riddle: 'Resting the quiet eye of consciousness upon an enduring enigma.' },
            { word: 'Rationalize', level: 'c1', cat: 'verbs_mental', clues: ['To attempt to justify or explain an action or attitude with plausible reasons.', 'Finding logical excuses after the fact.'], taboo: ['justify', 'excuse', 'logic', 'reason'], riddle: 'Weaving tidy intellectual cloaks to dress irrational impulses.' },
            // 6. Shopping & Commerce Verbs
            { word: 'Buy', level: 'a1', cat: 'verbs_shopping', clues: ['To acquire goods or services in exchange for money.', 'Visiting a supermarket or retail boutique.'], taboo: ['purchase', 'pay', 'money', 'shop'], riddle: 'Surrendering minted coins in trade for desired wares.' },
            { word: 'Sell', level: 'a1', cat: 'verbs_shopping', clues: ['To exchange an asset or merchandise for money.', 'Merchants and shopkeepers do this daily.'], taboo: ['money', 'buy', 'shop', 'market'], riddle: 'Parting with possessions to fill the merchant’s purse with silver.' },
            { word: 'Bargain', level: 'b1', cat: 'verbs_shopping', clues: ['To haggle over terms, prices, or conditions in a transaction.', 'Common in street bazaars and flea markets.'], taboo: ['haggle', 'price', 'cheap', 'discount'], riddle: 'Testing the resilience of asking prices in marketplace banter.' },
            { word: 'Negotiate', level: 'b2', cat: 'verbs_shopping', clues: ['To confer with another party to arrive at mutually acceptable terms.', 'Arranging commercial contracts and deals.'], taboo: ['deal', 'terms', 'contract', 'price'], riddle: 'Trading concessions back and forth until both signatures are won.' },
            { word: 'Liquidate', level: 'c1', cat: 'verbs_shopping', clues: ['To convert assets or inventory into cash quickly, often at a discount.', 'Common during store closures or bankruptcies.'], taboo: ['cash', 'sell', 'assets', 'bankrupt'], riddle: 'Dissolving stubborn property into flowing currents of emergency capital.' },
            // 7. Travel & Exploration Verbs
            { word: 'Fly', level: 'a1', cat: 'verbs_travel', clues: ['To move through the air using wings or aboard an airplane.', 'Reaching distant international destinations.'], taboo: ['plane', 'air', 'wings', 'travel'], riddle: 'Soaring above clouds on metal wings to shrink the curvature of earth.' },
            { word: 'Pack', level: 'a2', cat: 'verbs_travel', clues: ['To place clothes and travel essentials neatly inside a suitcase or bag.', 'Done the evening before departing on journey.'], taboo: ['suitcase', 'bag', 'clothes', 'luggage'], riddle: 'Folding daily necessities into portable zippered sanctuaries.' },
            { word: 'Embark', level: 'b2', cat: 'verbs_travel', clues: ['To board a vessel, aircraft, or vehicle to commence a venture.', 'Setting out upon a major expedition.'], taboo: ['board', 'ship', 'start', 'journey'], riddle: 'Stepping off dry bedrock onto the deck of an unwritten voyage.' },
            { word: 'Navigate', level: 'c1', cat: 'verbs_travel', clues: ['To plan, direct, and plot the course of a ship, vehicle, or aircraft.', 'Reading stars, maps, compasses, and charts.'], taboo: ['map', 'compass', 'steer', 'direction'], riddle: 'Reading constellation whispers and currents to guide ships through pathless waters.' },
            // 8. Art & Creation Verbs
            { word: 'Draw', level: 'a1', cat: 'verbs_art', clues: ['To produce a picture or diagram by marking lines with a pencil or pen.', 'Creating sketches on paper.'], taboo: ['pencil', 'paper', 'picture', 'sketch'], riddle: 'Leaving graphite trails upon bare sheets to conjure forms.' },
            { word: 'Paint', level: 'a2', cat: 'verbs_art', clues: ['To apply pigment, color, or oil to a canvas with brushes.', 'Used by fine artists in galleries.'], taboo: ['brush', 'color', 'canvas', 'oil'], riddle: 'Stroking bristles saturated with chromatic pastes across stretched linen.' },
            { word: 'Sculpt', level: 'b2', cat: 'verbs_art', clues: ['To create three-dimensional figures by chiseling marble, stone, or clay.', 'Freeing the form trapped inside stone.'], taboo: ['statue', 'clay', 'chisel', 'stone'], riddle: 'Chiseling away extraneous marble to liberate the imprisoned silhouette.' },
            { word: 'Improvise', level: 'c1', cat: 'verbs_art', clues: ['To compose, recite, or perform spontaneously without preparation.', 'Hallmark of jazz musicians and theatrical artists.'], taboo: ['rehearse', 'plan', 'spontaneous', 'jazz'], riddle: 'Weaving harmonies in real time upon the open loom of the unexpected.' },
            // 9. Conflict & Resolution Verbs
            { word: 'Argue', level: 'a1', cat: 'verbs_conflict', clues: ['To exchange heated or angry divergent opinions.', 'Happens when people disagree strongly.'], taboo: ['fight', 'disagree', 'angry', 'shout'], riddle: 'Clashing voices raised in sharp discord over contested points.' },
            { word: 'Fight', level: 'a2', cat: 'verbs_conflict', clues: ['To engage in a physical combat, struggle, or battle against an opponent.', 'Contested with fists, weapons, or force.'], taboo: ['battle', 'punch', 'war', 'attack'], riddle: 'Engaging sinew and will in direct violent struggle.' },
            { word: 'Mediate', level: 'b2', cat: 'verbs_conflict', clues: ['To intervene between parties in a dispute to bring about reconciliation.', 'Acts as an impartial neutral facilitator.'], taboo: ['dispute', 'neutral', 'help', 'referee'], riddle: 'Standing calmly between flared tempers to open corridors of listening.' },
            { word: 'Reconcile', level: 'c1', cat: 'verbs_conflict', clues: ['To restore friendly relations between alienated adversaries.', 'Healing fractures and reaching mutual peace.'], taboo: ['forgive', 'friends', 'peace', 'resolve'], riddle: 'Mending fractured trusts so ancient rivals may break bread once more.' }
        ],
        where: [
            // Famous Landmarks & World Wonders
            { word: 'Colosseum', level: 'a2', cat: 'landmarks', clues: ['Flavian amphitheater located in the heart of Rome.', 'Historically hosted gladiatorial contests and public spectacles.'], taboo: ['rome', 'gladiator', 'italy', 'arena'], riddle: 'A travertine colossus standing where emperors turned thumbs down in the dust.' },
            { word: 'Machu Picchu', level: 'b1', cat: 'landmarks', clues: ['Incan citadel set high in the Andes Mountains of Peru.', 'Renowned for dry-stone walls fused without mortar.'], taboo: ['peru', 'inca', 'andes', 'ruins'], riddle: 'A lost citadel carved from cloud-kissed granite crests high above the Urubamba.' },
            // Everyday Places
            { word: 'Bakery', level: 'a1', cat: 'places', clues: ['Establishment that bakes and retails bread, pastries, and croissants.', 'Fills the neighborhood street with aromas of fresh yeast and flour.'], taboo: ['bread', 'cake', 'flour', 'bake'], riddle: 'Follow the fragrance of proving yeast and caramelizing crusts at first daylight.' },
            { word: 'Pharmacy', level: 'a2', cat: 'places', clues: ['Retail shop or hospital ward preparing and dispensing medicinal remedies.', 'Staffed by pharmacists and pharmacy technicians.'], taboo: ['medicine', 'drugs', 'doctor', 'prescription'], riddle: 'Where ailments find numbered vials and soothing salves beneath bright clinical lights.' },
            // Extreme & Unusual Environments
            { word: 'Mariana Trench', level: 'b2', cat: 'extreme', clues: ['The deepest oceanic trench on planet Earth.', 'Located in the western Pacific with pressures exceeding 1,000 atmospheres.'], taboo: ['ocean', 'deep', 'sea', 'pacific'], riddle: 'The planet’s profoundest abyss where abyssal creatures glide beneath immense pressure and perpetual night.' },
            { word: 'International Space Station', level: 'b1', cat: 'extreme', clues: ['Habitable modular laboratory orbiting planet Earth in low Earth orbit.', 'Astronauts live and conduct experiments in zero-gravity.'], taboo: ['space', 'orbit', 'astronaut', 'nasa'], riddle: 'A floating outpost tracing sixteen sunrises a day beyond atmospheric embrace.' },
            // Fictional Universes
            { word: 'Hogwarts', level: 'a2', cat: 'fictional', clues: ['British boarding school of magic situated in the Scottish Highlands.', 'Divided into four houses with moving staircases.'], taboo: ['magic', 'potter', 'wizard', 'witch'], riddle: 'A castle of shifting turrets and enchanted ceilings teaching the wand-bearer’s craft.' },
            { word: 'Gotham City', level: 'b1', cat: 'fictional', clues: ['Dark, brooding fictional metropolis teeming with architectural noir.', 'Guarded under darkness by the Caped Crusader.'], taboo: ['batman', 'joker', 'city', 'dc'], riddle: 'Gargoyles loom above mist-shrouded alleyways where an orphaned vigilante answers the bat-signal.' },
            // Countries & Cities
            { word: 'Tokyo', level: 'a1', cat: 'countries_cities', clues: ['Vibrant neon capital city of Japan.', 'Famous for Shibuya Crossing, Shinjuku nightlife, and Tsukiji market.'], taboo: ['japan', 'capital', 'city', 'shibuya'], riddle: 'A hyper-modern metropolis where neon canyons hum beneath the watchful gaze of Mount Fuji.' },
            { word: 'Paris', level: 'a1', cat: 'countries_cities', clues: ['The City of Light and capital of France.', 'Home to the Eiffel Tower, the Louvre museum, and the Seine River.'], taboo: ['france', 'eiffel', 'louvre', 'french'], riddle: 'Where cobbled avenues and zinc rooftops cradle iron spires along the meandering Seine.' },
            { word: 'Cairo', level: 'a2', cat: 'countries_cities', clues: ['Vast historic capital of Egypt sprawling on the banks of the Nile.', 'Neighboring the Great Pyramids of Giza.'], taboo: ['egypt', 'nile', 'pyramids', 'africa'], riddle: 'An ancient dust-and-citadel metropolis guarding pharaonic tombs beside the ancient Nile.' },
            // Requested Countries
            { word: 'The USA', level: 'a1', cat: 'countries_cities', clues: ['Federal republic composed of 50 states spanning North America.', 'Capital is Washington, D.C., with New York as its largest metropolis.'], taboo: ['america', 'states', 'dollar', 'washington'], riddle: 'From sea to shining sea, a nation of fifty stars and thirteen stripes.' },
            { word: 'The UK', level: 'a1', cat: 'countries_cities', clues: ['Island nation in northwestern Europe comprising England, Scotland, Wales, and Northern Ireland.', 'Known for Big Ben, Buckingham Palace, and fish and chips.'], taboo: ['london', 'england', 'britain', 'queen'], riddle: 'An ancient royal realm nestled amidst misty northern isles where Big Ben chimes.' },
            { word: 'France', level: 'a1', cat: 'countries_cities', clues: ['Western European nation renowned for wine, haute cuisine, philosophy, and art.', 'Hexagonal country bordered by the Atlantic and Mediterranean.'], taboo: ['paris', 'eiffel', 'baguette', 'french'], riddle: 'A hexagonal heartland of romance, vineyards, and revolutionary liberty.' },
            { word: 'Russia', level: 'a1', cat: 'countries_cities', clues: ['The largest country in the world by land area, spanning eastern Europe and northern Asia.', 'Famous for the Kremlin, Lake Baikal, and the Trans-Siberian railway.'], taboo: ['moscow', 'kremlin', 'siberia', 'ruble'], riddle: 'A vast northern realm stretching across eleven time zones from the Baltic to the Pacific.' },
            { word: 'Spain', level: 'a1', cat: 'countries_cities', clues: ['Iberian nation celebrated for tapas, flamenco, sunny beaches, and vibrant fiestas.', 'Capital is Madrid, with Barcelona along the Mediterranean coast.'], taboo: ['madrid', 'barcelona', 'tapas', 'flamenco'], riddle: 'Land of sunlit plazas, acoustic guitars, and passionate flamenco rhythms.' },
            { word: 'Italy', level: 'a1', cat: 'countries_cities', clues: ['Boot-shaped southern European peninsula famous for Roman history, Renaissance art, pasta, and espresso.', 'Surrounded by the Mediterranean Sea.'], taboo: ['rome', 'pizza', 'pasta', 'venice'], riddle: 'The boot-shaped cradle of empire and art where marble statues watch over ancient cobblestones.' },
            { word: 'Germany', level: 'a1', cat: 'countries_cities', clues: ['Central European power known for engineering, fairy-tale castles, the Autobahn, and classical music.', 'Capital is Berlin.'], taboo: ['berlin', 'beer', 'autobahn', 'munich'], riddle: 'The forested heart of central Europe where precision engineering meets castles along the Rhine.' },
            { word: 'Portugal', level: 'a1', cat: 'countries_cities', clues: ['Atlantic coastal nation on the Iberian Peninsula renowned for maritime explorers, fado music, and pastel de nata.', 'Capital is Lisbon.'], taboo: ['lisbon', 'porto', 'atlantic', 'fado'], riddle: 'Where tiled balconies listen to melancholic fado melodies overlooking the vast Atlantic.' },
            { word: 'Armenia', level: 'a2', cat: 'countries_cities', clues: ['Ancient mountainous country in the South Caucasus region with a rich Christian heritage and Mount Ararat as its symbol.', 'Capital is Yerevan.'], taboo: ['yerevan', 'caucasus', 'ararat', 'khachkar'], riddle: 'An ancient highland cradle where apricot orchards bloom beneath the sacred peak of Ararat.' },
            { word: 'Georgia', level: 'a2', cat: 'countries_cities', clues: ['Caucasus nation famous for ancient winemaking traditions, polyphonic singing, and the Black Sea coast.', 'Capital is Tbilisi.'], taboo: ['tbilisi', 'caucasus', 'wine', 'khachapuri'], riddle: 'Cradle of ancient qvevri wine nestled where the high Caucasus peaks touch the sky.' },
            { word: 'Australia', level: 'a1', cat: 'countries_cities', clues: ['Vast continent and country surrounded by the Indian and Pacific Oceans.', 'Known for kangaroos, the Sydney Opera House, and the Great Barrier Reef.'], taboo: ['sydney', 'kangaroo', 'outback', 'koala'], riddle: 'An island continent down under where marsupials roam red deserts rimmed by coral reefs.' },
            { word: 'China', level: 'a1', cat: 'countries_cities', clues: ['East Asian nation with thousands of years of continuous civilization.', 'Famous for the Great Wall, pandas, and the Forbidden City.'], taboo: ['beijing', 'wall', 'panda', 'asia'], riddle: 'An ancient celestial civilization watched over by a serpentine dragon of stone across misty peaks.' },
            { word: 'Japan', level: 'a1', cat: 'countries_cities', clues: ['Island nation in East Asia renowned for cherry blossoms, bullet trains, anime, and culinary traditions.', 'Capital is Tokyo.'], taboo: ['tokyo', 'sushi', 'samurai', 'cherry blossom'], riddle: 'Land of the rising sun where bullet trains glide past sacred cedar shrines and Mount Fuji.' },
            { word: 'Korea', level: 'a1', cat: 'countries_cities', clues: ['Peninsula in East Asia known for rich cultural traditions, K-pop, and historic hanok palaces.', 'Capital of South Korea is Seoul.'], taboo: ['seoul', 'kpop', 'kimchi', 'peninsula'], riddle: 'Land of the morning calm where vibrant modern music echoes among royal Joseon palaces.' },
            { word: 'Greece', level: 'a1', cat: 'countries_cities', clues: ['Southeastern European country known as the cradle of Western democracy, philosophy, and the Olympic Games.', 'Surrounded by thousands of Mediterranean islands.'], taboo: ['athens', 'acropolis', 'islands', 'olympics'], riddle: 'Whitewashed island villages and marble temples overlooking the deep sapphire Aegean.' },
            { word: 'Mexico', level: 'a1', cat: 'countries_cities', clues: ['North American nation renowned for Mayan and Aztec pyramids, mariachi music, and vibrant cuisine.', 'Capital is Mexico City.'], taboo: ['tacos', 'aztec', 'sombrero', 'mariachi'], riddle: 'Land of pyramids, mariachi melodies, and colorful Day of the Dead marigolds.' },
            { word: 'Brasil', level: 'a1', cat: 'countries_cities', clues: ['Largest nation in South America.', 'Home to the Amazon river basin, Copacabana beach, and Portuguese language.'], taboo: ['amazon', 'south america', 'rio', 'samba'], riddle: 'A continental giant pulsing with carnival rhythms beneath the emerald canopy of the Amazon.' }
        ],
        when: [
            // Historical Eras & Events
            { word: 'The Renaissance', level: 'b1', cat: 'eras', clues: ['A fervent period of European cultural, artistic, and scientific rebirth.', 'Bridged the gap between the Middle Ages and modern history.'], taboo: ['art', 'italy', 'davinci', 'rebirth'], riddle: 'When humanism awoke from medieval cloistered dreams and painted perspective into reality.' },
            { word: 'The Moon Landing', level: 'a2', cat: 'eras', clues: ['Historic July 1969 Apollo 11 mission when humans first walked on lunar regolith.', 'Commemorated by the famous phrase "one small step for man".'], taboo: ['apollo', 'armstrong', 'space', 'lunar'], riddle: 'A boot print pressed into cosmic grey dust witnessed live across monochrome television screens.' },
            // Daily Routine & Seasons
            { word: 'Morning Rush Hour', level: 'a1', cat: 'routines', clues: ['Peak commuting hours when roads and trains are densely packed with workers.', 'Happens early on weekday mornings.'], taboo: ['commute', 'traffic', 'morning', 'train'], riddle: 'A symphony of car horns, hurried sips of espresso, and crowded platform turnstiles.' },
            { word: 'Winter Solstice', level: 'b2', cat: 'routines', clues: ['Astronomical phenomenon marking the day with the shortest period of daylight.', 'Occurs when one of the Earth’s poles has its maximum tilt away from the Sun.'], taboo: ['winter', 'short', 'sun', 'cold'], riddle: 'The longest mantle of darkness draped over the hemisphere before the light turns north once more.' },
            // Future & Sci-Fi Timelines
            { word: 'Colonization of Mars', level: 'b2', cat: 'future', clues: ['Hypothetical permanent human habitation and terraforming of the Red Planet.', 'Involves pressurized domes and greenhouse habitats.'], taboo: ['mars', 'red planet', 'colony', 'space'], riddle: 'When boots tread red oxidized sands and greenhouses bloom beneath a pale distant sun.' },
            // Cultural Holidays & Festivals
            { word: 'Christmas', level: 'a1', cat: 'festivals', clues: ['Worldwide celebration on December 25th commemorating festive cheer and gift-giving.', 'Celebrated with pine trees, carols, and feasts with loved ones.'], taboo: ['december', 'santa', 'tree', 'presents'], riddle: 'When bells chime in the winter chill and evergreen boughs glow with candlelight and wrapped surprises.' },
            { word: 'Halloween', level: 'a1', cat: 'festivals', clues: ['Celebrated on October 31st with costumes, trick-or-treating, and jack-o-lanterns.', 'Originated from ancient Celtic harvest festivals like Samhain.'], taboo: ['costume', 'candy', 'pumpkin', 'spooky'], riddle: 'Carved gourds grin in the crisp autumn night while disguised children knock on doors.' },
            { word: "Valentine's Day", level: 'a1', cat: 'festivals', clues: ['Annual celebration on February 14th honoring romantic love and affection.', 'Marked by greeting cards, red roses, and chocolates.'], taboo: ['love', 'february', 'heart', 'chocolate'], riddle: 'A feast of ruby roses and sweet confections exchanged when winter whispers of romance.' },
            { word: 'Carnival', level: 'a2', cat: 'festivals', clues: ['Festive season marked by public parades, elaborate costumes, masks, and samba music.', 'Precedes the liturgical season of Lent in places like Rio and Venice.'], taboo: ['parade', 'costume', 'mask', 'rio'], riddle: 'A burst of feathers, brass horns, and painted masks dancing through streets before solemn Lent.' },
            { word: 'Diwali', level: 'a2', cat: 'festivals', clues: ['Five-day Hindu festival celebrating the victory of light over darkness.', 'Celebrated with oil lamps, clay diyas, and fireworks.'], taboo: ['lights', 'india', 'festival', 'hindu'], riddle: 'Rows of terracotta lamps glowing across thresholds to banish shadow from the hearth.' },
            { word: 'Lunar New Year', level: 'b1', cat: 'festivals', clues: ['Celebration of the arrival of spring and the beginning of a new year on the lunisolar calendar.', 'Marked by red envelopes, family reunions, and dragon dances.'], taboo: ['china', 'red envelope', 'dragon', 'spring'], riddle: 'Red paper banners flutter in the spring wind while families feast and fireworks greet the new zodiac cycle.' }
        ]
    };

    let state = {
        edition: 'who',
        subcat: 'all',
        foodFilter: 'both', // 'fruits', 'veggies', 'both'
        mode: 'normal', // 'normal', 'charades', 'letter', 'synonyms', 'oneword', 'taboo', 'riddle', 'coop'
        constrainedLetter: 'A',
        playEnv: 'online', // 'online', 'offline', 'hybrid'
        teamA: 0,
        teamB: 0,
        currentCard: null,
        cluesRevealed: 0,
        timerVal: 60,
        timerMax: 60,
        timerInterval: null,
        isShielded: true,
        isRoundOver: false
    };

    function pickRandomLetter() {
        const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        return alphabet[Math.floor(Math.random() * alphabet.length)];
    }

    function initHostCurtain() {
        const toggleBtn = document.getElementById('btn-host-toggle');
        const toggleText = document.getElementById('host-toggle-text');
        const toggleIcon = document.getElementById('host-toggle-icon');

        function updateBtn() {
            const T = getT();
            if (state.isShielded) {
                toggleBtn?.classList.remove('revealed');
                if (toggleText) toggleText.textContent = T('ui.host_view_shielded', null, 'Host View: Shielded');
                if (toggleIcon) toggleIcon.textContent = '👁️';
            } else {
                toggleBtn?.classList.add('revealed');
                if (toggleText) toggleText.textContent = T('ui.host_view_revealed', null, 'Host View: Revealed');
                if (toggleIcon) toggleIcon.textContent = '🔓';
            }
            const secretBox = document.getElementById('guess-secret-container');
            if (secretBox) {
                if (state.isShielded) {
                    secretBox.classList.add('guess-secret-shielded');
                } else {
                    secretBox.classList.remove('guess-secret-shielded');
                }
            }
        }

        window.toggleHostCurtain = function() {
            state.isShielded = !state.isShielded;
            updateBtn();
        };

        toggleBtn?.addEventListener('click', window.toggleHostCurtain);

        window.addEventListener('keydown', (e) => {
            // Space or H to toggle privacy curtain when not typing in an input
            if ((e.code === 'KeyH' || (e.code === 'Space' && e.target.tagName !== 'INPUT')) && !e.repeat) {
                if (e.target.tagName !== 'INPUT' && e.target.tagName !== 'SELECT') {
                    e.preventDefault();
                    window.toggleHostCurtain();
                }
            }
        });
    }

    function renderSetup() {
        if (typeof COSYLoader !== 'undefined' && COSYLoader.clearLevelNote) {
            COSYLoader.clearLevelNote();
        }
        document.getElementById('go-title').textContent = GAME_TITLE;
        const T = getT();
        const body = document.getElementById('go-body');

        // Check query params for deep linking
        const urlParams = new URLSearchParams(window.location.search);
        const presetEdition = urlParams.get('edition') || 'who';
        const presetSub = urlParams.get('sub') || 'all';
        const presetMode = urlParams.get('playmode') || 'normal';

        body.innerHTML = `
            <div class="guess-setup-container">
                <h2 class="guess-setup-title">Guess! 🔮</h2>
                <p class="guess-setup-subtitle" data-gs="setup.subtitle">${T('setup.subtitle', null, 'The ultimate franchise of mystery, deduction, and vocabulary circumlocution.')}</p>

                <div class="guess-setup-grid">
                    <div class="guess-field">
                        <label data-gs="setup.edition_label">${T('setup.edition_label', null, 'Select Edition')}</label>
                        <select class="guess-select" id="g-edition">
                            <option value="who" ${presetEdition === 'who' ? 'selected' : ''}>Edition 1: Guess Who? (People & Roles)</option>
                            <option value="what" ${presetEdition === 'what' ? 'selected' : ''}>Edition 2: Guess What? (Objects, Concepts & Actions)</option>
                            <option value="where" ${presetEdition === 'where' ? 'selected' : ''}>Edition 3: Guess Where? (Locations & Settings)</option>
                            <option value="when" ${presetEdition === 'when' ? 'selected' : ''}>Edition 4: Guess When? (Time, History & Culture)</option>
                        </select>
                    </div>

                    <div class="guess-field">
                        <label data-gs="setup.category_label">${T('setup.category_label', null, 'Sub-Category Focus')}</label>
                        <select class="guess-select" id="g-subcat">
                            <option value="all">🌟 All Categories in Edition</option>
                            <optgroup label="Edition 1: Who">
                                <option value="historical">Historical Figures</option>
                                <option value="fictional">Fictional & Mythological</option>
                                <option value="occupations">Professionals & Occupations</option>
                                <option value="nationalities">Nationalities</option>
                                <option value="pop">Pop Culture Icons</option>
                            </optgroup>
                            <optgroup label="Edition 2: What (Thematic & Verbs)">
                                <option value="weather">Weather Words</option>
                                <option value="food">Food & Produce (Fruits / Veggies)</option>
                                <option value="hobbies">Hobbies & Pastimes</option>
                                <option value="emotions">Emotions ("How I Feel")</option>
                                <option value="nature">Animals & Nature</option>
                                <option value="tech">Daily Things & Technology</option>
                                <option value="abstract">Abstract Concepts</option>
                                <option value="verbs_cooking">Verbs: Cooking</option>
                                <option value="verbs_routines">Verbs: Daily Routines</option>
                                <option value="verbs_movement">Verbs: Physical Movement</option>
                                <option value="verbs_communication">Verbs: Communication</option>
                                <option value="verbs_mental">Verbs: Mental Actions</option>
                                <option value="verbs_shopping">Verbs: Shopping & Commerce</option>
                                <option value="verbs_travel">Verbs: Travel & Exploration</option>
                                <option value="verbs_art">Verbs: Art & Creation</option>
                                <option value="verbs_conflict">Verbs: Conflict & Resolution</option>
                            </optgroup>
                            <optgroup label="Edition 3: Where">
                                <option value="countries_cities">Countries & Cities</option>
                                <option value="landmarks">Famous Landmarks & Wonders</option>
                                <option value="places">Everyday Places</option>
                                <option value="extreme">Extreme & Unusual Environments</option>
                            </optgroup>
                            <optgroup label="Edition 4: When">
                                <option value="festivals">Cultural Holidays & Christmas</option>
                                <option value="eras">Historical Eras & Events</option>
                                <option value="routines">Daily Routine & Seasons</option>
                            </optgroup>
                        </select>
                    </div>

                    <!-- Food Sub-Filter Container (shown when Food is selected) -->
                    <div class="guess-field" id="food-filter-wrapper" style="display:none;">
                        <label>Food Filter:</label>
                        <div class="guess-subfilter-container">
                            <button type="button" class="guess-subfilter-btn active" data-filter="both">🍎🥦 All Food</button>
                            <button type="button" class="guess-subfilter-btn" data-filter="fruits">🍎 Fruits Only</button>
                            <button type="button" class="guess-subfilter-btn" data-filter="veggies">🥦 Veggies Only</button>
                        </div>
                    </div>

                    <div class="guess-field">
                        <label data-gs="setup.mode_label">${T('setup.mode_label', null, 'Speaking & Gameplay Mode')}</label>
                        <select class="guess-select" id="g-mode">
                            <option value="normal" ${presetMode === 'normal' ? 'selected' : ''}>🗣️ Normal Description (Fluency)</option>
                            <option value="charades" ${presetMode === 'charades' ? 'selected' : ''}>🎭 Charades & Pictionary (Silent Acting / Drawing)</option>
                            <option value="letter" ${presetMode === 'letter' ? 'selected' : ''}>🔤 Random Letter-Constrained (A–Z Constraint)</option>
                            <option value="synonyms" ${presetMode === 'synonyms' ? 'selected' : ''}>🔄 Synonyms & Antonyms Only</option>
                            <option value="oneword" ${presetMode === 'oneword' ? 'selected' : ''}>☝️ One-Word Clue Description</option>
                            <option value="taboo" ${presetMode === 'taboo' ? 'selected' : ''}>⚡ Speed Run / Taboo (Hard Word Ban B1–B2)</option>
                            <option value="riddle" ${presetMode === 'riddle' ? 'selected' : ''}>📜 The Masterclass Riddle (Advanced C1–C2)</option>
                            <option value="coop" ${presetMode === 'coop' ? 'selected' : ''}>🤝 Cooperative Stems (Beginner A0–A2)</option>
                        </select>
                    </div>

                    <div class="guess-field">
                        <label data-gs="setup.env_label">${T('setup.env_label', null, 'Play Environment')}</label>
                        <select class="guess-select" id="g-env">
                            <option value="online">💻 Online (Host Screen Share)</option>
                            <option value="offline">📽️ Offline (Classroom Projector / TV)</option>
                            <option value="hybrid">🌐 Hybrid (Combined In-Room & Remote)</option>
                        </select>
                    </div>

                    <div class="guess-field">
                        <label data-i18n="ui_level">Level</label>
                        <select class="guess-select" id="g-level">${window.cosyLevelOptions(LEVEL_OPTS)}</select>
                    </div>

                    <div class="guess-field">
                        <label data-i18n="ui_practice_language">Practice language</label>
                        <select class="guess-select" id="g-lang">${LANG_OPTS.map(l => `<option>${l}</option>`).join('')}</select>
                    </div>
                </div>

                <button class="guess-start-btn" id="btn-start-guess">▶ <span data-i18n="ui_start_game">Start game</span></button>
            </div>
        `;

        const subSelect = document.getElementById('g-subcat');
        const foodWrapper = document.getElementById('food-filter-wrapper');

        subSelect?.addEventListener('change', () => {
            if (foodWrapper) {
                foodWrapper.style.display = subSelect.value === 'food' ? 'block' : 'none';
            }
        });

        // Sync interface language when practice language dropdown changes
        document.getElementById('g-lang')?.addEventListener('change', (e) => {
            const langCode = (window.COSYLoader && typeof window.COSYLoader.getLangCode === 'function')
                ? window.COSYLoader.getLangCode(e.target.value)
                : 'en';
            if (window.setLanguage && typeof window.setLanguage === 'function') {
                window.setLanguage(langCode);
            }
            if (window.applyGameStrings && typeof window.applyGameStrings === 'function') {
                window.applyGameStrings(langCode);
            }
            renderSetup();
        });

        document.querySelectorAll('.guess-subfilter-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                document.querySelectorAll('.guess-subfilter-btn').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                state.foodFilter = btn.dataset.filter || 'both';
            });
        });

        document.getElementById('btn-start-guess')?.addEventListener('click', () => {
            state.edition = document.getElementById('g-edition')?.value || 'who';
            state.subcat = document.getElementById('g-subcat')?.value || 'all';
            state.mode = document.getElementById('g-mode')?.value || 'normal';
            state.playEnv = document.getElementById('g-env')?.value || 'online';

            // Apply environment context
            if (state.playEnv === 'offline' && window.ViewContext) {
                window.ViewContext.setContext('projector');
            } else if (state.playEnv === 'online' && window.ViewContext) {
                window.ViewContext.setContext('online');
            }

            COSY_GAME.start();
        });
    }

    // Localized dictionary for custom landmark, historical figure, and place entities
    const LOCALIZED_ENTITIES = {
        'Julius Caesar': { fr: 'Jules César', es: 'Julio César', de: 'Julius Cäsar', it: 'Giulio Cesare', ru: 'Юлий Цезарь', el: 'Ιούλιος Καίσαρας' },
        'Alexander the Great': { fr: 'Alexandre le Grand', es: 'Alejandro Magno', de: 'Alexander der Große', it: 'Alessandro Magno', ru: 'Александр Македонский', el: 'Μέγας Αλέξανδρος' },
        'Sherlock Holmes': { fr: 'Sherlock Holmes', es: 'Sherlock Holmes', de: 'Sherlock Holmes', it: 'Sherlock Holmes', ru: 'Шерлок Холмс', el: 'Σέρλοκ Χολμς' },
        'Zeus': { fr: 'Zeus', es: 'Zeus', de: 'Zeus', it: 'Zeus', ru: 'Зевс', el: 'Ζευς' },
        'Baker': { fr: 'Boulanger', es: 'Panadero', de: 'Bäcker', it: 'Panettiere', ru: 'Пекарь', el: 'Φούρναρης' },
        'Nurse': { fr: 'Infirmier / Infirmière', es: 'Enfermero/a', de: 'Krankenpfleger/in', it: 'Infermiere', ru: 'Медсестра / Медбрат', el: 'Νοσοκόμος' },
        'Japanese': { fr: 'Japonais', es: 'Japonés', de: 'Japanisch', it: 'Giapponese', ru: 'Японец / Японский', el: 'Ιάπωνας' },
        'Brazilian': { fr: 'Brésilien', es: 'Brasileño', de: 'Brasilianisch', it: 'Brasiliano', ru: 'Бразилец', el: 'Βραζιλιάνος' },
        'Spanish': { fr: 'Espagnol', es: 'Español', de: 'Spanisch', it: 'Spagnolo', ru: 'Испанец / Испанский', el: 'Ισπανός' },
        'Egyptian': { fr: 'Égyptien', es: 'Egipcio', de: 'Ägyptisch', it: 'Egiziano', ru: 'Египтянин', el: 'Αιγύπτιος' },
        'Colosseum': { fr: 'Le Colisée', es: 'El Coliseo', de: 'Das Kolosseum', it: 'Il Colosseo', ru: 'Колизей', el: 'Κολοσσαίο' },
        'Machu Picchu': { fr: 'Machu Picchu', es: 'Machu Picchu', de: 'Machu Picchu', it: 'Machu Picchu', ru: 'Мачу-Пикчу', el: 'Μάτσου Πίτσου' },
        'Bakery': { fr: 'Boulangerie', es: 'Panadería', de: 'Bäckerei', it: 'Panetteria', ru: 'Пекарня', el: 'Αρτοποιείο' },
        'Pharmacy': { fr: 'Pharmacie', es: 'Farmacia', de: 'Apotheke', it: 'Farmacia', ru: 'Аптека', el: 'Φαρμακείο' },
        'Tokyo': { fr: 'Tokyo', es: 'Tokio', de: 'Tokio', it: 'Tokyo', ru: 'Токио', el: 'Τόκιο' },
        'Paris': { fr: 'Paris', es: 'París', de: 'Paris', it: 'Parigi', ru: 'Париж', el: 'Παρίσι' },
        'Cairo': { fr: 'Le Caire', es: 'El Cairo', de: 'Kairo', it: 'Il Cairo', ru: 'Каир', el: 'Κάιρο' },
        'The USA': { fr: 'Les États-Unis', es: 'Estados Unidos', de: 'Die USA', it: 'Gli Stati Uniti', ru: 'США', el: 'ΗΠΑ' },
        'The UK': { fr: 'Le Royaume-Uni', es: 'El Reino Unido', de: 'Das Vereinigte Königreich', it: 'Il Regno Unito', ru: 'Великобритания', el: 'Ηνωμένο Βασίλειο' },
        'France': { fr: 'La France', es: 'Francia', de: 'Frankreich', it: 'La Francia', ru: 'Франция', el: 'Γαλλία' },
        'Russia': { fr: 'La Russie', es: 'Rusia', de: 'Russland', it: 'La Russia', ru: 'Россия', el: 'Ρωσία' },
        'Spain': { fr: 'L\'Espagne', es: 'España', de: 'Spanien', it: 'La Spagna', ru: 'Испания', el: 'Ισπανία' },
        'Italy': { fr: 'L\'Italie', es: 'Italia', de: 'Italien', it: 'L\'Italia', ru: 'Италия', el: 'Ιταλία' },
        'Germany': { fr: 'L\'Allemagne', es: 'Alemania', de: 'Deutschland', it: 'La Germania', ru: 'Германия', el: 'Γερμανία' },
        'Portugal': { fr: 'Le Portugal', es: 'Portugal', de: 'Portugal', it: 'Il Portogallo', ru: 'Португалия', el: 'Πορτογαλία' },
        'Armenia': { fr: 'L\'Arménie', es: 'Armenia', de: 'Armenien', it: 'L\'Armenia', ru: 'Армения', el: 'Αρμενία' },
        'Georgia': { fr: 'La Géorgie', es: 'Georgia', de: 'Georgien', it: 'La Georgia', ru: 'Грузия', el: 'Γεωργία' },
        'Australia': { fr: 'L\'Australie', es: 'Australia', de: 'Australien', it: 'L\'Australia', ru: 'Австралия', el: 'Αυστραλία' },
        'China': { fr: 'La Chine', es: 'China', de: 'China', it: 'La Cina', ru: 'Китай', el: 'Κίνα' },
        'Japan': { fr: 'Le Japon', es: 'Japón', de: 'Japan', it: 'Il Giappone', ru: 'Япония', el: 'Ιαπωνία' },
        'Korea': { fr: 'La Corée', es: 'Corea', de: 'Korea', it: 'La Corea', ru: 'Корея', el: 'Κορέα' },
        'Greece': { fr: 'La Grèce', es: 'Grecia', de: 'Griechenland', it: 'La Grecia', ru: 'Греция', el: 'Ελλάδα' },
        'Mexico': { fr: 'Le Mexique', es: 'México', de: 'Mexiko', it: 'Il Messico', ru: 'Мексика', el: 'Μεξικό' },
        'Brasil': { fr: 'Le Brésil', es: 'Brasil', de: 'Brasilien', it: 'Il Brasile', ru: 'Бразилия', el: 'Βραζιλία' },
        'Christmas': { fr: 'Noël', es: 'Navidad', de: 'Weihnachten', it: 'Natale', ru: 'Рождество', el: 'Χριστούγεννα' },
        "Valentine's Day": { fr: 'La Saint-Valentin', es: 'San Valentín', de: 'Valentinstag', it: 'San Valentino', ru: 'День святого Валентина', el: 'Ημέρα του Αγίου Βαλεντίνου' },
        'The Renaissance': { fr: 'La Renaissance', es: 'El Renacimiento', de: 'Die Renaissance', it: 'Il Rinascimento', ru: 'Эпоха Возрождения', el: 'Αναγέννηση' },
        'The Moon Landing': { fr: 'L\'alunissage', es: 'El alunizaje', de: 'Die Mondlandung', it: 'L\'allunaggio', ru: 'Высадка на Луну', el: 'Προσσελήνωση' },
        'Morning Rush Hour': { fr: 'L\'heure de pointe matinale', es: 'Hora punta de la mañana', de: 'Morgendliche Hauptverkehrszeit', it: 'Ora di punta mattutina', ru: 'Утренний час пик', el: 'Πρωινή ώρα αιχμής' },
        'Winter Solstice': { fr: 'Le solstice d\'hiver', es: 'Solsticio de invierno', de: 'Wintersonnenwende', it: 'Solstizio d\'inverno', ru: 'Зимнее солнцестояние', el: 'Χειμερινό ηλιοστάσιο' },
        'Colonization of Mars': { fr: 'La colonisation de Mars', es: 'Colonización de Marte', de: 'Besiedlung des Mars', it: 'Colonizzazione di Marte', ru: 'Колонизация Марса', el: 'Αποικισμός του Άρη' },
        'Carnival': { fr: 'Le Carnaval', es: 'El Carnaval', de: 'Karneval', it: 'Il Carnevale', ru: 'Карнавал', el: 'Καρναβάλι' },
        'Halloween': { fr: 'Halloween', es: 'Halloween', de: 'Halloween', it: 'Halloween', ru: 'Хэллоуин', el: 'Χάλοουιν' }
    };

    function adaptCosyEntryToCard(entry, lang) {
        const rawWord = entry.word || '';
        let displayWord = rawWord;
        if (window.COSYVocab && typeof window.COSYVocab.joinArticle === 'function' && entry.article) {
            displayWord = window.COSYVocab.joinArticle(entry.article, rawWord);
        } else if (entry.article) {
            displayWord = entry.article + ' ' + rawWord;
        }

        const clues = [];
        if (entry.definitions && entry.definitions.length > 0) {
            for (const def of entry.definitions) {
                const defText = typeof def === 'string' ? def : (def && def.text);
                if (defText && defText.trim()) {
                    clues.push(defText.trim());
                }
                if (def && Array.isArray(def.examples)) {
                    for (const ex of def.examples) {
                        const exText = typeof ex === 'string' ? ex : (ex && ex.text);
                        if (exText && exText.trim()) {
                            // Mask the target word in example clue
                            const escapedWord = rawWord.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
                            const wordRegex = new RegExp('\\b' + escapedWord + '\\b', 'gi');
                            const masked = exText.replace(wordRegex, '______');
                            clues.push(masked.trim());
                        }
                    }
                }
            }
        }

        if (clues.length === 0) {
            if (entry.theme) clues.push(`Theme: ${entry.theme.replace(/_/g, ' ')}`);
        }

        const taboo = [];
        if (entry.theme) taboo.push(entry.theme.replace(/_/g, ' '));
        if (entry.plural && entry.plural !== rawWord) taboo.push(entry.plural);

        const riddle = clues[0] || `A term related to ${entry.theme || 'everyday life'}.`;

        return {
            word: displayWord.charAt(0).toUpperCase() + displayWord.slice(1),
            level: (entry.level || 'a1').toLowerCase(),
            cat: entry.theme || 'general',
            clues: clues.slice(0, 3),
            taboo: taboo.slice(0, 4),
            riddle: riddle,
            rawEntry: entry
        };
    }

    function localizeStaticCard(card, lang) {
        if (!card || lang === 'en') return card;
        const copy = Object.assign({}, card);
        if (LOCALIZED_ENTITIES[card.word] && LOCALIZED_ENTITIES[card.word][lang]) {
            copy.word = LOCALIZED_ENTITIES[card.word][lang];
        }
        return copy;
    }

    window.COSY_GAME = {
        async start() {
            const T = getT();
            const lang = (window.COSYLoader && typeof window.COSYLoader.getLangCode === 'function')
                ? window.COSYLoader.getLangCode(document.getElementById('g-lang')?.value)
                : 'en';
            const rawLevel = document.getElementById('g-level')?.value;
            const level = (window.COSYLoader && typeof window.COSYLoader.getLevelCode === 'function')
                ? window.COSYLoader.getLevelCode(rawLevel)
                : 'a1';

            COSYGame.init(GAME_ID, lang, level);
            COSYGame.maxRounds = 5;
            state.teamA = 0;
            state.teamB = 0;

            const isEditionWhat = (state.edition === 'what');
            const isWhatSubcat = [
                'weather', 'food', 'hobbies', 'emotions', 'nature', 'tech', 'abstract',
                'verbs_cooking', 'verbs_routines', 'verbs_movement', 'verbs_communication',
                'verbs_mental', 'verbs_shopping', 'verbs_travel', 'verbs_art', 'verbs_conflict'
            ].includes(state.subcat);

            const shouldPullCOSYVocab = isEditionWhat || isWhatSubcat;
            let dynamicVocabCards = [];

            if (shouldPullCOSYVocab && window.COSYVocab) {
                const reqLevelCode = window.COSYVocab.levelCode(rawLevel || level);

                // Build fileMatch or forms filter based on subcat
                const fileMatchMap = {
                    food: ['food', 'fruit', 'vegetable', 'beverage', 'drink'],
                    weather: ['nature', 'weather'],
                    nature: ['animals', 'nature'],
                    tech: ['technolog', 'gadget', 'house', 'science'],
                    hobbies: ['hobbies', 'sport', 'leisure'],
                    emotions: ['emotion', 'feelings', 'character'],
                    all: ['food', 'nature', 'weather', 'house', 'clothing', 'verbs']
                };

                const isVerbCat = state.subcat.startsWith('verbs_');
                const formsFilter = isVerbCat ? ['verb'] : (state.subcat === 'all' ? ['noun', 'verb'] : ['noun']);
                let fileMatch = fileMatchMap[state.subcat] || null;
                if (isVerbCat) {
                    fileMatch = ['verbs'];
                }

                try {
                    const vres = await window.COSYVocab.ensureFull(lang, reqLevelCode, {
                        needEmoji: false,
                        min: 8,
                        forms: formsFilter,
                        fileMatch: fileMatch,
                        maxFiles: 8
                    });

                    if (typeof COSYLoader !== 'undefined') {
                        if (vres.widened) {
                            COSYLoader.showLevelNote(COSYLoader.levelNoteText());
                        } else {
                            COSYLoader.clearLevelNote();
                        }
                    }

                    const rawPool = (window.vocabularyData && window.vocabularyData[lang]) || [];
                    if (rawPool.length > 0) {
                        let filteredPool = rawPool;
                        if (state.subcat === 'food' && state.foodFilter !== 'both') {
                            filteredPool = rawPool.filter(item => {
                                const t = (item.theme || '').toLowerCase();
                                const w = (item.word || '').toLowerCase();
                                if (state.foodFilter === 'fruits') {
                                    return t.includes('fruit') || ['pomme', 'poire', 'fraise', 'banane', 'orange', 'apple', 'banana', 'mela', 'manzana'].some(f => w.includes(f));
                                } else if (state.foodFilter === 'veggies') {
                                    return t.includes('veg') || ['carotte', 'salade', 'tomate', 'carrot', 'potato', 'carota', 'zanahoria'].some(v => w.includes(v));
                                }
                                return true;
                            });
                            if (filteredPool.length === 0) filteredPool = rawPool;
                        }

                        dynamicVocabCards = filteredPool.map(entry => adaptCosyEntryToCard(entry, lang));
                    }
                } catch (e) {
                    console.warn('[guess] COSYVocab ensureFull fetch fallback:', e);
                }
            } else if (typeof COSYLoader !== 'undefined') {
                COSYLoader.clearLevelNote();
            }

            // Select appropriate deck pool ensuring grammatical & lexical level appropriateness
            const CEFR_ORDER = { a0: 1, a1: 1, a2: 2, b1: 3, b2: 4, c1: 5, c2: 6 };
            const reqCefrKey = (window.COSYVocab ? window.COSYVocab.levelCode(rawLevel || level) : (level || 'A1')).toLowerCase();
            const targetRank = CEFR_ORDER[reqCefrKey] || 1;

            const filterByLevelAppropriateness = (items, minCount = 4) => {
                if (!Array.isArray(items) || items.length === 0) return items;
                // Group items by exact rank distance
                const ranked = items.filter(i => i && typeof i.level === 'string');
                if (ranked.length === 0) return items;

                // Priority 1: Exact CEFR match
                const exact = ranked.filter(i => (CEFR_ORDER[i.level.toLowerCase()] || 1) === targetRank);
                if (exact.length >= minCount) return exact;

                // Priority 2: Expanding outwards from target rank (closest distance first)
                let collected = [...exact];
                for (let dist = 1; dist <= 5; dist++) {
                    const lower = ranked.filter(i => (CEFR_ORDER[i.level.toLowerCase()] || 1) === (targetRank - dist));
                    collected = collected.concat(lower);
                    if (collected.length >= minCount) break;

                    const higher = ranked.filter(i => (CEFR_ORDER[i.level.toLowerCase()] || 1) === (targetRank + dist));
                    collected = collected.concat(higher);
                    if (collected.length >= minCount) break;
                }
                return collected.length > 0 ? collected : items;
            };

            let pool = [];
            if (dynamicVocabCards.length >= 4) {
                pool = filterByLevelAppropriateness(dynamicVocabCards, 4);
            } else {
                let candidatePool = [];
                if (state.subcat && state.subcat !== 'all') {
                    for (const ed in DECKS) {
                        const matches = DECKS[ed].filter(item => {
                            if (item.cat !== state.subcat) return false;
                            if (state.subcat === 'food' && state.foodFilter !== 'both') {
                                if (state.foodFilter === 'fruits' && item.foodType !== 'fruit') return false;
                                if (state.foodFilter === 'veggies' && item.foodType !== 'veg') return false;
                            }
                            return true;
                        });
                        candidatePool = candidatePool.concat(matches);
                    }
                }
                if (candidatePool.length === 0) {
                    candidatePool = DECKS[state.edition] || DECKS.who;
                }

                // If dynamic vocab items exist, combine them
                if (dynamicVocabCards.length > 0) {
                    candidatePool = dynamicVocabCards.concat(candidatePool);
                }

                // Filter items by level appropriateness
                pool = filterByLevelAppropriateness(candidatePool, 4);

                // Localize entities for practice language if target language != en
                pool = pool.map(item => localizeStaticCard(item, lang));
            }

            // Shuffle pool
            pool = pool.sort(() => Math.random() - 0.5);

            let currentDeck = [...pool];

            const nextRound = () => {
                if (state.timerInterval) clearInterval(state.timerInterval);
                if (!COSYGame.nextRound()) {
                    COSY_GAME.renderEnd();
                    return;
                }

                state.currentCard = currentDeck[(COSYGame.round - 1) % currentDeck.length];
                state.cluesRevealed = 1;
                state.isRoundOver = false;
                state.isShielded = true;
                state.constrainedLetter = pickRandomLetter();
                state.timerVal = (state.mode === 'taboo' || state.mode === 'oneword') ? 60 : 90;
                state.timerMax = state.timerVal;

                renderRoundUI();
                startTimer();
            };

            function startTimer() {
                if (state.timerInterval) clearInterval(state.timerInterval);
                state.timerInterval = setInterval(() => {
                    if (state.timerVal > 0 && !state.isRoundOver) {
                        state.timerVal--;
                        updateTimerUI();
                        if (state.timerVal <= 5 && state.timerVal > 0) {
                            playChime('tick');
                        }
                    } else if (state.timerVal <= 0 && !state.isRoundOver) {
                        clearInterval(state.timerInterval);
                        playChime('buzzer');
                        handleTimeUp();
                    }
                }, 1000);
            }

            function updateTimerUI() {
                const bar = document.getElementById('guess-timer-bar');
                const text = document.getElementById('guess-timer-text');
                if (bar && text) {
                    const pct = Math.max(0, (state.timerVal / state.timerMax) * 100);
                    bar.style.width = `${pct}%`;
                    text.textContent = `${state.timerVal}s`;
                    if (pct < 25) {
                        bar.className = 'guess-timer-bar danger';
                    } else if (pct < 50) {
                        bar.className = 'guess-timer-bar warning';
                    } else {
                        bar.className = 'guess-timer-bar';
                    }
                }
            }

            function handleTimeUp() {
                state.isRoundOver = true;
                state.isShielded = false;
                renderRoundUI();
            }

            function renderRoundUI() {
                const card = state.currentCard;
                const body = document.getElementById('go-body');

                const modeLabels = {
                    normal: 'Normal Description 🗣️',
                    charades: 'Charades & Pictionary 🎭',
                    letter: `Constrained Letter [${state.constrainedLetter}] 🔤`,
                    synonyms: 'Synonyms & Antonyms Only 🔄',
                    oneword: 'One-Word Clues ☝️',
                    taboo: 'Speed Run / Taboo ⚡',
                    riddle: 'The Masterclass Riddle 🧠',
                    coop: 'Cooperative Stems 🤝'
                };

                const modeInstructions = {
                    normal: 'Describe the word verbally using full sentences and natural circumlocution.',
                    charades: 'Mute / Silent! Act out actions or draw without speaking or mouthing words.',
                    letter: `Constraint: Every clue word or initial explanation must start with the letter "${state.constrainedLetter}"!`,
                    synonyms: 'Give only direct synonyms, closely-related meaning equivalents, or antonyms!',
                    oneword: 'Clue-giver may state exactly ONE single word per guessing attempt!',
                    taboo: 'Describe the secret word without uttering ANY of the forbidden taboo words!',
                    riddle: 'Deduce the secret concept from the cryptic literary or philosophical riddle below.',
                    coop: 'Use simple sentence stems ("It is...", "It has...", "It does...") to help your team.'
                };

                const isTaboo = state.mode === 'taboo';
                const isRiddle = state.mode === 'riddle';

                body.innerHTML = `
                    <div class="guess-game-wrapper">
                        <div class="guess-status-bar">
                            <span class="guess-edition-pill">Category: ${card.cat || state.edition}</span>
                            <span class="guess-mode-pill">${modeLabels[state.mode] || 'Standard'}</span>
                            <div style="font-weight:600; color:#fbbf24;">
                                Round ${COSYGame.round} / ${COSYGame.maxRounds}
                            </div>
                        </div>

                        <!-- Timer Bar -->
                        <div style="display:flex; align-items:center; gap:0.75rem;">
                            <span style="font-weight:700; min-width:35px; color:#e2e8f0;" id="guess-timer-text">${state.timerVal}s</span>
                            <div class="guess-timer-wrapper">
                                <div class="guess-timer-bar" id="guess-timer-bar" style="width:${(state.timerVal / state.timerMax) * 100}%;"></div>
                            </div>
                        </div>

                        <!-- Mode Instruction Banner -->
                        <div class="guess-mode-instruction-banner">
                            ${state.mode === 'letter' ? `<span class="guess-letter-badge" id="letter-badge">${state.constrainedLetter}</span>` : ''}
                            <div>
                                <strong>${modeLabels[state.mode]}:</strong> ${modeInstructions[state.mode]}
                            </div>
                        </div>

                        <!-- Mystery Secret Card -->
                        <div class="guess-mystery-card">
                            <div class="guess-secret-container ${state.isShielded ? 'guess-secret-shielded' : ''}" id="guess-secret-container">
                                <div class="guess-secret-shield-msg">🛡️ Host Screen Safe — Press 'H' or Click Host View to Reveal</div>
                                <div class="guess-secret-word">${gameUtils.escapeHtml(card.word)}</div>

                                ${isTaboo ? `
                                    <div class="guess-taboo-box">
                                        <div class="guess-taboo-title">🚫 Taboo Forbidden Root Words (Hard Ban):</div>
                                        <div class="guess-taboo-tags">
                                            ${(card.taboo || []).map(w => `<span class="guess-taboo-tag">${gameUtils.escapeHtml(w)}</span>`).join('')}
                                        </div>
                                    </div>
                                ` : ''}
                            </div>

                            <!-- Clues & Riddles Box -->
                            <div class="guess-clues-section">
                                ${isRiddle ? `
                                    <div class="guess-riddle-card">
                                        <div class="guess-riddle-heading">📜 Formal Deductive Riddle & Nuance:</div>
                                        <div class="guess-riddle-body">"${gameUtils.escapeHtml(card.riddle || card.clues[0])}"</div>
                                        <div class="guess-riddle-instruction">Deduce the exact term and debate its register and connotations!</div>
                                    </div>
                                ` : `
                                    ${card.clues.slice(0, state.cluesRevealed).map((clue, idx) => `
                                        <div class="guess-clue-card">
                                            <span class="guess-clue-index">${T('ui.clue_number', { number: idx + 1 }, `Clue #${idx + 1}:`)}</span>
                                            <span>${gameUtils.escapeHtml(clue)}</span>
                                        </div>
                                    `).join('')}
                                `}
                            </div>

                            <!-- Action Controls -->
                            <div class="guess-actions-panel">
                                ${!state.isRoundOver ? `
                                    ${state.cluesRevealed < card.clues.length ? `
                                        <button class="guess-btn guess-btn-warning" id="btn-next-clue">+ <span>${T('btn.reveal_next_clue', null, 'Reveal Next Clue')}</span></button>
                                    ` : ''}
                                    <button class="guess-btn guess-btn-success" id="btn-solved-a">🎉 ${T('btn.team_a_got_it', null, 'Team A Got It (+10)')}</button>
                                    <button class="guess-btn guess-btn-success" id="btn-solved-b" style="background:#0284c7;">🎉 ${T('btn.team_b_got_it', null, 'Team B Got It (+10)')}</button>
                                    <button class="guess-btn guess-btn-danger" id="btn-pass">${T('btn.pass_skip', null, 'Pass / Skip →')}</button>
                                ` : `
                                    <button class="guess-btn guess-btn-success" id="btn-next-round">${T('btn.next_round', null, 'Next Round →')}</button>
                                `}
                            </div>
                        </div>

                        <!-- Scoreboard -->
                        <div class="guess-teams-tracker">
                            <div class="guess-team-box">
                                <div class="guess-team-label">Team A</div>
                                <div class="guess-team-score" id="score-team-a">${state.teamA}</div>
                            </div>
                            <div class="guess-team-box">
                                <div class="guess-team-label">Team B</div>
                                <div class="guess-team-score" id="score-team-b">${state.teamB}</div>
                            </div>
                            <div class="guess-team-box">
                                <div class="guess-team-label">Overall Score</div>
                                <div class="guess-team-score">${COSYGame.score}</div>
                            </div>
                        </div>
                    </div>
                `;

                attachRoundEvents(nextRound);
            }

            function attachRoundEvents(nextRoundCallback) {
                document.getElementById('btn-next-clue')?.addEventListener('click', () => {
                    if (state.cluesRevealed < state.currentCard.clues.length) {
                        state.cluesRevealed++;
                        playChime('tick');
                        renderRoundUI();
                    }
                });

                document.getElementById('btn-solved-a')?.addEventListener('click', () => {
                    state.teamA += 10;
                    COSYGame.addScore(10);
                    state.isRoundOver = true;
                    state.isShielded = false;
                    playChime('success');
                    renderRoundUI();
                });

                document.getElementById('btn-solved-b')?.addEventListener('click', () => {
                    state.teamB += 10;
                    COSYGame.addScore(10);
                    state.isRoundOver = true;
                    state.isShielded = false;
                    playChime('success');
                    renderRoundUI();
                });

                document.getElementById('btn-pass')?.addEventListener('click', () => {
                    state.isRoundOver = true;
                    state.isShielded = false;
                    playChime('buzzer');
                    renderRoundUI();
                });

                document.getElementById('btn-next-round')?.addEventListener('click', () => {
                    nextRoundCallback();
                });
            }

            nextRound();
        },

        reset: renderSetup,

        renderEnd() {
            const T = getT();
            const lang = COSYGame.language;
            const level = COSYGame.level;
            if (window.COSYScores && typeof window.COSYScores.save === 'function') {
                COSYScores.save(GAME_ID, lang, level, COSYGame.score);
            }
            const body = document.getElementById('go-body');
            body.innerHTML = `
                <div class="guess-setup-container" style="text-align:center;">
                    <div style="font-size:3rem; margin-bottom:0.5rem;">🏆</div>
                    <h2 class="guess-setup-title">Game Finished!</h2>
                    <p class="guess-setup-subtitle">Great teamwork and deduction across the rounds.</p>
                    <div style="font-size:1.5rem; margin-bottom:1.5rem; color:#fbbf24;">
                        Final Score: <strong>${COSYGame.score}</strong>
                    </div>
                    <div class="guess-teams-tracker" style="margin-bottom:1.5rem;">
                        <div class="guess-team-box">
                            <div class="guess-team-label">Team A</div>
                            <div class="guess-team-score">${state.teamA}</div>
                        </div>
                        <div class="guess-team-box">
                            <div class="guess-team-label">Team B</div>
                            <div class="guess-team-score">${state.teamB}</div>
                        </div>
                    </div>
                    <button class="guess-start-btn" onclick="COSY_GAME.reset()">Play Another Edition ↺</button>
                </div>
            `;
        }
    };

    document.addEventListener('DOMContentLoaded', () => {
        initHostCurtain();
        renderSetup();
    });
})();
