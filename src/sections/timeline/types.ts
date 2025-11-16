export type TimelineType = 'education' | 'experience'
export type FilterType = 'all' | TimelineType

export interface EducationData {
  degree: string
  institution: string
  period?: string
  logoUrl?: string
  activities?: string[]
  details?: string[]
  programmingLanguages?: string[]
  developmentTools?: string[]
  majors?: string[]
  grades?: string[]
}

export interface ExperienceData {
  title: string
  company: string
  period: string
  location: string
  logoUrl?: string
  type?: string
  achievements: string[]
  technologies?: string[]
}

export interface TimelineItem {
  id: string
  type: TimelineType
  year: number
  yearDisplay: string
  data: EducationData | ExperienceData
  index: number
}

export interface TimelinePointProps {
  isActive: boolean
  isHovered: boolean
  index: number
  onClick: () => void
}

export interface TimelineCardProps {
  item: TimelineItem
  isEven: boolean
  isHovered: boolean
  isActive: boolean
  index: number
  onHoverChange: (id: string | null) => void
  onToggleActive: (id: string) => void
}

