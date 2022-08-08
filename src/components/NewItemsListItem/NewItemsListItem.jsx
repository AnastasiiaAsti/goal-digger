export default function NewItemsListItem({newListItem}) {
    return (
        <div className="NewItemsListItem">
            <div className="name">{newListItem.name}</div>
            <div className="image">{newListItem.photoUrl}</div>
            <div className="links">{ newListItem.links}</div>
        </div>
    )
}