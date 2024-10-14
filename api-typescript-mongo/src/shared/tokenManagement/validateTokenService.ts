import jwt from "jsonwebtoken";
import { generateRefreshToken } from "./tokenGenerator";
const chv = process.env.scrt as string;

export async function validateToken(
	token: string | undefined,
): Promise<boolean> {
	if (!token) {
		return false;
	}
	console.log("Token no validateToken:", token);
	try {
		const decoded = jwt.verify(token, chv);
		console.log("Token válido:", decoded);
		return true;
	} catch (error) {
		console.error("Erro ao verificar o token:", error);
		return false;
	}
}

export async function validateRefreshToken(
	refToken: string | undefined,
	id: string,
): Promise<string | false> {
	if (!refToken) {
		return false;
	}

	try {
		const decoded = jwt.verify(refToken, chv);
		console.log("Refresh Token válido:", decoded);

		// Se o token ainda for válido, retorná-lo
		return refToken;
	} catch (error) {
		console.log("Refresh Token expirado, gerando novo token...");

		// Se o token estiver expirado ou inválido, gerar um novo token
		const newRefreshToken = await generateRefreshToken(id);
		console.log("Novo Refresh Token:", newRefreshToken);

		// Retorna o novo refresh token
		return newRefreshToken;
	}
}
