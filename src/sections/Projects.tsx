import { Section } from '@/components/Section'
import {
  Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle,
} from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { projects } from '@/data/projects'
import { ExternalLink, Github } from 'lucide-react'

export function Projects() {
  const featuredProjects = projects.filter((p) => p.featured)
  if (featuredProjects.length === 0) return null

  return (
    <Section id="projects" className="bg-muted/50">
      {/* Centered container with consistent max width */}
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="mb-12 text-center text-3xl font-bold">Featured Projects</h2>

        {/* Responsive, centered grid */}
        <div
          className="
            grid gap-8
            justify-center
            [grid-template-columns:repeat(auto-fit,minmax(320px,1fr))]
          "
        >
          {featuredProjects.map((project) => (
            <Card key={project.id} className="flex h-full flex-col hover:shadow-lg transition-shadow">
              {project.imageUrl && (
                <div className="overflow-hidden rounded-t-lg">
                  <img
                    src={project.imageUrl}
                    alt={project.imageAlt || project.title}
                    className="h-full w-full object-cover transition-transform duration-300 hover:scale-[1.03]"
                    loading="lazy"
                    style={{ aspectRatio: '16/9' }}
                  />
                </div>
              )}

              <CardHeader>
                <CardTitle className="text-lg font-bold">{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>

              <CardContent className="flex flex-1 flex-col gap-4">
                <div>
                  <h3 className="mb-2 text-sm font-semibold">Problem</h3>
                  <p className="text-sm text-muted-foreground">{project.problem}</p>
                </div>

                <div>
                  <h3 className="mb-2 text-sm font-semibold">Solution</h3>
                  <p className="text-sm text-muted-foreground">{project.solution}</p>
                </div>

                <div>
                  <h3 className="mb-2 text-sm font-semibold">Technologies</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="outline">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {project.outcomes && (
                  <div>
                    <h3 className="mb-2 text-sm font-semibold">Outcomes</h3>
                    <p className="text-sm text-muted-foreground">{project.outcomes}</p>
                  </div>
                )}
              </CardContent>

              <CardFooter className="flex gap-2">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View ${project.title} live site`}
                  >
                    <Button variant="outline" size="sm">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Site
                    </Button>
                  </a>
                )}
                {project.sourceUrl && (
                  <a
                    href={project.sourceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View ${project.title} source code`}
                  >
                    <Button variant="outline" size="sm">
                      <Github className="mr-2 h-4 w-4" />
                      Source
                    </Button>
                  </a>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </Section>
  )
}
