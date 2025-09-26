// src/components/Charts/IncomeExpenseBarChart.tsx
import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

interface Transaction {
  _id: string;
  amount: number;
  type: "income" | "expense";
  category: string;
  note: string;
  date: string;
}

interface IncomeExpenseBarChartProps {
  transactions: Transaction[];
}

const IncomeExpenseBarChart: React.FC<IncomeExpenseBarChartProps> = ({
  transactions,
}) => {
  // Group by month
  const months: Record<string, { income: number; expense: number }> = {};

  transactions.forEach((t) => {
    const month = new Date(t.date).toLocaleString("default", {
      month: "short",
    });
    if (!months[month]) months[month] = { income: 0, expense: 0 };
    months[month][t.type] += t.amount;
  });

  const data = Object.keys(months).map((month) => ({
    month,
    income: months[month].income,
    expense: months[month].expense,
  }));

  return (
    <ResponsiveContainer width="100%" height={200}>
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="income" fill="#36A2EB" />
        <Bar dataKey="expense" fill="#FF6384" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default IncomeExpenseBarChart;
