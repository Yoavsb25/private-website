/**
 * Type definitions for TimelineCard components
 */
import type { TimelineItem } from '@/lib/types'

export interface TimelineCardHeaderProps {
  item: TimelineItem
}

export interface TimelineCardContentProps {
  expanded: boolean
  item: TimelineItem
}
