import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


function ProductDetailsPage() {

  const [product, setProduct] = useState({});

  const { productId } = useParams();

  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    getProductById()
  }, [])

  const getProductById = () => {
    axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      .then(response => {
        setProduct(response.data)
        setIsLoading(false)
      })
      .catch(err => console.log('Error recibiendo cada producto'))

  }

  return (
    <div className="ProductDetailsPage">
      <p>{product.title}</p>
      <p>{product.price}</p>
      <p>{product.description}</p>
      <p>{product.category}</p>
    </div>
  );
}

export default ProductDetailsPage;
