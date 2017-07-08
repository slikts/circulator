/**
 * A generator for cycling an array in both directions
 */
declare const Cycle: <T>(items: T[]) => IterableIterator<T>;
declare type Cycle<T> = IterableIterator<T>;
export default Cycle;
