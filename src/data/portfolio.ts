/**
 * Portfolio Content Data
 * Core personal and professional information
 */
import cvPath from '@/assets/CV/UK-CV.pdf'
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
    'Platform Engineering',
    'Test Automation',
    'CI/CD Pipelines',
    'Python Automation',
    'Developer Tooling',
    'Web Development',
    'Data Analysis',
  ],
  bio: 'Experienced in architecting production-ready internal platforms, from Python automation to cloud-native web applications. A self-starter who thrives in small-team environments, building the foundational tools and CI/CD pipelines that bridge the gap between development and global deployment.',
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
