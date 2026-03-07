import { describe, it, expect, vi, afterEach } from 'vitest'

// Mock data modules to avoid image asset imports and control test data
vi.mock('@/data/education', () => ({
  education: [
    { degree: 'CS', institution: 'Uni', period: '2020 - 2024', order: 2 },
    { degree: 'HS', institution: 'School', period: 'Graduated 2018' },
  ],
}))

vi.mock('@/data/experience', () => ({
  experiences: [
    { title: 'Dev', company: 'Corp', period: '2024 - Present', achievements: [], order: 1 },
    { title: 'Intern', company: 'Startup', period: '2019 - 2020', achievements: [] },
  ],
}))

import { parseYear, createTimelineItems } from '../lib/helpers/timeline-helpers'

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

describe('createTimelineItems', () => {
  it('sorts items with order values before unordered items', () => {
    const items = createTimelineItems()
    const firstUnorderedIndex = items.findIndex(
      i => (i.data as { order?: number }).order === undefined
    )
    const lastOrderedIndex = items
      .map(i => (i.data as { order?: number }).order !== undefined)
      .lastIndexOf(true)
    expect(lastOrderedIndex).toBeLessThan(firstUnorderedIndex)
  })

  it('sorts ordered items ascending by order value', () => {
    const items = createTimelineItems()
    const ordered = items.filter(i => (i.data as { order?: number }).order !== undefined)
    for (let i = 1; i < ordered.length; i++) {
      const prevOrder = (ordered[i - 1].data as { order: number }).order
      const currOrder = (ordered[i].data as { order: number }).order
      expect(prevOrder).toBeLessThanOrEqual(currOrder)
    }
  })

  it('sorts unordered items by year descending', () => {
    const items = createTimelineItems()
    const unordered = items.filter(i => (i.data as { order?: number }).order === undefined)
    for (let i = 1; i < unordered.length; i++) {
      expect(unordered[i - 1].year).toBeGreaterThanOrEqual(unordered[i].year)
    }
  })

  it('assigns correct type and id prefix to education and experience items', () => {
    const items = createTimelineItems()
    const educationItems = items.filter(i => i.type === 'education')
    const experienceItems = items.filter(i => i.type === 'experience')
    expect(educationItems.every(i => i.id.startsWith('edu-'))).toBe(true)
    expect(experienceItems.every(i => i.id.startsWith('exp-'))).toBe(true)
  })
})
