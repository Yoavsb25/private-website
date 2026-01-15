/**
 * TimelineCardContent component
 * Handles the expandable content section of timeline cards
 */
import { motion, AnimatePresence } from 'framer-motion'
import { CardContent } from '@/components/ui/card'
import { timelineExpand } from '../variants'
import { getEducationData, getExperienceData } from '../helpers'
import { EducationContent, ExperienceContent } from './TimelineContent'
import type { TimelineCardContentProps } from './types'

export function TimelineCardContent({ expanded, item }: TimelineCardContentProps) {
  return (
    <AnimatePresence initial={false}>
      {expanded && (
        <motion.div
          variants={timelineExpand}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <CardContent className="pt-0">
            {item.type === 'education' ? (
              <EducationContent data={getEducationData(item)} />
            ) : (
              <ExperienceContent data={getExperienceData(item)} />
            )}
          </CardContent>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
