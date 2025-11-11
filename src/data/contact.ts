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

// Placeholder data - to be populated with actual contact information
export const contact: ContactInformation = {
  methods: [
    {
      type: 'email',
      label: 'Email',
      value: 'Yoavsb25@gmail.com',
      icon: 'Mail',
      available: true,
    },
  ],
  responseTime: 'Usually within 24 hours',
  availability: 'Available for consulting and Talking about Automation, Python, and Software Development',
}

