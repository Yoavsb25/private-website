import { motion } from 'framer-motion'
import { useScrollProgress } from '@/hooks'
import { prefersReducedMotion } from '@/lib/animations'

export function ScrollProgress() {
  const progress = useScrollProgress()

  if (prefersReducedMotion()) {
    return null
  }

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[2px] bg-accent/60 z-50 origin-left"
      style={{
        scaleX: progress,
      }}
      initial={{ scaleX: 0 }}
      animate={{ scaleX: progress }}
      transition={{ duration: 0.1 }}
    />
  )
}
