import { Variants } from 'framer-motion'
import { slideInLeft, slideInRight, getAnimationVariants } from '@/lib/animations'

// Pre-computed — no new object created per render
export const EVEN_ITEM: Variants = getAnimationVariants(slideInLeft)
export const ODD_ITEM: Variants = getAnimationVariants(slideInRight)
