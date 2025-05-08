import axios from "axios";
import './ProductDetailsPage.css'
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";


function ProductDetailsPage() {

  const { productId } = useParams()

  const [product, setProduct] = useState({});
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      .then(response => {
        setProduct(response.data)
        setIsLoading(false)
      })
      .catch(err => console.log(err))
  }, [])

  const { image, title, category, price, description } = product

  return (
    <div className="ProductDetailsPage">
      {isLoading ?
        <h1>CARGANDO...</h1>
        : <article>
          <img src={image} alt={title} />
          <p className="Category">{category}</p>
          <h1> {title}</h1>
          <div className="DescriptionAndPrice">
            <p className="Description">{description}</p>
            <h2 className="Price"><strong>${price}</strong></h2>
          </div>
          <Link to={'/'}><button className="BackBtn">BACK</button></Link>
        </article>}
    </div>
  );
}

export default ProductDetailsPage;
