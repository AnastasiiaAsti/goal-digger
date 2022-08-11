import { useState } from 'react';
import { Link } from 'react-router-dom';
import * as listsAPI from '../../utilities/lists-api';
import Header from "../../components/Header/Header";



export default function GoalListPage({ user, setUser }) {
    const [goals, setGoals] = useState([
        {
            name: 'go to paris',
        }
    ]);
    const [goalName, setGoalName] = useState("");

    const addGoal = (evt) => {
        evt.preventDefault();
        const newGoal = {
            checked: false,
            name: goalName
        }
        setGoals([...goals, newGoal]);
        setGoalName('');
    }

    const toggleGoal = (index) => {

    }


    return (


        <div className="container">
            <div className="row">
                <div className="col-12 d-flex justify-content-between mt-5">
                    <div className="sec2 col-3 rounded">
                        <Link to="/lists/new" className="btn btn-lg border mt-5">Go Dig New Goals!</Link>
                        <div>
                            <form onSubmit={addGoal} className='form-group m-4'>
                                <input
                                    value={goalName}
                                    onChange={(evt) => setGoalName(evt.target.value)}
                                    type="text"
                                    name="name"
                                    placeholder='add your goal'
                                    className='form-control rounded mt-5' />
                                {/* <input
                                    type="text"
                                    name="links"
                                    placeholder='add relevant link'
                                    className='form-control rounded mt-4' />
                                <select className='form-control mt-4' name="category" id="">
                                    <option value="Travel">Travel</option>
                                    <option value="Experience">Experience</option>
                                    <option value="Things">Things</option>
                                    <option value="Skills">Skills</option>
                                </select> */}
                                <button type='submit' className='btn form-control rounded border mt-4'>ADD</button>
                            </form>
                        </div>
                    </div>
                    <div className="sec1 col-8 rounded">
                        <Header />
                        <div>
                            {goals.map((goal, index) => (
                                <div
                                    key={index}
                                    className='d-flex justify-content-between m-4 border-bottom'>
                                    <button className="btn">x</button>
                                    <h3 className='text-center bg-transparent'>
                                        {goal.name}
                                    </h3>
                                    <input onChange={() => toggleGoal(index)}type="checkbox" className='m-3' />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}