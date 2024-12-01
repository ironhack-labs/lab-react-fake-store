import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import "./CartPage.css";

function CartPage() {
	// The state variable `product` is currently an empty object {},
	// but you should use it to store the response from the Fake Store API (the product details).
	// const [cart, setCart] = useState([]);
	const [products, setProducts] = useState([]);

	const cartId = 5;

	// The `productId` coming from the URL parameter is available in the URL path.
	// You can access it with the `useParams` hook from react-router-dom.

	// To fetch the product details, set up an effect with the `useEffect` hook:

	useEffect(() => {
		fetch(`https://fakestoreapi.com/carts/${cartId}`)
			.then((res) => {
				console.log("step 1", res);
				return res.json();
			})
			.then((json) => {
				console.log("step 2", json);
				return json.products;
			})
			.then((cartIds) => {
				console.log("step 3", cartIds);
				return Promise.all(
					cartIds.map((product) => {
						return fetch(
							`https://fakestoreapi.com/products/${product.productId}`
						)
							.then((res) => {
								return res.json();
							})
					})
				);
			})
			.then((productsInCart) => {
				console.log("step 4", productsInCart);
				setProducts(productsInCart);
			});
	}, []);

	return (
		<div className="CartPage">
			{products.map((product) => {
				return (
					<div key={product.id} className="product-card">
						<img  src={product.image} alt="" />
						<div className="category">{product.category}</div>
						<div className="title">{product.title}</div>
						<div className="description-price">
							<div className="description">{product.description}</div>
							<div className="price">{product.price}</div>
						</div>
					</div>
				);
			})}
			<div className="back-button">
				<Link to={"/"}>Back</Link>
			</div>
		</div>
	);
}

export default CartPage;
