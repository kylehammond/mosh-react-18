import React, { FormEvent, useState } from "react";

// interface ExpenseItem {
//   id: number
//   description: string;
//   amount: number;
//   category: string;
// }

const ExpenseTrackerList = () => {
  const [expenses, setExpenses] = useState([
    { id: 1, description: "Some item ", amount: 1, category: "Groceries" },
    { id: 2, description: "Some item ", amount: 3, category: "Groceries" },
  ]);

  const handleDelete = (expenseId: number) => {
    setExpenses(expenses.filter((expense) => expense.id !== expenseId));
  };

  const categories = [
    "All categories",
    "Groceries",
    "Utilities",
    "Entertainment",
  ];

  return (
    <>
      <select className="form-select" aria-label="Filter...">
        {categories.map((category) => (
          <option key={category}>{category}</option>
        ))}
      </select>
      <table className="table">
        <thead>
          <tr>
            <th>Description</th>
            <th>Amount</th>
            <th>Category</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {expenses.map((expense) => (
            <tr key={expense.id}>
              <td>{expense.description}</td>
              <td>{expense.amount}</td>
              <td>{expense.category}</td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => handleDelete(expense.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default ExpenseTrackerList;
