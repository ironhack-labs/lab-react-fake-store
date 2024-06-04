import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function ProductDetailsPage() {
  // The state variable `product` is currently an empty object {},
  // but you should use it to store the response from the Fake Store API (the product details).
  const [product, setProduct] = useState({});

  // The `productId` coming from the URL parameter is available in the URL path.
  // You can access it with the `useParams` hook from react-router-dom.
  const { productId } = useParams();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch(
          `https://fakestoreapi.com/products/${productId}`
        );
        const data = await res.json();
        setProduct(data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchProducts();
  }, []);

  // To fetch the product details, set up an effect with the `useEffect` hook:

  return (
    <div className="ProductDetailsPage">
      {/* Render product details here */}
      <div className="product-card">
        <div>
          <img src={product.image} />
        </div>
        <div>
          <b>{product.title}</b>
        </div>
        <div>
          <p>{product.category}</p>
        </div>
        <div>
          <p>{product.description}</p>
        </div>
        <div>
          <p>${product.price}</p>
        </div>
      </div>
    </div>
  );
}

export default ProductDetailsPage;
