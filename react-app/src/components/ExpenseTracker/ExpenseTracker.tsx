import { useState } from "react";
import ExpenseTrackerForm from "./ExpenseTrackerForm/ExpenseTrackerForm";
import ExpenseTrackerList from "./ExpenseTrackerList/ExpenseTrackerList";
import { ExpenseItem } from "./ExpenseItem";

const ExpenseTracker = () => {
  const [expenses, setExpenses] = useState<ExpenseItem[]>([
    { id: 1, description: "Baked beans", amount: 1.99, category: "Groceries" },
    { id: 2, description: "Bread", amount: 3.99, category: "Groceries" },
    { id: 3, description: "Electric", amount: 130.32, category: "Utilities" },
    { id: 4, description: "Water", amount: 40.48, category: "Utilities" },
    { id: 6, description: "Netflix", amount: 20.0, category: "Entertainment" },
  ]);

  const handleAdd = (expense: ExpenseItem) => {
    const ids = expenses.map((expense) => expense.id);
    let newId = Math.max(...ids) + 1;
    let newExpenseItem = { ...expense, id: newId };
    setExpenses([...expenses, newExpenseItem]);
  };

  const handleDelete = (expenseId: number) => {
    setExpenses(expenses.filter((expense) => expense.id !== expenseId));
  };

  return (
    <>
      <ExpenseTrackerForm onAdd={handleAdd} />
      <ExpenseTrackerList expenses={expenses} onDelete={handleDelete} />
    </>
  );
};

export default ExpenseTracker;
