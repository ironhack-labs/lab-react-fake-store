import { useState, useEffect } from "react";
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios'



function ProductDetailsPage() {
  // The state variable `product` is currently an empty object {},
  // but you should use it to store the response from the Fake Store API (the product details).
  const [product, setProduct] = useState({});


  // The `productId` coming from the URL parameter is available in the URL path.
  // You can access it with the `useParams` hook from react-router-dom.
  const params = useParams()
  const navigate = useNavigate()

  // To fetch the product details, set up an effect with the `useEffect` hook:
  useEffect(() => {
    getData()
  }, [params.productId])

  async function getData() {
    try {
      const data = await axios.get(`https://fakestoreapi.com/products/${params.productId}`)
      setProduct(data.data)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="ProductDetailsPage">
      <img src={product.image} alt="" />
      <p className='product-badge'>{product.category}</p>
      <h1 className='product-detail-title'>{product.title}</h1>
      <div id='product-detail-desc-price'>
        <p className='product-detail-description'>{product.description}</p>
        <p className='product-detail-price'>${product.price}</p>
      </div>
      <button onClick={() => navigate('/')}>Back</button>
    </div>
  );
}

export default ProductDetailsPage;
