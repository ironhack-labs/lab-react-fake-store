import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


function ProductDetailsPage() {
  const {productId} = useParams()

  // The state variable `product` is currently an empty object {},
  // but you should use it to store the response from the Fake Store API (the product details).
  const [product, setProduct] = useState(null);

  useEffect(() => {

    axios.get(`https://fakestoreapi.com/products/${productId}`)
    .then((response) => {
      setProduct(response.data)
    })
    .catch((error) => {
      console.log(error)
    }) 
  }, [productId])




  // The `productId` coming from the URL parameter is available in the URL path.
  // You can access it with the `useParams` hook from react-router-dom.


  // To fetch the product details, set up an effect with the `useEffect` hook:
  



  return (
    <div className="ProductDetailsPage">
    {/* Render product details here */}
    {product && (
        <div key={productId} className="productDetailsPage">
        <img className="imageDetailsPage" src={product.image} alt="" />
        <h2>{product.title}</h2>
        <h3>{product.category}</h3>
        <h3>{`Price: $${product.price}`}</h3>
        <p>{product.description}</p>
        </div>
        )}
    </div>
  );
}

export default ProductDetailsPage;
