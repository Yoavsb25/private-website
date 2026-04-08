import { useState } from 'react'
import { HashRouter } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { ErrorBoundary } from './components/ErrorBoundary'
import { Navigation, ScrollProgress, ScrollToTop, LoadingScreen } from './components/features'
import { Footer } from './components/layout'
import { useLenis } from './hooks/scroll'
import { Hero } from './sections/Hero'
import { Timeline } from './sections/Timeline'
import { Projects } from './sections/Projects'
import { Contact } from './sections/Contact'
import { Skills } from './sections/Skills'

function SkipToContent() {
  return (
    <a
      href="#hero"
      className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[99999] focus:rounded-md focus:bg-accent focus:px-4 focus:py-2 focus:text-accent-foreground focus:shadow-lg"
    >
      Skip to content
    </a>
  )
}

function App() {
  useLenis()
  const [isLoading, setIsLoading] = useState(true)

  return (
    <ErrorBoundary>
      <LoadingScreen isVisible={isLoading} onComplete={() => setIsLoading(false)} />
      <AnimatePresence>
        {!isLoading && (
          <motion.div
            key="app"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <HashRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
              <div className="min-h-screen bg-background transition-colors duration-300">
                <SkipToContent />
                <ScrollProgress />
                <Navigation />
                <main>
                  <Hero />
                  <Skills />
                  <Timeline />
                  <Projects />
                  <Contact />
                </main>
                <Footer />
                <ScrollToTop />
              </div>
            </HashRouter>
          </motion.div>
        )}
      </AnimatePresence>
    </ErrorBoundary>
  )
}

export default App
