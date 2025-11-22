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
    BASE: 'h-6 w-6',
    SM: 'sm:h-7 sm:w-7',
    MD: 'md:h-8 md:w-8',
    FULL: 'h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8',
  },
  CONTAINER_SIZES: {
    BASE: 'h-12 w-12',
    SM: 'sm:h-14 sm:w-14',
    MD: 'md:h-16 md:w-16',
    FULL: 'h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16',
  },
  GRID: {
    COLS: 'grid-cols-3',
    GAP: 'gap-4 sm:gap-5',
  },
} as const

/**
 * Common icon sizes used across sections
 */
export const ICON_SIZES = {
  SMALL: 'w-3 h-3',
  SMALL_RESPONSIVE: 'w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5',
  MEDIUM: 'w-5 h-5',
  MEDIUM_RESPONSIVE: 'w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7',
  LARGE: 'w-7 h-7',
} as const

/**
 * Common spacing values
 */
export const SECTION_SPACING = {
  TIMELINE_DESCRIPTION: 'mb-8',
  TIMELINE_CONTAINER: 'py-10',
  TIMELINE_ITEMS: 'space-y-20 md:space-y-28',
  CONTACT_HEADER: 'mb-4',
  PROJECTS_FOOTER: 'gap-2',
} as const

/**
 * Common class combinations
 */
export const SECTION_CLASSES = {
  TIMELINE_ITEM_CONTAINER: 'relative flex flex-col items-center md:flex-row md:items-start',
  PROJECTS_IMAGE_WRAPPER: 'overflow-hidden rounded-t-lg relative',
  PROJECTS_IMAGE: 'h-full w-full object-cover',
  CONTACT_CARD_HEADER: 'flex items-center gap-2 text-lg font-semibold',
  SKILLS_ICON_CONTAINER: 'flex h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16 items-center justify-center rounded-xl border border-border bg-card shadow-sm cursor-pointer relative',
} as const

