import type { TimelineItem } from './types'
import { education } from '@/data/education'
import { experiences } from '@/data/experience'

/**
 * Parse year from period string
 */
export function parseYear(period: string | undefined): number {
  if (!period) return 0

  const lowerPeriod = period.toLowerCase()

  if (lowerPeriod.includes('present')) {
    return new Date().getFullYear()
  }

  const yearMatches = period.match(/\b(19|20)\d{2}\b/g)
  if (yearMatches?.length) {
    return Math.max(...yearMatches.map(y => parseInt(y, 10)))
  }

  const graduatedMatch = period.match(/graduated\s+(\d{4})/i)
  if (graduatedMatch) {
    return parseInt(graduatedMatch[1], 10)
  }

  if (lowerPeriod.includes('military')) {
    return 2016
  }

  return 0
}

/**
 * Merge and sort education and experience by year
 */
export function createTimelineItems(): TimelineItem[] {
  const items: TimelineItem[] = []

  education.forEach((edu, idx) => {
    items.push({
      id: `edu-${idx}`,
      type: 'education',
      year: parseYear(edu.period),
      yearDisplay: edu.period || 'Unknown',
      data: edu,
      index: idx,
    })
  })

  experiences.forEach((exp, idx) => {
    items.push({
      id: `exp-${idx}`,
      type: 'experience',
      year: parseYear(exp.period),
      yearDisplay: exp.period || 'Unknown',
      data: exp,
      index: idx,
    })
  })

  return items.sort((a, b) => b.year - a.year)
}

