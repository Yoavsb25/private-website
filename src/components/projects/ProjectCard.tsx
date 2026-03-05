import React, { useRef, useState } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'
import { prefersReducedMotion } from '@/lib/animations'
import { Card, Button } from '@/components/ui'
import { createButtonAnimation, getTechIcon, getTechIconColor } from '@/lib/helpers'
import { ANIMATION_CONFIG, SECTION_SPACING, PROJECTS_LABELS, ICON_SIZES } from '@/lib/constants'
import type { WorkItem } from '@/data/projects'

// ---------------------------------------------------------------------------
// TiltCard — 3D tilt + glare on mouse move. Disabled while card is flipped.
// ---------------------------------------------------------------------------
function TiltCard({ children, disabled }: { children: React.ReactNode; disabled: boolean }) {
  const ref = useRef<HTMLDivElement>(null)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [8, -8]), {
    stiffness: 300,
    damping: 30,
  })
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-8, 8]), {
    stiffness: 300,
    damping: 30,
  })
  const glareX = useTransform(mouseX, [-0.5, 0.5], [0, 100])
  const glareY = useTransform(mouseY, [-0.5, 0.5], [0, 100])
  const glare = useTransform(
    [glareX, glareY],
    ([x, y]) => `radial-gradient(circle at ${x}% ${y}%, rgba(255,255,255,0.08), transparent 60%)`
  )

  if (prefersReducedMotion() || disabled) {
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
        className="pointer-events-none absolute inset-0 rounded-lg opacity-0 transition-opacity duration-300 hover:opacity-100"
        style={{ background: glare }}
      />
    </motion.div>
  )
}

// ---------------------------------------------------------------------------
// TechIconRow — small coloured devicons for the technology list
// ---------------------------------------------------------------------------
function TechIconRow({ technologies }: { technologies: string[] }) {
  return (
    <div className="flex flex-wrap gap-2 px-4 py-3 bg-background">
      {technologies.map(tech => {
        const Icon = getTechIcon(tech)
        const color = getTechIconColor(tech)
        return (
          <Icon
            key={tech}
            className="w-5 h-5 transition-opacity hover:opacity-80"
            style={{ color }}
            title={tech}
          />
        )
      })}
    </div>
  )
}

// ---------------------------------------------------------------------------
// CardBack — problem + solution + action buttons
// ---------------------------------------------------------------------------
function CardBack({
  project,
  onFlipBack,
  isVisible,
}: {
  project: WorkItem
  onFlipBack: (e: React.MouseEvent) => void
  isVisible: boolean
}) {
  const hasButtons = project.liveUrl || project.sourceUrl
  return (
    <div
      className="flex flex-col bg-card border border-border rounded-lg overflow-hidden cursor-pointer"
      role="button"
      tabIndex={isVisible ? 0 : -1}
      aria-hidden={!isVisible}
      onClick={onFlipBack}
      onKeyDown={e => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault()
          onFlipBack(e as unknown as React.MouseEvent)
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
      {/* Header strip with project title */}
      <div className="px-5 pt-5 pb-4 border-b border-border/50">
        <h3 className="font-bold text-base leading-tight text-foreground line-clamp-1">
          {project.title}
        </h3>
        {project.tagline && (
          <p className="text-xs text-muted-foreground mt-1 line-clamp-1">{project.tagline}</p>
        )}
      </div>

      {/* Problem + Solution */}
      <div className="flex flex-col flex-1 px-5 py-4 gap-5 overflow-y-auto">
        <div className="flex flex-col gap-1.5">
          <div className="flex items-center gap-2">
            <span className="w-1 h-4 rounded-full bg-destructive/70 shrink-0" />
            <p className="text-[0.65rem] font-semibold uppercase tracking-widest text-muted-foreground">
              {PROJECTS_LABELS.SECTIONS.PROBLEM}
            </p>
          </div>
          <p className="text-sm text-foreground/85 leading-relaxed pl-3 border-l border-border">
            {project.problem}
          </p>
        </div>

        <div className="flex flex-col gap-1.5">
          <div className="flex items-center gap-2">
            <span className="w-1 h-4 rounded-full bg-primary/70 shrink-0" />
            <p className="text-[0.65rem] font-semibold uppercase tracking-widest text-muted-foreground">
              {PROJECTS_LABELS.SECTIONS.SOLUTION}
            </p>
          </div>
          <p className="text-sm text-foreground/85 leading-relaxed pl-3 border-l border-border">
            {project.solution}
          </p>
        </div>
      </div>

      {/* Action buttons — only rendered when links exist */}
      {hasButtons && (
        <div
          className={`pb-4 px-5 flex ${SECTION_SPACING.PROJECTS_FOOTER} border-t border-border pt-3`}
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

// ---------------------------------------------------------------------------
// ProjectCard
// ---------------------------------------------------------------------------
interface ProjectCardProps {
  project: WorkItem
}

export function ProjectCard({ project }: ProjectCardProps) {
  const [isFlipped, setIsFlipped] = useState(false)
  const reduced = prefersReducedMotion()

  const flipTransition = reduced ? { duration: 0 } : ANIMATION_CONFIG.FLIP.SPRING

  const handleFlip = () => setIsFlipped(true)
  const handleFlipBack = (e: React.MouseEvent) => {
    e.stopPropagation()
    setIsFlipped(false)
  }

  return (
    <TiltCard disabled={isFlipped}>
      {/* Flip container — preserve-3d so children can be positioned front/back */}
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
            className="flex h-full flex-col overflow-hidden cursor-pointer"
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
            {/* Image area — flex-1 so it fills the card, no z-index to avoid bleed-through */}
            {project.imageUrl && (
              <div className="relative flex-1 overflow-hidden">
                <img
                  src={project.imageUrl}
                  alt={project.imageAlt || project.title}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
                {/* Bottom gradient — no z-index, stacks by DOM order */}
                <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/75 to-transparent pointer-events-none" />
                {/* Title + tagline — no z-index, naturally above gradient */}
                <div className="absolute bottom-0 left-0 right-0 px-4 pb-4 pt-8">
                  <h3 className="text-white font-bold text-[clamp(1rem,2.5vw,1.25rem)] leading-tight drop-shadow">
                    {project.title}
                  </h3>
                  {project.tagline && (
                    <p className="text-white/80 text-sm mt-0.5 drop-shadow">{project.tagline}</p>
                  )}
                </div>
              </div>
            )}
            {/* Tech icons row */}
            <TechIconRow technologies={project.technologies} />
          </Card>
        </div>

        {/* BACK FACE */}
        <CardBack project={project} onFlipBack={handleFlipBack} isVisible={isFlipped} />
      </motion.div>
    </TiltCard>
  )
}
