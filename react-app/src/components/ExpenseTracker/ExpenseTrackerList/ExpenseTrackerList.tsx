import { ExpenseItem } from "../ExpenseItem";
import { ExpenseItemCategories } from "../ExpenseItem";

interface Props {
  expenses: ExpenseItem[];
  onDelete: (id: number) => void;
}

const ExpenseTrackerList = ({ expenses, onDelete }: Props) => {
  function getTotal() {
    let sum = 0;
    expenses.forEach((expense) => (sum += Number(expense.amount)));
    return sum.toFixed(2);
  }

  return (
    <>
      <select className="form-select" aria-label="Filter...">
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
          {expenses?.map((expense) => (
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
