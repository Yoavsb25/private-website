import { HashRouter } from 'react-router-dom'
import { ErrorBoundary } from './components/ErrorBoundary'
import { Navigation } from './components/Navigation'
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
        <div className="min-h-screen bg-background">
          <Navigation />
          <main>
            <Hero />
            <Skills />
            <Education />
            <Experience />
            <Projects />
            <Contact />
          </main>
        </div>
      </HashRouter>
    </ErrorBoundary>
  )
}

export default App

