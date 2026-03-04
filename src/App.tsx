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
            transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
          >
            <HashRouter>
              <div className="min-h-screen bg-background transition-colors duration-300">
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
