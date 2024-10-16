import { useState, useEffect } from "react";
import {  } from "react";
import { Link, useParams } from "react-router-dom";


function ProductDetailsPage() {
  const {productId} = useParams()
  // The state variable `product` is currently an empty object {},
  // but you should use it to store the response from the Fake Store API (the product details).
  const [productItem, setProductItem] = useState({
  });
  const productUrl = `https://fakestoreapi.com/products/${productId}`

  const getProductData = async(urlName) =>{
    try{
      const response = await fetch(urlName);
      const data = await response.json();
      setProductItem(data);
    }
    catch(error){
      console.log(error)
    }
  }

  


  useEffect(()=>{
    getProductData(productUrl)
  }, {})


  // The `productId` coming from the URL parameter is available in the URL path.
  // You can access it with the `useParams` hook from react-router-dom.


  // To fetch the product details, set up an effect with the `useEffect` hook:



  return (
    <div className="product-details-page">
    {<>
      <img className="product-details-image" src={productItem.image} />
      <p className="product-details-title">{productItem.title}</p>
      <p className="product-details-category">{productItem.category }</p>
      <p>${productItem.price}</p>
      <p className="product-details-description">{productItem.description}</p>
      <Link to="/"><button style={{ background: "green", color: "white" }}>Back</button></Link>
      </>
    }
    </div>
  );
}

export default ProductDetailsPage;
