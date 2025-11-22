/**
 * Section IDs - used for navigation and anchors
 */
export const SECTION_IDS = {
  HERO: 'hero',
  SKILLS: 'skills',
  TIMELINE: 'timeline',
  PROJECTS: 'projects',
  CONTACT: 'contact',
} as const

/**
 * Navigation configuration
 */
export const NAVIGATION = {
  ITEMS: [
    { id: SECTION_IDS.TIMELINE, label: 'Timeline' },
    { id: SECTION_IDS.PROJECTS, label: 'Projects' },
    { id: SECTION_IDS.CONTACT, label: 'Contact' },
  ],
  SCROLL_OFFSET: 80,
  SCROLL_THRESHOLD: 50,
} as const

/**
 * Section titles
 */
export const SECTION_TITLES = {
  SKILLS: 'Programming Languages & Tools',
  PROJECTS: 'Featured Projects',
  CONTACT: 'Get In Touch',
  TIMELINE: 'Timeline',
} as const

