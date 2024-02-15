import { useEffect, useState } from "react";

import axios from "axios";


function ProductDetailsPage(props) {
  // The state variable `product` is currently an empty object {},
  // but you should use it to store the response from the Fake Store API (the product details).
  const [product, setProduct] = useState(null);
  useEffect(() =>{
    const {id} = props ;
  
    axios.get(`https://fakestoreapi.com/products/${id}`).then((response) =>{
      setProduct(response.data);
    })
    .catch((error)=>{
      console.log(error);
    })
  }, [])



  // The `productId` coming from the URL parameter is available in the URL path.
  // You can access it with the `useParams` hook from react-router-dom.


  // To fetch the product details, set up an effect with the `useEffect` hook:



  return (
     <div className="ProductDetailsPage">
      {product && product.map((product)=>{
        return(
          <article key={product.id}>
          </article>
        )
      })}
    </div>
  );
} 

export default ProductDetailsPage;
