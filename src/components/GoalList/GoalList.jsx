import GoalListItem from '../GoalListItem/GoalListItem';

export default function GoalList({ lists }) {
    const goalListItems = lists.map(l =>
        <GoalListItem
            list={l}
            key={l._id}
        />
    );
    return (
        <main className="GoalList">
            {goalListItems}
    </main>
    )
}