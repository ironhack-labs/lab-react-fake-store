import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";



function ProductDetailsComponent ({id}) {
  // The state variable `product` is currently an empty object {},
  // but you should use it to store the response from the Fake Store API (the product details).
  const [product, setProduct] = useState({});


  // To fetch the product details, set up an effect with the `useEffect` hook:
   useEffect(() => {
	//Destructure props

	axios.get(`https://fakestoreapi.com/products/${id}`).then((response) => {
		setProduct(response.data)
	}).catch((error) => {
		console.log(error)
	})
}, [id])  

  return (
    <div className="ProductDetailsComponent
	">
   {product && (
				<article key={product.id}>
				<Link to={`/products/${product.id}`}>
				<h3><b>{product.title}</b></h3>
				</Link>
				<p>Price: {product.price} </p>
				<p>{product.description} </p>
				<img src={product.image}/>
				<p>Category: {product.category} </p>
				<Link to={`/`}>
				<button id="backBtn">Back</button>
				</Link>
				</article>
   )}
   
    </div>
)}

export default ProductDetailsComponent;

