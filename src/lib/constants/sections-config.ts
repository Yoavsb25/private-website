/**
 * Section-specific constants
 * Contains hardcoded strings, labels, and section-specific configurations
 */

/**
 * Hero section constants
 */
export const HERO_LABELS = {
  GREETING: "Hello, I'm",
  BUTTONS: {
    DOWNLOAD_CV: 'Download CV',
    CONTACT_INFO: 'Contact Info',
  },
} as const

/**
 * Projects section constants
 */
export const PROJECTS_LABELS = {
  SECTIONS: {
    PROBLEM: 'Problem',
    SOLUTION: 'Solution',
    TECHNOLOGIES: 'Technologies',
    OUTCOMES: 'Outcomes',
  },
  BUTTONS: {
    LIVE_SITE: 'Live Site',
    SOURCE: 'Source',
  },
  ARIA_LABELS: {
    LIVE_SITE: (title: string) => `View ${title} live site`,
    SOURCE_CODE: (title: string) => `View ${title} source code`,
  },
} as const

/**
 * Contact section constants
 */
export const CONTACT_LABELS = {
  AVAILABILITY: {
    AVAILABLE: 'Available',
    NOT_AVAILABLE: 'Not available',
  },
  BUTTONS: {
    SEND_EMAIL: 'Send Email',
    VISIT_PROFILE: 'Visit Profile',
  },
  RESPONSE_TIME_PREFIX: 'Response time:',
  ARIA_LABEL: (label: string) => `Contact via ${label}`,
} as const

/**
 * Timeline section constants
 */
export const TIMELINE_LABELS = {
  TITLE: 'Timeline',
  DESCRIPTION: 'A single track that connects my education and experience into one story—hover or tap each milestone to dive into that chapter.',
} as const

/**
 * Skills section constants
 */
export const SKILLS_CONFIG = {
  ICON_SIZES: {
    BASE: 'h-5 w-5',
    SM: 'h-[clamp(1.25rem,3vw,1.75rem)] w-[clamp(1.25rem,3vw,1.75rem)]',
    MD: 'h-[clamp(1.5rem,4vw,2rem)] w-[clamp(1.5rem,4vw,2rem)]',
    FULL: 'h-[clamp(1.25rem,3vw,2rem)] w-[clamp(1.25rem,3vw,2rem)]',
  },
  CONTAINER_SIZES: {
    BASE: 'h-10 w-10',
    SM: 'h-[clamp(2.5rem,6vw,3.5rem)] w-[clamp(2.5rem,6vw,3.5rem)]',
    MD: 'h-[clamp(3rem,8vw,4rem)] w-[clamp(3rem,8vw,4rem)]',
    FULL: 'h-[clamp(2.5rem,6vw,4rem)] w-[clamp(2.5rem,6vw,4rem)]',
  },
  GRID: {
    // Skill items grid: 1 column on mobile, 2 on tablet, always 3 on desktop (1024px+)
    // This controls the individual skill icons within each category card
    COLS: 'grid [grid-template-columns:repeat(auto-fit,minmax(80px,1fr))] md:[grid-template-columns:repeat(2,1fr)] lg:[grid-template-columns:repeat(3,1fr)]',
    GAP: 'gap-[clamp(0.75rem,2vw,1.25rem)]',
  },
} as const

/**
 * Common icon sizes used across sections
 */
export const ICON_SIZES = {
  SMALL: 'w-3 h-3',
  SMALL_RESPONSIVE: 'w-[clamp(0.75rem,2vw,1.25rem)] h-[clamp(0.75rem,2vw,1.25rem)]',
  MEDIUM: 'w-5 h-5',
  MEDIUM_RESPONSIVE: 'w-[clamp(1.25rem,3vw,1.75rem)] h-[clamp(1.25rem,3vw,1.75rem)]',
  LARGE: 'w-[clamp(1.5rem,4vw,2rem)] h-[clamp(1.5rem,4vw,2rem)]',
} as const

/**
 * Common spacing values
 */
export const SECTION_SPACING = {
  // Using clamp for fluid spacing - adapts smoothly to screen size
  TIMELINE_DESCRIPTION: 'mb-[clamp(1.5rem,4vw,2rem)]',
  TIMELINE_CONTAINER: 'py-[clamp(1.5rem,4vw,2.5rem)]',
  TIMELINE_ITEMS: 'space-y-[clamp(3rem,8vw,7rem)]',
  CONTACT_HEADER: 'mb-[clamp(1rem,3vw,1.5rem)]',
  PROJECTS_FOOTER: 'gap-[clamp(0.5rem,1.5vw,0.75rem)]',
} as const

/**
 * Common class combinations
 */
export const SECTION_CLASSES = {
  TIMELINE_ITEM_CONTAINER: 'relative flex flex-col items-center sm:flex-row sm:items-start w-full',
  PROJECTS_IMAGE_WRAPPER: 'overflow-hidden rounded-t-lg relative',
  PROJECTS_IMAGE: 'h-full w-full object-cover',
  CONTACT_CARD_HEADER: 'flex items-center gap-2 text-[clamp(1rem,2.5vw,1.125rem)] font-semibold',
  SKILLS_ICON_CONTAINER: 'flex h-[clamp(3rem,6vw,4rem)] w-[clamp(3rem,6vw,4rem)] items-center justify-center rounded-xl border border-border bg-card shadow-sm cursor-pointer relative',
} as const

