import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function ProductListPage() {
	// The state variable `products` is currently an empty array [],
	// but you should use it to store the response from the Fake Store API (the list of products).
	const [products, setProducts] = useState([])

	// To fetch the list of products, set up an effect with the `useEffect` hook:
	useEffect(() => {
		try {
			fetch('https://fakestoreapi.com/products')
				.then((res) => res.json())
				.then((data) => {
					console.log(data)
					setProducts(data)
				})
		} catch (err) {
			console.log(err)
		}
	}, [])

	return (
		<div className="ProductListPage">
			<ul>
				{products.map((p) => (
					<li key={p.id}>
						<Link to={`/product/details/${p.id}`}>
							<div className="flex items-center gap-20 m-3 bg-white p-2">
								<img src={p.image} className="w-20 border-2" />
								<p className="w-60">{p.title}</p>
								<p className="text-black">{p.price}</p>
								<p className="text-black">{p.category}</p>
								<p className="w-60">{p.description.slice(0, 70)}</p>
							</div>
						</Link>
					</li>
				))}
			</ul>
		</div>
	)
}

export default ProductListPage
