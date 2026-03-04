import { describe, it, expect } from 'vitest'
import { skills } from './skills'

describe('skills data structure', () => {
  it('has exactly 3 categories', () => {
    expect(skills).toHaveLength(3)
  })

  it('colSpan values sum to a multiple of 3 (fits the 3-column bento grid)', () => {
    const total = skills.reduce((sum, g) => sum + g.colSpan, 0)
    expect(total % 3).toBe(0)
  })

  it('every colSpan is 1, 2, or 3', () => {
    for (const group of skills) {
      expect([1, 2, 3]).toContain(group.colSpan)
    }
  })

  it('every skill icon is a callable component', () => {
    for (const group of skills) {
      for (const item of group.items) {
        expect(typeof item.icon).toBe('function')
      }
    }
  })

  it('every skill color is either "currentColor" or a hex color string', () => {
    const hexOrCurrent = /^(currentColor|#[0-9A-Fa-f]{3,8})$/
    for (const group of skills) {
      for (const item of group.items) {
        expect(item.color).toMatch(hexOrCurrent)
      }
    }
  })

  it('every skill name is a non-empty string', () => {
    for (const group of skills) {
      for (const item of group.items) {
        expect(typeof item.name).toBe('string')
        expect(item.name.length).toBeGreaterThan(0)
      }
    }
  })

  it('has Frontend as first category with colSpan 2 and 7 items', () => {
    expect(skills[0].category).toBe('Frontend')
    expect(skills[0].colSpan).toBe(2)
    expect(skills[0].items).toHaveLength(7)
  })

  it('has Backend as second category with colSpan 1 and 5 items', () => {
    expect(skills[1].category).toBe('Backend')
    expect(skills[1].colSpan).toBe(1)
    expect(skills[1].items).toHaveLength(5)
  })

  it('has Infrastructure as third category with colSpan 3 and 7 items', () => {
    expect(skills[2].category).toBe('Infrastructure')
    expect(skills[2].colSpan).toBe(3)
    expect(skills[2].items).toHaveLength(7)
  })

  it('all 19 skills are present across categories', () => {
    const total = skills.reduce((sum, g) => sum + g.items.length, 0)
    expect(total).toBe(19)
  })
})
