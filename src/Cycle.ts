/**
 * A generator for cycling an array in both directions
 */
class Cycle<T> {
  static * create<T>(items: T[]): Cycle<T> {
    const len = items.length
    let i = 0
    while (true) {
      i = (len + i + (yield items[i])) % len
    }
  }

  constructor(items: T[]) {
    return new.target.create(items)
  }
}

interface Cycle<T> extends IterableIterator<T> {}

export default Cycle
