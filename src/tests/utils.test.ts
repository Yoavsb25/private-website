import { describe, it, expect } from 'vitest'
import {
  cardWrapperClass,
  cardClass,
  isEducationData,
  isExperienceData,
  getEducationData,
  getExperienceData,
} from '../components/timeline/utils'
import type { TimelineItem } from '../lib/types'
import type { EducationData, ExperienceData } from '../lib/types'

const mockEducationItem: TimelineItem = {
  id: 'edu-0',
  type: 'education',
  year: 2024,
  yearDisplay: '2020 - 2024',
  index: 0,
  data: {
    degree: 'CS',
    institution: 'Uni',
    period: '2020 - 2024',
  } satisfies EducationData,
}

const mockExperienceItem: TimelineItem = {
  id: 'exp-0',
  type: 'experience',
  year: 2025,
  yearDisplay: '2024 - Present',
  index: 0,
  data: {
    title: 'Engineer',
    company: 'Corp',
    period: '2024 - Present',
    achievements: ['Did something'],
  } satisfies ExperienceData,
}

describe('cardWrapperClass', () => {
  it('positions even cards on the left (mr-auto)', () => {
    expect(cardWrapperClass(true)).toContain('sm:mr-auto')
  })

  it('positions odd cards on the right (ml-auto)', () => {
    expect(cardWrapperClass(false)).toContain('sm:ml-auto')
  })
})

describe('cardClass', () => {
  it('returns base styles without glow when not hovered', () => {
    const result = cardClass(false, 'ring-indigo-500/40')
    expect(result).toContain('cursor-pointer')
    expect(result).toContain('border')
    expect(result).not.toContain('ring-indigo-500/40')
  })

  it('includes glow ring class when hovered', () => {
    const result = cardClass(true, 'ring-indigo-500/40')
    expect(result).toContain('ring-indigo-500/40')
  })

  it('works for education glow class', () => {
    const result = cardClass(true, 'ring-fuchsia-500/40')
    expect(result).toContain('ring-fuchsia-500/40')
  })
})

describe('isEducationData', () => {
  it('returns true for education type', () => {
    expect(isEducationData(mockEducationItem.data, 'education')).toBe(true)
  })

  it('returns false for experience type', () => {
    expect(isEducationData(mockExperienceItem.data, 'experience')).toBe(false)
  })
})

describe('isExperienceData', () => {
  it('returns true for experience type', () => {
    expect(isExperienceData(mockExperienceItem.data, 'experience')).toBe(true)
  })

  it('returns false for education type', () => {
    expect(isExperienceData(mockEducationItem.data, 'education')).toBe(false)
  })
})

describe('getEducationData', () => {
  it('returns education data from an education timeline item', () => {
    const result = getEducationData(mockEducationItem)
    expect(result.degree).toBe('CS')
    expect(result.institution).toBe('Uni')
  })

  it('throws for non-education items', () => {
    expect(() => getEducationData(mockExperienceItem)).toThrow()
  })
})

describe('getExperienceData', () => {
  it('returns experience data from an experience timeline item', () => {
    const result = getExperienceData(mockExperienceItem)
    expect(result.title).toBe('Engineer')
    expect(result.company).toBe('Corp')
  })

  it('throws for non-experience items', () => {
    expect(() => getExperienceData(mockEducationItem)).toThrow()
  })
})
