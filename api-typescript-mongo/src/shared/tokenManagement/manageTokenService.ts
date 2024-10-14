import { getId } from "@modules/users/services/userService";
import { validateToken, validateRefreshToken } from "./validateTokenService";

export async function manageToken(
	token: string,
	id: string,
): Promise<{ resp: string | boolean; opt: boolean }> {
	const validate = await validateToken(token);

	if (!validate) {
		const data = await getId(id);

		if (!data) {
			throw new Error("Usuário não encontrado!");
		}

		const refToken = data.refreshToken;
		const resp = await validateRefreshToken(refToken, id);
		return { resp: resp, opt: false };
	}

	return { resp: "exito", opt: true };
}

export async function existsToken(
	token: string | undefined,
): Promise<string | undefined> {
	if (token) {
		return token;
	}
}
