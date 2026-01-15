/**
 * Animation variants for timeline components
 */
import { Variants } from 'framer-motion'
import {
  slideInLeft,
  slideInRight,
  staggerContainer,
  getAnimationVariants,
} from '@/lib/animations'

/**
 * Container animation variant for timeline
 */
export const timelineContainer: Variants = getAnimationVariants(staggerContainer)

/**
 * Item animation variant based on position (even/odd)
 */
export function timelineItem(isEven: boolean): Variants {
  return getAnimationVariants(isEven ? slideInLeft : slideInRight)
}

/**
 * Expand animation variant for timeline card content
 */
export const timelineExpand: Variants = getAnimationVariants({
  hidden: { height: 0, opacity: 0 },
  visible: {
    height: 'auto',
    opacity: 1,
    transition: { duration: 0.35, ease: 'easeOut' },
  },
  exit: { height: 0, opacity: 0 },
})
