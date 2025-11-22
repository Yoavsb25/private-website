import { useEffect, useState } from 'react'

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

