// src/context/TransactionContext.tsx
import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";

interface Transaction {
  _id: string;
  amount: number;
  type: "income" | "expense";
  category: string;
  note: string;
  date: string;
}

interface TransactionContextType {
  transactions: Transaction[];
  addTransaction: (transaction: Transaction) => void;
  fetchTransactions: () => void;
}

const TransactionContext = createContext<TransactionContextType | undefined>(
  undefined
);

export const TransactionProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  const fetchTransactions = async () => {
    // TODO: replace with API call
    const res = await fetch("/api/transactions");
    const data = await res.json();
    setTransactions(data);
  };

  const addTransaction = async (transaction: Transaction) => {
    // TODO: replace with API call
    const res = await fetch("/api/transactions", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(transaction),
    });
    const data = await res.json();
    setTransactions((prev) => [...prev, data]);
  };

  useEffect(() => {
    fetchTransactions();
  }, []);

  return (
    <TransactionContext.Provider
      value={{ transactions, addTransaction, fetchTransactions }}
    >
      {children}
    </TransactionContext.Provider>
  );
};

export const useTransactions = () => {
  const context = useContext(TransactionContext);
  if (!context)
    throw new Error("useTransactions must be used within TransactionProvider");
  return context;
};
