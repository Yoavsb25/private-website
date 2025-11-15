import type React from 'react'
import {
  SiPython,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiJenkins,
  SiTailwindcss,
  SiGit,
  SiSqlite,
  SiMysql,
  SiPostgresql,
  SiDjango,
  SiFlask,
  SiDocker,
  SiHtml5,
  SiCss3,
} from 'react-icons/si'
import { FaJava } from 'react-icons/fa'
import PlaywrightImg from '@/assets/Playwright--Streamline-Svg-Logos.svg'

const PlaywrightIcon: React.FC<{ className?: string; style?: React.CSSProperties }> = ({ 
  className, 
  style 
}) => (
  <img
    src={PlaywrightImg}
    alt="Playwright"
    className={className}
    style={style}
  />
)

export type SkillItem = {
  name: string
  icon: React.ComponentType<{ className?: string; style?: React.CSSProperties }>
  color: string
}

export type SkillGroup = {
  category: string
  items: SkillItem[]
}

export const skills: SkillGroup[] = [
  {
    category: 'Languages',
    items: [
      { name: 'Python', icon: SiPython, color: '#3776AB' },
      { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
      { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
      { name: 'Java', icon: FaJava, color: '#007396' },
      { name: 'HTML', icon: SiHtml5, color: '#E34F26' },
      { name: 'CSS', icon: SiCss3, color: '#1572B6' },
    ],
  },
  {
    category: 'Frameworks & Libraries',
    items: [
      { name: 'React', icon: SiReact, color: '#61DAFB' },
      { name: 'Next.js', icon: SiNextdotjs, color: '#000000' },
      { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
      { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
      { name: 'Django', icon: SiDjango, color: '#092E20' },
      { name: 'Flask', icon: SiFlask, color: '#000000' },
      { name: 'Playwright', icon: PlaywrightIcon, color: '#2EAD33' },
    ],
  },
  {
    category: 'DevOps & Tools',
    items: [
      { name: 'Git', icon: SiGit, color: '#F05032' },
      { name: 'Docker', icon: SiDocker, color: '#2496ED' },
      { name: 'SQLite', icon: SiSqlite, color: '#003B57' },
      { name: 'MySQL', icon: SiMysql, color: '#4479A1' },
      { name: 'PostgreSQL', icon: SiPostgresql, color: '#31648C' },
      { name: 'Jenkins', icon: SiJenkins, color: '#D24939' },
    ],
  },
]