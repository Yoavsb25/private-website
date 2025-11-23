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
  TIMELINE_LINE:
    'absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary/25 via-primary/60 to-primary/25 transform -translate-x-1/2 hidden md:block rounded-full overflow-hidden',
  TIMELINE_LINE_GLOW:
    'absolute inset-x-[-2px] top-0 h-24 bg-gradient-to-b from-primary/40 via-primary/0 to-transparent blur-md pointer-events-none',
  YEAR_BADGE_MOBILE:
    'inline-block px-[clamp(1rem,3vw,1.25rem)] py-[clamp(0.5rem,1.5vw,0.625rem)] rounded-full bg-primary text-primary-foreground text-[clamp(0.875rem,2.5vw,1rem)] font-bold shadow-lg',
  CARD_BASE: 'cursor-pointer relative overflow-hidden transition-all duration-500 border',
  CARD_ACTIVE:
    'shadow-2xl ring-4 ring-primary/35 scale-[1.03] border-primary/60 bg-gradient-to-br from-background via-muted/30 to-primary/5',
  CARD_HOVER:
    'hover:shadow-xl hover:border-primary/40 hover:bg-gradient-to-br hover:from-background hover:via-muted/20 hover:to-primary/5',
  CARD_DEFAULT: 'border-border/40 bg-background/80 backdrop-blur-sm',
  LOGO_WRAPPER: 'transition-colors',
  BULLET: 'mr-3 mt-1.5 text-primary font-bold',
  DIVIDER: 'h-px bg-gradient-to-r from-transparent via-border/80 to-transparent',
} as const

