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
    // Using clamp for fluid typography - scales smoothly between sizes
    H1: 'text-[clamp(1.875rem,5vw,3.75rem)] font-bold tracking-tight',
    H2: 'text-[clamp(1.5rem,4vw,2.25rem)] font-bold',
    H3: 'text-[clamp(1rem,3vw,1.125rem)] font-bold',
    H4: 'text-[clamp(0.75rem,2vw,0.875rem)] font-semibold',
  },
  BODY: {
    LARGE: 'text-[clamp(1rem,2.5vw,1.25rem)]',
    BASE: 'text-[clamp(0.875rem,2vw,1rem)]',
    SMALL: 'text-[clamp(0.75rem,1.5vw,0.875rem)]',
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
    // Social icon buttons: square buttons matching height with Download CV button
    SOCIAL: 'w-10 h-10 sm:w-12 sm:h-12 rounded-lg border border-border flex items-center justify-center hover:bg-accent transition-colors',
  },
  TOOLTIP: 'absolute -top-12 left-1/2 transform -translate-x-1/2 bg-foreground text-background px-2 py-1 rounded text-xs whitespace-nowrap z-10',
} as const

