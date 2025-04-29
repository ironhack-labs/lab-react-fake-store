import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios';
import { Link } from "react-router-dom"

function ProductDetailsPage() {
  // The state variable `product` is currently an empty object {},
  // but you should use it to store the response from the Fake Store API (the product details).
  const [product, setProduct] = useState({});
  const {productId} = useParams()

  // The `productId` coming from the URL parameter is available in the URL path.
  // You can access it with the `useParams` hook from react-router-dom.


  // To fetch the product details, set up an effect with the `useEffect` hook:
  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${productId}`)
      .then((response) => {
        setProduct(response.data);
      })
      .catch((error) => {
        console.log('Error fetching products:', error);
      });
  }, [productId]);


  return (
    <div className="ProductDetailsPage">
      <h1>Product Details</h1>
      {product.title && (
        <div>
          <img src={product.image} alt={product.title} style={{ maxWidth: '300px' }} />
          <h2>{product.title}</h2>
          <p><strong>Category:</strong> {product.category}</p>
          <p><strong>Price:</strong> ${product.price}</p>
          <p><strong>Description:</strong> {product.description}</p>
          <Link to ="/">
                <button className = "backButton">BACK</button>
            </Link>
          </div>
      )}
      
    </div>
  );
}

export default ProductDetailsPage;
