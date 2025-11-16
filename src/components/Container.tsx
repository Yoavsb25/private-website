import { ReactNode } from 'react'
import { cn } from '@/lib/utils'
import { LAYOUT, SPACING } from '@/lib/constants'

interface ContainerProps {
  children: ReactNode
  size?: 'small' | 'large' | 'full'
  className?: string
  withPadding?: boolean
}

export function Container({
  children,
  size = 'small',
  className,
  withPadding = true,
}: ContainerProps) {
  const sizeClass = {
    small: LAYOUT.CONTAINER.SMALL,
    large: LAYOUT.CONTAINER.LARGE,
    full: LAYOUT.CONTAINER.FULL,
  }[size]

  return (
    <div
      className={cn(
        sizeClass,
        withPadding && SPACING.PADDING.CONTAINER,
        className
      )}
    >
      {children}
    </div>
  )
}

