import EventQueue from './event-queue'

describe('EventQueue', () => {
  let eventQueue: EventQueue<{ message: { body: string } }>

  beforeEach(() => {
    eventQueue = new EventQueue()
  })

  it('should allow adding and emitting events', () => {
    let actual: string | undefined
    eventQueue.on('message', ({ body }) => (actual = body))
    const expected = 'Hello'
    eventQueue.emit('message', { body: expected })

    expect(actual).toBe(expected)
  })

  it('should allow remiving events', () => {
    const initial = 'a'
    let actual: string = initial
    eventQueue.on('message', ({ body }) => (actual = body))
    const expected = initial
    eventQueue.off('message')
    eventQueue.emit('message', { body: 'b' })

    expect(actual).toBe(expected)
  })
})

export {}
