// src/lib/helpers.ts
export const formatCurrency = (amount: number) => {
  return `৳${amount.toLocaleString("en-BD")}`;
};

export const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-BD", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
};
