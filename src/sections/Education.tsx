import { Section } from '@/components/Section'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

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

const education: EducationItem[] = [
  {
    degree: 'Computer Science & Entrepreneurship',
    institution: 'Reichman University',
    period: 'Graduated 2025',
    logoUrl: '/assets/reichman_logo.png',
    activities: [
      'Code4Good – Developed technology solutions for nonprofit organizations across Israel, helping optimize operations, streamline processes, and create lasting social impact through innovative tools.',
      'Reichman Futsal Team – Represented the university in national competitions; contributed to winning the 2023/24 championship.',
    ],
    programmingLanguages: ['Python', 'Java', 'C', 'JavaScript', 'HTML', 'CSS'],
    developmentTools: ['Git', 'GitHub', 'Flask', 'Django', 'React'],
    details: [
      'Hands-on experience with programming, data analysis, and database management',

    ],
    grades: ['Machine Learning course final grade: 88', 'Operating Systems course final grade: 92', 'Product Management course final grade: 94'],
  },
  {
    degree: 'Biotechnology Major',
    institution: 'Rothberg High School',
    period: 'Graduated 2014',
    logoUrl: '/assets/rothberg_logo.png',
    details: [
    ],
    majors: ['Math', 'English', 'Biology', 'Biotechnology', 'Literature', 'Bible', 'History'],
    grades: ['Matriculation GPA: 114.2', 'Psychometric grade: 721'],
  },
]

export function Education() {
  return (
    <Section id="education" className="bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Education</h2>
        <div className="space-y-6">
          {education.map((item, index) => (
            <Card key={index}>
              <CardHeader>
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                  {item.logoUrl && (
                    <img
                      src={item.logoUrl}
                      alt={`${item.institution} logo`}
                      className="h-16 w-auto object-contain"
                    />
                  )}
                  <div>
                    <CardTitle>{item.degree}</CardTitle>
                    <CardDescription className="flex justify-between w-full">
                      <div>
                        <CardDescription>{item.institution}</CardDescription>
                      </div>
                    </CardDescription>
                  </div>
                  <div className="text-right">
                    <CardDescription className="text-xs">{item.period}</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                {item.activities && (
                  <ul className="space-y-2 text-sm">
                    {item.activities.map((activity, i) => (
                      <li key={i} className="flex items-start">
                        <span className="mr-2">•</span>
                        <span>{activity}</span>
                      </li>
                    ))}
                  </ul>
                )}
                {item.details && (
                  <ul className="space-y-2 text-sm">
                    {item.details.map((detail, i) => (
                      <li key={i} className="flex items-start">
                        <span className="mr-2">•</span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                )}
                {item.grades && (
                  <ul className="space-y-2 text-sm">
                    {item.grades.map((grade, i) => (
                      <li key={i} className="flex items-start">
                        <span className="mr-2">•</span>
                        <span>{grade}</span>
                      </li>
                    ))}
                  </ul>
                )}
                {item.majors && (
                  <ul className="space-y-2 text-sm">
                    {item.majors.map((major, i) => (
                      <li key={i} className="flex items-start">
                        <span className="mr-2">•</span>
                        <span>{major}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </Section>
  )
}

