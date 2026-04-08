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
  EASE_OUT_EXPO,
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
        <motion.div
          className="mx-auto mb-10 h-px max-w-xs bg-border"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={ANIMATION_CONFIG.VIEWPORT.HEADER}
          transition={{
            duration: ANIMATION_CONFIG.DURATION.DRAW,
            ease: EASE_OUT_EXPO,
          }}
          style={{ transformOrigin: 'center' }}
        />

        <div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={ANIMATION_CONFIG.VIEWPORT.HEADER}
            transition={{
              duration: ANIMATION_CONFIG.DURATION.SLOW,
              delay: ANIMATION_CONFIG.DELAY.AFTER_LINE,
              ease: EASE_OUT_EXPO,
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
                ease: EASE_OUT_EXPO,
              }}
            >
              <Text variant="bodyLarge" color="muted">
                {contact.availability}
              </Text>
            </motion.div>
          )}
        </div>

        <motion.div
          className="mt-14 grid grid-cols-1 divide-y sm:grid-cols-2 sm:divide-x sm:divide-y-0 divide-border text-left"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={ANIMATION_CONFIG.VIEWPORT.CONTAINER}
          transition={{
            duration: ANIMATION_CONFIG.DURATION.SLOW,
            delay: ANIMATION_CONFIG.DELAY.AFTER_TEXT,
            ease: EASE_OUT_EXPO,
          }}
        >
          {contact.methods.map(method => {
            const Icon = getIcon(method.icon)
            const href = method.type === 'email' ? `mailto:${method.value}` : method.value
            const displayValue = getDisplayValue(method)

            return (
              <div key={method.value} className="py-10 first:sm:pl-0 last:sm:pr-0 sm:px-12">
                <div className="mb-5 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <Icon className="h-3.5 w-3.5 text-muted-foreground" />
                    <span className="text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground">
                      {method.label}
                    </span>
                  </div>
                  {method.available && (
                    <span className="flex items-center gap-1.5">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                      <span className="text-xs text-muted-foreground">
                        {CONTACT_LABELS.AVAILABILITY.AVAILABLE}
                      </span>
                    </span>
                  )}
                </div>

                <a
                  href={href}
                  className="mb-6 block break-all font-display font-semibold text-foreground transition-colors duration-300 hover:text-accent"
                  style={{ fontSize: 'clamp(1.0625rem, 2.5vw, 1.375rem)', lineHeight: '1.3' }}
                  target={method.type === 'email' ? undefined : '_blank'}
                  rel={method.type === 'email' ? undefined : 'noopener noreferrer'}
                  aria-label={CONTACT_LABELS.ARIA_LABEL(method.label)}
                >
                  {displayValue}
                </a>

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

        {contact.responseTime && (
          <motion.div className="mt-10" {...createFadeInAnimation(ANIMATION_CONFIG.DELAY.LONG)}>
            <Text as="span" color="muted">
              {contact.responseTime}
            </Text>
          </motion.div>
        )}
      </Container>
    </Section>
  )
}
