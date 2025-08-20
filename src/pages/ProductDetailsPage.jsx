import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";


function ProductDetailsPage() {
  // The state variable `product` is currently an empty object {},
  // but you should use it to store the response from the Fake Store API (the product details).
  const [product, setProduct] = useState(null);

  const params = useParams()
  //console.log (params)

  useEffect(()=>{
    
    getData()

  },[])

const getData = async()=> {

  try {
    const response = await axios.get (`https://fakestoreapi.com/products/${params.productId}`);
  console.log(response.data)
  setProduct(response.data)
    
  } catch (error) {
    console.log(error)
  }
}

if (product===null){
  return (
    <h3>Loading...</h3>
  )
}

  // The `productId` coming from the URL parameter is available in the URL path.
  // You can access it with the `useParams` hook from react-router-dom.


  // To fetch the product details, set up an effect with the `useEffect` hook:


  return (
    <div className="ProductDetailsPage">
      
          <img src = {product.image} />
          <p id="tag">{product.category}</p>
          <h1>{product.title}</h1>
          <div className="subContainer">
          <p id="description">{product.description}</p>
          <h2 id="price">${product.price}</h2>
          </div>
          
          
          

      
    </div>
  );
}

export default ProductDetailsPage;
