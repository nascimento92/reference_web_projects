import type { IUsers } from "@modules/users/schema/modelUserSchema";
import {
	getIdEmail,
	getIdTypeUser,
	updateToken,
} from "@modules/users/services/userService";
import type { NextFunction, Request, Response } from "express";
import bcrypt from "bcrypt";
import {
	generateAccessToken,
	generateRefreshToken,
} from "@shared/tokenManagement/tokenGenerator";

class Controller {
	async getId(
		request: Request,
		response: Response,
		next: NextFunction,
	): Promise<void> {
		const { email, password } = request.body;

		if (!email || !password) {
			response.status(400).json({ message: "Email e senha são obrigatórios!" });
		}

		//procura e-mail no mongo
		const data: IUsers | null = await getIdEmail(email.toLowerCase());

		if (!data) {
			response.status(400).json({ message: "Email inválido para login!" });
			return;
		}

		const {
			_id,
			email: emailFs,
			username,
			lastname,
			password: passFs,
			profile,
			status: statusUser,
		} = data;

		//verifica a senha
		const passwordMatch = await bcrypt.compare(password, passFs);
		if (!passwordMatch) {
			response.status(400).json({ message: "Senha inválida para login!" });
			return;
		}

		//verifica se o usuário está ativo
		if (!statusUser) {
			response.status(400).json({
				message:
					"O usuário informado está inativo, favor contatar o suporte para mais informações!",
			});
			return;
		}

		//token
		const accessToken = await generateAccessToken(_id);
		const refreshTokenData = {
			refreshToken: await generateRefreshToken(_id),
		};
		await updateToken(_id, refreshTokenData);

		const pageaccess = await getIdTypeUser(profile);

		response.status(200).json({
			id: _id,
			accessToken: accessToken,
			email: emailFs,
			nome: username,
			profile: profile,
			pageaccess: pageaccess,
		});
	}
}

export default new Controller();
