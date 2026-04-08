import { motion } from 'framer-motion'
import { useScrollProgress } from '@/hooks'
import { prefersReducedMotion } from '@/lib/animations'

export function ScrollProgress() {
  const progress = useScrollProgress()

  if (prefersReducedMotion()) return null

  return (
    <motion.div
      className="fixed left-0 right-0 top-0 z-[51] h-px origin-left bg-accent/50"
      style={{ scaleX: progress }}
      initial={{ scaleX: 0 }}
      animate={{ scaleX: progress }}
      transition={{ duration: 0.1 }}
    />
  )
}
