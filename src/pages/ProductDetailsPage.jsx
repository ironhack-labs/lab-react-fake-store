import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

function ProductDetailsPage({ product, setProduct }) {
	// The state variable `product` is currently an empty object {},
	// but you should use it to store the response from the Fake Store API (the product details).
	// const [product, setProduct] = useState({})

	let { productId } = useParams()

	useEffect(() => {
		async function prodDetailFetch() {
			try {
				let prodDetailResponse = await fetch(
					`https://fakestoreapi.com/products/${productId}`
				)
				let dataResponse = await prodDetailResponse.json()
				setProduct(dataResponse)
			} catch (error) {
				console.log(error)
			}
		}
		prodDetailFetch()
	}, [productId])

	// The `productId` coming from the URL parameter is available in the URL path.
	// You can access it with the `useParams` hook from react-router-dom.

	// To fetch the product details, set up an effect with the `useEffect` hook:

	return (
		<div className='ProductDetailsPage '>
			{/* Render product details here */}
			<div className='card'>
				<div className='container'>
					<img
						className='detail-page_image'
						src={product.image}
						alt=''
					/>
					<p className='detail-page_category'>{product.category}</p>
					<h2>{product.title}</h2>
					<div>
						<p>{product.description}</p>
						<p>{`$${product.price}`}</p>
					</div>
					<Link to='/'>
						<button className='detail-page_btn'>Back</button>
					</Link>
				</div>
			</div>
		</div>
	)
}

export default ProductDetailsPage
