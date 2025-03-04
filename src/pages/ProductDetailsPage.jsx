import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


function ProductDetailsPage() {
  // The state variable `product` is currently an empty object {},
  // but you should use it to store the response from the Fake Store API (the product details).
  const [product, setProduct] = useState({});


  // The `productId` coming from the URL parameter is available in the URL path.
  // You can access it with the `useParams` hook from react-router-dom.

  const parametrosDinamicos = useParams();
  console.log(parametrosDinamicos);

  // To fetch the product details, set up an effect with the `useEffect` hook:


  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${parametrosDinamicos.productId}`)
    .then((response) => {
      return response.json()
    })
    .then((data) => {
      //console.log(data)
      setProduct(data);
    })
    .catch((error)=> {
      console.log(error)
    })

  },[])

  return (
    <div className="ProductDetailsPage">
    {/* Render product details here */}
    <img src={product.image} alt="foto-producto" />
    <p>{product.category}</p>
    <h2>{product.title}</h2>
    <p>{product.price}</p>
    <p>{product.description}</p>
    </div>
  );
}

export default ProductDetailsPage;
