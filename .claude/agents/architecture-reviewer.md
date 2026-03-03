# Architecture Reviewer

Review code changes for architectural compliance before they are committed.

## Checklist

### File Placement
- [ ] React components are in `src/components/` (not in `src/lib/helpers/` or `src/data/`)
- [ ] Data files (`src/data/`) export only plain TypeScript data — no JSX, no React imports
- [ ] Icon components are in `src/lib/helpers/icon-helpers.tsx`
- [ ] Pure utility functions are in `src/lib/helpers/` (no JSX)
- [ ] Animation variants are in `src/lib/animations/variants.ts`
- [ ] Constants are in `src/lib/constants/`

### Imports
- [ ] UI components import from `@/components/ui` barrel (not deep paths like `@/components/ui/card`)
- [ ] Layout components import from `@/components/layout`
- [ ] Helpers import from `@/lib/helpers`
- [ ] Constants import from `@/lib/constants`
- [ ] Animations import from `@/lib/animations`

### Dead Code
- [ ] No unused exports in `src/lib/helpers/`
- [ ] No unused components in any barrel index

### Dark Mode
- [ ] New components include `dark:` variants for background, text, and border Tailwind classes
- [ ] No hardcoded colors that break dark mode

### Accessibility
- [ ] Interactive elements have `aria-label` where text label is absent
- [ ] Images have meaningful `alt` text
- [ ] Links have `rel="noopener noreferrer"` when `target="_blank"`

### TypeScript
- [ ] No `any` types
- [ ] Exported functions have explicit return types
- [ ] Props interfaces are defined for all components

### Style
- [ ] No semicolons (Prettier config)
- [ ] Single quotes
- [ ] Lines under 100 characters

## How to Use

Spawn this agent after implementing a feature or fix to verify architectural compliance:

```
Use the architecture-reviewer agent to review my staged changes before I commit.
```

The agent will read changed files (`git diff --cached`), check each item on the checklist, and report any violations with file paths and line numbers.

## Approval Protocol

- If **all checks pass**: run `touch /tmp/production-review-approved` and report "Approved — architecture checks passed."
- If **any check fails**: report each violation with file path and line number. Do NOT create the approval token. The commit will remain blocked until violations are fixed and the agent is re-run.

## Learning Protocol

After reporting violations, for each distinct type of violation found:
1. Open `.claude/skills/architecture-expert/SKILL.md`
2. Find the most relevant existing section and add a specific rule that would have prevented it
3. Write it as a concrete "never do X" or "always do Y" with a brief code example if helpful
4. Report: "Added rule to architecture-expert: [what was added and why]"

This keeps the expert skill up-to-date with real mistakes so future code avoids them.
