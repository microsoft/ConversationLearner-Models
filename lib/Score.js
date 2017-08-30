"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var json_typescript_mapper_1 = require("json-typescript-mapper");
var Metrics_1 = require("./Metrics");
var Action_1 = require("./Action");
var ScoreInput = (function () {
    function ScoreInput(init) {
        this.filledEntities = undefined;
        this.context = undefined;
        this.maskedActions = undefined;
        Object.assign(this, init);
    }
    tslib_1.__decorate([
        json_typescript_mapper_1.JsonProperty('filledEntities'),
        tslib_1.__metadata("design:type", Array)
    ], ScoreInput.prototype, "filledEntities", void 0);
    tslib_1.__decorate([
        json_typescript_mapper_1.JsonProperty('context'),
        tslib_1.__metadata("design:type", Object)
    ], ScoreInput.prototype, "context", void 0);
    tslib_1.__decorate([
        json_typescript_mapper_1.JsonProperty('maskedActions'),
        tslib_1.__metadata("design:type", Array)
    ], ScoreInput.prototype, "maskedActions", void 0);
    return ScoreInput;
}());
exports.ScoreInput = ScoreInput;
var ScoredBase = (function () {
    function ScoredBase(init) {
        this.actionId = undefined;
        this.payload = undefined;
        this.isTerminal = undefined;
        this.metadata = undefined;
        Object.assign(this, init);
    }
    tslib_1.__decorate([
        json_typescript_mapper_1.JsonProperty('actionId'),
        tslib_1.__metadata("design:type", String)
    ], ScoredBase.prototype, "actionId", void 0);
    tslib_1.__decorate([
        json_typescript_mapper_1.JsonProperty('payload'),
        tslib_1.__metadata("design:type", String)
    ], ScoredBase.prototype, "payload", void 0);
    tslib_1.__decorate([
        json_typescript_mapper_1.JsonProperty('isTerminal'),
        tslib_1.__metadata("design:type", Boolean)
    ], ScoredBase.prototype, "isTerminal", void 0);
    tslib_1.__decorate([
        json_typescript_mapper_1.JsonProperty({ clazz: Action_1.ActionMetaData, name: 'metadata' }),
        tslib_1.__metadata("design:type", Action_1.ActionMetaData)
    ], ScoredBase.prototype, "metadata", void 0);
    return ScoredBase;
}());
exports.ScoredBase = ScoredBase;
var UnscoredAction = (function (_super) {
    tslib_1.__extends(UnscoredAction, _super);
    function UnscoredAction(init) {
        var _this = _super.call(this, init) || this;
        _this.reason = undefined;
        Object.assign(_this, init);
        return _this;
    }
    tslib_1.__decorate([
        json_typescript_mapper_1.JsonProperty('reason'),
        tslib_1.__metadata("design:type", String)
    ], UnscoredAction.prototype, "reason", void 0);
    return UnscoredAction;
}(ScoredBase));
exports.UnscoredAction = UnscoredAction;
var ScoredAction = (function (_super) {
    tslib_1.__extends(ScoredAction, _super);
    function ScoredAction(init) {
        var _this = _super.call(this, init) || this;
        _this.score = undefined;
        _this.metadata = undefined;
        Object.assign(_this, init);
        return _this;
    }
    tslib_1.__decorate([
        json_typescript_mapper_1.JsonProperty('score'),
        tslib_1.__metadata("design:type", Number)
    ], ScoredAction.prototype, "score", void 0);
    tslib_1.__decorate([
        json_typescript_mapper_1.JsonProperty({ clazz: Action_1.ActionMetaData, name: 'metadata' }),
        tslib_1.__metadata("design:type", Action_1.ActionMetaData)
    ], ScoredAction.prototype, "metadata", void 0);
    return ScoredAction;
}(ScoredBase));
exports.ScoredAction = ScoredAction;
var ScoreResponse = (function () {
    function ScoreResponse(init) {
        this.scoredActions = undefined;
        this.unscoredActions = undefined;
        this.metrics = undefined;
        Object.assign(this, init);
    }
    tslib_1.__decorate([
        json_typescript_mapper_1.JsonProperty({ clazz: ScoredAction, name: 'scoredActions' }),
        tslib_1.__metadata("design:type", Array)
    ], ScoreResponse.prototype, "scoredActions", void 0);
    tslib_1.__decorate([
        json_typescript_mapper_1.JsonProperty({ clazz: UnscoredAction, name: 'unscoredActions' }),
        tslib_1.__metadata("design:type", Array)
    ], ScoreResponse.prototype, "unscoredActions", void 0);
    tslib_1.__decorate([
        json_typescript_mapper_1.JsonProperty({ clazz: Metrics_1.Metrics, name: 'metrics' }),
        tslib_1.__metadata("design:type", Metrics_1.Metrics)
    ], ScoreResponse.prototype, "metrics", void 0);
    return ScoreResponse;
}());
exports.ScoreResponse = ScoreResponse;
//# sourceMappingURL=Score.js.map