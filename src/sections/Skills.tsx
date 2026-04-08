import { motion } from 'framer-motion'
import { Section, Container } from '@/components/layout'
import { skills, type SkillItem } from '@/data/skills'
import { SECTION_IDS, EASE_OUT_EXPO, ANIMATION_CONFIG } from '@/lib/constants'
import { prefersReducedMotion } from '@/lib/animations'

const allSkills = skills.flatMap(g => g.items)

function distributeSkills(items: SkillItem[], rows: number): SkillItem[][] {
  const result: SkillItem[][] = Array.from({ length: rows }, () => [])
  items.forEach((item, i) => result[i % rows].push(item))
  return result
}

const rows = distributeSkills(allSkills, 3)

function MarqueeRow({
  items,
  direction = 'left',
  speed = 40,
}: {
  items: SkillItem[]
  direction?: 'left' | 'right'
  speed?: number
}) {
  const reduced = prefersReducedMotion()
  const doubled = [...items, ...items]
  const animClass = direction === 'left' ? 'animate-marquee-left' : 'animate-marquee-right'

  return (
    <div className="group relative flex overflow-hidden py-3">
      <div
        className={`flex shrink-0 gap-4 ${reduced ? '' : animClass}`}
        style={
          reduced
            ? undefined
            : ({
                animationDuration: `${speed}s`,
                animationPlayState: 'running',
              } as React.CSSProperties)
        }
        onMouseEnter={e => {
          if (!reduced) e.currentTarget.style.animationPlayState = 'paused'
        }}
        onMouseLeave={e => {
          if (!reduced) e.currentTarget.style.animationPlayState = 'running'
        }}
      >
        {doubled.map(({ name, icon: Icon, color }, i) => (
          <div
            key={`${name}-${i}`}
            className="group/icon relative flex h-14 items-center gap-3 rounded-xl border border-border/40 bg-card px-5 shadow-premium-sm transition-all duration-300 hover:border-accent/30 hover:shadow-glow-accent"
          >
            <Icon
              className="h-5 w-5 shrink-0 transition-transform duration-300 group-hover/icon:scale-110"
              style={color !== 'currentColor' ? { color } : undefined}
            />
            <span className="whitespace-nowrap text-sm font-medium text-foreground">{name}</span>
            <div
              className="pointer-events-none absolute inset-0 rounded-xl opacity-0 transition-opacity duration-300 group-hover/icon:opacity-100"
              style={{
                background:
                  color !== 'currentColor'
                    ? `radial-gradient(circle at center, ${color}08 0%, transparent 70%)`
                    : undefined,
              }}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export function Skills() {
  return (
    <Section id={SECTION_IDS.SKILLS}>
      <Container size="small" className="w-full">
        <motion.div
          className="mb-12 max-w-xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={ANIMATION_CONFIG.VIEWPORT.HEADER}
          transition={{ duration: 0.6, ease: EASE_OUT_EXPO }}
        >
          <p className="mb-3 font-mono text-xs tracking-[0.15em] uppercase text-accent/70">
            Tech Stack
          </p>
          <h2 className="font-display text-[clamp(1.75rem,4vw,2.5rem)] font-bold tracking-tight">
            Tools I work with
          </h2>
        </motion.div>
      </Container>

      <div className="relative w-full overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-background to-transparent" />

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={ANIMATION_CONFIG.VIEWPORT.CONTAINER}
          transition={{ duration: 0.8, ease: EASE_OUT_EXPO }}
          className="flex flex-col gap-1"
        >
          <MarqueeRow items={rows[0]} direction="left" speed={45} />
          <MarqueeRow items={rows[1]} direction="right" speed={55} />
          <MarqueeRow items={rows[2]} direction="left" speed={38} />
        </motion.div>
      </div>
    </Section>
  )
}
