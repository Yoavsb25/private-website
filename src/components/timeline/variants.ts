/**
 * Animation variants for timeline components
 */
import { Variants } from 'framer-motion'
import { slideInLeft, slideInRight, staggerContainer, getAnimationVariants } from '@/lib/animations'

/**
 * Container animation variant for timeline
 */
export const timelineContainer: Variants = getAnimationVariants(staggerContainer)

// Pre-computed — no new object created per render
export const EVEN_ITEM: Variants = getAnimationVariants(slideInLeft)
export const ODD_ITEM: Variants = getAnimationVariants(slideInRight)

/** @deprecated Use EVEN_ITEM / ODD_ITEM directly */
export function timelineItem(isEven: boolean): Variants {
  return isEven ? EVEN_ITEM : ODD_ITEM
}
