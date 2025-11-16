import { motion } from 'framer-motion'
import { Badge } from '@/components/ui/badge'
import { ANIMATION, STYLES } from '../constants'

interface YearLabelMobileProps {
  yearDisplay: string
  index: number
}

export function YearLabelMobile({ yearDisplay, index }: YearLabelMobileProps) {
  return (
    <div className="mb-6 w-full text-center md:hidden">
      <motion.div
        className={STYLES.YEAR_BADGE_MOBILE}
        initial={{ opacity: 0, scale: 0.85, y: 8 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{
          delay: index * ANIMATION.ITEM_STAGGER,
          ...ANIMATION.SPRING_FAST,
        }}
      >
        {yearDisplay}
      </motion.div>
    </div>
  )
}

interface YearBadgeDesktopProps {
  yearDisplay: string
  isEven: boolean
  index: number
}

export function YearBadgeDesktop({ yearDisplay, isEven, index }: YearBadgeDesktopProps) {
  return (
    <motion.div
      className={`hidden w-[calc(50%-3rem)] items-center md:flex ${
        isEven ? 'justify-end pr-12' : 'justify-start pl-12'
      }`}
      initial={{ opacity: 0, x: isEven ? 24 : -24 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{
        delay: index * ANIMATION.ITEM_STAGGER + 0.2,
        duration: 0.5,
      }}
    >
      <Badge className="whitespace-nowrap rounded-full bg-primary px-4 py-2 text-base font-semibold text-primary-foreground shadow-lg">
        {yearDisplay}
      </Badge>
    </motion.div>
  )
}

