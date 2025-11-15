import { Section } from '@/components/Section'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { skills } from '@/data/skills'

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