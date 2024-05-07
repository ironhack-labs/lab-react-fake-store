import { useState } from "react"
import { useEffect} from "react"
import { useParams,Link } from "react-router-dom"


function ProductDetailsPage() {
  // The state variable `product` is currently an empty object {},
  // but you should use it to store the response from the Fake Store API (the product details).
  const params = useParams()
  const [product, setProduct] = useState({});
  

  // The `productId` coming from the URL parameter is available in the URL path.
  // You can access it with the `useParams` hook from react-router-dom.

  // To fetch the product details, set up an effect with the `useEffect` hook:

  useEffect(()=>{
    fetch(`https://fakestoreapi.com/products/${params.productId}`)
    .then((response)=>{
      return response.json()
    })
    .then((response)=>{
      setProduct(response)      
    })
    .catch((error)=>{
      console.log(error)
    })


  },[params])


  return (
    <div className="ProductDetailsPage">
    {/* Render product details here */}
      <div className="card text-center">
        <img src={product.image} style={{width:"150px",border:"solid 1px gray"}} alt="img" />
        <p style={{fontWeight:"bold"}}>{product.title} -</p>
        <p>{product.category}</p>
        <p>{product.price}</p>
        <p>{product.description}</p>
      </div>
    <Link to={"/"}><button>Go back</button></Link>
    </div>
  );
}

export default ProductDetailsPage;
