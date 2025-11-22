/**
 * Data access helper functions
 */

/**
 * Get featured items from an array
 */
export function getFeaturedItems<T extends { featured?: boolean }>(
  items: T[]
): T[] {
  return items.filter((item) => item.featured)
}

/**
 * Check if array has items
 */
export function hasItems<T>(items: T[] | undefined | null): boolean {
  return Array.isArray(items) && items.length > 0
}

