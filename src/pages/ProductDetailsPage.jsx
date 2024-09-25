import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


function ProductDetailsPage() {
  // The state variable `product` is currently an empty object {},
  // but you should use it to store the response from the Fake Store API (the product details).
  const [product, setProduct] = useState({});


  // The `productId` coming from the URL parameter is available in the URL path.
  // You can access it with the `useParams` hook from react-router-dom.
  const params = useParams()
  const getData = async() => {
    try{
      const response= await fetch(`https://fakestoreapi.com/products/${params.productId}`)
      const data = await response.json()
      setProduct(data)
    }catch(error) {
      console.log(error)
    }
  }
 

  // To fetch the product details, set up an effect with the `useEffect` hook:
  useEffect(() => {
    getData()
  },[params.productId])

  if(product === null){
    return <h3>... buscando producto</h3>
  }
  return (
    <div className="ProductDetailsPage">
    {/* Render product details here */}
    <h4>Detalles del producto</h4>
    <h1>{product.title}</h1>
    <img src={product.image} alt="" />
    <h3>{product.description}</h3>


    </div>
  );
}

export default ProductDetailsPage;
