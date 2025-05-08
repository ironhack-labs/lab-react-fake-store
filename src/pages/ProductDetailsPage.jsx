import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


function ProductDetailsPage() {
  const params = useParams()
  // The state variable `product` is currently an empty object {},
  // but you should use it to store the response from the Fake Store API (the product details).
  const [product, setProduct] = useState(null);


  // The `productId` coming from the URL parameter is available in the URL path.
  // You can access it with the `useParams` hook from react-router-dom.


  // To fetch the product details, set up an effect with the `useEffect` hook:
  useEffect(()=>{
    getData()
  }, [params.productId])

  const getData = async()=>{
    setProduct(null)
    try{
      const response = await fetch(` https://fakestoreapi.com/products/${params.productId}`)
      const data = await response.json()
      setProduct(data)
    } catch(error){
      console.log(error)
    }
  }

  if(product === null){
    return <p>Loading</p>
  }

  return (
    <div className="ProductDetailsPage">
    {/* Render product details here */}
    <div>
      <img src={product.image} height={300} width={300} alt="product image" />
      <p>{product.category}</p>
      <h3>{product.title}</h3>
      <div>
        <p>{product.descriptions}</p>
        <h3> {product.price} </h3>
      </div>
    </div>
    </div>
  );
}

export default ProductDetailsPage;
