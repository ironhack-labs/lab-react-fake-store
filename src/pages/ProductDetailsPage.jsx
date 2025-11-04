import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function ProductDetailsPage() {
  // The state variable `product` is currently an empty object {},
  // but you should use it to store the response from the Fake Store API (the product details).
  const [product, setProduct] = useState({});
  const param = useParams()

  // The `productId` coming from the URL parameter is available in the URL path.
  // You can access it with the `useParams` hook from react-router-dom.


  // To fetch the product details, set up an effect with the `useEffect` hook:

  useEffect(()=>{
    fetch(`https://fakestoreapi.com/products/${param.productId}`)
    .then((response)=>{
      return response.json()
    })
    .then((response)=>{
      setProduct(response)
    })
    .catch((error)=>console.log(error))
  },[])



  return (
    <div className="ProductDetailsPage">
      <img src={product.image} alt="" srcset="" />
      <h1>{product.title}</h1>
      <div style={{display:'flex',gap:'20px',justifyContent:'center'}}>
        <p style={{width:'600px'}}>{product.description}</p>
        <p>$ {product.price}</p>
      </div>
      <Link to={'/'}>
      <button style={{backgroundColor:'darkgreen',color:'white'}}>Back</button>
      </Link>
    </div>
  );
}

export default ProductDetailsPage;
