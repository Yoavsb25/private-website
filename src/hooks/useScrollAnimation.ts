import { useEffect, useState } from 'react'
import { prefersReducedMotion } from '@/lib/animations'

interface UseScrollAnimationOptions {
  threshold?: number
  offset?: number
}

/**
 * Hook to trigger animations based on scroll position
 */
export function useScrollAnimation(options: UseScrollAnimationOptions = {}) {
  const { threshold = 0.1, offset = 0 } = options
  const [hasScrolled, setHasScrolled] = useState(false)

  useEffect(() => {
    if (prefersReducedMotion()) {
      setHasScrolled(true)
      return
    }

    const handleScroll = () => {
      const scrollY = window.scrollY + offset
      const windowHeight = window.innerHeight
      const thresholdPosition = windowHeight * threshold

      if (scrollY > thresholdPosition) {
        setHasScrolled(true)
      }
    }

    // Check initial position
    handleScroll()

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [threshold, offset])

  return hasScrolled
}

/**
 * Hook to get scroll progress (0 to 1)
 */
export function useScrollProgress() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.document.documentElement.scrollHeight - window.innerHeight
      const scrolled = window.scrollY
      const progressValue = windowHeight > 0 ? scrolled / windowHeight : 0
      setProgress(Math.min(Math.max(progressValue, 0), 1))
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return progress
}

/**
 * Hook to detect if user has scrolled past a certain point
 */
export function useScrollPosition(threshold: number = 100) {
  const [hasScrolledPast, setHasScrolledPast] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolledPast(window.scrollY > threshold)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [threshold])

  return hasScrolledPast
}

