import { describe, it, expect, vi, afterEach } from 'vitest'
import { getAnimationVariants, prefersReducedMotion } from '../lib/animations/variants'
import type { Variants } from 'framer-motion'

const dummyVariants: Variants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0 },
}

describe('prefersReducedMotion', () => {
  afterEach(() => vi.restoreAllMocks())

  it('returns false when matchMedia says no preference for reduced motion', () => {
    vi.stubGlobal('window', {
      matchMedia: vi.fn().mockReturnValue({ matches: false }),
    })
    expect(prefersReducedMotion()).toBe(false)
  })

  it('returns true when matchMedia says prefers reduced motion', () => {
    vi.stubGlobal('window', {
      matchMedia: vi.fn().mockReturnValue({ matches: true }),
    })
    expect(prefersReducedMotion()).toBe(true)
  })
})

describe('getAnimationVariants', () => {
  afterEach(() => vi.restoreAllMocks())

  it('returns the original variants when reduced motion is not preferred', () => {
    vi.stubGlobal('window', {
      matchMedia: vi.fn().mockReturnValue({ matches: false }),
    })
    expect(getAnimationVariants(dummyVariants)).toBe(dummyVariants)
  })

  it('returns simplified opacity-only variants when reduced motion is preferred', () => {
    vi.stubGlobal('window', {
      matchMedia: vi.fn().mockReturnValue({ matches: true }),
    })
    const result = getAnimationVariants(dummyVariants)
    expect(result.hidden).toEqual({ opacity: 1 })
    expect(result.visible).toEqual({ opacity: 1 })
  })
})
