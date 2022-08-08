import GoalListItem from '../GoalListItem/GoalListItem';

export default function GoalList() {
    const goalListItems = orders.map(o =>
        <GoalListItem
            key={o._id}
        />
    );
    return (
        <div className="container">
            <ul>
                <li>{goalListItems}</li>
            </ul>
        </div>
    );
}