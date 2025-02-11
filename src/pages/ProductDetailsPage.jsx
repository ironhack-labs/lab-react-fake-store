import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";


function ProductDetailsPage() {
  // The state variable `product` is currently an empty object {},
  // but you should use it to store the response from the Fake Store API (the product details).
  const [product, setProduct] = useState({});

 

  // The `productId` coming from the URL parameter is available in the URL path.
  // You can access it with the `useParams` hook from react-router-dom.


  // To fetch the product details, set up an effect with the `useEffect` hook:

  let params = useParams()

  useEffect(()=>{
    axios.get(`https://fakestoreapi.com/products/${params.productId}`)
    .then((r)=>{
      console.log(r.data)
      setProduct(r.data)
    })
    .catch((e) => {console.log("error...")})
  }, [])


  return (
    <div className="ProductDetailsPage">
    <div key={product.index} className="card">
        <div className="content"><img src={product.image} alt={product.id}/></div>
        <div className="content"><p><b>{product.title}</b></p></div>
        <div className="content"><p>{product.category}</p></div>
        <div className="content"><p>{product.price}</p></div>
        <div className="content"><p>{product.description}</p></div>
    </div>
    </div>
  );
}

export default ProductDetailsPage;
