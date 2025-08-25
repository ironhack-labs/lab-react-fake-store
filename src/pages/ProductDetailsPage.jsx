import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function ProductDetailsPage() {
  // The state variable `product` is currently an empty object {},
  // but you should use it to store the response from the Fake Store API (the product details).
  const [product, setProduct] = useState(null);
  const { productId } = useParams();

  // The `productId` coming from the URL parameter is available in the URL path.
  // You can access it with the `useParams` hook from react-router-dom.

  // To fetch the product details, set up an effect with the `useEffect` hook:
  useEffect(() => {
    getData();
  }, [productId]);

  const getData = async () => {
    try {
      const response = await axios.get(
        `https://fakestoreapi.com/products/${productId}`
      );
      console.log(response.data);
      setProduct(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  if (product === null) {
    return <h3>Loading...</h3>;
  }

  return (
    <div className="ProductDetailsPage">
      <strong>{product.title}</strong> <br />
      {product.price} € <br />
      {product.description} <br />
      {product.category} <br />
      <img src={product.image} alt={product.title} width={100} />
    </div>
  );
}

export default ProductDetailsPage;
