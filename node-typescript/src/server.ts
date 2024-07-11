import fastify from "fastify";
import fastifyCors from "@fastify/cors";
import { routes } from "./routes";

const app = fastify({ logger: true });

app.setErrorHandler((error, request, reply)=>{
    reply.code(400).send({message : error.message});
});

const start = async () => {
    try {

        await app.register(fastifyCors);
        await app.register(routes);

        await app.listen({
            port: 3333
        });
    } catch (error) {
        process.exit(1);
    }
}

start();