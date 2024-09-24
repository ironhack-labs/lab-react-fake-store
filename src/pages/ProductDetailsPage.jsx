import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";


function ProductDetailsPage() {
  // The state variable `product` is currently an empty object {},
  // but you should use it to store the response from the Fake Store API (the product details).
  const [product, setProduct] = useState({});
  const params = useParams()

  // The `productId` coming from the URL parameter is available in the URL path.
  // You can access it with the `useParams` hook from react-router-dom.
  useEffect(() =>{

    obtainData()

  },[params.productId])
  
  const obtainData = async () =>{

    try {
      
      let response = await fetch (`https://fakestoreapi.com/products/${params.productId}`)
      let data = await response.json()
      setProduct(data)

    } 
    catch (error) {
      console.log(error)
    }

  }
  if(product === undefined){
    return <h3>LOCO!!</h3>
  }
  // To fetch the product details, set up an effect with the `useEffect` hook:



  return (
    <div className="ProductDetailsPage">
    {/* Render product details here */}
    <img src={product.image} alt="image"/>
            <h5>{product.category}</h5>
            <h3><strong>{product.title}</strong></h3>
            <p className="description">{product.description}</p>
            <Link to = {"/"}>
            <button>Back</button>
            </Link>

    </div>
  );
}

export default ProductDetailsPage;
