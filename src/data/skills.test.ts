import { describe, it, expect } from 'vitest'
import { skills } from './skills'

describe('skills data', () => {
  it('has exactly 3 categories', () => {
    expect(skills).toHaveLength(3)
  })

  it('has Frontend as first category with colSpan 2', () => {
    expect(skills[0].category).toBe('Frontend')
    expect(skills[0].colSpan).toBe(2)
    expect(skills[0].items).toHaveLength(7)
  })

  it('has Backend as second category with colSpan 1', () => {
    expect(skills[1].category).toBe('Backend')
    expect(skills[1].colSpan).toBe(1)
    expect(skills[1].items).toHaveLength(5)
  })

  it('has Infrastructure as third category with colSpan 3', () => {
    expect(skills[2].category).toBe('Infrastructure')
    expect(skills[2].colSpan).toBe(3)
    expect(skills[2].items).toHaveLength(7)
  })

  it('every skill item has name, icon, and color', () => {
    for (const group of skills) {
      for (const item of group.items) {
        expect(item.name).toBeTruthy()
        expect(item.icon).toBeDefined()
        expect(item.color).toBeTruthy()
      }
    }
  })

  it('Frontend contains expected skills', () => {
    const names = skills[0].items.map(i => i.name)
    expect(names).toContain('React')
    expect(names).toContain('TypeScript')
    expect(names).toContain('Next.js')
    expect(names).toContain('Tailwind CSS')
    expect(names).toContain('JavaScript')
    expect(names).toContain('HTML')
    expect(names).toContain('CSS')
  })

  it('Backend contains expected skills', () => {
    const names = skills[1].items.map(i => i.name)
    expect(names).toContain('Python')
    expect(names).toContain('Java')
    expect(names).toContain('Node.js')
    expect(names).toContain('Django')
    expect(names).toContain('Flask')
  })

  it('Infrastructure contains expected skills', () => {
    const names = skills[2].items.map(i => i.name)
    expect(names).toContain('Git')
    expect(names).toContain('Docker')
    expect(names).toContain('PostgreSQL')
    expect(names).toContain('MySQL')
    expect(names).toContain('SQLite')
    expect(names).toContain('Jenkins')
    expect(names).toContain('Playwright')
  })
})
