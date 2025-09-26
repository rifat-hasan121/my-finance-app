// src/models/Transaction.ts
import mongoose, { Schema, Document, Model } from "mongoose";

export interface ITransaction extends Document {
  amount: number;
  type: "income" | "expense";
  category: string;
  note?: string;
  date: Date;
}

const TransactionSchema: Schema = new Schema({
  amount: { type: Number, required: true },
  type: { type: String, enum: ["income", "expense"], required: true },
  category: { type: String, required: true },
  note: { type: String },
  date: { type: Date, default: Date.now },
});

// prevent model overwrite in development
export const Transaction: Model<ITransaction> =
  mongoose.models.Transaction ||
  mongoose.model<ITransaction>("Transaction", TransactionSchema);
