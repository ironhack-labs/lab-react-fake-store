import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";


const URLProduct = "https://fakestoreapi.com/products";
function ProductDetailsPage() {
  // The state variable `product` is currently an empty object {},
  // but you should use it to store the response from the Fake Store API (the product details).
  const [product, setProduct] = useState({});
  const { productId } = useParams();

  useEffect(() => {
    fetchProductDetails();
  }, [productId]);

  function fetchProductDetails() {
    axios
      .get(`${URLProduct}/${productId}`)
      .then((response) => {
        console.log(response);
        setProduct(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  

  return (
    <div className="ProductDetailsPage"  >
      <Link to="/">Back to Product List</Link>

    {/* Render product details here */}
    <h1>{product.title}</h1>
    <p>{product.description}</p>
    <p>{product.price}</p>
    <img src={product.image} alt={product.title} />

    </div>
  );
}

export default ProductDetailsPage;
