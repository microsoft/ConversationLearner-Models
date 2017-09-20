"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Action_1 = require("./Action");
var ModelUtils = (function () {
    function ModelUtils() {
    }
    /** Remove n words from start of string */
    ModelUtils.RemoveWords = function (text, numWords) {
        var firstSpace = text.indexOf(' ');
        var remaining = (firstSpace > 0) ? text.slice(firstSpace + 1) : "";
        numWords--;
        if (numWords == 0) {
            return remaining;
        }
        return this.RemoveWords(remaining, numWords);
    };
    /** Return arguments for an action */
    ModelUtils.GetArguments = function (action) {
        if (action.metadata && action.metadata.actionType != Action_1.ActionTypes.TEXT) {
            var argString = this.RemoveWords(action.payload, 1);
            return argString.split(',');
        }
        return null;
    };
    /** Return arguments for an action */
    ModelUtils.GetPrimaryPayload = function (action) {
        if (action.metadata && action.metadata.actionType != Action_1.ActionTypes.TEXT) {
            var apiName = action.payload.split(' ')[0];
            return apiName;
        }
        return action.payload;
    };
    return ModelUtils;
}());
exports.ModelUtils = ModelUtils;
//# sourceMappingURL=ModelUtils.js.map