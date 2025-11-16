import { motion } from 'framer-motion'
import { Section } from '@/components/Section'
import { SectionHeader } from '@/components/SectionHeader'
import { Container } from '@/components/Container'
import { Heading } from '@/components/Heading'
import { Text } from '@/components/Text'
import {
  Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle,
} from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { projects } from '@/data/projects'
import { getFeaturedItems } from '@/lib/data-helpers'
import { ExternalLink, Github } from 'lucide-react'
import { staggerContainer, staggerItem } from '@/lib/animations'
import {
  createStaggerContainerAnimation,
  createStaggerItemAnimation,
  createCardHoverAnimation,
  createButtonAnimation,
  createBadgeAnimation,
} from '@/lib/animation-helpers'
import { SECTION_TITLES, SECTION_IDS, ASPECT_RATIOS, ANIMATION_CONFIG, LAYOUT, SPACING, COMPONENT_CLASSES } from '@/lib/constants'

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
                  <div className="overflow-hidden rounded-t-lg relative">
                    <motion.img
                      src={project.imageUrl}
                      alt={project.imageAlt || project.title}
                      className="h-full w-full object-cover"
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
                    <Heading level={4}>Problem</Heading>
                    <Text color="muted">{project.problem}</Text>
                  </div>

                  <div>
                    <Heading level={4}>Solution</Heading>
                    <Text color="muted">{project.solution}</Text>
                  </div>

                  <div>
                    <Heading level={4}>Technologies</Heading>
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
                      <Heading level={4}>Outcomes</Heading>
                      <Text color="muted">{project.outcomes}</Text>
                    </div>
                  )}
                </CardContent>

                <CardFooter className="flex gap-2">
                  {project.liveUrl && (
                    <motion.a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View ${project.title} live site`}
                      {...createButtonAnimation()}
                    >
                      <Button variant="outline" size="sm">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Live Site
                      </Button>
                    </motion.a>
                  )}
                  {project.sourceUrl && (
                    <motion.a
                      href={project.sourceUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View ${project.title} source code`}
                      {...createButtonAnimation()}
                    >
                      <Button variant="outline" size="sm">
                        <Github className="mr-2 h-4 w-4" />
                        Source
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
