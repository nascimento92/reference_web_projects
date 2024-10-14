import jwt from "jsonwebtoken";

const chv = process.env.scrt as string;

export async function generateAccessToken(userId: string): Promise<string> {
	const token = jwt.sign({ userId }, chv, { expiresIn: "15m" });
	return token;
}

export async function generateRefreshToken(userId: string): Promise<string> {
	const token = jwt.sign({ userId }, chv, { expiresIn: "15d" });
	return token;
}
