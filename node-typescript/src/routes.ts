import {FastifyInstance, FastifyPluginOptions,FastifyRequest,FastifyReply} from "fastify";
import {createCustomerController} from "../src/controller/createCustomerController";
import {listCustomerController} from "../src/controller/listCustomerController";
import {deleteCustomerController} from "../src/controller/deleteCustomerController";

export async function routes(fastify: FastifyInstance, options: FastifyPluginOptions) {
    fastify.get("/teste", async (request: FastifyRequest, reply: FastifyReply) => {
        return { ok: true}
    });

    fastify.post("/customer", async (request: FastifyRequest, reply: FastifyReply) => {
        return new createCustomerController().handle(request, reply);
    });

    fastify.get("/customers", async (request: FastifyRequest, reply: FastifyReply) => {
        return new listCustomerController().handle(request,reply);
    });

    fastify.delete("/customer", async (request: FastifyRequest, reply: FastifyReply) => {
        return new deleteCustomerController().handle(request,reply);
    });
}