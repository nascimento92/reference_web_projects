import mongoose from "mongoose";

export interface ITypeUsers extends Document {
  name: string;
  description: string;
  consumptions: string;
  dashboards: string;
  general: string;
  machines: string;
  orders: string;
  profile: string;
  transactions: string;
  typeusers: string;
  users: string;
}

const TypeUsersSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  consumptions: { type: String, required: true },
  dashboards: { type: String, required: true },
  general: { type: String, required: true },
  machines: { type: String, required: true },
  orders: { type: String, required: true },
  profile: { type: String, required: true },
  transactions: { type: String, required: true },
  typeusers: { type: String, required: true },
  users: { type: String, required: true },
});

const TypeUsers = mongoose.model<ITypeUsers>("typeusers", TypeUsersSchema);

export default TypeUsers;
