import NewGoalForm from "../../components/NewGoalForm/NewGoalForm";
import { useState, useEffect } from "react";
import * as goalsAPI from "../../utilities/goals-api";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import CloseButton from "react-bootstrap/CloseButton";
import Img from "./img.png";
import Image from "react-bootstrap/Image";

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

  const handleClick = (event) => {
    if (event.target.style.textDecoration) {
      event.target.style.removeProperty("text-decoration");
    } else {
      event.target.style.setProperty("text-decoration", "line-through");
    }
  };

  return (
    <Container className="">
      <Row className="">
        <Col
          lg={9}
          md={12}
          sm={12}
          className="overflow-scroll sec1 rounded mt-5 p-3"
        >
          {goal.map((item, key) => {
            return (
              <div className="d-flex justify-content-between">
                <CloseButton
                  onClick={() => deleteGoal(item)}
                  className="btn"
                ></CloseButton>
                <h3 onClick={handleClick} key={key}>
                  {item.name}
                </h3>
              </div>
            );
          })}
        </Col>
        <Col lg={3} md={12} sm={12} className="sec2 rounded mt-5">
          <NewGoalForm className="mt-5" addGoal={addGoal} />
          <Image className="img-fluid p-3 rounded" src={Img} />
        </Col>
      </Row>
    </Container>
  );
}
