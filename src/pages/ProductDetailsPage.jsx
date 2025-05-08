import { useEffect, useState } from "react";
import { Link, useParams} from "react-router-dom";
import axios from "axios"

const apiURL = "https://fakestoreapi.com/products/:id"

function ProductDetailsPage() {
  // The state variable `product` is currently an empty object {},
  // but you should use it to store the response from the Fake Store API (the product details).
  const [product, setProduct] = useState({});
  const [fetch, setFetch] = useState(true)



  // The `productId` coming from the URL parameter is available in the URL path.
  // You can access it with the `useParams` hook from react-router-dom.
  const {productId} = useParams();

  // To fetch the product details, set up an effect with the `useEffect` hook:
  useEffect(() => {
axios.get(apiURL).then((response) => {
  setProduct(response.data);
  setFetch(false);
});
  }, [])


  return (
    <div className="ProductDetailsPage">
    {productId/* Render product details here */}
    </div>
  );
}

export default ProductDetailsPage;
