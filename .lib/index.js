"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mediator_1 = require("@dalokey/mediator");
var getUserByIdQuery_1 = require("./getUserByIdUseCase/getUserByIdQuery");
var mediator = new mediator_1.Mediator();
// run the following to see output `id=1 npm start` **out should be `User with Id: 1 is found with name User1`
var id = Number(process.env.id) || 0;
try {
    var response = mediator.send(new getUserByIdQuery_1.getUserByIdQuery(id));
    console.log(response);
}
catch (e) {
    if (e instanceof Error) {
        console.log(e.message);
    }
    else {
        console.log(e);
    }
}
