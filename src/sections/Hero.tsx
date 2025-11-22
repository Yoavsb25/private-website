import { motion } from 'framer-motion'
import { Section, Container } from '@/components/layout'
import { Text, Heading } from '@/components/typography'
import { Button } from '@/components/ui/button'
import { SocialIcons } from '@/components/features'
import { portfolio } from '@/data/portfolio'
import profileImg from '@/assets/images/profile.jpg'
import { slideInLeft, slideInRight, staggerContainer, staggerItem, getAnimationVariants } from '@/lib/animations'
import { createButtonAnimation } from '@/lib/helpers'
import { useScrollToSection } from '@/hooks'
import { SECTION_IDS, ANIMATION_CONFIG, HERO, HERO_LABELS } from '@/lib/constants'

export function Hero() {
  const scrollToSection = useScrollToSection()

  return (
    <Section id={SECTION_IDS.HERO} className={HERO.SECTION.CLASS_NAME}>
      <Container size={HERO.CONTAINER.SIZE}>
        <motion.div
          className={HERO.GRID.CONTAINER}
          variants={getAnimationVariants(staggerContainer)}
          initial="hidden"
          animate="visible"
        >
          {/* Left Side - Profile Image */}
          <motion.div
            className={HERO.LEFT_SIDE.CONTAINER}
            variants={getAnimationVariants(slideInLeft)}
          >
            <motion.div
              className={HERO.IMAGE.WRAPPER}
              whileHover={ANIMATION_CONFIG.HOVER.SCALE_UP}
              transition={{ duration: ANIMATION_CONFIG.DURATION.NORMAL }}
            >
              <motion.div
                className={HERO.IMAGE.FRAME}
                initial={ANIMATION_CONFIG.INITIAL.SCALE}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: ANIMATION_CONFIG.DURATION.SLOW,
                  delay: ANIMATION_CONFIG.DELAY.SHORT,
                }}
              >
                <motion.img
                  src={profileImg}
                  alt={portfolio.imageAlt || portfolio.name}
                  className={HERO.IMAGE.CLASS_NAME}
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: ANIMATION_CONFIG.DURATION.SLOWER,
                    delay: ANIMATION_CONFIG.DELAY.LONG,
                  }}
                />
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right Side - Content */}
          <motion.div
            className={HERO.RIGHT_SIDE.CONTENT}
            variants={getAnimationVariants(slideInRight)}
          >
            <motion.div variants={getAnimationVariants(staggerItem)}>
              <Text variant="bodyLarge">{HERO_LABELS.GREETING}</Text>
            </motion.div>

            <motion.div variants={getAnimationVariants(staggerItem)}>
              <Heading level={1}>{portfolio.name}</Heading>
            </motion.div>

            <motion.div variants={getAnimationVariants(staggerItem)}>
              <Text variant="bodyLarge" className={HERO.RIGHT_SIDE.TITLE}>
                {portfolio.title}
              </Text>
            </motion.div>

            {/* Social Icons */}
            <SocialIcons className={HERO.SOCIAL_ICONS.IN_CONTENT} />

            {/* Buttons */}
            <motion.div
              className={HERO.BUTTONS.CONTAINER}
              variants={getAnimationVariants(staggerItem)}
            >
              {portfolio.cvUrl && (
                <motion.a
                  href={portfolio.cvUrl}
                  download
                  className={HERO.BUTTONS.LINK}
                  {...createButtonAnimation()}
                >
                  <Button
                    variant="outline"
                    size="lg"
                    className={HERO.BUTTONS.CLASS_NAME}
                  >
                    {HERO_LABELS.BUTTONS.DOWNLOAD_CV}
                  </Button>
                </motion.a>
              )}

              <motion.a
                href={`#${SECTION_IDS.CONTACT}`}
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection(SECTION_IDS.CONTACT)
                }}
                className={HERO.BUTTONS.LINK}
                {...createButtonAnimation()}
              >
                <Button
                  variant="default"
                  size="lg"
                  className={HERO.BUTTONS.CLASS_NAME}
                >
                  {HERO_LABELS.BUTTONS.CONTACT_INFO}
                </Button>
              </motion.a>
            </motion.div>
          </motion.div>
        </motion.div>
      </Container>
    </Section>
  )
}
