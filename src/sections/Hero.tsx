import { Section } from '@/components/Section'
import { Button } from '@/components/ui/button'
import { portfolio } from '@/data/portfolio'
import { Linkedin, Github } from 'lucide-react'
// @ts-expect-error: Image import for usage with bundlers (handled in build pipeline)
import profileImg from '@/public/assets/profile.jpg'

export function Hero() {
  return (
    <Section id="hero" className="flex items-center justify-center min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left Side - Profile Image */}
          <div className="flex justify-center md:justify-start">
            <div className="relative">
              <div className="w-64 h-80 sm:w-72 sm:h-96 rounded-2xl overflow-hidden bg-[#C6D2FF] p-2 shadow-lg">
                <img
                  src={profileImg}
                  alt={portfolio.imageAlt || portfolio.name}
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="space-y-6 text-center md:text-left">
            <p className="text-lg sm:text-xl text-foreground">
              Hello, I'm
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
              {portfolio.name}
            </h1>
            <p className="text-2xl sm:text-3xl font-bold text-foreground">
              {portfolio.title}
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              {portfolio.cvUrl && (
                <a href={portfolio.cvUrl} download className="w-full sm:w-auto">
                  <Button
                    variant="outline"
                    size="lg"
                    className="w-40 h-10"
                  >
                    Download CV
                  </Button>
                </a>
              )}
              <a href="#contact" className="w-full sm:w-auto">
                <Button
                  variant="default"
                  size="lg"
                  className="w-40 h-10"
                >
                  Contact Info
                </Button>
              </a>
            </div>

            {/* Social Media Icons */}
            {portfolio.socialLinks && (
              <div className="flex gap-4 justify-center md:justify-start pt-4">
                {portfolio.socialLinks.linkedin && (
                  <a
                    href={portfolio.socialLinks.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className="w-40 h-10 rounded-lg border border-border flex items-center justify-center hover:bg-accent transition-colors"
                  >
                    <Linkedin className="w-10 h-8 text-blue-600" />
                  </a>
                )}
                {portfolio.socialLinks.github && (
                  <a
                    href={portfolio.socialLinks.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                    className="w-40 h-10 rounded-lg border border-border flex items-center justify-center hover:bg-accent transition-colors"
                  >
                    <Github className="h-10 w-8 text-600" />
                  </a>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </Section>
  )
}