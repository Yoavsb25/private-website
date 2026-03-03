# Clean Code Expert

user-invocable: false

## Principles for This Codebase

### DRY — Don't Repeat Yourself
- If the same logic appears 3+ times, extract it to a helper in `src/lib/helpers/`
- If the same JSX pattern appears in 2+ components, extract it to a component in `src/components/`
- Exception: duplication is acceptable when contexts are different enough that abstracting would force unnatural coupling

### Component Complexity
- Max ~150 lines per component file. If longer, split into sub-components
- One responsibility per component: a card renders a card, not a card + modal + tooltip
- If a JSX block is >20 lines and has a clear label (e.g. "header", "footer", "metadata"), extract it
- Sections (`src/sections/`) may be longer since they compose many sub-components

### Custom Hooks
- Extract to a custom hook when: logic involves multiple `useState`/`useEffect`, or when the same stateful logic is needed in 2+ components
- Always prefix with `use`: `useScrollProgress`, `useMagnetic`
- Hooks live in `src/hooks/` (feature hooks) or colocated if single-use
- A hook should do one thing. `useAnimatedCounter` ≠ `useAnimatedCounterWithModal`

### Naming
- Variables: descriptive, no abbreviations. `isLoading` not `ld`. `timelineEntries` not `data`
- Booleans: `is`, `has`, `should` prefix. `isExpanded`, `hasError`, `shouldAnimate`
- Event handlers: `handle` prefix. `handleClick`, `handleKeyDown`, `handleFilterChange`
- Props interfaces: `<ComponentName>Props`. `TimelineCardProps`, `SectionHeaderProps`
- Constants: UPPER_SNAKE_CASE for module-level, camelCase for local

### No Magic Values
- Never hardcode pixel values, timeouts, z-indices, or breakpoints inline
- All such values → named constants in `src/lib/constants/`
- Example: `ANIMATION.DURATION.FAST` not `0.15`, `Z_INDEX.MODAL` not `999`

### Prop Drilling
- Max 2 levels of prop drilling. If a prop passes through 3+ components without being used at intermediate levels, lift to a shared ancestor or extract a context
- For theme/dark mode: already handled via Tailwind classes, not props

### Function Size
- Keep functions under ~30 lines. If longer, extract named sub-functions
- Each function does exactly one thing — its name should describe it completely
- Helper functions in `src/lib/helpers/` must be pure (no side effects, no React)

### What NOT to Do
- No commented-out code in committed files
- No `TODO` comments without a linked issue
- No `console.log` in committed code (use the browser devtools)
- No `as any` or `// @ts-ignore` — fix the type properly
