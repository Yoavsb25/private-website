# New Component

Scaffold a new React component following all project conventions.

## Arguments
`$ARGUMENTS` — `<ComponentName> <directory>` (e.g. `SkillCard ui` or `HeroAvatar features`)

## Placement Rules

| Directory arg | File path | Barrel to update |
|---|---|---|
| `ui` | `src/components/ui/<Name>.tsx` | `src/components/ui/index.ts` |
| `layout` | `src/components/layout/<Name>.tsx` | `src/components/layout/index.ts` |
| `features` | `src/components/features/<Name>.tsx` | `src/components/features/index.ts` |
| `typography` | `src/components/typography/<Name>.tsx` | `src/components/typography/index.ts` |
| `timeline` | `src/components/timeline/<Name>.tsx` | `src/components/timeline/index.ts` |

## Component Requirements

Every component must:
- Use a **named export** (never `export default`)
- Have an explicit **props interface** defined above the component
- Include `dark:` Tailwind variants for every background, text, and border class
- Use constants from `@/lib/constants` for spacing and sizing (never raw pixel values)
- Use the `cn()` utility from `@/lib/utils` for conditional classes
- Import from barrel paths: `from '@/components/ui'`, `from '@/lib/helpers'`, etc.

## Steps

1. Create the component file at the correct path
2. Add `export * from './<Name>'` to the barrel `index.ts` for that directory
3. Run `npm run type-check` to confirm no errors

## Example

For `SkillBadge ui`:

```tsx
import { cn } from '@/lib/utils'
import { SPACING } from '@/lib/constants'

interface SkillBadgeProps {
  label: string
  className?: string
}

export function SkillBadge({ label, className }: SkillBadgeProps) {
  return (
    <span
      className={cn(
        'rounded-full border px-3 py-1 text-sm',
        'border-border bg-background text-foreground',
        'dark:border-border dark:bg-background dark:text-foreground',
        SPACING.CARD.SMALL,
        className
      )}
    >
      {label}
    </span>
  )
}
```
