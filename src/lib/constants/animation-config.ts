/**
 * Animation configuration constants — unified premium motion system.
 * All Framer Motion timing references flow from here.
 */

/** Expo-style ease-out for natural deceleration — the premium default */
export const EASE_OUT_EXPO: [number, number, number, number] = [0.16, 1, 0.3, 1]

export const ANIMATION_CONFIG = {
  VIEWPORT: {
    HEADER: { once: true, margin: '-100px' } as const,
    CONTAINER: { once: true, margin: '-60px' } as const,
    NESTED: { once: true } as const,
    FOOTER: { once: true, margin: '-40px' } as const,
  },

  INITIAL: {
    FADE_UP: { opacity: 0, y: -20 },
    FADE_DOWN: { opacity: 0, y: 24 },
    SCALE: { opacity: 0, scale: 0.85 },
  },

  HOVER: {
    LIFT_SMALL: { y: -4, transition: { duration: 0.4, ease: EASE_OUT_EXPO } },
    LIFT_MEDIUM: { y: -8, transition: { duration: 0.4, ease: EASE_OUT_EXPO } },
    SCALE_UP: { scale: 1.04, transition: { duration: 0.3, ease: EASE_OUT_EXPO } },
    SCALE_UP_LARGE: { scale: 1.08, transition: { duration: 0.3, ease: EASE_OUT_EXPO } },
    ICON: { scale: 1.12, transition: { duration: 0.25, ease: EASE_OUT_EXPO } },
  },

  TAP: {
    SCALE_DOWN: { scale: 0.96 },
    SCALE_DOWN_SMALL: { scale: 0.98 },
  },

  DURATION: {
    FAST: 0.2,
    NORMAL: 0.35,
    MEDIUM: 0.45,
    SLOW: 0.55,
    SLOWER: 0.7,
    DRAW: 0.7,
    DRAW_BORDER: 0.9,
  },

  DELAY: {
    SHORT: 0.2,
    MEDIUM: 0.3,
    LONG: 0.4,
    AFTER_LINE: 0.5,
    AFTER_HEADER: 0.65,
    AFTER_TEXT: 0.8,
    STAGGER_ICON: 0.06,
    ICON_DELAY: 0.3,
  },

  FLIP: {
    SPRING: { type: 'spring' as const, stiffness: 240, damping: 28 },
    DURATION: 0.55,
  },
} as const
