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
    RESPONSIVE_2: 'grid gap-6 md:grid-cols-2',
    RESPONSIVE_3: 'grid gap-8 md:grid-cols-3',
    AUTO_FIT: 'grid gap-8 justify-center [grid-template-columns:repeat(auto-fit,minmax(320px,1fr))]',
    CONTACT: 'grid gap-6 justify-center [grid-template-columns:repeat(auto-fit,minmax(280px,1fr))]',
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
    CONTAINER: 'px-4 sm:px-6 lg:px-8',
    SECTION: 'py-16',
  },
} as const

