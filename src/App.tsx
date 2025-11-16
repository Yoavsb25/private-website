import { HashRouter } from 'react-router-dom'
import { ErrorBoundary } from './components/ErrorBoundary'
import { Navigation } from './components/Navigation'
import { ScrollProgress } from './components/ScrollProgress'
import { ScrollToTop } from './components/ScrollToTop'
import { Hero } from './sections/Hero'
import { Education } from './sections/Education'
import { Experience } from './sections/Experience'
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
            <Education />
            <Experience />
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

