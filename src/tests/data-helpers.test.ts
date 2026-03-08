import { describe, it, expect } from 'vitest'
import { getFeaturedItems, hasItems } from '../lib/helpers/data-helpers'

describe('hasItems', () => {
  it('returns true for non-empty arrays', () => {
    expect(hasItems([1, 2, 3])).toBe(true)
  })

  it('returns false for empty arrays', () => {
    expect(hasItems([])).toBe(false)
  })

  it('returns false for null', () => {
    expect(hasItems(null)).toBe(false)
  })

  it('returns false for undefined', () => {
    expect(hasItems(undefined)).toBe(false)
  })
})

describe('getFeaturedItems', () => {
  const items = [
    { id: '1', featured: true },
    { id: '2', featured: false },
    { id: '3', featured: true },
  ]

  it('returns only featured items', () => {
    const result = getFeaturedItems(items)
    expect(result).toHaveLength(2)
    expect(result.every(i => i.featured)).toBe(true)
  })

  it('returns empty array when no items are featured', () => {
    expect(getFeaturedItems([{ id: '1', featured: false }])).toHaveLength(0)
  })

  it('returns empty array for empty input', () => {
    expect(getFeaturedItems([])).toHaveLength(0)
  })
})
