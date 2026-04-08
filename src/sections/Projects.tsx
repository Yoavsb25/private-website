import { motion } from 'framer-motion'
import { Section, SectionHeader, Container } from '@/components/layout'
import { ProjectCard } from '@/components/projects'
import { projects } from '@/data/projects'
import { getFeaturedItems } from '@/lib/helpers'
import { SECTION_IDS, SECTION_TITLES, LAYOUT, EASE_OUT_EXPO } from '@/lib/constants'

export function Projects() {
  const featuredProjects = getFeaturedItems(projects)
  if (featuredProjects.length === 0) return null

  return (
    <Section id={SECTION_IDS.PROJECTS} background="mutedMedium">
      <Container size="large">
        <SectionHeader>{SECTION_TITLES.PROJECTS}</SectionHeader>

        <div className={LAYOUT.GRID.PROJECTS_2COL}>
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{
                duration: 0.55,
                delay: index * 0.12,
                ease: EASE_OUT_EXPO,
              }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  )
}
