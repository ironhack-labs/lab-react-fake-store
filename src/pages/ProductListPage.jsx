import { useState, useEffect } from 'react';
import ItemCard from '../components/ItemCard';
import { Link } from 'react-router-dom';

function ProductListPage() {
	// The state variable `products` is currently an empty array [],
	// but you should use it to store the response from the Fake Store API (the list of products).
	const [products, setProducts] = useState([]);
	useEffect(() => {
		fetch('https://fakestoreapi.com/products')
			.then((res) => res.json())
			.then((json) => setProducts(json));
	}, []);
	// To fetch the list of products, set up an effect with the `useEffect` hook:
	return (
		<div className=" ProductListPage flex flex-col">
			{products.map((product) => (
				<Link key={product.id} to={`/product/details/${product.id}`}>
					<ItemCard
						id={product.id}
						title={product.title}
						category={product.category}
						description={product.description}
						image={product.image}
						price={product.price}
						ratingCount={product.rating.count}
						ratingRate={product.rating.rate}
					/>
				</Link>
			))}
		</div>
	);
}

export default ProductListPage;
