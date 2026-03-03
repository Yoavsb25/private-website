# Add Portfolio Entry

Add a new entry to one of the portfolio data files, following the exact TypeScript schema.

## Arguments
`$ARGUMENTS` — entry type: `project`, `experience`, or `education`

---

## Project (`src/data/projects.ts`)

Add to the `projects` array. Interface:
```ts
interface WorkItem {
  id: string           // unique, kebab-case (e.g. 'my-project')
  title: string
  description: string
  problem: string
  solution: string
  technologies: string[]
  outcomes: string
  imageUrl?: string    // import from @/assets/images/<file>
  imageAlt?: string    // descriptive alt text for the image
  liveUrl?: string
  sourceUrl?: string
  featured: boolean    // true = appears on the site
  date?: string        // e.g. '2024' or '2024-06'
}
```

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

## Rules

1. **No JSX or React imports** — data files are pure TypeScript
2. **Images/logos**: place the file in `src/assets/icons/` or `src/assets/images/`, then add an import at the top of the data file
3. **`order` field**: The Timeline section sorts entries by this field. Lower numbers appear earlier (older). Check existing entries and assign a consistent value
4. After adding, run `npm run type-check` — TypeScript will catch any schema violations immediately
