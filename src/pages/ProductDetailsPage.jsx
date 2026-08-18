import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function ProductDetailsPage() {
const {productId} = useParams();
  const [product, setProduct] = useState({});

  // The `productId` coming from the URL parameter is available in the URL path.
  // You can access it with the `useParams` hook from react-router-dom.
  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      .then((response) => {
        setProduct(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [productId]);

  return (
    <div className="ProductDetailsPage">
      {/* Render product details here */}
      {product && (
        <>
          <h1>{product.title}</h1>
          <p>{product.price} €</p>
          <p>{product.description}</p>
          <p>{product.category}</p>
          <img src={product.image} />
        </>
      )}
    </div>
  );
}

export default ProductDetailsPage;
