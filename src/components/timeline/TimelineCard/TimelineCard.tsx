/**
 * TimelineCard component
 * Displays a timeline item card with expandable content and hover effects
 */
import { motion } from 'framer-motion'
import { Card } from '@/components/ui/card'
import type { TimelineCardProps } from '@/lib/types'
import { TIMELINE_COLORS } from '../constants'
import { timelineItem } from '../variants'
import { cardClass, cardWrapperClass } from '../utils'
import { TimelineCardHeader } from './TimelineCardHeader'
import { TimelineCardContent } from './TimelineCardContent'
import { YearBadgeDesktop } from '../YearLabel'

const HOVER_ANIMATION = {
  y: -4,
  scale: 1.015,
} as const

const HOVER_TRANSITION = {
  type: 'spring' as const,
  stiffness: 250,
  damping: 18,
} as const

export function TimelineCard(props: TimelineCardProps) {
  const {
    item,
    isEven,
    isActive,
    isHovered,
    onHoverChange,
    onToggleActive,
  } = props

  const expanded = isActive || isHovered
  const colors = TIMELINE_COLORS[item.type]

  return (
    <div
      className={cardWrapperClass(isEven)}
      onMouseEnter={() => onHoverChange(item.id)}
      onMouseLeave={() => onHoverChange(null)}
    >
      <YearBadgeDesktop yearDisplay={item.yearDisplay} />

      <motion.div
        variants={timelineItem(isEven)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.div
          whileHover={HOVER_ANIMATION}
          transition={HOVER_TRANSITION}
        >
          <Card
            onClick={() => onToggleActive(item.id)}
            className={cardClass(expanded, colors.glow)}
          >
            <div
              className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${colors.accent} opacity-20`}
            />
            <TimelineCardHeader item={item} />
            <TimelineCardContent expanded={expanded} item={item} />
          </Card>
        </motion.div>
      </motion.div>
    </div>
  )
}
