import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUp } from 'lucide-react'
import { useScrollPosition } from '@/hooks'
import { prefersReducedMotion } from '@/lib/animations'
import { Button } from '../ui/button'

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
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          transition={{
            duration: prefersReducedMotion() ? 0 : 0.2,
            ease: 'easeOut',
          }}
          className="fixed bottom-[clamp(1rem,3vw,2rem)] right-[clamp(1rem,3vw,2rem)] z-50"
        >
          <Button
            onClick={scrollToTop}
            size="lg"
            className="rounded-full h-[clamp(3rem,8vw,4rem)] w-[clamp(3rem,8vw,4rem)] p-0 shadow-lg hover:shadow-xl transition-shadow"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-[clamp(1.25rem,4vw,1.75rem)] h-[clamp(1.25rem,4vw,1.75rem)]" />
          </Button>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

