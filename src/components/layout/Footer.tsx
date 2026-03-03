import { type ReactElement } from 'react'
import { Github, Linkedin } from 'lucide-react'
import { portfolio } from '@/data/portfolio'

export function Footer(): ReactElement {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-border/50 py-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 sm:flex-row sm:px-6 lg:px-8">
        <p className="text-sm text-muted-foreground">
          Designed &amp; built by{' '}
          <span className="font-semibold text-foreground">{portfolio.name}</span> &copy; {year}
        </p>

        <div className="flex items-center gap-4">
          {portfolio.socialLinks?.linkedin && (
            <a
              href={portfolio.socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              <Linkedin className="h-4 w-4" />
            </a>
          )}
          {portfolio.socialLinks?.github && (
            <a
              href={portfolio.socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              <Github className="h-4 w-4" />
            </a>
          )}
        </div>
      </div>
    </footer>
  )
}
