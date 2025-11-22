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

