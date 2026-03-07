export const ANIMATION = {
  TIMELINE_LINE: { duration: 0.9, ease: 'easeOut' as const },
  ITEM_STAGGER: 0.15,
  ITEM_DURATION: 0.6,
  POINT_DELAY: 0.3,
  CONTENT_DELAY: 0.35,
  SPRING: { type: 'spring' as const, stiffness: 110, damping: 18 },
  SPRING_FAST: { type: 'spring' as const, stiffness: 220, damping: 16 },
  EXPAND: { duration: 0.4, ease: [0.4, 0, 0.2, 1] as const },
} as const

export const STYLES = {
  CARD_BASE: 'cursor-pointer relative overflow-hidden transition-all duration-500 border',
  CARD_DEFAULT: 'border-border/40 bg-background/80 backdrop-blur-sm',
} as const
