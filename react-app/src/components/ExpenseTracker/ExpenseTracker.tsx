import ExpenseTrackerForm from "./ExpenseTrackerForm";
import ExpenseTrackerList from "./ExpenseTrackerList";
import useExpenseTracker from "./useExpenseTracker";

const ExpenseTracker = () => {
  const [expenses, handleAdd, handleDelete] = useExpenseTracker();

  return (
    <>
      <ExpenseTrackerForm onAdd={handleAdd} />
      <ExpenseTrackerList expenses={expenses} onDelete={handleDelete} />
    </>
  );
};

export default ExpenseTracker;
