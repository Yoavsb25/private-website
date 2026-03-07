import { motion, useScroll } from 'framer-motion'
import { prefersReducedMotion } from '@/lib/animations'

export function ScrollProgress() {
  const { scrollYProgress } = useScroll()

  if (prefersReducedMotion()) {
    return null
  }

  return (
    <motion.div
      aria-hidden="true"
      className="fixed top-0 left-0 right-0 h-1 bg-primary/20 z-50 origin-left"
      style={{ scaleX: scrollYProgress }}
    />
  )
}
