/**
 * TimelinePoint component
 * Interactive point on the timeline spine with icon and glow effect
 */
import { motion, AnimatePresence } from 'framer-motion'
import { Briefcase, GraduationCap } from 'lucide-react'
import type { TimelinePointProps } from '@/lib/types'
import { iconHover } from '@/lib/animations'

const GLOW_ANIMATION = {
  scale: [1, 1.4, 1],
  opacity: [0.3, 0.6, 0.3],
}

const GLOW_TRANSITION = {
  duration: 2.5,
  repeat: Infinity,
} as const

function EnergyGlow() {
  return (
    <motion.div
      className="absolute h-14 w-14 rounded-full bg-accent/50 blur-xl"
      animate={GLOW_ANIMATION}
      transition={GLOW_TRANSITION}
    />
  )
}

export function TimelinePoint({ isActive, isHovered, type, onClick }: TimelinePointProps) {
  const Icon = type === 'education' ? GraduationCap : Briefcase
  const showGlow = isActive || isHovered

  return (
    <motion.button
      onClick={onClick}
      className="absolute left-1/2 z-20 hidden -translate-x-1/2 md:flex"
      aria-label={`${type} timeline point`}
    >
      <AnimatePresence>{showGlow && <EnergyGlow />}</AnimatePresence>

      <motion.div
        variants={iconHover}
        initial="rest"
        whileHover="hover"
        className="relative flex h-10 w-10 items-center justify-center rounded-full bg-accent text-accent-foreground shadow-premium-md"
      >
        <Icon className="h-5 w-5" />
      </motion.div>
    </motion.button>
  )
}
