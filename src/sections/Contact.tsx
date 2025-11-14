import { Section } from '@/components/Section'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader } from '@/components/ui/card'
import { contact } from '@/data/contact'
import { Mail, Linkedin, Github, ExternalLink } from 'lucide-react'

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Mail,
  Linkedin,
  Github,
  ExternalLink,
}

function getIcon(iconName?: string) {
  return iconMap[iconName || 'ExternalLink'] || ExternalLink
}

export function Contact() {
  if (contact.methods.length === 0) return null

  return (
    <Section id="contact" className="bg-muted/30">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 text-center space-y-10">
        {/* Header */}
        <div>
          <h2 className="text-3xl font-bold mb-4">Get In Touch</h2>
          {contact.availability && (
            <p className="text-muted-foreground text-lg">{contact.availability}</p>
          )}
        </div>

        {/* Contact Cards */}
        <div
          className="
            grid gap-6 justify-center
            [grid-template-columns:repeat(auto-fit,minmax(280px,1fr))]
          "
        >
          {contact.methods.map((method, index) => {
            const Icon = getIcon(method.icon)
            const href =
              method.type === 'email' ? `mailto:${method.value}` : method.value

            return (
              <Card
                key={index}
                className="flex flex-col items-center justify-between hover:shadow-lg transition-shadow"
              >
                <CardHeader className="flex flex-col items-center">
                  <div className="flex items-center gap-2 text-lg font-semibold">
                    <Icon className="h-6 w-6 text-primary" />
                    {method.label}
                  </div>
                  {method.available !== undefined && (
                    <CardDescription className="text-sm text-muted-foreground">
                      {method.available ? 'Available' : 'Not available'}
                    </CardDescription>
                  )}
                </CardHeader>

                <CardContent className="w-full">
                  <a
                    href={href}
                    target={method.type === 'email' ? undefined : '_blank'}
                    rel={
                      method.type === 'email'
                        ? undefined
                        : 'noopener noreferrer'
                    }
                    aria-label={`Contact via ${method.label}`}
                  >
                    <Button
                      variant="outline"
                      className="w-full hover:scale-[1.03] transition-transform"
                    >
                      {method.type === 'email' ? 'Send Email' : 'Visit Profile'}
                    </Button>
                  </a>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Response Time */}
        {contact.responseTime && (
          <p className="text-sm text-muted-foreground">
            Response time: {contact.responseTime}
          </p>
        )}
      </div>
    </Section>
  )
}
