import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom"



function ProductDetailsPage() {


  // The state variable `product` is currently an empty object {},
  // but you should use it to store the response from the Fake Store API (the product details).
  const [productDet, setProductDet] = useState({});
  const [isLoading, setIsLoading] = useState()

  const { productId } = useParams()

  useEffect(() => loadDetailProducts(), [productId])

  const loadDetailProducts = () => {
    setIsLoading(true)
    axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      .then(response => {
        setProductDet(response.data)               // en axios la respuesta del server está en .data
        setIsLoading(false)
      })
      .catch(err => console.log(err))

  }


  // The `productId` coming from the URL parameter is available in the URL path.
  // You can access it with the `useParams` hook from react-router-dom.


  // To fetch the product details, set up an effect with the `useEffect` hook:



  return (

    <div className="ProductDetailsPage">

      <h1>DETAILS</h1>
      {isLoading ? (
        <h1>Cargando...</h1>
      ) : (

        <>
          <h1>{productDet.title}</h1>
          <img src={productDet.image} alt={productDet.title} />
          <p>{productDet.category}</p>
          <p>Price: {productDet.price}</p>
          <p>{productDet.description}</p>
        </>
      )}
    </div>
  );

}

export default ProductDetailsPage;
