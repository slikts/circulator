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
/**
 * A generator for cycling an array in both directions
 */
var Cycle = function (items) {
    var len, i, _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                len = items.length;
                i = 0;
                _b.label = 1;
            case 1:
                if (!true) return [3 /*break*/, 3];
                _a = len + i;
                return [4 /*yield*/, items[i]];
            case 2:
                i = (_a + (_b.sent())) % len;
                return [3 /*break*/, 1];
            case 3: return [2 /*return*/];
        }
    });
};
export default Cycle;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ3ljbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvQ3ljbGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0dBRUc7QUFDSCxJQUFNLEtBQUssR0FBRyxVQUFjLEtBQVU7Ozs7O2dCQUM5QixHQUFHLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQTtnQkFDcEIsQ0FBQyxHQUFHLENBQUMsQ0FBQTs7O3FCQUNGLElBQUk7Z0JBQ0osS0FBQSxHQUFHLEdBQUcsQ0FBQyxDQUFBO2dCQUFJLHFCQUFNLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBQTs7Z0JBQTlCLENBQUMsR0FBRyxDQUFDLEtBQVUsQ0FBQyxTQUFjLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQTs7Ozs7Q0FFekMsQ0FBQTtBQUlELGVBQWUsS0FBSyxDQUFBIn0=