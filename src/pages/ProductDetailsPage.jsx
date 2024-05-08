import { useState } from "react";
import { useParams } from "react-router-dom";
import {Link} from "react-router-dom";
import { useEffect } from "react";

function ProductDetailsPage() {
  const params = useParams()
  
  const [product, setProduct] = useState({});

  useEffect (() => {
    fetch(`https://fakestoreapi.com/products/${params.productId}`)

    .then((response) => {
      return response.json()

    })
    
    .then((response ) => {
      setProduct(response)
    })
  
    .catch((error) => {
      console.log(error)
    })
  }, [])
  


  // The `productId` coming from the URL parameter is available in the URL path.
  // You can access it with the `useParams` hook from react-router-dom.


  // To fetch the product details, set up an effect with the `useEffect` hook:



  return (
    <div className="ProductDetailsPage">
    
          <img src={product.image} alt={product.title} width="100px"/>
          <p>{product.title}</p>
          <p>{product.category}</p>
          <p>{product.price}</p>
          <p>{product.description}</p>
          <Link to='/'>ole</Link>

    </div>
  );
}

export default ProductDetailsPage;
