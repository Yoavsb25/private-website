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
    <>
      {/* Desktop — centered spine */}
      <div className="pointer-events-none absolute left-1/2 top-0 hidden h-full w-[2px] -translate-x-1/2 md:block">
        <div className="absolute inset-0 bg-border/30 rounded-full" />
        <motion.div
          className="absolute inset-x-0 top-0 h-full rounded-full"
          style={{
            scaleY,
            transformOrigin: 'top',
            background:
              'linear-gradient(to bottom, hsl(var(--accent) / 0.8), hsl(var(--accent) / 0.4), hsl(var(--accent) / 0.2))',
          }}
        />
      </div>

      {/* Mobile — left-aligned spine */}
      <div className="pointer-events-none absolute left-5 top-0 block h-full w-[2px] md:hidden">
        <div className="absolute inset-0 bg-border/30 rounded-full" />
        <motion.div
          className="absolute inset-x-0 top-0 h-full rounded-full"
          style={{
            scaleY,
            transformOrigin: 'top',
            background:
              'linear-gradient(to bottom, hsl(var(--accent) / 0.8), hsl(var(--accent) / 0.4), hsl(var(--accent) / 0.2))',
          }}
        />
      </div>
    </>
  )
}
