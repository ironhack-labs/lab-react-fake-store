import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios'

function ProductDetailsPage() {

  const [product, setProduct] = useState({});
  const { productId } = useParams()

  useEffect(() => {                   
    getOneProduct() 
  }, [])

  const getOneProduct = () => {
    axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      .then(response =>{
        setProduct(response.data)
      })
      .catch(error => console.log('Hay un error de tipo: ', error))
  }

  return (
    <div className="productDetailsPage">
      <img src={product.image} alt="product" style={{width: '100px'}}/>
      <h2>{product.title}</h2>
      <p>Price: {product.price}</p>
      <p>Category: {product.category}</p>
    </div>
  );
}

export default ProductDetailsPage