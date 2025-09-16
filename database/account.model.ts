import { model, Schema, models, Types } from "mongoose";

interface IAccount {
  userId: Types.ObjectId; // Change from string to Types.ObjectId
  name: string;
  image?: string;
  password?: string;
  provider?: string;
  providerAccountId: string;
}

const AccountSchema = new Schema<IAccount>(
  {
    userId: { type: Schema.Types.ObjectId, required: true, ref: "User" }, // Use ObjectId and add ref
    name: { type: String, required: true },
    image: { type: String },
    password: { type: String },
    provider: { type: String, required: true },
    providerAccountId: { type: String, required: true },
  },
  { timestamps: true }
);

const Account = models?.Account || model<IAccount>("Account", AccountSchema);

export default Account;
