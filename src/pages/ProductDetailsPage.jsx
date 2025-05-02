import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

function ProductDetailsPage() {
  // The state variable `product` is currently an empty object {},
  // but you should use it to store the response from the Fake Store API (the product details).
  const [product, setProduct] = useState({});

  // The `productId` coming from the URL parameter is available in the URL path.
  // You can access it with the `useParams` hook from react-router-dom.
  const { productId } = useParams();

  // To fetch the product details, set up an effect with the `useEffect` hook:
  useEffect(() => {
    async function fetchOneProduct() {
      try {
        const response = await fetch(
          `https://fakestoreapi.com/products/${productId}`
        );
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.error("something went wrong: ", error);
      }
    }
    fetchOneProduct();
  });

  return (
    <div className="ProductDetailsPage card">
      <div className="ProductDetailsPage image-container">
        <img src={product.image} alt={product.title} />
      </div>
      <label>{product.category}</label>
      <h3>{product.title}</h3>
      <div className="info-container">
        <p id="description">{product.description}</p>
        <p id="price">${product.price}</p>
      </div>

      <hr />
      <Link to={"/"}>
        <button className="btn-primary">Back</button>
      </Link>
    </div>
  );
}

export default ProductDetailsPage;
