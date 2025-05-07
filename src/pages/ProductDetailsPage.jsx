import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function ProductDetailsPage() {
  // The state variable `product` is currently an empty object {},
  // but you should use it to store the response from the Fake Store API (the product details).
  const [product, setProduct] = useState(null);

  // The `productId` coming from the URL parameter is available in the URL path.
  // You can access it with the `useParams` hook from react-router-dom.
  const { productId } = useParams();

  // To fetch the product details, set up an effect with the `useEffect` hook:
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { data } = await axios(
          `https://fakestoreapi.com/products/${productId}`
        );
        setProduct(data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchProducts();
  }, [productId]);

  if (!product) {
    return <p>Loading....</p>;
  }

  return (
    <div className="ProductDetailsPage">
      {/* Render product details here */}
      <img
        src={product.image}
        alt={product.title}
        style={{ height: "200px" }}
      />
      <h4>{product.title}</h4>
      <h5>{product.category}</h5>
      <h5>${product.price}</h5>
      <h5>{product.description}</h5>
    </div>
  );
}

export default ProductDetailsPage;
