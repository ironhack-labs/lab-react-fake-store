import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import './ProductDetailsPage.css'


function ProductDetailsPage() {
  // The state variable `product` is currently an empty object {},
  // but you should use it to store the response from the Fake Store API (the product details).
  const [product, setProduct] = useState();
  const [isLoading, setIsLoading] = useState(true)

  const { productId } = useParams()

  const apiURL = `https://fakestoreapi.com/products/${productId}`



  useEffect(() => {
    getOneProduct()
  }, [])

  const getOneProduct = () => {
    axios
      .get(apiURL)
      .then(response => {
        setProduct(response.data)
        setIsLoading(false)
      })
      .catch(err => alert('ERROR, NO SE PUEDEN MOSTRAR LOS DETALLES'))
  }

  return (
    isLoading ? <h1>LOADING...</h1> :
      <div className="ProductDetailsPage">
        <img src={product.image} alt="Image of product" />
        <h1>{product.title}</h1>
        <p>{product.category}</p>
        <p>{product.price}€</p>
        <p>{product.description}</p>

      </div>
  );
}

export default ProductDetailsPage;
