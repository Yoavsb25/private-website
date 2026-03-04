/**
 * TimelineCard component
 * 3D flip card with front face (logo + title) and back face (details)
 */
import { motion } from 'framer-motion'
import { RotateCcw } from 'lucide-react'
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
        {/* Perspective wrapper — plain div to preserve 3D context */}
        <div style={{ perspective: '1000px' }}>
          {/* Flip target — rotates in 3D */}
          <motion.div
            style={{ transformStyle: 'preserve-3d' }}
            animate={{ rotateY: isFlipped ? 180 : 0 }}
            transition={FLIP_TRANSITION}
            className="relative"
          >
            {/* Front face — sets container height; click to flip open */}
            <div
              style={{ backfaceVisibility: 'hidden' }}
              className="cursor-pointer"
              onClick={() => onToggleFlipped(item.id)}
            >
              <Card className={cardClass(isHovered, colors.glow)}>
                <div
                  className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${colors.accent} opacity-20`}
                />
                <TimelineCardHeader item={item} />
              </Card>
            </div>

            {/* Back face — absolute, matches front height; scroll area + flip-back footer */}
            <div
              className="absolute inset-0 overflow-hidden"
              style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
            >
              <Card className={`${cardClass(true, colors.glow)} flex h-full flex-col`}>
                <div
                  className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${colors.accent} opacity-20`}
                />
                {/* Scrollable content — isolated from click-to-flip */}
                <div className="min-h-0 flex-1 overflow-y-auto">
                  <TimelineCardContent item={item} />
                </div>
                {/* Flip-back footer — outside scroll area so it always stays visible */}
                <button
                  className="flex shrink-0 cursor-pointer items-center justify-center gap-1 border-t border-border/30 py-2 text-xs text-muted-foreground/50 hover:text-muted-foreground/80"
                  onClick={() => onToggleFlipped(item.id)}
                >
                  <RotateCcw className="h-3 w-3" />
                  <span>click to flip back</span>
                </button>
              </Card>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}
