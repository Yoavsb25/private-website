import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '../ui/button'
import { DarkModeToggle } from './DarkModeToggle'
import { useScrollPosition, useScrollToSection } from '@/hooks'
import { mobileMenuSlide, backdropFade, getAnimationVariants } from '@/lib/animations'
import { NAVIGATION, SECTION_IDS, EASE_OUT_EXPO } from '@/lib/constants'

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')
  const hasScrolled = useScrollPosition(NAVIGATION.SCROLL_THRESHOLD)
  const scrollToSection = useScrollToSection()

  const handleScrollToSection = (id: string) => {
    scrollToSection(id)
    setIsOpen(false)
  }

  useEffect(() => {
    const handleScroll = () => {
      const sections = Object.values(SECTION_IDS)
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1)
      if (hash) {
        scrollToSection(hash)
      }
    }

    window.addEventListener('hashchange', handleHashChange)
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [scrollToSection])

  return (
    <>
      <motion.nav
        className={`sticky top-0 z-50 w-full border-b transition-all duration-400 ${
          hasScrolled
            ? 'border-border/60 bg-background/90 backdrop-blur-nav shadow-premium-sm'
            : 'border-transparent bg-background/60 backdrop-blur supports-[backdrop-filter]:bg-background/40'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.4, ease: EASE_OUT_EXPO }}
      >
        <div className="container mx-auto px-[clamp(0.75rem,2vw,1rem)]">
          <div className="flex h-[clamp(3.5rem,4vw,4rem)] items-center justify-between">
            <motion.div
              className="flex items-center"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <Link
                to={`#${SECTION_IDS.HERO}`}
                onClick={e => {
                  e.preventDefault()
                  handleScrollToSection(SECTION_IDS.HERO)
                }}
                className="font-display text-[clamp(1.125rem,2.5vw,1.25rem)] font-bold tracking-tight transition-colors hover:text-accent"
                aria-label="Home"
              >
                Yoav Sborovsky
              </Link>
            </motion.div>

            <div className="hidden sm:flex items-center gap-[clamp(1.25rem,2.5vw,2rem)]">
              {NAVIGATION.ITEMS.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: index * 0.08,
                    ease: EASE_OUT_EXPO,
                  }}
                >
                  <Link
                    to={`#${item.id}`}
                    onClick={e => {
                      e.preventDefault()
                      handleScrollToSection(item.id)
                    }}
                    className={`text-sm font-medium transition-all duration-300 relative px-2 py-1 ${
                      activeSection === item.id
                        ? 'text-foreground'
                        : 'text-muted-foreground hover:text-foreground'
                    }`}
                  >
                    {item.label}
                    {activeSection === item.id && (
                      <motion.div
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent rounded-full"
                        layoutId="activeSection"
                        initial={false}
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                  </Link>
                </motion.div>
              ))}
              <DarkModeToggle />
            </div>

            <div className="sm:hidden flex items-center gap-2">
              <DarkModeToggle />
              <Button
                variant="ghost"
                size="sm"
                className="h-[clamp(2rem,5vw,2.5rem)] w-[clamp(2rem,5vw,2.5rem)] p-0"
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Toggle menu"
                aria-expanded={isOpen}
              >
                <motion.div animate={{ rotate: isOpen ? 90 : 0 }} transition={{ duration: 0.2 }}>
                  {isOpen ? (
                    <X className="w-[clamp(1rem,3vw,1.5rem)] h-[clamp(1rem,3vw,1.5rem)]" />
                  ) : (
                    <Menu className="w-[clamp(1rem,3vw,1.5rem)] h-[clamp(1rem,3vw,1.5rem)]" />
                  )}
                </motion.div>
              </Button>
            </div>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-background/80 backdrop-blur-sm z-40 sm:hidden"
            initial="closed"
            animate="open"
            exit="closed"
            variants={getAnimationVariants(backdropFade)}
            onClick={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed top-[clamp(3.5rem,4vw,4rem)] right-0 bottom-0 w-[clamp(16rem,40vw,18rem)] bg-card border-l border-border z-40 sm:hidden shadow-premium-lg"
            initial="closed"
            animate="open"
            exit="closed"
            variants={getAnimationVariants(mobileMenuSlide)}
          >
            <div className="flex flex-col space-y-1 p-4">
              {NAVIGATION.ITEMS.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    delay: index * 0.08,
                    ease: EASE_OUT_EXPO,
                  }}
                >
                  <Link
                    to={`#${item.id}`}
                    onClick={e => {
                      e.preventDefault()
                      handleScrollToSection(item.id)
                    }}
                    className={`block px-4 py-3 text-sm font-medium rounded-lg transition-all duration-300 ${
                      activeSection === item.id
                        ? 'bg-accent text-accent-foreground'
                        : 'text-foreground hover:bg-muted'
                    }`}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
