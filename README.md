# Anubhab Portfolio — ramx.in-inspired starter

A close visual recreation of the current `ramx.in` style, adapted into a broader personal portfolio that can gradually evolve into product case studies, writing, experiments, AI work, design notes, and anything else worth showcasing.

## Stack

- Next.js 16.3.4 (App Router)
- React 19.2.7
- TypeScript
- Tailwind CSS 4
- Plain CSS design tokens for precise visual styling
- Remix Icon React (`@remixicon/react`)
- Oneko pixel cat companion that follows the cursor
- Native embedded PDF resume viewer

The structure intentionally stays simple. Most content can be changed from one data file.

## Run it

```bash
npm install
npm run dev
```

Then open `http://localhost:3000`.

## First files to edit

### 1. Almost all portfolio content

`src/data/site.ts`

Change the name, headline, bio, email, social links, experience, homepage blog entries, Development / Personal cards, quote, and work/case-study cards.

### 2. Homepage structure

`src/components/home.tsx`

Use this when adding or reordering sections later — Product Case Studies, About Me, Experiments, Photography, Recommendations, etc.

### 3. Styling

`src/app/globals.css`

Contains the light-only visual system, responsive layout, cards, sticky nav, animated search pill, PDF viewer styling, and reference-site spacing.

### 4. Landing avatar + favicon

- `public/anubhab.png` — current homepage avatar
- `src/app/icon.png` — favicon/app icon generated from the same avatar

### 5. Resume

- `src/app/resume/page.tsx` — resume page layout
- `public/resume.pdf` — PDF displayed directly in the browser viewer

Replace `public/resume.pdf` whenever the resume changes; the page does not need to be rewritten.

### 6. Work / case studies

`src/app/work/page.tsx`

This stays deliberately mixed rather than being a strictly engineering-project page, so it can evolve naturally into a product portfolio.


## Desktop ~99% calibration

The desktop build includes a dedicated calibration block in `src/app/globals.css` under `@media (min-width: 721px)`. It reproduces the visual scale that closely matched the reference when this project was viewed at Chrome ~99.25%, while keeping the browser itself at 100%.

- Desktop fixed dimensions, typography, gaps and spacing are scaled to ~99.25%, with larger geometry rounded to practical whole pixels and smaller type/icon values rounded in quarter-pixel steps where needed.
- 1px borders/hairlines are intentionally kept crisp.
- Animation durations are not scaled because browser zoom does not change time.
- Mobile rules (`max-width: 720px`) are intentionally left untouched.
- Remove the marked **Desktop calibration** block to revert the scale without affecting the rest of the styling.

## Included interactions

- sticky navigation
- responsive desktop/mobile layout
- light-only visual theme
- expanding “Search this portfolio” nav pill
- `⌘ K` / `Ctrl K` search palette
- email copy interaction
- animated Oneko pixel cat that follows the cursor
- embedded PDF resume viewer
- Work, Blog and Resume routes

## Suggested next steps

1. Replace placeholder social URLs.
2. Refine the homepage bio and experience entries.
3. Replace starter work cards with real projects and product case studies.
4. Add dedicated case-study routes such as `/work/emergency-mode`.
5. Build out individual Books, Movies, Setup and Gears pages only when there is enough content to justify them.

## Attribution

The visual direction is intentionally based on `ramx.in`. The user supplied the `sleek-portfolio` source archive, and the upstream repository is MIT licensed by Ramkrishna Swarnkar. The original MIT license is preserved in `LICENSE`.
