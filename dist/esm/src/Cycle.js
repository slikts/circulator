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
export default Cycle;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ3ljbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvQ3ljbGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0dBRUc7QUFDSCxNQUFNLEtBQUssR0FBRyxXQUFjLEtBQVU7SUFDcEMsTUFBTSxHQUFHLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQTtJQUN4QixJQUFJLENBQUMsR0FBRyxDQUFDLENBQUE7SUFDVCxPQUFPLElBQUksRUFBRSxDQUFDO1FBQ1osQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUMsR0FBRyxDQUFDLE1BQU0sS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUE7SUFDeEMsQ0FBQztBQUNILENBQUMsQ0FBQTtBQUlELGVBQWUsS0FBSyxDQUFBIn0=