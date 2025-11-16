//src/helpers/helpers.tsx
import { Badge } from '@/components/ui/badge'
import { SPACING, TYPOGRAPHY } from '@/lib/constants'
import { cn } from '@/lib/utils'

interface LogoProps {
  src?: string
  alt: string
  className?: string
}

/**
 * Logo component for displaying institution/company logos
 */
export function Logo({ src, alt, className }: LogoProps) {
  if (!src) return null
  return (
    <div className={cn('flex h-14 w-32 items-center justify-center overflow-hidden', className)}>
      <img
        src={src}
        alt={alt}
        className="max-h-[75%] max-w-[75%] object-contain"
        loading="lazy"
        decoding="async"
      />
    </div>
  )
}

interface PillListProps {
  items?: string[]
  className?: string
}

/**
 * PillList component for displaying items as badge pills
 */
export function PillList({ items, className }: PillListProps) {
  if (!items?.length) return null
  return (
    <div className={cn('mt-3 flex flex-wrap', SPACING.CARD.SMALL, className)}>
      {items.map((it) => (
        <Badge key={it} variant="outline">
          {it}
        </Badge>
      ))}
    </div>
  )
}

interface BulletListProps {
  items?: string[]
  className?: string
}

/**
 * BulletList component for displaying items as a bulleted list
 */
export function BulletList({ items, className }: BulletListProps) {
  if (!items?.length) return null
  return (
    <ul className={cn('list-disc pl-5', SPACING.TEXT.LIST, TYPOGRAPHY.BODY.BASE, className)}>
      {items.map((t, i) => (
        <li key={i}>{t}</li>
      ))}
    </ul>
  )
}