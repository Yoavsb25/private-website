import { type ReactElement, type MouseEvent } from 'react'
import { motion, type Variants } from 'framer-motion'
import { Github, Linkedin } from 'lucide-react'
import { portfolio } from '@/data/portfolio'
import { ANIMATION_CONFIG } from '@/lib/constants'

const socialIconVariants: Variants = {
  hidden: { opacity: 0, scale: 0.6 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: ANIMATION_CONFIG.DURATION.NORMAL, ease: [0, 0, 0.2, 1] },
  },
}

export function Footer(): ReactElement {
  const year = new Date().getFullYear()

  const handleLetsTalk = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer>
      {/* Animated border — two halves draw from outside edges inward to meet at center */}
      <div className="relative h-px overflow-hidden">
        <motion.div
          className="absolute left-0 top-0 h-px w-1/2 bg-border"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={ANIMATION_CONFIG.VIEWPORT.FOOTER}
          transition={{ duration: ANIMATION_CONFIG.DURATION.DRAW_BORDER, ease: [0, 0, 0.2, 1] }}
          style={{ transformOrigin: 'left' }}
        />
        <motion.div
          className="absolute right-0 top-0 h-px w-1/2 bg-border"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={ANIMATION_CONFIG.VIEWPORT.FOOTER}
          transition={{ duration: ANIMATION_CONFIG.DURATION.DRAW_BORDER, ease: [0, 0, 0.2, 1] }}
          style={{ transformOrigin: 'right' }}
        />
      </div>

      {/* Footer content slides up on scroll */}
      <motion.div
        className="py-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={ANIMATION_CONFIG.VIEWPORT.FOOTER}
        transition={{
          duration: ANIMATION_CONFIG.DURATION.SLOW,
          delay: ANIMATION_CONFIG.DELAY.SHORT,
          ease: [0, 0, 0.2, 1],
        }}
      >
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-4 px-4 sm:px-6 lg:px-8">
          {/* CTA row */}
          <a
            href="#contact"
            onClick={handleLetsTalk}
            className="group inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <span>Open to new opportunities</span>
            <span className="opacity-50">·</span>
            <span className="relative">
              Let&apos;s talk
              <span className="absolute bottom-0 left-0 h-px w-full origin-left scale-x-0 bg-current transition-transform duration-200 group-hover:scale-x-100" />
            </span>
            <span
              aria-hidden="true"
              className="inline-block translate-x-0 transition-transform duration-200 group-hover:translate-x-1"
            >
              →
            </span>
          </a>

          {/* Bottom row: copyright + social icons */}
          <div className="flex w-full flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-sm text-muted-foreground">
              Designed &amp; built by{' '}
              <span className="font-semibold text-foreground">{portfolio.name}</span> &copy; {year}
            </p>

            {/* Staggered social icon entrance */}
            <motion.div
              className="flex items-center gap-4"
              initial="hidden"
              whileInView="visible"
              viewport={ANIMATION_CONFIG.VIEWPORT.FOOTER}
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    staggerChildren: ANIMATION_CONFIG.DELAY.STAGGER_ICON,
                    delayChildren: ANIMATION_CONFIG.DELAY.ICON_DELAY,
                  },
                },
              }}
            >
              {portfolio.socialLinks?.linkedin && (
                <motion.a
                  href={portfolio.socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="text-muted-foreground transition-colors hover:text-foreground"
                  variants={socialIconVariants}
                  whileHover={ANIMATION_CONFIG.HOVER.ICON}
                >
                  <Linkedin className="h-4 w-4" />
                </motion.a>
              )}
              {portfolio.socialLinks?.github && (
                <motion.a
                  href={portfolio.socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="text-muted-foreground transition-colors hover:text-foreground"
                  variants={socialIconVariants}
                  whileHover={ANIMATION_CONFIG.HOVER.ICON}
                >
                  <Github className="h-4 w-4" />
                </motion.a>
              )}
            </motion.div>
          </div>
        </div>
      </motion.div>
    </footer>
  )
}
