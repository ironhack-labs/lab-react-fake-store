import { useEffect, useState} from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function ProductDetailsPage() {
  // The state variable `product` is currently an empty object {},
  // but you should use it to store the response from the Fake Store API (the product details).
  const [product, setProduct] = useState({});

  // The `productId` coming from the URL parameter is available in the URL path.
  // You can access it with the `useParams` hook from react-router-dom.
  const { productId } = useParams();

  // To fetch the product details, set up an effect with the `useEffect` hook:
  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${productId}`)
      .then((response) => {
        setProduct(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  } , [productId]);

  return (
    <div className="ProductDetailsPage">
    <img src={product.image}/>
    <p>{product.title}</p>
    <p>{product.price} $</p>
    <p>{product.description}</p>
    </div>

  );
}