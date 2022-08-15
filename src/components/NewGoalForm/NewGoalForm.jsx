import { useState } from "react";

export default function NewGoalForm({ addGoal }) {
  const [goalForm, setGoalForm] = useState({
    name: "",
  });

  async function handleSubmit(evt) {
    evt.preventDefault();
    addGoal(goalForm);
    console.log(goalForm);
    setGoalForm({
      name: "",
    });
  }

  function handleChange(evt) {
    let newGoalForm = {
      ...goalForm,
      [evt.target.name]: evt.target.value,
    };
    setGoalForm(newGoalForm);
  }

  return (
    <form onSubmit={handleSubmit} className="form-group m-4">
      <input
        type="text"
        name="name"
        value={goalForm.name}
        placeholder="add your goal"
        className="form-control rounded mt-5"
        onChange={handleChange}
        required
      ></input>
      <button
        className="btn form-control rounded border-dark mt-4"
        type="submit"
      >
        ADD
      </button>
    </form>
  );
}
