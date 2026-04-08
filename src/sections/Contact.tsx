import { motion } from 'framer-motion'
import { Mail, Linkedin, ArrowUpRight } from 'lucide-react'
import { Section, Container } from '@/components/layout'
import { contact } from '@/data/contact'
import { hasItems } from '@/lib/helpers'
import { SECTION_IDS, EASE_OUT_EXPO, ANIMATION_CONFIG } from '@/lib/constants'
import { useMagnetic } from '@/hooks'
import { prefersReducedMotion } from '@/lib/animations'

function MagneticLink({
  href,
  children,
  target,
  ariaLabel,
}: {
  href: string
  children: React.ReactNode
  target?: string
  ariaLabel: string
}) {
  const magnetic = useMagnetic(0.25)

  return (
    <motion.a
      ref={magnetic.ref as React.RefObject<HTMLAnchorElement>}
      href={href}
      target={target}
      rel={target === '_blank' ? 'noopener noreferrer' : undefined}
      aria-label={ariaLabel}
      style={{ x: magnetic.x, y: magnetic.y, display: 'inline-flex' }}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="group flex items-center gap-4 rounded-xl border border-border/50 bg-card px-6 py-5 shadow-premium-sm transition-all duration-400 hover:border-accent/30 hover:shadow-glow-accent sm:px-8 sm:py-6"
    >
      {children}
      <ArrowUpRight className="ml-auto h-5 w-5 text-muted-foreground transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent" />
    </motion.a>
  )
}

export function Contact() {
  if (!hasItems(contact.methods)) return null
  const reduced = prefersReducedMotion()

  const emailMethod = contact.methods.find(m => m.type === 'email')
  const linkedinMethod = contact.methods.find(m => m.type === 'social')

  return (
    <Section id={SECTION_IDS.CONTACT} background="mutedLight" className="relative overflow-hidden">
      {/* Accent blob */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-[0.05] blur-[120px]"
        style={{ background: 'hsl(var(--accent))' }}
      />

      <Container size="small" className="relative z-10 text-center">
        {/* Decorative line */}
        <motion.div
          className="mx-auto mb-12 h-px max-w-[120px] bg-border"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={ANIMATION_CONFIG.VIEWPORT.HEADER}
          transition={{ duration: 0.8, ease: EASE_OUT_EXPO }}
          style={{ transformOrigin: 'center' }}
        />

        {/* Large typographic CTA */}
        <motion.div
          initial={reduced ? false : { opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={ANIMATION_CONFIG.VIEWPORT.HEADER}
          transition={{ duration: 0.7, delay: 0.2, ease: EASE_OUT_EXPO }}
        >
          <h2
            className="font-display font-extrabold tracking-[-0.03em]"
            style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}
          >
            Let&rsquo;s build something <span className="text-accent">together</span>
          </h2>
        </motion.div>

        {contact.availability && (
          <motion.p
            className="mx-auto mt-5 max-w-md text-base leading-relaxed text-muted-foreground"
            initial={reduced ? false : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={ANIMATION_CONFIG.VIEWPORT.HEADER}
            transition={{ duration: 0.6, delay: 0.4, ease: EASE_OUT_EXPO }}
          >
            {contact.availability}
          </motion.p>
        )}

        {/* Contact links */}
        <motion.div
          className="mx-auto mt-12 flex max-w-md flex-col gap-4"
          initial={reduced ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={ANIMATION_CONFIG.VIEWPORT.CONTAINER}
          transition={{ duration: 0.6, delay: 0.5, ease: EASE_OUT_EXPO }}
        >
          {emailMethod && (
            <MagneticLink href={`mailto:${emailMethod.value}`} ariaLabel="Send email">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10">
                <Mail className="h-5 w-5 text-accent" />
              </div>
              <div className="text-left">
                <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-muted-foreground">
                  Email
                </p>
                <p className="font-display text-base font-semibold">{emailMethod.value}</p>
              </div>
            </MagneticLink>
          )}

          {linkedinMethod && (
            <MagneticLink
              href={linkedinMethod.value}
              target="_blank"
              ariaLabel="Visit LinkedIn profile"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#0A66C2]/10">
                <Linkedin className="h-5 w-5 text-[#0A66C2]" />
              </div>
              <div className="text-left">
                <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-muted-foreground">
                  LinkedIn
                </p>
                <p className="font-display text-base font-semibold">
                  {linkedinMethod.value.replace(/^https?:\/\/(www\.)?/, '').replace(/\/$/, '')}
                </p>
              </div>
            </MagneticLink>
          )}
        </motion.div>

        {contact.responseTime && (
          <motion.p
            className="mt-10 font-mono text-xs tracking-wide text-muted-foreground/70"
            initial={reduced ? false : { opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={ANIMATION_CONFIG.VIEWPORT.FOOTER}
            transition={{ duration: 0.6, delay: 0.7, ease: EASE_OUT_EXPO }}
          >
            {contact.responseTime}
          </motion.p>
        )}
      </Container>
    </Section>
  )
}
