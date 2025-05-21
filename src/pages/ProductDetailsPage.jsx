import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";


function ProductDetailsPage() {
  // The state variable `product` is currently an empty object {},
  // but you should use it to store the response from the Fake Store API (the product details).
  const [product, setProduct] = useState({});
  const navigate = useNavigate()

  const params = useParams()


  useEffect(() => {
    getData()
  }, [params])

  // The `productId` coming from the URL parameter is available in the URL path.
  // You can access it with the `useParams` hook from react-router-dom.

  const getData = async () => {

    try {
      const response = await axios.get(`https://fakestoreapi.com/products/${params.productId}`)
      setProduct(response.data)
    } catch (error) {
      console.log(error)
    }
  }
  // To fetch the product details, set up an effect with the `useEffect` hook:

  if (product === null) {
    return <div>No encontrado</div>
  }

  return (
    <div className="ProductDetailsPage">
    {/* Render product details here */}
            <img src={product.image} alt="ProductImage" className="imgList"/>
            <h1>{product.title}</h1>
            <p>{product.category}</p>
            <p>{product.price}</p>
            <p>{product.description}</p>
    </div>
  );
}

export default ProductDetailsPage;
