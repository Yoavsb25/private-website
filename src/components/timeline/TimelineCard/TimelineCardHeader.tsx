/**
 * TimelineCardHeader — front face of the 3D flip card
 * Shows logo, title, company/institution, and type badge
 */
import { Briefcase, GraduationCap } from 'lucide-react'
import { CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import type { TimelineCardHeaderProps } from './types'
import { getEducationData, getExperienceData } from '../utils'
import { TIMELINE_COLORS } from '../constants'

export function TimelineCardHeader({ item }: TimelineCardHeaderProps) {
  const isEducation = item.type === 'education'
  const data = isEducation ? getEducationData(item) : getExperienceData(item)
  const title = 'degree' in data ? data.degree : data.title
  const subtitle = 'degree' in data ? data.institution : data.company
  const logoUrl = data.logoUrl
  const Icon = isEducation ? GraduationCap : Briefcase
  const colors = TIMELINE_COLORS[item.type]

  return (
    <CardHeader className="flex flex-col items-center gap-3 pt-6 pb-5 text-center">
      {/* Logo circle */}
      <div
        className={`flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-full border-2 bg-white ${colors.ring}`}
      >
        {logoUrl ? (
          <img src={logoUrl} alt={subtitle} className="h-full w-full object-contain p-1.5" />
        ) : (
          <Icon className="h-7 w-7 text-muted-foreground" />
        )}
      </div>

      {/* Title and subtitle */}
      <div>
        <CardTitle className="text-base leading-snug">{title}</CardTitle>
        <CardDescription className="mt-0.5">{subtitle}</CardDescription>
      </div>

      {/* Year */}
      <span className="text-xs text-muted-foreground">{item.yearDisplay}</span>
    </CardHeader>
  )
}
