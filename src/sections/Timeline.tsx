import { useState, useMemo } from 'react'
import { motion } from 'framer-motion'
import { Section, SectionHeader, Container } from '@/components/layout'
import { SECTION_IDS, SECTION_TITLES, TIMELINE_LABELS, SECTION_CLASSES, SECTION_SPACING } from '@/lib/constants'
import { createTimelineItems } from '@/lib/helpers'
import { ANIMATION } from '@/lib/constants'
import type { FilterType } from '@/lib/types'
import { FilterChips, TimelinePoint, YearLabelMobile, TimelineCard, TimelineSpine } from '@/components/timeline'

export function Timeline() {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null)
  const [activeItem, setActiveItem] = useState<string | null>(null)
  const [filter, setFilter] = useState<FilterType>('all')

  const allItems = useMemo(() => createTimelineItems(), [])
  const filteredItems = useMemo(
    () =>
      filter === 'all'
        ? allItems
        : allItems.filter(item => item.type === filter),
    [allItems, filter],
  )

  return (
    <Section id={SECTION_IDS.TIMELINE} background="mutedLight">
      <Container size="small">
        <SectionHeader>
          {SECTION_TITLES.TIMELINE}
        </SectionHeader>

        <p className={`${SECTION_SPACING.TIMELINE_DESCRIPTION} text-center text-muted-foreground`}>
          {TIMELINE_LABELS.DESCRIPTION}
        </p>

        <FilterChips activeFilter={filter} onChange={setFilter} />

        <div className={`relative ${SECTION_SPACING.TIMELINE_CONTAINER}`}>
          <TimelineSpine />

          {/* Items */}
          <div className={`relative ${SECTION_SPACING.TIMELINE_ITEMS}`}>
            {filteredItems.map((item, idx) => {
              const isEven = idx % 2 === 0
              const isHovered = hoveredItem === item.id
              const isActive = activeItem === item.id

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
                  <YearLabelMobile yearDisplay={item.yearDisplay} />

                  <TimelineCard
                    item={item}
                    isEven={isEven}
                    isHovered={isHovered}
                    isActive={isActive}
                    index={idx}
                    onHoverChange={setHoveredItem}
                    onToggleActive={id =>
                      setActiveItem(prev => (prev === id ? null : id))
                    }
                  />

                  <div
                    onMouseEnter={() => setHoveredItem(item.id)}
                    onMouseLeave={() => setHoveredItem(null)}
                  >
                    <TimelinePoint
                      isActive={isActive}
                      isHovered={isHovered}
                      index={idx}
                      type={item.type}
                      onClick={() =>
                        setActiveItem(prev => (prev === item.id ? null : item.id))
                      }
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
