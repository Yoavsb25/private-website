import { useEffect, type ReactElement } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { prefersReducedMotion } from '@/lib/animations'

interface LoadingScreenProps {
  isVisible: boolean
  onComplete: () => void
  duration?: number
}

export function LoadingScreen({
  isVisible,
  onComplete,
  duration = 1500,
}: LoadingScreenProps): ReactElement | null {
  useEffect(() => {
    if (prefersReducedMotion()) {
      onComplete()
      return
    }
    if (isVisible) {
      const timer = setTimeout(onComplete, duration)
      return () => clearTimeout(timer)
    }
  }, [isVisible, onComplete, duration])

  if (prefersReducedMotion()) return null

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          key="loading"
          className="fixed inset-0 z-[99999] flex items-center justify-center bg-background"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.span
            className="font-display font-extrabold tracking-tighter select-none"
            style={{
              fontSize: 'clamp(4rem, 15vw, 10rem)',
              color: `hsl(var(--accent))`,
            }}
            initial={{ opacity: 0, scale: 0.88 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            YS
          </motion.span>

          <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-border/30">
            <motion.div
              className="h-full"
              style={{ background: `hsl(var(--accent))` }}
              initial={{ width: '0%' }}
              animate={{ width: '100%' }}
              transition={{ duration: duration / 1000, ease: 'linear' }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
