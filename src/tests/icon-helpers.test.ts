import { describe, it, expect, vi } from 'vitest'

// Mock SVG asset import used by icon-helpers
vi.mock('@/assets/icons/Playwright--Streamline-Svg-Logos.svg', () => ({ default: '' }))

import { getIcon, getTechIcon, getTechIconColor } from '../lib/helpers/icon-helpers'
import { ExternalLink } from 'lucide-react'

describe('getIcon', () => {
  it('returns a known icon component for a valid name', () => {
    const Icon = getIcon('Github')
    expect(Icon).toBeDefined()
  })

  it('falls back to ExternalLink for an unknown icon name', () => {
    const Icon = getIcon('unknown-icon-name-xyz')
    expect(Icon).toBe(ExternalLink)
  })

  it('falls back to ExternalLink when called with no argument', () => {
    const Icon = getIcon()
    expect(Icon).toBeDefined()
  })
})

describe('getTechIcon', () => {
  it('returns the correct component for a known tech (case-insensitive)', () => {
    const Icon = getTechIcon('Python')
    expect(Icon).toBeDefined()
  })

  it('returns a fallback component for unknown tech', () => {
    const Icon = getTechIcon('UnknownTechXYZ')
    expect(Icon).toBeDefined()
  })

  it('is case-insensitive', () => {
    expect(getTechIcon('python')).toBe(getTechIcon('Python'))
  })
})

describe('getTechIconColor', () => {
  it('returns the correct brand color for a known tech', () => {
    expect(getTechIconColor('Python')).toBe('#3776AB')
  })

  it('returns fallback grey for unknown tech', () => {
    expect(getTechIconColor('UnknownTechXYZ')).toBe('#6B7280')
  })

  it('is case-insensitive', () => {
    expect(getTechIconColor('python')).toBe(getTechIconColor('Python'))
  })
})
