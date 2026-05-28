# DevLogs Website

The official website for **DevLogs** — an independent Android studio that builds clean, fast apps for real users and ships them on Google Play. The site doubles as a live portfolio: the app catalogue is pulled directly from the studio's Google Play developer account at build/request time.

Live at **[devlogs.pro](https://www.devlogs.pro)**.

## Tech Stack

- **[Next.js 16](https://nextjs.org/)** (App Router, Turbopack) + **React 19**
- **TypeScript**
- **Tailwind CSS 4** with [shadcn/ui](https://ui.shadcn.com/) (Radix primitives)
- **[Motion](https://motion.dev/)** for animation
- **[google-play-scraper](https://github.com/facundoolano/google-play-scraper)** to surface the live app catalogue
- **[Vercel Analytics](https://vercel.com/analytics)**
- Deployed on **[Vercel](https://vercel.com/)**

## Getting Started

Requires Node.js 18+ and a package manager (the repo uses `pnpm` — a `pnpm-lock.yaml` is committed).

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Scripts

| Command      | Description                          |
| ------------ | ------------------------------------ |
| `pnpm dev`   | Start the development server         |
| `pnpm build` | Create a production build            |
| `pnpm start` | Run the production build locally     |
| `pnpm lint`  | Lint the codebase with ESLint        |

## Project Structure

```
app/                      # App Router routes
  apps/                   # Live app catalogue (from Google Play)
  studio/                 # About the studio
  contact/                # Contact form
  privacy-policy/         # Per-app privacy policies
  terms-and-conditions/   # Per-app terms
  actions/                # Server actions (e.g. contact form)
components/               # UI components (shadcn/ui + custom)
hooks/                    # Reusable React hooks
lib/
  site.ts                 # Central site config (name, contact, nav, Play Store URL)
  play-store.ts           # Server-only Google Play scraper (cached)
  contact-schema.ts       # Zod schema for the contact form
  legal/                  # Legal content
public/                   # Static assets (incl. app-ads.txt)
```

## Notes

- **App catalogue is live.** `lib/play-store.ts` fetches every app published under the studio's Google Play developer account. It is `server-only` and cached via `unstable_cache`; keep it out of client bundles.
- **`lib/site.ts` is the source of truth** for studio name, contact details, and navigation. Update it there rather than hardcoding values in components.
- **`public/app-ads.txt`** authorizes ad sellers and is served at the domain root for ad-network verification.

## Deployment

The site auto-deploys via Vercel. To deploy manually:

```bash
vercel --prod
```
