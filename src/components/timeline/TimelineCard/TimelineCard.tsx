/**
 * TimelineCard component
 * 3D flip card with front face (logo + title) and back face (details)
 */
import { motion } from 'framer-motion'
import { RotateCcw } from 'lucide-react'
import { Card } from '@/components/ui/card'
import type { TimelineCardProps } from '@/lib/types'
import { TIMELINE_COLORS } from '../constants'
import { EVEN_ITEM, ODD_ITEM } from '../variants'
import { cardClass, cardWrapperClass } from '../utils'
import { TimelineCardHeader } from './TimelineCardHeader'
import { TimelineCardContent } from './TimelineCardContent'

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
      <motion.div
        variants={isEven ? EVEN_ITEM : ODD_ITEM}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* Grid wrapper — both faces share the same cell; height = max(front, back) */}
        <div style={{ display: 'grid' }}>
          {/* Front face — own perspective; backface-visibility on the rotating element avoids
              the display:grid + transform-style:preserve-3d browser conflict */}
          <div
            style={{
              gridArea: '1 / 1',
              perspective: '1000px',
              pointerEvents: isFlipped ? 'none' : 'auto',
              // visibility toggle ensures the inactive face is truly hidden on
              // mobile browsers where backfaceVisibility alone doesn't work
              visibility: isFlipped ? 'hidden' : 'visible',
              transition: isFlipped ? 'visibility 0s linear 0.15s' : 'visibility 0s',
            }}
            className="h-full"
          >
            <motion.div
              style={{ backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden' }}
              animate={{ rotateY: isFlipped ? 180 : 0 }}
              transition={FLIP_TRANSITION}
              className="h-full cursor-pointer"
              role="button"
              tabIndex={0}
              aria-label={`View details for ${'degree' in item.data ? item.data.degree : item.data.title}`}
              onClick={() => onToggleFlipped(item.id)}
              onKeyDown={e => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault()
                  onToggleFlipped(item.id)
                }
              }}
            >
              <Card
                className={`${cardClass(isHovered, colors.glow)} flex h-full flex-col justify-center`}
              >
                <div
                  className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${colors.accent} opacity-20`}
                />
                <TimelineCardHeader item={item} />
              </Card>
            </motion.div>
          </div>

          {/* Back face — own perspective; starts at rotateY(-180), animates to 0 when flipped.
              Natural height sets the grid cell size for both faces. */}
          <div
            style={{
              gridArea: '1 / 1',
              perspective: '1000px',
              pointerEvents: isFlipped ? 'auto' : 'none',
              visibility: isFlipped ? 'visible' : 'hidden',
              transition: isFlipped ? 'visibility 0s' : 'visibility 0s linear 0.15s',
            }}
          >
            <motion.div
              style={{ backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden' }}
              animate={{ rotateY: isFlipped ? 0 : -180 }}
              transition={FLIP_TRANSITION}
            >
              <Card className={`${cardClass(true, colors.glow)} flex flex-col`}>
                <div
                  className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${colors.accent} opacity-20`}
                />
                <div className="flex-1">
                  <TimelineCardContent item={item} />
                </div>
                <button
                  className="flex shrink-0 cursor-pointer items-center justify-center gap-1 border-t border-border/30 py-2 text-xs text-muted-foreground/50 hover:text-muted-foreground/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  onClick={() => onToggleFlipped(item.id)}
                >
                  <RotateCcw className="h-3 w-3" />
                  <span>click to flip back</span>
                </button>
              </Card>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
