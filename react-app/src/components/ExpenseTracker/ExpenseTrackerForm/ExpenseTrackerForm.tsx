import { SubmitHandler, useForm } from "react-hook-form";
import { ExpenseItem, ExpenseItemCategories } from "../ExpenseItem";

interface Inputs {
  description: string;
  amount: number;
  category: string;
}

interface Props {
  onAdd: (expense: ExpenseItem) => void;
}

const ExpenseTrackerForm = ({ onAdd }: Props) => {
  const { register, handleSubmit } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    onAdd(data as ExpenseItem);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="description" className="form-label">
          Description
        </label>
        <input
          {...register("description")}
          id="description"
          type="text"
          className="form-control"
        ></input>
        <label htmlFor="amount" className="form-label">
          Amount
        </label>
        <input
          {...register("amount")}
          id="amount"
          type="text"
          className="form-control"
        ></input>
        <label htmlFor="category" className="form-label">
          Category
        </label>
        <select
          {...register("category")}
          className="form-select"
          aria-label="Categories..."
        >
          {ExpenseItemCategories.map((category) => (
            <option key={category}>{category}</option>
          ))}
        </select>

        <button className="btn btn-primary">Submit</button>
      </form>
    </>
  );
};

export default ExpenseTrackerForm;
