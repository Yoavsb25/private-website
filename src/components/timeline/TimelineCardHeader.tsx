import { motion } from 'framer-motion'
import { CardHeader, CardDescription, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Logo } from '@/lib/helpers'
import type { TimelineItem, EducationData, ExperienceData } from '@/lib/types'
import { STYLES } from '@/lib/constants'

interface TimelineCardHeaderProps {
  item: TimelineItem
  isEven: boolean
}

export function TimelineCardHeader({ item, isEven }: TimelineCardHeaderProps) {
  const { data, type } = item
  const educationData = type === 'education' ? (data as EducationData) : null
  const experienceData = type === 'experience' ? (data as ExperienceData) : null

  return (
    <CardHeader className="pb-[clamp(1rem,3vw,1.5rem)] pt-[clamp(1.25rem,4vw,1.5rem)] px-[clamp(1rem,3vw,1.5rem)]">
      <div
        className="flex items-start gap-[clamp(0.75rem,2vw,1.25rem)]"
      >
        {data.logoUrl && (
          <motion.div
            whileHover={{ scale: 1.12, rotate: 3 }}
            transition={{ duration: 0.25, type: 'spring' }}
            className="flex-shrink-0"
          >
            <div className={STYLES.LOGO_WRAPPER}>
              <Logo
                src={data.logoUrl}
                alt={`${educationData ? educationData.institution : experienceData?.company} logo`}
              />
            </div>
          </motion.div>
        )}

        <div className="min-w-0 flex-1">
          <div
            className="flex items-start gap-[clamp(0.75rem,2vw,1rem)] justify-between"
          >
            <div className="min-w-0 flex-1">
              <CardTitle className="mb-[clamp(0.25rem,1vw,0.375rem)] text-[clamp(1.125rem,3vw,1.5rem)] font-bold leading-tight">
                {educationData ? educationData.degree : experienceData?.title}
              </CardTitle>
              <CardDescription className="mb-1 text-[clamp(0.875rem,2.5vw,1.125rem)] font-medium">
                {educationData ? educationData.institution : experienceData?.company}
              </CardDescription>
              {experienceData?.location && (
                <CardDescription className="mt-[clamp(0.25rem,1vw,0.375rem)] flex items-center gap-1.5 text-[clamp(0.75rem,2vw,1rem)]">
                  <span>📍</span>
                  <span>{experienceData.location}</span>
                </CardDescription>
              )}
            </div>

            {experienceData?.type && (
              <Badge variant="secondary" className="flex-shrink-0 px-[clamp(0.625rem,2vw,0.75rem)] py-[clamp(0.25rem,1vw,0.375rem)] text-[clamp(0.75rem,2vw,0.875rem)] font-semibold">
                {experienceData.type}
              </Badge>
            )}
          </div>
        </div>
      </div>
    </CardHeader>
  )
}

