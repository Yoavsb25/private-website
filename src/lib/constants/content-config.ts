import { LAYOUT, SPACING } from './layout-config'

/**
 * Aspect ratios
 */
export const ASPECT_RATIOS = {
  PROJECT_IMAGE: '16/9',
} as const

/**
 * Icon mappings for contact methods
 */
export const CONTACT_ICON_MAP = {
  Mail: 'Mail',
  Linkedin: 'Linkedin',
  Github: 'Github',
  ExternalLink: 'ExternalLink',
} as const

/**
 * Hero section constants
 */
export const HERO = {
  SECTION: {
    CLASS_NAME: `${LAYOUT.FLEX.CENTER} min-h-screen`,
  },
  CONTAINER: {
    SIZE: 'small' as const,
  },
  GRID: {
    // Hero grid: 1 column on mobile, always 2 columns on desktop (image left, content right)
    // Using explicit 2-column grid to ensure proper ordering
    CONTAINER: 'grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-center',
  },
  LEFT_SIDE: {
    CONTAINER: 'flex flex-col items-center md:items-start',
  },
  IMAGE: {
    WRAPPER: 'relative',
    // Using clamp for fluid sizing - automatically scales between min and max
    FRAME: 'w-[clamp(12rem,20vw,20rem)] h-[clamp(16rem,25vw,28rem)] rounded-2xl overflow-hidden bg-[#C6D2FF] p-2 shadow-lg',
    CLASS_NAME: 'w-full h-full object-cover rounded-xl',
  },
  RIGHT_SIDE: {
    CONTENT: `${SPACING.SECTION.CONTENT} text-center sm:text-left`,
    TITLE: 'text-[clamp(1.5rem,4vw,2rem)] font-bold',
  },
  SOCIAL_ICONS: {
    DEFAULT: 'flex gap-4 justify-center sm:justify-start pt-4',
    IN_CONTENT: 'flex gap-3 sm:gap-4', // Removed justify-center/start as parent handles it
    ICON_SIZE: 'w-[clamp(1.25rem,3vw,1.75rem)] h-[clamp(1.25rem,3vw,1.75rem)]',
    LINKEDIN_COLOR: 'text-blue-600',
  },
  BUTTONS: {
    // Container for all buttons in one row: LinkedIn, GitHub, Download CV
    CONTAINER: 'flex flex-wrap items-center gap-3 sm:gap-4 pt-4 justify-center sm:justify-start',
    LINK: 'min-w-[min(100%,300px)]',
    // Match the height of social icon buttons (h-10 sm:h-12) for alignment
    CLASS_NAME: 'h-10 sm:h-12 w-full sm:w-auto px-[clamp(1rem,4vw,2rem)] text-sm sm:text-base rounded-md flex items-center justify-center',
  },
} as const

