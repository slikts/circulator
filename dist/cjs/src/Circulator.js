"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Cycle_1 = require("./Cycle");
class Circulator {
    /**
     * Wrap an iterable and allow cycling its elements infinitely
     */
    constructor(iterable) {
        const items = Array.isArray(iterable) ? iterable : Array.from(iterable);
        this.size = items.length;
        this.cycle = Cycle_1.default(items);
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
exports.default = Circulator;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2lyY3VsYXRvci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9DaXJjdWxhdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsbUNBQTJCO0FBRTNCO0lBSUU7O09BRUc7SUFDSCxZQUFZLFFBQXFCO1FBQy9CLE1BQU0sS0FBSyxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLEdBQUcsUUFBUSxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUE7UUFDdkUsSUFBSSxDQUFDLElBQUksR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFBO1FBQ3hCLElBQUksQ0FBQyxLQUFLLEdBQUcsZUFBSyxDQUFDLEtBQUssQ0FBQyxDQUFBO1FBQ3pCLHlCQUF5QjtRQUN6QixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFBO0lBQ25CLENBQUM7SUFFRCxDQUFDLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQztRQUNoQixPQUFPLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEtBQUssSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFBO1FBQzlELGlCQUFpQjtRQUNqQixJQUFJLENBQUMsSUFBSSxFQUFFLENBQUE7SUFDYixDQUFDO0lBRUQ7O09BRUc7SUFDSCxJQUFJLENBQUMsQ0FBUztRQUNaLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUE7SUFDakMsQ0FBQztJQUVELE9BQU87UUFDTCxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQTtJQUNyQixDQUFDO0lBRUQsSUFBSTtRQUNGLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUE7SUFDdEIsQ0FBQztJQUVELElBQUk7UUFDRixNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQTtJQUNyQixDQUFDO0NBQ0Y7QUF2Q0QsNkJBdUNDIn0=