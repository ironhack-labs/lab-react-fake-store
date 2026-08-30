import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

function ProductDetailsPage() {
  // The state variable `product` is currently an empty object {},
  // but you should use it to store the response from the Fake Store API (the product details).
  const [product, setProduct] = useState({});


  // The `productId` coming from the URL parameter is available in the URL path.
  // You can access it with the `useParams` hook from react-router-dom.
  const { productId } = useParams();


  // To fetch the product details, set up an effect with the `useEffect` hook:
  useEffect(()=>{
    async function fetchDetails() {
      try{
        const response = await axios.get(`https://fakestoreapi.com/products/${productId}`)
        setProduct(response.data)

      }catch(error){
        console.log(error)
      }
    }

    fetchDetails()

  },[])



  return (
    <div className="ProductDetailsPage">
    {/* Render product details here */}

    <div style={{ padding: "20px", maxWidth: "600px" }}>
      {/* 1. Image */}
      <img src={product.image} alt={product.title} width="200" />

      {/* 2. Category Tag */}
      <div>
        <span style={{ backgroundColor: "#4f46e5", color: "white", padding: "4px 8px" }}>
          {product.category}
        </span>
      </div>

      {/* 3. Title */}
      <h2>{product.title}</h2>

      {/* 4. Description and Price */}
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <p>{product.description}</p>
        <h3>${product.price}</h3>
      </div>

      {/* 5. Back Button */}
      <Link to="/">
        <button style={{ backgroundColor: "#22c55e", color: "white", border: "none", padding: "8px 16px" }}>
          Back
        </button>
      </Link>
    </div>
    </div>
  );
}

export default ProductDetailsPage;
