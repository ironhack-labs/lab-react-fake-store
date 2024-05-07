import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

function ProductDetailsPage() {
  // The state variable `product` is currently an empty object {},
  // but you should use it to store the response from the Fake Store API (the product details).
  const [product, setProduct] = useState({});
  const params = useParams();
  const idNumber = params.productId;

  useEffect ( () => {
    axios.get(`https://fakestoreapi.com/products/${idNumber}`)
    .then ( response  => {
      setProduct(response.data)
    })
    .catch ( error => console.log(error))
  }, [])

  return (
    <>
    <div className="item-product">
      <img src={product.image} style={{width: "100px"}}/>
      <div>{product.category}</div>
      <div>{product.title}</div>
      <div>{product.description}</div>
      <div>${product.price}</div>
    </div>
    <Link to="/">
      <button id="back-button">Back</button>
    </Link>
    </>
  );
}

export default ProductDetailsPage;
