import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

function ProductListPage() {
	// The state variable `products` is currently an empty array [],
	// but you should use it to store the response from the Fake Store API (the list of products).
	const [products, setProducts] = useState([])

	useEffect(() => {
		fetch('https://fakestoreapi.com/products')
			.then((resp) => resp.json())
			.then((data) => {
				setProducts(data)
			})
	}, [])

	return (
		<>
			<div className="ProductListPage">
				{products.map((product) => {
					return (
						<Link to={`/product/details/${product.id}`} key={product.id}>
							<div className="product-card">
								<div className="product-card_thumbnail">
									<img src={product.image} alt={product.title} />
								</div>
								<div className="product-card_desc">
									<h3>{product.title}</h3>
									<p>{product.price}&nbsp;€</p>
									<p>{product.description}</p>
									<p>{product.category}</p>
									<p>
										Rating: {product.rating.rate} average | {product.rating.count} reviews
									</p>
								</div>
							</div>
						</Link>
					)
				})}
			</div>
		</>
	)
}

export default ProductListPage
