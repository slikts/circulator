'use strict'

const cycle = require('./cycle')

class Circulator {
  /**
   * Wrap an iterable and allow cycling its elements infinitely
   * @param  {Iterable} iterable Iterable to cycle
   * @return {Circulator}
   */
  constructor(iterable) {
    const arr = iterable ? [...iterable] : []
    this.size = arr.length
    this.cycle = cycle(arr)
    // Init newborn generator
    this.cycle.next()
  }
  *[Symbol.iterator]() {
    // Same as return arr[Symbol.iterator]()
    yield* Array.from(Array(this.size), (_, i) => this.step(+!!i))
    // Reset to start
    this.next()
  }
  /**
   * Step through the cycle
   * @param  {number} n Number of steps
   * @return {}
   */
  step(n) {
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

module.exports = {Circulator}
