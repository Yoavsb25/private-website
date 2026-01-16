/**
 * TimelineCardHeader component
 * Displays the title and description for timeline items
 */
import { CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import type { TimelineCardHeaderProps } from './types'
import { getEducationData, getExperienceData } from '../utils'

export function TimelineCardHeader({ item }: TimelineCardHeaderProps) {
  const title =
    item.type === 'education'
      ? getEducationData(item).degree
      : getExperienceData(item).title

  const description =
    item.type === 'education'
      ? getEducationData(item).institution
      : getExperienceData(item).company

  return (
    <CardHeader>
      <CardTitle>{title}</CardTitle>
      <CardDescription>{description}</CardDescription>
    </CardHeader>
  )
}
