import { useEffect, useState } from "react";
import axios from "axios";

function CartPage() {
	const [cartProducts, setCartProducts] = useState([]);

	useEffect(() => {
		axios
			.get("https://fakestoreapi.com/carts/5")
			.then(async (cartResponse) => {
				const productsInCart = cartResponse.data.products;

				const productDetailsPromises = productsInCart.map((item) =>
					axios.get(`https://fakestoreapi.com/products/${item.productId}`),
				);

				const productDetailsResponses = await Promise.all(
					productDetailsPromises,
				);

				const productsWithQuantity = productDetailsResponses.map(
					(res, index) => ({
						...res.data,
						quantity: productsInCart[index].quantity,
					}),
				);

				setCartProducts(productsWithQuantity);
			})
			.catch((e) => {
				console.log("Error fetching cart:", e);
			});
	}, []);

	return (
		<div className="p-4">
			<h1 className="text-2xl font-bold mb-4">Shopping Cart</h1>

			{cartProducts.length === 0 ? (
				<p>Your cart is empty.</p>
			) : (
				<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
					{cartProducts.map((product) => (
						<div key={product.id} className="border p-4 rounded-md flex">
							<img
								src={product.image}
								alt={product.title}
								className="w-24 h-24 object-contain mr-4"
							/>
							<div>
								<h2 className="font-bold">{product.title}</h2>
								<p>Price: ${product.price}</p>
								<p>Quantity: {product.quantity}</p>
								<p>Total: ${(product.price * product.quantity).toFixed(2)}</p>
							</div>
						</div>
					))}
				</div>
			)}
		</div>
	);
}

export default CartPage;
