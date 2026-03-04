/**
 * TimelineCardContent — back face of the 3D flip card
 * Always rendered; hidden via CSS backfaceVisibility when card is not flipped
 */
import { RotateCcw } from 'lucide-react'
import { CardContent } from '@/components/ui/card'
import { getEducationData, getExperienceData } from '../utils'
import { EducationContent, ExperienceContent } from './TimelineContent'
import type { TimelineCardContentProps } from './types'

export function TimelineCardContent({ item }: TimelineCardContentProps) {
  return (
    <CardContent className="pt-0">
      {item.type === 'education' ? (
        <EducationContent data={getEducationData(item)} />
      ) : (
        <ExperienceContent data={getExperienceData(item)} />
      )}

      <div className="mt-4 flex items-center justify-center gap-1 text-xs text-muted-foreground/50">
        <RotateCcw className="h-3 w-3" />
        <span>click to flip back</span>
      </div>
    </CardContent>
  )
}
