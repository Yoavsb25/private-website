import { HashRouter } from 'react-router-dom'
import { ErrorBoundary } from './components/ErrorBoundary'
import { Navigation } from './components/Navigation'
import { Hero } from './sections/Hero'
import { Projects } from './sections/Projects'
import { Contact } from './sections/Contact'

function App() {
  return (
    <ErrorBoundary>
      <HashRouter>
        <div className="min-h-screen bg-background">
          <Navigation />
          <main>
            <Hero />
            <Projects />
            <Contact />
          </main>
        </div>
      </HashRouter>
    </ErrorBoundary>
  )
}

export default App

