import { useEffect, useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion'
import { Button } from '../ui/button'
import { DarkModeToggle } from './DarkModeToggle'
import { useScrollToSection } from '@/hooks'
import { mobileMenuSlide, backdropFade, getAnimationVariants } from '@/lib/animations'
import { NAVIGATION, SECTION_IDS, EASE_OUT_EXPO } from '@/lib/constants'

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')
  const [hidden, setHidden] = useState(false)
  const [hasScrolled, setHasScrolled] = useState(false)
  const scrollToSection = useScrollToSection()
  const { scrollY } = useScroll()
  const lastY = useRef(0)

  useMotionValueEvent(scrollY, 'change', latest => {
    const delta = latest - lastY.current
    lastY.current = latest
    setHasScrolled(latest > 50)
    if (latest < 100) {
      setHidden(false)
    } else if (delta > 8) {
      setHidden(true)
    } else if (delta < -8) {
      setHidden(false)
    }
  })

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
        className="fixed left-0 right-0 top-0 z-50 flex justify-center px-4 pt-4"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: hidden ? -100 : 0, opacity: hidden ? 0 : 1 }}
        transition={{ duration: 0.35, ease: EASE_OUT_EXPO }}
      >
        <div
          className={`flex items-center gap-1 rounded-full border px-2 transition-all duration-400 ${
            hasScrolled
              ? 'border-border/60 bg-background/85 shadow-premium-md backdrop-blur-nav'
              : 'border-transparent bg-background/40 backdrop-blur supports-[backdrop-filter]:bg-background/30'
          }`}
        >
          {/* Brand */}
          <Link
            to={`#${SECTION_IDS.HERO}`}
            onClick={e => {
              e.preventDefault()
              handleScrollToSection(SECTION_IDS.HERO)
            }}
            className="rounded-full px-4 py-2.5 font-display text-sm font-bold tracking-tight transition-colors hover:text-accent"
            aria-label="Home"
          >
            YS
          </Link>

          {/* Desktop links */}
          <div className="hidden items-center gap-0.5 sm:flex">
            {NAVIGATION.ITEMS.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.06, ease: EASE_OUT_EXPO }}
              >
                <Link
                  to={`#${item.id}`}
                  onClick={e => {
                    e.preventDefault()
                    handleScrollToSection(item.id)
                  }}
                  className={`relative rounded-full px-3.5 py-2 text-[13px] font-medium transition-all duration-300 ${
                    activeSection === item.id
                      ? 'text-foreground'
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  {item.label}
                  {activeSection === item.id && (
                    <motion.div
                      className="absolute inset-0 rounded-full bg-accent/8"
                      layoutId="activeNav"
                      initial={false}
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="ml-1 flex items-center gap-1">
            <DarkModeToggle />

            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="sm"
              className="h-8 w-8 rounded-full p-0 sm:hidden"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
              aria-expanded={isOpen}
            >
              <motion.div animate={{ rotate: isOpen ? 90 : 0 }} transition={{ duration: 0.2 }}>
                {isOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
              </motion.div>
            </Button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile backdrop */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-background/80 backdrop-blur-sm sm:hidden"
            initial="closed"
            animate="open"
            exit="closed"
            variants={getAnimationVariants(backdropFade)}
            onClick={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Mobile drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed bottom-0 right-0 top-16 z-40 w-64 border-l border-border bg-card shadow-premium-lg sm:hidden"
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
                  transition={{ delay: index * 0.06, ease: EASE_OUT_EXPO }}
                >
                  <Link
                    to={`#${item.id}`}
                    onClick={e => {
                      e.preventDefault()
                      handleScrollToSection(item.id)
                    }}
                    className={`block rounded-lg px-4 py-3 text-sm font-medium transition-all duration-300 ${
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
