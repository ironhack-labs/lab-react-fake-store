import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import "./ProductDetailsPage.css";

function ProductDetailsPage() {
	// The state variable `product` is currently an empty object {},
	// but you should use it to store the response from the Fake Store API (the product details).
	const [product, setProduct] = useState({});

	const params = useParams();

	const productId = params.productId;

	// The `productId` coming from the URL parameter is available in the URL path.
	// You can access it with the `useParams` hook from react-router-dom.

	// To fetch the product details, set up an effect with the `useEffect` hook:

	useEffect(() => {
		fetch(`https://fakestoreapi.com/products/${productId}`)
			.then((res) => res.json())
			.then((json) => setProduct(json));
	}, []);

	return (
		<div className="ProductDetailsPage">
			<img src={product.image} alt="" />
			<div className="category">{product.category}</div>
			<div className="title">{product.title}</div>
			<div className="description-price">
				<div className="description">{product.description}</div>
				<div className="price">{product.price}</div>
			</div>
      <div className="back-button">
        <Link to={"/"}>Back</Link>
      </div>
		</div>
	);
}

export default ProductDetailsPage;
