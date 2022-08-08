import GoalListItem from '../GoalListItem/GoalListItem';

export default function GoalList({list}) {
    const goalListItems = list.map(l =>
        <GoalListItem
            list={l}
            key={l._id}
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