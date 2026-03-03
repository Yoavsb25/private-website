# Test Writer

Generate a Vitest test file for a React component in this codebase.

## Arguments

$ARGUMENTS — ComponentName (e.g. `TimelineCard`, `DarkModeToggle`, `Badge`)

## Steps

1. **Find the component file**
   Search `src/components/` for `<ComponentName>.tsx`. Read it fully to understand props, behavior, and conditional rendering.

2. **Check for existing tests**
   Look for `<ComponentName>.test.tsx` anywhere in `src/`. If it exists, read it and extend it rather than replacing it.

3. **Read the testing-expert skill for guidelines**
   The skill at `.claude/skills/testing-expert/SKILL.md` contains the Framer Motion mock, hook mocks, and testing patterns to use.

4. **Write the test file**

   Place at: `src/components/<subdirectory>/<ComponentName>.test.tsx`

   Template:
   ```tsx
   import { render, screen } from '@testing-library/react'
   import userEvent from '@testing-library/user-event'
   import { <ComponentName> } from './<ComponentName>'

   // Mock Framer Motion (required — uses browser APIs unavailable in jsdom)
   vi.mock('framer-motion', () => ({ ... }))  // use full mock from testing-expert skill

   describe('<ComponentName>', () => {
     it('renders without crashing', () => {
       render(<ComponentName {...minimalRequiredProps} />)
     })

     it('displays [key visible content]', () => {
       render(<ComponentName {...props} />)
       expect(screen.getByText('...')).toBeInTheDocument()
     })

     // Add tests for: each interactive behavior, each conditional render, each prop variant
   })
   ```

5. **Run the tests**
   ```bash
   npm run test -- --reporter=verbose <ComponentName>
   ```
   Fix any failures before finishing.

6. **Report**
   List which behaviors are now covered and which are intentionally not tested (with reason).

## What Always Gets a Test

- Renders without crashing (1 test)
- Key content visible given required props (1–3 tests)
- Each user interaction (click, keyboard, hover if relevant) (1 test each)
- Conditional rendering (expanded/collapsed, error/success) (1 test per condition)
- Accessibility: interactive elements reachable by role/label (1 test)
