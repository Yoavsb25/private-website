/**
 * Timeline constants
 * Color configurations and animation settings for timeline components
 */

/**
 * Color configurations for different timeline item types
 */
export const TIMELINE_COLORS = {
  experience: {
    accent: 'from-indigo-500 to-cyan-400',
    glow: 'ring-indigo-500/40',
  },
  education: {
    accent: 'from-fuchsia-500 to-pink-400',
    glow: 'ring-fuchsia-500/40',
  },
} as const

/**
 * Animation delays for timeline card content sections
 */
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

/**
 * Content section titles for timeline cards
 */
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
  