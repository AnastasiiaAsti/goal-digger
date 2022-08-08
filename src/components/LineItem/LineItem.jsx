export default function LineItem({ lineItem }){
    return (
        <div>
            <div>{lineItem.item.photoUrl}</div>
            <div>
                <span>{lineItem.item.name}</span>
                <span>{ lineItem.item.links}</span>
            </div>
        </div>
)
    }