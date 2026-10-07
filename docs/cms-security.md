# Founder CMS & Ecosystem SSO Security Model

## Overview

The Ecosystem Single Sign-On (SSO) and Founder CMS components (`shared/js/auth-sso.js` and `shared/js/cms-editor.js`) provide cross-domain auth state synchronization and live page content editing for authorized platform founders and administrators.

---

## 1. Client-Side Authorization Security Notice

All client-side JavaScript checks (such as `CMSEditor.isAuthorized()` and UI toolbar rendering) are purely for user experience and interface control. **Client-side code cannot enforce database security.**

Actual data security, authorization, and write protections are strictly enforced at the database level by Supabase Row Level Security (RLS) policies based on cryptographic JWT inspection (`auth.jwt()`).

---

## 2. Configuration & Supabase Setup

### Configuration
By default, `auth-sso.js` and `cms-editor.js` are inert and inactive. They load no external libraries and issue no network requests unless explicitly configured.

Configuration can be provided either:
1. In `shared/js/auth-sso.js` via the `CONFIG` object:
   ```javascript
   var CONFIG = {
     supabaseUrl: 'https://your-project.supabase.co',
     anonKey: 'your-public-anon-key',
     ssoOrigins: ['https://cosylanguages.com']
   };
   ```
2. Or dynamically via global window variables:
   - `window.COSY_SUPABASE_URL`
   - `window.COSY_SUPABASE_ANON_KEY`
   - `window.COSY_SSO_ORIGINS`

### Role Assignment
User authorization roles (`admin`, `founder`, `owner`) MUST be set exclusively in the user's `app_metadata` dictionary inside Supabase Auth.
- **`app_metadata`** can only be written by Supabase project owners / service_role API keys.
- **`user_metadata`** is user-writable and is explicitly ignored by `cms-editor.js` and database RLS policies to prevent role spoofing.

---

## 3. Database Schema and Row Level Security (RLS)

The Founder CMS stores on-page overrides in the `cms_page_overrides` table.

### Table Definition
```sql
CREATE TABLE IF NOT EXISTS public.cms_page_overrides (
  pathname text PRIMARY KEY,
  content_overrides jsonb NOT NULL,
  updated_at timestamptz DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.cms_page_overrides ENABLE ROW LEVEL SECURITY;
```

### RLS Policies
```sql
-- Read access: Anyone (including anonymous users) can view page overrides
CREATE POLICY "Public read access for cms_page_overrides"
  ON public.cms_page_overrides
  FOR SELECT
  USING (true);

-- Write access: Only authenticated users with admin, founder, or owner role in app_metadata
CREATE POLICY "Admin write access for cms_page_overrides"
  ON public.cms_page_overrides
  FOR ALL
  TO authenticated
  USING (
    (auth.jwt() -> 'app_metadata' ->> 'role') IN ('admin', 'founder', 'owner')
  )
  WITH CHECK (
    (auth.jwt() -> 'app_metadata' ->> 'role') IN ('admin', 'founder', 'owner')
  );
```

---

## 4. Content Sanitization & Targeted Overrides

To prevent Cross-Site Scripting (XSS) and preserve internationalization state:

1. **Target Restriction:** Only elements explicitly tagged with `data-cms-key` (and without `data-i18n`) are editable or overrideable. Arbitrary CSS selector queries (e.g. `#id`, `.class`, `body`) and positional element indices are strictly disabled.
2. **Translation Protection:** Elements containing `data-i18n` attributes are skipped so that live multi-language dictionaries do not get overwritten by hardcoded text.
3. **HTML Sanitization:** Content overrides are filtered through a strict standalone tokenizer-based HTML sanitizer (`CMSEditor.sanitizeHtml`) both on client save and client render:
   - Allowed tags: `b`, `strong`, `i`, `em`, `u`, `br`, `span`, `a`, `ul`, `ol`, `li`, `p`.
   - All event handlers (`onerror`, `onload`, `onclick`), `<script>`, `<style>`, `<iframe>`, `<svg>`, `<img>`, and arbitrary attributes are stripped.
   - Links (`<a>`) are permitted only with explicit `https://`, `http://`, or `mailto:` protocols. Valid links automatically receive `rel="noopener noreferrer" target="_blank"`.
   - Content length is capped at 5,000 characters per element key.

---

## 5. Ecosystem SSO & Token Passing Security

### Origin Whitelisting (`ssoOrigins`)
The ecosystem link interceptor (`attachEcosystemLinkInterceptor`) passes session transfer tokens in URL fragments (`#access_token=...&refresh_token=...`) across COSY web applications.

- **Default State:** `ssoOrigins` is empty by default (`[]`). No URL parameters or hash fragments are appended to external links unless the target origin is explicitly whitelisted.
- **Strict Origin Matching:** Origins are checked using exact URL origin matching (`new URL(href, location.href).origin`). Loose substring or domain wildcard matches are rejected.
- **Same-Origin Exclusion:** Same-origin links do not append hash tokens because Supabase session tokens in `localStorage` / `cookies` are already accessible on the same origin.
- **Security Boundary:** Access and refresh tokens grant full authentication privileges. Passing session tokens to untrusted third-party origins would compromise user accounts. Tokens MUST ONLY be transmitted to explicitly trusted, founder-controlled origins over HTTPS.
