/**
 * Type guards and helper functions for timeline components
 */
import type { EducationData, ExperienceData, TimelineItem } from '@/lib/types'

/**
 * Type guard to check if data is EducationData
 */
export function isEducationData(
  data: EducationData | ExperienceData,
  type: TimelineItem['type']
): data is EducationData {
  return type === 'education'
}

/**
 * Type guard to check if data is ExperienceData
 */
export function isExperienceData(
  data: EducationData | ExperienceData,
  type: TimelineItem['type']
): data is ExperienceData {
  return type === 'experience'
}

/**
 * Safely get education data from timeline item
 */
export function getEducationData(item: TimelineItem): EducationData {
  if (!isEducationData(item.data, item.type)) {
    throw new Error('Expected education data but got experience data')
  }
  return item.data
}

/**
 * Safely get experience data from timeline item
 */
export function getExperienceData(item: TimelineItem): ExperienceData {
  if (!isExperienceData(item.data, item.type)) {
    throw new Error('Expected experience data but got education data')
  }
  return item.data
}
