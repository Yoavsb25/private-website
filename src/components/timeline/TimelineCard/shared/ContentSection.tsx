/**
 * ContentSection component for organizing content with titles
 */
import { motion } from 'framer-motion'
import { Heading } from '@/components/typography'

export interface ContentSectionProps {
  title: string
  delay: number
  children: React.ReactNode
}

export function ContentSection({ title, delay, children }: ContentSectionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay }}
    >
      <Heading
        level={4}
        className="mb-[clamp(0.5rem,1.5vw,0.75rem)] text-[clamp(0.875rem,2.5vw,1.125rem)] font-bold text-muted-foreground"
      >
        {title}
      </Heading>
      {children}
    </motion.div>
  )
}
