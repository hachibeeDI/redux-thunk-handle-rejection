"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var defaultCatcher = function (v) { return v; };
function createThunkWithRejectionHandler(_a) {
    var extraArgument = _a.extraArgument, _b = _a.actionResultHandler, actionResultHandler = _b === void 0 ? defaultCatcher : _b;
    var middleware = function (_a) {
        var dispatch = _a.dispatch, getState = _a.getState;
        return function (next) { return function (action) {
            if (typeof action === 'function') {
                return actionResultHandler(action(dispatch, getState, extraArgument), dispatch, getState);
            }
            return next(action);
        }; };
    };
    return middleware;
}
exports.default = createThunkWithRejectionHandler;
