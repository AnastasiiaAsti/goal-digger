import NewItemsListItem from '../NewItemsListItem/NewItemsListItem';

export default function NewItemsList({ newListItems }) {
    const items = newListItems.map(item =>
        <NewItemsListItem
            key={item._id}
            newListItem={item}
        />
    );
    return (
        <main className="NewItemsList">
            {items}
    </main>
    )
}