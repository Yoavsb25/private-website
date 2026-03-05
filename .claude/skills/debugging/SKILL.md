---
name: debugging
description: Use when debugging any issue in this React/Vite/TypeScript portfolio — TypeScript build errors, broken animations, Tailwind styling bugs, ESLint failures, Safari-specific behavior, or unexpected component state. Before proposing any fix.
---

# Project Debugging Guide

## Core Rule

**Read the actual file at the failing line before proposing any fix.** Do not rely on memory or previous context — files change and memory is wrong.

## Diagnostic Commands

Run in this order:

```bash
npm run type-check          # TypeScript errors: exact file:line
npm run lint                # ESLint: zero warnings = zero tolerance
npm run build               # Combined tsc + vite build
```

For "something changed and it broke":
```bash
git diff HEAD                               # See EXACTLY what changed — do this FIRST
git diff HEAD -- src/lib/constants/         # Focus on constants changes
```

For browser-specific issues: open DevTools → confirm the error/computed CSS → THEN read the component file.

## Project Gotchas

### Animation System Split

Two separate animation constant objects in `src/lib/constants/`:

| Constant | File | Used by |
|----------|------|---------|
| `ANIMATION_CONFIG` | `animation-config.ts` | Hero, Skills, Projects sections |
| `ANIMATION` | `timeline-config.ts` | **Timeline section ONLY** |

Both are exported from the barrel `src/lib/constants/index.ts`. Changing `animation-config.ts` does **not** affect Timeline stagger or duration.

If Timeline animations break after an `animation-config.ts` change, the issue is elsewhere. Check for barrel name collision:
```bash
grep -n "^export const ANIMATION" src/lib/constants/*.ts
```

### TypeScript Strict Mode — No Workarounds

- `noUnusedLocals` + `noUnusedParameters`: prefix unused params with `_` (e.g., `_event`)
- `string | null` from URL params or DOM APIs: add explicit null guard — never use `!` to force-cast
- Type errors are bugs. Do not cast away `string | null`, fix the data flow.

```tsx
// ❌ Never do this
allItems.filter(item => item.type === filter!)

// ✅ Correct null guard
const safeFilter: FilterType = (filter === 'education' || filter === 'experience') ? filter : 'all'
```

### ESLint Runs Separately from tsc

`npm run build` = `tsc && vite build`. ESLint is NOT part of build. A file can pass tsc but fail lint, or vice versa.

```bash
npm run type-check   # types only — fast feedback
npm run lint         # lint only
```

Both must pass before committing.

### Tailwind Dark Mode

`darkMode: 'class'` — colors only apply when `<html>` has the `dark` class.

If colors are wrong:
1. DevTools → `<html>` — does it have `dark` class?
2. `src/styles/globals.css` — are CSS variables (`--color-*`) defined for **both** `:root` and `.dark`?
3. Check the Tailwind class uses `hsl(var(--color-name))` — not a hardcoded hex.

### Safari 3D Flip Cards

`src/components/timeline/TimelineCard/TimelineCard.tsx` uses CSS 3D transforms with inline styles. Safari requires webkit prefixes that are NOT currently in the file:

```tsx
// Current (Chrome only):
style={{ transformStyle: 'preserve-3d' }}
style={{ backfaceVisibility: 'hidden' }}

// Required for Safari:
style={{ transformStyle: 'preserve-3d', WebkitTransformStyle: 'preserve-3d' }}
style={{ backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden' }}
```

If 3D flip works on Chrome but not Safari, this is the fix location.

### Vitest Does NOT Test Animations

`utils.test.ts` and `skills.test.ts` test pure functions only. Passing Vitest tests give **zero** information about whether Framer Motion animations, scroll behavior, 3D transforms, or stagger timing work. Test those in the browser.

## Fix Protocol

1. Get the exact error (message + file + line number)
2. Read the failing file at that exact line — not from memory
3. Form ONE hypothesis: "X is broken because Y"
4. Make the smallest possible change to test it
5. Run `npm run type-check && npm run lint` after every change

Never fix multiple things at once. Never suppress TypeScript errors with `!` or `as`. If a fix doesn't work after 2 attempts, read the code again — you've misidentified the root cause.
