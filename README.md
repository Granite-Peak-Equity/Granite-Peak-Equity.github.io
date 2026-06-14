# Granite Peak Equity — Website

Marketing site for Granite Peak Equity, a Bozeman, Montana family-owned firm
investing in and managing multifamily real estate. Built with **Next.js 16
(App Router) + Tailwind CSS v4**, exported as a fully static site for
**GitHub Pages**.

## Pages

| Route          | Page                                              |
| -------------- | ------------------------------------------------- |
| `/`            | Home — hero, metrics, about, featured portfolio   |
| `/investors`   | Investor info — process, track record, FAQ        |
| `/portfolio`   | All 10 properties                                 |
| `/team`        | Leadership + operations bios                       |
| `/acquisition` | Acquisition criteria, target-market map, deal form |

## Local development

```bash
npm install
npm run dev      # http://localhost:3000
```

## Build (static export)

```bash
npm run build    # outputs static HTML/CSS/JS to ./out
```

`out/` is what gets published to GitHub Pages.

## Editing content

- **Properties & team bios:** `lib/data.ts`
- **Site name, emails, nav links, copyright:** `lib/site.ts`
- **Page copy:** the relevant file in `app/<page>/page.tsx`
- **Images:** `public/uploads/` (logo, hero photo, Chad's headshot)

## Deploying to GitHub Pages

1. Push this folder to a GitHub repository.
2. In the repo: **Settings → Pages → Build and deployment → Source =
   GitHub Actions**.
3. Push to `main`. The workflow in `.github/workflows/deploy.yml` builds and
   deploys automatically.

### Important: base path

GitHub Pages serves a project repo at `https://USER.github.io/REPO/`, which
requires a base path so CSS/JS/images resolve correctly.

- **Custom domain** (e.g. `www.granitepeakequity.com`) or a **user page**
  (`USER.github.io`): nothing to do — leave the base path unset.
- **Project page** (`USER.github.io/REPO`): uncomment the
  `NEXT_PUBLIC_BASE_PATH` line in `.github/workflows/deploy.yml`.

### Custom domain

To use `granitepeakequity.com`, create `public/CNAME` containing just the
domain, e.g.:

```
www.granitepeakequity.com
```

then configure the domain under **Settings → Pages**.

## Still to do before launch

- **Wire up the forms.** The deal-submission and contact actions currently show
  a success state but don't send anywhere (a static site has no server). See the
  `INTEGRATION POINT` comment in `components/DealForm.tsx`. Easiest option:
  point the form at a [Formspree](https://formspree.io) endpoint.
- **Investor Login** button links to `#` — point it at the real investor portal
  (in `components/Nav.tsx`).
- **Photos:** property cards and the Brad/Alex/Sally headshots show
  "Photo Coming Soon" placeholders. Drop real images in `public/uploads/` and
  reference them in `lib/data.ts`.
- Replace the favicon (`app/favicon.ico`) with the Granite Peak mark.
