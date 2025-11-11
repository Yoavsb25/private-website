import { Section } from '@/components/Section'
import { Badge } from '@/components/ui/badge'
import { portfolio } from '@/data/portfolio'

export function Hero() {
  return (
    <Section id="hero" className="flex items-center justify-center">
      <div className="max-w-4xl mx-auto text-center space-y-6">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
          {portfolio.name}
        </h1>
        <p className="text-xl sm:text-2xl text-muted-foreground">
          {portfolio.title}
        </p>
        <div className="flex flex-wrap justify-center gap-2">
          {portfolio.specialization.map((spec) => (
            <Badge key={spec} variant="secondary">
              {spec}
            </Badge>
          ))}
        </div>
        <p className="text-lg text-foreground max-w-2xl mx-auto leading-relaxed">
          {portfolio.bio}
        </p>
        {portfolio.problemSolving && (
          <p className="text-base text-muted-foreground max-w-2xl mx-auto">
            {portfolio.problemSolving}
          </p>
        )}
      </div>
    </Section>
  )
}

