import { motion } from 'framer-motion'
import { Section, SectionHeader, Container } from '@/components/layout'
import { skills } from '@/data/skills'
import { staggerContainer, staggerItem } from '@/lib/animations'
import { createStaggerContainerAnimation, createStaggerItemAnimation } from '@/lib/helpers'
import { SECTION_TITLES, SECTION_IDS, ANIMATION_CONFIG } from '@/lib/constants'

const COL_SPAN: Record<1 | 2 | 3, string> = {
  1: 'md:col-span-1',
  2: 'md:col-span-2',
  3: 'md:col-span-3',
}

// Number of columns for the inner skill icon grid per bento cell width
// Frontend (2-col bento, 7 items) → 4 cols = 2 rows (4+3)
// Backend  (1-col bento, 5 items) → 3 cols = 2 rows (3+2)
// Infra    (3-col bento, 7 items) → 7 cols = 1 row
const INNER_COLS: Record<1 | 2 | 3, string> = {
  1: 'grid-cols-3',
  2: 'grid-cols-3 sm:grid-cols-4',
  3: 'grid-cols-4 sm:grid-cols-7',
}

export function Skills() {
  return (
    <Section id={SECTION_IDS.SKILLS} aria-labelledby="skills-heading">
      <Container size="small" className="text-center w-full">
        <SectionHeader id="skills-heading">{SECTION_TITLES.SKILLS}</SectionHeader>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full"
          {...createStaggerContainerAnimation(staggerContainer)}
        >
          {skills.map(group => (
            <motion.div
              key={group.category}
              className={`${COL_SPAN[group.colSpan]} flex flex-col gap-4 rounded-2xl border border-border/50 bg-background/40 backdrop-blur-sm p-6 hover:bg-background/60 transition-colors duration-300`}
              {...createStaggerItemAnimation(staggerItem)}
            >
              <p className="text-xs font-medium tracking-widest uppercase text-muted-foreground text-left">
                {group.category}
              </p>
              <div className={`grid ${INNER_COLS[group.colSpan]} gap-3`}>
                {group.items.map(({ name, icon: Icon, color }) => (
                  <div key={name} className="flex flex-col items-center gap-1.5">
                    <motion.div
                      className={`flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-card shadow-sm`}
                      whileHover={{
                        scale: 1.1,
                        ...(color !== 'currentColor' ? { boxShadow: `0 0 20px ${color}55` } : {}),
                      }}
                      transition={{ duration: ANIMATION_CONFIG.DURATION.FAST }}
                    >
                      <Icon
                        aria-hidden="true"
                        className={`h-5 w-5 ${color === 'currentColor' ? 'text-foreground' : ''}`}
                        style={color !== 'currentColor' ? { color } : undefined}
                      />
                    </motion.div>
                    <p className="text-xs text-foreground/80">{name}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </Section>
  )
}
