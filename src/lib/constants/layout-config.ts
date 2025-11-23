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
    // Modern fluid grids using auto-fit (preferred approach)
    // Automatically adapts to container width - no explicit breakpoints needed
    AUTO_FIT: 'grid gap-[clamp(1rem,3vw,2rem)] [grid-template-columns:repeat(auto-fit,minmax(340px,1fr))]',
    AUTO_FIT_SMALL: 'grid gap-[clamp(1rem,2.5vw,1.5rem)] [grid-template-columns:repeat(auto-fit,minmax(260px,1fr))]',
    AUTO_FIT_LARGE: 'grid gap-[clamp(1rem,3vw,2rem)] [grid-template-columns:repeat(auto-fit,minmax(320px,1fr))]',
    // Skills grid: 1 column on mobile, always 3 on desktop (768px+)
    // Forces exactly 3 columns for the category cards (Languages, Frameworks, DevOps)
    SKILLS: 'grid gap-[clamp(1rem,3vw,2rem)] [grid-template-columns:repeat(auto-fit,minmax(250px,1fr))] md:[grid-template-columns:repeat(3,1fr)]',
    CONTACT: 'grid gap-[clamp(1rem,2.5vw,1.5rem)] [grid-template-columns:repeat(auto-fit,minmax(260px,1fr))]',
    // Legacy - kept for backward compatibility, but prefer AUTO_FIT variants
    RESPONSIVE_2: 'grid gap-[clamp(1rem,2.5vw,1.5rem)] [grid-template-columns:repeat(auto-fit,minmax(300px,1fr))]',
    RESPONSIVE_3: 'grid gap-[clamp(1rem,3vw,2rem)] [grid-template-columns:repeat(auto-fit,minmax(280px,1fr))]',
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

