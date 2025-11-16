import { motion, AnimatePresence } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { COMPONENT_CLASSES } from '@/lib/constants'
import type { TimelineCardProps } from '../types'
import { ANIMATION, STYLES } from '../constants'
import { TimelineCardHeader } from './TimelineCardHeader'
import { EducationContent, ExperienceContent } from './TimelineContent'

export function TimelineCard({
  item,
  isEven,
  isHovered,
  isActive,
  index,
  onHoverChange,
  onToggleActive,
}: TimelineCardProps) {
  const expanded = isActive || isHovered

  return (
    <div
      className={`w-full md:w-[calc(50%-3rem)] ${
        isEven ? 'md:mr-auto' : 'md:ml-auto'
      }`}
      onMouseEnter={() => onHoverChange(item.id)}
      onMouseLeave={() => onHoverChange(null)}
    >
      <motion.div
        initial={{ opacity: 0, x: isEven ? -70 : 70, scale: 0.96 }}
        whileInView={{ opacity: 1, x: 0, scale: 1 }}
        viewport={{ once: true }}
        transition={{
          delay: index * ANIMATION.ITEM_STAGGER + ANIMATION.CONTENT_DELAY,
          duration: ANIMATION.ITEM_DURATION,
          ...ANIMATION.SPRING,
        }}
      >
        <Card
          onClick={() => onToggleActive(item.id)}
          className={[
            COMPONENT_CLASSES.CARD.HOVER,
            STYLES.CARD_BASE,
            STYLES.CARD_HOVER,
            STYLES.CARD_DEFAULT,
            expanded ? STYLES.CARD_ACTIVE : '',
          ].join(' ')}
        >
          {/* Subtle angled light beam */}
          <AnimatePresence>
            {expanded && (
              <motion.div
                className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_0%_0%,hsl(var(--primary)/0.15),transparent_55%)]"
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 40 }}
                transition={{ duration: 0.4 }}
              />
            )}
          </AnimatePresence>

          <TimelineCardHeader item={item} isEven={isEven} />

          <AnimatePresence initial={false}>
            {expanded && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={ANIMATION.EXPAND}
                className="overflow-hidden"
              >
                <CardContent className="space-y-6 px-6 pb-6 pt-0">
                  <motion.div
                    className={STYLES.DIVIDER}
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 0.2, duration: 0.3 }}
                  />

                  {item.type === 'education' ? (
                    <EducationContent data={item.data} />
                  ) : (
                    <ExperienceContent data={item.data} />
                  )}
                </CardContent>
              </motion.div>
            )}
          </AnimatePresence>
        </Card>
      </motion.div>
    </div>
  )
}

