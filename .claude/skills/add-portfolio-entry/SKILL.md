---
name: add-portfolio-entry
description: Use when adding a project, experience, or education entry to the portfolio website — triggered by GitHub repo names/URLs, new job entries, or any request to update src/data/projects.ts, src/data/experience.ts, or src/data/education.ts.
---

# Add Portfolio Entry

Add a new entry to one of the portfolio data files, following the exact TypeScript schema.

## Arguments
`$ARGUMENTS` — entry type: `project`, `experience`, or `education`; or a GitHub repo name/URL

---

## Project — Three-Phase Workflow

**For GitHub repos, complete all three phases per repo before moving to the next.**

### Phase 1 — Gather

Use MCP GitHub tools (`mcp__github__get_file_contents`, `mcp__github__search_repositories`) to fetch:
- Repo metadata: description, `homepageUrl`, topics, primary language
- README content: source for all narrative fields

| Field | Source | Note |
|---|---|---|
| `id` | kebab-case repo name | Check existing `projects` array for collisions first; append `-2` if needed |
| `title` | repo name + short qualifier | — |
| `tagline` | one-line hook from README | **Always populate** — derive from repo description if README lacks an obvious hook |
| `description` | expanded overview | — |
| `problem` | pain point the project solves | — |
| `solution` | how it was built | — |
| `technologies[]` | from README badges/stack | — |
| `outcomes` | results or impact | — |
| `date` | repo creation year | — |
| `sourceUrl` | GitHub repo URL | — |
| `liveUrl` | `homepageUrl` if present | If absent, scan README body for Heroku/Vercel/GitHub Pages URL |

### Phase 2 — Resolve

#### Icons — read `icon-helpers.tsx` BEFORE writing the entry

1. Read `src/lib/helpers/icon-helpers.tsx` — note every key in `TECH_ICON_MAP`
2. For each technology: check a key exists (lookup is `.toLowerCase()`, so `'Python'` and `'python'` both work)
3. If a tech is missing **and** has a matching `Si` component in `react-icons/si`:
   - Add to the import block in `icon-helpers.tsx`
   - Add key → component to `TECH_ICON_MAP`
   - Add key → hex brand colour to `TECH_ICON_COLORS` — **both entries required together, never one without the other**
4. If no `Si` component exists in `react-icons/si`, the tech falls back to the generic Code2 icon — acceptable for obscure or internal tools

#### Images — determine app type from README

| App type | Action |
|---|---|
| Web app (Flask, Django, etc.) | Run locally + Playwright screenshot → `src/assets/images/<id>.png`, set `imageUrl` and `imageAlt` |
| Desktop GUI (Tkinter, etc.) | Omit `imageUrl` and `imageAlt` |
| Non-visual (Jupyter, academic HW) | Omit `imageUrl` and `imageAlt` |
| Startup fails / missing deps | Omit `imageUrl` and `imageAlt`; add `// TODO: add screenshot` comment on the entry |

**Web app screenshot steps:**
1. Read README for startup command and default port
2. Run server as a background process
3. Wait for readiness: poll port every 200ms, timeout 30s — OR watch stdout for `"Running on"` / `"Listening on"`; if timeout hit, treat as startup failure (omit image)
4. Playwright: navigate to `localhost:<port>`, take full-page screenshot
5. Save to `src/assets/images/<id>.png`
6. Kill the background server
7. **Verify the file exists at that path before continuing**
8. Set `imageAlt`: `'<Title> — <brief description of what is shown>'` (e.g. `'Calendar Analytics — Revenue report showing aggregated meeting counts'`)

### Phase 3 — Write

Add to `src/data/projects.ts` using the full interface:

```ts
interface WorkItem {
  id: string           // unique kebab-case — check for collisions before writing
  title: string
  tagline?: string     // always populate — derive from description if README lacks one
  description: string
  problem: string
  solution: string
  technologies: string[]
  outcomes: string
  imageUrl?: string    // import from @/assets/images/<file>; omit for non-web/non-visual
  imageAlt?: string    // always set when imageUrl is set, e.g. 'Team Balancer — Results page showing balanced teams'; omit when imageUrl is omitted
  liveUrl?: string
  sourceUrl?: string
  featured: boolean    // true = appears on the site
  date?: string        // e.g. '2024' or '2024-06'
}
```

If an image was captured, add its import at the top of the file alongside existing image imports.

Run `npm run type-check` then `npm run lint` — **both must pass before finishing**.

---

## Experience (`src/data/experience.ts`)

Add to the `experiences` array. Interface:
```ts
interface ExperienceItem {
  title: string
  company: string
  period: string       // e.g. 'Apr 2025 - Present' or 'Oct 2020 - Oct 2021'
  location?: string
  logoUrl?: string     // import from @/assets/icons/<file>
  type?: string
  achievements: string[]
  technologies?: string[]
  order?: number       // lower = earlier on timeline (chronological position)
}
```

---

## Education (`src/data/education.ts`)

Add to the `education` array. Interface:
```ts
interface EducationItem {
  degree: string
  institution: string
  period?: string      // e.g. 'Graduated 2025'
  logoUrl?: string     // import from @/assets/icons/<file>
  activities?: string[]
  details?: string[]
  programmingLanguages?: string[]
  developmentTools?: string[]
  majors?: string[]
  grades?: string[]
  order?: number       // lower = earlier on timeline
}
```

---

## Rules (all entry types)

1. **No JSX or React imports** — data files are pure TypeScript
2. **Images/logos**: place the file in `src/assets/icons/` or `src/assets/images/`, then add an import at the top of the data file
3. **`order` field**: The Timeline section sorts entries by this field. Lower numbers appear earlier (older). Check existing entries and assign a consistent value
4. After adding, run `npm run type-check` and `npm run lint` — both must pass
