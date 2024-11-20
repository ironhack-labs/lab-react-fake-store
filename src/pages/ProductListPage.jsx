import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function ProductListPage() {
	// The state variable `products` is currently an empty array [],
	// but you should use it to store the response from the Fake Store API (the list of products).
	const [products, setProducts] = useState([])

	// To fetch the list of products, set up an effect with the `useEffect` hook:
	useEffect(() => {
		async function fakeStoreFetch() {
			try {
				const initialResponse = await fetch(
					'https://fakestoreapi.com/products'
				)
				const data = await initialResponse.json()
				setProducts(data)
			} catch (error) {
				console.log(error)
			}
		}
		fakeStoreFetch()
	}, [])

	return (
		<div className='ProductListPage'>
			{/* Render list of products here */}
			{products &&
				products.map((product) => {
					return (
						<Link to={`/product/details/${product.id}`}>
							<div
								key={product.id}
								className='container card flex-center'
							>
								<img
									className='card-image content '
									src={product.image}
									alt=''
								/>
								<h4 className='content shifted'>
									{product.title}
								</h4>
								<p className='content shifted'>
									{product.category}
								</p>
								<p className='content shifted'>{`$${product.price}`}</p>
								<p className='content shifted'>
									{product.description
										.split(' ')
										.slice(0, 10)
										.join(' ')}
								</p>
								{/* <p className='content shifted'>
									{product.description}
								</p> */}
							</div>
						</Link>
					)
				})}
		</div>
	)
}

export default ProductListPage
