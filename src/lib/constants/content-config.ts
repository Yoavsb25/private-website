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
    CONTAINER: 'grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center',
  },
  LEFT_SIDE: {
    CONTAINER: 'flex flex-col items-center md:items-start',
  },
  IMAGE: {
    WRAPPER: 'relative',
    FRAME: 'w-48 h-64 sm:w-64 sm:h-80 md:w-72 md:h-96 lg:w-80 lg:h-[28rem] rounded-2xl overflow-hidden bg-[#C6D2FF] p-2 shadow-lg',
    CLASS_NAME: 'w-full h-full object-cover rounded-xl',
  },
  RIGHT_SIDE: {
    CONTENT: `${SPACING.SECTION.CONTENT} text-center md:text-left`,
    TITLE: 'text-2xl sm:text-3xl font-bold',
  },
  SOCIAL_ICONS: {
    DEFAULT: 'flex gap-4 justify-center md:justify-start pt-4',
    IN_CONTENT: 'flex justify-center md:justify-start',
    ICON_SIZE: 'w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7',
    LINKEDIN_COLOR: 'text-blue-600',
  },
  BUTTONS: {
    CONTAINER: 'flex flex-col sm:flex-row gap-4 pt-4',
    LINK: 'w-full sm:w-auto',
    CLASS_NAME: 'px-4 py-2 text-xs sm:px-6 sm:py-2 sm:text-sm md:px-8 md:py-3 md:text-base rounded-md',
  },
} as const

