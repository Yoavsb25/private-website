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

## General Principles

- **Keep solutions simple.** Do not add caching, prefetch logic, backoff strategies, or extra abstraction layers unless explicitly requested. Simplest approach first.
- **Plan ≠ implement.** When asked to write a plan to a file, ONLY write it. When asked to execute a plan, ONLY execute it. Do not do both unless explicitly told to.

## UI / Design Guidelines

- Default to **bold, visually distinct** designs. Prefer gradient cards, strong contrast, and 3D/animation effects over subtle or conservative approaches.
- When referencing a section for redesign, assume the goal is a clear visual upgrade — not a minor tweak.

## Post-Implementation Checks

After any CSS or animation change, verify:
1. `backface-visibility` works correctly on flip cards (no text bleed-through)
2. Scroll events are not intercepted by click handlers on animated cards
3. Mobile responsiveness at 375px and 428px viewports
4. Run `npm run build` and `npm run lint` before committing

## Gotchas

- **Flip cards:** Back face text can bleed through if `backface-visibility: hidden` is missing or overridden by a parent `transform` context. Check both `.card-front` and `.card-back`.
- **Scroll + click conflicts:** Cards with `onClick` handlers can intercept scroll events on mobile. Use pointer event guards or touch event separation.
- **HashRouter:** Required for GitHub Pages — do not switch to BrowserRouter without updating the deployment config.
- **Animation variants:** All Framer Motion variants live in `src/lib/animations/variants.ts` — don't inline new variants in components.

## Deployment

GitHub Actions (`.github/workflows/deploy.yml`) deploys to GitHub Pages on push to `main`. The build output is the `dist/` directory.
