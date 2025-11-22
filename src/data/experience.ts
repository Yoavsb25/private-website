import sysaidImg from '@/assets/icons/sysaid_technologies_ltd_logo.jpeg'
import affilomaniaImg from '@/assets/icons/Affilomania.png'
import airForceImg from '@/assets/icons/IAF.png'

interface ExperienceItem {
    title: string
    company: string
    period: string
    location: string
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
      order: 1,
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
      order: 3,
    },
    {
      title: 'Commander of Flight Academy Cadets',
      company: 'Israeli Air Force',
      period: 'Nov 2014 - Feb 2018',
      logoUrl: airForceImg,
      location: 'Israel',
      achievements: [
        'Led a team of 10 soldiers, ensuring their welfare',
        'Promoted to Company Sergeant Major, overseeing 60 soldiers and commanders',
        'Planned and executed different types of military drills',
        'Handled unexpected events while making decisions and prioritizing under pressure',
      ],
      order: 4,
    },
  ]