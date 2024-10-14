import { getIdTypeUser } from "@modules/users/services/userService";
import { manageToken } from "@shared/tokenManagement/manageTokenService";
import type { NextFunction, Request, Response } from "express";

interface AccessInfo {
	[key: string]: boolean;
}

class Controller {
	async getAccess(
		request: Request,
		response: Response,
		next: NextFunction,
	): Promise<void> {
		const idUser = request.query.id as string;
		const idProfile = request.query.profile as string;
		const menu = request.query.menu as string;
		const authHeader = request.headers.authorization;

		if (!idUser) {
			response
				.status(401)
				.json({ error: "O id do usuário não foi informado nos parâmetros!" });
			return;
		}

		if (!idProfile) {
			response.status(401).json({
				error: "O profile do usuário não foi informado nos parâmetros!",
			});
			return;
		}

		if (!menu) {
			response
				.status(401)
				.json({ error: "A página não foi informada nos parâmetros!" });
			return;
		}

		if (!authHeader) {
			response
				.status(400)
				.json({ message: "Token de autenticação não encontrado!" });
			return;
		}

		const token = authHeader.split(" ")[1];

		const vToken = await manageToken(token, idUser);

		if (vToken.opt) {
			const typeAccess = await getIdTypeUser(idProfile);

			let validate = false;
			let accessData: boolean | undefined = false;

			if (typeAccess.length > 0) {
				const accessInfo = typeAccess[0] as AccessInfo; // Acessa o primeiro objeto da lista

				// Verifica se o campo menu existe e tem valor true
				// biome-ignore lint/suspicious/noPrototypeBuiltins: <explanation>
				if (accessInfo.hasOwnProperty(menu) && accessInfo[menu] === true) {
					validate = true;
					accessData = accessInfo[menu]; // Guarda o dado do acesso
				}
			}

			response.json({ accessData });
		} else {
			response.json({ newAccessToken: vToken.resp });
		}
	}
}

export default new Controller();
