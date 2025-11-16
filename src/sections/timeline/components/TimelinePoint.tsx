import { motion, AnimatePresence } from 'framer-motion'
import type { TimelinePointProps } from '../types'
import { ANIMATION } from '../constants'

export function TimelinePoint({ isActive, isHovered, index, onClick }: TimelinePointProps) {
  const glow = isActive || isHovered

  return (
    <motion.button
      type="button"
      onClick={onClick}
      className="absolute left-1/2 hidden -translate-x-1/2 transform items-center justify-center md:flex z-20 focus:outline-none"
      initial={{ scale: 0, rotate: -180 }}
      animate={{ scale: 1, rotate: 0 }}
      transition={{
        delay: index * ANIMATION.ITEM_STAGGER + ANIMATION.POINT_DELAY,
        duration: 0.5,
        ...ANIMATION.SPRING_FAST,
      }}
    >
      <AnimatePresence>
        {glow && (
          <motion.div
            className="absolute h-9 w-9 rounded-full bg-primary/25 blur-md"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1.6, opacity: [0, 0.7, 0] }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 2, repeat: Infinity, repeatType: 'loop' }}
          />
        )}
      </AnimatePresence>

      <motion.div
        className={`relative h-7 w-7 rounded-full border-[3px] border-background shadow-xl transition-all duration-300 ${
          isActive
            ? 'bg-primary ring-4 ring-primary/35'
            : 'bg-primary/90 hover:bg-primary'
        }`}
        whileHover={{ scale: 1.4 }}
        animate={isActive ? { scale: 1.35 } : { scale: 1 }}
        transition={ANIMATION.SPRING_FAST}
      >
        <motion.span
          className="absolute inset-0 rounded-full bg-gradient-to-br from-white/70 to-transparent opacity-80"
          animate={glow ? { opacity: [0.3, 0.8, 0.3] } : { opacity: 0.5 }}
          transition={{ duration: 1.5, repeat: Infinity, repeatType: 'reverse' }}
        />
        <span className="absolute inset-[6px] rounded-full bg-background/90" />
      </motion.div>
    </motion.button>
  )
}

