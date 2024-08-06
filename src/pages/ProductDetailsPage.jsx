import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

function ProductDetailsPage() {
  // The state variable `product` is currently an empty object {},
  // but you should use it to store the response from the Fake Store API (the product details).
  const [product, setProduct] = useState({});

  // The `productId` coming from the URL parameter is available in the URL path.
  // You can access it with the `useParams` hook from react-router-dom.

  const { productId } = useParams();

  function productURL() {
    return `https://fakestoreapi.com/products/${productId}`;
  }

  // To fetch the product details, set up an effect with the `useEffect` hook:

  useEffect(() => {
    axios.get(productURL()).then((response) => {
      setProduct(response.data);
    });
  }, [productId]);

  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/");
  };

  return (
    <div className="ProductDetailsPage" key={product.id}>
      <div className="ProductDetailPage">
        <img src={product.image} alt={product.title} />
        <div className="product-text">
          <p className="blue">{product.category}</p>
          <h4>{product.title}</h4>
          <div className="price-description">
            <p className="description">{product.description}</p>
            <p className="price">{`$${product.price}`}</p>
          </div>
        </div>
      </div>

      <button onClick={handleNavigate}>Back</button>
    </div>
  );
}

export default ProductDetailsPage;
