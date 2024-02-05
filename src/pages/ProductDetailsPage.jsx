import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams, useLocation } from "react-router-dom";

const url = "https://fakestoreapi.com/products/";

function ProductDetailsPage() {
  // The state variable `product` is currently an empty object {},
  // but you should use it to store the response from the Fake Store API (the product details).
  const [product, setProduct] = useState({});

  // The `productId` coming from the URL parameter is available in the URL path.
  // You can access it with the `useParams` hook from react-router-dom.
  const { productId } = useParams();
  const location = useLocation();

  // To fetch the product details, set up an effect with the `useEffect` hook:

  useEffect(() => {
    const fetchProductDetail = async () => {
      const urlProd = await axios.get(url + productId);
      const detail = await urlProd.data;
      setProduct(detail);
    };

    fetchProductDetail();
  }, []);

  const { title, price, category, image, description } = product;

  return (
    <>
      <div className="ProductDetailsPage">
        <div>
          <img className="small-image" src={image} alt="product detail" />
        </div>
        <div>{title}</div>
        <div>{price}</div>
        <div>{category}</div>
        <div>{description}</div>
      </div>

      <Link to={"/"}>
        <button className="btn-primary">BACK</button>
      </Link>
    </>
  );
}

export default ProductDetailsPage;
