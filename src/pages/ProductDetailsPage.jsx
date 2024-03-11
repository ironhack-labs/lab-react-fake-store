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


  const backToHome = () =>{
    window.location.href = "/";
  }
  if (!product) {
    return <p>Loading...</p>;
  }

  return (
    <div className="ProductDetailsPage">
      <div>
        <img src={product.image} alt="image of the product" />
        <h3>{product.category}</h3>
        <h3>{product.title}</h3>
        <div>
        <h3>{product.description}</h3>
        <h3>{product.price}</h3>
        </div>
        <button className="backBtn" onClick={backToHome}>back</button>
        {/* <Link to={`/carts/${product.id}`}>
        <img src={cartImg} alt="Cart Image" />
        </Link> */}
      </div>
    </div>
  );
}

export default ProductDetailsPage;
