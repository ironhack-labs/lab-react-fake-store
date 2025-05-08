import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";


function ProductDetailsPage() {
  // The state variable `product` is currently an empty object {},
  // but you should use it to store the response from the Fake Store API (the product details).
  const {productId} = useParams()
  const urlDetails = `https://fakestoreapi.com/products/${productId}`
  const [product, setProduct] = useState({});
  const getData = async ()=>{
    try {
      const data = await fetch(urlDetails)
      const details = await data.json()
      setProduct(details)
    }
    catch (error) {
      console.log(error)
    }
  }
 
  useEffect(()=>{
    getData()
    return ()=>{}
  }, [])

  // The `productId` coming from the URL parameter is available in the URL path.
  // You can access it with the `useParams` hook from react-router-dom.


  // To fetch the product details, set up an effect with the `useEffect` hook:



  return (
    <div className="ProductDetailsPage">
    {/* Render product details here */}
      <div className="detail-image-container">
        <img src={product.image} alt="" />
      </div>
      <div className="details-category">{product.category}</div>
      <p className="detail-title">{product.title}</p>
      <div className="detail-pareja">
        <p>{product.description}</p>
        <p className="detail-precio">${product.price}</p>
      </div>
      <hr className="detail-separador"/>
      <div className="detail-button-container">
        <Link to={'/'}>
        <button className="detail-button">Back</button>
        </Link>
      </div>
    </div>
  );
}

export default ProductDetailsPage;
