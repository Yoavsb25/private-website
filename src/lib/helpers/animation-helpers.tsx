import { Variants } from 'framer-motion'
import { ANIMATION_CONFIG, EASE_OUT_EXPO } from '../constants/animation-config'
import { getAnimationVariants } from '../animations/variants'

export const createSectionHeaderAnimation = () => ({
  initial: ANIMATION_CONFIG.INITIAL.FADE_UP,
  whileInView: { opacity: 1, y: 0 },
  viewport: ANIMATION_CONFIG.VIEWPORT.HEADER,
  transition: {
    duration: ANIMATION_CONFIG.DURATION.SLOW,
    ease: EASE_OUT_EXPO,
  },
})

export const createCardHoverAnimation = (liftAmount: 'small' | 'medium' = 'small') => ({
  whileHover:
    liftAmount === 'small' ? ANIMATION_CONFIG.HOVER.LIFT_SMALL : ANIMATION_CONFIG.HOVER.LIFT_MEDIUM,
  transition: { duration: ANIMATION_CONFIG.DURATION.NORMAL },
})

export const createButtonAnimation = () => ({
  whileHover: ANIMATION_CONFIG.HOVER.SCALE_UP,
  whileTap: ANIMATION_CONFIG.TAP.SCALE_DOWN,
})

export const createBadgeAnimation = () => ({
  whileHover: {
    scale: ANIMATION_CONFIG.HOVER.SCALE_UP_LARGE.scale,
    y: -2,
  },
  whileTap: ANIMATION_CONFIG.TAP.SCALE_DOWN,
})

export const createStaggerContainerAnimation = (variants: Variants) => ({
  variants: getAnimationVariants(variants),
  initial: 'hidden' as const,
  whileInView: 'visible' as const,
  viewport: ANIMATION_CONFIG.VIEWPORT.CONTAINER,
})

export const createStaggerItemAnimation = (variants: Variants) => ({
  variants: getAnimationVariants(variants),
  initial: 'hidden' as const,
  whileInView: 'visible' as const,
  viewport: ANIMATION_CONFIG.VIEWPORT.NESTED,
})

export const createFadeInAnimation = (delay: number = 0) => ({
  initial: { opacity: 0, y: 12 },
  whileInView: { opacity: 1, y: 0 },
  viewport: ANIMATION_CONFIG.VIEWPORT.NESTED,
  transition: {
    delay,
    duration: ANIMATION_CONFIG.DURATION.MEDIUM,
    ease: EASE_OUT_EXPO,
  },
})
