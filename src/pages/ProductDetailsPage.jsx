import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

function ProductDetailsPage() {
  // The state variable `product` is currently an empty object {},
  // but you should use it to store the response from the Fake Store API (the product details).
  const [product, setProduct] = useState({});
  const { productId } = useParams();
  console.log(productId);

  // The `productId` coming from the URL parameter is available in the URL path.
  // You can access it with the `useParams` hook from react-router-dom.
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${productId}`)
      .then((response) => response.json())
      .then((data) => setProduct(data))
      .catch((err) => console.log(err));
  }, [productId]);

  console.log(product);

  // To fetch the product details, set up an effect with the `useEffect` hook:

  return (
    <div className="ProductDetailsPage">
      {/* Render product details here */}
      <img src={product.image} alt="product" />
      <h1>{product.title}</h1>
      <div>{product.category}</div>
      <div>{product.description}</div>
    </div>
  );
}

export default ProductDetailsPage;
