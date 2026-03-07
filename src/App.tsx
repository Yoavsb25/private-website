import { useState, lazy, Suspense } from 'react'
import { HashRouter } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { ErrorBoundary } from './components/ErrorBoundary'
import { Navigation, ScrollProgress, ScrollToTop, LoadingScreen } from './components/features'
import { Footer } from './components/layout'
import { useLenis } from './hooks/scroll'
import { ANIMATION_CONFIG } from './lib/constants'
import { Hero } from './sections/Hero'
import { Contact } from './sections/Contact'
import { Skills } from './sections/Skills'

const Timeline = lazy(() => import('./sections/Timeline').then(m => ({ default: m.Timeline })))
const Projects = lazy(() => import('./sections/Projects').then(m => ({ default: m.Projects })))

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
            transition={{ duration: ANIMATION_CONFIG.DURATION.MEDIUM, ease: ANIMATION_CONFIG.EASE.IN_OUT }}
          >
            <HashRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
              <div className="min-h-screen bg-background transition-colors duration-300">
                <ScrollProgress />
                <Navigation />
                <main>
                  <Hero />
                  <Skills />
                  <Suspense fallback={null}>
                    <Timeline />
                  </Suspense>
                  <Suspense fallback={null}>
                    <Projects />
                  </Suspense>
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
