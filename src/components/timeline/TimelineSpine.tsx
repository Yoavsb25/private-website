/**
 * TimelineSpine component
 * Animated vertical line that runs through the center of the timeline
 */
import { motion } from 'framer-motion'

const SPINE_ANIMATION = {
  backgroundPositionY: ['0%', '100%'],
}

const SPINE_TRANSITION = {
  duration: 8,
  repeat: Infinity,
  ease: 'linear' as const,
} as const

export function TimelineSpine() {
  return (
    <div className="pointer-events-none absolute left-1/2 top-0 hidden h-full w-[2px] -translate-x-1/2 md:block">
      {/* Base line */}
      <div className="absolute inset-0 bg-border/40" />

      {/* Animated gradient */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-indigo-500 via-fuchsia-500 to-cyan-400"
        style={{ filter: 'blur(1px)' }}
        animate={SPINE_ANIMATION}
        transition={SPINE_TRANSITION}
      />
    </div>
  )
}
