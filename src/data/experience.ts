import sysaidImg from '@/assets/icons/sysaid_technologies_ltd_logo.jpeg'
import affilomaniaImg from '@/assets/icons/Affilomania.png'
import airForceImg from '@/assets/icons/IAF.png'

interface ExperienceItem {
  title: string
  company: string
  period: string
  location?: string
  logoUrl?: string
  type?: string
  achievements: string[]
  technologies?: string[]
  order?: number // Manual order for timeline (lower numbers appear first)
}

export const experiences: ExperienceItem[] = [
  {
    title: 'Automation Engineer',
    company: 'SysAid',
    period: 'Apr 2025 - Present',
    logoUrl: sysaidImg,
    achievements: [
      'Architected a 29-component deployment pipeline, eliminating manual release steps across the R&D team',
      'Designed a dual-routing system with a centralized registry, enabling seamless migration without disrupting weekly releases',
      'Built an internal AI-powered translation tool leveraging AI-driven translation across 7 languages',
      'Automated end-to-end release coordination (Python, Jira API, Slack API) across 14 repositories and a 6-service monorepo',
      'Built AI-assisted developer tools (Claude Code) for incident investigation and triage, reducing mean time to root cause',
    ],
    technologies: [
      'Python',
      'TypeScript',
      'Jira API',
      'Slack API',
      'CI/CD',
      'Claude Code',
      'GitHub Actions',
      'Playwright',
      'API Testing',
      'UI Testing',
    ],
    order: 1,
  },
  {
    title: 'Data Analyst',
    company: 'Affilomania',
    period: 'Oct 2020 - Oct 2021',
    logoUrl: affilomaniaImg,
    achievements: [
      'Analyzed and interpreted large-scale data sets to support business decisions and improve KPIs',
      'Enhanced lead distribution processes, achieving a 15% increase in sales through data-driven strategies',
      'Created monthly reports for executive management and the accounting department',
      'Conducted technical troubleshooting and analysis to optimize workflows and enhance business intelligence capabilities',
      'Conducted AB testing to assess the effectiveness of the lead distribution system',
    ],
    technologies: ['Python', 'SQL', 'Data Analysis', 'Tableau', 'AB Testing'],
    order: 3,
  },
  {
    title: 'Commander of Flight Academy Cadets',
    company: 'Israeli Air Force',
    period: 'Nov 2014 - Feb 2018',
    logoUrl: airForceImg,
    achievements: [
      'Led a team of 10 soldiers, ensuring their welfare',
      'Promoted to Company Sergeant Major, overseeing 60 soldiers and commanders',
      'Planned and executed different types of military drills',
      'Handled unexpected events while making decisions and prioritizing under pressure',
    ],
    order: 4,
  },
]
