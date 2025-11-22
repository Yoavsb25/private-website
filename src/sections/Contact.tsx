import { motion } from 'framer-motion'
import { Section, SectionHeader, Container } from '@/components/layout'
import { Text } from '@/components/typography'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader } from '@/components/ui/card'
import { contact } from '@/data/contact'
import { staggerContainer, staggerItem, iconHover, getAnimationVariants } from '@/lib/animations'
import {
  hasItems,
  getIcon,
  createStaggerContainerAnimation,
  createStaggerItemAnimation,
  createCardHoverAnimation,
  createButtonAnimation,
  createFadeInAnimation,
} from '@/lib/helpers'
import { SECTION_TITLES, SECTION_IDS, ANIMATION_CONFIG, LAYOUT, SPACING, COMPONENT_CLASSES, CONTACT_LABELS, ICON_SIZES, SECTION_CLASSES, SECTION_SPACING } from '@/lib/constants'

export function Contact() {
  if (!hasItems(contact.methods)) return null

  return (
    <Section id={SECTION_IDS.CONTACT} background="mutedLight">
      <Container size="small" className={`text-center ${SPACING.SECTION.LARGE}`}>
        {/* Header */}
        <div>
          <SectionHeader className={SECTION_SPACING.CONTACT_HEADER}>{SECTION_TITLES.CONTACT}</SectionHeader>
          {contact.availability && (
            <Text variant="bodyLarge" color="muted">{contact.availability}</Text>
          )}
        </div>

        {/* Contact Cards */}
        <motion.div
          className={LAYOUT.GRID.CONTACT}
          {...createStaggerContainerAnimation(staggerContainer)}
        >
          {contact.methods.map((method, index) => {
            const Icon = getIcon(method.icon)
            const href =
              method.type === 'email' ? `mailto:${method.value}` : method.value

            return (
              <motion.div
                key={index}
                {...createStaggerItemAnimation(staggerItem)}
                {...createCardHoverAnimation('medium')}
              >
                <Card className={`${LAYOUT.FLEX.COL_CENTER} justify-between ${COMPONENT_CLASSES.CARD.HOVER_LARGE}`}>
                  <CardHeader className={LAYOUT.FLEX.COL_CENTER}>
                    <motion.div
                      className={SECTION_CLASSES.CONTACT_CARD_HEADER}
                      whileHover="hover"
                      variants={getAnimationVariants(iconHover)}
                    >
                      <motion.div
                        animate={{
                          scale: [1, 1.2, 1],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          repeatDelay: 3,
                        }}
                      >
                        <Icon className={`${ICON_SIZES.MEDIUM_RESPONSIVE} text-primary`} />
                      </motion.div>
                      {method.label}
                    </motion.div>
                    {method.available !== undefined && (
                      <CardDescription>
                        <Text color="muted">
                          {method.available ? CONTACT_LABELS.AVAILABILITY.AVAILABLE : CONTACT_LABELS.AVAILABILITY.NOT_AVAILABLE}
                        </Text>
                      </CardDescription>
                    )}
                  </CardHeader>

                  <CardContent className="w-full">
                    <motion.a
                      href={href}
                      target={method.type === 'email' ? undefined : '_blank'}
                      rel={
                        method.type === 'email'
                          ? undefined
                          : 'noopener noreferrer'
                      }
                      aria-label={CONTACT_LABELS.ARIA_LABEL(method.label)}
                      {...createButtonAnimation()}
                    >
                      <Button
                        variant="outline"
                        className="w-full"
                      >
                        {method.type === 'email' ? CONTACT_LABELS.BUTTONS.SEND_EMAIL : CONTACT_LABELS.BUTTONS.VISIT_PROFILE}
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
          <motion.div {...createFadeInAnimation(ANIMATION_CONFIG.DELAY.MEDIUM)}>
            <Text color="muted">
              {CONTACT_LABELS.RESPONSE_TIME_PREFIX} {contact.responseTime}
            </Text>
          </motion.div>
        )}
      </Container>
    </Section>
  )
}
