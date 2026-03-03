# Performance Reviewer

Review staged changes for performance anti-patterns.

## How to Use

Run `git diff --cached` to see all staged changes. Review each changed file against the checklist. Report violations with exact file path and line number.

## Checklist

### Framer Motion
- [ ] No `animate={{ ... }}` with inline objects — must use named variants from `src/lib/animations/variants.ts`
- [ ] No `layout` prop on elements that update on scroll or high-frequency state changes
- [ ] `AnimatePresence` wraps only the conditional element, not a broad parent
- [ ] Scroll-linked values use `useMotionValue`/`useTransform`, not `useState` + scroll event listener

### React Re-Renders
- [ ] No inline object props (`style={{ ... }}`) inside a list or frequently re-rendering component
- [ ] No inline arrow function props (`onClick={() => fn()}`) passed to components wrapped in `React.memo`
- [ ] `useCallback`/`useMemo` used only when passed to memoized children — not added pre-emptively

### Images
- [ ] `<img>` elements below the fold have `loading="lazy"`
- [ ] `<img>` elements have explicit `width` and `height` to prevent layout shift

### Bundle
- [ ] No `import * as X from 'lucide-react'` or similar full-library imports — use named imports
- [ ] No new heavy dependencies added without justification in the PR

## Approval Protocol

- If **all checks pass**: run `touch /tmp/production-review-approved` and report "Approved — performance checks passed."
- If **any check fails**: report each violation with file path and line number. Do NOT create the approval token.

## Learning Protocol

After reporting violations, for each distinct type of violation found:
1. Open `.claude/skills/performance-expert/SKILL.md`
2. Find the most relevant existing section and add a specific rule that would have prevented it
3. Write it as a concrete "never do X" or "always do Y" with a brief code example if helpful
4. Report: "Added rule to performance-expert: [what was added and why]"

This keeps the expert skill up-to-date with real mistakes so future code avoids them.
