import { useState, useEffect  } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

function ProductDetailsPage() {
  // The state variable `product` is currently an empty object {},
  // but you should use it to store the response from the Fake Store API (the product details).
  const [product, setProduct] = useState({});


  // The `productId` coming from the URL parameter is available in the URL path.
  // You can access it with the `useParams` hook from react-router-dom.
  let params = useParams()

// To fetch the product details, set up an effect with the `useEffect` hook:
useEffect(() => {
    
async function getProduct(){
  try{
  
    const response = await fetch(`https://fakestoreapi.com/products/${params.productId}`)
    const json = await response.json();
    setProduct(json)
  }
  catch(error){
    console.error(error.message);
  }
}
  getProduct(params.productId)
},[params.productId]

)
// console.log(product);
  



  return (
    <>
    <div className="ProductDetailsPage">
    {/* Render product details here */}
    <img src = {product.image}  alt="psroduct_image" />
    <span className="category">{product.category}</span>
     <h2>{product.title} </h2>
      <div className="descriptionPrice">
        <p>{product.description}</p>
        <span className="price">${product.price}</span>
      </div>

    </div>
   <Link to={'/'}> <button className="back">Back</button></Link>
   </>
  );
}


export default ProductDetailsPage;
