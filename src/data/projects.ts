/**
 * Projects/Work Items Data
 * Showcase of work examples and projects
 */

export interface WorkItem {
  id: string
  title: string
  description: string
  problem: string
  solution: string
  technologies: string[]
  outcomes: string
  imageUrl?: string
  imageAlt?: string
  liveUrl?: string
  sourceUrl?: string
  featured: boolean
  date?: string
}
import teamBalncerImg from '@/assets/images/Teamaker.png'
import alertBuddyImg from '@/assets/images/alert_buddy.png'


export const projects: WorkItem[] = [
  {
    id: 'alert-buddy',
    title: 'Alert Buddy - Emergency Safety Platform',
    description: 'A platform for users to mark themselves safe during emergencies, allowing real-time updates on the safety of friends and family.',
    problem: 'During emergencies, people need a way to quickly communicate their safety status to friends and family without direct communication channels.',
    solution: 'Developed a full-stack web application using Django, Python, MySQL, HTML, CSS, and JavaScript. Built real-time update system allowing users to mark themselves safe and view safety status of contacts.',
    technologies: ['Python', 'Django', 'MySQL', 'JavaScript', 'HTML', 'CSS'],
    outcomes: 'Created a functional emergency communication platform that enables real-time safety status updates for users and their networks.',
    imageUrl: alertBuddyImg,
    imageAlt: 'Alert Buddy - Emergency Safety Platform interface showing friend safety statuses',
    featured: true,
    date: '2024',
  },
  {
    id: 'team-balancer',
    title: 'Team Balancer - Skill-Based Group Balancing',
    description: 'Web application to balance groups based on skill levels, ensuring fair team distribution.',
    problem: 'Organizing teams or groups with balanced skill levels is time-consuming and often results in unfair distributions.',
    solution: 'Built a web application using Python, Flask, SQL, HTML, and CSS that automatically balances groups based on skill level inputs, ensuring fair and optimal team composition.',
    technologies: ['Python', 'Flask', 'SQL', 'HTML', 'CSS'],
    outcomes: 'Automated team balancing process, saving time and ensuring fair group distributions based on skill levels.',
    imageUrl: teamBalncerImg,
    imageAlt: 'Team Balancer - Results page showing balanced teams with average scores',
    featured: true,
    date: '2024',
  },
]

