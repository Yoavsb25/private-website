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
      className="mb-[clamp(1.5rem,4vw,2rem)] flex flex-wrap items-center justify-center gap-[clamp(0.5rem,1.5vw,0.75rem)]"
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
              'relative rounded-full px-[clamp(0.75rem,2vw,1rem)] py-[clamp(0.375rem,1vw,0.5rem)] text-[clamp(0.75rem,2vw,0.875rem)] font-medium transition-all',
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

