import { motion } from 'framer-motion'
import { Section } from '@/components/Section'
import { Container } from '@/components/Container'
import { Text } from '@/components/Text'
import { Heading } from '@/components/Heading'
import { Button } from '@/components/ui/button'
import { SocialIcons } from '@/components/SocialIcons'
import { portfolio } from '@/data/portfolio'
import profileImg from '@/assets/images/profile.jpg'
import { slideInLeft, slideInRight, staggerContainer, staggerItem, getAnimationVariants, createButtonAnimation } from '@/lib/animations'
import { useScrollToSection } from '@/hooks/useScrollToSection'
import { SECTION_IDS, ANIMATION_CONFIG, HERO } from '@/lib/constants'

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
              <Text variant="bodyLarge">Hello, I'm</Text>
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
                    Download CV
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
                  Contact Info
                </Button>
              </motion.a>
            </motion.div>
          </motion.div>
        </motion.div>
      </Container>
    </Section>
  )
}
