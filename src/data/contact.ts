/**
 * Contact Information Data
 * Methods for visitors to connect
 */

export interface ContactMethod {
  type: 'email' | 'social' | 'form'
  label: string
  value: string
  icon?: string
  available?: boolean
}

export interface ContactInformation {
  methods: ContactMethod[]
  responseTime?: string
  availability?: string
}

export const contact: ContactInformation = {
  methods: [
    {
      type: 'email',
      label: 'Email',
      value: 'Yoavsb25@gmail.com',
      icon: 'Mail',
      available: true,
    },
    {
      type: 'social',
      label: 'LinkedIn',
      value: 'https://www.linkedin.com/in/yoav-sborovsky/',
      icon: 'Linkedin',
      available: true,
    },
  ],
  responseTime: 'I read everything — usually same day.',
  availability:
    'Available for consulting and Talking about Automation, Python, and Software Development',
}
