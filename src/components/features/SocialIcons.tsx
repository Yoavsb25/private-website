import React from 'react'
import { motion } from 'framer-motion'
import { Linkedin, Github } from 'lucide-react'
import { portfolio } from '@/data/portfolio'
import { iconHover, staggerItem, getAnimationVariants } from '@/lib/animations'
import { COMPONENT_CLASSES, HERO } from '@/lib/constants'

interface SocialIconsProps {
  className?: string
}

export const SocialIcons: React.FC<SocialIconsProps> = ({ className }) => {
  if (!portfolio.socialLinks) return null

  return (
    <motion.div
      className={className ?? HERO.SOCIAL_ICONS.DEFAULT}
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
          <Linkedin className={`${HERO.SOCIAL_ICONS.ICON_SIZE} ${HERO.SOCIAL_ICONS.LINKEDIN_COLOR}`} />
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
          <Github className={HERO.SOCIAL_ICONS.ICON_SIZE} />
        </motion.a>
      )}
    </motion.div>
  )
}

