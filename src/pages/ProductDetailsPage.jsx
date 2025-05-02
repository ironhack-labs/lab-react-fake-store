import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

function ProductDetailsPage() {
	const { productId } = useParams();
	// The state variable `product` is currently an empty object {},
	// but you should use it to store the response from the Fake Store API (the product details).
	const [product, setProduct] = useState({});

	// The `productId` coming from the URL parameter is available in the URL path.
	// You can access it with the `useParams` hook from react-router-dom.

	// To fetch the product details, set up an effect with the `useEffect` hook:
	useEffect(() => {
		fetch(`https://fakestoreapi.com/products/${productId}`)
			.then((res) => res.json())
			.then((data) => {
				setProduct(data);
			})
			.catch((err) => console.log(err));
	}, [productId]);

  if (!product) {
    return <div>Loading...</div>;
}

	console.log(product);
	return (
		<div>
			<div className="ProductDetailsPage">
				<div className='img-block'>
					<img
						src={product.image}
						alt={product.title}
					/>
				</div>
				<div className='product-info'>
					<div className='product-info-more'>
						<label>{product.category}</label><br/>
						<strong>
							<h2>{product.title}</h2>
						</strong><br/>
						<h3>{product.description}</h3><br/>
					</div>
					<div className='info-price'>
						<h2>${product.price}</h2>
					</div>
				</div>
			</div>
			<Link to="/">
				<button className="btn-primary">Back</button>
			</Link>
		</div>
	);
}

export default ProductDetailsPage;
