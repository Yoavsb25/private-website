import { motion } from 'framer-motion'
import { TYPOGRAPHY, SPACING, UI_CONFIG } from '@/lib/constants'
import { createSectionHeaderAnimation } from '@/lib/helpers'
import { cn } from '@/lib/utils'

interface SectionHeaderProps {
  children: React.ReactNode
  className?: string
  as?: 'h1' | 'h2' | 'h3'
  subtitle?: string
}

export function SectionHeader({
  children,
  className,
  as: Component = 'h2',
  subtitle,
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
      {subtitle && (
        <p className="mx-auto mt-4 max-w-2xl text-center text-muted-foreground text-[clamp(0.9375rem,2vw,1.0625rem)] leading-relaxed">
          {subtitle}
        </p>
      )}
    </motion.div>
  )
}
