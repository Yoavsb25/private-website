/* eslint-disable react-refresh/only-export-components -- intentional: icon components and icon utilities colocated */
import type React from 'react'
import { Mail, Linkedin, Github, ExternalLink, Code2 } from 'lucide-react'
import {
  SiPython,
  SiDjango,
  SiFlask,
  SiMysql,
  SiJavascript,
  SiHtml5,
  SiCss,
  SiPostgresql,
  SiTypescript,
  SiReact,
  SiNodedotjs,
  SiGit,
} from 'react-icons/si'
import { CONTACT_ICON_MAP } from '@/lib/constants'
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

/**
 * Devicon component type — react-icons SVG components
 */
type TechIconComponent = React.ComponentType<{
  className?: string
  title?: string
  style?: React.CSSProperties
  role?: string
  'aria-label'?: string
}>

/**
 * Map from technology name string (lowercase) to devicon component
 */
const TECH_ICON_MAP: Record<string, TechIconComponent> = {
  python: SiPython,
  django: SiDjango,
  flask: SiFlask,
  mysql: SiMysql,
  javascript: SiJavascript,
  html: SiHtml5,
  css: SiCss,
  sql: SiPostgresql,
  typescript: SiTypescript,
  react: SiReact,
  'node.js': SiNodedotjs,
  nodejs: SiNodedotjs,
  git: SiGit,
}

/**
 * Get devicon component for a technology name.
 * Falls back to a generic Code2 lucide icon for unknown techs.
 */
export function getTechIcon(tech: string): TechIconComponent {
  return TECH_ICON_MAP[tech.toLowerCase()] ?? (Code2 as TechIconComponent)
}

/**
 * Brand colours for technology icons
 */
const TECH_ICON_COLORS: Record<string, string> = {
  python: '#3776AB',
  django: '#092E20',
  flask: '#000000',
  mysql: '#4479A1',
  javascript: '#F7DF1E',
  html: '#E34F26',
  css: '#1572B6',
  sql: '#336791',
  typescript: '#3178C6',
  react: '#61DAFB',
  'node.js': '#339933',
  nodejs: '#339933',
  git: '#F05032',
}

/**
 * Get the brand colour for a technology name.
 * Falls back to a muted grey for unknown techs.
 */
export function getTechIconColor(tech: string): string {
  return TECH_ICON_COLORS[tech.toLowerCase()] ?? '#6B7280'
}
