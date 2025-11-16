import { motion } from 'framer-motion'
import { Section } from '@/components/Section'
import { SectionHeader } from '@/components/SectionHeader'
import { Container } from '@/components/Container'
import { Text } from '@/components/Text'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader } from '@/components/ui/card'
import { contact } from '@/data/contact'
import { hasItems } from '@/lib/data-helpers'
import { staggerContainer, staggerItem, iconHover } from '@/lib/animations'
import {
  createStaggerContainerAnimation,
  createStaggerItemAnimation,
  createCardHoverAnimation,
  createButtonAnimation,
  createFadeInAnimation,
} from '@/lib/animation-helpers'
import { SECTION_TITLES, SECTION_IDS, ANIMATION_CONFIG, LAYOUT, SPACING, COMPONENT_CLASSES } from '@/lib/constants'
import { getAnimationVariants } from '@/lib/animations'
import { getIcon } from '@/lib/icon-helpers'

export function Contact() {
  if (!hasItems(contact.methods)) return null

  return (
    <Section id={SECTION_IDS.CONTACT} background="mutedLight">
      <Container size="small" className={`text-center ${SPACING.SECTION.LARGE}`}>
        {/* Header */}
        <div>
          <SectionHeader className="mb-4">{SECTION_TITLES.CONTACT}</SectionHeader>
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
                      className="flex items-center gap-2 text-lg font-semibold"
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
                        <Icon className="h-6 w-6 text-primary" />
                      </motion.div>
                      {method.label}
                    </motion.div>
                    {method.available !== undefined && (
                      <CardDescription>
                        <Text color="muted">
                          {method.available ? 'Available' : 'Not available'}
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
                      aria-label={`Contact via ${method.label}`}
                      {...createButtonAnimation()}
                    >
                      <Button
                        variant="outline"
                        className="w-full"
                      >
                        {method.type === 'email' ? 'Send Email' : 'Visit Profile'}
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
              Response time: {contact.responseTime}
            </Text>
          </motion.div>
        )}
      </Container>
    </Section>
  )
}
