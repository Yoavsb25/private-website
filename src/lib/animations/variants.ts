import { Variants } from 'framer-motion'
import { EASE_OUT_EXPO } from '@/lib/constants/animation-config'

/**
 * Check if user prefers reduced motion
 */
export const prefersReducedMotion = () => {
  if (typeof window === 'undefined') return false
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

const ANIMATION_DURATION = {
  fast: 0.2,
  normal: 0.35,
  slow: 0.55,
  slower: 0.8,
} as const

export const slideInLeft: Variants = {
  hidden: {
    opacity: 0,
    x: -40,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: prefersReducedMotion() ? 0 : ANIMATION_DURATION.normal,
      ease: EASE_OUT_EXPO,
    },
  },
}

export const slideInRight: Variants = {
  hidden: {
    opacity: 0,
    x: 40,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: prefersReducedMotion() ? 0 : ANIMATION_DURATION.normal,
      ease: EASE_OUT_EXPO,
    },
  },
}

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: prefersReducedMotion() ? 0 : 0.08,
      delayChildren: prefersReducedMotion() ? 0 : 0.1,
    },
  },
}

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
      ease: EASE_OUT_EXPO,
    },
  },
}

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
      ease: EASE_OUT_EXPO,
    },
  },
}

export const mobileMenuSlide: Variants = {
  closed: {
    x: '100%',
    transition: {
      duration: prefersReducedMotion() ? 0 : ANIMATION_DURATION.normal,
      ease: EASE_OUT_EXPO,
    },
  },
  open: {
    x: 0,
    transition: {
      duration: prefersReducedMotion() ? 0 : ANIMATION_DURATION.normal,
      ease: EASE_OUT_EXPO,
    },
  },
}

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
 * Get animation variants with reduced motion support
 */
export const getAnimationVariants = (variants: Variants): Variants => {
  if (prefersReducedMotion()) {
    return {
      hidden: { opacity: 1 },
      visible: { opacity: 1 },
    }
  }
  return variants
}
