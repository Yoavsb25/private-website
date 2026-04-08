import { ReactNode } from 'react'
import { cn } from '@/lib/utils'
import { SPACING } from '@/lib/constants'

interface SectionProps {
  id?: string
  className?: string
  children: ReactNode
  background?: 'default' | 'mutedLight' | 'mutedMedium'
  fullHeight?: boolean
}

export function Section({
  id,
  className,
  children,
  background = 'default',
  fullHeight = false,
}: SectionProps) {
  const backgroundClass = {
    default: '',
    mutedLight: 'bg-muted/25',
    mutedMedium: 'bg-muted/40',
  }[background]

  return (
    <section
      id={id}
      className={cn(
        'relative',
        fullHeight && 'min-h-screen',
        SPACING.PADDING.SECTION,
        backgroundClass,
        className
      )}
    >
      {children}
    </section>
  )
}
