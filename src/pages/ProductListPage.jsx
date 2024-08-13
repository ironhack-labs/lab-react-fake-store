import axios from "axios";
import { useState, useEffect} from "react";
import { Link } from "react-router-dom";
function ProductListPage() {
  // The state variable `products` is currently an empty array [],
  // but you should use it to store the response from the Fake Store API (the list of products).
  const [products, setProducts] = useState(null);
  // To fetch the list of products, set up an effect with the `useEffect` hook:
  useEffect(()=>{
    axios.get("https://fakestoreapi.com/products")
    .then(response=>{
      console.log("sucess!")
      setProducts(response.data)
    })
    .catch(e=>console.log("error",e))
  },[]);
  return (
  <>
    {products &&
      products.map((productsDetails, index)=>{
      return (  <div className="ProductListPage" key={index} >
        <h1>Title: {productsDetails.title} </h1>
        <p>Price: {productsDetails.price} </p>
        <p>Description {productsDetails.description} </p>
        <p>Category: {productsDetails.category} </p>
        <img src={productsDetails.image} />
        <Link to={`/product/details/${productsDetails.id}`}>More details</Link>
      </div>)})
    }
</>
  );
}
export default ProductListPage;