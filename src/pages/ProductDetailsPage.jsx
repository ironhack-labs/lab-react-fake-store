import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

function ProductDetailsPage(props) {
  const {productId} = useParams(); 
  const [product, setProduct] = useState(null);
  
  useEffect(()=>{
    axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      .then((response)=>{
        setProduct(response.data)
      })
      .catch(error => {
        console.error("get product error:", error)
      })
  }, [productId]);
 // To fetch the product details, set up an effect with the `useEffect` hook:

  useEffect(() => {
    console.log("Updated product:", product);
  }, [product]);

  if (!product) return <p>Loading...</p>;

  return (
    <div className="ProductDetailsPage">
      <img src={product.image} alt={product.title} />
      <h3>{product.category}</h3>
      <h1>{product.title}</h1>
      <h2>{product.price}</h2>
      <h2>{product.description}</h2>
      <Link to='/'>
        <button>Back</button>
      </Link>
    </div>
  );
}

export default ProductDetailsPage;
