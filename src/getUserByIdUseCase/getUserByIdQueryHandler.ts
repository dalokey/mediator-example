import { IRequestHandler } from "@dalokey/mediator";
import { getUserByIdQuery } from "./getUserByIdQuery";

export class getUserByIdQueryHandler implements IRequestHandler<getUserByIdQuery, string> {
    handle(request: getUserByIdQuery): string {

        let user = data.find(x => x.id == request.Id);

        let found = user ? `found with name ${user.name}` : "not found"; 

        return `User with Id: ${request.Id} is ${found}`;
    }
}

// simple data storage used for this example, a repository class to handle the data would be a better a solution
const data = [
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
]