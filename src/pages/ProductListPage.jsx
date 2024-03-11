import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom/dist";

function ProductListPage() {
	// The state variable `products` is currently an empty array [],
	// but you should use it to store the response from the Fake Store API (the list of products).
	const [products, setProducts] = useState([]);

	// To fetch the list of products, set up an effect with the `useEffect` hook:

	useEffect(() => {
		async function getProducts() {
			axios(`https://fakestoreapi.com/products`)
				.then((res) => {
					setProducts(res.data);
				})
				.catch((error) => {
					console.log(error);
				});
		}
		getProducts();
	}, []);

	if (!products) {
		return <p>Loading...</p>;
	}

	return (
		<div className="ProductListPage">
			{products &&
				products.map((product) => (
					<Link key={product.id} to={`/product/details/${product.id}`}>
						<div key={product.id} className="product-card">
							<img
								src={product.image}
								alt={product.name}
								className="productImg"
							/>
							<h2>{product.title}</h2>
							<p className="productInfo">{product.category}</p>
							<p className="productInfo">{product.price}</p>
							<p className="productDescrip">{product.description}</p>
						</div>
					</Link>
				))}
		</div>
	);
}

export default ProductListPage;
