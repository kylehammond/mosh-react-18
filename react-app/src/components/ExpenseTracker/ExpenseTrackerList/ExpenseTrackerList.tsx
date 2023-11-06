import React, { useState } from "react";

// interface ExpenseItem {
//   id: number
//   description: string;
//   amount: number;
//   category: string;
// }

const ExpenseTrackerList = () => {
  let categories = ["Groceries", "Utilities", "Entertainment"];

  let [expenses, setExpenses] = useState([
    { id: 1, description: "Some item ", amount: 1, category: "Groceries" },
  ]);

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
                <button className="btn btn-danger">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default ExpenseTrackerList;
