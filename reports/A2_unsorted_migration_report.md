# 📦 A2 Unsorted Vocabulary Data Migration Report

This report documents the migration of `people.js`, `locations.js`, and `quotes.js` files from `cosylanguages/COSYlanguages` (`vocabulary/<lang>/A2/`) into `cosylanguages/COSYgames` (`data/<lang>/unsorted/`).

---

## 🎯 Migration Overview

- **Source Location:** `cosylanguages/COSYlanguages/vocabulary/<lang>/A2/`
- **Destination Location:** `cosylanguages/COSYgames/data/<lang>/unsorted/`
- **Total Files Moved:** 21
- **File Verification Status:** 100% Identical byte-for-byte content and matching entry counts confirmed.
- **Source Cleanup:** Files removed from COSYlanguages `A2/` directories and `index.json` manifests updated.

---

## 📊 Summary by Category & Language

### 1. `locations.js` (13 Languages, 207 Total Entries)

| Language Code | Language Name | Destination Path | Entry Count | File Size (Bytes) |
|---|---|---|---|---|
| `ba` | Bashkir | `data/ba/unsorted/locations.js` | 16 | 6,215 |
| `br` | Breton | `data/br/unsorted/locations.js` | 16 | 6,209 |
| `cv` | Chuvash | `data/cv/unsorted/locations.js` | 1 | 593 |
| `de` | German | `data/de/unsorted/locations.js` | 16 | 6,223 |
| `el` | Greek | `data/el/unsorted/locations.js` | 19 | 7,345 |
| `es` | Spanish | `data/es/unsorted/locations.js` | 16 | 6,769 |
| `fr` | French | `data/fr/unsorted/locations.js` | 19 | 7,309 |
| `hy` | Armenian | `data/hy/unsorted/locations.js` | 16 | 6,223 |
| `it` | Italian | `data/it/unsorted/locations.js` | 19 | 7,317 |
| `ka` | Georgian | `data/ka/unsorted/locations.js` | 16 | 6,237 |
| `pt` | Portuguese | `data/pt/unsorted/locations.js` | 16 | 6,209 |
| `ru` | Russian | `data/ru/unsorted/locations.js` | 18 | 6,959 |
| `tt` | Tatar | `data/tt/unsorted/locations.js` | 16 | 6,217 |

---

### 2. `people.js` (4 Languages, 5 Total Entries)

| Language Code | Language Name | Destination Path | Entry Count | File Size (Bytes) | Sample Entries |
|---|---|---|---|---|---|
| `el` | Greek | `data/el/unsorted/people.js` | 1 | 747 | Μέγας Αλέξανδρος |
| `fr` | French | `data/fr/unsorted/people.js` | 1 | 737 | Marie Curie |
| `it` | Italian | `data/it/unsorted/people.js` | 1 | 745 | Dante Alighieri |
| `ru` | Russian | `data/ru/unsorted/people.js` | 2 | 1,101 | Лев Толстой, Виктор Цой |

---

### 3. `quotes.js` (4 Languages, 4 Total Entries)

| Language Code | Language Name | Destination Path | Entry Count | File Size (Bytes) | Sample Quote |
|---|---|---|---|---|---|
| `el` | Greek | `data/el/unsorted/quotes.js` | 1 | 971 | "Ζωή είναι αυτό που σου συμβαίνει..." (John Lennon) |
| `fr` | French | `data/fr/unsorted/quotes.js` | 1 | 890 | "La vie, c'est ce qui arrive..." (John Lennon) |
| `it` | Italian | `data/it/unsorted/quotes.js` | 1 | 986 | "La vita è quello che ti succede..." (John Lennon) |
| `ru` | Russian | `data/ru/unsorted/quotes.js` | 1 | 974 | "Жизнь — это то, что происходит..." (John Lennon) |

---

## 📌 Implementation Notes

1. **Preserved File Structure & Fields:** Original variable scoping, wrapper functions, and property names (e.g. `word`, `text`, `author`, `transcription`, `emoji`, `definitions`, `id`) were preserved verbatim without modifications.
2. **Unwired Placement:** Landed under `data/<lang>/unsorted/` without wiring into existing game engines or `game_data.js` files, preserving them for future standalone game designs (e.g. quote weaver / biography game).
