import { motion, AnimatePresence } from 'framer-motion'
import { Briefcase, GraduationCap } from 'lucide-react'
import type { TimelinePointProps } from '@/lib/types'
import { ANIMATION } from '@/lib/constants'

export function TimelinePoint({ isActive, isHovered, index, type, onClick }: TimelinePointProps) {
  const glow = isActive || isHovered
  const Icon = type === 'education' ? GraduationCap : Briefcase

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
            className="absolute h-12 w-12 rounded-full bg-primary/25 blur-md"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1.6, opacity: [0, 0.7, 0] }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 2, repeat: Infinity, repeatType: 'loop' }}
          />
        )}
      </AnimatePresence>

      <motion.div
        className={`relative flex h-10 w-10 items-center justify-center rounded-full border-[3px] border-background shadow-xl transition-all duration-300 ${
          isActive
            ? 'bg-primary ring-4 ring-primary/35'
            : 'bg-primary/90 hover:bg-primary'
        }`}
        whileHover={{ scale: 1.2 }}
        animate={isActive ? { scale: 1.15 } : { scale: 1 }}
        transition={ANIMATION.SPRING_FAST}
      >
        <Icon className="h-5 w-5 text-primary-foreground" />
      </motion.div>
    </motion.button>
  )
}

