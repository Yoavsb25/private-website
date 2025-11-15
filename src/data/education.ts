import reichmanImg from '@/assets/reichman_logo.png'
import rothbergImg from '@/assets/rothberg_logo.png'

interface EducationItem {
  degree: string
  institution: string
  period?: string
  logoUrl?: string
  activities?: string[]
  details?: string[]
  programmingLanguages?: string[]
  developmentTools?: string[]
  majors?: string[]
  grades?: string[]
}

export const education: EducationItem[] = [
  {
    degree: 'Computer Science & Entrepreneurship',
    institution: 'Reichman University',
    period: 'Graduated 2025',
    logoUrl: reichmanImg,
    activities: [
      'Code4Good – Developed tech solutions for nonprofits, improving operations and impact.',
      'Reichman Futsal Team – National competitions; 2023/24 champions.',
    ],
    programmingLanguages: ['Python', 'Java', 'C', 'JavaScript', 'HTML', 'CSS'],
    developmentTools: ['Git', 'GitHub', 'Flask', 'Django', 'React'],
    details: [
      'Hands-on projects in programming, data analysis, and database management',
    ],
    grades: [
      'Machine Learning final: 88',
      'Operating Systems final: 92',
      'Product Management final: 94',
    ],
  },
  {
    degree: 'Biotechnology Major',
    institution: 'Rothberg High School',
    period: 'Graduated 2014',
    logoUrl: rothbergImg,
    majors: ['Math', 'English', 'Biology', 'Biotechnology', 'Literature', 'Bible', 'History'],
    grades: ['Matriculation GPA: 114.2', 'Psychometric: 721'],
  },
]