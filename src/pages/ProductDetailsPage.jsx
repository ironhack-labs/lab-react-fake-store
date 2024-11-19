import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useEffect } from "react";

function ProductDetailsPage() {
  // The state variable `product` is currently an empty object {},
  // but you should use it to store the response from the Fake Store API (the product details).
  const [product, setProduct] = useState({});

  // The `productId` coming from the URL parameter is available in the URL path.
  // You can access it with the `useParams` hook from react-router-dom.
  const productID = useParams()["productId"];

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(
          `https://fakestoreapi.com/products/${productID}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch product data");
        }
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };
    fetchProduct();
  }, [productID]);

  // To fetch the product details, set up an effect with the `useEffect` hook:

  return (
    <div className="ProductDetailsPage">
      <img src={product.image} alt={product.title} />
      <h1>{product.title}</h1>
      <label>
        <strong>Category:</strong> {product.category}
      </label>
      <p>{product.description}</p>

      <span>
        <strong>Price:</strong> ${product.price}
      </span>
      <Link to={"/"}>
        <button> Back </button>
      </Link>
    </div>
  );
}

export default ProductDetailsPage;
