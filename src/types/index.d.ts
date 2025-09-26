// src/types/index.d.ts
export interface TransactionType {
  _id?: string;
  amount: number;
  type: "income" | "expense";
  category: string;
  note?: string;
  date: string;
}
