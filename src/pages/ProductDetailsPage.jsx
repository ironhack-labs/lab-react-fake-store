import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";


function ProductDetailsPage(props) {
  // The state variable `product` is currently an empty object {},
  // but you should use it to store the response from the Fake Store API (the product details).
  const [product, setProduct] = useState({});
  const {productId}= useParams();
  const{id}=props;
  useEffect(() => {
    
    
    axios
    .get(`https://fakestoreapi.com/products/${productId}`)
    .then((response) => {
      setProduct(response.data);
    })
    .catch((error) => {
      console.log(error);
    })
  },[] );

  




  // The `productId` coming from the URL parameter is available in the URL path.
  // You can access it with the `useParams` hook from react-router-dom.


  // To fetch the product details, set up an effect with the `useEffect` hook:



  return (
    <div className="ProductDetailsPage">
    {product && 
        <div key={product.id} className="product">
          <img src={product.image} alt={product.title} />
          <p>{product.title}</p>
          <p>${product.price}</p>
          <p>{product.category}</p>
          <p>{product.description}</p>
        
        </div>
}
      
      
    
    </div>
  );
}
  


export default ProductDetailsPage;
