import { useRef, useEffect, useState } from 'react'
import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { Section, Container } from '@/components/layout'
import { Button } from '@/components/ui'
import { SocialIcons } from '@/components/features'
import { portfolio } from '@/data/portfolio'
import { prefersReducedMotion } from '@/lib/animations'
import { SECTION_IDS, HERO_LABELS, EASE_OUT_EXPO } from '@/lib/constants'
import profileImg from '@/assets/images/profile.jpg'
import { useMagnetic } from '@/hooks'

function ClipRevealText({
  children,
  delay = 0,
  className,
}: {
  children: string
  delay?: number
  className?: string
}) {
  const reduced = prefersReducedMotion()

  return (
    <span className="relative block overflow-hidden">
      <motion.span
        className={className}
        style={{ display: 'block' }}
        initial={reduced ? false : { clipPath: 'inset(0 100% 0 0)' }}
        animate={{ clipPath: 'inset(0 0% 0 0)' }}
        transition={reduced ? { duration: 0 } : { duration: 1, delay, ease: [0.16, 1, 0.3, 1] }}
      >
        {children}
      </motion.span>
    </span>
  )
}

function ReactiveDotGrid() {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const smoothX = useSpring(mouseX, { stiffness: 60, damping: 30 })
  const smoothY = useSpring(mouseY, { stiffness: 60, damping: 30 })
  const [cssVars, setCssVars] = useState({ '--mx': '50%', '--my': '50%' })

  useEffect(() => {
    if (prefersReducedMotion()) return
    const unsub1 = smoothX.on('change', v => {
      setCssVars(prev => ({ ...prev, '--mx': `${v}px` }))
    })
    const unsub2 = smoothY.on('change', v => {
      setCssVars(prev => ({ ...prev, '--my': `${v}px` }))
    })
    return () => {
      unsub1()
      unsub2()
    }
  }, [smoothX, smoothY])

  const handleMouseMove = (e: React.MouseEvent) => {
    mouseX.set(e.clientX)
    mouseY.set(e.clientY)
  }

  return (
    <div
      className="pointer-events-none absolute inset-0"
      onMouseMove={handleMouseMove}
      style={
        {
          pointerEvents: 'all',
          ...cssVars,
          backgroundImage: `radial-gradient(circle, hsl(var(--accent) / 0.06) 1px, transparent 1px)`,
          backgroundSize: '28px 28px',
          maskImage: `radial-gradient(ellipse 500px 500px at var(--mx, 50%) var(--my, 50%), black 0%, transparent 70%), radial-gradient(ellipse 60% 75% at 8% 25%, black 0%, transparent 100%)`,
          WebkitMaskImage: `radial-gradient(ellipse 500px 500px at var(--mx, 50%) var(--my, 50%), black 0%, transparent 70%), radial-gradient(ellipse 60% 75% at 8% 25%, black 0%, transparent 100%)`,
        } as React.CSSProperties
      }
    />
  )
}

function ScrollHint() {
  const { scrollY } = useScroll()
  const opacity = useTransform(scrollY, [0, 200], [1, 0])

  return (
    <motion.div
      className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      style={{ opacity }}
    >
      <span className="text-[10px] font-mono font-medium uppercase tracking-[0.2em] text-muted-foreground">
        Scroll
      </span>
      <motion.div
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
      >
        <ChevronDown className="h-4 w-4 text-muted-foreground" />
      </motion.div>
    </motion.div>
  )
}

function splitNameForDisplay(fullName: string): { firstPart: string; lastPart: string } {
  const lastSpace = fullName.lastIndexOf(' ')
  if (lastSpace === -1) return { firstPart: '', lastPart: fullName }
  return {
    firstPart: fullName.slice(0, lastSpace),
    lastPart: fullName.slice(lastSpace + 1),
  }
}

