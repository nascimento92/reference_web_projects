import mongoose from "mongoose";

const contractSchema = new mongoose.Schema({
	codparc: Number,
	cpfcnpj: String,
	nomeparc: String,
	numcontrato: Number,
	tipocontrato: String,
	ativo: String,
});

export const contractModel = mongoose.model("contracts", contractSchema);
