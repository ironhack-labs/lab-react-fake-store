import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";


function ProductDetailsPage() {
  // The state variable `product` is currently an empty object {},
  // but you should use it to store the response from the Fake Store API (the product details).
  const [product, setProduct] = useState({});
  const {productId} = useParams();

  useEffect (()=>{
      axios.get(`https://fakestoreapi.com/products/${productId}`)
      .then((response) => {
       console.log(response)
       setProduct(response.data);
        })
       
      
      .catch((error) => {
        // Handle error
        console.log(error);
      })
    }, [productId])

  return (
    <div className="ProductDetailsPage">
          <img  src={product.image} alt="{product.title}"/>
          <h2 className="product-category">{product.category}</h2>
          <h1 className="product-name" >{product.title}</h1>
          <h3 className="product-price">${product.price}</h3>
          <h4 className="product-description">{product.description}</h4>
          <Link to="/">
          <button className="back-btn" >Back</button>
          </Link>
    </div>
  );
}

export default ProductDetailsPage;
