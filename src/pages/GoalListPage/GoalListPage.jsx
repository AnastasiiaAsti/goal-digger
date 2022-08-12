import Header from "../../components/Header/Header";
import NewGoalForm from "../../components/NewGoalForm/NewGoalForm";
import { useState, useEffect } from "react";
import * as goalsAPI from "../../utilities/goals-api";

export default function GoalListPage({ user, setUser, goals }) {
  const [goal, setGoal] = useState([""]);

  useEffect(function () {
    async function getGoal() {
      const list = await goalsAPI.getAllGoals();
      setGoal(list);
    }
    getGoal();
  }, []);

  async function addGoal(newGoal) {
    const goalResponse = await goalsAPI.addGoal(newGoal);
    setGoal([...goal, goalResponse]);
  }

  async function deleteGoal(delGoal) {
    await goalsAPI.deleteGoal(delGoal._id);
    const goalCopy = [...goal];
    const newGoals = goalCopy.filter((g) => g._id !== delGoal._id);
    setGoal(newGoals);
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-12 d-flex justify-content-between mt-5">
          <div className="sec2 col-3 rounded">
            <NewGoalForm addGoal={addGoal} />
          </div>
          <div className="overflow-scroll sec1 col-8 rounded">
            <Header />
            {goal.map((item) => {
              return (
                <div className="d-flex justify-content-between m-4 border-bottom">
                  <button onClick={() => deleteGoal(item)} className="btn">
                    x
                  </button>
                  <h3 className="text-center bg-transparent">{item.name}</h3>
                  <input type="checkbox" className="m-3" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
