import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";


function ProductDetailsPage() {
  // The state variable `product` is currently an empty object {},
  // but you should use it to store the response from the Fake Store API (the product details).
  // The `productId` coming from the URL parameter is available in the URL path.
  // You can access it with the `useParams` hook from react-router-dom.
  // To fetch the product details, set up an effect with the `useEffect` hook
  const [oneProduct, setOneProduct] = useState(null);
    const {productId} = useParams()
    console.log("my params", productId)
    useEffect(()=>{
      fetch(`https://fakestoreapi.com/products/${productId}`)
      .then((res)=> res.json())
      .then((theOneProduct)=>{
        console.log("the one product", theOneProduct)
        setOneProduct(theOneProduct)
      })
      .catch((err)=>console.log(err))

    },[productId])

    if(!oneProduct){
      return <p>loading...</p>
    }
  

  return (
    <div className="ProductDetailsPage">
    {/* Render product details here */}
      <div className="product-details-card">
            <img src={oneProduct.image} alt={oneProduct.title} style={{width: "30vw"}}/>
            <h2>{oneProduct.title}</h2>
            <h2>${oneProduct.price}</h2>
            <p>{oneProduct.description}</p>
      </div>
      <Link to={"/"}>
      <button className="back-button">Back</button>
      </Link>
    </div>
  );
}

export default ProductDetailsPage;
