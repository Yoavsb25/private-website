import { useEffect, useState } from 'react'

/**
 * Hook to detect if user has scrolled past a certain point
 */
export function useScrollPosition(threshold: number = 100) {
  const [hasScrolledPast, setHasScrolledPast] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const newValue = window.scrollY > threshold
      setHasScrolledPast(prev => (prev !== newValue ? newValue : prev))
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [threshold])

  return hasScrolledPast
}
