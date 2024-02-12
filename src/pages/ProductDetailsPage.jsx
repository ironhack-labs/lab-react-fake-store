import { useState, useEffect } from "react";
import axios from 'axios';
import { useParams } from 'react-router-dom';

function ProductDetailsPage() {
  const { productId } = useParams();

  // The state variable `product` is currently an empty object {},
  // but you should use it to store the response from the Fake Store API (the product details).
  const [product, setProduct] = useState({});

  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${productId}`)
      .then(res => setProduct(res.data))
      .catch(e => console.log(e, `ERROR fetching products ID`));
  }, [productId]);

  // The `productId` coming from the URL parameter is available in the URL path.
  // You can access it with the `useParams` hook from react-router-dom.

  // To fetch the product details, set up an effect with the `useEffect` hook:

  return (
    <div className="ProductDetailsPage">
      <h2>Product Details</h2>
      <div>
        <strong>Title:</strong> {product.title}
      </div>
      <div>
        <strong>Price:</strong> ${product.price}
      </div>
      <div>
        <strong>Description:</strong> {product.description}
      </div>
   
        <div>
          <img src={product.image} alt={product.title} style={{ maxWidth: '100%', maxHeight: '200px' }} />
        </div>
    
    </div>
  );
}

export default ProductDetailsPage;
