/**
 * A generator for cycling an array in both directions
 */
const Cycle = function* <T>(items: T[]): Cycle<T> {
  const len = items.length
  let i = 0
  while (true) {
    i = (len + i + ((yield items[i]) || 1)) % len
  }
}

type Cycle<T> = IterableIterator<T>

export default Cycle
