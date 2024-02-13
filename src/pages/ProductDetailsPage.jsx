import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";



function ProductDetailsPage() {
  // The state variable `product` is currently an empty object {},
  // but you should use it to store the response from the Fake Store API (the product details).
  const [product, setProduct] = useState({});
  const { id } = useParams();
  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((response) => {
        setProduct(response.data);
      })
      .catch((error) => {
        console.log(error);
      })
  },[])
  // The `productId` coming from the URL parameter is available in the URL path.
  // You can access it with the `useParams` hook from react-router-dom.


  // To fetch the product details, set up an effect with the `useEffect` hook:



  return (
    <div className="ProductDetailsPage">
      {/* Render product details here */}

       
          <div key={product.id} style={{ display: 'flex'}} >
            <img src={product.image} height={100} width={200} />
            <h2 style={{color: "black", border: "2px solid black", backgroundColor: "blue", fontWeight: "bold", width: "200px", height: "40px"}}>{product.category}</h2>
            <h2>{product.title}</h2>
            <h2>{product.price}€</h2>
            <h2>{product.description}</h2>
            <Link to={`/`}><button style={{color: "black", border: "2px solid black", backgroundColor: "gray", fontWeight: "bold", width: "200px"}}>Back to products</button></Link>
          </div> 
        
    </div> 
  );
}

export default ProductDetailsPage;
