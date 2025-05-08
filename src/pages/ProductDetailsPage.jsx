import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
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
    // Fetch the product details using the correct productId
    axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      .then((result) => {
        setProduct(result.data);
      })
      .catch((error) => {
        console.error("Error fetching product details:", error);
      });
  }, [productId]);

  if (!product) {
    // Render a loading state while product data is being fetched
    return <div>Loading...</div>;
  }

  return (
    <div className="ProductDetailsPage">
      <img src={product.image} alt={product.title} />
      <button className="tag">{product.category}</button>
      <h4>{product.title}</h4>
      <div className="two-columns">
        <p>{product.description}</p>
        <p className="price">${product.price}</p>
      </div>

      <button className="back-btn">
        <Link to="/">Back</Link>
      </button>
    </div>
  );
}

export default ProductDetailsPage;
