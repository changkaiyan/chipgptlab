# ChipGPT Lab Website

Corporate homepage for ChipGPT Lab, an AI for Chip collaborative optimization and pilot validation platform.

Live site:

https://changkaiyan.github.io/chipgptlab/

## Positioning

ChipGPT Lab focuses on specialized processors, RISC-V custom chips, AI accelerators, robot control chips, and industrial control chips.

The platform is not positioned as a short-term "one-click full chip generation" tool. It focuses on realistic, high-frequency chip development workflows: helping teams optimize architecture, RTL, compiler, driver, simulation model, and verification flow on top of existing designs.

## Content Editing

Most page content is driven by TOML:

```text
content/home.toml
```

Edit this file to update:

- navigation
- hero copy
- metrics
- capability cards
- workflow steps
- use cases
- contact options
- footer links

The React page reads this file through:

```text
lib/home-content.ts
```

## Development

Install dependencies:

```bash
npm install
```

Start local development:

```bash
npm run dev
```

Open:

```text
http://127.0.0.1:3000
```

## Build

Run lint:

```bash
npm run lint
```

Run production build:

```bash
npm run build
```

If `npm run build` is run while `npm run dev` is already running, restart the dev server afterward. Next.js rewrites `.next/`, which can make the running dev server point to stale CSS files.

## Deployment

Deployment uses GitHub Pages via GitHub Actions:

```text
.github/workflows/deploy.yml
```

The site is exported as a static Next.js site. GitHub Pages path support is configured in:

```text
next.config.mjs
```

## Search Indexing

The site is public for GitHub Pages hosting, but asks search engines not to index it:

- `public/robots.txt`
- `robots: noindex, nofollow` in `app/layout.tsx`

This is not access control. Anyone with the URL can still open the site.
