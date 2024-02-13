import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

function ProductDetailsPage() {
  // The state variable `product` is currently an empty object {},
  // but you should use it to store the response from the Fake Store API (the product details).
  const [product, setProduct] = useState({});
  const {id} = useParams()

  // The `productId` coming from the URL parameter is available in the URL path.
  // You can access it with the `useParams` hook from react-router-dom.


  // To fetch the product details, set up an effect with the `useEffect` hook:
  useEffect(()=>{
    axios
    .get(`https://fakestoreapi.com/products/${id}`)
    .then((response)=>{setProduct(response.data)
    }).catch((error)=>{console.log(error)})
  }, [])


  return (
    <div className="ProductDetailsPage">
      <article key={product.id}>
        <img src={product.image}/>
        <p>{product.category}</p>
        <h3>{product.title}</h3>
        <p>{product.description}</p>
        <p>{product.price}</p>
        <Link to={"/"}>
        <button>Back</button>
        </Link>
      </article>      
    </div>
  );
}

export default ProductDetailsPage;