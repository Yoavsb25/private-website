import { useRef } from 'react'
import { useScroll, useTransform, useSpring, type MotionValue } from 'framer-motion'
import { prefersReducedMotion } from '@/lib/animations'

export function useParallax(speed = 0.2): {
  ref: React.RefObject<HTMLElement | null>
  y: MotionValue<number>
} {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref as React.RefObject<HTMLElement>,
    offset: ['start end', 'end start'],
  })

  const reduced = prefersReducedMotion()
  const range = reduced ? 0 : speed * 100
  const rawY = useTransform(scrollYProgress, [0, 1], [range, -range])
  const y = useSpring(rawY, { stiffness: 120, damping: 30, mass: 0.5 })

  return { ref, y }
}
