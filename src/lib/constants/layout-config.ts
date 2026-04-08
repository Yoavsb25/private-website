/**
 * Layout classes — premium spatial system with generous rhythm
 */
export const LAYOUT = {
  CONTAINER: {
    BASE: 'mx-auto',
    SMALL: 'mx-auto max-w-6xl',
    LARGE: 'mx-auto w-full max-w-7xl',
    FULL: 'mx-auto w-full',
  },
  GRID: {
    AUTO_FIT:
      'grid gap-[clamp(1.25rem,3vw,2.5rem)] [grid-template-columns:repeat(auto-fit,minmax(340px,1fr))]',
    AUTO_FIT_SMALL:
      'grid gap-[clamp(1rem,2.5vw,1.5rem)] [grid-template-columns:repeat(auto-fit,minmax(260px,1fr))]',
    AUTO_FIT_LARGE:
      'grid gap-[clamp(1.25rem,3vw,2.5rem)] [grid-template-columns:repeat(auto-fit,minmax(320px,1fr))]',
    CONTACT:
      'grid gap-[clamp(1rem,2.5vw,1.5rem)] [grid-template-columns:repeat(auto-fit,minmax(260px,1fr))]',
    PROJECTS_2COL: 'grid gap-[clamp(1.5rem,3vw,2.5rem)] grid-cols-1 md:grid-cols-2',
    RESPONSIVE_2:
      'grid gap-[clamp(1rem,2.5vw,1.5rem)] [grid-template-columns:repeat(auto-fit,minmax(300px,1fr))]',
    RESPONSIVE_3:
      'grid gap-[clamp(1.25rem,3vw,2.5rem)] [grid-template-columns:repeat(auto-fit,minmax(280px,1fr))]',
  },
  FLEX: {
    CENTER: 'flex items-center justify-center',
    BETWEEN: 'flex items-center justify-between',
    COL_CENTER: 'flex flex-col items-center',
    WRAP: 'flex flex-wrap',
  },
} as const

/**
 * Spacing classes — generous rhythm for premium breathing room
 */
export const SPACING = {
  SECTION: {
    HEADER: 'mb-14',
    CONTENT: 'space-y-8',
    LARGE: 'space-y-12',
  },
  CARD: {
    GAP: 'gap-8',
    INTERNAL: 'gap-4',
    SMALL: 'gap-2',
  },
  TEXT: {
    HEADING: 'mb-3',
    PARAGRAPH: 'mb-5',
    LIST: 'space-y-2',
  },
  PADDING: {
    CONTAINER: 'px-[clamp(1.5rem,5vw,3rem)]',
    SECTION: 'py-[clamp(5rem,10vw,8rem)]',
  },
} as const
