import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '../ui/button'
import { DarkModeToggle } from './DarkModeToggle'
import { useScrollPosition, useScrollToSection } from '@/hooks'
import { mobileMenuSlide, backdropFade, getAnimationVariants } from '@/lib/animations'
import { NAVIGATION, SECTION_IDS } from '@/lib/constants'

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')
  const hasScrolled = useScrollPosition(NAVIGATION.SCROLL_THRESHOLD)
  const scrollToSection = useScrollToSection()

  const handleScrollToSection = (id: string) => {
    scrollToSection(id)
    setIsOpen(false)
  }

  // Track active section on scroll
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
    handleScroll() // Check initial position
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
  }, [])

  return (
    <>
      <motion.nav
        className={`sticky top-0 z-50 w-full border-b transition-all duration-300 ${
          hasScrolled
            ? 'bg-background/95 backdrop-blur-nav shadow-sm'
            : 'bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="container mx-auto px-4">
          <div className="flex h-16 items-center justify-between">
            <motion.div
              className="flex items-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to={`#${SECTION_IDS.HERO}`}
                onClick={(e) => {
                  e.preventDefault()
                  handleScrollToSection(SECTION_IDS.HERO)
                }}
                className="text-xl font-bold transition-colors hover:text-primary"
                aria-label="Home"
              >
                Yoav Sborovsky
              </Link>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6">
              {NAVIGATION.ITEMS.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    to={`#${item.id}`}
                    onClick={(e) => {
                      e.preventDefault()
                      handleScrollToSection(item.id)
                    }}
                    className={`text-sm font-medium transition-all duration-200 relative px-2 py-1 ${
                      activeSection === item.id
                        ? 'text-primary'
                        : 'text-foreground/70 hover:text-primary'
                    }`}
                  >
                    {item.label}
                    {activeSection === item.id && (
                      <motion.div
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
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

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center gap-2">
              <DarkModeToggle />
              <Button
                variant="ghost"
                size="sm"
                className="h-8 w-8 sm:h-9 sm:w-9 md:h-10 md:w-10 p-0"
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Toggle menu"
                aria-expanded={isOpen}
              >
                <motion.div
                  animate={{ rotate: isOpen ? 90 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {isOpen ? <X className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" /> : <Menu className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />}
                </motion.div>
              </Button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Navigation Backdrop */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-background/80 backdrop-blur-sm z-40 md:hidden"
            initial="closed"
            animate="open"
            exit="closed"
            variants={getAnimationVariants(backdropFade)}
            onClick={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed top-16 right-0 bottom-0 w-64 bg-background border-l z-40 md:hidden shadow-xl"
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
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    to={`#${item.id}`}
                    onClick={(e) => {
                      e.preventDefault()
                      handleScrollToSection(item.id)
                    }}
                    className={`block px-4 py-3 text-sm font-medium rounded-md transition-colors ${
                      activeSection === item.id
                        ? 'bg-primary text-primary-foreground'
                        : 'hover:bg-accent hover:text-accent-foreground'
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

