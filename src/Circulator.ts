import Cycle from './Cycle'

export default class Circulator<T> {
  readonly size: number
  readonly cycle: Cycle<T>

  /**
   * Wrap an iterable and allow cycling its elements infinitely
   */
  constructor(iterable: Iterable<T>) {
    const items = Array.isArray(iterable) ? iterable : Array.from(iterable)
    this.size = items.length
    this.cycle = Cycle(items)
    // Init newborn generator
    this.cycle.next()
  }

  *[Symbol.iterator]() {
    yield* Array.from(Array(this.size), (_, i) => this.step(+!!i))
    // Reset to start
    this.next()
  }

  /**
   * Step through the cycle
   */
  step(n: number) {
    return this.cycle.next(n).value
  }

  current() {
    return this.step(0)
  }

  prev() {
    return this.step(-1)
  }
  
  next() {
    return this.step(1)
  }
}
