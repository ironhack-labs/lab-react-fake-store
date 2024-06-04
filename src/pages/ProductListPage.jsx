import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function ProductListPage() {
	// The state variable `products` is currently an empty array [],
	// but you should use it to store the response from the Fake Store API (the list of products).
	const [products, setProducts] = useState([]);

	useEffect(() => {
		fetch(`https://fakestoreapi.com/products`)
			.then((res) => res.json())
			.then((data) => {
				console.log('clothes list', data);
				setProducts(data);
			})
			.catch((err) => console.log(err));
	}, []);

  if(!products){
    return <div>Loading...</div>;
  }

	return (
		<div className="all-products-list">
			{products.map((product, index) => (
				<Link
					key={product.id}
					to={`/product/details/${product.id}`}
				>
					<div
						key={product.id}
						className="productListPage"
					>
						<img
							src={product.image}
							alt={product.title}
						/>
						<h2>
							<strong>{product.title}</strong>
						</h2>
						<p>{product.category}</p><br/>
						<p>${product.price}</p><br/>
						<p>{product.description.slice(0,100)+ "..."}</p><br/>
					</div>
				</Link>
			))}
		</div>
	);
}

export default ProductListPage;
