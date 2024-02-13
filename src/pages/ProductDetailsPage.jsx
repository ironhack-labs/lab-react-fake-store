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

  const {id} = useParams();

  useEffect(()=>{

    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((response)=> setProduct(response.data))
      .catch((error)=> console.log(error))
  }, [])

  // To fetch the product details, set up an effect with the `useEffect` hook:



  return (
    <div className="ProductDetailsPage">
        <article key={product.id}>
          <img src={product.image} style={{width: 400, height: 400, border:"1px solid grey", margin: 15}}></img>
          <h3 style={{backgroundColor: "blue", borderRadius: 5, width: 150, margin: 15, color: "white"}}>{product.category}</h3>
          <h1 style={{display: "flex", justifyContent:"left"}}>{product.title}</h1>
          <div style={{display: "flex", flexWrap: "wrap"}}>
            <p style={{width: 500, margin: 20}}>{product.description}</p>
            <p style={{margin: 20, color: "blue", fontSize: 35}}>{product.price}€</p>
          </div>
          <Link to="/">
          <button style={{padding: 15, backgroundColor: "green", color:"white", borderRadius: 5}}>Back</button>
          </Link>
        </article>
    </div>
  );
}

export default ProductDetailsPage;
