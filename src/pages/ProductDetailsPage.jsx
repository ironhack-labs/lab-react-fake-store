import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";


function ProductDetailsPage() {
  // The state variable `product` is currently an empty object {},
  // but you should use it to store the response from the Fake Store API (the product details).
  const [product, setProduct] = useState({});
  const { productId } = useParams();
  



  // The `productId` coming from the URL parameter is available in the URL path.
  // You can access it with the `useParams` hook from react-router-dom.


  // To fetch the product details, set up an effect with the `useEffect` hook:
    useEffect(() => {
    const getProduct = async () => {
      try {
        const response = await axios.get(`https://fakestoreapi.com/products/${productId}`);
        setProduct(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    getProduct();
  }, [productId]);



  return (
    <div className="ProductDetailsPage">
    {Object.keys(product).length === 0 ? (
      <p>Loading product details...</p>
    ) : (
      <div>
        <Link to="/">← Back to all products</Link>
        <img src={product.image} alt={product.title} />
        <h1>{product.title}</h1>
        <p><strong>Price:</strong> ${product.price.toFixed(2)}</p>
        <p><strong>Category:</strong> {product.category}</p>
        <p><strong>Description:</strong> {product.description}</p>
        <p>
          <strong>Rating:</strong> {product.rating.rate} / 5 ({product.rating.count} reviews)
          </p>
      </div>
    )}
    </div>
  );
}

export default ProductDetailsPage;
