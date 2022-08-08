import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import * as listsAPI from '../../utilities/lists-api';
import GoalList from '../../components/GoalList/GoalList';


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
        <main className='GoalListPage'>
            <aside>
                <Link to="/lists/new" className="btn btn-lg">Go Dig New Goals!</Link>
            </aside>
            <GoalList
                lists={lists}
                selectedList={selectedList}
                setSelectedList={setSelectedList}/>
        </main>
    );
}