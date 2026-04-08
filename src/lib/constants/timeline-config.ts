export const ANIMATION = {
  TIMELINE_LINE: { duration: 0.9, ease: 'easeOut' as const },
  ITEM_STAGGER: 0.12,
  ITEM_DURATION: 0.6,
  POINT_DELAY: 0.3,
  CONTENT_DELAY: 0.35,
  SPRING: { type: 'spring' as const, stiffness: 110, damping: 18 },
  SPRING_FAST: { type: 'spring' as const, stiffness: 220, damping: 16 },
  EXPAND: { duration: 0.45, ease: [0.16, 1, 0.3, 1] as const },
} as const

export const STYLES = {
  TIMELINE_LINE:
    'absolute left-1/2 top-0 bottom-0 w-[2px] bg-border/30 transform -translate-x-1/2 hidden md:block rounded-full overflow-hidden',
  TIMELINE_LINE_GLOW:
    'absolute inset-x-[-2px] top-0 h-24 bg-gradient-to-b from-accent/30 via-accent/0 to-transparent blur-md pointer-events-none',
  YEAR_BADGE_MOBILE:
    'inline-block px-[clamp(1rem,3vw,1.25rem)] py-[clamp(0.5rem,1.5vw,0.625rem)] rounded-full bg-accent text-accent-foreground text-[clamp(0.875rem,2.5vw,1rem)] font-bold shadow-premium-md',
  CARD_BASE:
    'cursor-pointer relative overflow-hidden transition-all duration-400 border rounded-lg',
  CARD_ACTIVE:
    'shadow-premium-md ring-2 ring-accent/25 scale-[1.02] border-accent/40 bg-gradient-to-br from-card via-card to-accent/3',
  CARD_HOVER:
    'hover:shadow-premium hover:border-accent/30 hover:bg-gradient-to-br hover:from-card hover:via-card hover:to-accent/3',
  CARD_DEFAULT: 'border-border/40 bg-card shadow-premium-sm',
  LOGO_WRAPPER: 'transition-colors',
  BULLET: 'mr-3 mt-1.5 text-accent font-bold',
  DIVIDER: 'h-px bg-gradient-to-r from-transparent via-border/60 to-transparent',
} as const
