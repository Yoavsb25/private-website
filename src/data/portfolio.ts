/**
 * Portfolio Content Data
 * Core personal and professional information
 */

export interface PortfolioContent {
  name: string
  title: string
  specialization: string[]
  bio: string
  problemSolving: string
  professionalPhilosophy?: string
  location?: string
  availableFor?: string[]
}

// Placeholder data - to be populated with actual content
export const portfolio: PortfolioContent = {
  name: 'Your Name',
  title: 'Software Engineer',
  specialization: ['Full-Stack Development', 'React', 'TypeScript'],
  bio: 'I build elegant, performant web applications that solve real problems.',
  problemSolving: 'I specialize in solving complex business problems through clean, maintainable code and thoughtful architecture.',
  professionalPhilosophy: 'I value clarity, simplicity, and elegance in code.',
}

