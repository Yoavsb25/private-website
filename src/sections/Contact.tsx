import { Section } from '@/components/Section'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { contact } from '@/data/contact'
import { Mail, Linkedin, Github, ExternalLink } from 'lucide-react'

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Mail,
  Linkedin,
  Github,
  ExternalLink,
}

function getIcon(iconName?: string) {
  if (!iconName) return ExternalLink
  const Icon = iconMap[iconName] || ExternalLink
  return Icon
}

export function Contact() {
  if (contact.methods.length === 0) {
    return null
  }

  return (
    <Section id="contact">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <div>
          <h2 className="text-3xl font-bold mb-4">Get In Touch</h2>
          {contact.availability && (
            <p className="text-muted-foreground">{contact.availability}</p>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {contact.methods.map((method, index) => {
            const Icon = getIcon(method.icon)
            const href =
              method.type === 'email' ? `mailto:${method.value}` : method.value

            return (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon className="h-5 w-5" />
                    {method.label}
                  </CardTitle>
                  {method.available !== undefined && (
                    <CardDescription>
                      {method.available ? 'Available' : 'Not available'}
                    </CardDescription>
                  )}
                </CardHeader>
                <CardContent>
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
                    <Button variant="outline" className="w-full">
                      {method.type === 'email' ? 'Send Email' : 'Visit Profile'}
                    </Button>
                  </a>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {contact.responseTime && (
          <p className="text-sm text-muted-foreground">
            Response time: {contact.responseTime}
          </p>
        )}
      </div>
    </Section>
  )
}

