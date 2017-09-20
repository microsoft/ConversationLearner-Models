"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var json_typescript_mapper_1 = require("json-typescript-mapper");
var Entity_1 = require("./Entity");
var Action_1 = require("./Action");
var AppDefinition = (function () {
    function AppDefinition(init) {
        this.entities = undefined;
        this.actions = undefined;
        Object.assign(this, init);
    }
    tslib_1.__decorate([
        json_typescript_mapper_1.JsonProperty({ clazz: Entity_1.EntityBase, name: 'entities' }),
        tslib_1.__metadata("design:type", Array)
    ], AppDefinition.prototype, "entities", void 0);
    tslib_1.__decorate([
        json_typescript_mapper_1.JsonProperty({ clazz: Action_1.ActionBase, name: 'actions' }),
        tslib_1.__metadata("design:type", Array)
    ], AppDefinition.prototype, "actions", void 0);
    return AppDefinition;
}());
exports.AppDefinition = AppDefinition;
//# sourceMappingURL=AppDefinition.js.map