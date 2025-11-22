import { Mail, Linkedin, Github, ExternalLink } from 'lucide-react'
import { CONTACT_ICON_MAP } from '../constants'

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

