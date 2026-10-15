# COSYgames shared taxonomy

The hub's shared taxonomy lives in `data/game-taxonomy.json`. It is designed to be reused by the hub, game selectors, decks, and future content authoring tools.

## Dimensions

- **Topic category and subcategory:** broad, reusable themes (for example, Everyday Life → Food & drinks). Content can be tagged across more than one category.
- **CEFR level:** A0–C2, with A0 representing supported pre-A1 practice. A game's listed levels are initial discovery metadata, not a guarantee that every prompt or deck supports that level.
- **Audience:** content suitability guidance, not a proxy for language proficiency or a hard age gate.
- **Play modes:** solo, pairs, mini-groups, and big groups. **Setting:** online or in person. These are separate dimensions; “in person” means a face-to-face setting, not a guarantee that the game runs without an internet connection.
- **Special selectors:** some games use their own meaningful practice sets rather than ordinary CEFR selection. Lucky Numbers is explicitly configured for Alphabet, Numbers 0–9, Numbers 0–19, and Numbers 0–100.

## Content-set audit

The 100 Questions deck audit records all eight current decks (Civic, Family, Friends, Interview, Myself, Netflix, Student, Teacher) with topic and subtopic tags grounded in their content and source filenames. Their source stages are thematic/progressive rather than CEFR assessments, so these deck entries intentionally do not claim individual CEFR levels. The game's overall level list remains discovery metadata and should not be read as a verified level for every deck.

## Updating the taxonomy

1. Add or revise categories in `categories` and use stable, lowercase IDs.
2. Tag each game with category IDs in `games[].categories`; add narrower prompts/deck tags in `games[].subcategories`.
3. Keep the hub's filters data-driven. `shared/js/game-taxonomy.js` loads this file and annotates existing game cards with the metadata used by the selectors.
4. When content decks gain explicit CEFR or audience metadata, replace broad provisional game-level tags with deck- or prompt-level tags.
5. Avoid treating age as proficiency: age suitability and language level are separate dimensions.

## Current implementation

The hub combines the existing player and game-family filters with **topic, subtopic, CEFR level, audience, group-size, and setting** selectors. The original card layout and game URLs are preserved. The topic and level metadata is centralized in the JSON file; subtopics are populated dynamically from the selected topic.

## Source-level mapping

Some existing game datasets use labels such as `starter`, `elementary`, `intermediate`, `upper_intermediate`, `advanced`, and `proficiency` instead of CEFR codes. The taxonomy records explicit starter mappings for the audited English content in Fluency Flow, Opinion Arena, Identity Mystery, Word Linker, and Action Hero. These mappings are a practical alignment (for example, `intermediate` → B1 and `upper_intermediate` → B2), not a formal CEFR assessment. Other language datasets and external COSYdata decks may differ, so level availability remains a discovery aid until each source is audited.

## Quality note

Initial tags are a practical starting point based on each game's purpose and visible description. They should be reviewed against actual prompt/deck content before being presented as precise pedagogical guarantees. Group-size tags should be checked against each game's facilitation needs. Do not advertise offline/no-internet support unless a game and its dependencies have been verified to work without a connection.
