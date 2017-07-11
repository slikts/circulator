"use strict";
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __values = (this && this.__values) || function (o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Cycle_1 = require("./Cycle");
var Circulator = (function () {
    /**
     * Wrap an iterable and allow cycling its elements infinitely
     */
    function Circulator(iterable) {
        var items = Array.isArray(iterable) ? iterable : Array.from(iterable);
        this.size = items.length;
        this.cycle = Cycle_1.default(items);
        // Init newborn generator
        this.cycle.next();
    }
    Circulator.prototype[Symbol.iterator] = function () {
        var _this = this;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [5 /*yield**/, __values(Array.from(Array(this.size), function (_, i) { return _this.step(+!!i); }))
                    // Reset to start
                ];
                case 1:
                    _a.sent();
                    // Reset to start
                    this.next();
                    return [2 /*return*/];
            }
        });
    };
    /**
     * Step through the cycle
     */
    Circulator.prototype.step = function (n) {
        return this.cycle.next(n).value;
    };
    Circulator.prototype.current = function () {
        return this.step(0);
    };
    Circulator.prototype.prev = function () {
        return this.step(-1);
    };
    Circulator.prototype.next = function () {
        return this.step(1);
    };
    return Circulator;
}());
exports.default = Circulator;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2lyY3VsYXRvci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9DaXJjdWxhdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGlDQUEyQjtBQUUzQjtJQUlFOztPQUVHO0lBQ0gsb0JBQVksUUFBcUI7UUFDL0IsSUFBTSxLQUFLLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsR0FBRyxRQUFRLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQTtRQUN2RSxJQUFJLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUE7UUFDeEIsSUFBSSxDQUFDLEtBQUssR0FBRyxlQUFLLENBQUMsS0FBSyxDQUFDLENBQUE7UUFDekIseUJBQXlCO1FBQ3pCLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUE7SUFDbkIsQ0FBQztJQUVBLHFCQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsR0FBbEI7UUFBQSxpQkFJQzs7O3dCQUhDLHNCQUFBLFNBQU8sS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLFVBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSyxPQUFBLEtBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQWYsQ0FBZSxDQUFDLENBQUE7b0JBQzlELGlCQUFpQjtrQkFENkM7O29CQUE5RCxTQUE4RCxDQUFBO29CQUM5RCxpQkFBaUI7b0JBQ2pCLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQTs7OztLQUNaO0lBRUQ7O09BRUc7SUFDSCx5QkFBSSxHQUFKLFVBQUssQ0FBUztRQUNaLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUE7SUFDakMsQ0FBQztJQUVELDRCQUFPLEdBQVA7UUFDRSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQTtJQUNyQixDQUFDO0lBRUQseUJBQUksR0FBSjtRQUNFLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUE7SUFDdEIsQ0FBQztJQUVELHlCQUFJLEdBQUo7UUFDRSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQTtJQUNyQixDQUFDO0lBQ0gsaUJBQUM7QUFBRCxDQUFDLEFBdkNELElBdUNDIn0=