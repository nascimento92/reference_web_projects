import TypeUsers from "@modules/typeuser/schema/modelTypeuserSchema";
import { type IUsers, Users } from "../schema/modelUserSchema";

class User {}

export default new User();

// Obtém usuário por e-mail
export async function getIdEmail(email: string): Promise<IUsers | null> {
	try {
		const user = await Users.findOne({ email }).lean(); // Usa lean() para objetos JavaScript simples
		if (!user) {
			return null;
			//throw new Error("E-mail não encontrado!");
		}
		return user as IUsers;
	} catch (error) {
		console.error("Erro ao obter e-mail por ID:", error);
		throw error;
	}
}

// Obtém um usuário pelo ID
export async function getId(id: string): Promise<Partial<IUsers> | null> {
	try {
		const user = await Users.findById(id)
			.select("-password -passwordResetToken -passwordResetExpires")
			.lean(); // Usa lean() para retornar um objeto plano

		if (!user) {
			throw new Error("ID não encontrado!");
		}
		return user as Partial<IUsers>;
	} catch (error) {
		console.error("Erro ao obter usuário por ID:", error);
		throw error;
	}
}

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
export async function getIdTypeUser(profile: string): Promise<any[]> {
	try {
		const typeUser = await TypeUsers.findById(profile, {
			_id: 1,
			name: 1,
			description: 1,
		});
		if (!typeUser) {
			throw new Error("Tipo de usuário não encontrado!");
		}
		return [typeUser.toObject()];
	} catch (error) {
		console.error("Erro ao obter tipo de usuário:", error);
		throw error;
	}
}

// Atualiza o token de redefinição de senha do usuário
export async function updateToken(
	id: string,
	data: Partial<IUsers>,
): Promise<void> {
	try {
		await Users.findByIdAndUpdate(id, data, { new: true, upsert: false });
	} catch (error) {
		console.error("Erro ao atualizar token do usuário:", error);
		throw error;
	}
}
