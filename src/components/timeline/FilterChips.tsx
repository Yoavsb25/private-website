/**
 * FilterChips component
 * Provides filter buttons for timeline items (All, Experience, Education)
 */
import { motion } from 'framer-motion'
import type { FilterType } from '@/lib/types'
import { cn } from '@/lib/utils'

export interface FilterChipsProps {
  activeFilter: FilterType
  onChange: (value: FilterType) => void
}

interface FilterChip {
  label: string
  value: FilterType
}

const FILTER_CHIPS: FilterChip[] = [
  { label: 'All', value: 'all' },
  { label: 'Experience', value: 'experience' },
  { label: 'Education', value: 'education' },
] as const

export function FilterChips({ activeFilter, onChange }: FilterChipsProps) {
  return (
    <motion.div
      className="mb-10 flex flex-wrap justify-center gap-3"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ ease: [0.16, 1, 0.3, 1] }}
    >
      {FILTER_CHIPS.map(({ label, value }) => {
        const isActive = activeFilter === value
        return (
          <button
            key={value}
            onClick={() => onChange(value)}
            className={cn(
              'relative rounded-full px-5 py-2 text-sm font-medium border transition-all duration-300',
              isActive
                ? 'bg-accent text-accent-foreground border-accent shadow-glow-accent'
                : 'bg-card text-muted-foreground border-border/50 hover:border-border hover:text-foreground hover:shadow-premium-sm'
            )}
          >
            {label}
          </button>
        )
      })}
    </motion.div>
  )
}
