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

