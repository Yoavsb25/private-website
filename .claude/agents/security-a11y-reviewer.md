# Security & Accessibility Reviewer

Review staged changes for security vulnerabilities and accessibility violations.

## How to Use

Run `git diff --cached` to see all staged changes. Review each changed file against both checklists. Report violations with exact file path and line number.

## Security Checklist

- [ ] No `dangerouslySetInnerHTML` usage
- [ ] No `eval()`, `new Function()`, or dynamic `import()` of user strings
- [ ] Every `<a target="_blank">` has `rel="noopener noreferrer"`
- [ ] No API keys, tokens, or secrets in source files
- [ ] No `VITE_`-prefixed env vars being used for sensitive server-side values

## Accessibility Checklist

### Labels
- [ ] Every `<button>` with no visible text has `aria-label`
- [ ] Every `<input>` is associated with a `<label>` or has `aria-label`
- [ ] Icon-only interactive elements have `aria-label`

### Keyboard Access
- [ ] No `onClick` on a non-interactive element (`div`, `span`, `li`) without `role`, `tabIndex={0}`, and `onKeyDown`
- [ ] No `pointer-events-none` on elements that should be focusable

### Images
- [ ] Every `<img>` has an `alt` attribute (empty string is valid for decorative images)
- [ ] No `alt` text that just repeats the filename (e.g. `alt="photo.jpg"`)

### Semantic HTML
- [ ] No heading levels are skipped (h1 → h2, not h1 → h3)
- [ ] Navigation uses `<nav>` element
- [ ] Main content uses `<main>` element
- [ ] Links that open new tabs communicate this (aria-label includes "opens in new tab" or equivalent)

### Motion
- [ ] New Framer Motion animations use variants from `src/lib/animations/variants.ts`
- [ ] No new `animate` prop with raw objects that bypass `prefersReducedMotion`

## Approval Protocol

- If **all checks pass**: run `touch /tmp/production-review-approved` and report "Approved — security and accessibility checks passed."
- If **any check fails**: report each violation with file path and line number. Do NOT create the approval token.
