import { motion } from 'framer-motion'
import { Section } from '@/components/Section'
import { SectionHeader } from '@/components/SectionHeader'
import { Container } from '@/components/Container'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { experiences } from '@/data/experience'
import { staggerContainer, staggerItem } from '@/lib/animations'
import {
  createStaggerContainerAnimation,
  createStaggerItemAnimation,
  createCardHoverAnimation,
  createBadgeAnimation,
  createFadeInAnimation,
} from '@/lib/animation-helpers'
import { SECTION_TITLES, SECTION_IDS, ANIMATION_CONFIG, SPACING, LAYOUT, COMPONENT_CLASSES } from '@/lib/constants'

export function Experience() {
  return (
    <Section id={SECTION_IDS.EXPERIENCE}>
      <Container size="small">
        <SectionHeader>{SECTION_TITLES.EXPERIENCE}</SectionHeader>
        <motion.div
          className={SPACING.SECTION.CONTENT}
          {...createStaggerContainerAnimation(staggerContainer)}
        >
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              {...createStaggerItemAnimation(staggerItem)}
              {...createCardHoverAnimation('small')}
            >
              <Card className={COMPONENT_CLASSES.CARD.HOVER}>
                <CardHeader>
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                    {exp.logoUrl && (
                      <motion.div
                        whileHover={ANIMATION_CONFIG.HOVER.SCALE_UP_LARGE}
                        transition={{ duration: ANIMATION_CONFIG.DURATION.NORMAL }}
                      >
                        <img
                          src={exp.logoUrl}
                          alt={`${exp.company} logo`}
                          className="h-16 w-auto object-contain"
                        />
                      </motion.div>
                    )}
                    <div>
                      <CardTitle>{exp.title}</CardTitle>
                      <CardDescription>{exp.company}</CardDescription>
                    </div>
                    <div className="text-right">
                      <CardDescription className="text-xs">{exp.period}</CardDescription>
                      <CardDescription className="text-xs">{exp.location}</CardDescription>
                    {exp.type && (
                      <motion.div {...createBadgeAnimation()}>
                        <Badge variant="secondary" className="mt-1">
                          {exp.type}
                        </Badge>
                      </motion.div>
                    )}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <motion.ul
                    className={`${SPACING.TEXT.LIST} ${SPACING.TEXT.PARAGRAPH}`}
                    {...createStaggerContainerAnimation(staggerContainer)}
                  >
                    {exp.achievements.map((achievement, i) => (
                      <motion.li
                        key={i}
                        className={`${LAYOUT.FLEX.CENTER} items-start text-sm`}
                        {...createStaggerItemAnimation(staggerItem)}
                      >
                        <span className="mr-2">•</span>
                        <span>{achievement}</span>
                      </motion.li>
                    ))}
                  </motion.ul>
                  {exp.technologies && exp.technologies.length > 0 && (
                    <motion.div
                      className={`${LAYOUT.FLEX.WRAP} ${SPACING.CARD.SMALL} mt-4`}
                      {...createFadeInAnimation(ANIMATION_CONFIG.DELAY.SHORT)}
                    >
                      {exp.technologies.map((tech) => (
                        <motion.div key={tech} {...createBadgeAnimation()}>
                          <Badge variant="outline" className="cursor-default">
                            {tech}
                          </Badge>
                        </motion.div>
                      ))}
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

