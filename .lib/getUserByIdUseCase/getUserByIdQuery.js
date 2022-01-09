"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserByIdQuery = void 0;
var getUserByIdQueryHandler_1 = require("./getUserByIdQueryHandler");
var getUserByIdQuery = /** @class */ (function () {
    function getUserByIdQuery(Id) {
        this.Id = Id;
        this.handlerInstance = new getUserByIdQueryHandler_1.getUserByIdQueryHandler();
    }
    getUserByIdQuery.prototype.validate = function () {
        if (this.Id < 0) {
            return false;
        }
        return true;
    };
    return getUserByIdQuery;
}());
exports.getUserByIdQuery = getUserByIdQuery;
