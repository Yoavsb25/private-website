# Security & Accessibility Expert

user-invocable: false

## Security Rules

### Never Do
- `dangerouslySetInnerHTML` — never. Use text content or a sanitization library if HTML rendering is required
- `eval()`, `new Function()`, or dynamic `import()` of user-supplied strings
- Construct URLs from user input without validation
- Store sensitive values in `localStorage` (it is readable by any JS on the page)
- Expose API keys in client code — only `VITE_`-prefixed env vars are safe to bundle

### External Links — Always
Every `<a>` with `target="_blank"` must have `rel="noopener noreferrer"`:
```tsx
// ❌ Wrong
<a href={url} target="_blank">Link</a>

// ✅ Correct
<a href={url} target="_blank" rel="noopener noreferrer">Link</a>
```

### href Safety
- Never pass user-supplied strings directly into `href` — validate that they start with `https://` or a known domain
- Use `mailto:` links only for static email addresses from `src/data/`

---

## Accessibility Rules (WCAG 2.1 AA)

### Interactive Elements
Every button, link, and input must have a visible text label OR an `aria-label`:
```tsx
// ❌ Wrong — icon-only button with no label
<button onClick={toggle}><MoonIcon /></button>

// ✅ Correct
<button onClick={toggle} aria-label="Toggle dark mode"><MoonIcon /></button>
```

### Keyboard Navigation
Clickable `<div>` and `<span>` are not keyboard accessible. Use `<button>` instead, or add:
```tsx
role="button"
tabIndex={0}
onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') handleClick() }}
```

### Images
- Meaningful images: `alt="Yoav presenting at React Summit"` (describes content)
- Decorative images: `alt=""` (tells screen readers to skip)
- Never omit `alt`

### Semantic HTML
Use the right element for the job:
- Page landmark: `<main>`, `<nav>`, `<header>`, `<footer>`, `<section aria-label="Timeline">`
- Headings: one `<h1>` per page, logical hierarchy (h1 → h2 → h3)
- Lists: `<ul>`/`<ol>` for groups of items, not divs

### Motion / Reduced Motion
Respect `prefers-reduced-motion`. All Framer Motion animations must check:
```tsx
import { prefersReducedMotion } from '@/lib/animations'
// Or use Framer's built-in hook:
import { useReducedMotion } from 'framer-motion'
const shouldReduce = useReducedMotion()
```
This is already handled in `src/lib/animations/` — use the existing utility, don't add new unchecked animations.

### Focus Management
- After opening a modal or drawer, focus must move to the first interactive element inside it
- After closing, focus returns to the trigger element
- Use `autoFocus` prop or `ref.current.focus()` in a `useEffect`

### Color
- Never use color alone to convey state — pair with text, icon, or pattern
- Do not hardcode colors that break dark mode — always provide `dark:` variants
