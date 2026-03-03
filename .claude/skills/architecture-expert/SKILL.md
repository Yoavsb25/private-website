# Architecture Expert

user-invocable: false

## Project Overview

React 18 + TypeScript + Vite single-page portfolio. Uses HashRouter for GitHub Pages. No state management layer — all content is static TypeScript data files.

## Directory Rules

### Where things go

| What | Where |
|------|-------|
| Pure utility functions | `src/lib/helpers/` |
| React UI components | `src/components/` |
| Static content/data (arrays, objects) | `src/data/` |
| Animation variants (Framer Motion) | `src/lib/animations/variants.ts` |
| Timing constants | `src/lib/constants/animation-config.ts` |
| Icon components | `src/lib/helpers/icon-helpers.tsx` |
| Tailwind custom animations | `tailwind.config.js` |

### Component subdirectory guide

- `src/components/layout/` — Section, Container, SectionHeader wrappers
- `src/components/features/` — DarkModeToggle and other interactive features
- `src/components/typography/` — Heading, Text primitives
- `src/components/timeline/` — Timeline-specific card components
- `src/components/ui/` — shadcn/ui primitives (badge, button, card, etc.)

### Barrel exports

Every component subdirectory has an `index.ts` barrel. Always import from the barrel, never from deep paths:
- `from '@/components/ui'` (not `from '@/components/ui/card'`)
- `from '@/components/layout'`
- `from '@/lib/helpers'`
- `from '@/lib/constants'`
- `from '@/lib/animations'`

## Key Patterns

### Data files (`src/data/`)
- Export pure TypeScript data: arrays and objects only
- No JSX, no React imports
- Types tightly coupled to the data can live in the same file (e.g., `SkillItem`, `SkillGroup` in `skills.tsx`)

### Icon helpers (`src/lib/helpers/icon-helpers.tsx`)
- All custom icon components live here (e.g., `PlaywrightIcon`)
- Lucide icons are imported directly from `lucide-react`
- `iconMap` maps string keys → lucide icon components for dynamic lookup
- `getIcon(name)` returns a component by name with fallback to `ExternalLink`

### Helper functions (`src/lib/helpers/`)
- Pure functions only — no JSX, no side effects
- Helpers are re-exported via `src/lib/helpers/index.ts`
- Never put React components in helpers

### Animation system
- Framer Motion variants → `src/lib/animations/variants.ts`
- Duration/delay/hover values → `src/lib/constants/animation-config.ts`
- Helper factories (`createStaggerContainerAnimation`, `createCardHoverAnimation`, etc.) → `src/lib/helpers/animation-helpers.ts`
- Custom Tailwind keyframes → `tailwind.config.js`

### Dark mode
- Tailwind class-based (`darkMode: 'class'`)
- Toggle via `DarkModeToggle` in `src/components/features/`
- Always provide dark: variants for background, text, and border classes

### Constants
- All string/number constants → `src/lib/constants/`
- Import via `from '@/lib/constants'` barrel

## Section Layout

`App.tsx` renders 5 sections in order: Hero → Skills → Timeline → Projects → Contact.
Each section is in `src/sections/` and imports data directly from `src/data/`.

## Code Style

- No semicolons, single quotes, 100-char line width (Prettier)
- Zero ESLint warnings allowed
- Path alias `@` maps to `src/`
- TypeScript strict mode — no `any`, explicit return types on exported functions

## Common Mistakes to Avoid

### Imports — always use barrel files
Never import from a deep path inside a barrel directory:
```ts
// ❌ Wrong
import { Button } from '@/components/ui/button'
// ✅ Correct
import { Button } from '@/components/ui'
```
This applies to all barrel directories: `@/components/ui`, `@/components/layout`, `@/components/features`, `@/lib/helpers`, `@/lib/constants`, `@/lib/animations`.

### Return types — required on every exported function and component
Every exported function must have an explicit return type. Use type-only imports to keep it clean:
```ts
// Hooks
export function useLenis(): void { ... }
export function useMagnetic(): MagneticReturn { ... }  // define a type alias if inline is too long

// Components (import ReactElement, not JSX.Element, to avoid adding a React namespace import)
import { type ReactElement } from 'react'
export function Footer(): ReactElement { ... }
export function LoadingScreen(...): ReactElement | null { ... }
```

### Dependencies — no pre-release versions in production
Never use `-dev`, `-alpha`, `-beta`, or `-rc` suffixes in `dependencies` in `package.json`. Always pin to the latest stable release tag.
