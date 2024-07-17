import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

function ProductDetailsPage() {
  // The state variable `product` is currently an empty object {},
  // but you should use it to store the response from the Fake Store API (the product details).
  const [product, setProduct] = useState({});
  const { productId } = useParams();

  // The `productId` coming from the URL parameter is available in the URL path.
  // You can access it with the `useParams` hook from react-router-dom.

  // To fetch the product details, set up an effect with the `useEffect` hook:

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const response = await fetch(
          `https://fakestoreapi.com/products/${productId}`
        );
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };
    fetchProductDetails();
  }, [productId]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="ProductDetailsPage">
      <img
        className="w-56 h-56 object-cover"
        src={product.image}
        alt={product.title}
      />
      <label
        className={
          product.category === "men's clothing" ? "bg-blue-800" : "bg-pink-800"
        }
      >
        {product.category}
      </label>
      <h1>{product.title}</h1>
      <p>
        Price: <span className="text-blue-800"> ${product.price}</span>
      </p>
      <p>Description: {product.description}</p>
      <Link to="/">
        <button className="bg-green-500">Back</button>
      </Link>
    </div>
  );
}

export default ProductDetailsPage;
