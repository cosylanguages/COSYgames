# Quotes Content Needs Home Report

## Summary
This report summarizes the quotes dataset (`quotes.js`) currently residing in the `cosylanguages/COSYlanguages` repository. There is currently no corresponding game in `cosylanguages/COSYgames` designed to render quotes (quote + author structure).

Per design instructions, quote data must not be forced into unrelated games such as `critics-corner` (which is designed for reviews). This report serves as documentation for human decision-making regarding future game creation or dataset placement.

---

## Quotes Count per Language

| Language Code | Language Name | Level Breakdown | Total Unique Quotes |
|---|---|---|---|
| `el` | Greek | A2: 1, B1: 2 | 3 |
| `fr` | French | A2: 1, B1: 2 | 3 |
| `it` | Italian | A2: 1, B1: 1 | 2 |
| `ru` | Russian | A2: 1, B1: 2 | 3 |
| `ba` | Bashkir | None | 0 |
| `br` | Breton | None | 0 |
| `cv` | Chuvash | None | 0 |
| `de` | German | None | 0 |
| `es` | Spanish | None | 0 |
| `hy` | Armenian | None | 0 |
| `ka` | Georgian | None | 0 |
| `pt` | Portuguese | None | 0 |
| `tt` | Tatar | None | 0 |

---

## Sample Entries

### Greek (`el/A2/quotes.js`)
```json
{
  "text": "Ζωή είναι αυτό που σου συμβαίνει ενώ είσαι απασχολημένος κάνοντας άλλα σχέδια.",
  "author": "John Lennon",
  "level": "elementary",
  "theme": "people",
  "lang": "el"
}
```

### French (`fr/A1/quotes.js` / `fr/A2/quotes.js`)
```json
{
  "word": "La vie, c'est ce qui arrive quand on est occupé à faire d'autres projets.",
  "author": "John Lennon",
  "lang": "fr",
  "level": "elementary"
}
```

---

## Recommendations
1. **Design a dedicated Quote / Wisdom Game**: A new game standalone module (e.g. `quote-weaver` or `wisdom-wall`) in `COSYgames` designed specifically for inspirational quotes, author attribution, and reflection prompts.
2. **Keep Data In Situ**: Until a matching quote game is created in `COSYgames`, `quotes.js` should remain in `COSYlanguages` or be migrated as part of a dedicated quotes feature release.
