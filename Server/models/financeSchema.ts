import { Schema, model } from "mongoose";

export interface IFinance {
  title: string;
  description: string;
  total_amount: string;
  created_by: string;
}

const financeSchema = new Schema<IFinance>(
  {
    title: {
      type: String,
      required: [true, "Title missing"],
    },
    description: {
      type: String,
    },
    total_amount: {
      type: String,
      required: true,
    },
    created_by: {
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
