import { SubmitHandler, useForm } from "react-hook-form";
import { ExpenseItem, ExpenseItemCategories } from "./ExpenseItem";

interface Props {
  onAdd: (expense: ExpenseItem) => void;
}

const ExpenseTrackerForm = ({ onAdd }: Props) => {
  const { register, handleSubmit } = useForm<ExpenseItem>();

  const onSubmit: SubmitHandler<ExpenseItem> = (data) => onAdd(data);
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="description" className="form-label">
          Description
        </label>
        <input
          {...register("description", { required: true })}
          id="description"
          type="text"
          className="form-control"
        ></input>
        <label htmlFor="amount" className="form-label">
          Amount
        </label>
        <input
          {...register("amount", { required: true, min: 0 })}
          id="amount"
          type="number"
          step="any"
          className="form-control"
        ></input>
        <label htmlFor="category" className="form-label">
          Category
        </label>
        <select
          {...register("category", { required: true })}
          className="form-select"
          aria-label="Categories..."
        >
          {ExpenseItemCategories.filter(
            (category) => category != "All categories"
          ).map((category) => (
            <option key={category}>{category}</option>
          ))}
        </select>

        <button className="btn btn-primary">Submit</button>
      </form>
    </>
  );
};

export default ExpenseTrackerForm;
