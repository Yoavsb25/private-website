import React from 'react'
import { motion } from 'framer-motion'
import { Linkedin, Github } from 'lucide-react'
import { portfolio } from '@/data/portfolio'
import { iconHover, staggerItem, getAnimationVariants } from '@/lib/animations'
import { COMPONENT_CLASSES } from '@/lib/constants'

const SOCIAL_ICONS_DEFAULT = 'flex gap-4 justify-center sm:justify-start pt-4'
const SOCIAL_ICON_SIZE = 'w-[clamp(1.25rem,3vw,1.75rem)] h-[clamp(1.25rem,3vw,1.75rem)]'
const LINKEDIN_COLOR = 'text-blue-600'

interface SocialIconsProps {
  className?: string
}

export const SocialIcons: React.FC<SocialIconsProps> = ({ className }) => {
  if (!portfolio.socialLinks) return null

  return (
    <motion.div
      className={className ?? SOCIAL_ICONS_DEFAULT}
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
          <Linkedin aria-hidden="true" className={`${SOCIAL_ICON_SIZE} ${LINKEDIN_COLOR}`} />
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
          <Github aria-hidden="true" className={SOCIAL_ICON_SIZE} />
        </motion.a>
      )}
    </motion.div>
  )
}
