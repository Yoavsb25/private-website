import { ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface SectionProps {
  id?: string
  className?: string
  children: ReactNode
}

export function Section({ id, className, children }: SectionProps) {
  return (
    <section
      id={id}
      className={cn('min-h-screen py-16 px-4 sm:px-6 lg:px-8', className)}
    >
      {children}
    </section>
  )
}

