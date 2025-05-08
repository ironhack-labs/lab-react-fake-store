import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

function ProductDetailsPage() {
  // The state variable `product` is currently an empty object {},
  // but you should use it to store the response from the Fake Store API (the product details).
  const [product, setProduct] = useState({});

  // The `productId` coming from the URL parameter is available in the URL path.
  // You can access it with the `useParams` hook from react-router-dom.
  const { productId } = useParams();

  // To fetch the product details, set up an effect with the `useEffect` hook:
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

  return (
    <div className="ProductDetailsPage">
      <img src={product.image} alt="" />
      <p>{product.category}</p>
      <p>{product.title}</p>
      <p>Price: {product.price} Euros</p>
      <p>{product.description}</p>
      <Link to="/">Back</Link>
    </div>
  );
}

export default ProductDetailsPage;
