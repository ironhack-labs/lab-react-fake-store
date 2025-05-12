import { useState } from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";

function ProductDetailsPage() {
  // The state variable `product` is currently an empty object {},
  // but you should use it to store the response from the Fake Store API (the product details).
  const [product, setProduct] = useState({});
  const { productId } = useParams();

  const apiUrl = "https://fakestoreapi.com/products/" + productId;

  // The `productId` coming from the URL parameter is available in the URL path.
  // You can access it with the `useParams` hook from react-router-dom.
  const productDetails = async () => {
    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
      setProduct(data);
    } catch (error) {
      console.error("Error fetching product:", error);
    }
  };

  useEffect(() => {
    productDetails();
  });
  // To fetch the product details, set up an effect with the `useEffect` hook:

  return (
    <div className="ProductDetailsPage">
      <div className="container">
        <img
          src={product.image}
          alt={product.title}
          style={{
            height: "100px",
            width: "auto",
          }}
        />
        <h1>{product.title}</h1>
        <p>{product.description}</p>
        <p>Price ${product.price}</p>
        <Link to={"/"}>
          <button className="btn-primary"> Back </button>
        </Link>
      </div>
    </div>
  );
}

export default ProductDetailsPage;
