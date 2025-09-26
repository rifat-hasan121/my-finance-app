// src/services/transactionService.ts
import { ITransaction } from "../models/Transaction";

export const fetchTransactions = async (): Promise<ITransaction[]> => {
  const res = await fetch("/api/transactions");
  const data = await res.json();
  return data;
};

export const addTransaction = async (
  transaction: Partial<ITransaction>
): Promise<ITransaction> => {
  const res = await fetch("/api/transactions", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(transaction),
  });
  const data = await res.json();
  return data;
};
