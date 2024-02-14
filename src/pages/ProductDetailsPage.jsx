import { useState, useEffect } from "react";
import axios from 'axios'
import { useParams } from "react-router-dom";


function ProductDetailsPage() {
  // The state variable `product` is currently an empty object {},
  // but you should use it to store the response from the Fake Store API (the product details).
  const [product, setProduct] = useState({});

  const {productId} = useParams()
  useEffect(() => {
/*     const {id} = props; */

    axios.get(`https://fakestoreapi.com/products/${productId}`)
    .then((response) => {
      setProduct(response.data)
    })
    .catch((error) => {
      console.log(error);
    })
  }, [productId])


  // The `productId` coming from the URL parameter is available in the URL path.
  // You can access it with the `useParams` hook from react-router-dom.


  // To fetch the product details, set up an effect with the `useEffect` hook:



  return (
    <div className="ProductDetailsPage">
    {/* Render product details here */}
          <article key={product.id}>
              <img src={product.image}/>
              <h4>{product.title}</h4>
              <h4>{product.category}</h4>
              <h4>${product.price}</h4>
              <h4>{product.description}</h4>
          </article>
    </div>
  );
}

export default ProductDetailsPage;
