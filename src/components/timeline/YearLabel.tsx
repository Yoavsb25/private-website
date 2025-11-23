import { motion } from 'framer-motion'
import { Badge } from '@/components/ui/badge'
import { ANIMATION, STYLES } from '@/lib/constants'

interface YearLabelMobileProps {
  yearDisplay: string
  index: number
}

export function YearLabelMobile({ yearDisplay, index }: YearLabelMobileProps) {
  return (
    <div className="mb-[clamp(1rem,3vw,1.5rem)] w-full text-center sm:hidden">
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
  index: number
}

export function YearBadgeDesktop({ yearDisplay, index }: YearBadgeDesktopProps) {
  return (
    <motion.div
      className="mb-2 hidden w-full justify-center sm:flex"
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: index * ANIMATION.ITEM_STAGGER + 0.2,
        duration: 0.5,
        ...ANIMATION.SPRING_FAST,
      }}
    >
      <Badge className="whitespace-nowrap rounded-full bg-primary px-4 py-2 text-base font-semibold text-primary-foreground shadow-lg">
        {yearDisplay}
      </Badge>
    </motion.div>
  )
}

