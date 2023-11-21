export interface ExpenseItem {
  id: number;
  description: string;
  amount: number;
  category: string;
}

export const ExpenseItemCategories = [
  "All categories",
  "Groceries",
  "Utilities",
  "Entertainment",
];
