import { Variants } from 'framer-motion'

/**
 * Check if user prefers reduced motion
 */
export const prefersReducedMotion = () => {
  if (typeof window === 'undefined') return false
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

/**
 * Animation duration constants
 */
export const ANIMATION_DURATION = {
  fast: 0.2,
  normal: 0.3,
  slow: 0.5,
  slower: 0.8,
} as const

/**
 * Animation easing functions
 */
export const EASING = {
  easeInOut: [0.4, 0, 0.2, 1],
  easeOut: [0, 0, 0.2, 1],
  easeIn: [0.4, 0, 1, 1],
  spring: [0.68, -0.55, 0.265, 1.55],
} as const

/**
 * Fade in animation variant
 */
export const fadeIn: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: prefersReducedMotion() ? 0 : ANIMATION_DURATION.normal,
      ease: EASING.easeOut,
    },
  },
}

/**
 * Fade in from bottom animation variant
 */
export const fadeInUp: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: prefersReducedMotion() ? 0 : ANIMATION_DURATION.normal,
      ease: EASING.easeOut,
    },
  },
}

/**
 * Fade in from top animation variant
 */
export const fadeInDown: Variants = {
  hidden: {
    opacity: 0,
    y: -20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: prefersReducedMotion() ? 0 : ANIMATION_DURATION.normal,
      ease: EASING.easeOut,
    },
  },
}

/**
 * Scale in animation variant
 */
export const scaleIn: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.9,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: prefersReducedMotion() ? 0 : ANIMATION_DURATION.normal,
      ease: EASING.easeOut,
    },
  },
}

/**
 * Slide in from left animation variant
 */
export const slideInLeft: Variants = {
  hidden: {
    opacity: 0,
    x: -50,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: prefersReducedMotion() ? 0 : ANIMATION_DURATION.normal,
      ease: EASING.easeOut,
    },
  },
}

/**
 * Slide in from right animation variant
 */
export const slideInRight: Variants = {
  hidden: {
    opacity: 0,
    x: 50,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: prefersReducedMotion() ? 0 : ANIMATION_DURATION.normal,
      ease: EASING.easeOut,
    },
  },
}

/**
 * Stagger container variant for staggered children animations
 */
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: prefersReducedMotion() ? 0 : 0.1,
      delayChildren: prefersReducedMotion() ? 0 : 0.1,
    },
  },
}

/**
 * Stagger item variant for use with staggerContainer
 */
export const staggerItem: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: prefersReducedMotion() ? 0 : ANIMATION_DURATION.normal,
      ease: EASING.easeOut,
    },
  },
}

/**
 * Card hover animation variant
 */
export const cardHover: Variants = {
  rest: {
    scale: 1,
    y: 0,
    transition: {
      duration: prefersReducedMotion() ? 0 : ANIMATION_DURATION.fast,
      ease: EASING.easeOut,
    },
  },
  hover: {
    scale: 1.02,
    y: -8,
    transition: {
      duration: prefersReducedMotion() ? 0 : ANIMATION_DURATION.fast,
      ease: EASING.easeOut,
    },
  },
  tap: {
    scale: 0.98,
    y: -4,
    transition: {
      duration: prefersReducedMotion() ? 0 : 0.1,
    },
  },
}

/**
 * Button hover animation variant
 */
export const buttonHover: Variants = {
  rest: {
    scale: 1,
  },
  hover: {
    scale: 1.05,
    transition: {
      duration: prefersReducedMotion() ? 0 : ANIMATION_DURATION.fast,
      ease: EASING.easeOut,
    },
  },
  tap: {
    scale: 0.95,
    transition: {
      duration: prefersReducedMotion() ? 0 : 0.1,
    },
  },
}

/**
 * Icon hover animation variant
 */
export const iconHover: Variants = {
  rest: {
    scale: 1,
    rotate: 0,
  },
  hover: {
    scale: 1.1,
    rotate: 5,
    transition: {
      duration: prefersReducedMotion() ? 0 : ANIMATION_DURATION.fast,
      ease: EASING.easeOut,
    },
  },
}

/**
 * Mobile menu slide animation variant
 */
export const mobileMenuSlide: Variants = {
  closed: {
    x: '100%',
    transition: {
      duration: prefersReducedMotion() ? 0 : ANIMATION_DURATION.normal,
      ease: EASING.easeInOut,
    },
  },
  open: {
    x: 0,
    transition: {
      duration: prefersReducedMotion() ? 0 : ANIMATION_DURATION.normal,
      ease: EASING.easeInOut,
    },
  },
}

/**
 * Backdrop fade animation variant
 */
export const backdropFade: Variants = {
  closed: {
    opacity: 0,
    pointerEvents: 'none',
  },
  open: {
    opacity: 1,
    pointerEvents: 'auto',
    transition: {
      duration: prefersReducedMotion() ? 0 : ANIMATION_DURATION.fast,
    },
  },
}

/**
 * Typewriter effect variant (for text reveals)
 */
export const typewriter: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: prefersReducedMotion() ? 0 : 0.5,
      ease: EASING.easeOut,
    },
  },
}

/**
 * Get animation variants with reduced motion support
 */
export const getAnimationVariants = (variants: Variants): Variants => {
  if (prefersReducedMotion()) {
    // Return simplified variants that skip animations
    return {
      hidden: { opacity: 1 },
      visible: { opacity: 1 },
    }
  }
  return variants
}

