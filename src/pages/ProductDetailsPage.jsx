import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";


function ProductDetailsPage() {
  // The state variable `product` is currently an empty object {},
  // but you should use it to store the response from the Fake Store API (the product details).
  const [product, setProduct] = useState({});
  const { productId } = useParams();

  const navigate = useNavigate();

  const getProduct = async () => {
    try {
      const response = await axios.get(`https://fakestoreapi.com/products/${productId}`);
      setProduct(response.data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getProduct()
  }, [productId])


  // The `productId` coming from the URL parameter is available in the URL path.
  // You can access it with the `useParams` hook from react-router-dom.


  // To fetch the product details, set up an effect with the `useEffect` hook:



  return (
    <div className="ProductDetailsPage">
    {product ? (<div className="flex flex-col items-center card">
        <img src={product.image} />
        <h2>{product.title}</h2>
        <p>${product.price}</p>
        <p>{product.description}</p>
        <p>{product.category}</p>
      </div>) : (<p>Fetching product</p>)}
      <button onClick={() => {navigate(-1)}}>Back</button>
      
    </div>
  );
}

export default ProductDetailsPage;
