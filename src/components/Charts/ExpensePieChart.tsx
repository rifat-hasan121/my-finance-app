// src/components/Charts/ExpensePieChart.tsx
import React from "react";
import {
  PieChart,
  Pie,
  Cell,
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

interface ExpensePieChartProps {
  transactions: Transaction[];
}

const COLORS = ["#FF6384", "#36A2EB", "#FFCE56", "#4ADE80", "#F472B6"];

const ExpensePieChart: React.FC<ExpensePieChartProps> = ({ transactions }) => {
  const expenses = transactions.filter((t) => t.type === "expense");
  const categoryTotals: Record<string, number> = {};

  expenses.forEach((t) => {
    if (categoryTotals[t.category]) categoryTotals[t.category] += t.amount;
    else categoryTotals[t.category] = t.amount;
  });

  const data = Object.keys(categoryTotals).map((key) => ({
    name: key,
    value: categoryTotals[key],
  }));

  return (
    <ResponsiveContainer width="100%" height={200}>
      <PieChart>
        <Pie data={data} dataKey="value" nameKey="name" outerRadius={80} label>
          {data.map((entry, index) => (
            <Cell key={index} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </ResponsiveContainer>
  );
};

export default ExpensePieChart;
