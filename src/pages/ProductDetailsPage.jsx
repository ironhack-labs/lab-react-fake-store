import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import './ProductDetailsPage.css'

function ProductDetailsPage() {

  const [product, setProduct] = useState();
  const [isLoading, setIsLoading] = useState(true)

  const { productId } = useParams()

  const urlApi = `https://fakestoreapi.com/products/${productId}`

  useEffect(() => {
    getOneProducts()
  }, [])


  const getOneProducts = () => {
    axios
      .get(urlApi)
      .then(response => {
        setProduct(response.data);
        setIsLoading(false)
      })
      .catch(err => console.log('Error recibiendo los productos'))
  };

  return (
    isLoading ? <p>Loading</p> :
      <div className="ProductDetailsPage">
        {/* Render product details here */}
        <img src={product.image} alt="product" />
        <h1>{product.title}</h1>
        <p>{product.description}</p>
        <h3>{product.price}€</h3>

      </div>
  );
}

export default ProductDetailsPage;
