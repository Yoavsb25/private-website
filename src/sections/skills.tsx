import { Section } from '@/components/Section'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
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

const PlaywrightIcon = (props: { className?: string }) => (
  <img
    src={PlaywrightImg}
    alt="Playwright"
    className={props.className}
  />
)

type SkillItem = {
  name: string
  icon: React.ComponentType<{ className?: string; style?: React.CSSProperties }>
  color: string
}

const skills: { category: string; items: SkillItem[] }[] = [
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
      {name: 'playwright', icon: PlaywrightIcon, color: '#000000'}
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

export function Skills() {
  return (
    <Section id="skills">
      <div className="mx-auto max-w-6xl text-center">
        <h2 className="mb-12 text-3xl font-bold">Programming Languages &amp; Tools</h2>

        <div className="grid gap-8 md:grid-cols-3">
          {skills.map((group, i) => (
            <Card key={i} className="border-border/50 bg-background/40 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-lg font-semibold">{group.category}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap justify-center gap-5 pt-3">
                  {group.items.map(({ name, icon: Icon, color }) => (
                    <div key={name} className="flex flex-col items-center space-y-2 text-center">
                      <div className="flex h-14 w-14 items-center justify-center rounded-xl border border-border bg-card shadow-sm transition-transform hover:scale-105">
                        <Icon className="h-7 w-7" style={{ color }} />
                      </div>
                      <p className="text-sm text-foreground/80">{name}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </Section>
  )
}
