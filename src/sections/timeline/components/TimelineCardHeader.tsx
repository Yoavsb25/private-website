import { motion } from 'framer-motion'
import { CardHeader, CardDescription, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Logo } from '@/helpers/helpers'
import type { TimelineItem } from '../types'
import { STYLES } from '../constants'

interface TimelineCardHeaderProps {
  item: TimelineItem
  isEven: boolean
}

export function TimelineCardHeader({ item, isEven }: TimelineCardHeaderProps) {
  const { data, type } = item

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
                alt={`${type === 'education' ? data.institution : data.company} logo`}
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
                {type === 'education' ? data.degree : data.title}
              </CardTitle>
              <CardDescription className="mb-1 text-base font-medium md:text-lg">
                {type === 'education' ? data.institution : data.company}
              </CardDescription>
              {type === 'experience' && data.location && (
                <CardDescription className="mt-1.5 flex items-center gap-1.5 text-sm md:text-base">
                  <span>📍</span>
                  <span>{data.location}</span>
                </CardDescription>
              )}
            </div>

            {type === 'experience' && data.type && (
              <Badge variant="secondary" className="flex-shrink-0 px-3 py-1.5 text-sm font-semibold">
                {data.type}
              </Badge>
            )}
          </div>
        </div>
      </div>
    </CardHeader>
  )
}

