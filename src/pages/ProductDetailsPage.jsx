import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ProductDetailsPage() {
  // The state variable `product` is currently an empty object {},
  // but you should use it to store the response from the Fake Store API (the product details).
  const [product, setProduct] = useState({});

  // The `productId` coming from the URL parameter is available in the URL path.
  // You can access it with the `useParams` hook from react-router-dom.
  const params = useParams();

  // To fetch the product details, set up an effect with the `useEffect` hook:
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${params.productId}`)
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setProduct(res);
      });
  }, []);
  product;

  return (
    <div className="ProductDetailsPage">
      {/* Render product details here */}
      <img src={product.image} alt="" width={75} />
      <h3>{product.title}</h3>
      <h3>{product.category}</h3>
      <h3>{product.price}</h3>
      <h3>{product.description}</h3>
    </div>
  );
}

export default ProductDetailsPage;
