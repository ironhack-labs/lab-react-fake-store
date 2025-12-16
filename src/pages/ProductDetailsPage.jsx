import { useState, useEffect } from "react";
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
    async function getOneProduct() {
      try {
        const response = await fetch(
          `https://fakestoreapi.com/products/${productId}`
        );
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.log(error);
      }
    }
    getOneProduct();
  }, [productId]);

  return (
    <div className="ProductDetailsPage">
      <div className="card-detail" key={product.id}>
        <p className="card-title">
          <strong>{product.title}</strong>
        </p>
        <img src={product.image} />
        <p className="category">{product.category}</p>
        <div className="descp">
          <p className="description">{product.description}</p>
          <p className="price">${product.price}</p>
        </div>
        <Link to="/">
          <button className="back">Back</button>
        </Link>
      </div>
    </div>
  );
}

export default ProductDetailsPage;
