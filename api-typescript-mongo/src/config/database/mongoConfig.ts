import mongoose from "mongoose";

const mongoUri: string = process.env.MONGO_URI as string;

if (!mongoUri) {
	throw new Error(
		"A URI do MongoDB não foi configurada nas variáveis de ambiente.",
	);
}

export async function connectMongoDB(): Promise<void> {
	try {
		await mongoose
			.connect(mongoUri)
			.then(() => console.log("Conexão bem-sucedida ao MongoDB"))
			.catch((error) => console.log(error));
	} catch (error) {
		console.log((error as Error).message);
	}
}

export async function disconnectMongoDB(): Promise<void> {
	try {
		await mongoose
			.disconnect()
			.then(() => console.log("Desconectado do MongoDB com sucesso"))
			.catch((error) => console.log(error));
	} catch (error) {
		console.log((error as Error).message);
	}
}
