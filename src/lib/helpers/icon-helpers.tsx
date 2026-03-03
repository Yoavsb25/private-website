/* eslint-disable react-refresh/only-export-components -- intentional: icon components and icon utilities colocated */
import type React from 'react'
import { Mail, Linkedin, Github, ExternalLink } from 'lucide-react'
import { CONTACT_ICON_MAP } from '../constants'
import PlaywrightImg from '@/assets/icons/Playwright--Streamline-Svg-Logos.svg'

export const PlaywrightIcon: React.FC<{ className?: string; style?: React.CSSProperties }> = ({
  className,
  style,
}) => <img src={PlaywrightImg} alt="Playwright" className={className} style={style} />

/**
 * Icon component type
 */
type IconComponent = React.ComponentType<{ className?: string }>

/**
 * Icon map for contact methods and other uses
 */
export const iconMap: Record<string, IconComponent> = {
  [CONTACT_ICON_MAP.Mail]: Mail,
  [CONTACT_ICON_MAP.Linkedin]: Linkedin,
  [CONTACT_ICON_MAP.Github]: Github,
  [CONTACT_ICON_MAP.ExternalLink]: ExternalLink,
}

/**
 * Get icon component by name
 */
export function getIcon(iconName?: string): IconComponent {
  return iconMap[iconName || CONTACT_ICON_MAP.ExternalLink] || ExternalLink
}
