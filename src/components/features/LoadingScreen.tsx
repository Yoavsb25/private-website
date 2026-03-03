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
          transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
        >
          {/* Monogram */}
          <motion.span
            className="font-extrabold tracking-tighter select-none"
            style={{
              fontSize: 'clamp(4rem, 15vw, 10rem)',
              fontFamily: "'Bricolage Grotesque', system-ui, sans-serif",
              color: `hsl(var(--accent))`,
            }}
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, ease: [0.2, 0.65, 0.3, 0.9] }}
          >
            YS
          </motion.span>

          {/* Progress line */}
          <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-border">
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
