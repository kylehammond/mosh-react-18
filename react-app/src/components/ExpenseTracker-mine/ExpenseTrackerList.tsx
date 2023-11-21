import { useState } from "react";
import { ExpenseItem } from "./ExpenseItem";
import { ExpenseItemCategories } from "./ExpenseItem";

interface Props {
  expenses: ExpenseItem[];
  onDelete: (id: number) => void;
}

const ExpenseTrackerList = ({ expenses, onDelete }: Props) => {
  const [selectedCategory, setSelectedCategory] = useState<string>();

  function getFilteredItems(expenses: ExpenseItem[]) {
    return !selectedCategory || selectedCategory === "All categories"
      ? expenses
      : expenses.filter((expense) => expense.category === selectedCategory);
  }

  function getTotal() {
    let sum = 0;
    getFilteredItems(expenses).forEach(
      (expense) => (sum += Number(expense.amount))
    );
    return sum.toFixed(2);
  }

  return (
    <>
      <select
        onChange={(event) => setSelectedCategory(event.target.value)}
        className="form-select"
        aria-label="Filter..."
      >
        {ExpenseItemCategories.map((category) => (
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
          {getFilteredItems(expenses).map((expense) => (
            <tr key={expense.id}>
              <td>{expense.description}</td>
              <td>{expense.amount}</td>
              <td>{expense.category}</td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => onDelete(expense.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
          <tr>
            <td></td>
            <td>Total: {getTotal()}</td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default ExpenseTrackerList;
