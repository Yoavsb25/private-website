# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev          # Start Vite dev server
npm run build        # TypeScript check + production build (tsc && vite build)
npm run preview      # Preview production build locally
npm run lint         # ESLint (zero warnings allowed)
npm run format       # Prettier format src/**/*.{ts,tsx,css,md}
npm run type-check   # Run tsc --noEmit without building
npm run test         # Run Vitest unit tests
npm run test:watch   # Vitest in watch mode
npm run test:e2e     # Playwright E2E tests
```

## Architecture

Single-page portfolio site built with React 18 + TypeScript + Vite. Uses HashRouter for GitHub Pages compatibility.

**Data flow:** Content lives in `src/data/` (portfolio, experience, education, projects, skills, contact) as static TypeScript files. Sections import directly from data files — there's no API or state management layer.

**Section-based layout:** `App.tsx` composes five full-page sections in order: `Hero → Skills → Timeline → Projects → Contact`. Each section is in `src/sections/`.

**Timeline component:** The most complex part of the app. `src/sections/Timeline.tsx` merges experience and education entries, sorts them chronologically via helpers in `src/lib/helpers/timeline-helpers.ts`, and supports filter chips (All/Education/Experience). Cards in `src/components/timeline/TimelineCard/` are expandable.

**Animation system:** All Framer Motion variants are centralized in `src/lib/animations/variants.ts`. Durations, delays, and hover states are configured in `src/lib/constants/animation-config.ts`. Custom Tailwind animations (fade-in, slide-in-left/right, shimmer, etc.) are defined in `tailwind.config.js`.

**Dark mode:** Class-based via Tailwind (`darkMode: 'class'`). The `DarkModeToggle` component in `src/components/features/` handles toggling.

**Path alias:** `@` maps to `src/` — configured in both `vite.config.ts` and `tsconfig.json`.

## Code Style

- Prettier: no semicolons, single quotes, 100-char print width, no arrow parens
- ESLint enforces zero warnings; runs on `.ts`/`.tsx` files
- All new constants should go in the appropriate file under `src/lib/constants/`
- Icons are mapped in `src/lib/helpers/icon-helpers.tsx`

## Deployment

GitHub Actions (`.github/workflows/deploy.yml`) deploys to GitHub Pages on push to `main`. The build output is the `dist/` directory.
