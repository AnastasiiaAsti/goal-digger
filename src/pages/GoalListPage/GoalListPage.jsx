import Header from "../../components/Header/Header";
import NewGoalForm from "../../components/NewGoalForm/NewGoalForm";
import { useState, useEffect } from "react";
import * as goalsAPI from "../../utilities/goals-api";

export default function GoalListPage({ user, setUser, goals }) {
  const [goal, setGoal] = useState(null);

  useEffect(function () {
    async function getGoal() {
      let list = await goalsAPI.getAllGoals();
      console.log(list);
      setGoal(list);
    }
    getGoal();
  }, []);

  function addGoal(newGoal) {
    goalsAPI.addGoal(newGoal);
    setGoal([...goal, newGoal]);
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-12 d-flex justify-content-between mt-5">
          <div className="sec2 col-3 rounded">
            <NewGoalForm addGoal={addGoal} />
          </div>
          <div className="sec1 col-8 rounded">
            <Header />
            <div>
              <div className="d-flex justify-content-between m-4 border-bottom">
                <button className="btn">x</button>
                <h3 className="text-center bg-transparent"></h3>
                <input type="checkbox" className="m-3" />
              </div>

              <p>no goals yet</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

{
  /* {goal.map((goal, index) => (
                  <div
                    key={index}
                    className="d-flex justify-content-between m-4 border-bottom"
                  >
                    <button className="btn">x</button>
                    <h3 className="text-center bg-transparent">{goal.name}</h3>
                    <input type="checkbox" className="m-3" />
                  </div>
                ))} */
}
