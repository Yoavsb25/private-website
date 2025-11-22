import { useState, useMemo } from 'react'
import { motion } from 'framer-motion'
import { Section } from '@/components/Section'
import { SectionHeader } from '@/components/SectionHeader'
import { Container } from '@/components/Container'
import { SECTION_IDS } from '@/lib/constants'
import type { FilterType } from './timeline/types'
import { createTimelineItems } from './timeline/utils'
import { ANIMATION, STYLES } from './timeline/constants'
import { FilterChips } from './timeline/components/FilterChips'
import { TimelinePoint } from './timeline/components/TimelinePoint'
import { YearLabelMobile } from './timeline/components/YearLabel'
import { TimelineCard } from './timeline/components/TimelineCard'

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
          Timeline
        </SectionHeader>

        <p className="mb-8 text-center text-muted-foreground">
          A single track that connects my education and experience into one story—hover or tap each milestone to dive into that chapter.
        </p>

        <FilterChips activeFilter={filter} onChange={setFilter} />

        <div className="relative py-10">
          {/* Animated timeline line */}
          <motion.div
            className={STYLES.TIMELINE_LINE}
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={ANIMATION.TIMELINE_LINE}
            style={{ transformOrigin: 'top' }}
          >
            {/* Moving glow travelling down the line */}
            <motion.div
              className={STYLES.TIMELINE_LINE_GLOW}
              initial={{ y: '-20%' }}
              animate={{ y: '120%' }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'linear',
              }}
            />
          </motion.div>

          {/* Items */}
          <div className="relative space-y-20 md:space-y-28">
            {filteredItems.map((item, idx) => {
              const isEven = idx % 2 === 0
              const isHovered = hoveredItem === item.id
              const isActive = activeItem === item.id

              return (
                <motion.div
                  key={item.id}
                  className="relative flex flex-col items-center md:flex-row md:items-start"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-120px' }}
                  transition={{
                    delay: idx * ANIMATION.ITEM_STAGGER,
                    duration: ANIMATION.ITEM_DURATION,
                    ...ANIMATION.SPRING,
                  }}
                >
                  <YearLabelMobile yearDisplay={item.yearDisplay} index={idx} />

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
