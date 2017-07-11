import Cycle from './Cycle';
export default class Circulator {
    /**
     * Wrap an iterable and allow cycling its elements infinitely
     */
    constructor(iterable) {
        const items = Array.isArray(iterable) ? iterable : Array.from(iterable);
        this.size = items.length;
        this.cycle = Cycle(items);
        // Init newborn generator
        this.cycle.next();
    }
    *[Symbol.iterator]() {
        yield* Array.from(Array(this.size), (_, i) => this.step(+!!i));
        // Reset to start
        this.next();
    }
    /**
     * Step through the cycle
     */
    step(n) {
        return this.cycle.next(n).value;
    }
    current() {
        return this.step(0);
    }
    prev() {
        return this.step(-1);
    }
    next() {
        return this.step(1);
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2lyY3VsYXRvci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9DaXJjdWxhdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sS0FBSyxNQUFNLFNBQVMsQ0FBQTtBQUUzQixNQUFNLENBQUMsT0FBTztJQUlaOztPQUVHO0lBQ0gsWUFBWSxRQUFxQjtRQUMvQixNQUFNLEtBQUssR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxHQUFHLFFBQVEsR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFBO1FBQ3ZFLElBQUksQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQTtRQUN4QixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQTtRQUN6Qix5QkFBeUI7UUFDekIsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQTtJQUNuQixDQUFDO0lBRUQsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUM7UUFDaEIsT0FBTyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxLQUFLLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQTtRQUM5RCxpQkFBaUI7UUFDakIsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFBO0lBQ2IsQ0FBQztJQUVEOztPQUVHO0lBQ0gsSUFBSSxDQUFDLENBQVM7UUFDWixNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFBO0lBQ2pDLENBQUM7SUFFRCxPQUFPO1FBQ0wsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUE7SUFDckIsQ0FBQztJQUVELElBQUk7UUFDRixNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFBO0lBQ3RCLENBQUM7SUFFRCxJQUFJO1FBQ0YsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUE7SUFDckIsQ0FBQztDQUNGIn0=