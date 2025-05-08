import { useEffect, useState } from "react";
import  {useParams} from  'react-router-dom';


function ProductDetailsPage() {
  const params = useParams()
  // The state variable `product` is currently an empty object {},
  // but you should use it to store the response from the Fake Store API (the product details).
  const [product, setProduct] = useState(null);


  // The `productId` coming from the URL parameter is available in the URL path.
  // You can access it with the `useParams` hook from react-router-dom.


  // To fetch the product details, set up an effect with the `useEffect` hook:

  const getData = async () => {
    try {
      const response = await fetch(`https://fakestoreapi.com/products/${params.productId}`)
      const data = await response.json()
      setProduct(data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(()=>{
    getData()
  },[params.productId])

  if (product===null) {
    return(<h1>Recibiendo datos</h1>)
  }

  return (
    <div className="ProductDetailsPage">
      <h1>{product.title}</h1>
      <img src={product.image} style={{height:"400px"}} alt="" />
      <h4>{product.category}</h4>
      <h3>{product.description}</h3>
      <h2>€{product.price}</h2>
    </div>
  );
}

export default ProductDetailsPage;
