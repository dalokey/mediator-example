import { IRequest } from "@dalokey/mediator";
import { getUserByIdQueryHandler } from "./getUserByIdQueryHandler";

export class getUserByIdQuery implements IRequest<string> {
    public handlerInstance = new getUserByIdQueryHandler();

    constructor(public Id: number){
    }

    validate(): boolean {
        if (this.Id < 0){
            return false;
        }
        
        return true;
    }
}