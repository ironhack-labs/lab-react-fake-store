import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";



function ProductDetailsPage() {
  // The state variable `product` is currently an empty object {},
  // but you should use it to store the response from the Fake Store API (the product details).
  // The `productId` coming from the URL parameter is available in the URL path.
  // You can access it with the `useParams` hook from react-router-dom.
  // To fetch the product details, set up an effect with the `useEffect` hook:


  const [product, setProduct] = useState({});
  const [isLoading, setIsLoading] = useState(true)

  const { productId } = useParams()


  useEffect(() => {
    getOneProduct()
  }, [])

  const getOneProduct = () => {

    axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      .then(response => {
        setProduct(response.data)
        setIsLoading(false)
      })
      .catch(err => alert('ERROR RECEIVING PRODUCT'))
  }



  return (
    <div className="ProductDetailsPage card">

      <h1>{product.title}</h1>
      <img src={product.image} alt="product" />
      <p>Price: {product.price}</p>

    </div>
  );
}

export default ProductDetailsPage;
