import { ReactNode } from 'react'
import { cn } from '@/lib/utils'
import { SPACING } from '@/lib/constants'

interface SectionProps {
  id?: string
  className?: string
  children: ReactNode
  background?: 'default' | 'mutedLight' | 'mutedMedium'
}

export function Section({
  id,
  className,
  children,
  background = 'default',
}: SectionProps) {
  const backgroundClass = {
    default: '',
    mutedLight: 'bg-muted/30',
    mutedMedium: 'bg-muted/50',
  }[background]

  return (
    <section
      id={id}
      className={cn(
        'min-h-screen',
        SPACING.PADDING.SECTION,
        backgroundClass,
        className
      )}
    >
      {children}
    </section>
  )
}

