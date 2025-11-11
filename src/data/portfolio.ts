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
  bio: 'Data Analyst and Automation Engineer with hands-on experience building scalable test infrastructures, automating workflows, and developing web applications. Passionate about leveraging software engineering and automation to optimize processes and drive business impact.',
  problemSolving: 'I specialize in building automated solutions that improve efficiency and reliability. From designing scalable test frameworks to automating internal workflows, I solve complex technical challenges using Python, modern web technologies, and CI/CD best practices.',
  professionalPhilosophy: 'I believe in writing clean, maintainable code and building systems that are both robust and scalable. Quality automation and thoughtful engineering can transform how teams work.',
  availableFor: ['Full-time Software Developer roles', 'Automation Engineering positions'],
  imageUrl: '/assets/profile.jpg',
  imageAlt: 'Yoav Sborovsky - Automation Engineer & Software Developer',
  cvUrl: '/assets/cv.pdf',
  socialLinks: {
    linkedin: 'https://www.linkedin.com/in/yoav-sborovsky-5a85b41a1/',
    github: 'https://github.com/Yoavsb25',
  },
}

