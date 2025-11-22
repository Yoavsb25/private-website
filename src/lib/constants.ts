/**
 * Animation configuration constants
 */
export const ANIMATION_CONFIG = {
  // Viewport settings
  VIEWPORT: {
    HEADER: { once: true, margin: '-100px' } as const,
    CONTAINER: { once: true, margin: '-50px' } as const,
    NESTED: { once: true } as const,
  },
  
  // Common initial states
  INITIAL: {
    FADE_UP: { opacity: 0, y: -20 },
    FADE_DOWN: { opacity: 0, y: 20 },
    SCALE: { opacity: 0, scale: 0.8 },
  },
  
  // Common hover states
  HOVER: {
    LIFT_SMALL: { y: -4 },
    LIFT_MEDIUM: { y: -8 },
    SCALE_UP: { scale: 1.05 },
    SCALE_UP_LARGE: { scale: 1.1 },
  },
  
  // Common tap states
  TAP: {
    SCALE_DOWN: { scale: 0.95 },
    SCALE_DOWN_SMALL: { scale: 0.98 },
  },
  
  // Transition durations (in seconds)
  DURATION: {
    FAST: 0.2,
    NORMAL: 0.3,
    MEDIUM: 0.4,
    SLOW: 0.5,
    SLOWER: 0.6,
  },
  
  // Animation delays (in seconds)
  DELAY: {
    SHORT: 0.2,
    MEDIUM: 0.3,
    LONG: 0.4,
  },
} as const

/**
 * UI configuration constants
 * Note: Most UI config has been moved to more specific constants (TYPOGRAPHY, SPACING, LAYOUT, COMPONENT_CLASSES)
 * This remains only for SectionHeader text-center class
 */
export const UI_CONFIG = {
  CLASSES: {
    SECTION_HEADER: 'text-center',
  },
} as const

/**
 * Section titles
 */
export const SECTION_TITLES = {
  SKILLS: 'Programming Languages & Tools',
  EDUCATION: 'Education',
  EXPERIENCE: 'Experience',
  PROJECTS: 'Featured Projects',
  CONTACT: 'Get In Touch',
} as const

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
 * Section IDs - used for navigation and anchors
 */
export const SECTION_IDS = {
  HERO: 'hero',
  SKILLS: 'skills',
  EDUCATION: 'education',
  EXPERIENCE: 'experience',
  TIMELINE: 'timeline',
  PROJECTS: 'projects',
  CONTACT: 'contact',
} as const

/**
 * Navigation configuration
 */
export const NAVIGATION = {
  ITEMS: [
    { id: SECTION_IDS.TIMELINE, label: 'Timeline' },
    { id: SECTION_IDS.PROJECTS, label: 'Projects' },
    { id: SECTION_IDS.CONTACT, label: 'Contact' },
  ],
  SCROLL_OFFSET: 80,
  SCROLL_THRESHOLD: 50,
} as const

/**
 * Typography classes
 */
export const TYPOGRAPHY = {
  HEADING: {
    H1: 'text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight',
    H2: 'text-3xl font-bold',
    H3: 'text-lg font-bold',
    H4: 'text-sm font-semibold',
  },
  BODY: {
    LARGE: 'text-lg sm:text-xl',
    BASE: 'text-sm',
    SMALL: 'text-xs',
  },
  COLOR: {
    FOREGROUND: 'text-foreground',
    MUTED: 'text-muted-foreground',
    MUTED_OPACITY: 'text-foreground/80',
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
 * Common component classes
 */
export const COMPONENT_CLASSES = {
  CARD: {
    HOVER: 'hover:shadow-lg transition-all duration-300',
    HOVER_LARGE: 'hover:shadow-xl transition-all duration-300',
    BACKDROP: 'border-border/50 bg-background/40 backdrop-blur-sm',
  },
  BUTTON: {
    SOCIAL: 'w-10 h-10 sm:w-12 sm:h-20 md:w-20 md:h-14 rounded-lg border border-border flex items-center justify-center hover:bg-accent transition-colors',
  },
  TOOLTIP: 'absolute -top-12 left-1/2 transform -translate-x-1/2 bg-foreground text-background px-2 py-1 rounded text-xs whitespace-nowrap z-10',
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


