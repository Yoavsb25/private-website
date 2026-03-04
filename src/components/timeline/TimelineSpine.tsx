/**
 * TimelineSpine component
 * Vertical line that fills from top based on scroll progress through the timeline section
 */
import { motion, useScroll, useTransform } from 'framer-motion'
import type { RefObject } from 'react'

interface TimelineSpineProps {
  containerRef: RefObject<HTMLDivElement>
}

export function TimelineSpine({ containerRef }: TimelineSpineProps) {
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 0.8', 'end 0.8'],
  })

  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1])

  return (
    <div className="pointer-events-none absolute left-1/2 top-0 hidden h-full w-[2px] -translate-x-1/2 md:block">
      {/* Base line — always visible */}
      <div className="absolute inset-0 bg-border/40" />

      {/* Scroll-driven fill — grows from top as user scrolls */}
      <motion.div
        className="absolute inset-x-0 top-0 h-full bg-gradient-to-b from-indigo-500 via-fuchsia-500 to-cyan-400"
        style={{ scaleY, transformOrigin: 'top', filter: 'blur(0.5px)' }}
      />
    </div>
  )
}
