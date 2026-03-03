# Performance Expert

user-invocable: false

## Framer Motion

### Use Variants, Not Inline Objects
Inline animation objects create new references on every render:
```tsx
// ❌ Wrong — new object every render
<motion.div animate={{ opacity: 1, y: 0 }} />

// ✅ Correct — stable reference from variants.ts
import { fadeInUp } from '@/lib/animations'
<motion.div variants={fadeInUp} initial="hidden" animate="visible" />
```
All variants go in `src/lib/animations/variants.ts`.

### Avoid `layout` on High-Frequency Updates
`layout` prop triggers layout recalculation. Only use it when elements genuinely change size/position (e.g. expanding cards). Never on list items that re-render on scroll.

### AnimatePresence Placement
Wrap only the conditionally-rendered element, not the entire parent:
```tsx
// ❌ Wrong — too broad
<AnimatePresence><Parent><ConditionalChild /></Parent></AnimatePresence>

// ✅ Correct
<Parent><AnimatePresence><ConditionalChild /></AnimatePresence></Parent>
```

### Scroll-Linked Animations
Use `useMotionValue` + `useTransform` for scroll animations, never `useState`:
```tsx
// ❌ Wrong — causes re-render on every scroll tick
const [scrollY, setScrollY] = useState(0)
useEffect(() => { window.addEventListener('scroll', e => setScrollY(window.scrollY)) }, [])

// ✅ Correct — no re-renders
const { scrollYProgress } = useScroll()
const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
```

---

## React Re-Renders

### Avoid Inline Props
Inline objects and functions are new references on every render. This bypasses React.memo:
```tsx
// ❌ Wrong
<Card style={{ padding: 16 }} onClick={() => setOpen(true)} />

// ✅ Correct
const cardStyle = { padding: 16 }  // outside component, or from constants
const handleOpen = useCallback(() => setOpen(true), [])
<Card style={cardStyle} onClick={handleOpen} />
```

### When to Use memo / useCallback / useMemo
- `React.memo(Component)` — when a component re-renders only due to parent changes and its props are stable
- `useCallback(fn, deps)` — when passing a function to a memoized child component
- `useMemo(fn, deps)` — when a computation is expensive (>1ms measured) and depends on specific values
- Do NOT add these pre-emptively — only when a real re-render problem is observed

---

## Images

Every image below the fold needs lazy loading and explicit dimensions to prevent layout shift:
```tsx
// ✅ Correct
<img src={src} alt={alt} loading="lazy" width={640} height={360} />
```

---

## Bundle Size

### Import Only What You Use
```tsx
// ❌ Wrong — imports entire library
import * as Icons from 'lucide-react'

// ✅ Correct — tree-shaken import
import { ArrowRight, Github } from 'lucide-react'
```

### Lazy Load Heavy Sections
If a section is large and below the fold:
```tsx
const Projects = React.lazy(() => import('@/sections/Projects'))
// Wrap in <Suspense fallback={<LoadingScreen />}> in App.tsx
```
