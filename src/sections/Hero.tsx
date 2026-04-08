import React from 'react'
import { motion } from 'framer-motion'
import { Section, Container } from '@/components/layout'
import { Button } from '@/components/ui'
import { SocialIcons } from '@/components/features'
import { portfolio } from '@/data/portfolio'
import { prefersReducedMotion } from '@/lib/animations'
import { SECTION_IDS, HERO_LABELS, EASE_OUT_EXPO } from '@/lib/constants'
import profileImg from '@/assets/images/profile.jpg'
import { useMagnetic } from '@/hooks'

function AnimatedText({
  text,
  delay = 0,
  className,
}: {
  text: string
  delay?: number
  className?: string
}) {
  const reduced = prefersReducedMotion()
  const words = text.split(' ')
  let charIdx = 0

  return (
    <span aria-label={text} className={className}>
      {words.map((word, wIdx) => {
        const wordStart = charIdx
        charIdx += word.length
        const spaceIdx = charIdx++

        return (
          <React.Fragment key={wIdx}>
            <span style={{ display: 'inline-block', whiteSpace: 'nowrap' }}>
              {word.split('').map((char, cIdx) => (
                <motion.span
                  key={cIdx}
                  aria-hidden
                  initial={reduced ? false : { opacity: 0, y: 40, rotateX: -30 }}
                  animate={{ opacity: 1, y: 0, rotateX: 0 }}
                  transition={
                    reduced
                      ? { duration: 0 }
                      : {
                          duration: 0.5,
                          delay: delay + (wordStart + cIdx) * 0.025,
                          ease: [0.16, 1, 0.3, 1],
                        }
                  }
                  style={{ display: 'inline-block' }}
                >
                  {char}
                </motion.span>
              ))}
            </span>
            {wIdx < words.length - 1 && (
              <motion.span
                aria-hidden
                initial={reduced ? false : { opacity: 0, y: 40, rotateX: -30 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={
                  reduced
                    ? { duration: 0 }
                    : {
                        duration: 0.5,
                        delay: delay + spaceIdx * 0.025,
                        ease: [0.16, 1, 0.3, 1],
                      }
                }
                style={{ display: 'inline-block', whiteSpace: 'pre' }}
              >
                {' '}
              </motion.span>
            )}
          </React.Fragment>
        )
      })}
    </span>
  )
}

function DotGrid() {
  return (
    <div
      className="pointer-events-none absolute inset-0"
      style={{
        backgroundImage: `radial-gradient(circle, hsl(var(--accent) / 0.06) 1px, transparent 1px)`,
        backgroundSize: '32px 32px',
        maskImage: 'radial-gradient(ellipse 60% 75% at 8% 25%, black 0%, transparent 100%)',
        WebkitMaskImage: 'radial-gradient(ellipse 60% 75% at 8% 25%, black 0%, transparent 100%)',
      }}
    />
  )
}

function splitNameForDisplay(fullName: string): { firstPart: string; lastPart: string } {
  const lastSpace = fullName.lastIndexOf(' ')
  if (lastSpace === -1) return { firstPart: '', lastPart: fullName }
  return {
    firstPart: fullName.slice(0, lastSpace + 1),
    lastPart: fullName.slice(lastSpace + 1),
  }
}

export function Hero() {
  const reduced = prefersReducedMotion()
  const magnetic = useMagnetic()
  const { firstPart, lastPart } = splitNameForDisplay(portfolio.name)
  const lastNameDelay = 0.15 + firstPart.length * 0.025

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
    <Section id={SECTION_IDS.HERO} className="relative flex items-center" fullHeight>
      <DotGrid />

      <Container>
        <div className="relative z-10 flex flex-col items-center gap-10 py-16 sm:flex-row sm:items-center sm:gap-16 sm:py-24 lg:py-32">
          {/* Text content */}
          <div className="flex flex-1 flex-col gap-7 text-center sm:text-left">
            <h1
              className="font-display font-extrabold leading-[0.92] tracking-[-0.03em]"
              style={{ fontSize: 'clamp(3rem, 7.5vw, 6.5rem)' }}
            >
              {firstPart && <AnimatedText text={firstPart} delay={0.15} />}
              <span className="whitespace-nowrap">
                <AnimatedText text={lastPart} delay={lastNameDelay} />
              </span>
            </h1>

            <motion.p
              {...fadeIn(0.6)}
              className="font-display font-semibold text-accent"
              style={{ fontSize: 'clamp(1.125rem, 2.5vw, 1.625rem)' }}
            >
              {portfolio.title}
            </motion.p>

            <motion.p
              {...fadeIn(0.9)}
              className="mx-auto max-w-lg text-[clamp(0.9375rem,2vw,1.0625rem)] leading-[1.7] text-muted-foreground sm:mx-0"
            >
              {portfolio.bio}
            </motion.p>

            <motion.div
              {...fadeIn(1.1)}
              className="flex flex-wrap items-center justify-center gap-4 pt-1 sm:justify-start"
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
                    className="h-10 rounded-lg px-6 sm:h-12"
                    style={{
                      background: `hsl(var(--accent))`,
                      color: `hsl(var(--accent-foreground))`,
                    }}
                  >
                    {HERO_LABELS.BUTTONS.DOWNLOAD_CV}
                  </Button>
                </motion.a>
              )}
            </motion.div>
          </div>

          {/* Profile photo */}
          <motion.div {...fadeIn(0.4)} className="flex-shrink-0 order-first sm:order-last">
            <div className="relative h-52 w-52 sm:h-72 sm:w-72">
              <div
                className="absolute -inset-3 rounded-2xl opacity-20 blur-2xl"
                style={{ background: `hsl(var(--accent))` }}
              />
              <img
                src={profileImg}
                alt={portfolio.imageAlt ?? portfolio.name}
                className="relative h-full w-full rounded-2xl object-cover shadow-premium-md"
              />
            </div>
          </motion.div>
        </div>
      </Container>
    </Section>
  )
}
