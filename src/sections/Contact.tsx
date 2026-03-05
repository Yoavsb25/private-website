import { motion } from 'framer-motion'
import { Section, SectionHeader, Container } from '@/components/layout'
import { Text } from '@/components/typography'
import { Button, Card, CardContent, CardDescription, CardHeader } from '@/components/ui'
import { contact } from '@/data/contact'
import { iconHover, getAnimationVariants } from '@/lib/animations'
import {
  hasItems,
  getIcon,
  createCardHoverAnimation,
  createButtonAnimation,
  createFadeInAnimation,
} from '@/lib/helpers'
import {
  SECTION_TITLES,
  SECTION_IDS,
  ANIMATION_CONFIG,
  LAYOUT,
  SPACING,
  COMPONENT_CLASSES,
  CONTACT_LABELS,
  ICON_SIZES,
  SECTION_CLASSES,
  SECTION_SPACING,
} from '@/lib/constants'

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
          transition={{
            duration: ANIMATION_CONFIG.DURATION.DRAW,
            ease: [0, 0, 0.2, 1],
          }}
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

        {/* Contact Cards */}
        <motion.div
          className={LAYOUT.GRID.CONTACT}
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

            return (
              <motion.div key={method.value} {...createCardHoverAnimation('medium')}>
                <Card
                  className={`${LAYOUT.FLEX.COL_CENTER} justify-between ${COMPONENT_CLASSES.CARD.HOVER_LARGE}`}
                >
                  <CardHeader className={LAYOUT.FLEX.COL_CENTER}>
                    <motion.div
                      className={SECTION_CLASSES.CONTACT_CARD_HEADER}
                      whileHover="hover"
                      variants={getAnimationVariants(iconHover)}
                    >
                      <Icon className={`${ICON_SIZES.MEDIUM_RESPONSIVE} text-primary`} />
                      {method.label}
                    </motion.div>

                    {method.available !== undefined && (
                      <CardDescription>
                        {method.available ? (
                          <span className="inline-flex items-center gap-1.5">
                            <motion.span
                              aria-hidden="true"
                              className="inline-block h-2 w-2 rounded-full bg-green-500"
                              animate={{ scale: [1, 1.4, 1] }}
                              transition={{
                                duration: 1.5,
                                repeat: Infinity,
                                repeatDelay: 1,
                                ease: 'easeInOut',
                              }}
                            />
                            <Text color="muted">{CONTACT_LABELS.AVAILABILITY.AVAILABLE}</Text>
                          </span>
                        ) : (
                          <Text color="muted">{CONTACT_LABELS.AVAILABILITY.NOT_AVAILABLE}</Text>
                        )}
                      </CardDescription>
                    )}
                  </CardHeader>

                  <CardContent className="w-full">
                    <motion.a
                      href={href}
                      target={method.type === 'email' ? undefined : '_blank'}
                      rel={method.type === 'email' ? undefined : 'noopener noreferrer'}
                      aria-label={CONTACT_LABELS.ARIA_LABEL(method.label)}
                      {...createButtonAnimation()}
                    >
                      <Button variant="outline" className="w-full">
                        {method.type === 'email'
                          ? CONTACT_LABELS.BUTTONS.SEND_EMAIL
                          : CONTACT_LABELS.BUTTONS.VISIT_PROFILE}
                      </Button>
                    </motion.a>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Response Time */}
        {contact.responseTime && (
          <motion.div {...createFadeInAnimation(ANIMATION_CONFIG.DELAY.LONG)}>
            <Text color="muted">
              {CONTACT_LABELS.RESPONSE_TIME_PREFIX} {contact.responseTime}
            </Text>
          </motion.div>
        )}
      </Container>
    </Section>
  )
}
