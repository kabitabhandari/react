const products = [
    { title: 'Cabbage', id: 1 },
    { title: 'Garlic', id: 2 },
    { title: 'Apple', id: 3 },
];

export default function ComponentRenderingList() {
    const listItems = products.map(product =>
        <li key={product.id}>
            {product.title}
        </li>
    );

    return (
        <>
            <h1>ComponentRenderingList</h1>
            <ul>{listItems}</ul>
        </>
    );
}