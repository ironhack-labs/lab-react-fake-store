import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";


function ProductDetailsPage() {
  // The state variable `product` is currently an empty object {},
  // but you should use it to store the response from the Fake Store API (the product details).

  const [product, setProduct] = useState({});

  // The `productId` coming from the URL parameter is available in the URL path.
  // You can access it with the `useParams` hook from react-router-dom.

  const { productId } = useParams()

  // To fetch the product details, set up an effect with the `useEffect` hook:

  const navigate = useNavigate()

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      .then((response) => {
        setProduct(response.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  return (
    <div className="ProductDetailsPage">
      <h4>{product.title}</h4>
      <p>{product.description}</p>
      {product.image && <img src={product.image}/>}
      <p>{product.category}</p>
      <p>{product.price}</p>

      <button onClick={() => navigate("/")}>BACK</button>
    </div>
  );
}

export default ProductDetailsPage;
