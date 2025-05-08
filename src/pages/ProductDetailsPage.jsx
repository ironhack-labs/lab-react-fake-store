import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


function ProductDetailsPage() {
  // The state variable `product` is currently an empty object {},
  // but you should use it to store the response from the Fake Store API (the product details).
  const [product, setProduct] = useState(null);
  const params = useParams()
//console.log(params)
useEffect(()=>{

 

  fetch(`https://fakestoreapi.com/products/${params.productId}`)
  .then((response)=>{
    //console.log(response)
    return  response.json()
    })
    .then((response)=>{
     // console.log(response)
      setProduct(response)
    })
    .catch((error)=>{
      error
    })
}, [params.id] )
  // The `productId` coming from the URL parameter is available in the URL path.
  // You can access it with the `useParams` hook from react-router-dom.
  if (!product) {
    return <div>...CARGANDO</div>
  }

  // To fetch the product details, set up an effect with the `useEffect` hook:



  return (
    <div className="ProductDetailsPage">
       <div key={product.id} className="card">
          <img src={product.image} alt="producto" />
          <h2>{product.title}</h2>
          <p>{product.price}</p>
          <p>{product.category}</p>
          <p>{product.description}</p>
        </div>
    </div>
  );
}

export default ProductDetailsPage;
