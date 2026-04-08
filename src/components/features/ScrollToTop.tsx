import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUp } from 'lucide-react'
import { useScrollPosition } from '@/hooks'
import { prefersReducedMotion } from '@/lib/animations'

export function ScrollToTop() {
  const hasScrolledPast = useScrollPosition(400)

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: prefersReducedMotion() ? 'auto' : 'smooth',
    })
  }

  return (
    <AnimatePresence>
      {hasScrolledPast && (
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.85, y: 20 }}
          transition={{
            duration: prefersReducedMotion() ? 0 : 0.3,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="fixed bottom-[clamp(1.25rem,3vw,2rem)] right-[clamp(1.25rem,3vw,2rem)] z-50"
        >
          <button
            onClick={scrollToTop}
            className="flex items-center justify-center rounded-full h-11 w-11 bg-accent text-accent-foreground shadow-premium-md hover:shadow-glow-accent transition-all duration-300 active:scale-95"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
