import { useState } from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

function ProductDetailsPage() {
  // The state variable `product` is currently an empty object {},
  // but you should use it to store the response from the Fake Store API (the product details).
  const [product, setProduct] = useState({});

  // The `productId` coming from the URL parameter is available in the URL path.
  // You can access it with the `useParams` hook from react-router-dom.
  const params = useParams();
  console.log(params);

  // To fetch the product details, set up an effect with the `useEffect` hook:
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${params.productId}`)
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        setProduct(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [params.productId]);

  return (
    <div className="ProductDetailsPage">
      <img src={product.image} alt="" width={200} />
      <h3><b>{product.title}</b></h3>
      <h3>{product.price}</h3>
      <h4>{product.category}</h4>
      <h5>{product.description}</h5>
    </div>
  );
}

export default ProductDetailsPage;
