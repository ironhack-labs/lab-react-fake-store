
import axios from "axios";
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

function ProductDetailsPage() {
  // The state variable `product` is currently an empty object {},
  // but you should use it to store the response from the Fake Store API (the product details).
  const [product, setProduct] = useState({});

  const { productId } = useParams();
  // The `productId` coming from the URL parameter is available in the URL path.
  // You can access it with the `useParams` hook from react-router-dom.


  // To fetch the product details, set up an effect with the `useEffect` hook:
  
  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${productId}`)
    .then((response) => {
      setProduct(response.data)
    })
    .catch((error) => {
      console.log(error)
    })

  }, [productId]);


  return (
    <div className="ProductDetailsPage">
    {/* Render product details here */}

     {product === null ? (
        <h2>Loading...</h2>
     ): (
      <div>
          <img src={product.image} />
          <div>
            <p>{product.title} </p>
            <p>{product.price} </p>
            <p>{product.category} </p>
            <p>{product.description} </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProductDetailsPage;
