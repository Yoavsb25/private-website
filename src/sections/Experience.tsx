import { Section } from '@/components/Section'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import {experiences} from '@/data/experience'


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

