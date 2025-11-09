import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function ProductDetailsPage() {
	// The state variable `product` is currently an empty object {},
	// but you should use it to store the response from the Fake Store API (the product details).
	const [product, setProduct] = useState({})

	// The `productId` coming from the URL parameter is available in the URL path.
	// You can access it with the `useParams` hook from react-router-dom.
	const { productId } = useParams()

	// To fetch the product details, set up an effect with the `useEffect` hook:
	useEffect(() => {
		console.log(productId)
		fetch(`https://fakestoreapi.com/products/${productId}`)
			.then((res) => res.json())
			.then((data) => {
				console.log(data)
				setProduct(data)
			})
	}, [])

	return (
		<div className="flex flex-col items-start gap-5 p-5">
			<img src={product.image} className="w-60 border-2" />
			<p className="bg-blue-500 rounded p-0.5">{product.category}</p>
			<p className="font-bold">{product.title}</p>
			<div className="flex gap-40">
				<p className="w-96">{product.description}</p>
				<p className="text-blue-700 font-bold text-2xl">${product.price}</p>
			</div>
		</div>
	)
}

export default ProductDetailsPage
