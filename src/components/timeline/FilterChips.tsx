import { motion } from 'framer-motion'
import type { FilterType } from '@/lib/types'

interface FilterChipsProps {
  activeFilter: FilterType
  onChange: (value: FilterType) => void
}

export function FilterChips({ activeFilter, onChange }: FilterChipsProps) {
  const chips: { label: string; value: FilterType }[] = [
    { label: 'All', value: 'all' },
    { label: 'Experience', value: 'experience' },
    { label: 'Education', value: 'education' },
  ]

  return (
    <motion.div
      className="mb-8 flex flex-wrap items-center justify-center gap-3"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      {chips.map(chip => {
        const isActive = activeFilter === chip.value
        return (
          <button
            key={chip.value}
            onClick={() => onChange(chip.value)}
            className={[
              'relative rounded-full px-4 py-1.5 text-sm font-medium transition-all',
              'border border-border/60 backdrop-blur-sm',
              isActive
                ? 'bg-primary text-primary-foreground shadow-lg border-primary'
                : 'bg-background/80 text-foreground/80 hover:bg-muted',
            ].join(' ')}
          >
            {chip.label}
            {isActive && (
              <span className="absolute inset-0 -z-10 rounded-full bg-primary/30 blur-md" />
            )}
          </button>
        )
      })}
    </motion.div>
  )
}

