# Testing Expert

user-invocable: false

## Stack

Vitest + `@testing-library/react` + `@testing-library/user-event` + `@testing-library/jest-dom`

Test files: colocate with component (`src/components/ui/Button.test.tsx`) or in `src/__tests__/`

## Core Principles

- Test **behavior**, not implementation. The test should describe what a user sees and does.
- Never test CSS class names or internal state directly.
- One logical assertion per `it` block — but multiple `expect` calls are fine if they describe the same behavior.

## Query Priority (highest to lowest)

1. `getByRole` — best, uses ARIA semantics
2. `getByLabelText` — for form fields
3. `getByText` — for visible text content
4. `getByTestId` — last resort, for dynamic content with no stable text

Never: `getByClassName`, `getByStyle`, `container.querySelector`

## Standard Test Structure

```tsx
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { ComponentName } from './ComponentName'

describe('ComponentName', () => {
  it('renders the title', () => {
    render(<ComponentName title="Hello" />)
    expect(screen.getByText('Hello')).toBeInTheDocument()
  })

  it('calls onClick when the button is pressed', async () => {
    const handleClick = vi.fn()
    render(<ComponentName onClick={handleClick} />)
    await userEvent.click(screen.getByRole('button', { name: /click me/i }))
    expect(handleClick).toHaveBeenCalledOnce()
  })
})
```

## Mocking Framer Motion

Framer Motion uses browser APIs unavailable in jsdom. Always mock it:

```tsx
vi.mock('framer-motion', () => ({
  motion: new Proxy({}, {
    get: (_, tag) => {
      const Component = ({ children, ...props }: React.HTMLAttributes<HTMLElement>) =>
        React.createElement(tag as string, props, children)
      return Component
    }
  }),
  AnimatePresence: ({ children }: { children: React.ReactNode }) => children,
  useReducedMotion: () => false,
  useScroll: () => ({ scrollYProgress: { get: () => 0 } }),
  useTransform: (_: unknown, __: unknown, output: unknown[]) => ({ get: () => output[0] }),
}))
```

## Mocking Custom Hooks

```tsx
// Mock scroll hooks
vi.mock('@/hooks/scroll', () => ({
  useLenis: vi.fn(),
  useScrollAnimation: vi.fn(() => ({ ref: { current: null }, isVisible: true })),
  useScrollToSection: vi.fn(() => vi.fn()),
}))

// Mock useMagnetic (returns refs and motion values)
vi.mock('@/hooks/useMagnetic', () => ({
  useMagnetic: () => ({
    ref: { current: null },
    x: { get: () => 0 },
    y: { get: () => 0 },
  }),
}))
```

## What to Test in a Component

| Thing | How |
|-------|-----|
| Renders without crashing | `render(<C />)` — no assertion needed if it doesn't throw |
| Key text/content present | `getByText`, `getByRole` |
| Props change output | render with different props, assert different output |
| User interaction | `userEvent.click`, `userEvent.type`, then assert |
| Conditional rendering | render with prop that shows/hides element, assert presence |
| Accessibility | `getByRole('button', { name: /label/i })` verifies label exists |

## What NOT to Test

- Tailwind class names (implementation detail)
- Internal state values (test the output, not the mechanism)
- Third-party library behavior (Framer Motion, React Router)
- TypeScript types (the compiler handles this)
