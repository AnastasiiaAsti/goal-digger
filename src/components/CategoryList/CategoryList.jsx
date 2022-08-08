export default function CategoryList({ categories }) {
    const cats = categories.map(cat =>
        <li
            key={cat}
            className={cat === activeCat ? 'active' : ''}
            onClick={() => setActiveCat(cat)}
        >
            {cat}
        </li>
    );
    return (
        <ul className="CategoryList">
            {cats}
        </ul>
    );
}