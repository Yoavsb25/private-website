import { useEffect, type ReactElement } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { prefersReducedMotion } from '@/lib/animations'

interface LoadingScreenProps {
  isVisible: boolean
  onComplete: () => void
}

export function LoadingScreen({ isVisible, onComplete }: LoadingScreenProps): ReactElement | null {
  useEffect(() => {
    if (prefersReducedMotion()) {
      onComplete()
      return
    }
    if (isVisible) {
      const timer = setTimeout(onComplete, 400)
      return () => clearTimeout(timer)
    }
  }, [isVisible, onComplete])

  if (prefersReducedMotion()) return null

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          key="loading"
          className="fixed inset-0 z-[99999] flex items-center justify-center bg-background"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
        />
      )}
    </AnimatePresence>
  )
}
