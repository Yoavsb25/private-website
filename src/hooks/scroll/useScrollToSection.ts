import { useCallback } from 'react'
import { NAVIGATION } from '@/lib/constants'

/**
 * Hook for scrolling to a section with proper offset
 */
export function useScrollToSection() {
  const scrollToSection = useCallback((id: string) => {
    const element = document.getElementById(id)
    if (!element) return

    const offset = NAVIGATION.SCROLL_OFFSET
    const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
    const offsetPosition = elementPosition - offset

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth',
    })
  }, [])

  return scrollToSection
}

