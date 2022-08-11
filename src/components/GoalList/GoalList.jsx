import React from 'react'
import GoalListItem from '../GoalListItem/GoalListItem';

export default function GoalList() {
    return (
        <div>
            <ul>
                <li><GoalListItem /></li>
                <li><GoalListItem /></li>
                <li><GoalListItem /></li>
                <li><GoalListItem /></li>
            </ul>
        </div>
    )
}