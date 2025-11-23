import { motion } from 'framer-motion'
import { Badge } from '@/components/ui/badge'
import { Heading } from '@/components/typography'
import { TYPOGRAPHY } from '@/lib/constants'
import { STYLES } from '@/lib/constants'
import type { EducationData, ExperienceData } from '@/lib/types'

interface BulletListProps {
  items: string[]
  delay: number
}

function BulletList({ items, delay }: BulletListProps) {
  return (
    <ul className="space-y-2.5">
      {items.map((item, i) => (
        <motion.li
          key={i}
          className="flex items-start text-[clamp(0.75rem,2vw,1rem)] leading-relaxed"
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: delay + i * 0.06 }}
        >
          <span className={STYLES.BULLET}>•</span>
          <span className="flex-1">{item}</span>
        </motion.li>
      ))}
    </ul>
  )
}

interface BadgeGridProps {
  items: string[]
  delay: number
  variant?: 'secondary' | 'outline'
}

function BadgeGrid({ items, delay, variant = 'secondary' }: BadgeGridProps) {
  return (
    <div className="flex flex-wrap gap-[clamp(0.5rem,1.5vw,0.625rem)]">
      {items.map((item, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0.85, y: 4 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: delay + i * 0.05 }}
        >
          <Badge
            variant={variant}
            className="rounded-full px-[clamp(0.625rem,2vw,0.75rem)] py-[clamp(0.25rem,1vw,0.375rem)] text-[clamp(0.75rem,2vw,0.875rem)] font-medium"
          >
            {item}
          </Badge>
        </motion.div>
      ))}
    </div>
  )
}

interface ContentSectionProps {
  title: string
  delay: number
  children: React.ReactNode
}

function ContentSection({ title, delay, children }: ContentSectionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay }}
    >
      <Heading
        level={4}
        className={`mb-[clamp(0.5rem,1.5vw,0.75rem)] text-[clamp(0.875rem,2.5vw,1.125rem)] font-bold ${TYPOGRAPHY.COLOR.MUTED_OPACITY}`}
      >
        {title}
      </Heading>
      {children}
    </motion.div>
  )
}

interface EducationContentProps {
  data: EducationData
}

export function EducationContent({ data }: EducationContentProps) {
  return (
    <>
      {data.details && data.details.length > 0 && (
        <ContentSection title="Highlights" delay={0.3}>
          <BulletList items={data.details} delay={0.3} />
        </ContentSection>
      )}

      {data.activities && data.activities.length > 0 && (
        <ContentSection title="Activities" delay={0.4}>
          <BulletList items={data.activities} delay={0.4} />
        </ContentSection>
      )}

      {data.grades && data.grades.length > 0 && (
        <ContentSection title="Grades" delay={0.5}>
          <BulletList items={data.grades} delay={0.5} />
        </ContentSection>
      )}

      {data.majors && data.majors.length > 0 && (
        <ContentSection title="Majors" delay={0.6}>
          <BadgeGrid items={data.majors} delay={0.6} />
        </ContentSection>
      )}

      {((data.programmingLanguages && data.programmingLanguages.length > 0) || 
        (data.developmentTools && data.developmentTools.length > 0)) && (
        <div className="space-y-4">
          {data.programmingLanguages && data.programmingLanguages.length > 0 && (
            <ContentSection title="Programming Languages" delay={0.7}>
              <BadgeGrid
                items={data.programmingLanguages}
                delay={0.7}
                variant="outline"
              />
            </ContentSection>
          )}
          {data.developmentTools && data.developmentTools.length > 0 && (
            <ContentSection title="Tools & Frameworks" delay={0.8}>
              <BadgeGrid
                items={data.developmentTools}
                delay={0.8}
                variant="outline"
              />
            </ContentSection>
          )}
        </div>
      )}
    </>
  )
}

interface ExperienceContentProps {
  data: ExperienceData
}

export function ExperienceContent({ data }: ExperienceContentProps) {
  return (
    <>
      {data.achievements && data.achievements.length > 0 && (
        <ContentSection title="Achievements" delay={0.3}>
          <BulletList items={data.achievements} delay={0.3} />
        </ContentSection>
      )}

      {data.technologies && data.technologies.length > 0 && (
        <ContentSection title="Technologies" delay={0.4}>
          <BadgeGrid items={data.technologies} delay={0.4} variant="outline" />
        </ContentSection>
      )}
    </>
  )
}

