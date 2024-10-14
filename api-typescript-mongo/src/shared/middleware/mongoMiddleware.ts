import {
	connectMongoDB,
	disconnectMongoDB,
} from "@config/database/mongoConfig";
import type { Request, Response, NextFunction } from "express";

export async function mongoMiddleware(
	request: Request,
	response: Response,
	next: NextFunction,
) {
	try {
		// Conecta ao MongoDB antes de processar a requisição
		await connectMongoDB();

		// Garante que a desconexão será realizada após a resposta ser enviada
		response.on("finish", async () => await disconnectMongoDB());

		// Passa o controle para o próximo middleware/rota
		next();
	} catch (error) {
		console.error("Erro ao conectar ao MongoDB:", error);
		response
			.status(500)
			.json({ message: "Erro de conexão com o banco de dados" });
	}
}
