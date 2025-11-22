import { motion } from 'framer-motion'
import { TYPOGRAPHY, SPACING, UI_CONFIG } from '@/lib/constants'
import { createSectionHeaderAnimation } from '@/lib/animations'
import { cn } from '@/lib/utils'

interface SectionHeaderProps {
  children: React.ReactNode
  className?: string
  as?: 'h1' | 'h2' | 'h3'
}

export function SectionHeader({
  children,
  className,
  as: Component = 'h2',
}: SectionHeaderProps) {
  const baseClasses = cn(
    SPACING.SECTION.HEADER,
    TYPOGRAPHY.HEADING.H2,
    UI_CONFIG.CLASSES.SECTION_HEADER,
    className
  )

  return (
    <motion.div {...createSectionHeaderAnimation()}>
      <Component className={baseClasses}>{children}</Component>
    </motion.div>
  )
}

