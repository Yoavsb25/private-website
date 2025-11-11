# Tasks: Developer Portfolio Website

**Input**: Design documents from `/specs/001-developer-portfolio/`
**Prerequisites**: plan.md (required), spec.md (required for user stories), research.md, data-model.md, contracts/

**Tests**: Tests are required by constitution but will be implemented alongside features. Test tasks are integrated into implementation phases.

**Organization**: Tasks are grouped by user story to enable independent implementation and testing of each story.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (e.g., US1, US2, US3)
- Include exact file paths in descriptions

## Path Conventions

- **Single project**: `src/`, `tests/` at repository root
- Paths shown below follow the single-page React application structure from plan.md

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Project initialization and basic structure

- [x] T001 Create project structure per implementation plan (src/, public/, tests/ directories)
- [x] T002 Initialize Vite project with React + TypeScript template
- [x] T003 [P] Install and configure Tailwind CSS in src/styles/globals.css
- [x] T004 [P] Install and configure ESLint and Prettier for TypeScript/React
- [x] T005 [P] Configure TypeScript with strict mode in tsconfig.json
- [x] T006 [P] Setup path aliases (@/ for src/) in vite.config.ts and tsconfig.json
- [x] T007 [P] Create public/ directory structure (favicon.ico, og-image.png, assets/)

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Core infrastructure that MUST be complete before ANY user story can be implemented

**⚠️ CRITICAL**: No user story work can begin until this phase is complete

- [x] T008 Initialize shadcn/ui and configure base theme in tailwind.config.js
- [x] T009 [P] Install and add shadcn/ui base components (Button, Card, Badge) to src/components/ui/
- [x] T010 [P] Create Tailwind design tokens and theme configuration in src/styles/theme.ts
- [x] T011 [P] Setup HashRouter from react-router-dom in src/App.tsx
- [x] T012 [P] Create base Section component in src/components/Section.tsx
- [x] T013 [P] Install and configure lucide-react for icons
- [x] T014 [P] Create data directory structure and TypeScript interfaces in src/data/
- [x] T015 Create main App component structure with routing in src/App.tsx
- [x] T016 [P] Setup GitHub Actions workflow for deployment in .github/workflows/deploy.yml
- [x] T017 Configure Vite for GitHub Pages (base path) in vite.config.ts

**Checkpoint**: Foundation ready - user story implementation can now begin in parallel

---

## Phase 3: User Story 1 - Discover Professional Identity (Priority: P1) 🎯 MVP

**Goal**: Visitor arrives at portfolio and immediately understands who the developer is, what they specialize in, and their professional value proposition.

**Independent Test**: New visitor navigates to site and verifies they can identify developer's name, specialization area, and professional focus within 10 seconds without scrolling.

### Implementation for User Story 1

- [x] T018 [P] [US1] Create PortfolioContent interface and portfolio data file in src/data/portfolio.ts
- [x] T019 [US1] Populate portfolio.ts with developer name, title, specialization, bio, and problem-solving description
- [x] T020 [P] [US1] Create Hero section component in src/sections/Hero.tsx
- [x] T021 [US1] Implement Hero component to display name, title, and specialization prominently
- [x] T022 [US1] Add bio and problem-solving content to Hero section
- [x] T023 [US1] Style Hero section with Tailwind for clean, elegant design (responsive, accessible)
- [x] T024 [US1] Integrate Hero section into App.tsx as landing section
- [x] T025 [US1] Add semantic HTML and ARIA labels to Hero for accessibility (WCAG 2.1 AA)
- [x] T026 [US1] Ensure Hero content is visible within viewport without scrolling

**Checkpoint**: At this point, User Story 1 should be fully functional and testable independently. Visitor can identify professional identity within 10 seconds.

---

## Phase 4: User Story 2 - Explore Work and Quality (Priority: P2)

**Goal**: Visitor explores developer's work, projects, or portfolio items to understand quality, style, and technical capabilities demonstrated through past work.

**Independent Test**: Visitor navigates to work/projects section and verifies they can view at least one complete project example including purpose, technologies used, and outcomes.

