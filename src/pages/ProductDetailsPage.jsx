import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

function ProductDetailsPage() {
	const { productId } = useParams();

	const [product, setProduct] = useState({});

	const baseURL = "https://fakestoreapi.com";

	useEffect(() => {
		axios
			.get(`${baseURL}/products/${productId}`)
			.then((response) => {
				setProduct(response.data);
			})
			.catch((error) => {
				console.log("ops... product not found", error);
			});
	}, [productId]);

	return (
		<div className="ProductDetailsPage" key={productId}>
			<img src={product.image} alt="picture of product" />
			<p className="category">{product.category}</p>
			<h1>{product.title}</h1>
			<div className="price-container">
				<p>{product.description}</p>
				<p className="price">${product.price}</p>
			</div>
			<Link to="/">
				<button>Home</button>
			</Link>
		</div>
	);
}

export default ProductDetailsPage;
