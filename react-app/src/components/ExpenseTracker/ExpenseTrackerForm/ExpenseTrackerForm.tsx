import React from "react";

const ExpenseTrackerForm = () => {
  return (
    <>
      <label htmlFor="description" className="form-label">
        Description
      </label>
      <input id="description" type="text" className="form-control"></input>
      <label htmlFor="amount" className="form-label">
        Amount
      </label>
      <input id="amount" type="text" className="form-control"></input>
      <label htmlFor="category" className="form-label">
        Category
      </label>
      <input id="category" type="text" className="form-control"></input>
      <button className="btn btn-primary">Submit</button>
    </>
  );
};

export default ExpenseTrackerForm;
