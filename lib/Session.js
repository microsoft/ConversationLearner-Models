"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var json_typescript_mapper_1 = require("json-typescript-mapper");
var Session = (function () {
    function Session(init) {
        this.sessionId = undefined;
        this.createdDatetime = undefined;
        this.lastQueryDatetime = undefined;
        this.packageId = undefined;
        this.saveToLog = undefined;
        Object.assign(this, init);
    }
    tslib_1.__decorate([
        json_typescript_mapper_1.JsonProperty("sessionId"),
        tslib_1.__metadata("design:type", String)
    ], Session.prototype, "sessionId", void 0);
    tslib_1.__decorate([
        json_typescript_mapper_1.JsonProperty("createdDatetime"),
        tslib_1.__metadata("design:type", String)
    ], Session.prototype, "createdDatetime", void 0);
    tslib_1.__decorate([
        json_typescript_mapper_1.JsonProperty("lastQueryDatetime"),
        tslib_1.__metadata("design:type", String)
    ], Session.prototype, "lastQueryDatetime", void 0);
    tslib_1.__decorate([
        json_typescript_mapper_1.JsonProperty("lastQueryDatetime"),
        tslib_1.__metadata("design:type", Number)
    ], Session.prototype, "packageId", void 0);
    tslib_1.__decorate([
        json_typescript_mapper_1.JsonProperty("saveToLog"),
        tslib_1.__metadata("design:type", Boolean)
    ], Session.prototype, "saveToLog", void 0);
    return Session;
}());
exports.Session = Session;
var SessionList = (function () {
    function SessionList(init) {
        this.sessions = undefined;
        Object.assign(this, init);
    }
    tslib_1.__decorate([
        json_typescript_mapper_1.JsonProperty({ clazz: Session, name: 'sessions' }),
        tslib_1.__metadata("design:type", Array)
    ], SessionList.prototype, "sessions", void 0);
    return SessionList;
}());
exports.SessionList = SessionList;
var SessionIdList = (function () {
    function SessionIdList(init) {
        this.sessionIds = undefined;
        Object.assign(this, init);
    }
    tslib_1.__decorate([
        json_typescript_mapper_1.JsonProperty('sessionIds'),
        tslib_1.__metadata("design:type", Array)
    ], SessionIdList.prototype, "sessionIds", void 0);
    return SessionIdList;
}());
exports.SessionIdList = SessionIdList;
//# sourceMappingURL=Session.js.map