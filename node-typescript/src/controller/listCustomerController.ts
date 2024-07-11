import {FastifyRequest, FastifyReply} from "fastify";
import {listCustomerService} from "../service/listCustomerService";

class listCustomerController{
    async handle(request:FastifyRequest, reply: FastifyReply){
        const listCustomer = new listCustomerService();
        const customers = await listCustomer.execute();
        reply.send(customers);
    }
}

export {listCustomerController}