# Governide

Governide is a personal website and blog built for fast performance, clean typography, and easy content updates.

## Features

- ✅ Modern, responsive personal website
- ✅ Blog with Markdown and MDX support
- ✅ SEO-ready pages with metadata and sitemap support
- ✅ Contact page and polished navigation
- ✅ Cloudflare Workers deployment ready
- ✅ Simple content structure for easy editing

## Getting Started

From the project root:

```bash
npm install
npm run dev
```

Then open `http://localhost:4321` in your browser.

## Project Structure

- `src/pages/` — top-level site routes like `index.astro`, `about.astro`, and `contact.astro`
- `src/components/` — shared UI components such as header, footer, and metadata
- `src/layouts/` — layouts used for blog posts and content pages
- `src/content/blog/` — blog posts written in Markdown/MDX
- `public/` — static assets like images and fonts
- `src/styles/` — global CSS and design tokens

## Commands

| Command           | Action                         |
| :---------------- | :----------------------------- |
| `npm install`     | Install dependencies           |
| `npm run dev`     | Start local development server |
| `npm run build`   | Build production output        |
| `npm run preview` | Preview the built site locally |
| `npm run deploy`  | Deploy to Cloudflare Workers   |

## Customize Governide

- Update `src/consts.ts` with your site title and description
- Edit `src/pages/index.astro` for homepage content
- Add blog posts in `src/content/blog/`
- Change social links in `src/components/Header.astro` and `src/components/Footer.astro`
- Use `src/pages/about.astro` and `src/pages/contact.astro` for personal pages

## Deployment

This site is configured to deploy with Cloudflare using `wrangler`.

```bash
npm run deploy
```

## Notes

This site is built with a modern static site framework, and the structure is designed to keep content and layout easy to update. Static assets belong in `public/`, and shared UI elements are located in `src/components/`.

## Want to learn more?

Explore the framework documentation if you want to extend the site with additional integrations or features.

Important Notes
GovernIDE Deployment Commands (Astro + Cloudflare)
This document contains the commands used during development, preview, troubleshooting, and deployment.

Install dependencies
npm install
Run development server
npm run dev
Build project
npm run build
Preview locally (Astro)
npm run preview
Clean build (troubleshooting)
rm -rf dist
rm -rf .wrangler
npm run build
npm run preview
Cloudflare login
npx wrangler login
Deploy to Cloudflare
npx wrangler deploy
Recommended package.json scripts
"dev": "astro dev",
"build": "astro build",
"preview": "astro preview",
"deploy": "astro build && wrangler deploy"
Useful checks
cat dist/server/wrangler.json
head -80 dist/server/entry.mjs
curl -i http://localhost:8787/
Important Notes
Do NOT keep a manual wrangler.json in the project root unless required.
Allow Astro to generate dist/server/wrangler.json automatically.
Always verify npm run preview works before deploying.
