/**
 * Timeline constants
 * Color configurations and animation settings for timeline components
 */

export const TIMELINE_COLORS = {
  experience: {
    accent: 'from-accent/30 to-accent/10',
    glow: 'ring-accent/25',
    ring: 'border-accent/30',
    badge: 'bg-accent/10 text-accent',
  },
  education: {
    accent: 'from-accent/20 to-accent/5',
    glow: 'ring-accent/20',
    ring: 'border-accent/25',
    badge: 'bg-accent/8 text-accent',
  },
} as const

export const ANIMATION_DELAYS = {
  HIGHLIGHTS: 0.3,
  ACTIVITIES: 0.4,
  GRADES: 0.5,
  MAJORS: 0.6,
  PROGRAMMING_LANGUAGES: 0.7,
  TOOLS_FRAMEWORKS: 0.8,
  ACHIEVEMENTS: 0.3,
  TECHNOLOGIES: 0.4,
} as const

export const CONTENT_SECTIONS = {
  HIGHLIGHTS: 'Highlights',
  ACTIVITIES: 'Activities',
  GRADES: 'Grades',
  MAJORS: 'Majors',
  PROGRAMMING_LANGUAGES: 'Programming Languages',
  TOOLS_FRAMEWORKS: 'Tools & Frameworks',
  ACHIEVEMENTS: 'Achievements',
  TECHNOLOGIES: 'Technologies',
} as const
