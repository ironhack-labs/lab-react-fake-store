import './ProductDetailsPage.css'
import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";


function ProductDetailsPage() {

  const [product, setProduct] = useState({});
  const [isLoading, setIsLoading] = useState(true)

  const { productId } = useParams()


  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      .then(response => {
        setProduct(response.data)
        setIsLoading(false)
      })
      .catch(err => console.log(err))
  }, [])



  return (
    <div>
      {
        isLoading
          ? <h1>LOADING PRODUCTS...</h1>
          : <div className="ProductDetailsPage">
            <div className="ProductDetails">
              <img src={product.image} alt="" />
              <p>{product.category}</p>
              <p>{product.title}</p>
              <div className='ProductInfo'>
                <p>{product.description}</p>
                <p>${product.price}</p>
              </div>
            </div>
            <Link to={'/'} >
              <button type='button' className='btn-back'>Back</button>
            </Link>
          </div>
      }

    </div>
  );
}

export default ProductDetailsPage;
