import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function ProductDetailsPage() {
  // The state variable `product` is currently an empty object {},
  // but you should use it to store the response from the Fake Store API (the product details).
  const [product, setProduct] = useState({});
  const { productId } = useParams();
  const navigate = useNavigate();
  const productDetailUrl = `https://fakestoreapi.com/products/${productId}`;

  async function getDetails() {
    try {
      const response = await fetch(productDetailUrl);
      const jsonResponse = await response.json();
      setProduct(jsonResponse);
    } catch (error) {
      console.log("The error is:", error);
    }
  }

  useEffect(() => {
    getDetails();
  }, [productId]);

  function handleSubmit(e) {
    e.preventDefault();
    navigate("/");
  }
  /*function handleCart(e) {
    e.preventDefault()
    navigate("/cart")
  }*/

  return (
    <div className="card">
      {/* Render product details here */}
      <img src={product.image} alt={product.title} />
      <h1>{product.title}</h1>
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
      <button type="submit" onClick={handleSubmit}>
        Back
      </button>
      {/*<button type="submit" onClick={handleCart}>Add to cart</button>*/}
    </div>
  );
}

export default ProductDetailsPage;
