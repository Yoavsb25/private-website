/**
 * YearLabel components
 * Display year badges for timeline items (mobile and desktop variants)
 */
import { motion } from 'framer-motion'
import { Badge } from '@/components/ui/badge'

export interface YearLabelProps {
  yearDisplay: string
}

/**
 * Year label for mobile view
 */
export function YearLabelMobile({ yearDisplay }: YearLabelProps) {
  return (
    <div className="mb-6 text-center sm:hidden">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <Badge className="px-4 py-2">{yearDisplay}</Badge>
      </motion.div>
    </div>
  )
}

/**
 * Year badge for desktop view
 */
export function YearBadgeDesktop({ yearDisplay }: YearLabelProps) {
  return (
    <motion.div className="mb-2 hidden justify-center sm:flex">
      <Badge className="px-4 py-2">{yearDisplay}</Badge>
    </motion.div>
  )
}
