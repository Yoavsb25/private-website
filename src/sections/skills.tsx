import { motion } from 'framer-motion'
import { Section, SectionHeader, Container } from '@/components/layout'
import { skills } from '@/data/skills'
import { staggerContainer, staggerItem } from '@/lib/animations'
import { createStaggerContainerAnimation, createStaggerItemAnimation } from '@/lib/helpers'
import { SECTION_TITLES, SECTION_IDS, SKILLS_CONFIG } from '@/lib/constants'

const COL_SPAN: Record<1 | 2 | 3, string> = {
  1: 'md:col-span-1',
  2: 'md:col-span-2',
  3: 'md:col-span-3',
}

export function Skills() {
  return (
    <Section id={SECTION_IDS.SKILLS}>
      <Container size="small" className="text-center w-full">
        <SectionHeader>{SECTION_TITLES.SKILLS}</SectionHeader>
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
              <motion.div
                className={`grid ${SKILLS_CONFIG.GRID.COLS} ${SKILLS_CONFIG.GRID.GAP}`}
                {...createStaggerContainerAnimation(staggerContainer)}
              >
                {group.items.map(({ name, icon: Icon, color }) => (
                  <div key={name} className="flex flex-col items-center gap-2">
                    <motion.div
                      className={`flex ${SKILLS_CONFIG.CONTAINER_SIZES.FULL} items-center justify-center rounded-xl border border-border bg-card shadow-sm cursor-pointer`}
                      whileHover={{
                        scale: 1.1,
                        ...(color !== 'currentColor' ? { boxShadow: `0 0 20px ${color}55` } : {}),
                      }}
                      transition={{ duration: 0.2 }}
                    >
                      <Icon
                        className={`${SKILLS_CONFIG.ICON_SIZES.FULL} ${color === 'currentColor' ? 'text-foreground' : ''}`}
                        style={color !== 'currentColor' ? { color } : undefined}
                      />
                    </motion.div>
                    <p className="text-xs text-foreground/80">{name}</p>
                  </div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </Section>
  )
}
