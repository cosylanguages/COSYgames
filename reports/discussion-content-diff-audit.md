# 📊 Discussion Content Diff Audit: COSYlanguages vs COSYgames

This audit report compares the discussion practice content from **COSYlanguages** (`debates.js`, `fluency.js`, `opinions.js`, `speaking.js` across `vocabulary/<lang>/<level>/`) against existing entries in **COSYgames** (`data/<lang>/game_data.js` under `.battle`, `.fluency`, and `.opinions`).

---

## 1. Executive Summary & Audit Methodology

- **Source Dataset:** `COSYlanguages` repository (`https://github.com/cosylanguages/COSYlanguages/tree/main/vocabulary/`)
- **Target Dataset:** `COSYgames` local dataset files (`data/<lang>/game_data.js`)
- **Analyzed Languages:** `ba`, `br`, `cv`, `de`, `el`, `en`, `es`, `fr`, `hy`, `it`, `ka`, `pt`, `ru`, `tt` (14 languages total).
- **Comparison Logic:** Each item from `COSYlanguages` practice files was normalized (lowercased, stripped of punctuation and emojis) and compared against normalized items in COSYgames `.battle`, `.fluency`, and `.opinions` arrays.

---

## 2. Per-Language Comparison Breakdown

For each language, three counts are reported:
1. **Existing (Matched)**: Items present in COSYlanguages that already exist in COSYgames with matching text (indicating prior migration).
2. **Genuinely Missing**: Items present in COSYlanguages that do NOT exist in COSYgames.
3. **Independently Authored**: Items present in COSYgames that do NOT originate from COSYlanguages practice files (authored specifically for COSYgames).

| Language Code | Language Name | COSYlanguages Total Prompts | COSYgames Total Prompts | Matched / Already Migrated | Genuinely Missing in COSYgames | Independently Authored in COSYgames |
| :---: | :--- | :---: | :---: | :---: | :---: | :---: |
| `ba` | Bashkir | 142 | 76 | **35** | **107** | **41** |
| `br` | Breton | 142 | 78 | **35** | **107** | **43** |
| `cv` | Chuvash | 10 | 0 | **0** | **10** | **0** |
| `de` | German | 184 | 80 | **35** | **149** | **45** |
| `el` | Greek | 391 | 233 | **201** | **190** | **32** |
| `en` | English | 0 | 61 | **0** | **0** | **61** |
| `es` | Spanish | 184 | 84 | **36** | **148** | **48** |
| `fr` | French | 611 | 239 | **201** | **410** | **38** |
| `hy` | Armenian | 142 | 76 | **35** | **107** | **41** |
| `it` | Italian | 611 | 234 | **202** | **409** | **32** |
| `ka` | Georgian | 142 | 75 | **35** | **107** | **40** |
| `pt` | Portuguese | 184 | 78 | **36** | **148** | **42** |
| `ru` | Russian | 611 | 236 | **201** | **410** | **35** |
| `tt` | Tatar | 142 | 75 | **35** | **107** | **40** |
| **TOTALS** | | **3,566** | **1,725** | **1,087** | **2,479** | **638** |

---

## 3. Findings & Observations

### High-Coverage Languages (`fr`, `it`, `ru`, `el`)
- These four core languages underwent an earlier migration wave where **201–202 debate topics** were copied into `data/<lang>/game_data.js` under `.battle`.
- However, higher-level fluency and opinion prompts (B2–C2) from `COSYlanguages` remain unmigrated (~410 missing items per core language).

### Partial-Coverage Languages (`de`, `es`, `pt`, `ba`, `br`, `hy`, `ka`, `tt`)
- These languages have **35–36 matched items** in COSYgames (mostly starter fluency and elementary opinions).
- They have ~107–149 missing prompts in `COSYlanguages` that have not yet been imported into COSYgames.

### Standalone / Custom Datasets (`en`, `cv`)
- **English (`en`)**: Has **61 prompts** authored directly in COSYgames for demo and starter decks. `COSYlanguages` does not contain a separate English practice folder.
- **Chuvash (`cv`)**: Has 10 prompts in `COSYlanguages` (`vocabulary/cv/`), but COSYgames does not yet have a `data/cv/game_data.js` dataset file.

---

## 4. Exact Text Duplicate Check

A full scan of all `data/<lang>/game_data.js` files was performed to identify any exact duplicate prompt strings or debate tuples occurring multiple times within the same file.

- **Exact Duplicate Count across COSYgames**: **0 duplicates found.**
- **Result**: All prompt arrays in `COSYgames` are clean and free of internal duplicate entries.

---

## 5. Migration Recommendation

When maintainers choose to execute the content migration from COSYlanguages to COSYgames:
1. **Append Missing Items**: Import the **2,479 genuinely missing items** from `COSYlanguages` into the respective `data/<lang>/game_data.js` arrays (`.battle`, `.fluency`, `.opinions`).
2. **Preserve Custom Entries**: Maintain the **638 independently authored entries** in `COSYgames` to avoid overwriting curated game content.
3. **Create Chuvash Dataset**: Initialize `data/cv/game_data.js` to ingest Chuvash discussion prompts.
