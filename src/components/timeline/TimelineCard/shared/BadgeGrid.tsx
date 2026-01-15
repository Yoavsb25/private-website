/**
 * BadgeGrid component for displaying badges in a grid layout
 */
import { motion } from 'framer-motion'
import { Badge } from '@/components/ui/badge'

export interface BadgeGridProps {
  items: string[]
  delay: number
  variant?: 'secondary' | 'outline'
}

export function BadgeGrid({ items, delay, variant = 'secondary' }: BadgeGridProps) {
  return (
    <div className="flex flex-wrap gap-[clamp(0.5rem,1.5vw,0.625rem)]">
      {items.map((item, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0.85, y: 4 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: delay + i * 0.05 }}
        >
          <Badge
            variant={variant}
            className="rounded-full px-[clamp(0.625rem,2vw,0.75rem)] py-[clamp(0.25rem,1vw,0.375rem)] text-[clamp(0.75rem,2vw,0.875rem)] font-medium"
          >
            {item}
          </Badge>
        </motion.div>
      ))}
    </div>
  )
}
