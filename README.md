# personal-portfolio

![React](https://img.shields.io/badge/React-18.2.0-7C3AED?style=for-the-badge&logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.2.2-7C3AED?style=for-the-badge&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-7.2.6-7C3AED?style=for-the-badge&logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.3.6-A78BFA?style=for-the-badge&logo=tailwindcss&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-12.x-A78BFA?style=for-the-badge&logo=framer&logoColor=white)
![React Router](https://img.shields.io/badge/React_Router-6.x-A78BFA?style=for-the-badge&logo=reactrouter&logoColor=white)
![Vitest](https://img.shields.io/badge/Vitest-4.x-6B7280?style=for-the-badge&logo=vitest&logoColor=white)
![Playwright](https://img.shields.io/badge/Playwright-1.40-6B7280?style=for-the-badge&logo=playwright&logoColor=white)
![GitHub Pages](https://img.shields.io/badge/GitHub_Pages-deployed-6B7280?style=for-the-badge&logo=githubpages&logoColor=white)
![Status](https://img.shields.io/badge/Status-Active-7C3AED?style=for-the-badge)

> Single-page portfolio site — hero, skills, filterable timeline, and project showcase; deployed automatically to GitHub Pages via CI/CD.

---

## Overview

A personal portfolio built with React 18 and TypeScript, structured as five full-page sections: Hero → Skills → Timeline → Projects → Contact. All content — work experience, education, projects, and skills — lives in static TypeScript files under `src/data/`, with no API or state management layer. Live at **[yoavsb25.github.io/private-website](https://yoavsb25.github.io/private-website/)**.

## Features

- Five full-page sections rendered in order: Hero → Skills → Timeline → Projects → Contact
- Dark mode via Tailwind's class strategy with HSL CSS variables throughout
- Centralized Framer Motion animation system — all variants defined in `src/lib/animations/variants.ts`, never inlined
- Timeline merges experience and education entries, sorts them chronologically, filterable by type (All / Experience / Education)
- Expandable cards for both timeline entries and project details
- Smooth scrolling powered by Lenis
- Responsive layout from 375 px to 1440 px
- GitHub Actions CI/CD — every push to `main` triggers a production build and deploy

## Architecture

```
src/data/*.ts  ──▶  src/sections/*.tsx  ──▶  App.tsx  ──▶  index.html
     │                       │
     │ TypeScript static      │ Animation system
     │ exports                ├── src/lib/animations/variants.ts       (Framer Motion variants)
     │                        ├── src/lib/constants/animation-config.ts  (general durations/delays)
     └────────────────────────└── src/lib/constants/timeline-config.ts  (Timeline-specific ANIMATION)
```

**Two animation systems run in parallel:**
- `ANIMATION_CONFIG` (`animation-config.ts`) — site-wide durations, delays, and hover state values used across all sections
- `ANIMATION` (`timeline-config.ts`) — constants used exclusively by the Timeline section and its card sub-components

**Timeline data flow:** `experience.ts` + `education.ts` → `timeline-helpers.ts` (merge + chronological sort) → `Timeline.tsx` (filter chips) → `TimelineCard/` (expandable cards with 8 sub-components)

## Tech Stack

| Layer | Technology | Version |
|---|---|---|
| Framework | React | 18.2.0 |
| Language | TypeScript | 5.2.2 |
| Build | Vite | 7.2.6 |
| Styling | Tailwind CSS | 3.3.6 |
| Animation | Framer Motion | 12.23.x |
| Routing | React Router DOM | 6.30.3 (HashRouter) |
| Smooth Scroll | Lenis | 1.3.17 |
| Icons | Lucide React + React Icons | 0.294.0 / 5.6.0 |
| Class Merging | clsx + tailwind-merge | 2.1.1 / 3.4.0 |
| Unit Tests | Vitest + Testing Library | 4.0.15 / 14.x |
| E2E Tests | Playwright | 1.40.1 |
| Linting | ESLint | 8.55.0 |
| Formatting | Prettier | 3.1.1 |
| Deployment | GitHub Pages | — |

## Project Structure

```
private-website/
├── .github/
│   └── workflows/
│       └── deploy.yml          # CI/CD: build + deploy to GitHub Pages on push to main
├── src/
│   ├── data/                   # All site content as static TypeScript exports
│   │   ├── portfolio.ts        # Personal info, bio, social links, CV URL
│   │   ├── experience.ts       # Work history entries
│   │   ├── education.ts        # Education entries
│   │   ├── projects.ts         # Portfolio work items (WorkItem interface)
│   │   ├── skills.ts           # Skill categories with icon components
│   │   └── contact.ts          # Contact methods (email, social, form)
│   ├── sections/               # Five full-page section components
│   │   ├── Hero.tsx
│   │   ├── Skills.tsx
│   │   ├── Timeline.tsx        # Merges experience + education; filter chips
│   │   ├── Projects.tsx
│   │   └── Contact.tsx
│   ├── components/
│   │   ├── features/           # DarkModeToggle, Navigation, ScrollProgress, LoadingScreen
│   │   ├── layout/             # Container, Section, SectionHeader, Footer
│   │   ├── projects/           # ProjectCard — expandable project detail cards
│   │   ├── timeline/           # TimelineCard/, FilterChips, TimelinePoint, TimelineSpine
│   │   └── ui/                 # badge, button, card primitives
│   ├── lib/
│   │   ├── animations/
│   │   │   └── variants.ts     # All Framer Motion variant definitions (never inline)
│   │   ├── constants/          # animation-config, timeline-config, layout, navigation, ui
│   │   ├── helpers/            # timeline-helpers, icon-helpers, data-helpers, animation-helpers
│   │   └── types/              # timeline.ts and shared type definitions
│   ├── App.tsx                 # Root — composes five sections in HashRouter
│   └── main.tsx                # Entry point
├── index.html
├── vite.config.ts              # Path alias @ → src/, dynamic base path for GitHub Pages
├── tailwind.config.js          # Dark mode class strategy, custom animations, HSL theme
├── tsconfig.json
└── package.json
```

## Getting Started

**Prerequisites:** Node 18+, npm

```bash
git clone https://github.com/Yoavsb25/private-website.git
cd private-website
npm install
npm run dev
```

The dev server starts at `http://localhost:5173`.

## Available Scripts

| Script | Description |
|---|---|
| `npm run dev` | Start Vite dev server |
| `npm run build` | TypeScript check (`tsc`) then production build |
| `npm run preview` | Serve the production build locally |
| `npm run lint` | ESLint — zero warnings enforced |
| `npm run format` | Prettier — formats `src/**/*.{ts,tsx,css,md}` |
| `npm run type-check` | `tsc --noEmit` — type check without building |
| `npm run test` | Vitest unit tests |
| `npm run test:watch` | Vitest in watch mode |
| `npm run test:coverage` | Vitest with coverage report |
| `npm run test:e2e` | Playwright end-to-end tests |

## Deployment

Push to `main` triggers the GitHub Actions workflow (`.github/workflows/deploy.yml`). The workflow installs dependencies with `npm ci`, runs `npm run build` (TypeScript check + Vite bundling), and deploys the `dist/` directory to GitHub Pages using the official `actions/deploy-pages` action. No manual steps required.

**Live:** [yoavsb25.github.io/private-website](https://yoavsb25.github.io/private-website/)

---

[![LinkedIn](https://img.shields.io/badge/LinkedIn-Yoav_Sborovsky-6B7280?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/yoav-sborovsky/)
