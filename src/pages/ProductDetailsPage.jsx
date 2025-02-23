import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

function ProductDetailsPage() {
  // The state variable `product` is currently an empty object {},
  // but you should use it to store the response from the Fake Store API (the product details).
  const { productId } = useParams();
  const [product, setProduct] = useState({});
  useEffect(() => {
    const getProductById = async () => {
      try {
        const response = await axios.get(`https://fakestoreapi.com/products/${productId}`);
        setProduct(response.data);
      } catch (error) {
        console.error(error);
      }
    }
    getProductById();
  }, []);

  // The `productId` coming from the URL parameter is available in the URL path.
  // You can access it with the `useParams` hook from react-router-dom.

  // To fetch the product details, set up an effect with the `useEffect` hook:

  return (
    <div className="ProductDetailsPage card">
      <div className="product-item-img">
        <img src={product.image} alt="img" />
      </div>
      <h4 className="title">{ product.title }</h4>
      <span className="category">{ product.category }</span>
      <span className="price">{ product.price }</span>
      <p className="description">{ product.description }</p>
      <Link to="/">Back</Link>
    </div>
  );
}

export default ProductDetailsPage;
