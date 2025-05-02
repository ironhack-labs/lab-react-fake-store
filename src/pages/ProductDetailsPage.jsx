import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

function ProductDetailsPage() {
  // The state variable `product` is currently an empty object {},
  // but you should use it to store the response from the Fake Store API (the product details).
  const [product, setProduct] = useState({});
  const { productId } = useParams();

  // console.log("requested parameter is ", productId);

  useEffect(() => {
    const getProduct = async () => {
      try {
        const response = await fetch(
          `https://fakestoreapi.com/products/${productId}`
        );
        const data = await response.json();
        console.log(data);
        setProduct(data);
      } catch (error) {
        console.log(error);
      }
    };
    getProduct();
  }, [productId]);

  // The `productId` coming from the URL parameter is available in the URL path.
  // You can access it with the `useParams` hook from react-router-dom.

  // To fetch the product details, set up an effect with the `useEffect` hook:

  return (
    <div className="ProductDetailsPage">
      <img src={product.image} alt={product.title} />
      <label>{product.category}</label>
      <h2 className="detail-title"> {product.title} </h2>
      <div className="description-container">
        <p>{product.description}</p>
        <h3>$ {product.price}</h3>
      </div>
      <Link to="/">
        <button className="btn-secondary">Back</button>
      </Link>
    </div>
  );
}

export default ProductDetailsPage;
