import { useEffect, useState } from 'react'

function ProductListPage() {
	// The state variable `products` is currently an empty array [],
	// but you should use it to store the response from the Fake Store API (the list of products).
	const [products, setProducts] = useState([])
	const [cart, setCart] = useState([])
	const [productIds, setProductsIds] = useState([])

	// To fetch the list of products, set up an effect with the `useEffect` hook:
	useEffect(() => {
		try {
			fetch('https://fakestoreapi.com/carts/5')
				.then((res) => res.json())
				.then((data) => {
					console.log('Cart: ', data)
					setCart(data)
					const ids = data.products.map((c) => c.productId)
					setProductsIds(ids)
					console.log('ids: ', ids)
				})

			fetch('https://fakestoreapi.com/products')
				.then((res) => res.json())
				.then((data) => {
					setProducts(data.filter((product) => productIds.includes(product.id)))
				})
		} catch (err) {
			console.log(err)
		}
	}, [])

	return (
		<div className="ProductListPage p-5">
			<h2 className="text-2xl font-bold mb-5">Shopping Cart</h2>

			{cart.products && (
				<div>
					<ul className="space-y-4">
						{cart.products.map((cartItem) => {
							const product = products.find((p) => p.id === cartItem.productId)
							return product ? (
								<li
									key={cartItem.productId}
									className="border p-4 rounded flex items-center gap-5"
								>
									<img
										src={product.image}
										className="w-16 h-16 object-contain"
									/>
									<div className="flex-1">
										<h3 className="font-bold">{product.title}</h3>
										<p>Quantity: {cartItem.quantity}</p>
										<p>Price: ${product.price}</p>
										<p className="font-bold">
											Total: ${(product.price * cartItem.quantity).toFixed(2)}
										</p>
									</div>
								</li>
							) : null
						})}
					</ul>

					<div className="mt-5 p-4 bg-gray-100 rounded">
						<h3 className="text-xl font-bold">
							Cart Total: $
							{cart.products
								.reduce((total, cartItem) => {
									const product = products.find(
										(p) => p.id === cartItem.productId
									)
									return (
										total + (product ? product.price * cartItem.quantity : 0)
									)
								}, 0)
								.toFixed(2)}
						</h3>
					</div>
				</div>
			)}
		</div>
	)
}

export default ProductListPage
