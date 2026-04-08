import React, { useRef, useState } from 'react'
import { motion, useMotionValue, useReducedMotion, useSpring, useTransform } from 'framer-motion'
import { ExternalLink, Github, RotateCcw } from 'lucide-react'
import { Card, Button } from '@/components/ui'
import { createButtonAnimation, getTechIcon, getTechIconColor } from '@/lib/helpers'
import { ANIMATION_CONFIG, SECTION_SPACING, PROJECTS_LABELS, ICON_SIZES } from '@/lib/constants'
import type { WorkItem } from '@/data/projects'

function TiltCard({ children, disabled }: { children: React.ReactNode; disabled: boolean }) {
  const ref = useRef<HTMLDivElement>(null)
  const reducedMotion = useReducedMotion()
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [6, -6]), {
    stiffness: 300,
    damping: 30,
  })
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-6, 6]), {
    stiffness: 300,
    damping: 30,
  })
  const glareX = useTransform(mouseX, [-0.5, 0.5], [0, 100])
  const glareY = useTransform(mouseY, [-0.5, 0.5], [0, 100])
  const glare = useTransform(
    [glareX, glareY],
    ([x, y]) => `radial-gradient(circle at ${x}% ${y}%, rgba(255,255,255,0.06), transparent 60%)`
  )

  if (reducedMotion || disabled) {
    return <div>{children}</div>
  }

  return (
    <motion.div
      ref={ref}
      style={{ rotateX, rotateY, transformPerspective: 1000, transformStyle: 'preserve-3d' }}
      onMouseMove={e => {
        const rect = ref.current?.getBoundingClientRect()
        if (!rect) return
        mouseX.set((e.clientX - rect.left) / rect.width - 0.5)
        mouseY.set((e.clientY - rect.top) / rect.height - 0.5)
      }}
      onMouseLeave={() => {
        mouseX.set(0)
        mouseY.set(0)
      }}
      className="relative"
    >
      {children}
      <motion.div
        className="pointer-events-none absolute inset-0 rounded-lg opacity-0 transition-opacity duration-400 hover:opacity-100"
        style={{ background: glare }}
      />
    </motion.div>
  )
}

function TechIconRow({ technologies }: { technologies: string[] }) {
  return (
    <div className="flex flex-wrap gap-2 px-5 py-3 bg-background/50 border-t border-border/30">
      {technologies.map(tech => {
        const Icon = getTechIcon(tech)
        const color = getTechIconColor(tech)
        return (
          <Icon
            key={tech}
            role="img"
            aria-label={tech}
            className="w-5 h-5 transition-opacity hover:opacity-80"
            style={{ color }}
          />
        )
      })}
    </div>
  )
}

function CardBack({
  project,
  onFlipBack,
  isVisible,
}: {
  project: WorkItem
  onFlipBack: () => void
  isVisible: boolean
}) {
  const hasButtons = project.liveUrl || project.sourceUrl
  return (
    <div
      className="flex flex-col bg-card border border-border/60 rounded-lg overflow-hidden cursor-pointer shadow-premium-sm"
      role="button"
      tabIndex={isVisible ? 0 : -1}
      aria-hidden={!isVisible}
      onClick={e => {
        e.stopPropagation()
        onFlipBack()
      }}
      onKeyDown={e => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault()
          onFlipBack()
        }
      }}
      style={
        {
          backfaceVisibility: 'hidden',
          WebkitBackfaceVisibility: 'hidden',
          transform: 'rotateY(180deg)',
          position: 'absolute',
          inset: 0,
        } as React.CSSProperties
      }
    >
      <div className="px-5 pt-5 pb-4 border-b border-border/40">
        <h3 className="font-display font-bold text-base leading-tight text-foreground line-clamp-1">
          {project.title}
        </h3>
        {project.tagline && (
          <p className="text-xs text-muted-foreground mt-1 line-clamp-1">{project.tagline}</p>
        )}
      </div>

      <div className="flex flex-col flex-1 px-5 py-4 gap-5 overflow-y-auto">
        <div className="flex flex-col gap-1.5">
          <div className="flex items-center gap-2">
            <span className="w-1 h-4 rounded-full bg-destructive/60 shrink-0" />
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.12em] text-muted-foreground">
              {PROJECTS_LABELS.SECTIONS.PROBLEM}
            </p>
          </div>
          <p className="text-sm text-foreground/85 leading-relaxed pl-3 border-l border-border/60">
            {project.problem}
          </p>
        </div>

        <div className="flex flex-col gap-1.5">
          <div className="flex items-center gap-2">
            <span className="w-1 h-4 rounded-full bg-accent/60 shrink-0" />
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.12em] text-muted-foreground">
              {PROJECTS_LABELS.SECTIONS.SOLUTION}
            </p>
          </div>
          <p className="text-sm text-foreground/85 leading-relaxed pl-3 border-l border-border/60">
            {project.solution}
          </p>
        </div>
      </div>

      {hasButtons && (
        <div
          className={`pb-4 px-5 flex ${SECTION_SPACING.PROJECTS_FOOTER} border-t border-border/40 pt-3`}
        >
          {project.liveUrl && (
            <motion.a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              tabIndex={isVisible ? 0 : -1}
              aria-label={PROJECTS_LABELS.ARIA_LABELS.LIVE_SITE(project.title)}
              onClick={e => e.stopPropagation()}
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
              tabIndex={isVisible ? 0 : -1}
              aria-label={PROJECTS_LABELS.ARIA_LABELS.SOURCE_CODE(project.title)}
              onClick={e => e.stopPropagation()}
              {...createButtonAnimation()}
            >
              <Button variant="outline" size="sm">
                <Github className={`mr-2 ${ICON_SIZES.SMALL_RESPONSIVE}`} />
                {PROJECTS_LABELS.BUTTONS.SOURCE}
              </Button>
            </motion.a>
          )}
        </div>
      )}
    </div>
  )
}

