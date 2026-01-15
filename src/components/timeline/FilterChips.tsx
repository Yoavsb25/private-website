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
      className="mb-8 flex flex-wrap justify-center gap-3"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
    >
      {FILTER_CHIPS.map(({ label, value }) => {
        const isActive = activeFilter === value
        return (
          <button
            key={value}
            onClick={() => onChange(value)}
            className={cn(
              'relative rounded-full px-4 py-2 text-sm font-medium border transition',
              isActive
                ? 'bg-primary text-primary-foreground border-primary shadow-lg'
                : 'bg-background/80 text-foreground/70 hover:bg-muted'
            )}
          >
            {label}
            {isActive && (
              <span className="absolute inset-0 -z-10 rounded-full bg-primary/30 blur-md" />
            )}
          </button>
        )
      })}
    </motion.div>
  )
}
