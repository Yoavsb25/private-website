# Pre-Commit Review

Run all 4 quality review agents in parallel against staged changes. Creates `/tmp/production-review-approved` only when all agents pass.

## Usage

/pre-commit

Run this before every `git commit`. The commit hook will block until this token exists.

## Steps

1. Use the superpowers:dispatching-parallel-agents skill to run all 4 agents simultaneously with these tasks:
   - **architecture-reviewer**: Review staged changes (`git diff --cached`) for architectural compliance
   - **clean-code-reviewer**: Review staged changes for clean code violations
   - **security-a11y-reviewer**: Review staged changes for security and accessibility issues
   - **performance-reviewer**: Review staged changes for performance anti-patterns

2. Collect all 4 results and display a summary table:

   | Agent | Result | Violations |
   |-------|--------|------------|
   | Architecture | ✅ / ❌ | count or "none" |
   | Clean Code | ✅ / ❌ | count or "none" |
   | Security & A11y | ✅ / ❌ | count or "none" |
   | Performance | ✅ / ❌ | count or "none" |

3. **If ALL 4 agents report no violations:**
   - Run: `touch /tmp/production-review-approved`
   - Report: "✅ All checks passed — commit may proceed. Run your git commit now."

4. **If ANY agent reports violations:**
   - List each violation grouped by agent, with file path and line number
   - Do NOT create the token
   - Report: "❌ Review failed — fix the violations above and re-run /pre-commit"

## Notes

- The token expires after 10 minutes. If you take longer than that to commit after running /pre-commit, run it again.
- Each agent reads `git diff --cached` independently — make sure you have staged all intended files before running.
- If you have no staged changes, the hook will not block and pre-commit is not needed.
