import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";


const ProductDetailsPage = () => {
  // The state variable `product` is currently an empty object {},
  // but you should use it to store the response from the Fake Store API (the product details).
  const [product, setProduct] = useState({})
  const [isLoading, setIsLoading] = useState(true)

  const { productId } = useParams()

  useEffect(() => loadDetails(), [productId])

  const loadDetails = () => {

    axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      .then(response => {
        setProduct(response.data)
        setIsLoading(false)
      })
      .catch(err => console.log(err))
  }

  // The `productId` coming from the URL parameter is available in the URL path.
  // You can access it with the `useParams` hook from react-router-dom.


  // To fetch the product details, set up an effect with the `useEffect` hook:



  return (
    <div className="ProductDetailsPage">
      {
        isLoading
          ?
          <h1>Estoy en proceso... no me apures</h1>
          :
          <article className="card" key={product.id}>
            <img src={product.image} alt={product.name} />
            <h3>{product.title}</h3>
            <p>{product.category}</p>
            <p>${product.price}</p>
            <p>{product.description}</p>

          </article>

      }
    </div >
  );
}

export default ProductDetailsPage;
