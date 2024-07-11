import { FastifyReply, FastifyRequest } from "fastify";
import {deleteCustomerService} from "../service/deleteCustomerService";

class deleteCustomerController{
    async handle(request:FastifyRequest, reply: FastifyReply){
        const {id} = request.query as {id:string}
        const customerService = new deleteCustomerService();
        const customer = await customerService.execute({id});
        reply.send(customer);
    }
}

export{deleteCustomerController}