// src/components/TransactionList.tsx
import React from "react";

interface Transaction {
  _id: string;
  amount: number;
  type: "income" | "expense";
  category: string;
  note: string;
  date: string;
}

interface TransactionListProps {
  transactions: Transaction[];
}

const TransactionList: React.FC<TransactionListProps> = ({ transactions }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">
              Date
            </th>
            <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">
              Category
            </th>
            <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">
              Note
            </th>
            <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">
              Amount
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {transactions.map((t) => (
            <tr key={t._id}>
              <td className="px-4 py-2">{t.date}</td>
              <td className="px-4 py-2">{t.category}</td>
              <td className="px-4 py-2">{t.note}</td>
              <td
                className={`px-4 py-2 font-bold ${
                  t.type === "income" ? "text-green-600" : "text-red-600"
                }`}
              >
                {t.type === "income" ? "+" : "-"}৳{t.amount}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionList;
