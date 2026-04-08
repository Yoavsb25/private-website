import { useState, useMemo, useRef } from 'react'
import { motion } from 'framer-motion'
import { Section, Container } from '@/components/layout'
import {
  SECTION_IDS,
  TIMELINE_LABELS,
  SECTION_CLASSES,
  SECTION_SPACING,
  EASE_OUT_EXPO,
  ANIMATION_CONFIG,
} from '@/lib/constants'
import { createTimelineItems } from '@/lib/helpers'
import { ANIMATION } from '@/lib/constants'
import type { FilterType } from '@/lib/types'
import { FilterChips, TimelinePoint, TimelineCard, TimelineSpine } from '@/components/timeline'

export function Timeline() {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null)
  const [flippedItem, setFlippedItem] = useState<string | null>(null)
  const [filter, setFilter] = useState<FilterType>('all')
  const containerRef = useRef<HTMLDivElement>(null)

  const allItems = useMemo(() => createTimelineItems(), [])
  const filteredItems = useMemo(
    () => (filter === 'all' ? allItems : allItems.filter(item => item.type === filter)),
    [allItems, filter]
  )

  return (
    <Section id={SECTION_IDS.TIMELINE} background="mutedLight">
      <Container size="small">
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={ANIMATION_CONFIG.VIEWPORT.HEADER}
          transition={{ duration: 0.6, ease: EASE_OUT_EXPO }}
        >
          <p className="mb-3 font-mono text-xs uppercase tracking-[0.15em] text-accent/70">
            Journey
          </p>
          <h2 className="font-display text-[clamp(1.75rem,4vw,2.5rem)] font-bold tracking-tight">
            Experience & Education
          </h2>
          <p className="mt-4 max-w-2xl text-[clamp(0.9375rem,2vw,1.0625rem)] leading-relaxed text-muted-foreground">
            {TIMELINE_LABELS.DESCRIPTION}
          </p>
        </motion.div>

        <FilterChips activeFilter={filter} onChange={setFilter} />

        <div ref={containerRef} className={`relative ${SECTION_SPACING.TIMELINE_CONTAINER}`}>
          <TimelineSpine containerRef={containerRef} />

          <div className={`relative ${SECTION_SPACING.TIMELINE_ITEMS}`}>
            {filteredItems.map((item, idx) => {
              const isEven = idx % 2 === 0
              const isHovered = hoveredItem === item.id
              const isFlipped = flippedItem === item.id

              return (
                <motion.div
                  key={item.id}
                  className={SECTION_CLASSES.TIMELINE_ITEM_CONTAINER}
                  initial={{
                    opacity: 0,
                    x: isEven ? -40 : 40,
                    rotate: isEven ? -1.5 : 1.5,
                  }}
                  whileInView={{ opacity: 1, x: 0, rotate: 0 }}
                  viewport={{ once: true, margin: '-120px' }}
                  transition={{
                    delay: idx * ANIMATION.ITEM_STAGGER,
                    duration: ANIMATION.ITEM_DURATION,
                    ease: EASE_OUT_EXPO,
                    ...ANIMATION.SPRING,
                  }}
                >
                  {/* Mobile: colored left border instead of crude dot */}
                  <div
                    className="absolute left-[1.0625rem] top-4 bottom-4 w-[3px] -translate-x-1/2 rounded-full md:hidden"
                    style={{
                      background:
                        'linear-gradient(to bottom, hsl(var(--accent) / 0.6), hsl(var(--accent) / 0.15))',
                    }}
                  />

                  <TimelineCard
                    item={item}
                    isEven={isEven}
                    isHovered={isHovered}
                    isFlipped={isFlipped}
                    index={idx}
                    onHoverChange={setHoveredItem}
                    onToggleFlipped={id => setFlippedItem(prev => (prev === id ? null : id))}
                  />

                  <div
                    onMouseEnter={() => setHoveredItem(item.id)}
                    onMouseLeave={() => setHoveredItem(null)}
                  >
                    <TimelinePoint
                      isActive={isFlipped}
                      isHovered={isHovered}
                      index={idx}
                      type={item.type}
                      onClick={() => setFlippedItem(prev => (prev === item.id ? null : item.id))}
                    />
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </Container>
    </Section>
  )
}
