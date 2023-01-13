import hasProp from './has-prop'

describe('createHas', () => {
  it('should detect if an object has a property', () => {
    const key = 'key'
    const sample = { [key]: true }
    const actual = hasProp(sample, key)
    const expected = true

    expect(actual).toBe(expected)
  })

  it('should detect if an object does NOT have a property', () => {
    const key = 'key'
    const sample = { [key]: true }
    const actual = hasProp(sample, key)
    const expected = false

    expect(actual).toBe(expected)
  })

  it('should detect if an object has a property, for arrays', () => {
    const sample = ['test']
    const actual = hasProp(sample, 0)
    const expected = true

    expect(actual).toBe(expected)
  })

  it('should detect if an object does NOT have a property, for arrays', () => {
    const sample = ['test']
    const actual = hasProp(sample, sample.length)
    const expected = false
    expect(actual).toBe(expected)
  })
})

export {}
