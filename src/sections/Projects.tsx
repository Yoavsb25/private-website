import { motion } from 'framer-motion'
import { Section, Container } from '@/components/layout'
import { ProjectCard } from '@/components/projects'
import { projects } from '@/data/projects'
import { getFeaturedItems } from '@/lib/helpers'
import { SECTION_IDS, SECTION_TITLES, EASE_OUT_EXPO, ANIMATION_CONFIG } from '@/lib/constants'

export function Projects() {
  const featuredProjects = getFeaturedItems(projects)
  if (!featuredProjects.length) return null

  const [hero, ...rest] = featuredProjects

  return (
    <Section id={SECTION_IDS.PROJECTS} background="mutedMedium">
      <Container size="large">
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={ANIMATION_CONFIG.VIEWPORT.HEADER}
          transition={{ duration: 0.6, ease: EASE_OUT_EXPO }}
        >
          <p className="mb-3 font-mono text-xs tracking-[0.15em] uppercase text-accent/70">
            Portfolio
          </p>
          <h2 className="font-display text-[clamp(1.75rem,4vw,2.5rem)] font-bold tracking-tight">
            {SECTION_TITLES.PROJECTS}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {/* Hero project - full width */}
          <ProjectCard project={hero} featured />

          {/* Remaining projects in 2-col grid */}
          {rest.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </Container>
    </Section>
  )
}
