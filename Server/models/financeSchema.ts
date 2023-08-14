import { Schema, model } from "mongoose";

interface IFinance {
  name: string;
  email: string;
  password: string;
}

const financeSchema = new Schema<IFinance>(
  {
    name: {
      type: String,
      required: [true, "Empty name"],
    },
    email: {
      type: String,
      required: [true, "Empty email"],
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Finance = model<IFinance>("Finance", financeSchema);

export { Finance };
