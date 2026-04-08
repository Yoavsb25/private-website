/**
 * UI configuration constants
 */
export const UI_CONFIG = {
  CLASSES: {
    SECTION_HEADER: 'text-center',
  },
} as const

/**
 * Typography classes — premium type hierarchy with Bricolage Grotesque display
 * and intentional weight/tracking contrast per level.
 */
export const TYPOGRAPHY = {
  HEADING: {
    H1: 'font-display text-[clamp(2.5rem,6vw,4.5rem)] font-extrabold tracking-[-0.025em] leading-[0.95]',
    H2: 'font-display text-[clamp(1.75rem,4.5vw,2.75rem)] font-bold tracking-[-0.015em] leading-[1.1]',
    H3: 'font-display text-[clamp(1.125rem,2.5vw,1.375rem)] font-semibold leading-[1.3]',
    H4: 'font-display text-[clamp(0.875rem,2vw,1.0625rem)] font-semibold leading-[1.4]',
  },
  BODY: {
    LARGE: 'text-[clamp(1.0625rem,2.5vw,1.25rem)] leading-[1.65]',
    BASE: 'text-[clamp(0.9375rem,2vw,1.0625rem)] leading-[1.7]',
    SMALL: 'text-[clamp(0.8125rem,1.5vw,0.875rem)] leading-[1.6]',
  },
  COLOR: {
    FOREGROUND: 'text-foreground',
    MUTED: 'text-muted-foreground',
    MUTED_OPACITY: 'text-foreground/80',
  },
} as const

/**
 * Common component classes — premium interaction patterns
 */
export const COMPONENT_CLASSES = {
  CARD: {
    HOVER: 'hover:shadow-premium transition-all duration-400',
    HOVER_LARGE: 'hover:shadow-premium-md transition-all duration-400',
    BACKDROP: 'border-border/50 bg-background/40 backdrop-blur-sm',
  },
  BUTTON: {
    SOCIAL:
      'w-10 h-10 sm:w-12 sm:h-12 rounded-lg border border-border bg-card flex items-center justify-center hover:border-accent/30 hover:shadow-glow-accent transition-all duration-300',
  },
  TOOLTIP:
    'absolute -top-12 left-1/2 transform -translate-x-1/2 bg-foreground text-background px-3 py-1.5 rounded-md text-xs whitespace-nowrap z-10',
} as const
