import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Moon, Sun } from 'lucide-react'
import { Button } from './ui/button'
import { prefersReducedMotion } from '@/lib/animations'

export function DarkModeToggle() {
  const [isDark, setIsDark] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    // Check for saved theme preference or default to system preference
    const savedTheme = localStorage.getItem('theme')
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    
    if (savedTheme) {
      setIsDark(savedTheme === 'dark')
      document.documentElement.classList.toggle('dark', savedTheme === 'dark')
    } else {
      setIsDark(systemPrefersDark)
      document.documentElement.classList.toggle('dark', systemPrefersDark)
    }
  }, [])

  const toggleTheme = () => {
    const newTheme = !isDark
    setIsDark(newTheme)
    document.documentElement.classList.toggle('dark', newTheme)
    localStorage.setItem('theme', newTheme ? 'dark' : 'light')
  }

  if (!mounted) {
    // Return a placeholder to avoid hydration mismatch
    return (
      <Button
        variant="ghost"
        size="sm"
        className="h-9 w-9 p-0"
        aria-label="Toggle dark mode"
      >
        <Sun className="h-5 w-5" />
      </Button>
    )
  }

  return (
    <motion.div
      whileHover={{ scale: prefersReducedMotion() ? 1 : 1.1 }}
      whileTap={{ scale: prefersReducedMotion() ? 1 : 0.9 }}
      transition={{ duration: prefersReducedMotion() ? 0 : 0.2 }}
    >
      <Button
        variant="ghost"
        size="sm"
        onClick={toggleTheme}
        className="h-9 w-9 p-0 relative"
        aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      >
        <motion.div
          initial={false}
          animate={{
            rotate: isDark ? 180 : 0,
            scale: isDark ? 1 : 0,
            opacity: isDark ? 1 : 0,
          }}
          transition={{
            duration: prefersReducedMotion() ? 0 : 0.3,
            ease: 'easeInOut',
          }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <Moon className="h-5 w-5" />
        </motion.div>
        <motion.div
          initial={false}
          animate={{
            rotate: isDark ? 0 : -180,
            scale: isDark ? 0 : 1,
            opacity: isDark ? 0 : 1,
          }}
          transition={{
            duration: prefersReducedMotion() ? 0 : 0.3,
            ease: 'easeInOut',
          }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <Sun className="h-5 w-5" />
        </motion.div>
      </Button>
    </motion.div>
  )
}

