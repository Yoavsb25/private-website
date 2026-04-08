import { motion } from 'framer-motion'
import { Section, SectionHeader, Container } from '@/components/layout'
import { Text } from '@/components/typography'
import { Button } from '@/components/ui'
import { contact } from '@/data/contact'
import { hasItems, getIcon, createButtonAnimation, createFadeInAnimation } from '@/lib/helpers'
import {
  SECTION_TITLES,
  SECTION_IDS,
  ANIMATION_CONFIG,
  SPACING,
  CONTACT_LABELS,
  SECTION_SPACING,
} from '@/lib/constants'

function getDisplayValue(method: { type: string; value: string }): string {
  if (method.type === 'email') return method.value
  return method.value.replace(/^https?:\/\/(www\.)?/, '').replace(/\/$/, '')
}

export function Contact() {
  if (!hasItems(contact.methods)) return null

  return (
    <Section id={SECTION_IDS.CONTACT} background="mutedLight">
      <Container size="small" className={`text-center ${SPACING.SECTION.LARGE}`}>
        {/* Animated divider line — draws from center outward on scroll */}
        <motion.div
          className="mx-auto mb-8 h-px max-w-xs bg-border"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={ANIMATION_CONFIG.VIEWPORT.HEADER}
          transition={{ duration: ANIMATION_CONFIG.DURATION.DRAW, ease: [0, 0, 0.2, 1] }}
          style={{ transformOrigin: 'center' }}
        />

        {/* Header */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={ANIMATION_CONFIG.VIEWPORT.HEADER}
            transition={{
              duration: ANIMATION_CONFIG.DURATION.SLOW,
              delay: ANIMATION_CONFIG.DELAY.AFTER_LINE,
              ease: [0, 0, 0.2, 1],
            }}
          >
            <SectionHeader className={SECTION_SPACING.CONTACT_HEADER}>
              {SECTION_TITLES.CONTACT}
            </SectionHeader>
          </motion.div>

          {contact.availability && (
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={ANIMATION_CONFIG.VIEWPORT.HEADER}
              transition={{
                duration: ANIMATION_CONFIG.DURATION.SLOW,
                delay: ANIMATION_CONFIG.DELAY.AFTER_HEADER,
                ease: [0, 0, 0.2, 1],
              }}
            >
              <Text variant="bodyLarge" color="muted">
                {contact.availability}
              </Text>
            </motion.div>
          )}
        </div>

        {/* Contact methods — flat typographic layout, no card containers */}
        <motion.div
          className="mt-12 grid grid-cols-1 divide-y sm:grid-cols-2 sm:divide-x sm:divide-y-0 divide-border text-left"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={ANIMATION_CONFIG.VIEWPORT.CONTAINER}
          transition={{
            duration: ANIMATION_CONFIG.DURATION.SLOW,
            delay: ANIMATION_CONFIG.DELAY.AFTER_TEXT,
            ease: [0, 0, 0.2, 1],
          }}
        >
          {contact.methods.map(method => {
            const Icon = getIcon(method.icon)
            const href = method.type === 'email' ? `mailto:${method.value}` : method.value
            const displayValue = getDisplayValue(method)

            return (
              <div key={method.value} className="py-8 first:sm:pl-0 last:sm:pr-0 sm:px-10">
                {/* Label row + availability */}
                <div className="mb-4 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Icon className="h-3.5 w-3.5 text-muted-foreground" />
                    <span className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
                      {method.label}
                    </span>
                  </div>
                  {method.available && (
                    <span className="flex items-center gap-1.5">
                      <span className="h-1.5 w-1.5 rounded-full bg-green-500" />
                      <span className="text-xs text-muted-foreground">
                        {CONTACT_LABELS.AVAILABILITY.AVAILABLE}
                      </span>
                    </span>
                  )}
                </div>

                {/* Contact value — primary typographic element, directly clickable */}
                <a
                  href={href}
                  className="mb-5 block break-all font-semibold text-foreground transition-colors duration-200 hover:text-accent"
                  style={{ fontSize: 'clamp(1rem, 2.5vw, 1.25rem)', lineHeight: '1.3' }}
                  target={method.type === 'email' ? undefined : '_blank'}
                  rel={method.type === 'email' ? undefined : 'noopener noreferrer'}
                  aria-label={CONTACT_LABELS.ARIA_LABEL(method.label)}
                >
                  {displayValue}
                </a>

                {/* CTA button */}
                <motion.a
                  href={href}
                  target={method.type === 'email' ? undefined : '_blank'}
                  rel={method.type === 'email' ? undefined : 'noopener noreferrer'}
                  {...createButtonAnimation()}
                >
                  <Button variant="outline" size="sm">
                    {method.type === 'email'
                      ? CONTACT_LABELS.BUTTONS.SEND_EMAIL
                      : CONTACT_LABELS.BUTTONS.VISIT_PROFILE}
                  </Button>
                </motion.a>
              </div>
            )
          })}
        </motion.div>

        {/* Response Time */}
        {contact.responseTime && (
          <motion.div className="mt-8" {...createFadeInAnimation(ANIMATION_CONFIG.DELAY.LONG)}>
            <Text as="span" color="muted">
              {contact.responseTime}
            </Text>
          </motion.div>
        )}
      </Container>
    </Section>
  )
}
