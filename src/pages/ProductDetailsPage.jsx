import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function ProductDetailsPage() {

  const [product, setProduct] = useState({})
  const [isLoading, setIsLoading] = useState(true)

  const { productId } = useParams()


  useEffect(() => {
    loadDetails()
  }, [productId])

  const loadDetails = () => {
    axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      .then(response => {
        setProduct(response.data)
        setIsLoading(false)
      })
      .catch(err => console.log(err))
  }



  return (
    <div className="ProductListPage">
      {

        isLoading
          ?
          <h1>Loading...</h1>

          :


          <article className="ProductCard" key={product.id}>
            <img className="productImage" src={product.image} alt="product" />

            <h3>{product.title} </h3>
            <p>{product.category}</p>
            <p>{product.price}</p>
            <p>{product.description}</p>
          </article>

      }

    </div>
  )
}

export default ProductDetailsPage;