export function Hero() {
  const reduced = prefersReducedMotion()
  const magnetic = useMagnetic()
  const { firstPart, lastPart } = splitNameForDisplay(portfolio.name)

  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef as React.RefObject<HTMLElement>,
    offset: ['start start', 'end start'],
  })
  const photoY = useTransform(scrollYProgress, [0, 1], [0, reduced ? 0 : 80])
  const textY = useTransform(scrollYProgress, [0, 1], [0, reduced ? 0 : 40])

  const fadeIn = (delay: number) =>
    ({
      initial: { opacity: 0, y: reduced ? 0 : 20 },
      animate: { opacity: 1, y: 0 },
      transition: {
        duration: reduced ? 0 : 0.7,
        delay: reduced ? 0 : delay,
        ease: EASE_OUT_EXPO,
      },
    }) as const

  return (
    <Section
      id={SECTION_IDS.HERO}
      className="relative flex items-center overflow-hidden"
      fullHeight
    >
      <div ref={sectionRef as React.RefObject<HTMLDivElement>} className="absolute inset-0" />
      <ReactiveDotGrid />

      {/* Accent gradient behind photo */}
      <div
        className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full opacity-[0.07] blur-[100px]"
        style={{ background: 'hsl(var(--accent))' }}
      />

      <Container>
        <div className="relative z-10 flex flex-col items-center gap-10 py-16 sm:flex-row sm:items-center sm:gap-20 sm:py-24 lg:py-32">
          {/* Text content with parallax */}
          <motion.div
            className="flex flex-1 flex-col gap-6 text-center sm:text-left"
            style={{ y: textY }}
          >
            {/* Status pill */}
            <motion.div
              {...fadeIn(0.2)}
              className="flex items-center gap-2 self-center sm:self-start"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-breathe rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              <span className="font-mono text-xs tracking-[0.08em] text-muted-foreground">
                Available for work
              </span>
            </motion.div>

            <h1
              className="font-display font-extrabold leading-[0.90] tracking-[-0.04em]"
              style={{ fontSize: 'clamp(3.25rem, 8vw, 7rem)' }}
            >
              <ClipRevealText delay={0.3}>{firstPart}</ClipRevealText>
              <ClipRevealText delay={0.5} className="text-accent">
                {lastPart}
              </ClipRevealText>
            </h1>

            <motion.p
              {...fadeIn(0.8)}
              className="font-mono text-sm tracking-[0.04em] text-accent/80 sm:text-base"
            >
              {portfolio.title}
            </motion.p>

            <motion.p
              {...fadeIn(1.0)}
              className="mx-auto max-w-lg text-[clamp(0.9375rem,2vw,1.0625rem)] leading-[1.75] text-muted-foreground sm:mx-0"
            >
              {portfolio.bio}
            </motion.p>

            <motion.div
              {...fadeIn(1.2)}
              className="flex flex-wrap items-center justify-center gap-4 pt-2 sm:justify-start"
            >
              <SocialIcons className="flex items-center gap-3" />
              {portfolio.cvUrl && (
                <motion.a
                  ref={magnetic.ref as React.RefObject<HTMLAnchorElement>}
                  href={portfolio.cvUrl}
                  download
                  style={{ x: magnetic.x, y: magnetic.y, display: 'inline-block' }}
                >
                  <Button
                    className="h-11 rounded-lg px-7 font-medium sm:h-12"
                    style={{
                      background: 'hsl(var(--accent))',
                      color: 'hsl(var(--accent-foreground))',
                    }}
                  >
                    {HERO_LABELS.BUTTONS.DOWNLOAD_CV}
                  </Button>
                </motion.a>
              )}
            </motion.div>
          </motion.div>

          {/* Photo with parallax and accent glow */}
          <motion.div
            {...fadeIn(0.4)}
            className="order-first flex-shrink-0 sm:order-last"
            style={{ y: photoY }}
          >
            <div className="group relative" data-cursor="view">
              <div
                className="absolute -inset-4 rounded-3xl opacity-20 blur-3xl transition-opacity duration-700 group-hover:opacity-30"
                style={{ background: 'hsl(var(--accent))' }}
              />
              <div className="relative overflow-hidden rounded-2xl">
                <img
                  src={profileImg}
                  alt={portfolio.imageAlt ?? portfolio.name}
                  className="relative h-56 w-56 object-cover shadow-premium-lg sm:h-80 sm:w-72 lg:h-96 lg:w-80"
                />
                <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-foreground/10" />
              </div>
            </div>
          </motion.div>
        </div>
      </Container>

      <ScrollHint />
    </Section>
  )
}
