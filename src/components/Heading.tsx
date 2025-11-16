import { ReactNode } from 'react'
import { cn } from '@/lib/utils'
import { TYPOGRAPHY, SPACING } from '@/lib/constants'

interface HeadingProps {
  children: ReactNode
  level?: 1 | 2 | 3 | 4
  className?: string
  withMargin?: boolean
}

export function Heading({
  children,
  level = 2,
  className,
  withMargin = true,
}: HeadingProps) {
  const Component = `h${level}` as 'h1' | 'h2' | 'h3' | 'h4'
  
  const levelClass = {
    1: TYPOGRAPHY.HEADING.H1,
    2: TYPOGRAPHY.HEADING.H2,
    3: TYPOGRAPHY.HEADING.H3,
    4: TYPOGRAPHY.HEADING.H4,
  }[level]

  return (
    <Component
      className={cn(
        levelClass,
        withMargin && level === 4 && SPACING.TEXT.HEADING,
        className
      )}
    >
      {children}
    </Component>
  )
}

