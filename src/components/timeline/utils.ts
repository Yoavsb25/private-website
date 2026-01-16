/**
 * Utility functions and type guards for timeline components
 */
import { cn } from '@/lib/utils'
import { STYLES } from '@/lib/constants'
import type { EducationData, ExperienceData, TimelineItem } from '@/lib/types'

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

/**
 * Type guard to check if data is EducationData
 */
export function isEducationData(
  _data: EducationData | ExperienceData,
  type: TimelineItem['type']
): _data is EducationData {
  return type === 'education'
}

/**
 * Type guard to check if data is ExperienceData
 */
export function isExperienceData(
  _data: EducationData | ExperienceData,
  type: TimelineItem['type']
): _data is ExperienceData {
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