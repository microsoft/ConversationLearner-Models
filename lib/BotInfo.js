"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var json_typescript_mapper_1 = require("json-typescript-mapper");
/** Information about the running bot */
var BotInfo = (function () {
    function BotInfo(init) {
        this.callbacks = undefined;
        Object.assign(this, init);
    }
    tslib_1.__decorate([
        json_typescript_mapper_1.JsonProperty("callbacks"),
        tslib_1.__metadata("design:type", Array)
    ], BotInfo.prototype, "callbacks", void 0);
    return BotInfo;
}());
exports.BotInfo = BotInfo;
//# sourceMappingURL=BotInfo.js.map