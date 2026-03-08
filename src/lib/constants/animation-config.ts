/**
 * Animation configuration constants
 */
export const ANIMATION_CONFIG = {
  // Viewport settings
  VIEWPORT: {
    HEADER: { once: true, margin: '-100px' } as const,
    CONTAINER: { once: true, margin: '-50px' } as const,
    NESTED: { once: true } as const,
    FOOTER: { once: true, margin: '-40px' } as const,
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
    ICON: { scale: 1.15 },
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
    DRAW: 0.6,
    DRAW_BORDER: 0.8,
  },

  // Animation delays (in seconds)
  DELAY: {
    SHORT: 0.2,
    MEDIUM: 0.3,
    LONG: 0.4,
    AFTER_LINE: 0.45,
    AFTER_HEADER: 0.6,
    AFTER_TEXT: 0.75,
    STAGGER_ICON: 0.05,
    ICON_DELAY: 0.3,
    STAGGER_CARD: 0.15,
  },

  // Card flip animation config (used by ProjectCard)
  FLIP: {
    SPRING: { type: 'spring' as const, stiffness: 260, damping: 30 },
    DURATION: 0.5,
  },

  // Named ease curves (use these instead of raw cubic bezier literals)
  EASE: {
    OUT: [0, 0, 0.2, 1] as [number, number, number, number],
    IN_OUT: [0.4, 0, 0.2, 1] as [number, number, number, number],
    CUBIC: [0.25, 0.1, 0.25, 1] as [number, number, number, number],
    SPRING_BOUNCE: [0.2, 0.65, 0.3, 0.9] as [number, number, number, number],
  },

  // Spring transition for the nav active-section underline
  NAV_INDICATOR_SPRING: { type: 'spring' as const, stiffness: 380, damping: 30 },
} as const
