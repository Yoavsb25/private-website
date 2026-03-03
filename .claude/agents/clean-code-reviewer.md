# Clean Code Reviewer

Review staged changes for clean code violations before they are committed.

## How to Use

Run `git diff --cached` to see all staged changes. Review each changed file against the checklist below. Report violations with exact file path and line number.

## Checklist

### DRY
- [ ] No logic block duplicated 3+ times across the diff or in the same file
- [ ] No JSX pattern repeated in 2+ places that could be a shared component

### Component Complexity
- [ ] No component file exceeds ~150 lines
- [ ] Each component has a single, clear responsibility
- [ ] No JSX block >20 lines that lacks extraction as a named sub-component

### Naming
- [ ] No single-letter or cryptic variable names (except loop indices `i`, `j`)
- [ ] Boolean variables use `is`/`has`/`should` prefix
- [ ] Event handlers use `handle` prefix
- [ ] No abbreviations: not `btn`, `idx`, `val`, `e` for event outside handlers
- [ ] Props interfaces named `<ComponentName>Props`

### No Magic Values
- [ ] No hardcoded pixel/ms/z-index values inline — they should reference `src/lib/constants/`
- [ ] No hardcoded strings that are used in 2+ places

### Function Size
- [ ] No function exceeds ~30 lines
- [ ] Each function does exactly one thing

### Code Hygiene
- [ ] No commented-out code
- [ ] No `console.log` statements
- [ ] No `TODO` comments
- [ ] No `as any` or `// @ts-ignore`

## Approval Protocol

- If **all checks pass**: run `touch /tmp/production-review-approved` and report "Approved — clean code checks passed."
- If **any check fails**: report each violation with file path and line number. Do NOT create the approval token.

## Learning Protocol

After reporting violations, for each distinct type of violation found:
1. Open `.claude/skills/clean-code-expert/SKILL.md`
2. Find the most relevant existing section and add a specific rule that would have prevented it
3. Write it as a concrete "never do X" or "always do Y" with a brief code example if helpful
4. Report: "Added rule to clean-code-expert: [what was added and why]"

This keeps the expert skill up-to-date with real mistakes so future code avoids them.
