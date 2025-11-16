//src/sections/Education.tsx
import { motion } from 'framer-motion'
import { Section } from '@/components/Section'
import { SectionHeader } from '@/components/SectionHeader'
import { Container } from '@/components/Container'
import { Heading } from '@/components/Heading'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { education } from '@/data/education'
import { Logo, BulletList, PillList } from '@/helpers/helpers'
import { staggerContainer, staggerItem } from '@/lib/animations'
import {
  createStaggerContainerAnimation,
  createStaggerItemAnimation,
  createCardHoverAnimation,
  createFadeInAnimation,
} from '@/lib/animation-helpers'
import { SECTION_TITLES, SECTION_IDS, ANIMATION_CONFIG, SPACING, LAYOUT, TYPOGRAPHY, COMPONENT_CLASSES } from '@/lib/constants'

// --- main component ----------------------------------------------------------
export function Education() {
  return (
    <Section id={SECTION_IDS.EDUCATION} background="mutedLight">
      <Container size="small">
        <SectionHeader>{SECTION_TITLES.EDUCATION}</SectionHeader>

        <motion.div
          className={SPACING.SECTION.CONTENT}
          {...createStaggerContainerAnimation(staggerContainer)}
        >
          {education.map((item, idx) => (
            <motion.div
              key={idx}
              {...createStaggerItemAnimation(staggerItem)}
              {...createCardHoverAnimation('small')}
            >
              <Card className={`overflow-hidden ${COMPONENT_CLASSES.CARD.HOVER}`}>
                <CardHeader className="pb-4">
                  <div className="grid items-start gap-4 sm:grid-cols-[auto,1fr,auto]">
                    <motion.div
                      whileHover={ANIMATION_CONFIG.HOVER.SCALE_UP_LARGE}
                      transition={{ duration: ANIMATION_CONFIG.DURATION.NORMAL }}
                    >
                      <Logo src={item.logoUrl} alt={`${item.institution} logo`} />
                    </motion.div>

                    <div className="min-w-0">
                      <CardTitle className="truncate">{item.degree}</CardTitle>
                      <CardDescription className="truncate">{item.institution}</CardDescription>
                    </div>

                    <div className="text-right">
                      {item.period && (
                        <CardDescription className="text-xs">
                          {item.period}
                        </CardDescription>
                      )}
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="space-y-6">
                  {/* Details & Activities */}
                  <motion.div
                    className={LAYOUT.GRID.RESPONSIVE_2}
                    {...createFadeInAnimation(ANIMATION_CONFIG.DELAY.SHORT)}
                  >
                    <div>
                      {item.details?.length && (
                        <>
                          <Heading level={4} className={TYPOGRAPHY.COLOR.MUTED_OPACITY}>Highlights</Heading>
                          <BulletList items={item.details} />
                        </>
                      )}

                      {item.activities?.length && (
                        <>
                          <Heading level={4} className={`mt-4 ${TYPOGRAPHY.COLOR.MUTED_OPACITY}`}>Activities</Heading>
                          <BulletList items={item.activities} />
                        </>
                      )}
                    </div>

                    <div>
                      {item.grades?.length && (
                        <>
                          <Heading level={4} className={TYPOGRAPHY.COLOR.MUTED_OPACITY}>Grades</Heading>
                          <BulletList items={item.grades} />
                        </>
                      )}

                      {item.majors?.length && (
                        <>
                          <Heading level={4} className={`mt-4 ${TYPOGRAPHY.COLOR.MUTED_OPACITY}`}>Majors</Heading>
                          <PillList items={item.majors} />
                        </>
                      )}
                    </div>
                  </motion.div>

                  {/* Tech context (only for relevant entries) */}
                  {(item.programmingLanguages?.length || item.developmentTools?.length) && (
                    <motion.div
                      {...createFadeInAnimation(ANIMATION_CONFIG.DELAY.MEDIUM)}
                    >
                      {item.programmingLanguages?.length && (
                        <>
                          <Heading level={4} className={TYPOGRAPHY.COLOR.MUTED_OPACITY}>Programming Languages</Heading>
                          <PillList items={item.programmingLanguages} />
                        </>
                      )}

                      {item.developmentTools?.length && (
                        <>
                          <Heading level={4} className={`mt-4 ${TYPOGRAPHY.COLOR.MUTED_OPACITY}`}>Tools & Frameworks</Heading>
                          <PillList items={item.developmentTools} />
                        </>
                      )}
                    </motion.div>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </Section>
  )
}