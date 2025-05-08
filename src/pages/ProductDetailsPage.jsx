import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";



function ProductDetailsPage() {
  // The state variable `product` is currently an empty object {},
  // but you should use it to store the response from the Fake Store API (the product details).
  const [product, setProduct] = useState({});
  //const [produtsDetails, setProductsDetails] = useState([])
  const params = useParams()
  //console.log(`maluuuuu`, useParams)

  useEffect(() => {
    getData()
  }, [params.productId])

  const getData = async () => {

    try {

      const response = await axios.get(`https://fakestoreapi.com/products/${params.productId}`)

      setProduct(response.data)

      console.log(response.data)

    } catch (error) {
      console.log(error)
    }
  }

  if (Object.keys(product).length === 0) {
    return <p>...Loading</p>
  }


  // The `productId` coming from the URL parameter is available in the URL path.
  // You can access it with the `useParams` hook from react-router-dom.

  // To fetch the product details, set up an effect with the `useEffect` hook:
  return (
    <div className="ProductDetailsPage">
      {/* Render product details here */}
      <img src={product.image} alt={product.title} style={{ width: "200px" }} />
      <p>{product.title}</p>
      <p>{product.category}</p>
      <p>{product.price}</p>
      <p>{product.description}</p>
    </div>
  );
}

export default ProductDetailsPage;
