import { Navigate, useParams} from "react-router-dom"
import axios from "axios"
import { useEffect, useState } from "react";

function ProductDetailsPage() {
  // The state variable `product` is currently an empty object {},
  // but you should use it to store the response from the Fake Store API (the product details).
  const [product, setProduct] = useState({});
  const [isLoading, setIsLoading] = useState(true)

  // The `productId` coming from the URL parameter is available in the URL path.
  // You can access it with the `useParams` hook from react-router-dom.
  const {productId} = useParams()


  // To fetch the product details, set up an effect with the `useEffect` hook:
  useEffect(() => {
    loadDetails()
  }, [productId] );  

  const loadDetails = () => {
    axios
    .get(`https://fakestoreapi.com/products/${productId}`)
    .then(response=>{
      setProduct(response.data)
      setIsLoading(false)
    })
    .catch(err => console.log(err))
  }

  return (
    <div className="ProductDetailsPage">
    {
      isLoading
      ?
      <h1>Cargando...</h1>
      :
          <article key={product.id}>
            <img src={product.image} alt="product-img"/>
            <h2>{product.title}</h2>
            <p>{product.category}</p>
            <p>{product.price}</p>
            <p>{product.description}</p>
          </article>
        }
    </div>
  );
}

export default ProductDetailsPage;
