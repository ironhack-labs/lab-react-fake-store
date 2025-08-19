import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "../index.css"

function ProductDetailsPage() {
  // The state variable `product` is currently an empty object {},
  // but you should use it to store the response from the Fake Store API (the product details).
  const [product, setProduct] = useState({});
  const params = useParams();

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${params.productId}`)
      .then((response) => setProduct(response.data))
      .catch((error) => console.log(error));

    //
  }, []);

  return (
    <>
      <div className="ProductDetailsPage">
        <img src={product.image} alt="image" />
        <div className="cell title">{product.title}</div>
        <div className="cell category">{product.category}</div>
        <div className="cell price">${product.price}</div>
        <div className="cell description">{product.description}</div>
      </div>
      <Link to="/">
        <button className="btn-primary spacing-md" >Back</button>
      </Link>
    </>
  );
}

export default ProductDetailsPage;
