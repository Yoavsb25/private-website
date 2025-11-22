import { Variants } from 'framer-motion'
import { ANIMATION_CONFIG } from '../constants'
import { getAnimationVariants } from '../animations/variants'

/**
 * Creates a standard section header animation configuration
 */
export const createSectionHeaderAnimation = () => ({
  initial: ANIMATION_CONFIG.INITIAL.FADE_UP,
  whileInView: { opacity: 1, y: 0 },
  viewport: ANIMATION_CONFIG.VIEWPORT.HEADER,
  transition: { duration: ANIMATION_CONFIG.DURATION.SLOW },
})

/**
 * Creates a standard card hover animation
 */
export const createCardHoverAnimation = (liftAmount: 'small' | 'medium' = 'small') => ({
  whileHover: liftAmount === 'small' 
    ? ANIMATION_CONFIG.HOVER.LIFT_SMALL 
    : ANIMATION_CONFIG.HOVER.LIFT_MEDIUM,
  transition: { duration: ANIMATION_CONFIG.DURATION.NORMAL },
})

/**
 * Creates a standard button interaction animation
 */
export const createButtonAnimation = () => ({
  whileHover: ANIMATION_CONFIG.HOVER.SCALE_UP,
  whileTap: ANIMATION_CONFIG.TAP.SCALE_DOWN,
})

/**
 * Creates a standard badge hover animation
 */
export const createBadgeAnimation = () => ({
  whileHover: { 
    scale: ANIMATION_CONFIG.HOVER.SCALE_UP_LARGE.scale, 
    y: -2 
  },
  whileTap: ANIMATION_CONFIG.TAP.SCALE_DOWN,
})

/**
 * Creates a standard container animation with stagger
 */
export const createStaggerContainerAnimation = (variants: Variants) => ({
  variants: getAnimationVariants(variants),
  initial: 'hidden' as const,
  whileInView: 'visible' as const,
  viewport: ANIMATION_CONFIG.VIEWPORT.CONTAINER,
})

/**
 * Creates a nested element animation with stagger
 */
export const createStaggerItemAnimation = (variants: Variants) => ({
  variants: getAnimationVariants(variants),
  initial: 'hidden' as const,
  whileInView: 'visible' as const,
  viewport: ANIMATION_CONFIG.VIEWPORT.NESTED,
})

/**
 * Creates a fade-in animation with delay
 */
export const createFadeInAnimation = (delay: number = 0) => ({
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  viewport: ANIMATION_CONFIG.VIEWPORT.NESTED,
  transition: { delay },
})

