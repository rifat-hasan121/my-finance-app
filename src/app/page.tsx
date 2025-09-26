"use client";
import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import BalanceCard from "../components/BalanceCard";
import TransactionList from "../components/TransactionList";
import ExpensePieChart from "../components/Charts/ExpensePieChart";
import IncomeExpenseBarChart from "../components/Charts/IncomeExpenseBarChart";

interface Transaction {
  _id: string;
  amount: number;
  type: "income" | "expense";
  category: string;
  note: string;
  date: string;
}

const Dashboard: React.FC = () => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [balance, setBalance] = useState<number>(0);
  const [totalIncome, setTotalIncome] = useState<number>(0);
  const [totalExpense, setTotalExpense] = useState<number>(0);

  useEffect(() => {
    // TODO: Replace with API fetch from MongoDB
    const fetchTransactions = async () => {
      const dummyData: Transaction[] = [
        { _id: "1", amount: 5000, type: "income", category: "Salary", note: "August Salary", date: "2025-09-01" },
        { _id: "2", amount: 200, type: "expense", category: "Transport", note: "Bus fare", date: "2025-09-02" },
        { _id: "3", amount: 700, type: "expense", category: "Shopping", note: "Clothes", date: "2025-09-03" },
      ];
      setTransactions(dummyData);

      const income = dummyData.filter(t => t.type === "income").reduce((acc, t) => acc + t.amount, 0);
      const expense = dummyData.filter(t => t.type === "expense").reduce((acc, t) => acc + t.amount, 0);

      setTotalIncome(income);
      setTotalExpense(expense);
      setBalance(income - expense);
    };

    fetchTransactions();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <Navbar />

      {/* Dashboard Summary */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <BalanceCard title="Balance" amount={balance} />
          <BalanceCard title="Total Income" amount={totalIncome} type="income" />
          <BalanceCard title="Total Expense" amount={totalExpense} type="expense" />
        </div>

        {/* Transactions & Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
          {/* Left: Transaction List */}
          <div className="lg:col-span-2 bg-white shadow rounded-lg p-4">
            <h2 className="text-xl font-semibold mb-4">Recent Transactions</h2>
            <TransactionList transactions={transactions} />
          </div>

          {/* Right: Charts */}
          <div className="flex flex-col gap-6">
            <div className="bg-white shadow rounded-lg p-4">
              <h2 className="text-xl font-semibold mb-4">Expense Breakdown</h2>
              <ExpensePieChart transactions={transactions} />
            </div>
            <div className="bg-white shadow rounded-lg p-4">
              <h2 className="text-xl font-semibold mb-4">Income vs Expense</h2>
              <IncomeExpenseBarChart transactions={transactions} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
