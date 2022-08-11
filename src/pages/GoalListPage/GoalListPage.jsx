import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import * as listsAPI from '../../utilities/lists-api';
import GoalList from '../../components/GoalList/GoalList';
import Header from "../../components/Header/Header";
import AddGoal from "../../components/AddGoal/AddGoal";


export default function GoalListPage({ user, setUser }) {
    const [lists, setLists] = useState([]);
    const [selectedList, setSelectedList] = useState(null);

    useEffect(function() {
        async function getLists() {
            const lists = await listsAPI.getAllForUser();
            setLists(lists);
            setSelectedList(lists[0]);
        }
        getLists();
}, []);

    return (


        <div className="container">
            <div className="row">
                <div className="col-12 d-flex justify-content-between align-items-center mt-5">
                    <div className="sec2 col-3 rounded">
                        <Link to="/lists/new" className="btn btn-lg border">Go Dig New Goals!</Link>
                        <AddGoal />
                    </div>
                    <div className="sec1 col-8 rounded">
                        <Header />
                        <GoalList/>
                    </div>
                </div>
            </div>
        </div>
    );
}