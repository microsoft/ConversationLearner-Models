"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var json_typescript_mapper_1 = require("json-typescript-mapper");
var Memory = (function () {
    function Memory(init) {
        this.entityName = undefined;
        this.entityValue = undefined;
        Object.assign(this, init);
    }
    tslib_1.__decorate([
        json_typescript_mapper_1.JsonProperty('entityName'),
        tslib_1.__metadata("design:type", String)
    ], Memory.prototype, "entityName", void 0);
    tslib_1.__decorate([
        json_typescript_mapper_1.JsonProperty('entityValue'),
        tslib_1.__metadata("design:type", String)
    ], Memory.prototype, "entityValue", void 0);
    return Memory;
}());
exports.Memory = Memory;
//# sourceMappingURL=Memory.js.map