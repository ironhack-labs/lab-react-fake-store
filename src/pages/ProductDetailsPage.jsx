import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

function ProductDetailsPage() {
	// The state variable `product` is currently an empty object {},
	// but you should use it to store the response from the Fake Store API (the product details).
	const [product, setProduct] = useState({});
	const { productId } = useParams();

	const fetchProduct = async () => {
		try {
			const resp = await fetch(
				`https://fakestoreapi.com/products/${productId}`
			);
			const productFetch = await resp.json();
			console.log(productFetch);
			setProduct(productFetch);
		} catch (err) {
			console.log("expelliarmus! there was error fetching all spells", err);
		}
	};

	//useEffect for when the page first loads
	useEffect(() => {
		fetchProduct();
	}, [productId]);

	// The `productId` coming from the URL parameter is available in the URL path.
	// You can access it with the `useParams` hook from react-router-dom.

	// To fetch the product details, set up an effect with the `useEffect` hook:

	return (
		<div className="ProductDetailsPage">
			<img src={product.image} alt={product.tittle} />
			<h2>{product.category}</h2>
			<h3>{product.title}</h3>
			<div className="infoDetail">
				<p>{product.description}</p>
				<p>{product.price}</p>
			</div>
			<hr />
			<Link to="/">
				<button>Back</button>
			</Link>
		</div>
	);
}

export default ProductDetailsPage;
