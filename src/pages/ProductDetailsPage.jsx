import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

function ProductDetailsPage() {
  // The state variable `product` is currently an empty object {},
  // but you should use it to store the response from the Fake Store API (the product details).
  const [product, setProduct] = useState({});

  const navigate = useNavigate();

  const { productId } = useParams();

  // The `productId` coming from the URL parameter is available in the URL path.
  // You can access it with the `useParams` hook from react-router-dom.
  useEffect(() => {
    async function getProducts() {
      try {
        const res = await axios.get(
          `https://fakestoreapi.com/products/${productId}`
        );
        setProduct(res.data);
      } catch (err) {
        console.log(err);
      }
    }

    getProducts();
  }, []);

  // To fetch the product details, set up an effect with the `useEffect` hook:

  return (
    <div className="ProductDetailsPage">
      <img src={product.image} alt="" />
      <p>{product.category}</p>
      <p>{product.title}</p>
      <p>${product.price}</p>
      <p>{product.description}</p>
      <button onClick={() => navigate("/")}>BACK</button>
    </div>
  );
}

export default ProductDetailsPage;
