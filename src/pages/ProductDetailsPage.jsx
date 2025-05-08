import { useState, useEffect } from "react";
import { useParams } from "react-router-dom/dist";
import { Link } from "react-router-dom/dist";
import axios from "axios";

function ProductDetailsPage() {
  // The state variable `product` is currently an empty object {},
  // but you should use it to store the response from the Fake Store API (the product details).
  const [product, setProduct] = useState({});
  const { productId } = useParams();
  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${productId}`).then((res) => {
      console.log(res);
      setProduct(res.data);
    });
  }, [productId]);
  // The `productId` coming from the URL parameter is available in the URL path.
  // You can access it with the `useParams` hook from react-router-dom.

  // To fetch the product details, set up an effect with the `useEffect` hook:

  return (
    <div className="ProductDetailsPage">
      <img src={product.image} alt="" />
      <p>{product.title}</p>
      <p style={{ fontStyle: "italic" }}>{product.description}</p>
      <p>{product.price}$</p>
      <p>{product.title}</p>
      <button className="backButton">
        <Link to={"/"}>back to the future of your shopping</Link>
      </button>
      <button>
        <Link to={"/cart"}>🛒</Link>
      </button>
    </div>
  );
}

export default ProductDetailsPage;
