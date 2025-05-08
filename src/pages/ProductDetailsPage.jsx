import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";


function ProductDetailsPage() {
  // The state variable `product` is currently an empty object {},
  // but you should use it to store the response from the Fake Store API (the product details).

  const [product, setProduct] = useState({});
  const [isLoading, setIsLoading] = useState(true)

  const { productId } = useParams()


  useEffect(() => {
    loadProduct()
  }, [productId])

  const loadProduct = () => {

    axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      .then(response => {
        setProduct(response.data)
        setIsLoading(false)
      })
      .catch(err => console.log(err))

  }

  return (
    <div className="ProductDetailsPage">
      {/* Render product details here */

        isLoading
          ?
          <h1>Cargando...</h1>
          :
          <article className="ProductDetailsArticle">
            <img src={product.image} alt={product.title} />
            <p className="productCategory">{product.category}</p>
            <h2><strong>{product.title}</strong></h2>

            <div className="styling-div">
              <p className="productDesc">{product.description}</p>
              <p className="productPrice"> <strong>${product.price}</strong></p>
              <button className="btnAdd">Add to Cart</button>
            </div>
          </article>
      }
      <hr />
      <Link to="/">
        <button className="btnBack">Back</button>
      </Link>
    </div>
  );
}

export default ProductDetailsPage;
