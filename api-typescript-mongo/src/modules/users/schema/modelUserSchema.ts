import mongoose from "mongoose";

export interface IUsers extends Document {
	_id: string;
	email: string;
	username: string;
	lastname: string;
	password: string;
	passwordResetExpires?: Date;
	passwordResetToken?: number;
	profile: string;
	refreshToken: string;
	status: boolean;
	url?: string;
}

const UserSchema = new mongoose.Schema<IUsers>({
	email: { type: String, required: true, unique: true },
	username: { type: String, required: true },
	lastname: { type: String, required: true },
	password: { type: String, required: true },
	passwordResetExpires: { type: Date },
	passwordResetToken: { type: Number },
	profile: { type: String, required: true },
	refreshToken: { type: String },
	status: { type: Boolean, default: true },
	url: { type: String },
});

export const Users = mongoose.model<IUsers>("Users", UserSchema);
