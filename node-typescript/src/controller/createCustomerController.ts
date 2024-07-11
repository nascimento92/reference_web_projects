import {FastifyRequest, FastifyReply} from "fastify";
import {createCustomerService} from "../service/createCustomerService";

class createCustomerController{
    async handle(request: FastifyRequest, reply: FastifyReply){
        const {name,email} = request.body as {name:string, email:string};
        const customerService = new createCustomerService();
        const customer = await customerService.execute({name,email});
        reply.send(customer);
    }
}

export {createCustomerController}