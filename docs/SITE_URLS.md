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
2. Run `node scripts/sync-site-urls.js`. Every HTML page, the sitemap, `robots.txt`, the root README and the JavaScript files are rewritten.
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
