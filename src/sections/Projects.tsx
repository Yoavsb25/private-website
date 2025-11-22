import { motion } from 'framer-motion'
import { Section, SectionHeader, Container } from '@/components/layout'
import { Heading, Text } from '@/components/typography'
import {
  Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle,
} from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { projects } from '@/data/projects'
import { ExternalLink, Github } from 'lucide-react'
import { staggerContainer, staggerItem } from '@/lib/animations'
import {
  getFeaturedItems,
  createStaggerContainerAnimation,
  createStaggerItemAnimation,
  createCardHoverAnimation,
  createButtonAnimation,
  createBadgeAnimation,
} from '@/lib/helpers'
import { SECTION_TITLES, SECTION_IDS, ASPECT_RATIOS, ANIMATION_CONFIG, LAYOUT, SPACING, COMPONENT_CLASSES, PROJECTS_LABELS, ICON_SIZES, SECTION_CLASSES, SECTION_SPACING } from '@/lib/constants'

export function Projects() {
  const featuredProjects = getFeaturedItems(projects)
  if (featuredProjects.length === 0) return null

  return (
    <Section id={SECTION_IDS.PROJECTS} background="mutedMedium">
      <Container size="large">
        <SectionHeader>{SECTION_TITLES.PROJECTS}</SectionHeader>

        <motion.div
          className={LAYOUT.GRID.AUTO_FIT}
          {...createStaggerContainerAnimation(staggerContainer)}
        >
          {featuredProjects.map((project) => (
            <motion.div
              key={project.id}
              {...createStaggerItemAnimation(staggerItem)}
              {...createCardHoverAnimation('medium')}
            >
              <Card className={`flex h-full flex-col overflow-hidden ${COMPONENT_CLASSES.CARD.HOVER_LARGE}`}>
                {project.imageUrl && (
                  <div className={SECTION_CLASSES.PROJECTS_IMAGE_WRAPPER}>
                    <motion.img
                      src={project.imageUrl}
                      alt={project.imageAlt || project.title}
                      className={SECTION_CLASSES.PROJECTS_IMAGE}
                      loading="lazy"
                      style={{ aspectRatio: ASPECT_RATIOS.PROJECT_IMAGE }}
                      whileHover={ANIMATION_CONFIG.HOVER.SCALE_UP_LARGE}
                      transition={{ duration: ANIMATION_CONFIG.DURATION.MEDIUM }}
                    />
                  </div>
                )}

                <CardHeader>
                  <CardTitle className="text-lg font-bold">{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>

                <CardContent className={`flex flex-1 flex-col ${SPACING.CARD.INTERNAL}`}>
                  <div>
                    <Heading level={4}>{PROJECTS_LABELS.SECTIONS.PROBLEM}</Heading>
                    <Text color="muted">{project.problem}</Text>
                  </div>

                  <div>
                    <Heading level={4}>{PROJECTS_LABELS.SECTIONS.SOLUTION}</Heading>
                    <Text color="muted">{project.solution}</Text>
                  </div>

                  <div>
                    <Heading level={4}>{PROJECTS_LABELS.SECTIONS.TECHNOLOGIES}</Heading>
                    <div className={`${LAYOUT.FLEX.WRAP} ${SPACING.CARD.SMALL}`}>
                      {project.technologies.map((tech) => (
                        <motion.div key={tech} {...createBadgeAnimation()}>
                          <Badge variant="outline" className="cursor-default">
                            {tech}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {project.outcomes && (
                    <div>
                      <Heading level={4}>{PROJECTS_LABELS.SECTIONS.OUTCOMES}</Heading>
                      <Text color="muted">{project.outcomes}</Text>
                    </div>
                  )}
                </CardContent>

                <CardFooter className={`flex ${SECTION_SPACING.PROJECTS_FOOTER}`}>
                  {project.liveUrl && (
                    <motion.a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={PROJECTS_LABELS.ARIA_LABELS.LIVE_SITE(project.title)}
                      {...createButtonAnimation()}
                    >
                      <Button variant="outline" size="sm">
                        <ExternalLink className={`mr-2 ${ICON_SIZES.SMALL_RESPONSIVE}`} />
                        {PROJECTS_LABELS.BUTTONS.LIVE_SITE}
                      </Button>
                    </motion.a>
                  )}
                  {project.sourceUrl && (
                    <motion.a
                      href={project.sourceUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={PROJECTS_LABELS.ARIA_LABELS.SOURCE_CODE(project.title)}
                      {...createButtonAnimation()}
                    >
                      <Button variant="outline" size="sm">
                        <Github className={`mr-2 ${ICON_SIZES.SMALL_RESPONSIVE}`} />
                        {PROJECTS_LABELS.BUTTONS.SOURCE}
                      </Button>
                    </motion.a>
                  )}
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </Section>
  )
}
