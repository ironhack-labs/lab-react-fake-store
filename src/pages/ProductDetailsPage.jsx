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
    fetch(`https://fakestoreapi.com/products/${productId}`)
      .then((response) => {
        return response.json();
      })
      .then((jsonResponse) => {
        setProduct(jsonResponse);
      })
      .catch((error) => {
        error;
      });
  }, []);

  return (
    <div className="ProductDetailsPage">
      <h2> List of product detail </h2>
      <ul key={product.id}>
        <li> {product.title} </li>
        <li> {product.price} </li>
        <li> {product.category} </li>
        <li> {product.description} </li>
        {product.rating ? <li> {product.rating.rate} </li> : "Loading Rate.."}
        <li>
          {" "}
          <img src={product.image} alt="productImage" />{" "}
        </li>
      </ul>
      <Link to="/"> Back</Link>
    </div>
  );
}

export default ProductDetailsPage;
