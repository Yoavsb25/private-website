import { motion, AnimatePresence } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { COMPONENT_CLASSES } from '@/lib/constants'
import type { TimelineCardProps, EducationData, ExperienceData } from '@/lib/types'
import { ANIMATION, STYLES } from '@/lib/constants'
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
      className={`relative w-full max-w-full sm:max-w-[calc(50%-3rem)] sm:w-[calc(50%-3rem)] ${
        isEven ? 'sm:mr-auto' : 'sm:ml-auto'
      }`}
      onMouseEnter={() => onHoverChange(item.id)}
      onMouseLeave={() => onHoverChange(null)}
    >
      {/* Date Badge - Above the card */}
      <motion.div
        className="mb-2 hidden w-full justify-center sm:flex"
        initial={{ opacity: 0, y: -8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{
          delay: index * ANIMATION.ITEM_STAGGER + 0.2,
          duration: 0.5,
          ...ANIMATION.SPRING_FAST,
        }}
      >
        <Badge className="whitespace-nowrap rounded-full bg-primary px-4 py-2 text-base font-semibold text-primary-foreground shadow-lg">
          {item.yearDisplay}
        </Badge>
      </motion.div>

      {/* Circuit Connector Line */}
      <motion.div
        className={`absolute top-5 hidden h-[2px] w-[3rem] bg-border sm:block ${
          isEven ? '-right-[3rem]' : '-left-[3rem]'
        }`}
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{
          delay: index * ANIMATION.ITEM_STAGGER + 0.2,
          duration: 0.4,
          ease: 'easeOut',
        }}
        style={{ originX: isEven ? 1 : 0 }}
      >
        {/* Active/Hover Glow for Connector */}
        <motion.div
          className="absolute inset-0 bg-primary shadow-[0_0_8px_rgba(var(--primary),0.8)]"
          initial={{ scaleX: 0, opacity: 0 }}
          animate={
            expanded
              ? { scaleX: 1, opacity: 1 }
              : { scaleX: 0, opacity: 0 }
          }
          transition={{ duration: 0.3 }}
          style={{ originX: isEven ? 1 : 0 }}
        />
      </motion.div>

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
                <CardContent className="space-y-[clamp(1rem,3vw,1.5rem)] px-[clamp(1rem,3vw,1.5rem)] pb-[clamp(1rem,3vw,1.5rem)] pt-0">
                  <motion.div
                    className={STYLES.DIVIDER}
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 0.2, duration: 0.3 }}
                  />

                  {item.type === 'education' ? (
                    <EducationContent data={item.data as EducationData} />
                  ) : (
                    <ExperienceContent data={item.data as ExperienceData} />
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

