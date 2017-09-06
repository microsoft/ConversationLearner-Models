"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var json_typescript_mapper_1 = require("json-typescript-mapper");
exports.ActionTypes = {
    TEXT: "TEXT",
    API_LOCAL: "API_LOCAL",
    API_AZURE: "API_AZURE",
    INTENT: "INTENT",
    CARD: "CARD"
};
var EntitySuggestion = (function () {
    function EntitySuggestion(init) {
        this.entityName = undefined;
        this.entityId = undefined;
        Object.assign(this, init);
    }
    EntitySuggestion.prototype.Equal = function (entitySuggestion) {
        if (!entitySuggestion)
            return false;
        if (this.entityName != entitySuggestion.entityName)
            return false;
        if (this.entityId != entitySuggestion.entityId)
            return false;
        return true;
    };
    tslib_1.__decorate([
        json_typescript_mapper_1.JsonProperty('entityName'),
        tslib_1.__metadata("design:type", String)
    ], EntitySuggestion.prototype, "entityName", void 0);
    tslib_1.__decorate([
        json_typescript_mapper_1.JsonProperty('entityId'),
        tslib_1.__metadata("design:type", String)
    ], EntitySuggestion.prototype, "entityId", void 0);
    return EntitySuggestion;
}());
exports.EntitySuggestion = EntitySuggestion;
var ActionMetaData = (function () {
    function ActionMetaData(init) {
        this.actionType = undefined;
        this.entitySuggestion = undefined;
        Object.assign(this, init);
    }
    ActionMetaData.prototype.Equal = function (metaData) {
        if (this.actionType != metaData.actionType)
            return false;
        if (!this.entitySuggestion && metaData.entitySuggestion)
            return false;
        return this.entitySuggestion.Equal(metaData.entitySuggestion);
    };
    tslib_1.__decorate([
        json_typescript_mapper_1.JsonProperty('actionType'),
        tslib_1.__metadata("design:type", String)
    ], ActionMetaData.prototype, "actionType", void 0);
    tslib_1.__decorate([
        json_typescript_mapper_1.JsonProperty('entitySuggestion'),
        tslib_1.__metadata("design:type", EntitySuggestion)
    ], ActionMetaData.prototype, "entitySuggestion", void 0);
    return ActionMetaData;
}());
exports.ActionMetaData = ActionMetaData;
var ActionBase = (function () {
    function ActionBase(init) {
        this.actionId = undefined;
        this.payload = undefined;
        this.isTerminal = undefined;
        this.requiredEntities = undefined;
        this.negativeEntities = undefined;
        this.version = undefined;
        this.packageCreationId = undefined;
        this.packageDeletionId = undefined;
        this.metadata = new ActionMetaData();
        Object.assign(this, init);
    }
    tslib_1.__decorate([
        json_typescript_mapper_1.JsonProperty('actionId'),
        tslib_1.__metadata("design:type", String)
    ], ActionBase.prototype, "actionId", void 0);
    tslib_1.__decorate([
        json_typescript_mapper_1.JsonProperty('payload'),
        tslib_1.__metadata("design:type", String)
    ], ActionBase.prototype, "payload", void 0);
    tslib_1.__decorate([
        json_typescript_mapper_1.JsonProperty('isTerminal'),
        tslib_1.__metadata("design:type", Boolean)
    ], ActionBase.prototype, "isTerminal", void 0);
    tslib_1.__decorate([
        json_typescript_mapper_1.JsonProperty('requiredEntities'),
        tslib_1.__metadata("design:type", Array)
    ], ActionBase.prototype, "requiredEntities", void 0);
    tslib_1.__decorate([
        json_typescript_mapper_1.JsonProperty('negativeEntities'),
        tslib_1.__metadata("design:type", Array)
    ], ActionBase.prototype, "negativeEntities", void 0);
    tslib_1.__decorate([
        json_typescript_mapper_1.JsonProperty('version'),
        tslib_1.__metadata("design:type", Number)
    ], ActionBase.prototype, "version", void 0);
    tslib_1.__decorate([
        json_typescript_mapper_1.JsonProperty('packageCreationId'),
        tslib_1.__metadata("design:type", Number)
    ], ActionBase.prototype, "packageCreationId", void 0);
    tslib_1.__decorate([
        json_typescript_mapper_1.JsonProperty('packageDeletionId'),
        tslib_1.__metadata("design:type", Number)
    ], ActionBase.prototype, "packageDeletionId", void 0);
    tslib_1.__decorate([
        json_typescript_mapper_1.JsonProperty({ clazz: ActionMetaData, name: 'metadata' }),
        tslib_1.__metadata("design:type", ActionMetaData)
    ], ActionBase.prototype, "metadata", void 0);
    return ActionBase;
}());
exports.ActionBase = ActionBase;
var ActionList = (function () {
    function ActionList(init) {
        this.actions = undefined;
        Object.assign(this, init);
    }
    tslib_1.__decorate([
        json_typescript_mapper_1.JsonProperty('actions'),
        tslib_1.__metadata("design:type", Array)
    ], ActionList.prototype, "actions", void 0);
    return ActionList;
}());
exports.ActionList = ActionList;
var ActionIdList = (function () {
    function ActionIdList(init) {
        this.actionIds = undefined;
        Object.assign(this, init);
    }
    tslib_1.__decorate([
        json_typescript_mapper_1.JsonProperty('actionIds'),
        tslib_1.__metadata("design:type", Array)
    ], ActionIdList.prototype, "actionIds", void 0);
    return ActionIdList;
}());
exports.ActionIdList = ActionIdList;
//# sourceMappingURL=Action.js.map