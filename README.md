# TechKrystle

Warranty and protection plan decision guides. Next.js (App Router) + TypeScript + Tailwind CSS v4, deployed on Vercel.

## Structure

- `data/plans.ts` — structured pricing/terms data for every brand/device "is it worth it" page. Edit this file for pricing refreshes; prose lives separately in each page template.
- `data/guides.ts` — comparison and situational guide content.
- `app/is-it-worth-it/[slug]` — brand/device verdict pages.
- `app/guides/[slug]` — comparison/situational/how-to pages.
- `app/quiz` — interactive decision quiz.
- `lib/config.ts` — site-wide constants: BASE_URL (must match actual DNS/www setup), GA measurement ID.

## Refresh cadence

Pricing on these plans changes. Aim to do a refresh pass every 2-3 months: web-search each brand's current pricing/terms, update `data/plans.ts` in one batch, redeploy.

## Local dev

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

Uses `--webpack` (not Turbopack) — required to correctly catch async `params` type errors in Next.js 16 dynamic routes.
