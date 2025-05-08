import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios'


function ProductDetailsPage() {

  const [product, setProduct] = useState({});
  const { productId } = useParams()

  useEffect(() => {
    getAllAProduct()
  }, [])

  const getAllAProduct = () => {
    axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      .then(response => {
        setProduct(response.data)                // axios coloca la respuesta del server en .data
      })
      .catch(err => alert('ERROR RECIBIENDO LOS APARTAMENTOS'))
  }




  return (
    <div className="ProductDetailsPage">

      <img src={product.image} alt="product" />
      <h3>{product.title}</h3>
      <p>{product.description}</p>
      <p>{product.price}</p>
      <p>{product.category}</p>

    </div>
  );
}

export default ProductDetailsPage;
