import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

function ProductDetailsPage() {
  // The state variable `product` is currently an empty object {},
  // but you should use it to store the response from the Fake Store API (the product details).
  const [product, setProduct] = useState({});

  const { productId } = useParams();
  console.log(productId);

  useEffect(() => {
    async function getOneProduct() {
      try {
        const { data } = await axios.get(
          `https://fakestoreapi.com/products/${productId}`
        );
        setProduct(data);
      } catch (error) {
        console.log(error);
      }
    }
    getOneProduct();

    return () => {
      console.log("All Clean");
    };
  }, [productId]);

  // The `productId` coming from the URL parameter is available in the URL path.
  // You can access it with the `useParams` hook from react-router-dom.

  // To fetch the product details, set up an effect with the `useEffect` hook:

  return (
    <div className="ProductDetailsPage">
      <div>
        <img src={product.image} alt="" />
      </div>
      <p>{product.category}</p>
      <p>{product.title}</p>
      <p>{product.description}</p>
      <p>{product.price}</p>
      <Link to="/">
        <button className=".btn-primary">Back</button>
      </Link>
    </div>
  );
}

export default ProductDetailsPage;
