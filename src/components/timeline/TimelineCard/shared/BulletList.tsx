/**
 * BulletList component for displaying list items with animations
 */
import { motion } from 'framer-motion'

export interface BulletListProps {
  items: string[]
  delay: number
}

export function BulletList({ items, delay }: BulletListProps) {
  return (
    <ul className="space-y-2.5">
      {items.map((item, i) => (
        <motion.li
          key={i}
          className="flex items-start text-[clamp(0.75rem,2vw,1rem)] leading-relaxed"
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: delay + i * 0.06 }}
        >
          <span className="mr-2 text-primary">•</span>
          <span className="flex-1">{item}</span>
        </motion.li>
      ))}
    </ul>
  )
}
