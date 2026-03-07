import { motion } from 'framer-motion'
import { Section, SectionHeader, Container } from '@/components/layout'
import { ProjectCard } from '@/components/projects'
import { projects } from '@/data/projects'
import { getFeaturedItems, createFadeInAnimation } from '@/lib/helpers'
import { ANIMATION_CONFIG, SECTION_IDS, LAYOUT } from '@/lib/constants'

export function Projects() {
  const featuredProjects = getFeaturedItems(projects)
  if (featuredProjects.length === 0) return null

  return (
    <Section id={SECTION_IDS.PROJECTS} background="mutedMedium" aria-labelledby="projects-heading">
      <Container size="large">
        <div className="text-center mb-12">
          <SectionHeader id="projects-heading">Featured Projects</SectionHeader>
          <motion.span
            className="block w-12 h-0.5 bg-primary/60 rounded-full mx-auto mt-2"
            {...createFadeInAnimation(0.3)}
          />
        </div>

        <div className={LAYOUT.GRID.PROJECTS_2COL}>
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: ANIMATION_CONFIG.DURATION.SLOW, delay: index * ANIMATION_CONFIG.DELAY.STAGGER_CARD, ease: ANIMATION_CONFIG.EASE.CUBIC }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  )
}
