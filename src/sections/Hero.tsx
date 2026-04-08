import React from 'react'
import { motion } from 'framer-motion'
import { Section, Container } from '@/components/layout'
import { Button } from '@/components/ui'
import { SocialIcons } from '@/components/features'
import { portfolio } from '@/data/portfolio'
import { prefersReducedMotion } from '@/lib/animations'
import { SECTION_IDS, HERO_LABELS } from '@/lib/constants'
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
  // Split by spaces but keep words separate to prevent mid-word line breaks.
  // Each word is wrapped in whitespace-nowrap; spaces are rendered between words.
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
                          duration: 0.4,
                          delay: delay + (wordStart + cIdx) * 0.03,
                          ease: [0.2, 0.65, 0.3, 0.9],
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
                        duration: 0.4,
                        delay: delay + spaceIdx * 0.03,
                        ease: [0.2, 0.65, 0.3, 0.9],
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
        backgroundImage: `radial-gradient(circle, hsl(var(--accent) / 0.08) 1px, transparent 1px)`,
        backgroundSize: '28px 28px',
        maskImage: 'radial-gradient(ellipse 55% 70% at 10% 30%, black 0%, transparent 100%)',
        WebkitMaskImage: 'radial-gradient(ellipse 55% 70% at 10% 30%, black 0%, transparent 100%)',
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
  const lastNameDelay = 0.1 + firstPart.length * 0.03

  const fadeIn = (delay: number) =>
    ({
      initial: { opacity: 0, y: reduced ? 0 : 16 },
      animate: { opacity: 1, y: 0 },
      transition: {
        duration: reduced ? 0 : 0.6,
        delay: reduced ? 0 : delay,
        ease: [0.0, 0.0, 0.2, 1.0],
      },
    }) as const

  return (
    <Section id={SECTION_IDS.HERO} className="relative min-h-screen flex items-center">
      {/* Background */}
      <DotGrid />

      <Container>
        <div className="relative z-10 flex flex-col items-center gap-8 py-20 sm:flex-row sm:gap-12 sm:py-32">
          {/* Left — text content */}
          <div className="flex flex-1 flex-col gap-6 text-center sm:text-left">
            {/* Name — last name in nowrap so it never breaks */}
            <h1
              className="font-extrabold leading-none tracking-tight"
              style={{ fontSize: 'clamp(3.5rem, 8vw, 7rem)' }}
            >
              {firstPart && <AnimatedText text={firstPart} delay={0.1} />}
              <span className="whitespace-nowrap">
                <AnimatedText text={lastPart} delay={lastNameDelay} />
              </span>
            </h1>

            {/* Role */}
            <p
              className="font-semibold"
              style={{
                fontSize: 'clamp(1.125rem, 3vw, 1.75rem)',
                color: `hsl(var(--accent))`,
              }}
            >
              <AnimatedText text={portfolio.title} delay={0.5} />
            </p>

            {/* Tagline */}
            <motion.p
              {...fadeIn(1.0)}
              className="mx-auto max-w-xl text-base leading-relaxed text-muted-foreground sm:mx-0 sm:text-lg"
            >
              {portfolio.bio}
            </motion.p>

            {/* CTA row */}
            <motion.div
              {...fadeIn(1.2)}
              className="flex flex-wrap items-center justify-center gap-4 pt-2 sm:justify-start"
            >
              <SocialIcons className="flex gap-4 items-center" />
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

          {/* Right — profile photo */}
          <motion.div {...fadeIn(0.3)} className="flex-shrink-0">
            <div className="relative h-48 w-48 sm:h-64 sm:w-64">
              {/* Accent ring */}
              <div
                className="absolute inset-0 rounded-2xl opacity-30 blur-xl"
                style={{ background: `hsl(var(--accent))` }}
              />
              <img
                src={profileImg}
                alt={portfolio.imageAlt ?? portfolio.name}
                className="relative h-full w-full rounded-2xl object-cover"
              />
            </div>
          </motion.div>
        </div>
      </Container>
    </Section>
  )
}
