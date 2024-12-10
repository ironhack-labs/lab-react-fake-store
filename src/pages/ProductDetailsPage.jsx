import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

function ProductDetailsPage() {
  const dynamicParams = useParams();
  // console.log(dynamicParams);

  // The state variable `product` is currently an empty object {},
  // but you should use it to store the response from the Fake Store API (the product details).
  const [product, setProduct] = useState({});

  // The `productId` coming from the URL parameter is available in the URL path.
  // You can access it with the `useParams` hook from react-router-dom.

  // To fetch the product details, set up an effect with the `useEffect` hook:
  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${dynamicParams.productId}`)
      .then((response) => {
        console.log(response.data);
        setProduct(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [dynamicParams.productId]);

  return (
    <div className="ProductDetailsPage">
      {/* Render product details here */}
      <div id="container-organizador">
        <div className="details-img-container">
          <img src={product.image} />
        </div>
        <div className="details-info-container">
          <span className="etiqueta-category">{product.category}</span>
          <h1>{product.title}</h1>
          <p>{product.description}</p>
          <p className="price-container">$ {product.price}</p>
        </div>
      </div>
      <div className="details-btn-container">
      <Link to="/">
        <button>Back</button>
      </Link>
      </div>
    </div>
  );
}

export default ProductDetailsPage;
