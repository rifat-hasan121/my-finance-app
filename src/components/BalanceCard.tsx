// src/components/BalanceCard.tsx
import React from "react";

interface BalanceCardProps {
  title: string;
  amount: number;
  type?: "income" | "expense";
}

const BalanceCard: React.FC<BalanceCardProps> = ({ title, amount, type }) => {
  let bgColor = "bg-gray-100 text-gray-800";
  if (type === "income") bgColor = "bg-green-100 text-green-800";
  if (type === "expense") bgColor = "bg-red-100 text-red-800";

  return (
    <div className={`rounded-lg shadow p-4 ${bgColor}`}>
      <h3 className="text-lg font-medium">{title}</h3>
      <p className="text-2xl font-bold mt-2">৳{amount}</p>
    </div>
  );
};

export default BalanceCard;
