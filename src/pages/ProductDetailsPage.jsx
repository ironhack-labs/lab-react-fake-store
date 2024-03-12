import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import cartImg from "../assets/cart.png";

function ProductDetailsPage() {
  // The state variable `product` is currently an empty object {},
  // but you should use it to store the response from the Fake Store API (the product details).
  const [product, setProduct] = useState(null);
  const { productId } = useParams();
  console.log("productId", productId);

  // To fetch the product details, set up an effect with the `useEffect` hook:
  useEffect(() => {
    const getDetails = async () => {
      try {
        const detailResponse = await axios(
          `https://fakestoreapi.com/products/${productId}`
        );
        console.log("details", detailResponse.data);
        setProduct(detailResponse.data);
      } catch (error) {
        console.log("Error from details", error);
      }
    };
    getDetails();

    console.log("every product", product);
  }, [productId]); //  <-- The effect will run every time the `productId`` changes

  const backToHome = () => {
    window.location.href = "/";
  };
  if (!product) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <div className="ProductDetailsPage">
        <div>
          <img src={product.image} alt="image of the product" />
          <h3 className="catagory">{product.category}</h3>
          <h3 className="title">{product.title}</h3>
        </div>
        <div className="descriptionContainer">
          <h3 className="description">{product.description}</h3>
          <h3 className="price">${product.price}</h3>
        </div>
      </div>
      <button className="backBtn" onClick={backToHome}>
        back
      </button>
    </div>
  );
}

export default ProductDetailsPage;
