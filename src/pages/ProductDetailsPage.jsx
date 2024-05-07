import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ProductDetailsPage() {
  // The state variable `product` is currently an empty object {},
  // but you should use it to store the response from the Fake Store API (the product details).
  const [product, setProduct] = useState({});

  // The `productId` coming from the URL parameter is available in the URL path.
  // You can access it with the `useParams` hook from react-router-dom.
  const parm = useParams();

  // To fetch the product details, set up an effect with the `useEffect` hook:
  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${parm.productId}`)
      .then((res) => setProduct(res.data))
      .catch((err) => console.log(err));
  }, []);
  console.log(product);

  return (
    <div className="ProductDetailsPage">
      {
        <div className="product-details-container">
          <p>{product.image}</p>
          <p>{product.title}</p>
          <p>{product.category}</p>
          <p>{product.price}</p>
          <p>{product.description}</p>
        </div>
      }
    </div>
  );
}

export default ProductDetailsPage;
