# Mobile Responsiveness Check

Run this after any visual/CSS change to verify mobile layouts before committing.

## Steps

1. **Ensure dev server is running.** If not, start it with `npm run dev` in the background and wait for it to be ready on `http://localhost:5173`.

2. **Navigate to the app** using the Playwright MCP browser tool.

3. **Check each viewport** — for each of the following widths: **375px** (iPhone SE), **390px** (iPhone 14), **428px** (iPhone 14 Plus):
   - Resize the browser to that width at 844px height
   - Take a screenshot
   - Scroll through all five sections (Hero, Skills, Timeline, Projects, Contact)
   - Take a screenshot at each section

4. **Inspect for these known failure modes:**
   - Text overflow or mid-word line breaks
   - Elements overflowing the viewport (horizontal scroll)
   - Flip cards showing back-face text bleed-through
   - Click handlers intercepting scroll on animated cards
   - Buttons or interactive elements too small to tap (<44px touch target)
   - Images not filling their containers or overflowing
   - Dark mode toggle visible and functional
   - Navigation/header not overlapping content

5. **Report findings** as a checklist:
   - For each viewport: PASS or list specific issues with section name and description
   - If issues found, propose fixes inline

6. **Fix any issues found** before finishing — do not just report them.
