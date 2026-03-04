/**
 * TimelineCard component
 * 3D flip card with front face (logo + title) and back face (details)
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

const FLIP_TRANSITION = {
  type: 'spring' as const,
  stiffness: 200,
  damping: 22,
}

export function TimelineCard(props: TimelineCardProps) {
  const { item, isEven, isFlipped, isHovered, onHoverChange, onToggleFlipped } = props
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
        {/* Perspective wrapper — must be a plain div, not motion.div, to preserve 3D */}
        <div
          style={{ perspective: '1000px' }}
          className="cursor-pointer"
          onClick={() => onToggleFlipped(item.id)}
        >
          {/* Flip target — rotates in 3D */}
          <motion.div
            style={{ transformStyle: 'preserve-3d' }}
            animate={{ rotateY: isFlipped ? 180 : 0 }}
            transition={FLIP_TRANSITION}
            className="relative"
          >
            {/* Front face — sets the container height */}
            <div style={{ backfaceVisibility: 'hidden' }}>
              <Card className={cardClass(isHovered, colors.glow)}>
                <div
                  className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${colors.accent} opacity-20`}
                />
                <TimelineCardHeader item={item} />
              </Card>
            </div>

            {/* Back face — absolute, matches front height, scrollable */}
            <div
              className="absolute inset-0 overflow-hidden"
              style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
            >
              <Card className={`${cardClass(true, colors.glow)} h-full`}>
                <div
                  className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${colors.accent} opacity-20`}
                />
                <div className="h-full overflow-y-auto">
                  <TimelineCardContent item={item} />
                </div>
              </Card>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}
