import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"

function ProductDetailsPage() {
  // The state variable `product` is currently an empty object {},
  // but you should use it to store the response from the Fake Store API (the product details).
  const [product, setProduct] = useState({});

  const parametrosDinamicos = useParams()

  // The `productId` coming from the URL parameter is available in the URL path.
  // You can access it with the `useParams` hook from react-router-dom.


  // To fetch the product details, set up an effect with the `useEffect` hook:

  useEffect(()=>{
    fetch(`https://fakestoreapi.com/products/${parametrosDinamicos.productId}`)
    .then((response)=>{
        return response.json()
    })
    .then((data)=>{
        setProduct(data)
    })
    .catch((error)=>{
        console.log(error)
    })
}, [parametrosDinamicos.productId])

  return (
    <div className="ProductDetailsPage" style={{display:"flex", flexDirection:"column", alignItems:"center", padding:"10px"}}>
    {/* Render product details here */}
      <img src={product.image} width="350px" style={{ border: "1px solid #000"}}/>
      <h2 style={{width:"250px"}}><strong>{product.title}</strong></h2>
      <div style={{display:"flex", flexDirection:"row", alignItems:"center", marginTop:"15px"}}>
      <h3 style={{backgroundColor:"blue", color:"white", padding:"5px", borderRadius:"10px", marginRight:"10px"}}>{product.category}</h3>
      <p style={{backgroundColor:"green", color:"white", padding:"5px", borderRadius:"10px"}}>${product.price}</p>
      </div>
      <p style={{display:"inline-block", justifyContent:"center", width:"400px", marginTop:"30px"}}>{product.description}</p>
    </div>
  );
}

export default ProductDetailsPage;
