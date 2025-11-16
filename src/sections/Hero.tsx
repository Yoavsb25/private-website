import { motion } from 'framer-motion'
import { Section } from '@/components/Section'
import { Container } from '@/components/Container'
import { Text } from '@/components/Text'
import { Heading } from '@/components/Heading'
import { Button } from '@/components/ui/button'
import { portfolio } from '@/data/portfolio'
import { Linkedin, Github } from 'lucide-react'
import profileImg from '@/assets/profile.jpg'
import { slideInLeft, slideInRight, iconHover, staggerContainer, staggerItem } from '@/lib/animations'
import { createButtonAnimation } from '@/lib/animation-helpers'
import { useScrollToSection } from '@/hooks/useScrollToSection'
import { SECTION_IDS, ANIMATION_CONFIG, LAYOUT, SPACING, COMPONENT_CLASSES } from '@/lib/constants'
import { getAnimationVariants } from '@/lib/animations'

export function Hero() {
  const scrollToSection = useScrollToSection()

  return (
    <Section id={SECTION_IDS.HERO} className={`${LAYOUT.FLEX.CENTER} min-h-screen`}>
      <Container size="small">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center"
          variants={getAnimationVariants(staggerContainer)}
          initial="hidden"
          animate="visible"
        >
          {/* Left Side - Profile Image */}
          <motion.div
            className="flex justify-center md:justify-start"
            variants={getAnimationVariants(slideInLeft)}
          >
            <motion.div
              className="relative"
              whileHover={ANIMATION_CONFIG.HOVER.SCALE_UP}
              transition={{ duration: ANIMATION_CONFIG.DURATION.NORMAL }}
            >
              <motion.div
                className="w-48 h-64 sm:w-64 sm:h-80 md:w-72 md:h-96 lg:w-80 lg:h-[28rem] rounded-2xl overflow-hidden bg-[#C6D2FF] p-2 shadow-lg"
                initial={ANIMATION_CONFIG.INITIAL.SCALE}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: ANIMATION_CONFIG.DURATION.SLOW, delay: ANIMATION_CONFIG.DELAY.SHORT }}
              >
                <motion.img
                  src={profileImg}
                  alt={portfolio.imageAlt || portfolio.name}
                  className="w-full h-full object-cover rounded-xl"
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: ANIMATION_CONFIG.DURATION.SLOWER, delay: ANIMATION_CONFIG.DELAY.LONG }}
                />
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right Side - Content */}
          <motion.div
            className={`${SPACING.SECTION.CONTENT} text-center md:text-left`}
            variants={getAnimationVariants(slideInRight)}
          >
            <motion.div variants={getAnimationVariants(staggerItem)}>
              <Text variant="bodyLarge">Hello, I'm</Text>
            </motion.div>
            <motion.div variants={getAnimationVariants(staggerItem)}>
              <Heading level={1}>{portfolio.name}</Heading>
            </motion.div>
            <motion.div variants={getAnimationVariants(staggerItem)}>
              <Text variant="bodyLarge" className="text-2xl sm:text-3xl font-bold">
                {portfolio.title}
              </Text>
            </motion.div>

            {/* Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 pt-4"
              variants={getAnimationVariants(staggerItem)}
            >
              {portfolio.cvUrl && (
                <motion.a
                  href={portfolio.cvUrl}
                  download
                  className="w-full sm:w-auto"
                  {...createButtonAnimation()}
                >
                  <Button
                    variant="outline"
                    size="lg"
                    className="px-4 py-2 text-xs sm:px-6 sm:py-2 sm:text-sm md:px-8 md:py-3 md:text-base rounded-md"
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
                className="w-full sm:w-auto"
                {...createButtonAnimation()}
              >
                <Button
                  variant="default"
                  size="lg"
                  className="px-4 py-2 text-xs sm:px-6 sm:py-2 sm:text-sm md:px-8 md:py-3 md:text-base rounded-md"

                >
                  Contact Info
                </Button>
              </motion.a>
            </motion.div>

            {/* Social Media Icons */}
            {portfolio.socialLinks && (
              <motion.div
                className={`flex gap-4 justify-center md:justify-start pt-4`}
                variants={getAnimationVariants(staggerItem)}
              >
                {portfolio.socialLinks.linkedin && (
                  <motion.a
                    href={portfolio.socialLinks.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className={COMPONENT_CLASSES.BUTTON.SOCIAL}
                    variants={getAnimationVariants(iconHover)}
                    whileHover="hover"
                    whileTap="tap"
                  >
                    <Linkedin className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-blue-600" />
                  </motion.a>
                )}
                {portfolio.socialLinks.github && (
                  <motion.a
                    href={portfolio.socialLinks.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                    className={COMPONENT_CLASSES.BUTTON.SOCIAL}
                    variants={getAnimationVariants(iconHover)}
                    whileHover="hover"
                    whileTap="tap"
                  >
                    <Github className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" />
                  </motion.a>
                )}
              </motion.div>
            )}
          </motion.div>
        </motion.div>
      </Container>
    </Section>
  )
}