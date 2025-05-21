import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function ProductDetailsPage() {
  const params = useParams();

  // console.log(params);
  // The state variable `product` is currently an empty object {},
  // but you should use it to store the response from the Fake Store API (the product details).
  const [product, setProduct] = useState({});
  // console.log(product);
  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${params.productId}`)
      .then((response) => {
        setProduct(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [params.productId]);
  // The `productId` coming from the URL parameter is available in the URL path.
  // You can access it with the `useParams` hook from react-router-dom.

  // To fetch the product details, set up an effect with the `useEffect` hook:

  return (
    <div className="ProductDetailsPage">
      {/* Render product details here */}
      {product && product.id && (
        <div key={product.id}>
          <img src={product.image} alt={product.title} />
          <h1>{product.title}</h1>
          <p>{product.category}</p>
          <p>{product.description}</p>
          <p>{product.price}</p>
        </div>
      )}
    </div>
  );
}

export default ProductDetailsPage;
