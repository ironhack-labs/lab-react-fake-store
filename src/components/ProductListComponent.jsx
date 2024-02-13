import axios from 'axios';
import {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';


function ProductListComponent() {
  // The state variable `products` is currently an empty array [], 
  // but you should use it to store the response from the Fake Store API (the list of products).
  const [products, setProducts] = useState([]);

  // To fetch the list of products, set up an effect with the `useEffect` hook:
  useEffect(() => {
		axios.get("https://fakestoreapi.com/products").then((response) => {
			console.log(response)
			setProducts(response.data)
		}).catch((error) => {
			console.log(error)
		});
	}, [])
//pay attention, here I should return for produt not products, I am going to detail 
  return (
    <div className="ProductListComponent">
			{products && products.map((product) => (
				<article key={product.id}>
				<img  id="cardImg" src={product.image} />
				<div className='cardText'>
				<Link to={`/product/details/${product.id}`}>
				<h3><b>{product.title}</b></h3>
				</Link>
				<p>Price: {product.price} </p>
				<p>{product.description} </p>
				<p>Category: {product.category} </p>
				</div>
				</article>
			))}
    </div>
  );
}

export default ProductListComponent;
