import { useState , useEffect } from "react";
import {useParams} from 'react-router-dom'
import axios from "axios";
import { Link } from 'react-router-dom'



function ProductDetailsPage() {
  // The state variable `product` is currently an empty object {},
  // but you should use it to store the response from the Fake Store API (the product details).
  const [product, setProduct] = useState({});
  const {id} = useParams();
  
  useEffect(()=>{
    axios.get(`https://fakestoreapi.com/products/${id}`)
    .then((response)=>{
        //console.log(reponse)
        setProduct(response.data);
    })
    .catch((error)=>{
        console.log(error)
    })
},[])


  // The `productId` coming from the URL parameter is available in the URL path.
  // You can access it with the `useParams` hook from react-router-dom.


  // To fetch the product details, set up an effect with the `useEffect` hook:



  return (
    <div className="ProductDetailsPage">
      <article id={product.id}/>
      <img className="product-img" src={product.image}></img>
      <h3>{product.title}</h3>
      <p>{product.category}</p>
      <p>{product.description}</p>
      <p><strong>${product.price} </strong></p>
      <Link to="/"> <button> Back </button> </Link>
    </div>
  );
}

export default ProductDetailsPage;


