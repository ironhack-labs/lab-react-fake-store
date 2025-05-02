import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';


function ProductDetailsPage() {
  // The state variable `product` is currently an empty object {},
  // but you should use it to store the response from the Fake Store API (the product details).
  const [product, setProduct] = useState({});
  const [error, setError] = useState(null);

  // The `productId` coming from the URL parameter is available in the URL path.
  // You can access it with the `useParams` hook from react-router-dom.
  const { productId } = useParams();


  // To fetch the product details, set up an effect with the `useEffect` hook:
  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await axios.get(`https://fakestoreapi.com/products/${productId}`);
        setProduct(response.data);
      } catch (error) {
        setError(error);
      }
    };

    getProducts();
  }, [productId]);


  return (
    <div className="ProductDetailsPage">
      {error && <p>Error fetching product details: {error.message}</p>}
      {product && (
        <div>
          <h1>{product.title}</h1>
          <p>{product.description}</p>
          <p>Price: {product.price} euros</p>
          <img src={product.image} alt={product.title} style={{ maxWidth: '300px' }} />
        </div>
      )}
      <Link to="/">Back</Link>
    </div>
  );
}

export default ProductDetailsPage;
