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
    <CardHeader className="pb-5 pt-6">
      <div
        className={`flex items-start gap-5 ${
          isEven && !data.logoUrl ? 'md:flex-row-reverse' : ''
        }`}
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

        <div className={`min-w-0 flex-1 ${isEven ? 'md:text-right' : ''}`}>
          <div
            className={`flex items-start gap-3 ${
              isEven ? 'md:flex-row-reverse md:justify-end' : 'justify-between'
            }`}
          >
            <div className="min-w-0 flex-1">
              <CardTitle className="mb-1.5 text-xl font-bold leading-tight md:text-2xl">
                {educationData ? educationData.degree : experienceData?.title}
              </CardTitle>
              <CardDescription className="mb-1 text-base font-medium md:text-lg">
                {educationData ? educationData.institution : experienceData?.company}
              </CardDescription>
              {experienceData?.location && (
                <CardDescription className="mt-1.5 flex items-center gap-1.5 text-sm md:text-base">
                  <span>📍</span>
                  <span>{experienceData.location}</span>
                </CardDescription>
              )}
            </div>

            {experienceData?.type && (
              <Badge variant="secondary" className="flex-shrink-0 px-3 py-1.5 text-sm font-semibold">
                {experienceData.type}
              </Badge>
            )}
          </div>
        </div>
      </div>
    </CardHeader>
  )
}

