# Invoke — Public Sector website (pubsec 2.0)

The 2026 rebuild of [invokepublic.com](https://www.invokepublic.com/). Dark
graphite + warm amber. Built to feel like the federal market's most modern
firm — not its busiest one.

## Quick start

```bash
git clone https://github.com/Marcellous11/pubsec2.0.git
cd pubsec2.0
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). The dev server uses
Turbopack and hot-reloads on save.

**Prereqs:** Node 20+ (we're testing on 23), npm 10+.

## Stack

| Layer       | Choice                                    |
| ----------- | ----------------------------------------- |
| Framework   | Next.js 16 (App Router, Turbopack, RSC)   |
| Language    | TypeScript (strict)                       |
| Styling     | Tailwind CSS v4 (`@theme` in `globals.css`) |
| Motion      | `motion/react` (Framer Motion successor)  |
| Icons       | `lucide-react`                            |
| Utilities   | `clsx` + `tailwind-merge` (`src/lib/cn.ts`) |
| Fonts       | Geist Sans + Geist Mono (`next/font`)     |

## Design system

The token system comes from `design-source/wip-themes-invoke2026.pptx` and
is wired into Tailwind via `src/app/globals.css` (`:root` + `@theme inline`).

| Token             | Value      | Use                                    |
| ----------------- | ---------- | -------------------------------------- |
| `--bg`            | `#0E1012`  | page background                        |
| `--bg-raised`     | `#151719`  | hovered/raised surfaces                |
| `--bg-surface`    | `#1C1E21`  | cards / surface elevation              |
| `--border`        | `#2B2E32`  | hairline rules, divider grids          |
| `--border-strong` | `#3E4348`  | emphasized borders, button outlines    |
| `--text`          | `#F4F5F7`  | body text                              |
| `--text-muted`    | `#A1A5A9`  | secondary copy, descriptions           |
| `--text-dim`      | `#6E7276`  | metadata, mono labels, eyebrows        |
| `--accent`        | `#EBA941`  | the single warm amber accent           |
| `--ok` / `--bad`  | green/red  | semantic states                        |

**Cardinal rule (from the deck):** the amber never fills a background — it
only marks the one thing on a screen that deserves attention. Resist the
urge to use it decoratively.

## What's where

```
src/
├── app/
│   ├── layout.tsx          # root shell, fonts, Nav + Footer
│   ├── page.tsx            # homepage (composes home/* sections)
│   ├── globals.css         # tokens, Tailwind theme, motion utilities
│   ├── about/              # interior routes (page.tsx in each)
│   ├── capabilities/
│   ├── contact/
│   ├── services/
│   └── vehicles/
├── components/
│   ├── home/               # homepage sections (Hero, Proof, Services, …)
│   ├── site/               # global chrome (Nav, Footer)
│   └── ui/                 # primitives (Button, Container, Section, Eyebrow, Logo, RuleInView, PageHeader)
└── lib/
    └── cn.ts               # className merge utility
```

## Editing patterns

- **Adding a homepage section:** create `src/components/home/MySection.tsx`,
  wrap it in `<Section accentRule>` from `@/components/ui/Section`, drop an
  `<Eyebrow number="08" label="…" total="09 / 09" />` at the top, then add
  it to `src/app/page.tsx` in the order you want.
- **Adding an interior page:** create `src/app/<route>/page.tsx`, use
  `<PageHeader number=… kicker=… title=… subtitle=… />` then `<Section>`s
  underneath. Add the route to the `links` array in
  `src/components/site/Nav.tsx` if it should appear in the top nav.
- **Use the existing primitives.** Before adding a new layout helper, check
  `src/components/ui/`. Most layouts can be built from `Section` +
  `Container` + the typography classes already in `globals.css`.

## Hero motion

The hero ambient motion lives in `src/components/home/HeroAurora.tsx`:
cursor-tracked amber spotlight, scrolling hairline grid, slow conic radar
sweep, and crossing scan lines. All transform/opacity, compositor-only,
respects `prefers-reduced-motion`. If it ever looks janky, that's the file
to look at.

## Working together

Suggested flow for two-person collaboration:

1. `git pull` first thing every session.
2. Branch off `main`: `git checkout -b feat/<short-thing>` (or `fix/…`,
   `chore/…`).
3. Push the branch and open a PR on GitHub. One quick review before merge.
4. Merge to `main` (squash or rebase — whichever you prefer, just be
   consistent).
5. Direct commits to `main` are fine for trivial copy tweaks.

Don't commit `node_modules/`, `.next/`, `.open-next/`, or anything in
`.env*` — already covered by `.gitignore`.

## Scripts

| Script                  | What it does                                          |
| ----------------------- | ----------------------------------------------------- |
| `npm run dev`           | Local dev server with Turbopack on `localhost:3000`   |
| `npm run build`         | Production Next.js build                              |
| `npm run start`         | Run the production build locally                      |
| `npm run build:worker`  | Build for Cloudflare Workers (OpenNext bundling)      |
| `npm run preview`       | Build + run locally with `wrangler dev`               |
| `npm run deploy`        | Build + `wrangler deploy` to Cloudflare Workers       |
| `npm run cf-typegen`    | Generate `cloudflare-env.d.ts` from `wrangler.jsonc`  |

## Deployment

Currently being set up on Cloudflare. Once the deploy pipeline is locked
in, every push to `main` auto-deploys; PR branches get preview URLs.
Update this section once the production URL is live.

## License

Proprietary — internal Invoke project. Don't redistribute.
