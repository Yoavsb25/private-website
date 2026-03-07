import { useState, useMemo, useRef, useCallback } from 'react'
import { motion } from 'framer-motion'
import { Section, SectionHeader, Container } from '@/components/layout'
import {
  SECTION_IDS,
  SECTION_TITLES,
  TIMELINE_LABELS,
  SECTION_CLASSES,
  SECTION_SPACING,
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

  const handleToggleFlipped = useCallback((id: string) => {
    setFlippedItem(prev => (prev === id ? null : id))
  }, [])

  return (
    <Section id={SECTION_IDS.TIMELINE} background="mutedLight" aria-labelledby="timeline-heading">
      <Container size="small">
        <SectionHeader id="timeline-heading">{SECTION_TITLES.TIMELINE}</SectionHeader>

        <p className={`${SECTION_SPACING.TIMELINE_DESCRIPTION} text-center text-muted-foreground`}>
          {TIMELINE_LABELS.DESCRIPTION}
        </p>

        <FilterChips activeFilter={filter} onChange={setFilter} />

        <div ref={containerRef} className={`relative ${SECTION_SPACING.TIMELINE_CONTAINER}`}>
          <TimelineSpine containerRef={containerRef} />

          {/* Items */}
          <div className={`relative ${SECTION_SPACING.TIMELINE_ITEMS}`}>
            {filteredItems.map((item, idx) => {
              const isEven = idx % 2 === 0
              const isHovered = hoveredItem === item.id
              const isFlipped = flippedItem === item.id

              return (
                <motion.div
                  key={item.id}
                  className={SECTION_CLASSES.TIMELINE_ITEM_CONTAINER}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-120px' }}
                  transition={{
                    delay: idx * ANIMATION.ITEM_STAGGER,
                    duration: ANIMATION.ITEM_DURATION,
                    ...ANIMATION.SPRING,
                  }}
                >
                  {/* Mobile spine dot — visible only below md */}
                  <div className="absolute left-[1.125rem] top-6 z-10 h-3 w-3 -translate-x-1/2 rounded-full bg-primary md:hidden" />

                  <TimelineCard
                    item={item}
                    isEven={isEven}
                    isHovered={isHovered}
                    isFlipped={isFlipped}
                    index={idx}
                    onHoverChange={setHoveredItem}
                    onToggleFlipped={handleToggleFlipped}
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
                      id={item.id}
                      onToggle={handleToggleFlipped}
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
