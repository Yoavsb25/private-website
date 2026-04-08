import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, Github, ChevronDown } from 'lucide-react'
import { Button } from '@/components/ui'
import { getTechIcon, getTechIconColor } from '@/lib/helpers'
import { EASE_OUT_EXPO } from '@/lib/constants'
import type { WorkItem } from '@/data/projects'

function TechBadges({ technologies }: { technologies: string[] }) {
  return (
    <div className="flex flex-wrap gap-1.5">
      {technologies.map(tech => {
        const Icon = getTechIcon(tech)
        const color = getTechIconColor(tech)
        return (
          <span
            key={tech}
            className="flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-2.5 py-1 backdrop-blur-sm"
          >
            <Icon className="h-3 w-3" style={{ color }} />
            <span className="text-[11px] font-medium text-white/90">{tech}</span>
          </span>
        )
      })}
    </div>
  )
}

function ProjectLinks({ project }: { project: WorkItem }) {
  if (!project.liveUrl && !project.sourceUrl) return null

  return (
    <div className="flex gap-2">
      {project.liveUrl && (
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={e => e.stopPropagation()}
          aria-label={`View ${project.title} live`}
        >
          <Button
            variant="outline"
            size="sm"
            className="border-white/20 bg-white/10 text-white backdrop-blur-sm hover:bg-white/20"
          >
            <ExternalLink className="mr-1.5 h-3.5 w-3.5" />
            Live
          </Button>
        </a>
      )}
      {project.sourceUrl && (
        <a
          href={project.sourceUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={e => e.stopPropagation()}
          aria-label={`View ${project.title} source code`}
        >
          <Button
            variant="outline"
            size="sm"
            className="border-white/20 bg-white/10 text-white backdrop-blur-sm hover:bg-white/20"
          >
            <Github className="mr-1.5 h-3.5 w-3.5" />
            Source
          </Button>
        </a>
      )}
    </div>
  )
}

function ExpandedContent({ project }: { project: WorkItem }) {
  return (
    <motion.div
      initial={{ height: 0, opacity: 0 }}
      animate={{ height: 'auto', opacity: 1 }}
      exit={{ height: 0, opacity: 0 }}
      transition={{ duration: 0.4, ease: EASE_OUT_EXPO }}
      className="overflow-hidden"
    >
      <div className="grid gap-6 border-t border-border/40 px-6 py-6 sm:grid-cols-2">
        <div>
          <div className="mb-2 flex items-center gap-2">
            <span className="h-3 w-0.5 rounded-full bg-destructive/60" />
            <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.15em] text-muted-foreground">
              Problem
            </span>
          </div>
          <p className="text-sm leading-relaxed text-muted-foreground">{project.problem}</p>
        </div>
        <div>
          <div className="mb-2 flex items-center gap-2">
            <span className="h-3 w-0.5 rounded-full bg-accent/60" />
            <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.15em] text-muted-foreground">
              Solution
            </span>
          </div>
          <p className="text-sm leading-relaxed text-muted-foreground">{project.solution}</p>
        </div>
      </div>
    </motion.div>
  )
}

interface ProjectCardProps {
  project: WorkItem
  featured?: boolean
}

export function ProjectCard({ project, featured = false }: ProjectCardProps) {
  const [expanded, setExpanded] = useState(false)

  return (
    <motion.article
      className={`group relative overflow-hidden rounded-xl border border-border/40 bg-card shadow-premium-sm transition-all duration-500 hover:border-border hover:shadow-premium-md ${featured ? 'md:col-span-2' : ''}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.55, ease: EASE_OUT_EXPO }}
    >
      {/* Image area with hover overlay */}
      {project.imageUrl && (
        <div className={`relative overflow-hidden ${featured ? 'aspect-[21/9]' : 'aspect-[16/9]'}`}>
          {/* Curtain reveal */}
          <motion.div
            className="absolute inset-0 z-10 bg-accent"
            initial={{ scaleX: 1, transformOrigin: 'right' }}
            whileInView={{ scaleX: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: EASE_OUT_EXPO }}
          />

          <img
            src={project.imageUrl}
            alt={project.imageAlt || project.title}
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            loading="lazy"
            decoding="async"
          />

          {/* Hover overlay */}
          <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/80 via-black/30 to-transparent p-6 opacity-0 transition-opacity duration-400 group-hover:opacity-100 sm:p-8">
            <div className="flex flex-col gap-4">
              <TechBadges technologies={project.technologies} />
              <ProjectLinks project={project} />
            </div>
          </div>

          {/* Always-visible overlay on touch devices */}
          <div className="absolute inset-x-0 bottom-0 flex flex-col gap-3 bg-gradient-to-t from-black/70 to-transparent p-4 sm:hidden">
            <ProjectLinks project={project} />
          </div>
        </div>
      )}

      {/* Content area */}
      <div
        className="flex cursor-pointer items-start justify-between gap-4 px-6 py-5"
        onClick={() => setExpanded(!expanded)}
        onKeyDown={e => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault()
            setExpanded(!expanded)
          }
        }}
        role="button"
        tabIndex={0}
        aria-expanded={expanded}
      >
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-3">
            <h3 className="truncate font-display text-lg font-bold leading-tight">
              {project.title}
            </h3>
            {project.date && (
              <span className="shrink-0 rounded-full bg-accent/8 px-2.5 py-0.5 font-mono text-[10px] font-medium text-accent">
                {project.date}
              </span>
            )}
          </div>
          {project.tagline && (
            <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground line-clamp-2">
              {project.tagline}
            </p>
          )}
        </div>
        <motion.div
          animate={{ rotate: expanded ? 180 : 0 }}
          transition={{ duration: 0.3, ease: EASE_OUT_EXPO }}
          className="mt-1 shrink-0 text-muted-foreground"
        >
          <ChevronDown className="h-4 w-4" />
        </motion.div>
      </div>

      {/* No-image fallback: show tech icons and links inline */}
      {!project.imageUrl && (
        <div className="flex flex-wrap items-center gap-2 border-t border-border/30 px-6 py-3">
          {project.technologies.map(tech => {
            const Icon = getTechIcon(tech)
            const color = getTechIconColor(tech)
            return <Icon key={tech} className="h-4 w-4" style={{ color }} aria-label={tech} />
          })}
          <div className="ml-auto flex gap-2">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground transition-colors hover:text-accent"
                aria-label={`${project.title} live site`}
              >
                <ExternalLink className="h-4 w-4" />
              </a>
            )}
            {project.sourceUrl && (
              <a
                href={project.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground transition-colors hover:text-accent"
                aria-label={`${project.title} source code`}
              >
                <Github className="h-4 w-4" />
              </a>
            )}
          </div>
        </div>
      )}

      {/* Expandable detail area */}
      <AnimatePresence>{expanded && <ExpandedContent project={project} />}</AnimatePresence>
    </motion.article>
  )
}