### Implementation for User Story 2

- [x] T027 [P] [US2] Create WorkItem interface and projects data file in src/data/projects.ts
- [x] T028 [US2] Populate projects.ts with at least one complete project (id, title, description, problem, solution, technologies, outcomes)
- [x] T029 [P] [US2] Create Projects section component in src/sections/Projects.tsx
- [x] T030 [US2] Implement project card component to display project details (title, description, technologies)
- [x] T031 [US2] Add project detail view showing problem, solution, and outcomes
- [x] T032 [US2] Style Projects section with Tailwind for clean presentation (responsive grid layout)
- [x] T033 [US2] Integrate Projects section into App.tsx with hash routing (#projects)
- [x] T034 [US2] Add semantic HTML and ARIA labels to Projects section for accessibility
- [x] T035 [US2] Implement project filtering/featured display if multiple projects exist
- [x] T036 [US2] Add optional project images with proper alt text and lazy loading
- [x] T037 [US2] Add links to live projects and source code (if available) with proper accessibility

**Checkpoint**: At this point, User Stories 1 AND 2 should both work independently. Visitor can view work examples and assess quality.

---

## Phase 5: User Story 3 - Initiate Contact or Collaboration (Priority: P3)

**Goal**: Visitor who is interested in connecting can easily find contact information or collaboration opportunities and initiate communication through provided channels.

**Independent Test**: Visitor attempts to find contact information and verifies they can identify at least one method (email, contact form, social profile) within 15 seconds.

### Implementation for User Story 3

- [x] T038 [P] [US3] Create ContactMethod and ContactInformation interfaces in src/data/contact.ts
- [x] T039 [US3] Populate contact.ts with at least one contact method (email, social profile, or form)
- [x] T040 [P] [US3] Create Contact section component in src/sections/Contact.tsx
- [x] T041 [US3] Implement contact method display with icons from lucide-react
- [x] T042 [US3] Add clickable contact links (mailto:, external links) with proper accessibility
- [x] T043 [US3] Style Contact section with Tailwind for clear, accessible presentation
- [x] T044 [US3] Integrate Contact section into App.tsx with hash routing (#contact)
- [x] T045 [US3] Add semantic HTML and ARIA labels to Contact section for accessibility
- [x] T046 [US3] Ensure contact information is easily discoverable from any section (navigation or footer)
- [x] T047 [US3] Add response time and availability information if provided in contact data

**Checkpoint**: All user stories should now be independently functional. Visitor can find and use contact methods.

---

## Phase 6: Polish & Cross-Cutting Concerns

**Purpose**: Improvements that affect multiple user stories

- [x] T048 [P] Add smooth scroll navigation between sections with hash routing
- [x] T049 [P] Implement responsive navigation menu/header for mobile devices
- [ ] T050 [P] Optimize images (WebP format, responsive sizes) in public/assets/
- [ ] T051 [P] Add lazy loading for images and non-critical components
- [ ] T052 [P] Configure bundle analysis and verify initial JS bundle <200 KB
- [ ] T053 [P] Add performance monitoring (Lighthouse CI) to GitHub Actions workflow
- [ ] T054 [P] Run accessibility audit and fix any WCAG 2.1 AA violations
- [ ] T055 [P] Test responsive design across breakpoints (320px to 1920px width)
- [x] T056 [P] Add keyboard navigation support for all interactive elements
- [x] T057 [P] Implement focus indicators and ensure high contrast colors
- [x] T058 [P] Add error boundaries and graceful error handling for missing data
- [ ] T059 [P] Create favicon and Open Graph image (og-image.png) for social sharing
- [x] T060 [P] Add meta tags for SEO (title, description, keywords) in index.html
- [ ] T061 [P] Test site performance (Time to Interactive <3s) and optimize if needed
- [ ] T062 [P] Update quickstart.md validation and verify all setup steps work
- [ ] T063 [P] Add unit tests for critical components (Hero, Projects, Contact) in tests/unit/
- [ ] T064 [P] Add integration tests for user flows in tests/integration/
- [ ] T065 [P] Add E2E tests with Playwright for acceptance scenarios in tests/e2e/
- [ ] T066 [P] Configure CI/CD to run tests and block merges on failure
- [ ] T067 [P] Final code review and documentation updates

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies - can start immediately
- **Foundational (Phase 2)**: Depends on Setup completion - BLOCKS all user stories
- **User Stories (Phase 3+)**: All depend on Foundational phase completion
  - User stories can then proceed in parallel (if staffed)
  - Or sequentially in priority order (P1 → P2 → P3)
- **Polish (Final Phase)**: Depends on all desired user stories being complete

### User Story Dependencies

- **User Story 1 (P1)**: Can start after Foundational (Phase 2) - No dependencies on other stories
- **User Story 2 (P2)**: Can start after Foundational (Phase 2) - Independent, no dependencies on US1
- **User Story 3 (P3)**: Can start after Foundational (Phase 2) - Independent, no dependencies on US1/US2

### Within Each User Story

- Data files before components
- Components before integration into App
- Core implementation before styling and accessibility enhancements
- Story complete before moving to next priority

### Parallel Opportunities

- All Setup tasks marked [P] can run in parallel (T003-T007)
- All Foundational tasks marked [P] can run in parallel (T009-T014, T016)
- Once Foundational phase completes, all user stories can start in parallel (if team capacity allows)
- Data files within a story marked [P] can run in parallel with component creation
- Different user stories can be worked on in parallel by different team members

---

## Parallel Example: User Story 1

```bash
# Launch data and component creation in parallel:
Task: "Create PortfolioContent interface and portfolio data file in src/data/portfolio.ts"
Task: "Create Hero section component in src/sections/Hero.tsx"

# These can run simultaneously as they work on different files
```

## Parallel Example: User Story 2

```bash
# Launch data and component creation in parallel:
Task: "Create WorkItem interface and projects data file in src/data/projects.ts"
Task: "Create Projects section component in src/sections/Projects.tsx"
```

## Parallel Example: User Story 3

```bash
# Launch data and component creation in parallel:
Task: "Create ContactMethod and ContactInformation interfaces in src/data/contact.ts"
Task: "Create Contact section component in src/sections/Contact.tsx"
```

---

## Implementation Strategy

### MVP First (User Story 1 Only)

1. Complete Phase 1: Setup
2. Complete Phase 2: Foundational (CRITICAL - blocks all stories)
3. Complete Phase 3: User Story 1
4. **STOP and VALIDATE**: Test User Story 1 independently
   - Verify visitor can identify name, specialization, and professional focus within 10 seconds
   - Test accessibility (keyboard navigation, screen reader)
   - Test responsive design (mobile and desktop)
5. Deploy/demo if ready

### Incremental Delivery

1. Complete Setup + Foundational → Foundation ready
2. Add User Story 1 → Test independently → Deploy/Demo (MVP!)
3. Add User Story 2 → Test independently → Deploy/Demo
4. Add User Story 3 → Test independently → Deploy/Demo
5. Add Polish phase → Final deployment
6. Each story adds value without breaking previous stories

### Parallel Team Strategy

With multiple developers:

1. Team completes Setup + Foundational together
2. Once Foundational is done:
   - Developer A: User Story 1 (Hero section)
   - Developer B: User Story 2 (Projects section)
   - Developer C: User Story 3 (Contact section)
3. Stories complete and integrate independently
4. Team collaborates on Polish phase

---

## Notes

- [P] tasks = different files, no dependencies
- [Story] label maps task to specific user story for traceability
- Each user story should be independently completable and testable
- Commit after each task or logical group
- Stop at any checkpoint to validate story independently
- Avoid: vague tasks, same file conflicts, cross-story dependencies that break independence
- All tasks must follow strict format: `- [ ] [TaskID] [P?] [Story?] Description with file path`
- Tests are integrated into implementation phases per constitution requirements
- Performance and accessibility are cross-cutting concerns addressed in Polish phase

