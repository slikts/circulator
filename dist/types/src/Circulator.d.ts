import Cycle from './Cycle';
export default class Circulator<T> {
    readonly size: number;
    readonly cycle: Cycle<T>;
    /**
     * Wrap an iterable and allow cycling its elements infinitely
     */
    constructor(iterable: Iterable<T>);
    [Symbol.iterator](): IterableIterator<T>;
    /**
     * Step through the cycle
     */
    step(n: number): T;
    current(): T;
    prev(): T;
    next(): T;
}
