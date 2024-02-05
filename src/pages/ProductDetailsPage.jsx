import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemCard from '../components/ItemCard';
function ProductDetailsPage() {
	// The state variable `product` is currently an empty object {},
	// but you should use it to store the response from the Fake Store API (the product details).
	const [product, setProduct] = useState({});
	const { productId } = useParams();
	useEffect(() => {
		fetch(`https://fakestoreapi.com/products/${productId}`)
			.then((res) => res.json())
			.then((json) => setProduct(json));
		console.log(`in`);
	}, []);
	console.log(product);
	// The `productId` coming from the URL parameter is available in the URL path.
	// You can access it with the `useParams` hook from react-router-dom.

	// To fetch the product details, set up an effect with the `useEffect` hook:

	return (
		<div className="ProductDetailsPage">
			{product.id && (
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
			)}
		</div>
	);
}

export default ProductDetailsPage;
