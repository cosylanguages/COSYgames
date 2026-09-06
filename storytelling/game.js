/**
 * games/storytelling/game.js
 * Standalone logic for Story Weaver (Storytelling).
 */
(function() {
    const GAME_ID = 'storytelling';
    const GAME_TITLE = 'Story Weaver 📖';
    const GAME_META = 'Speaking & Creativity · Solo or Group';
    const LEVEL_OPTS = ['Starter (A1)','Primary (A2)','Intermediate (B1)','Upper (B2)','Advanced (C1)','Proficiency (C2)'];
    const LANG_OPTS = ['English 🇬🇧','Français 🇫🇷','Italiano 🇮🇹','Русский 🇷🇺','Ελληνικά 🇬🇷'];

    // --- Dynamic Curricula Database (Grammar, Vocabulary themes, Connectors) ---
    const GRAMMAR_DB = {
        'A1': [
            { id: 'be', cat: 'Verb "to be"', rule: 'am/is/are', clue: 'Introduce a character or describe an object.', ex: 'He is a brave traveler.' },
            { id: 'present_simple', cat: 'Present Simple', rule: 'Habits & Facts', clue: 'Describe a character\'s daily routine or habit.', ex: 'Every morning, the dwarf wakes up early.' },
            { id: 'plural_nouns', cat: 'Plural Nouns', rule: '-s/-es or Irregular plurals', clue: 'Mention multiple things or characters in the scene.', ex: 'There are two old books on the desk.' },
            { id: 'possessives', cat: 'Possessive Adjectives', rule: 'my/your/his/her/its/our/their', clue: 'Indicate who owns a specific item in the story.', ex: 'Her dog barks loudly when it hears footsteps.' },
            { id: 'there_is_are', cat: 'There is / There are', rule: 'There is + singular / There are + plural', clue: 'Set the initial scene or environment.', ex: 'There is a dark forest near the village.' },
            { id: 'can_cant', cat: 'Can / Can\'t', rule: 'can / can\'t + Verb', clue: 'State what a character is physically able or unable to do.', ex: 'The young knight can run fast, but he can\'t swim.' },
            { id: 'imperatives', cat: 'Imperatives', rule: 'Infinitive (no subject)', clue: 'Make a character yell or write a direct warning sign.', ex: 'Stop! Don\'t touch the sacred stone.' },
            { id: 'demonstratives', cat: 'Demonstratives', rule: 'this/that/these/those', clue: 'Contrast close items with distant ones.', ex: 'This key is small, but those gates are huge.' },
            { id: 'pronouns_obj', cat: 'Subject & Object Pronouns', rule: 'I/he/she/it AND me/him/her/it', clue: 'Refer back to characters already introduced.', ex: 'She found him waiting by the ancient tower.' },
            { id: 'prep_place', cat: 'Prepositions of Place', rule: 'in/on/under/behind/next to', clue: 'Pinpoint the physical location of an important clue.', ex: 'The map was hidden behind the heavy picture frame.' }
        ],
        'A2': [
            { id: 'past_simple', cat: 'Past Simple', rule: 'Verb + -ed or Irregular past forms', clue: 'Tell a completed action that happened in the past.', ex: 'The dragon flew high into the grey clouds.' },
            { id: 'past_continuous', cat: 'Past Continuous', rule: 'was/were + Verb-ing', clue: 'Describe the background atmosphere or ongoing context.', ex: 'The wind was howling while they explored the ruins.' },
            { id: 'used_to', cat: 'Used to', rule: 'used to + Infinitive', clue: 'Describe a past habit or state that is no longer true.', ex: 'This dry land used to be a beautiful lake.' },
            { id: 'comparatives', cat: 'Comparatives', rule: 'Adjective-er + than / more... than', clue: 'Compare two elements or characters in your story.', ex: 'The iron key is heavier than the golden key.' },
            { id: 'must_have_to', cat: 'Obligation Modals', rule: 'must / have to + Verb', clue: 'Frame a strict rule or task that a character faces.', ex: 'She has to find the secret path before dawn.' },
            { id: 'should_advice', cat: 'Advice Modals', rule: 'should / shouldn\'t + Verb', clue: 'Give warning advice to a character.', ex: 'You should not open that dusty chest.' },
            { id: 'going_to', cat: 'Be going to', rule: 'am/is/are + going to + Verb', clue: 'Detail a character\'s immediate plan or future intention.', ex: 'They are going to cross the border tomorrow.' },
            { id: 'inf_purpose', cat: 'Infinitive of Purpose', rule: 'to + Verb', clue: 'Describe the motive behind a character\'s physical travel or action.', ex: 'He climbed the tallest tree to see the horizon.' },
            { id: 'ed_ing_adj', cat: '-ed vs -ing Adjectives', rule: 'tired/tiring, bored/boring', clue: 'Express both how a character feels and what caused it.', ex: 'The long journey was tiring, so the exhausted traveler slept.' },
            { id: 'prep_time', cat: 'Prepositions of Time', rule: 'at / on / in', clue: 'Specify the exact hour, day, or season of a major plot point.', ex: 'In the winter, they only go outside at noon.' }
        ],
        'B1': [
            { id: 'present_perfect_experience', cat: 'Present Perfect', rule: 'have/has + Past Participle', clue: 'Mention a life experience a character has or hasn\'t had.', ex: 'The princess has traveled to many lands, but has never left her home.' },
            { id: 'present_perfect_duration', cat: 'Present Perfect (For/Since)', rule: 'have/has + V3 + for/since', clue: 'State an ongoing situation that started in the past.', ex: 'The sword has remained in the stone since the ancient war.' },
            { id: 'first_conditional', cat: 'First Conditional', rule: 'If + Present Simple, will + Verb', clue: 'Formulate a realistic future warning or prediction.', ex: 'If you drink this potion, you will fall asleep.' },
            { id: 'second_conditional', cat: 'Second Conditional', rule: 'If + Past Simple, would + Verb', clue: 'Describe an imagined, hypothetical, or dream scenario.', ex: 'If I had a horse, I would ride to the palace.' },
            { id: 'passive_voice', cat: 'Passive Voice', rule: 'is/are/was/were + Past Participle', clue: 'Focus on what happened to the object rather than who did it.', ex: 'The magical scroll was hidden under the stone floor.' },
            { id: 'relative_clauses', cat: 'Defining Relative Clauses', rule: 'who / which / that / where', clue: 'Define a specific person, place, or object in detail.', ex: 'The guide who showed them the way smiled secretly.' },
            { id: 'modals_deduction', cat: 'Modals of Deduction', rule: 'must be / might be / can\'t be', clue: 'Make a character guess or reason about a mystery.', ex: 'The campfire is still warm, so someone must be nearby.' },
            { id: 'verb_patterns', cat: 'Gerund vs Infinitive Verbs', rule: 'remember/stop/try + -ing or to-v', clue: 'Focus on a character\'s mental attempt or memory.', ex: 'He tried to open the window, but the rusty hinges wouldn\'t move.' },
            { id: 'past_continuous_simple', cat: 'Interrupted Past', rule: 'was/were -ing + past simple', clue: 'Present a sudden interruption during an ongoing event.', ex: 'They were eating dinner when a knock sounded at the gate.' },
            { id: 'quantifiers_b1', cat: 'Quantifiers', rule: 'plenty of / enough / a little', clue: 'Detail the supply, assets, or resources your characters possess.', ex: 'They had plenty of arrows but not enough food.' }
        ],
        'B2': [
            { id: 'past_perfect', cat: 'Past Perfect', rule: 'had + Past Participle', clue: 'Show that one past event happened before another past event.', ex: 'The thieves had already escaped when the sheriff arrived.' },
            { id: 'third_conditional', cat: 'Third Conditional', rule: 'If + had + V3, would have + V3', clue: 'Speculate about a past event that could have gone differently.', ex: 'If he had kept his shield, the monster would not have hurt him.' },
            { id: 'reported_speech', cat: 'Reported Speech', rule: 'said (that) / told [someone] that', clue: 'State what a character said without quoting them directly.', ex: 'The scholar told them that the book was safe.' },
            { id: 'mixed_conditionals', cat: 'Mixed Conditionals', rule: 'If + had + V3, would + Verb', clue: 'Connect a past decision/event with its present, ongoing result.', ex: 'If they hadn\'t lost the map, they would be home now.' },
            { id: 'non_defining_relative', cat: 'Non-Defining Relative Clauses', rule: ', who/which [extra information] ,', clue: 'Add non-essential parenthetical info about a character or place.', ex: 'The mountain, which is covered in snow, is highly dangerous.' },
            { id: 'past_deduction_modals', cat: 'Past Modals of Deduction', rule: 'must have been / could have been', clue: 'Infer what definitely (or definitely didn\'t) happen in the past.', ex: 'The gates were smashed; a massive creature must have escaped.' },
            { id: 'passive_reporting', cat: 'Passive Reporting', rule: 'It is said that / is believed to be', clue: 'Introduce a legend, myth, or rumor circulating in your world.', ex: 'The lake is believed to be guarded by a quiet spirit.' },
            { id: 'future_continuous_perfect', cat: 'Future Continuous & Perfect', rule: 'will be -ing / will have V3', clue: 'Project into the future of the story to mark a milestone or ongoing action.', ex: 'By tomorrow noon, the ship will have docked at the harbor.' },
            { id: 'wish_if_only', cat: 'Wish & If Only', rule: 'I wish / If only + Past Simple', clue: 'Express current annoyance or frustration about a scenario.', ex: 'If only the wolves would stop howling tonight.' },
            { id: 'dependent_preps', cat: 'Dependent Prepositions', rule: 'obsessed with / responsible for', clue: 'Attribute strong psychological or technical traits to characters.', ex: 'The captain was responsible for navigating through the storm.' }
        ],
        'C1': [
            { id: 'negative_inversion', cat: 'Negative Inversion', rule: 'Rarely/Not only/Little + Aux + Subject + Verb', clue: 'Build intense drama or sudden suspense in your sentence.', ex: 'Little did they know that the doors were already locked.' },
            { id: 'cleft_sentences', cat: 'Cleft Sentences', rule: 'What [Subject] [Verb] is/was...', clue: 'Emphasize a specific single element of the sentence.', ex: 'What caught his eye was a shimmering golden ring.' },
            { id: 'unreal_past', cat: 'Unreal Past', rule: 'I wish / If only + Past Perfect', clue: 'Express deep regret or longing about a past event.', ex: 'If only she had listened to the wizard\'s advice.' },
            { id: 'inverted_conditionals', cat: 'Inverted Conditionals', rule: 'Had [Subject] + V3 / Were I + Inf', clue: 'Draft a solemn promise, prophecy, or formal hypothetical.', ex: 'Had they delayed their departure, they would have been caught.' },
            { id: 'participle_clauses', cat: 'Participle Clauses', rule: 'Having + V3 / Verb-ing', clue: 'Combine two past actions by beginning with a participle clause.', ex: 'Having locked the chest, they hid the key in the well.' },
            { id: 'subjunctive_c1', cat: 'Subjunctive Mood', rule: 'insist/crucial + that + Subject + Base Verb', clue: 'Describe a formal decree, command, or imperative counsel.', ex: 'The elder insisted that the stranger leave the town immediately.' },
            { id: 'concession_advanced', cat: 'Adverbial Concession Clauses', rule: 'Much as / Albeit / Notwithstanding', clue: 'Express a major obstacle that doesn\'t stop the main event.', ex: 'Albeit exhausted, they continued digging throughout the night.' },
            { id: 'future_in_past', cat: 'Future in the Past', rule: 'was/were about to / destined to', clue: 'Portend a future tragic or historic event that was inevitable.', ex: 'They went to bed, unaware that they were about to face a battle.' },
            { id: 'past_duty_modals', cat: 'Modals of Past Duty', rule: 'should have / could have + V3', clue: 'Point out past mistakes made by your protagonists.', ex: 'The scout should have noticed the broken twigs on the trail.' },
            { id: 'sensation_verbs', cat: 'Sensation Verbs', rule: 'watch/hear + base verb vs -ing', clue: 'Describe sensory perception of completed actions vs actions in progress.', ex: 'We watched the tower collapse and heard the bricks crash.' }
        ],
        'C2': [
            { id: 'locational_inversion', cat: 'Locational Inversion', rule: 'Prepositional phrase + Verb + Subject', clue: 'Set a cinematic, literary atmosphere.', ex: 'At the foot of the old ash tree sat a tiny traveler.' },
            { id: 'double_comparative', cat: 'Double Comparatives', rule: 'The comparative..., the comparative...', clue: 'Show two correlations rising or falling together.', ex: 'The further they walked, the darker the trees became.' },
            { id: 'concessive_inversion', cat: 'Concessive Inversions', rule: 'Adjective + as/though + Subject + be', clue: 'Show a character overcoming their apparent limitations.', ex: 'Brave though they were, they hesitated to enter.' },
            { id: 'complex_regrets', cat: 'Nuanced Modal Express', rule: 'need not have + V3', clue: 'Differentiate between done unnecessary actions vs avoided ones.', ex: 'They need not have brought food, for the forest was rich.' },
            { id: 'subjunctive_c2', cat: 'Syntactic Prophecy', rule: 'If [Subject] should / were to + Verb', clue: 'Formulate a highly precise prophecy of warning.', ex: 'If the seal were to break, a curse would be unleashed.' },
            { id: 'nominalization', cat: 'Nominalization', rule: 'The sudden [noun] of [noun]...', clue: 'Write in an epic, formal, or historic chronicle tone.', ex: 'The sudden collapse of the castle wall triggered immediate panic.' },
            { id: 'but_for_clauses', cat: 'But for clauses', rule: 'But for + Noun, Subject would...', clue: 'Express that a single critical detail was the sole reason a major event didn\'t fail.', ex: 'But for her swift intervention, the treaty would have failed.' },
            { id: 'preposed_adverbs', cat: 'Preposed Adverbs with Inversion', rule: 'Adverb (Away/Up) + Verb + Subject', clue: 'Build high-paced kinetic movement in your narrative.', ex: 'Away rode the knight, leaving only dust behind.' },
            { id: 'hypallage_epithet', cat: 'Transferred Epithets', rule: ' Sleepless night / thoughtful silence', clue: 'Write deep literary prose describing a character\'s state.', ex: 'They spent a sleepless night guarding the narrow bridge.' },
            { id: 'advanced_passive_inf', cat: 'Advanced Passive Infinitive', rule: 'to have been + V3 / having been + V3', clue: 'Describe a state of affairs after undergoing a major experience.', ex: 'He resented having been kept in the dark about the king\'s health.' }
        ]
    };

    const VOCAB_THEMES = {
        'A1': [
            { name: 'Animals', words: ['dog', 'cat', 'bird', 'fish', 'horse', 'cow', 'pig', 'sheep', 'mouse', 'lion'] },
            { name: 'Furniture & Household', words: ['table', 'chair', 'bed', 'door', 'window', 'desk', 'sofa', 'shelf', 'lamp', 'box'] },
            { name: 'Food & Drink', words: ['apple', 'bread', 'milk', 'water', 'tea', 'cheese', 'egg', 'fruit', 'meat', 'rice'] },
            { name: 'Nature & Weather', words: ['sun', 'rain', 'wind', 'tree', 'flower', 'river', 'sea', 'star', 'sky', 'fire'] },
            { name: 'Colors & Shapes', words: ['red', 'blue', 'green', 'yellow', 'black', 'white', 'circle', 'square', 'round', 'line'] },
            { name: 'Everyday Objects', words: ['key', 'book', 'bag', 'pen', 'phone', 'clock', 'cup', 'plate', 'hat', 'shoe'] },
            { name: 'Family & People', words: ['mother', 'father', 'brother', 'sister', 'baby', 'man', 'woman', 'child', 'friend', 'family'] },
            { name: 'Time & Seasons', words: ['day', 'night', 'week', 'month', 'year', 'morning', 'evening', 'summer', 'winter', 'clock'] }
        ],
        'A2': [
            { name: 'Places & Buildings', words: ['castle', 'bridge', 'forest', 'mountain', 'shop', 'library', 'palace', 'hospital', 'market', 'village'] },
            { name: 'Work & Careers', words: ['worker', 'doctor', 'captain', 'soldier', 'farmer', 'teacher', 'manager', 'artist', 'driver', 'guide'] },
            { name: 'Social & Leisure', words: ['party', 'holiday', 'hobby', 'friend', 'game', 'gift', 'music', 'dinner', 'invitation', 'walk'] },
            { name: 'Describing People', words: ['brave', 'clever', 'quiet', 'tired', 'friendly', 'angry', 'happy', 'sad', 'tall', 'young'] },
            { name: 'Transport & Travel', words: ['train', 'plane', 'bus', 'boat', 'ticket', 'station', 'hotel', 'map', 'baggage', 'trip'] },
            { name: 'Health & Body', words: ['head', 'hand', 'foot', 'heart', 'pain', 'medicine', 'ill', 'well', 'doctor', 'sleep'] },
            { name: 'Shopping & Clothes', words: ['coat', 'shirt', 'trousers', 'dress', 'cost', 'buy', 'price', 'market', 'shop', 'money'] },
            { name: 'Sports & Activities', words: ['play', 'run', 'swim', 'game', 'ball', 'team', 'win', 'lose', 'sport', 'walk'] }
        ],
        'B1': [
            { name: 'Tech & Digital Life', words: ['internet', 'device', 'password', 'screen', 'application', 'connection', 'network', 'software', 'online', 'update'] },
            { name: 'Travel & Exploration', words: ['commute', 'journey', 'delay', 'passenger', 'destination', 'ticket', 'luggage', 'adventure', 'route', 'map'] },
            { name: 'Emotions & Moods', words: ['surprised', 'worried', 'excited', 'disappointed', 'nervous', 'confident', 'confused', 'relaxed', 'embarrassed', 'bored'] },
            { name: 'Environment', words: ['ecology', 'climate', 'pollution', 'nature', 'resource', 'energy', 'planet', 'protect', 'wildlife', 'scenery'] },
            { name: 'Commerce & Finance', words: ['budget', 'salary', 'tax', 'account', 'transaction', 'expense', 'debt', 'invest', 'profit', 'save'] },
            { name: 'Health & Lifestyle', words: ['nutrition', 'exercise', 'stress', 'disease', 'treatment', 'wellness', 'diet', 'recovery', 'muscle', 'clinic'] },
            { name: 'Education & Study', words: ['subject', 'degree', 'lecture', 'exam', 'research', 'science', 'scholar', 'skills', 'course', 'lesson'] },
            { name: 'Society & Culture', words: ['community', 'tradition', 'custom', 'citizen', 'government', 'celebration', 'event', 'opinion', 'law', 'justice'] }
        ],
        'B2': [
            { name: 'Art, Literature & Media', words: ['masterpiece', 'sculpture', 'critic', 'novel', 'character', 'plot', 'exhibition', 'portrait', 'genre', 'performance'] },
            { name: 'Relationships & Society', words: ['colleague', 'promotion', 'salary', 'landlord', 'tenant', 'neighbour', 'community', 'tradition', 'respect', 'rebellion'] },
            { name: 'Abstract Psychology', words: ['ambition', 'tolerance', 'stubbornness', 'generosity', 'confidence', 'patience', 'honesty', 'sensitivity', 'reliability', 'anxiety'] },
            { name: 'Problem Narration', words: ['challenge', 'mistake', 'consequence', 'solution', 'decision', 'crisis', 'obstacle', 'progress', 'compromise', 'disaster'] },
            { name: 'Technology & Innovation', words: ['automation', 'intelligence', 'virtual', 'cybersecurity', 'efficiency', 'pioneering', 'infrastructure', 'developer', 'invention', 'gadget'] },
            { name: 'Environment & Energy', words: ['sustainability', 'renewable', 'biodiversity', 'conservation', 'extinction', 'emissions', 'habitat', 'ecosystem', 'fossil', 'disposal'] },
            { name: 'Business & Management', words: ['negotiation', 'strategy', 'colleague', 'corporation', 'merger', 'leadership', 'market', 'contract', 'profitability', 'bankruptcy'] },
            { name: 'Crime & Justice', words: ['investigation', 'evidence', 'suspect', 'verdict', 'accuse', 'witness', 'trial', 'crime', 'punishment', 'prison'] }
        ],
        'C1': [
            { name: 'Philosophy', words: ['absurdity', 'loneliness', 'mortality', 'solitude', 'fate', 'destiny', 'conscience', 'morality', 'legacy', 'free_will'] },
            { name: 'Science & Technology', words: ['hypothesis', 'anomaly', 'synthesis', 'innovative', 'correlation', 'breakthrough', 'artificial', 'equilibrium', 'evolution', 'mechanism'] },
            { name: 'Complex Emotions', words: ['apprehensive', 'vulnerable', 'resilient', 'skeptical', 'reluctant', 'indifferent', 'melancholy', 'passionate', 'bewildered', 'exhilarated'] },
            { name: 'Rhetoric & Debate', words: ['controversial', 'perspective', 'contradiction', 'advocate', 'assert', 'refute', 'implication', 'consensus', 'fallacy', 'paradox'] },
            { name: 'Politics & Governance', words: ['legislative', 'constituency', 'referendum', 'ideology', 'autocracy', 'diplomacy', 'treaty', 'bureaucratic', 'lobbyist', 'governance'] },
            { name: 'Art & Aesthetics', words: ['abstract', 'avant-garde', 'critique', 'medium', 'expressionism', 'sensory', 'provocative', 'symmetry', 'interpretation', 'aesthetic'] },
            { name: 'Economics & Markets', words: ['monopoly', 'recession', 'inflation', 'deficit', 'liquidity', 'commodities', 'fiscal', 'prosperity', 'equilibrium', 'infrastructure'] },
            { name: 'Sociology & Behavior', words: ['demographics', 'integration', 'prejudice', 'acculturation', 'hierarchy', 'paradigm', 'phenomenon', 'customary', 'marginalization', 'behavior'] }
        ],
        'C2': [
            { name: 'Nuanced Human Behavior', words: ['mercurial', 'unwavering', 'idiosyncrasy', 'altruism', 'malevolence', 'indolence', 'meticulous', 'capricious', 'dogmatic', 'pragmatism'] },
            { name: 'High Literature & Poetics', words: ['ephemeral', 'ethereal', 'soliloquy', 'allusion', 'cacophony', 'juxtaposition', 'melancholic', 'melodramatic', 'resonance', 'verisimilitude'] },
            { name: 'Systems & Geopolitics', words: ['sovereignty', 'hegemony', 'globalization', 'bureaucracy', 'infrastructure', 'diplomacy', 'sanction', 'jurisdiction', 'alignment', 'autonomy'] },
            { name: 'Advanced Philosophy', words: ['determinism', 'solipsism', 'nihilism', 'existentialism', 'stoicism', 'empiricism', 'dualism', 'transcendence', 'altruistic', 'pragmatic'] },
            { name: 'Disasters & Cosmic Phenomena', words: ['cataclysmic', 'supernova', 'conflagration', 'vortex', 'dessecation', 'obliteration', 'apocalyptic', 'celestial', 'equilibrium', 'phenomenon'] },
            { name: 'Law & Jurisprudence', words: ['indictment', 'litigation', 'acquittal', 'nullification', 'precedent', 'codification', 'testimony', 'jurisdiction', 'statute', 'sanction'] },
            { name: 'Medicine & Pathology', words: ['pathogen', 'asymptomatic', 'neurological', 'congenital', 'prognosis', 'malignancy', 'efficacy', 'pandemic', 'syndrome', 'treatment'] },
            { name: 'Advanced Finance & Speculating', words: ['arbitrage', 'amortization', 'diversification', 'insolvency', 'portfolio', 'speculator', 'valuation', 'volatility', 'capitalization', 'fiscal'] }
        ]
    };

    const CONNECTORS_DB = {
        'A1': ['and', 'but', 'because', 'or', 'then'],
        'A2': ['after that', 'also', 'while', 'firstly', 'secondly', 'so'],
        'B1': ['although', 'however', 'therefore', 'since', 'besides'],
        'B2': ['furthermore', 'on the other hand', 'unless', 'as long as', 'consequently'],
        'C1': ['nevertheless', 'whereas', 'despite', 'in spite of', 'nonetheless', 'accordingly'],
        'C2': ['albeit', 'notwithstanding', 'much as', 'by the same token', 'be that as it may']
    };

    // --- State variables ---
    let storyLines = []; // Array of { text, author, level, grammar, vocab, linkWord }
    let activeLevel = 'B1';
    let activeLang = 'en';
    let useVocabModifier = false;
    let currentGrammarItem = null;
    let currentVocabItem = null;
    let activePlayer = 1;

    function renderSetup() {
        document.getElementById('go-title').textContent = GAME_TITLE;
        document.getElementById('go-meta').textContent = GAME_META;
        const body = document.getElementById('go-body');

        body.innerHTML = `
            <div class="setup-screen" style="max-width:600px; margin:0 auto;">
              <h2>Story Weaver 📖</h2>
              <p>Build a cohesive narrative piece by piece, guided by randomly drawn grammatical constraints. Perfect for creative solo writers or pass-the-device group play!</p>

              <div class="setup-field">
                <label>CEFR Difficulty Level</label>
                <select class="styled-sel" id="s-level">
                  ${LEVEL_OPTS.map(l => `<option value="${l.match(/\(([A-C][1-2])\)/)[1]}">${l}</option>`).join('')}
                </select>
              </div>

              <div class="setup-field">
                <label>Language</label>
                <select class="styled-sel" id="s-lang">
                  ${LANG_OPTS.map(l => `<option value="${l}">${l}</option>`).join('')}
                </select>
              </div>

              <div class="setup-field" style="display:flex; align-items:center; gap:10px; margin-top:1.5rem; background:rgba(0,0,0,0.02); padding:12px; border-radius:12px; border:1px solid var(--border);">
                <input type="checkbox" id="s-vocab-toggle" style="width:20px; height:20px; cursor:pointer;">
                <label for="s-vocab-toggle" style="font-weight:700; cursor:pointer; margin:0;">
                  Enable Thematic Vocabulary Modifier 🏷️ (Harder Challenge!)
                </label>
              </div>
              <p style="font-size:0.8rem; color:var(--ink-faint); margin-top:-0.5rem; padding-left:32px;">Draws a randomized vocabulary target from your CEFR level that must be included in your sentence.</p>

              <button class="btn-start-game" style="margin-top:2rem; width:100%;" onclick="COSY_GAME.start()">▶ Start Weaver Journey</button>
            </div>`;
    }

    window.COSY_GAME = {
        async start() {
            activeLevel = document.getElementById('s-level').value;
            const rawLang = document.getElementById('s-lang').value;
            activeLang = COSYLoader.getLangCode(rawLang);
            useVocabModifier = document.getElementById('s-vocab-toggle').checked;

            document.getElementById('go-body').innerHTML = '<div style="text-align:center;padding:4rem;">Spinning the loom...</div>';

            await COSYLoader.loadLevelData(activeLang, activeLevel);
            COSYGame.init(GAME_ID, activeLang, activeLevel);
            COSYGame.maxRounds = 10;

            storyLines = [];
            activePlayer = 1;

            COSY_GAME.nextTurn();
        },

        drawConstraints() {
            // Draw grammar element
            const grammarPool = GRAMMAR_DB[activeLevel] || GRAMMAR_DB['B1'];
            currentGrammarItem = grammarPool[Math.floor(Math.random() * grammarPool.length)];

            // Draw vocabulary target if checked
            if (useVocabModifier) {
                const themes = VOCAB_THEMES[activeLevel] || VOCAB_THEMES['B1'];
                const selectedTheme = themes[Math.floor(Math.random() * themes.length)];
                const word = selectedTheme.words[Math.floor(Math.random() * selectedTheme.words.length)];
                currentVocabItem = {
                    word: word,
                    theme: selectedTheme.name
                };
            } else {
                currentVocabItem = null;
            }
        },

        nextTurn() {
            if (!COSYGame.nextRound()) {
                COSY_GAME.renderEnd();
                return;
            }

            COSY_GAME.drawConstraints();
            COSY_GAME.renderArena();
        },

        renderArena() {
            const body = document.getElementById('go-body');
            const connectors = CONNECTORS_DB[activeLevel] || CONNECTORS_DB['B1'];

            let vocabCardHtml = '';
            if (currentVocabItem) {
                vocabCardHtml = `
                    <div class="constraint-card vocab">
                        <div style="display:flex; justify-content:space-between; align-items:center;">
                            <span style="font-weight:800; font-size:0.85rem; color:var(--honey); text-transform:uppercase; letter-spacing:1px;">🏷️ Vocabulary Modifier</span>
                            <span class="story-badge badge-vocab" style="margin:0">${currentVocabItem.theme}</span>
                        </div>
                        <div style="font-size:1.6rem; font-weight:800; margin: 8px 0; color:var(--ink);">${currentVocabItem.word}</div>
                        <div style="font-size:0.85rem; color:var(--ink-faint);">Sentence must include this exact word (case-insensitive).</div>
                    </div>`;
            } else {
                vocabCardHtml = `
                    <div class="constraint-card" style="border:1px dashed var(--border); display:flex; flex-direction:column; justify-content:center; align-items:center; background:rgba(0,0,0,0.01)">
                        <div style="font-size:1.5rem; margin-bottom:4px;">🏷️</div>
                        <div style="font-size:0.85rem; color:var(--ink-faint); text-align:center;">Vocab Modifier is Disabled.<br>Turn it on in setup for extra challenge.</div>
                    </div>`;
            }

            body.innerHTML = `
                <div class="score-bar">
                    <div class="sb-item"><div class="sb-val">${COSYGame.score}</div><div class="sb-lbl">Score</div></div>
                    <div class="sb-item"><div class="sb-val">${COSYGame.round}/${COSYGame.maxRounds}</div><div class="sb-lbl">Sentence</div></div>
                    <div class="sb-item"><div class="sb-val" style="color:var(--indigo); font-family:'Fraunces',serif;">P${activePlayer}</div><div class="sb-lbl">Weaver</div></div>
                </div>

                <div class="constraint-cards">
                    <div class="constraint-card grammar">
                        <div style="display:flex; justify-content:space-between; align-items:center;">
                            <span style="font-weight:800; font-size:0.85rem; color:var(--indigo); text-transform:uppercase; letter-spacing:1px;">🎯 Grammar Constraint</span>
                            <span class="story-badge badge-grammar" style="margin:0">${activeLevel}</span>
                        </div>
                        <div style="font-size:1.25rem; font-weight:800; margin: 6px 0; color:var(--indigo);">${currentGrammarItem.cat}</div>
                        <div style="font-size:0.9rem; margin-bottom:8px; font-weight:600; color:var(--ink);">Rule: <code>${currentGrammarItem.rule}</code></div>
                        <div style="font-size:0.8rem; color:var(--ink-faint); background:rgba(255,255,255,0.6); padding:6px; border-radius:6px; border:1px solid rgba(0,0,0,0.03);">${currentGrammarItem.clue}</div>
                    </div>
                    ${vocabCardHtml}
                </div>

                <div class="game-card" style="padding: 1.5rem;">
                    <div style="font-weight:800; font-size:0.85rem; color:var(--ink-faint); text-transform:uppercase; letter-spacing:1px; margin-bottom: 6px;">📖 The Story Board</div>
                    <div class="story-container" id="storyboard">
                        ${storyLines.length ? storyLines.map((line, idx) => `
                            <div class="story-line">
                                <strong>${idx + 1}.</strong> ${line.text}
                                <span class="story-badge badge-grammar">${line.grammar}</span>
                                ${line.vocab ? `<span class="story-badge badge-vocab">${line.vocab}</span>` : ''}
                                ${line.linkWord ? `<span class="story-badge badge-link">${line.linkWord}</span>` : ''}
                                <span style="font-size:0.75rem; color:var(--ink-faint); margin-left:8px;">, Player ${line.author}</span>
                            </div>
                        `).join('') : '<div style="color:var(--ink-faint); text-align:center; padding: 2rem 0; font-style:italic;">No lines woven yet. Start the legend!</div>'}
                    </div>
                </div>

                <div class="game-card" style="padding: 1.5rem; margin-top: 1rem;">
                    <div style="font-weight:800; font-size:0.85rem; color:var(--ink-faint); text-transform:uppercase; letter-spacing:1px; margin-bottom:8px;">✍️ Weaver Input</div>
                    <textarea class="game-input" id="weaver-input" placeholder="Type your sentence here containing the grammar structure..." style="width:100%; height:80px; resize:none; font-size:1rem; padding:12px; border-radius:12px; margin-bottom:12px;" autocomplete="off"></textarea>

                    <div class="help-drawer">
                        <div class="help-drawer-title">
                            🔗 Linking Words Draw (A Bonus! +5 XP)
                        </div>
                        <div class="connector-pills">
                            ${connectors.map(c => `<button class="connector-pill" onclick="COSY_GAME.insertLinkWord('${c}')">${c}</button>`).join('')}
                        </div>
                    </div>

                    <div class="game-controls" style="margin-top:1.25rem; justify-content:space-between; gap:1rem;">
                        <button class="btn-g-secondary" style="border:1px solid var(--border);" onclick="COSY_GAME.switchPlayer()">👥 Switch Player (P${activePlayer === 1 ? 2 : 1})</button>
                        <div style="display:flex; gap:10px;">
                            <button class="btn-g-secondary" style="color:var(--ink-faint);" onclick="COSY_GAME.skipTurn()">❓ Skip/Hint</button>
                            <button class="btn-g-primary" style="background:var(--green);" onclick="COSY_GAME.submitSentence()">✓ Weave Sentence</button>
                        </div>
                    </div>
                </div>`;

            // Auto-scroll storyboard to bottom
            const sb = document.getElementById('storyboard');
            if (sb) sb.scrollTop = sb.scrollHeight;
        },

        insertLinkWord(word) {
            const input = document.getElementById('weaver-input');
            if (input) {
                const text = input.value.trim();
                if (text) {
                    input.value = word + ' ' + text;
                } else {
                    input.value = word + ' ';
                }
                input.focus();
                gameUtils.playGameSound('click');
            }
        },

        switchPlayer() {
            activePlayer = activePlayer === 1 ? 2 : 1;
            gameUtils.playGameSound('click');
            COSY_GAME.renderArena();
            gameUtils.showGameMessage('go-body', `Pass the device to Player ${activePlayer}! 👥`, 'info');
        },

        skipTurn() {
            gameUtils.playGameSound('click');
            // Give example as hints
            const hint = currentGrammarItem.ex;
            const input = document.getElementById('weaver-input');
            if (input) {
                input.value = hint;
                input.focus();
                gameUtils.showGameMessage('go-body', "Suggested example injected!", 'info');
            }
        },

        submitSentence() {
            const input = document.getElementById('weaver-input');
            if (!input || !input.value.trim()) return;

            const text = input.value.trim();

            // 1. Validate Vocabulary word if active
            if (currentVocabItem) {
                const cleanWord = currentVocabItem.word.toLowerCase();
                const cleanText = text.toLowerCase();

                // Simple regex or word inclusion check
                const isPresent = cleanText.includes(cleanWord);
                if (!isPresent) {
                    gameUtils.playGameSound('error');
                    gameUtils.showGameMessage('go-body', `Required word "${currentVocabItem.word}" is missing! ❌`, 'error');
                    return;
                }
            }

            // 2. Open interactive Grammar Self-Check confirmation modal
            // This is a beautiful pedagogical loop verifying grammar accuracy with user review!
            const confirmMsg = `Confirming your Grammar Weaver:\n\nConstraint: "${currentGrammarItem.cat}"\nRule: "${currentGrammarItem.rule}"\n\nYour sentence:\n"${text}"\n\nDid you successfully weave this grammar into your sentence?`;

            gameUtils.showGameConfirm(confirmMsg, () => {
                let basePoints = 10;
                let addedBonus = 0;
                let usedLinkWord = null;

                // Complexity checks (Check for discourse connectors)
                const connectors = CONNECTORS_DB[activeLevel] || CONNECTORS_DB['B1'];
                for (const c of connectors) {
                    const regex = new RegExp(`\\b${c}\\b`, 'i');
                    if (regex.test(text)) {
                        addedBonus += 5;
                        usedLinkWord = c;
                        break;
                    }
                }

                storyLines.push({
                    text: text,
                    author: activePlayer,
                    level: activeLevel,
                    grammar: currentGrammarItem.cat,
                    vocab: currentVocabItem ? currentVocabItem.word : null,
                    linkWord: usedLinkWord
                });

                COSYGame.addScore(basePoints + addedBonus);

                // Sound & Confetti feedback loops
                if (addedBonus > 0) {
                    gameUtils.playGameSound('success');
                    gameUtils.showGameMessage('go-body', `✨ Complexity Bonus! +5 XP (used: "${usedLinkWord}")`, 'success');
                } else {
                    gameUtils.playGameSound('success');
                }

                // Switch player for group collaboration
                activePlayer = activePlayer === 1 ? 2 : 1;

                COSY_GAME.nextTurn();
            });
        },

        reset: renderSetup,

        renderEnd() {
            const lang = COSYGame.language;
            const level = COSYGame.level;
            COSYScores.save(GAME_ID, lang, level, COSYGame.score);
            const best = COSYScores.best(GAME_ID, lang);
            const body = document.getElementById('go-body');

            // Construct full story text on scroll
            const fullStory = storyLines.map(s => s.text).join(' ');

            body.innerHTML = `
                <div class="round-end" style="max-width:650px; margin:0 auto;">
                    <div class="re-icon">🏆</div>
                    <div class="re-title">Story Complete!</div>
                    <div class="re-sub">Your narrative was woven with excellence. Total Score: <strong>${COSYGame.score}</strong> pts.</div>
                    ${best ? `<div class="game-sub" style="margin-bottom:1rem">Personal best: ${best.score} pts</div>` : ''}

                    <div style="font-weight:700; font-size:0.95rem; color:var(--ink); text-align:left; margin-top:2rem;">📖 Read Your Masterpiece:</div>
                    <div class="story-scroll-wrap" id="story-scroll">
                        ${fullStory || 'No words were spoken.'}
                    </div>

                    <div class="re-actions" style="margin-top:2rem;">
                        <button class="btn-g-secondary" style="border:1px solid var(--border);" onclick="COSY_GAME.copyStory()">📋 Copy Story to Clipboard</button>
                        <button class="btn-g-primary" style="background:var(--indigo);" onclick="COSY_GAME.start()">Play again ↺</button>
                        <button class="btn-g-secondary" onclick="location.href='../index.html'">Back to hub</button>
                    </div>
                </div>`;

            // Play final victory fanfare and trigger confetti!
            gameUtils.playGameSound('success');
            gameUtils.createConfetti();
        },

        copyStory() {
            const text = storyLines.map(s => s.text).join(' ');
            navigator.clipboard.writeText(text).then(() => {
                gameUtils.showGameMessage('go-body', "Story copied to clipboard! 📋", 'success');
                gameUtils.playGameSound('success');
            }).catch(() => {
                gameUtils.showGameMessage('go-body', "Failed to copy.", 'error');
            });
        }
    };

    document.addEventListener('DOMContentLoaded', renderSetup);
})();