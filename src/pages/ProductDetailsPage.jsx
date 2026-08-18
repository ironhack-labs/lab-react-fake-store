import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


function ProductDetailsPage() {
  // The state variable `product` is currently an empty object {},
  // but you should use it to store the response from the Fake Store API (the product details).
  const [product, setProduct] = useState({});
  const params = useParams();

  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${params.productId}`)
    .then((response) => {
      setProduct(response.data);
    })
    .catch((error) => {
      console.log(error);
    })
  }, [params.productId]);

  return (
    <div className="ProductDetailsPage">
      <img src={product.image} />
      <p className="product-details-category">{product.category}</p>
      <h2>{product.title}</h2>
      <div className="product-details-container">
        <p>{product.description}</p>
        <p className="product-details-price">${product.price}</p>
      </div>
    </div>
  );
}

export default ProductDetailsPage;
