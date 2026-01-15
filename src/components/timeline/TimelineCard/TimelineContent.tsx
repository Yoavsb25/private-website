/**
 * TimelineContent components
 * Renders education and experience content with proper structure
 */
import type { EducationData, ExperienceData } from '@/lib/types'
import { BulletList, BadgeGrid, ContentSection } from './shared'
import { ANIMATION_DELAYS, CONTENT_SECTIONS } from '../constants'

interface EducationContentProps {
  data: EducationData
}

export function EducationContent({ data }: EducationContentProps) {
  const hasTechContent =
    (data.programmingLanguages && data.programmingLanguages.length > 0) ||
    (data.developmentTools && data.developmentTools.length > 0)

  return (
    <>
      {data.details && data.details.length > 0 && (
        <ContentSection title={CONTENT_SECTIONS.HIGHLIGHTS} delay={ANIMATION_DELAYS.HIGHLIGHTS}>
          <BulletList items={data.details} delay={ANIMATION_DELAYS.HIGHLIGHTS} />
        </ContentSection>
      )}

      {data.activities && data.activities.length > 0 && (
        <ContentSection title={CONTENT_SECTIONS.ACTIVITIES} delay={ANIMATION_DELAYS.ACTIVITIES}>
          <BulletList items={data.activities} delay={ANIMATION_DELAYS.ACTIVITIES} />
        </ContentSection>
      )}

      {data.grades && data.grades.length > 0 && (
        <ContentSection title={CONTENT_SECTIONS.GRADES} delay={ANIMATION_DELAYS.GRADES}>
          <BulletList items={data.grades} delay={ANIMATION_DELAYS.GRADES} />
        </ContentSection>
      )}

      {data.majors && data.majors.length > 0 && (
        <ContentSection title={CONTENT_SECTIONS.MAJORS} delay={ANIMATION_DELAYS.MAJORS}>
          <BadgeGrid items={data.majors} delay={ANIMATION_DELAYS.MAJORS} />
        </ContentSection>
      )}

      {hasTechContent && (
        <div className="space-y-4">
          {data.programmingLanguages && data.programmingLanguages.length > 0 && (
            <ContentSection
              title={CONTENT_SECTIONS.PROGRAMMING_LANGUAGES}
              delay={ANIMATION_DELAYS.PROGRAMMING_LANGUAGES}
            >
              <BadgeGrid
                items={data.programmingLanguages}
                delay={ANIMATION_DELAYS.PROGRAMMING_LANGUAGES}
                variant="outline"
              />
            </ContentSection>
          )}
          {data.developmentTools && data.developmentTools.length > 0 && (
            <ContentSection
              title={CONTENT_SECTIONS.TOOLS_FRAMEWORKS}
              delay={ANIMATION_DELAYS.TOOLS_FRAMEWORKS}
            >
              <BadgeGrid
                items={data.developmentTools}
                delay={ANIMATION_DELAYS.TOOLS_FRAMEWORKS}
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
        <ContentSection title={CONTENT_SECTIONS.ACHIEVEMENTS} delay={ANIMATION_DELAYS.ACHIEVEMENTS}>
          <BulletList items={data.achievements} delay={ANIMATION_DELAYS.ACHIEVEMENTS} />
        </ContentSection>
      )}

      {data.technologies && data.technologies.length > 0 && (
        <ContentSection title={CONTENT_SECTIONS.TECHNOLOGIES} delay={ANIMATION_DELAYS.TECHNOLOGIES}>
          <BadgeGrid items={data.technologies} delay={ANIMATION_DELAYS.TECHNOLOGIES} variant="outline" />
        </ContentSection>
      )}
    </>
  )
}
