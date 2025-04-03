import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

function ProductDetailsPage() {
  // The state variable `product` is currently an empty object {},
  // but you should use it to store the response from the Fake Store API (the product details).
  const [product, setProduct] = useState({});
  const { productId } = useParams();

  // The `productId` coming from the URL parameter is available in the URL path.
  // You can access it with the `useParams` hook from react-router-dom.

  // To fetch the product details, set up an effect with the `useEffect` hook:
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(`https://fakestoreapi.com/products/${productId}`);
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.error('Error fetching product:', error);
      }
    };
    fetchProducts();
  }, [productId]);

  return (
    <div className="ProductDetailsPage">
      <h2>{product.title}</h2>
      <img src={product.image} alt={product.title} style={{ width: '200px' }} />
      <p>{product.category}</p>
      <p>${product.price}</p>
      <p>{product.description}</p>
      <Link to={`/`}>
        <button className="bg-blue-500 text-white px-4 py-2 rounded">Back to Products</button>
      </Link>
    </div>
  );
}

export default ProductDetailsPage;
