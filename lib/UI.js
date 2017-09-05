"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var json_typescript_mapper_1 = require("json-typescript-mapper");
var Memory_1 = require("./Memory");
var Score_1 = require("./Score");
var Extract_1 = require("./Extract");
var TrainDialog_1 = require("./TrainDialog");
var ScoreReason;
(function (ScoreReason) {
    ScoreReason["NotAvailable"] = "notAvailable";
    ScoreReason["NotScorable"] = "notScorable";
    ScoreReason["NotCalculated"] = "notCalculated";
})(ScoreReason = exports.ScoreReason || (exports.ScoreReason = {}));
var UIScoreInput = (function () {
    function UIScoreInput(init) {
        this.trainExtractorStep = undefined;
        this.extractResponse = undefined;
        Object.assign(this, init);
    }
    tslib_1.__decorate([
        json_typescript_mapper_1.JsonProperty({ clazz: TrainDialog_1.TrainExtractorStep, name: 'trainExtractorStep' }),
        tslib_1.__metadata("design:type", TrainDialog_1.TrainExtractorStep)
    ], UIScoreInput.prototype, "trainExtractorStep", void 0);
    tslib_1.__decorate([
        json_typescript_mapper_1.JsonProperty({ clazz: Extract_1.ExtractResponse, name: 'extractResponse' }),
        tslib_1.__metadata("design:type", Extract_1.ExtractResponse)
    ], UIScoreInput.prototype, "extractResponse", void 0);
    return UIScoreInput;
}());
exports.UIScoreInput = UIScoreInput;
var UIExtractResponse = (function () {
    function UIExtractResponse(init) {
        this.extractResponse = undefined;
        this.memories = undefined;
        Object.assign(this, init);
    }
    tslib_1.__decorate([
        json_typescript_mapper_1.JsonProperty({ clazz: Extract_1.ExtractResponse, name: 'extractResponse' }),
        tslib_1.__metadata("design:type", Extract_1.ExtractResponse)
    ], UIExtractResponse.prototype, "extractResponse", void 0);
    tslib_1.__decorate([
        json_typescript_mapper_1.JsonProperty({ clazz: Memory_1.Memory, name: 'memories' }),
        tslib_1.__metadata("design:type", Array)
    ], UIExtractResponse.prototype, "memories", void 0);
    return UIExtractResponse;
}());
exports.UIExtractResponse = UIExtractResponse;
var UIScoreResponse = (function () {
    function UIScoreResponse(init) {
        this.scoreResponse = undefined;
        this.scoreInput = undefined;
        this.memories = undefined;
        Object.assign(this, init);
    }
    tslib_1.__decorate([
        json_typescript_mapper_1.JsonProperty({ clazz: Score_1.ScoreResponse, name: 'scoreResponse' }),
        tslib_1.__metadata("design:type", Score_1.ScoreResponse)
    ], UIScoreResponse.prototype, "scoreResponse", void 0);
    tslib_1.__decorate([
        json_typescript_mapper_1.JsonProperty({ clazz: Score_1.ScoreInput, name: 'scoreInput' }),
        tslib_1.__metadata("design:type", Score_1.ScoreInput)
    ], UIScoreResponse.prototype, "scoreInput", void 0);
    tslib_1.__decorate([
        json_typescript_mapper_1.JsonProperty({ clazz: Memory_1.Memory, name: 'memories' }),
        tslib_1.__metadata("design:type", Array)
    ], UIScoreResponse.prototype, "memories", void 0);
    return UIScoreResponse;
}());
exports.UIScoreResponse = UIScoreResponse;
//# sourceMappingURL=UI.js.map