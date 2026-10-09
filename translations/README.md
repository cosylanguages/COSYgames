# Translation Review Guide for Teachers

Welcome! This guide explains how to review game translations for COSYgames.

## Opening and Editing CSV Files

1. Translations are exported as CSV files located in `translations/export/`.
2. Open the `.csv` file in your spreadsheet software (Microsoft Excel, Google Sheets, LibreOffice Calc, Apple Numbers, etc.).
   - Note: If using Excel in a locale like French or German, Excel may open semi-colon (`;`) delimited files automatically or prompt for delimiters. All our export and import tools handle `,`, `;`, and `Tab` delimiters automatically.

## Columns Overview

- **game**: Game ID (Do not edit).
- **key**: Translation key string (Do not edit).
- **english**: Original English source text for reference (Do not edit).
- **translation**: The translated text in your target language (**Edit this column**).
- **status**: Current review status. Set to `reviewed` once you have checked/edited the row (**Edit this column**).
- **notes**: Optional notes for other reviewers or maintainers (**Edit this column**).

## Key Rules for Translators

1. **Placeholders**: Keep all `{placeholders}` exactly as they appear in English (e.g. `{word}`, `{score}`, `{count}`). Never translate, alter, or remove placeholder names inside `{}`.
2. **Keep it Short**: Interface buttons and status lines have limited UI space. Keep translations concise.
3. **Symbols & Emojis**: Game names, symbols (`▶`, `✓`, `↺`), and emojis are kept in the surrounding markup/code outside `data-gs` elements (e.g., `📍 <span data-gs="setup.level">…</span>`). Exception: inside `<option>` elements (where child tags are forbidden), emoji prefixes remain in the translatable string, identical across languages.
4. **Register**: Use informal register (`tu` in French, `tú` in Spanish, `du` in German, `tu` in Italian, `ты` in Russian, `εσύ` in Greek).
5. **What "reviewed" means**: Setting `status` to `reviewed` indicates that a human teacher has verified that the translation is accurate, natural, and adheres to the glossary.

## Sending Files Back

Save the modified file as CSV and send it back or submit a Pull Request. The import script will automatically update the master string files for any updated translations or rows marked `reviewed`.
