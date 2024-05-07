import { useState , useEffect} from "react";
import { useParams } from "react-router-dom";



function ProductDetailsPage() {
  // The state variable `product` is currently an empty object {},
  // but you should use it to store the response from the Fake Store API (the product details).
  const [product, setProduct] = useState({});
  const {productId} = useParams();

  //const productFound = product.find((product) => product.id == productId);

useEffect(() => {
  fetch(`https://fakestoreapi.com/products/${productId}`)
  .then((response)=>{
    return response.json()
  })
  .then((data)=>{
    console.log(data)
    return setProduct(data)})

},[])
  

  // The `productId` coming from the URL parameter is available in the URL path.
  // You can access it with the `useParams` hook from react-router-dom.


  // To fetch the product details, set up an effect with the `useEffect` hook:



  return (
    <div className="ProductDetailsPage">
    {/* Render product details here */}
      <div>Product: {product.title}</div>
      <img src={product.image}/>
      <div>Description: {product.description}</div>
      <div>Category: {product.category}</div>
      <div>Price: {product.price}</div>
      <div> {product.rating}</div>

    </div>
  );
}

export default ProductDetailsPage;
