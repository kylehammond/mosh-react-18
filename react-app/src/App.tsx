import React, { useState } from "react";
import "./App.css";
import ExpenseTrackerForm from "./components/ExpenseTracker/ExpenseTrackerForm/ExpenseTrackerForm";
import ExpenseTrackerList from "./components/ExpenseTracker/ExpenseTrackerList/ExpenseTrackerList";

function App() {
  const [expenseList, setExpenseList] = useState(null);

  return (
    <>
      <ExpenseTrackerForm />
      <ExpenseTrackerList />
    </>
  );
}

export default App;
