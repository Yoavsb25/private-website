/**
 * Layout classes
 */
export const LAYOUT = {
  CONTAINER: {
    BASE: 'mx-auto',
    SMALL: 'mx-auto max-w-6xl',
    LARGE: 'mx-auto w-full max-w-7xl',
    FULL: 'mx-auto w-full',
  },
  GRID: {
    CONTACT:
      'grid gap-[clamp(1rem,2.5vw,1.5rem)] [grid-template-columns:repeat(auto-fit,minmax(260px,1fr))]',
    PROJECTS_2COL: 'grid gap-[clamp(1.5rem,3vw,2.5rem)] grid-cols-1 md:grid-cols-2',
  },
  FLEX: {
    CENTER: 'flex items-center justify-center',
    BETWEEN: 'flex items-center justify-between',
    COL_CENTER: 'flex flex-col items-center',
    WRAP: 'flex flex-wrap',
  },
} as const

/**
 * Spacing classes
 */
export const SPACING = {
  SECTION: {
    HEADER: 'mb-12',
    CONTENT: 'space-y-6',
    LARGE: 'space-y-10',
  },
  CARD: {
    GAP: 'gap-8',
    INTERNAL: 'gap-4',
    SMALL: 'gap-2',
  },
  TEXT: {
    HEADING: 'mb-2',
    PARAGRAPH: 'mb-4',
    LIST: 'space-y-2',
  },
  PADDING: {
    // Using clamp for fluid padding - adapts smoothly to screen size
    CONTAINER: 'px-[clamp(1rem,4vw,2rem)]',
    SECTION: 'py-[clamp(3rem,8vw,5rem)]',
  },
} as const
