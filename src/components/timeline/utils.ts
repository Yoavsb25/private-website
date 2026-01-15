/**
 * Utility functions for timeline components
 */
import { cn } from '@/lib/utils'
import { STYLES } from '@/lib/constants'

/**
 * Generates className for timeline card wrapper based on position
 */
export function cardWrapperClass(isEven: boolean): string {
  return cn(
    'relative w-full sm:w-[calc(50%-3rem)]',
    isEven ? 'sm:mr-auto' : 'sm:ml-auto'
  )
}

/**
 * Generates className for timeline card based on expanded state and glow color
 */
export function cardClass(expanded: boolean, glow: string): string {
  return cn(
    STYLES.CARD_BASE,
    STYLES.CARD_DEFAULT,
    'relative overflow-hidden',
    expanded && `ring-1 ${glow}`
  )
}