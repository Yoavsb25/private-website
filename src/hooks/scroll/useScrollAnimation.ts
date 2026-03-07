import { useEffect, useState } from 'react'

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
