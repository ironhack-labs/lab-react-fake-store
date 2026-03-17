import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function ProductListPage() {
	// The state variable `products` is currently an empty array [],
	// but you should use it to store the response from the Fake Store API (the list of products).
	const [products, setProducts] = useState([]);

	// To fetch the list of products, set up an effect with the `useEffect` hook:
	useEffect(() => {
		axios
			.get("https://fakestoreapi.com/products")
			.then((response) => {
				setProducts(response.data);
			})
			.catch((e) => {
				console.log("ops...we have a problem to getting the list", e);
			});
	}, []);

	return (
		<div className="ProductListPage">
			{products.map((productObj) => {
				return (
					<>
						<div key={productObj.id} className="ProductList">
							<img src={productObj.image} alt="picture of product" />
							<div>
								<h1>{productObj.title}</h1>
								<p>{productObj.category}</p>
								<p>${productObj.price}</p>
								<p>{productObj.description}</p>
								<Link to={`/product/details/${productObj.id}`}>
									<button>Details</button>
								</Link>
							</div>
						</div>
					</>
				);
			})}
		</div>
	);
}

export default ProductListPage;
