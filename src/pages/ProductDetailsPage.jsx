import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

function ProductDetailsPage() {
  // The state variable `product` is currently an empty object {},
  // but you should use it to store the response from the Fake Store API (the product details).
  const [product, setProduct] = useState({});

  const { productId } = useParams()

  const BASE_URL = "https://fakestoreapi.com"

  useEffect(() => {
    axios
      .get(BASE_URL + "/products/" + productId)
      .then((response) => {
        setProduct(response.data)
      })
      .catch((e) => console.log(e))
  }, [])

  return (
    <div className="ProductDetailsPage">
      <img src={product.image} alt={product.title} />
      <h2>{product.title}</h2>
      <p>{product.category}</p>
      <p>{product.price} $</p>
      <p>{product.description}</p>
      <Link to="/">
        <button>Back</button></Link>

    </div>
  );
}

export default ProductDetailsPage;
