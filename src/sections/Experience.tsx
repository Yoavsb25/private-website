import { Section } from '@/components/Section'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

// @ts-expect-error: Image import for usage with bundlers (handled in build pipeline)
import sysaidImg from '@/public/assets/sysaid_technologies_ltd_logo.jpeg'
// @ts-expect-error: Image import for usage with bundlers (handled in build pipeline)
import affilomaniaImg from '@/public/assets/Affilomania.png'
// @ts-expect-error: Image import for usage with bundlers (handled in build pipeline)
import airForceImg from '@/public/assets/IAF.png'

interface ExperienceItem {
  title: string
  company: string
  period: string
  location: string
  logoUrl?: string
  type?: string
  achievements: string[]
  technologies?: string[]
}

const experiences: ExperienceItem[] = [
  {
    title: 'Automation Engineer',
    company: 'SysAid',
    period: 'Apr 2025 - Present',
    logoUrl: sysaidImg,
    location: 'Tel Aviv-Yafo',
    type: 'Full-time',
    achievements: [
      'Built scalable UI and API test infrastructures to support continuous testing across multiple environments',
      'Designed and maintained automated test coverage for functional, regression, and API flows',
      'Continuously optimized the automation framework to improve test speed, reliability, and scalability',
      'Integrated test automation into CI/CD pipelines to support continuous delivery',
      'Automated internal workflows, including release notes generation, to streamline deployment processes',
    ],
    technologies: ['Python', 'Test Automation', 'CI/CD', 'API Testing', 'UI Testing'],
  },
  {
    title: 'Data Analyst',
    company: 'Affilomania',
    period: 'Oct 2020 - Oct 2021',
    logoUrl: affilomaniaImg,
    location: 'Tel Aviv-Yafo',
    achievements: [
      'Analyzed and interpreted large-scale data sets to support business decisions and improve KPIs',
      'Enhanced lead distribution processes, achieving a 15% increase in sales through data-driven strategies',
      'Created monthly reports for executive management and the accounting department',
      'Conducted technical troubleshooting and analysis to optimize workflows and enhance business intelligence capabilities',
      'Conducted AB testing to assess the effectiveness of the lead distribution system',
    ],
    technologies: ['Python', 'SQL', 'Data Analysis', 'Tableau', 'AB Testing'],
  },
  {
    title: 'Commander of Flight Academy Cadets',
    company: 'Israeli Air Force',
    period: 'Military Service',
    logoUrl: airForceImg,
    location: 'Israel',
    achievements: [
      'Led a team of 10 soldiers, ensuring their welfare',
      'Promoted to Company Sergeant Major, overseeing 60 soldiers and commanders',
      'Planned and executed different types of military drills',
      'Handled unexpected events while making decisions and prioritizing under pressure',
    ],
  },
]

export function Experience() {
  return (
    <Section id="experience">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Experience</h2>
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <Card key={index}>
              <CardHeader>
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                  {exp.logoUrl && (
                    <img
                      src={exp.logoUrl}
                      alt={`${exp.company} logo`}
                      className="h-16 w-auto object-contain"
                    />
                  )}
                  <div>
                    <CardTitle>{exp.title}</CardTitle>
                    <CardDescription>{exp.company}</CardDescription>
                  </div>
                  <div className="text-right">
                    <CardDescription className="text-xs">{exp.period}</CardDescription>
                    <CardDescription className="text-xs">{exp.location}</CardDescription>
                    {exp.type && (
                      <Badge variant="secondary" className="mt-1">
                        {exp.type}
                      </Badge>
                    )}
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-4">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="flex items-start text-sm">
                      <span className="mr-2">•</span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
                {exp.technologies && exp.technologies.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-4">
                    {exp.technologies.map((tech) => (
                      <Badge key={tech} variant="outline">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </Section>
  )
}

