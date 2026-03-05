---
name: commit
description: Stage changes and create a git commit following project conventions. Handles pre-commit approval check, staging, commit message format, and Co-Author footer.
---

# Commit

Stage changes and create a git commit following project conventions.

## Usage

/commit

## Steps

1. **Check if pre-commit is approved**

   Run: `ls -la /tmp/production-review-approved 2>/dev/null`

   - If the file exists AND is less than 10 minutes old: skip to step 3
   - If missing or stale: run the `/pre-commit` skill first, then return here once it creates the token

2. **Stage the relevant files**

   Prefer staging specific files by name over `git add -A`:

   ```bash
   git add <specific changed files>
   ```

   Never stage: `.env`, lock files, `dist/`, credentials, or binary files.

3. **Create the commit**

   Commit message format:
   - First line: `<type>: <short summary>` (under 72 characters)
   - Types: `feat`, `fix`, `refactor`, `chore`, `docs`, `test`, `style`
   - Focus on the "why", not the "what"
   - Always include the Co-Author footer on a separate line after a blank line

   ```bash
   git commit -m "$(cat <<'EOF'
   <type>: <summary>

   Co-Authored-By: Claude Sonnet 4.6 <noreply@anthropic.com>
   EOF
   )"
   ```

4. **Verify success**

   Run: `git log --oneline -1`

   Expected: Your new commit appears at the top of the log.
