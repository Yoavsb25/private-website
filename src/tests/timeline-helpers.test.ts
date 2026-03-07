import { describe, it, expect, vi, afterEach } from 'vitest'

// Mock data modules to avoid image asset imports
vi.mock('@/data/education', () => ({
  education: [],
}))

vi.mock('@/data/experience', () => ({
  experiences: [],
}))

import { parseYear } from '../lib/helpers/timeline-helpers'

describe('parseYear', () => {
  afterEach(() => vi.restoreAllMocks())

  it('returns 0 for undefined', () => {
    expect(parseYear(undefined)).toBe(0)
  })

  it('returns current year when period contains "present"', () => {
    const mockYear = 2026
    vi.spyOn(Date.prototype, 'getFullYear').mockReturnValue(mockYear)
    expect(parseYear('Apr 2025 - Present')).toBe(mockYear)
  })

  it('returns the maximum year when period contains multiple year tokens', () => {
    expect(parseYear('Oct 2020 - Oct 2021')).toBe(2021)
  })

  it('returns the year from a single year token', () => {
    expect(parseYear('Graduated 2025')).toBe(2025)
  })

  it('returns 2016 for military period string', () => {
    expect(parseYear('Military Service 2014-2016')).toBe(2016)
  })

  it('returns 0 when no year information can be parsed', () => {
    expect(parseYear('No dates here')).toBe(0)
  })
})
