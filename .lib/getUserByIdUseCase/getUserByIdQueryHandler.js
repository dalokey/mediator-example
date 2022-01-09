"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserByIdQueryHandler = void 0;
var getUserByIdQueryHandler = /** @class */ (function () {
    function getUserByIdQueryHandler() {
    }
    getUserByIdQueryHandler.prototype.handle = function (request) {
        var user = data.find(function (x) { return x.id == request.Id; });
        var found = user ? "found with name ".concat(user.name) : "not found";
        return "User with Id: ".concat(request.Id, " is ").concat(found);
    };
    return getUserByIdQueryHandler;
}());
exports.getUserByIdQueryHandler = getUserByIdQueryHandler;
// simple data storage used for this example, a repository class to handle the data would be a better a solution
var data = [
    {
        id: 1,
        name: "User1"
    },
    {
        id: 2,
        name: "User2"
    },
    {
        id: 3,
        name: "User3"
    }
];
