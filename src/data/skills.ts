import type React from 'react'
import {
  SiPython,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNodedotjs,
  SiTailwindcss,
  SiGit,
  SiMysql,
  SiPostgresql,
  SiDjango,
  SiFlask,
  SiDocker,
  SiHtml5,
} from 'react-icons/si'
import { PlaywrightIcon } from '@/lib/helpers'

export type SkillItem = {
  name: string
  icon: React.ComponentType<{ className?: string; style?: React.CSSProperties }>
  color: string
}

export type SkillGroup = {
  category: string
  colSpan: 1 | 2 | 3
  items: SkillItem[]
}

export const skills: SkillGroup[] = [
  {
    category: 'Frontend',
    colSpan: 2,
    items: [
      { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
      { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
      { name: 'HTML', icon: SiHtml5, color: '#E34F26' },
      { name: 'React', icon: SiReact, color: '#61DAFB' },
      { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
    ],
  },
  {
    category: 'Backend',
    colSpan: 1,
    items: [
      { name: 'Python', icon: SiPython, color: '#3776AB' },
      { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
      { name: 'Django', icon: SiDjango, color: '#0FA47A' },
      { name: 'Flask', icon: SiFlask, color: 'currentColor' },
    ],
  },
  {
    category: 'Infrastructure',
    colSpan: 3,
    items: [
      { name: 'Git', icon: SiGit, color: '#F05032' },
      { name: 'Docker', icon: SiDocker, color: '#2496ED' },
      { name: 'PostgreSQL', icon: SiPostgresql, color: '#31648C' },
      { name: 'MySQL', icon: SiMysql, color: '#4479A1' },
      { name: 'Playwright', icon: PlaywrightIcon, color: '#2EAD33' },
    ],
  },
]
