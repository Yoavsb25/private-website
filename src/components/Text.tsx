import { ReactNode } from 'react'
import { cn } from '@/lib/utils'
import { TYPOGRAPHY } from '@/lib/constants'

interface TypographyProps {
  children: ReactNode
  variant?: 'body' | 'bodyLarge' | 'small' | 'xs'
  color?: 'default' | 'muted' | 'mutedOpacity'
  className?: string
  as?: 'p' | 'span' | 'div'
}

export function Typography({
  children,
  variant = 'body',
  color = 'default',
  className,
  as: Component = 'p',
}: TypographyProps) {
  const variantClass = {
    body: TYPOGRAPHY.BODY.BASE,
    bodyLarge: TYPOGRAPHY.BODY.LARGE,
    small: TYPOGRAPHY.BODY.SMALL,
    xs: TYPOGRAPHY.BODY.SMALL,
  }[variant]

  const colorClass = {
    default: TYPOGRAPHY.COLOR.FOREGROUND,
    muted: TYPOGRAPHY.COLOR.MUTED,
    mutedOpacity: TYPOGRAPHY.COLOR.MUTED_OPACITY,
  }[color]

  return (
    <Component className={cn(variantClass, colorClass, className)}>
      {children}
    </Component>
  )
}

// Export as Text for backward compatibility (but prefer Typography)
export const Text = Typography

