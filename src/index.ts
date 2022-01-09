import { Mediator } from '@dalokey/mediator';
import { getUserByIdQuery } from './getUserByIdUseCase/getUserByIdQuery';

let mediator = new Mediator();

// run the following to see output `id=1 npm start` **out should be `User with Id: 1 is found with name User1`

const id = Number(process.env.id) || 0;

try{
    let response = mediator.send(new getUserByIdQuery(id));
    console.log(response);
} catch(e) {
    if (e instanceof Error ){
        console.log(e.message);
    } else {
        console.log(e);
    }
}