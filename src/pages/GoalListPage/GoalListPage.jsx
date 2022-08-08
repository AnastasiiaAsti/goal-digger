import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import GoalList from '../../components/GoalList/GoalList';


export default function OrderHistoryPage() {
    return (
        <main className='GoalListPage'>
            <aside>
                <Link to="" className="btn btn-lg">Go Dig New Goals!</Link>
            </aside>
            <GoalList/>
        </main>
    );
}