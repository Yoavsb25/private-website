import { describe, it, expect } from 'vitest'
import { cardWrapperClass, cardClass } from '../components/timeline/utils'

describe('cardWrapperClass', () => {
  it('positions even cards on the left (mr-auto)', () => {
    expect(cardWrapperClass(true)).toContain('sm:mr-auto')
  })

  it('positions odd cards on the right (ml-auto)', () => {
    expect(cardWrapperClass(false)).toContain('sm:ml-auto')
  })
})

describe('cardClass', () => {
  it('returns base styles without glow when not hovered', () => {
    const result = cardClass(false, 'ring-indigo-500/40')
    expect(result).toContain('cursor-pointer')
    expect(result).toContain('border')
    expect(result).not.toContain('ring-indigo-500/40')
  })

  it('includes glow ring class when hovered', () => {
    const result = cardClass(true, 'ring-indigo-500/40')
    expect(result).toContain('ring-indigo-500/40')
  })

  it('works for education glow class', () => {
    const result = cardClass(true, 'ring-fuchsia-500/40')
    expect(result).toContain('ring-fuchsia-500/40')
  })
})
