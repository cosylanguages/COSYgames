# Guide de relecture des traductions pour les enseignants

Bienvenue ! Ce guide explique comment relire et valider les traductions des jeux COSYgames.

## Ouverture et édition des fichiers CSV

1. Les traductions sont exportées sous forme de fichiers CSV situés dans `translations/export/`.
2. Ouvrez le fichier `.csv` dans votre tableur préféré (Microsoft Excel, Google Sheets, LibreOffice Calc, Apple Numbers, etc.).
   - Remarque : Excel en version française enregistre et lit parfois les fichiers CSV avec un point-virgule (`;`) comme séparateur. Nos outils d'export et d'import gèrent automatiquement les séparateurs `,`, `;` et `Tabulation`.

## Présentation des colonnes

- **game** : Identifiant du jeu (Ne pas modifier).
- **key** : Clé de traduction (Ne pas modifier).
- **english** : Texte original en anglais pour référence (Ne pas modifier).
- **translation** : Le texte traduit dans la langue cible (**Modifier cette colonne**).
- **status** : Statut de révision. Indiquez `reviewed` après avoir vérifié ou corrigé la ligne (**Modifier cette colonne**).
- **notes** : Remarques optionnelles pour l'équipe ou les autres relecteurs (**Modifier cette colonne**).

## Règles clés pour la traduction

1. **Remplaçants `{placeholders}`** : Conservez exactement tous les `{placeholders}` comme dans la version anglaise (par exemple `{word}`, `{score}`, `{count}`). Ne traduisez et ne modifiez jamais les noms entre accolades.
2. **Concision** : Les boutons et lignes d'état disposent d'un espace restreint sur l'écran. Privilégiez des traductions courtes.
3. **Mots de passe et Symboles** : Les noms de jeux, les symboles (`▶`, `✓`, `↺`) et les émojis sont gérés par le code. Ne les ajoutez ni ne les supprimez dans les traductions sauf s'ils figurent dans l'anglais.
4. **Tutoiement** : Utilisez le tutoiement (registre informel) : `tu` en français, `tú` en espagnol, `du` en allemand, `tu` en italien, `ты` en russe, `εσύ` en grec.
5. **Signification du statut "reviewed"** : Inscrire `reviewed` indique qu'un enseignant a vérifié la traduction, qu'elle est naturelle et conforme au glossaire.

## Renvoyer les fichiers

Enregistrez le fichier au format CSV et renvoyez-le ou soumettez une Pull Request. Le script d'importation mettra à jour automatiquement les fichiers de traduction principaux.
