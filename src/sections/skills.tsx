import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { Section, SectionHeader, Container } from '@/components/layout'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { skills } from '@/data/skills'
import {
  staggerContainer,
  staggerItem,
  iconHover,
  getAnimationVariants,
} from '@/lib/animations'
import {
  createStaggerContainerAnimation,
  createStaggerItemAnimation,
  createCardHoverAnimation,
} from '@/lib/helpers'
import { SECTION_TITLES, SECTION_IDS, LAYOUT, COMPONENT_CLASSES } from '@/lib/constants'

export function Skills() {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null)

  return (
    <Section id={SECTION_IDS.SKILLS}>
      <Container size="small" className="text-center">
        <SectionHeader>{SECTION_TITLES.SKILLS}</SectionHeader>
        <motion.div
          className={`${LAYOUT.GRID.RESPONSIVE_3}`}
          {...createStaggerContainerAnimation(staggerContainer)}
        >
          {skills.map((group, i) => (
            <motion.div
              key={i}
              className="flex"
              {...createStaggerItemAnimation(staggerItem)}
              {...createCardHoverAnimation('small')}
            >
              <Card className={`${COMPONENT_CLASSES.CARD.BACKDROP} ${COMPONENT_CLASSES.CARD.HOVER} flex flex-col h-full`}>
                <CardHeader>
                  <CardTitle className="text-lg font-semibold">{group.category}</CardTitle>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col">
                  <motion.div
                    className="grid grid-cols-3 gap-4 sm:gap-5 pt-3 flex-1 content-start"
                    {...createStaggerContainerAnimation(staggerContainer)}
                  >
                    {group.items.map(({ name, icon: Icon, color }) => (
                      <motion.div
                        key={name}
                        className="relative flex flex-col items-center space-y-2 text-center"
                        variants={getAnimationVariants(staggerItem)}
                        onHoverStart={() => setHoveredSkill(name)}
                        onHoverEnd={() => setHoveredSkill(null)}
                      >
                        <motion.div
                          className="flex h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16 items-center justify-center rounded-xl border border-border bg-card shadow-sm cursor-pointer relative"
                          variants={getAnimationVariants(iconHover)}
                          whileHover="hover"
                          whileTap="tap"
                        >
                          <Icon 
                            className={`h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 ${color === 'currentColor' ? 'text-foreground' : ''}`}
                            style={color !== 'currentColor' ? { color } : undefined}
                          />
                        </motion.div>
                        <p className="text-sm text-foreground/80">{name}</p>
                        <AnimatePresence>
                          {hoveredSkill === name && (
                            <motion.div
                              className={COMPONENT_CLASSES.TOOLTIP}
                              initial={{ opacity: 0, y: 5 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: 5 }}
                            >
                              {name}
                              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-foreground" />
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </motion.div>
                    ))}
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </Section>
  )
}