import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

function ProductDetailsPage() {
	const [product, setProduct] = useState({})

	const urlID = useParams().productId
	useEffect(() => {
		fetch(`https://fakestoreapi.com/products/${urlID}`)
			.then((resp) => resp.json())
			.then((data) => {
				setProduct(data)
			})
	}, [urlID])

	return (
		<div className="ProductDetailsPage">
			<div className="product-card">
				<div className="product-card_thumbnail">
					<img src={product.image} alt={product.title} />
				</div>
				<div className="product-card_desc">
					<h3>{product.title}</h3>
					<p>{product.price}&nbsp;€</p>
					<p>{product.description}</p>
					<p>{product.category}</p>
				</div>
			</div>
		</div>
	)
}

export default ProductDetailsPage