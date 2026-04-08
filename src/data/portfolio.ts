/**
 * Portfolio Content Data
 * Core personal and professional information
 */
import cvPath from '@/assets/CV/cv.pdf'
export interface PortfolioContent {
  name: string
  title: string
  specialization: string[]
  bio: string
  problemSolving: string
  professionalPhilosophy?: string
  availableFor?: string[]
  imageUrl?: string
  imageAlt?: string
  cvUrl?: string
  socialLinks?: {
    linkedin?: string
    github?: string
  }
}

export const portfolio: PortfolioContent = {
  name: 'Yoav Sborovsky',
  title: 'Automation Engineer & Software Developer',
  specialization: [
    'Test Automation',
    'Python Development',
    'CI/CD Pipelines',
    'Web Development',
    'Data Analysis',
  ],
  bio: 'Automation engineer at SysAid, where I build test infrastructure for a global ITSM platform. The projects here are mostly things I built because something was taking too long to do by hand.',
  problemSolving:
    'I specialize in building automated solutions that improve efficiency and reliability. From designing scalable test frameworks to automating internal workflows, I solve complex technical challenges using Python, modern web technologies, and CI/CD best practices.',
  professionalPhilosophy:
    'I believe in writing clean, maintainable code and building systems that are both robust and scalable. Quality automation and thoughtful engineering can transform how teams work.',
  availableFor: ['Full-time Software Developer roles', 'Automation Engineering positions'],
  imageUrl: '/assets/profile.jpg',
  imageAlt: 'Yoav Sborovsky - Automation Engineer & Software Developer',
  cvUrl: cvPath,
  socialLinks: {
    linkedin: 'https://www.linkedin.com/in/yoav-sborovsky/',
    github: 'https://github.com/Yoavsb25',
  },
}
