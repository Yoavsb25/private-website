import { HashRouter } from 'react-router-dom'
import { ErrorBoundary } from './components/ErrorBoundary'
import { Navigation, ScrollProgress, ScrollToTop } from './components/features'
import { Hero } from './sections/Hero'
import { Timeline } from './sections/Timeline'
import { Projects } from './sections/Projects'
import { Contact } from './sections/Contact'
import { Skills } from './sections/skills'

function App() {
  return (
    <ErrorBoundary>
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
          <ScrollToTop />
        </div>
      </HashRouter>
    </ErrorBoundary>
  )
}

export default App

