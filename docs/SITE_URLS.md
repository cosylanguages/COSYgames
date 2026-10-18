# Site URLs and migration

Every absolute link to a COSY site (header and footer links, `canonical`, `og:url`, logos, `sitemap.xml`, `robots.txt`, the root README)
is kept in step with **`site.config.json`**. Static pages need real absolute URLs for search engines, so the links stay in the HTML;
the config and `scripts/sync-site-urls.js` keep them consistent.

## Everyday use

- `node scripts/sync-site-urls.js --check` fails if a file links to a legacy base or to a `*.github.io/COSY*` address that is not in the config.
  `tests/site-urls.test.js` runs the same check in CI, so a new link to a mistyped site (for example `COSYlanguagesss`) cannot be merged.
- To link to another COSY site in a new page, copy its base from `site.config.json`.

## Moving a site to a new address

1. In `site.config.json`, put the old `base` into that site's `legacy` list and set the new `base`.
2. Run `node scripts/sync-site-urls.js` and `node scripts/sync-site-chrome.js`. Every HTML page, the sitemap, `robots.txt`, the root README and the JavaScript files are rewritten, and the shared header/footer are regenerated (including the GitHub link, if you changed `repository`).
3. Run `node --test tests/*.js`, review the diff, and deploy.
4. Update by hand what the script does not scan: other documentation under `docs/`, test fixtures in `tests/`, and the GitHub repository's
   About/website field. Keep the old repository (or a redirect) alive for a while so existing links and search results still resolve.
5. When nothing links to the old address anymore, remove it from `legacy`.

Rehearsed on a copy: moving COSYgames to another address rewrote 97 URLs in 27 files in one run, and all tests still passed.

## What is intentionally not covered

- `tests/`, `docs/`, `.github/` and markdown files other than the root README are not scanned.
- Cross-repo assets (for example the logo at `COSYlanguages/images/logos/cosylanguages.png`, used in 72 places for icons and social images)
  still depend on the COSYlanguages site. Vendoring the logo into `shared/images/` would remove that dependency; this is a separate change.
- COSYplatform and COSYmanuals are not linked from this repository yet. Add them under `sites` when they are.

## Shared header and footer

The navigation bar and footer were copied by hand into every game page. They now live once in `shared/chrome/*.tpl`
(`nav-game`, `footer-game`, `nav-hub`, `footer-hub`, `ecosystem-strip-hub`) and are written into each page between marker comments:

```html
<!-- cosy:chrome:nav-game -->
...generated, do not edit by hand...
<!-- /cosy:chrome:nav-game -->
```

- Edit the template, then run `node scripts/sync-site-chrome.js`. Pages keep full static HTML (no JavaScript needed, no flash, search engines see the links).
- Placeholders: `{{root}}` (relative path to the repo root), `{{site.<key>}}` and `{{repository}}` from `site.config.json`, and `{{uiLanguageOptions}}`
  from `chrome.uiLanguages` there. To add a UI language to every page's picker, add it to that list (the game strings still have to be translated).
- New game pages start from `templates/game-template.html`, which already has the markers. `tests/site-chrome.test.js` fails if a page is out of date,
  or if it contains a hand-copied `<nav class="cg-nav">` / `<footer class="cg-footer">` outside markers.
- A page whose chrome is intentionally different (currently only `scene-match/tools/hotspot-editor.html`) is listed in `chrome.customPages`.
- Not covered: the "Report Issue" link in each game's top bar still contains the GitHub repository URL directly.

### Ecosystem links: one order, everywhere

The cross-site links appear in this order on game pages (nav) and in the hub's ecosystem bar: **Home (COSYlanguages), All Games, Dictionary (COSYdata), Tools, Events**.
Both footers link the same sites. `tests/chrome-consistency.test.js` fails if the order or the set of sites drifts.

- Link labels are translation keys (`data-i18n="nav_data"` ...) defined in `shared/js/i18n.js` for all 7 languages. The test fails if a key used in
  `shared/chrome/*.tpl` is missing in any language, or if a translation is still the English text. Product names in footers (COSYdata, COSYtools, ...) stay untranslated.
- The five nav links carry the class `cg-nav-eco` and are hidden below 860px (see `shared/css/nav.css`); the footer repeats every link, so phones lose nothing.
- To add a site (for example COSYplatform): add it to `site.config.json`, add a link to the templates in the same position everywhere, add its `nav_*` key in all 7 languages, and update the expected order in the test.
