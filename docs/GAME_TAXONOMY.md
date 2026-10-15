# COSYgames shared taxonomy

The hub's shared taxonomy lives in `data/game-taxonomy.json`. It is designed to be reused by the hub, game selectors, decks, and future content authoring tools.

## Dimensions

- **Topic category and subcategory:** broad, reusable themes (for example, Everyday Life → Food & drinks). Content can be tagged across more than one category. `games[].subcategories` preserves the source/game-specific labels; `games[].subcategoryMappings` explicitly maps each label to zero or more canonical subtopics. The hub's subtopic selector uses only canonical targets. An empty mapping is intentional for game-specific modes or sets that are not meaningful shared topics (for example, Lucky Numbers' number ranges or a mixed-practice selector).
- **CEFR level:** A0–C2, with A0 representing supported pre-A1 practice. A game's listed levels are initial discovery metadata, not a guarantee that every prompt or deck supports that level.
- **Audience:** content suitability guidance, not a proxy for language proficiency or a hard age gate.
- **Play modes:** solo, pairs, mini-groups, and big groups. **Setting:** online or in person. These are separate dimensions; “in person” means a face-to-face setting, not a guarantee that the game runs without an internet connection.
- **Special selectors:** some games use their own meaningful practice sets rather than ordinary CEFR selection. Lucky Numbers is explicitly configured for Alphabet, Numbers 0–9, Numbers 0–19, and Numbers 0–99. Etymology Explorer's Easy, Medium, and Hard choices are difficulty modes, while Language Network and Word Pairs are separate modes; none are explicit CEFR labels, so its CEFR level list is intentionally empty and its mode choices are recorded separately.

Cosy Crossword source audit: its setup exposes A1, A2, B1, B2, and C1, so the taxonomy does not advertise A0 or C2. It has built-in fallback vocabulary for A1 and B2 and offers English, French, Italian, Russian, and Greek in the language selector. The setup does not expose a player-count control, so solo is the direct configured mode; collaborative classroom use is a facilitation choice.

Lucky Numbers source audit: the actual setup offers Numbers 0–9, Numbers 0–19, and Numbers 0–99 (not 0–100), plus Alphabet. The game supports a Player role for solo play or with a host and a Caller role for a group. Number words are fetched from COSYdata with numeric fallbacks, so an in-person setup is not necessarily offline-capable. Emoji Odyssey offers Guess and Story modes; Guess mode depends on emoji-tagged vocabulary being available for the chosen language and level.

## Audience and group-size audit

Audience tags are discovery hints, not guarantees that every prompt in a game is suitable for every age. 100 Questions is a notable example: its Family, Student, and Myself decks explicitly provide children-friendly and adult-friendly card sides, while Friends, Interview, Civic Exam, and Netflix Documentary prompts warrant context-specific review. The game setup describes CEFR A2–C2, but its numbered deck stages are not CEFR assessments; the game-level level list reflects the setup description and individual deck entries remain marked not assessed. The implementation offers individual and group lesson types, but this should not be conflated with a confirmed solo party-game mode. For all games, mode and age metadata should be tightened only when supported by actual game UI/content, not inferred from generic flexibility.

## Setup-level and audience audit

Scene Match exposes A1, A2, B1, B2–C2, and All Levels in its setup; the hub taxonomy therefore lists A1–C2, while scene-level tags determine which scenes actually appear. Its interactive scene interface is solo-oriented, although a teacher can facilitate pair or group exploration. Audience and play-mode labels across the hub are discovery hints; they should not imply enforced participant counts or guarantee suitability.

Story Chain, Story Weaver, and Hot Seat expose explicit setup choices from Starter (A1) through Proficiency (C2); their game-level taxonomy therefore lists A1–C2 rather than A0. These are interface choices, not independent CEFR certification. Story Chain is described as collaborative sentence-by-sentence storytelling; Story Weaver provides a built-in English grammar curriculum; Hot Seat explicitly assigns a guesser and one or more clue-givers/watchers, and runs 15 rounds with a 60-second timer. Audience notes are suitability prompts, not age guarantees. Do not infer hard player-count limits from the hub taxonomy when the game setup does not enforce them.

## Guessing and discovery game audit

Action Hero, Identity Mystery, and Object Quest expose setup choices from Starter (A1) through Proficiency (C2), so their game-level level lists mirror A1–C2. These are selectable setup levels, not independent validation that every language dataset contains equally suitable material at every level. Action Hero is explicitly team-based acting and guessing; Identity Mystery revolves around questions/clues for a hidden identity; Object Quest is visual object discovery. Their audience tags are discovery hints only. The UI does not enforce hard group-size limits for these games, and an in-person format label must never be read as a promise of offline operation.

## Content-set audit

The 100 Questions deck audit records all eight current decks (Civic, Family, Friends, Interview, Myself, Netflix, Student, Teacher) with topic and subtopic tags grounded in their content and source filenames. Their source stages are thematic/progressive rather than CEFR assessments, so these deck entries intentionally do not claim individual CEFR levels. Fluency Flow's English prompts are grouped by the five source level bands in its data file, with the existing approximate mappings preserved. Word Linker's explicitly labelled English puzzles retain their source level bands; puzzles without a level field are marked not assessed rather than assigned a guessed CEFR level. These source-level audits currently cover English data, not every language dataset.

## Updating the taxonomy

1. Add or revise categories in `categories` and use stable, lowercase IDs.
2. Tag each game with category IDs in `games[].categories`; preserve the labels used by the game's own content/setup in `games[].subcategories`, and map each label through `games[].subcategoryMappings` to one or more canonical `categories[].subcategories` labels. Use an empty array only when a source label is a game-specific mode/practice set rather than a reusable topic.
3. Keep the hub's filters data-driven. `shared/js/game-taxonomy.js` loads this file and annotates existing game cards with the metadata used by the selectors.
4. When content decks gain explicit CEFR or audience metadata, replace broad provisional game-level tags with deck- or prompt-level tags.
5. Avoid treating age as proficiency: age suitability and language level are separate dimensions.

## Current implementation

The hub combines the existing player and game-family filters with **topic, subtopic, CEFR level, audience, group-size, and setting** selectors. The original card layout and game URLs are preserved. The topic and level metadata is centralized in the JSON file; canonical subtopics are populated dynamically from the selected topic, using the explicit per-game mapping rather than mixing source labels into the shared filter.

## Source-level mapping

Some existing game datasets use labels such as `starter`, `elementary`, `intermediate`, `upper_intermediate`, `advanced`, and `proficiency` instead of CEFR codes. The taxonomy records explicit starter mappings for the audited English content in Fluency Flow, Opinion Arena, Identity Mystery, Word Linker, and Action Hero. These mappings are a practical alignment (for example, `intermediate` → B1 and `upper_intermediate` → B2), not a formal CEFR assessment. Other language datasets and external COSYdata decks may differ, so level availability remains a discovery aid until each source is audited.

## Quality note

Initial tags are a practical starting point based on each game's purpose and visible description. They should be reviewed against actual prompt/deck content before being presented as precise pedagogical guarantees. Group-size tags should be checked against each game's facilitation needs. Do not advertise offline/no-internet support unless a game and its dependencies have been verified to work without a connection.
