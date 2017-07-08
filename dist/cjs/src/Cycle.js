"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * A generator for cycling an array in both directions
 */
const Cycle = function* (items) {
    const len = items.length;
    let i = 0;
    while (true) {
        i = (len + i + (yield items[i])) % len;
    }
};
exports.default = Cycle;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ3ljbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvQ3ljbGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7R0FFRztBQUNILE1BQU0sS0FBSyxHQUFHLFdBQWMsS0FBVTtJQUNwQyxNQUFNLEdBQUcsR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFBO0lBQ3hCLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQTtJQUNULE9BQU8sSUFBSSxFQUFFLENBQUM7UUFDWixDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxHQUFHLENBQUMsTUFBTSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtJQUN4QyxDQUFDO0FBQ0gsQ0FBQyxDQUFBO0FBSUQsa0JBQWUsS0FBSyxDQUFBIn0=