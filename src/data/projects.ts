/**
 * Projects/Work Items Data
 * Showcase of work examples and projects
 */

export interface WorkItem {
  id: string
  title: string
  description: string
  problem: string
  solution: string
  technologies: string[]
  outcomes: string
  imageUrl?: string
  imageAlt?: string
  liveUrl?: string
  sourceUrl?: string
  featured: boolean
  date?: string
}

// Placeholder data - to be populated with actual projects
export const projects: WorkItem[] = []

