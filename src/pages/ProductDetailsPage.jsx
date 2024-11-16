import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

function ProductDetailsPage() {
  // The state variable `product` is currently an empty object {},
  // but you should use it to store the response from the Fake Store API (the product details).
  const [product, setProduct] = useState({});

  // The `productId` coming from the URL parameter is available in the URL path.
  // You can access it with the `useParams` hook from react-router-dom.
  const params = useParams();

  // To fetch the product details, set up an effect with the `useEffect` hook:

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${params.productId}`)
      .then((response) => response.json())
      .then((data) => {
        setProduct(data);
      })
      .catch((error) => {
        console.error("ProductDetailsPage error", error);
      });
  }, []);

  return (
    <div className="product-details">
      <img src={product.image} alt={product.title} />
      <p className="details-category">{product.category}</p>
      <h2>{product.title}</h2>
      <div className="product-details-box">
        <p>{product.description}</p>
        <p className="details-price">${product.price}</p>
      </div>
      <Link to="/">
        <button className="btn">Back</button>
      </Link>
    </div>
  );
}

export default ProductDetailsPage;
