import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

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
        const { data } = await axios(
          `https://fakestoreapi.com/products/${productId}`
        );
        setProduct(data);
      } catch (error) {
        console.log(error);
      }
    }

    getOneProduct();
  }, [productId]);

  return (
    <div className="ProductDetailsPage">
      <img src={product.image} alt={product.title} />
      <h2>{product.title}</h2>
      <p className="tag">{product.category}</p>
      <p className="full-page-description">{product.description}</p>
      <div className="hor-line"></div>
      <Link to="/">
        <button className="btn-back">Back</button>
      </Link>
    </div>
  );
}

export default ProductDetailsPage;
