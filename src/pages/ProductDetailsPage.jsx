import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function ProductDetailsPage() {
  // The state variable `product` is currently an empty object {},
  // but you should use it to store the response from the Fake Store API (the product details).
  const [product, setProduct] = useState({});

  // The `productId` coming from the URL parameter is available in the URL path.
  // You can access it with the `useParams` hook from react-router-dom.
  const { productId } = useParams();
  // To fetch the product details, set up an effect with the `useEffect` hook:
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products/" + productId)
      .then((response) => {
        setProduct(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [productId]);

  console.log(product);

  return (
    <div className="ProductDetailsPage">
      <img className="detail-img" src={product.image} alt={product.id} />
      <p>{product.category}</p>
      <p>{product.title}</p>
      <div className="description-price">
        <p>{product.description}</p>
        <p>{product.price}</p>
      </div>

      <button>Back</button>
    </div>
  );
}

export default ProductDetailsPage;
