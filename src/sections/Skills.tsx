import { motion } from 'framer-motion'
import { Section, SectionHeader, Container } from '@/components/layout'
import { skills } from '@/data/skills'
import { staggerContainer, staggerItem } from '@/lib/animations'
import { createStaggerContainerAnimation, createStaggerItemAnimation } from '@/lib/helpers'
import { SECTION_TITLES, SECTION_IDS, ANIMATION_CONFIG, EASE_OUT_EXPO } from '@/lib/constants'

const COL_SPAN: Record<1 | 2 | 3, string> = {
  1: 'md:col-span-1',
  2: 'md:col-span-2',
  3: 'md:col-span-3',
}

const INNER_COLS: Record<1 | 2 | 3, string> = {
  1: 'grid-cols-2 sm:grid-cols-4',
  2: 'grid-cols-3 sm:grid-cols-5',
  3: 'grid-cols-3 sm:grid-cols-5',
}

export function Skills() {
  return (
    <Section id={SECTION_IDS.SKILLS}>
      <Container size="small" className="w-full">
        <SectionHeader className="text-center">{SECTION_TITLES.SKILLS}</SectionHeader>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-5 w-full"
          {...createStaggerContainerAnimation(staggerContainer)}
        >
          {skills.map(group => (
            <motion.div
              key={group.category}
              className={`${COL_SPAN[group.colSpan]} flex flex-col gap-5 rounded-xl border border-border/50 bg-card p-6 shadow-premium-sm transition-all duration-400 hover:shadow-premium hover:border-border`}
              {...createStaggerItemAnimation(staggerItem)}
            >
              <div className="flex items-center gap-2">
                <span className="h-1 w-5 rounded-full bg-accent/40" />
                <p className="text-xs font-semibold tracking-[0.12em] uppercase text-muted-foreground">
                  {group.category}
                </p>
              </div>
              <div className={`grid ${INNER_COLS[group.colSpan]} gap-3`}>
                {group.items.map(({ name, icon: Icon, color }) => (
                  <div key={name} className="flex flex-col items-center gap-2">
                    <motion.div
                      className="flex h-11 w-11 items-center justify-center rounded-xl border border-border/40 bg-background shadow-premium-sm"
                      whileHover={{
                        scale: 1.08,
                        y: -2,
                        ...(color !== 'currentColor' ? { boxShadow: `0 4px 20px ${color}30` } : {}),
                      }}
                      transition={{
                        duration: ANIMATION_CONFIG.DURATION.FAST,
                        ease: EASE_OUT_EXPO,
                      }}
                    >
                      <Icon
                        className={`h-5 w-5 ${color === 'currentColor' ? 'text-foreground' : ''}`}
                        style={color !== 'currentColor' ? { color } : undefined}
                      />
                    </motion.div>
                    <p className="text-[0.6875rem] font-medium text-muted-foreground">{name}</p>
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
