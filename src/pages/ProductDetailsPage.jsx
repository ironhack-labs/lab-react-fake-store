import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";


function ProductDetailsPage() {
  const [product, setProduct] = useState({})
  const { productId } = useParams()

  useEffect(() => {
    getOneProduct()
  }, [])

  const getOneProduct = () => {
    axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      .then(response => {
        setProduct(response.data)
      })
      .catch(err => alert('Error al recibir datos'))
  }




  return (
    <div className="ProductDetailsPage">

      <img src={product.image} alt="product" />
      <h3>{product.title}</h3>
      <p>{product.category}</p>
      <p>€ {product.price}</p>
      <p>{product.description}</p>
    </div>

  );
}


export default ProductDetailsPage;