interface ProjectCardProps {
  project: WorkItem
}

export function ProjectCard({ project }: ProjectCardProps) {
  const [isFlipped, setIsFlipped] = useState(false)
  const reducedMotion = useReducedMotion()

  const flipTransition = reducedMotion ? { duration: 0 } : ANIMATION_CONFIG.FLIP.SPRING

  const handleFlip = () => setIsFlipped(true)
  const handleFlipBack = () => setIsFlipped(false)

  return (
    <TiltCard disabled={isFlipped}>
      <motion.div
        className="relative w-full"
        style={
          {
            transformStyle: 'preserve-3d',
            WebkitTransformStyle: 'preserve-3d',
            minHeight: 'clamp(380px,55vw,520px)',
          } as React.CSSProperties
        }
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={flipTransition}
      >
        {/* FRONT FACE */}
        <div
          className="absolute inset-0"
          aria-hidden={isFlipped}
          style={
            {
              backfaceVisibility: 'hidden',
              WebkitBackfaceVisibility: 'hidden',
            } as React.CSSProperties
          }
        >
          <Card
            className="flex h-full flex-col overflow-hidden cursor-pointer group hover:shadow-premium-md hover:border-border"
            role="button"
            tabIndex={isFlipped ? -1 : 0}
            aria-label={`View details for ${project.title}`}
            onClick={handleFlip}
            onKeyDown={(e: React.KeyboardEvent) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault()
                handleFlip()
              }
            }}
          >
            {project.imageUrl ? (
              <div className="relative flex-1 overflow-hidden">
                <img
                  src={project.imageUrl}
                  alt={project.imageAlt || project.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  loading="lazy"
                />
                <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/80 via-black/30 to-transparent pointer-events-none" />
                <div className="pointer-events-none absolute right-3 top-3 flex translate-y-1 items-center gap-1.5 rounded-md bg-black/40 px-2.5 py-1 opacity-0 backdrop-blur-sm transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  <RotateCcw className="h-3 w-3 text-white" />
                  <span className="text-[10px] font-semibold uppercase tracking-[0.12em] text-white">
                    Explore
                  </span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 px-5 pb-5 pt-8">
                  <h3 className="font-display text-white font-bold text-[clamp(1.0625rem,2.5vw,1.375rem)] leading-tight drop-shadow-lg">
                    {project.title}
                  </h3>
                  {project.tagline && (
                    <p className="text-white/75 text-sm mt-1 drop-shadow">{project.tagline}</p>
                  )}
                </div>
              </div>
            ) : (
              <div className="relative flex flex-1 flex-col justify-between p-6">
                <div className="pointer-events-none absolute right-3 top-3 flex translate-y-1 items-center gap-1.5 rounded-md bg-accent/10 px-2.5 py-1 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  <RotateCcw className="h-3 w-3 text-accent" />
                  <span className="text-[10px] font-semibold uppercase tracking-[0.12em] text-accent">
                    Explore
                  </span>
                </div>
                <div>
                  <h3 className="font-display font-bold text-[clamp(1.0625rem,2.5vw,1.375rem)] leading-tight text-foreground">
                    {project.title}
                  </h3>
                  {project.tagline && (
                    <p className="text-muted-foreground text-sm mt-2 leading-relaxed">
                      {project.tagline}
                    </p>
                  )}
                  <p className="text-foreground/80 text-sm mt-4 leading-relaxed line-clamp-5">
                    {project.description}
                  </p>
                </div>
                {project.date && (
                  <span className="mt-5 inline-block self-start rounded-full bg-accent/8 px-3 py-1 text-xs font-medium text-accent">
                    {project.date}
                  </span>
                )}
              </div>
            )}
            <TechIconRow technologies={project.technologies} />
          </Card>
        </div>

        {/* BACK FACE */}
        <CardBack project={project} onFlipBack={handleFlipBack} isVisible={isFlipped} />
      </motion.div>
    </TiltCard>
  )
}
