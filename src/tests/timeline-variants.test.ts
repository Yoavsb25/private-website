import { describe, it, expect } from 'vitest'
import { EVEN_ITEM, ODD_ITEM } from '../components/timeline/variants'

describe('timeline item variants', () => {
  it('EVEN_ITEM and ODD_ITEM are different objects', () => {
    expect(EVEN_ITEM).not.toBe(ODD_ITEM)
  })

  it('EVEN_ITEM has hidden and visible keys', () => {
    expect(EVEN_ITEM).toHaveProperty('hidden')
    expect(EVEN_ITEM).toHaveProperty('visible')
  })

  it('ODD_ITEM has hidden and visible keys', () => {
    expect(ODD_ITEM).toHaveProperty('hidden')
    expect(ODD_ITEM).toHaveProperty('visible')
  })
})
