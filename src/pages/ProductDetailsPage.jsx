import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";


function ProductDetailsPage() {
  // The state variable `product` is currently an empty object {},
  // but you should use it to store the response from the Fake Store API (the product details).
  const [product, setProduct] = useState({});
  const { productId } = useParams()
  const navigate = useNavigate()
  // The `productId` coming from the URL parameter is available in the URL path.
  // You can access it with the `useParams` hook from react-router-dom.
  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${productId}`)
      .then(res => setProduct(res.data))

  }, [productId])

  // To fetch the product details, set up an effect with the `useEffect` hook:
  const handleBack = () => {
    navigate('/')
  }

  return (
    <div className="ProductDetailsPage">
      {product &&
        <>
          <img src={product.image} alt={product.name} width={100} />
          <h4>{product.category}</h4>
          <h1>{product.title}</h1>
          <p>{product.description}</p>
          <p>{product.price}</p>

          <button className='btn' onClick={handleBack}>Back</button >
        </>
      }
    </div >
  )
}

export default ProductDetailsPage;
